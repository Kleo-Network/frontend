import React from 'react'
import { ReactComponent as PinIcon } from '../../assets/images/pin.svg'
import { ReactComponent as CloseIcon } from '../../assets/images/cross.svg'
import {
  CurrentBrowserHistory,
  SelectedHistoryTabData
} from './SelectedHistoryTabData'
import { SummaryTabData } from './SummaryTabData'

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

export const AreaChartData = [
  {
    name: 'Jan',
    amt: 2400
  },
  {
    name: 'Feb',
    amt: 2210
  },
  {
    name: 'Mar',
    amt: 2290
  },
  {
    name: 'Apr',
    amt: 2000
  },
  {
    name: 'May',
    amt: 2181
  },
  {
    name: 'Jun',
    amt: 2500
  }
]

const websiteHistory: CurrentBrowserHistory = {
  today: [
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      time: '12:00 PM',
      visits: 10
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      time: '12:00 PM',
      visits: 10
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      time: '12:00 PM',
      visits: 10
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      time: '12:00 PM',
      visits: 10
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      time: '12:00 PM',
      visits: 10
    }
  ],
  yesterday: [
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      time: '12:00 PM',
      visits: 10
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      time: '12:00 PM',
      visits: 10
    }
  ],
  '2 days ago': [
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      time: '12:00 PM',
      visits: 10
    }
  ]
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
            <CloseIcon className="w-5 h-5" />
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
            {selectedTab === Tab.SUMMARY && <SummaryTabData />}
            {selectedTab === Tab.HISTORY && (
              <SelectedHistoryTabData
                areaChartData={AreaChartData}
                currentBrowserHistory={websiteHistory}
              />
            )}
          </div>
        </section>
      </div>
    )
  )
}
