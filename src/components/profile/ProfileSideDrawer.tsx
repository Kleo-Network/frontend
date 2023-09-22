import React from 'react'
import { ReactComponent as PinIcon } from '../../assets/images/pin.svg'
import { ReactComponent as CloseIcon } from '../../assets/images/cross.svg'
import { ReactComponent as AddIcon } from '../../assets/images/add.svg'

interface ProfileSideDrawerProps {
  website: WebsiteProps | null
  onClose: () => void
}

interface WebsiteProps {
  name: string
  url: string
  icon: string
}

enum Tab {
  SUMMARY = 'Summary',
  HISTORY = 'History'
}

export default function ProfileSideDrawer({
  website,
  onClose
}: ProfileSideDrawerProps) {
  const [selectedTab, setSelectedTab] = React.useState(Tab.SUMMARY)

  return (
    website && (
      <div className="flex flex-col flex-1 font-inter">
        <header className="p-6 flex flex-row items-center self-stretch gap-4 relative">
          <div className="flex-none">
            <img src={website.icon} className="w-12 h-12" />
          </div>
          <div className="flex flex-col flex-1 items-start">
            <span className="font-medium text-xl text-gray-800">
              {website.name}
            </span>
            <a
              href={website.url}
              title={website.url}
              className="font-regular max-w-[250px] text-sm text-gray-500 hover:text-purple-700 overflow-hidden overflow-ellipsis whitespace-nowrap"
            >
              {website.url}
            </a>
          </div>
          <button className="px-3 py-2 flex flex-row items-center gap-2 shadow rounded-lg border border-gray-200">
            <PinIcon className="w-5 h-5" />
            <span className="text-sm text-gray-700 font-medium">Unpin</span>
          </button>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none absolute top-2 right-2"
            onClick={onClose}
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>

        <section className="flex flex-col">
          <ul
            className="flex list-none flex-row border-b border-gray-200 pl-0 text-sm font-medium text-gray-500"
            role="tablist"
            data-te-nav-ref
          >
            {Object.values(Tab).map((tab, i) => (
              <li key={i} role="presentation" className="flex text-center px-6">
                <a
                  className={`block py-2 cursor-pointer hover:text-purple-700 focus:outline-none ${
                    selectedTab === tab
                      ? 'text-purple-700 border-b-2 border-purple-700'
                      : ''
                  }`}
                  role="tab"
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>

          <div className="m-6">
            {selectedTab === Tab.SUMMARY && (
              <div className="data-[te-tab-active]:block" role="tabpanel">
                <div className="flex flex-col items-start justify-center gap-1 p-6 rounded-lg border border-gray-200">
                  <span className="text-base text-gray-700 font-medium">
                    Total visits{' '}
                    <span className="text-sm text-gray-400 font-regular">
                      (since 23rd June, 2023)
                    </span>
                  </span>
                  <span className="text-4xl text-gray-900 font-medium">
                    32,206
                  </span>
                </div>
                <div className="flex flex-col items-start justify-center gap-1 rounded-lg border border-gray-200 mt-4">
                  <div className="flex flex-row self-stretch justify-between items-center border-b border-gray-200 p-6">
                    <span className="text-base font-medium text-gray-900">
                      Favorites
                    </span>
                    <button className="flex flex-row gap-2 items-center justify-center rounded-lg border border-gray-200 shadow px-3 py-2">
                      <AddIcon className="w-5 h-5" />
                      <span className="text-sm text-gray-700 font-regular">
                        Add new
                      </span>
                    </button>
                  </div>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex flex-row items-center self-stretch p-4 gap-4 border-b border-gray-200"
                    >
                      <div className="text-left w-full">
                        <h4 className="text-sm font-medium text-gray-800">
                          Python Dash app problem over callback for multiple
                          filtering with dataframe
                        </h4>
                        <a
                          className="text-xs font-regular text-gray-400 flex overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-purple-700"
                          title="https://www.youtube.com/"
                          href="https://www.youtube.com/"
                          target="_blank"
                        >
                          https://stackoverflow.com/questions/77129583/python-dash-app-problem-over-callback-for-multiple-filtering-with-dataframe{' '}
                        </a>
                        <span className="text-xs font-regular text-gray-400 pt-2">
                          {29 + i} Visits
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedTab === Tab.HISTORY && (
              <div className="data-[te-tab-active]:block" role="tabpanel">
                Tab 2 content
              </div>
            )}
          </div>
        </section>
      </div>
    )
  )
}
