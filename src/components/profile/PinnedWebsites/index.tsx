import { ReactComponent as AddIcon } from '../../../assets/images/add.svg'
import SideDrawer from '../../common/SideDrawer'
import ProfileSideDrawer from '../SideDrawerContainer'
import PinnedWebsite from './PinnedWebsite'
import { useCallback, useState, useEffect, useContext } from 'react'
import { DndContext, DragEndEvent, closestCorners } from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy
} from '@dnd-kit/sortable'
import useFetch, { FetchStatus } from '../../common/hooks/useFetch'
import PinSkeletonLoader from './PinnedSectionLoader'
import ZeroState from '../../common/ZeroState'
import Modal from '../../common/Modal'
import { AddPinWebsite } from './AddPinWebsite'
import { useAuthContext } from '../../common/contexts/UserContext'
import { ReactComponent as AlertIcon } from '../../../assets/images/alert.svg'
import Alert from '../../common/Alerts'

export interface WebsiteProps {
  title: string
  domain: string
  icon: string
  id: string
  order: string
}

const API_URL = 'pinned/get_pinned_websites?user_id={userId}'

export default function PinnedWebsites() {
  const context = useAuthContext()
  const { status, data, error, fetchData } = useFetch<WebsiteProps[]>(
    makeApiUrl()
  )
  const [websites, setWebsites] = useState<WebsiteProps[] | null>(data)
  const [isModalOpen, setIsModalOpen] = useState(false)

  function makeApiUrl() {
    return API_URL.replace('{userId}', context!.user.userId)
  }

  useEffect(() => {
    setWebsites(data)
  }, [data])

  const [selectedWebsite, setSelectedWebsite] = useState<WebsiteProps | null>(
    null
  )

  const handlePin = () => {
    setIsModalOpen(false)
    fetchData(makeApiUrl())
  }

  const handleUnPin = () => {
    setSelectedWebsite(null)
    fetchData(makeApiUrl())
  }

  const handleDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      if (active.id !== over?.id) {
        const overIndex = websites?.findIndex((w) => w.title === over?.id) || 0
        const activeIndex =
          websites?.findIndex((w) => w.title === active.id) || 0
        const newWebsites = arrayMove(websites || [], activeIndex, overIndex)
        setWebsites(newWebsites)
      }
    },
    [websites]
  )

  const closeDrawer = useCallback(() => {
    setSelectedWebsite(null)
  }, [selectedWebsite])

  return (
    <div className="flex flex-col flex-1 self-stretch rounded-lg border border-gray-200">
      <header className="flex flex-row gap-2 justify-between items-center px-6 py-5 font-medium border-b border-gray-200">
        <div className="flex flex-row items-center gap-2">
          <h3 className="text-lg text-gray-900 flex-grow-0">Pinned Websites</h3>
          <span className="text-xs text-purple-700 bg-purple-100 py-[2px] px-2 rounded-2xl">
            Showcase
          </span>
        </div>
        <button
          className="flex flex-row gap-2 items-center shadow border border-gray-200 rounded-lg py-2 px-3 hover:bg-gray-50 active:bg-gray-100"
          onClick={() => setIsModalOpen(true)}
        >
          <AddIcon className="w-5 h-5 stroke-gray-700" />
          <span className="text-sm text-gray-700">Add new</span>
        </button>
      </header>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddPinWebsite onPinHandler={handlePin} />
      </Modal>

      {status === FetchStatus.LOADING && <PinSkeletonLoader />}
      {(!websites || websites?.length === 0) &&
        status === FetchStatus.SUCCESS && <ZeroState />}
      {websites && websites.length > 0 && status === FetchStatus.SUCCESS && (
        <section className="flex flex-wrap items-center justify-start gap-x-2 gap-y-4 p-5">
          <DndContext
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={websites.map((w) => w.title)}
              strategy={rectSortingStrategy}
            >
              {websites.map((website) => (
                <PinnedWebsite
                  key={website.title}
                  isSelected={selectedWebsite?.title === website.title}
                  onClick={() => setSelectedWebsite(website)}
                  website={website}
                />
              ))}
            </SortableContext>
          </DndContext>
        </section>
      )}
      {status === FetchStatus.ERROR && (
        <div className="m-3">
          <Alert
            type="danger"
            message="Could not fetch the data, please try again later."
            icon={<AlertIcon className="w-5 h-5 fill-red-200 stroke-red-600" />}
          />
        </div>
      )}
      <SideDrawer isOpen={!!selectedWebsite} onClose={closeDrawer}>
        <ProfileSideDrawer
          website={selectedWebsite}
          onClose={closeDrawer}
          handleUnpin={handleUnPin}
        />
      </SideDrawer>
    </div>
  )
}
