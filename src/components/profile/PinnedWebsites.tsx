import { ReactComponent as AddIcon } from '../../assets/images/add.svg'
import SideDrawer from '../common/SideDrawer'
import ProfileSideDrawer from './ProfileSideDrawer'
import { useCallback, useState } from 'react'

interface PinnedWebsitesProps {
  websites: WebsiteProps[]
}

interface WebsiteProps {
  name: string
  url: string
  icon: string
}

export default function PinnedWebsites({ websites }: PinnedWebsitesProps) {
  const [selectedWebsite, setSelectedWebsite] = useState<WebsiteProps | null>(
    null
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
        {websites.map(({ icon, name, url }, i) => (
          <button
            key={i}
            className={`flex flex-1 items-center p-4 gap-4 rounded-xl border border-gray-200 max-w-[272px] ${
              selectedWebsite?.url === url
                ? 'border-purple-700 shadow-md'
                : 'hover:bg-gray-50'
            }`}
            onClick={() => setSelectedWebsite({ icon, name, url })}
          >
            <div className="flex flex-row flex-none items-center justify-center w-8 h-8 rounded-full">
              <img src={icon} className="w-8 h-8" />
            </div>
            <div className="text-left w-full">
              <h4 className="text-sm font-medium text-gray-800">{name}</h4>
              <a
                className="text-xs font-regular text-gray-500 flex max-w-[150px] overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-purple-700"
                title={url}
                href={url}
                target="_blank"
              >
                {url}
              </a>
            </div>
          </button>
        ))}
      </section>
      <SideDrawer isOpen={!!selectedWebsite} onClose={closeDrawer}>
        <ProfileSideDrawer website={selectedWebsite} onClose={closeDrawer} />
      </SideDrawer>
    </div>
  )
}
