import { ReactComponent as AddIcon } from '../../../assets/images/add.svg'
import SideDrawer from '../../common/SideDrawer'
import ProfileSideDrawer from '../ProfileSideDrawer'
import PinnedWebsite from './PinnedWebsite'
import { useCallback, useState } from 'react'
import { DndContext, DragEndEvent, closestCorners } from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy
} from '@dnd-kit/sortable'

interface PinnedWebsitesProps {
  websites: WebsiteProps[]
  setWebsites: (websites: WebsiteProps[]) => void
}

export interface WebsiteProps {
  name: string
  url: string
  icon: string
}

export default function PinnedWebsites({
  websites,
  setWebsites
}: PinnedWebsitesProps) {
  const [selectedWebsite, setSelectedWebsite] = useState<WebsiteProps | null>(
    null
  )

  const handleDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      if (active.id !== over?.id) {
        const overIndex = websites.findIndex((w) => w.name === over?.id)
        const activeIndex = websites.findIndex((w) => w.name === active.id)
        const newWebsites = arrayMove(websites, activeIndex, overIndex)
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
            New
          </span>
        </div>
        <button className="flex flex-row gap-2 items-center shadow border border-gray-200 rounded-lg py-2 px-3">
          <AddIcon className="w-5 h-5" />
          <span className="text-sm text-gray-700">Add new</span>
        </button>
      </header>

      <section className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4 p-5">
        <DndContext
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={websites.map((w) => w.name)}
            strategy={rectSortingStrategy}
          >
            {websites.map((website, i) => (
              <PinnedWebsite
                key={i}
                isSelected={selectedWebsite?.url === website.url}
                onClick={() => setSelectedWebsite(website)}
                website={website}
              />
            ))}
          </SortableContext>
        </DndContext>
      </section>
      <SideDrawer isOpen={!!selectedWebsite} onClose={closeDrawer}>
        <ProfileSideDrawer website={selectedWebsite} onClose={closeDrawer} />
      </SideDrawer>
    </div>
  )
}
