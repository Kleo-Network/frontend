import React, { useState, useContext } from 'react'
import { ReactComponent as PinIcon } from '../../../assets/images/pin.svg'
import { ReactComponent as CloseIcon } from '../../../assets/images/cross.svg'
import { SelectedHistoryTabData } from './SelectedHistoryTabData'
import { SummaryTabData } from './SummaryTabData'
import useFetch from '../../common/hooks/useFetch'
import { UserContext } from '../../common/contexts/UserContext'

interface ProfileSideDrawerProps {
  website: WebsiteProps | null
  onClose: () => void
  handleUnpin: () => void
}

export interface WebsiteProps {
  title: string
  domain: string
  icon: string
  id: string
  order: string
}

enum Tab {
  SUMMARY = 'Summary',
  HISTORY = 'History'
}

const UNPIN_URL = 'pinned/remove_pinned_website'

const ProfileSideDrawer = React.memo(
  ({ website, onClose, handleUnpin }: ProfileSideDrawerProps) => {
    const { user } = useContext(UserContext)
    const [selectedTab, setSelectedTab] = useState(Tab.SUMMARY)
    const { fetchData } = useFetch<WebsiteProps[]>()

    const onUnpin = () => {
      fetchData(UNPIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...website,
          order: 0,
          user_id: user.userId,
          title: website!.domain,
          pinned: false
        }),
        onSuccessfulFetch(data) {
          handleUnpin()
        }
      })
    }

    return (
      website && (
        <div className="flex flex-col flex-1 font-inter">
          <header className="p-6 flex flex-row items-center self-stretch gap-4 relative">
            <div className="flex-none">
              <img src={website.icon} className="w-12 h-12" />
            </div>
            <div className="flex flex-col flex-1 items-start">
              <span className="font-medium text-xl text-gray-800">
                {website.title}
              </span>
              <a
                href={website.domain}
                title={website.domain}
                className="font-regular max-w-[250px] text-sm text-gray-500 hover:text-purple-700 hover:underline overflow-hidden overflow-ellipsis whitespace-nowrap"
              >
                {website.domain}
              </a>
            </div>
            <button
              onClick={onUnpin}
              className="px-3 py-2 flex flex-row items-center gap-2 shadow rounded-lg border border-gray-200"
            >
              <PinIcon className="w-5 h-5 stroke-gray-700" />
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
                <li
                  key={i}
                  role="presentation"
                  className="flex text-center px-6"
                >
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
                <SummaryTabData domain={website.domain} />
              )}
              {selectedTab === Tab.HISTORY && (
                <SelectedHistoryTabData domain={website.domain} />
              )}
            </div>
          </section>
        </div>
      )
    )
  }
)

export default ProfileSideDrawer
