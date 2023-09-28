import React from 'react'
import PinnedWebsites from './PinnedWebsites'
import { ReactComponent as ShareSvg } from '../../assets/images/share.svg'
import ProfileCard from './ProfileCard'
import BrowsingHistory from './BrowsingHistory'
import Modal from '../common/Modal'
import Onboarding from './Onboarding'

export default function Profile() {
  const [user, setUser] = React.useState({
    name: 'John Doe',
    avatar: 'https://avatars.githubusercontent.com/u/47280571?v=4',
    address: '0x1234567890123456789012345678901234567890',
    kleo: 3232,
    pinnedWebsites: [
      {
        name: 'Github',
        url: 'https://github.com',
        icon: 'https://github.githubassets.com/favicons/favicon.png'
      },
      {
        name: 'Youtube',
        url: 'https://youtube.com',
        icon: 'https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png'
      },
      {
        name: 'Confluence',
        url: 'https://www.atlassian.com/software/confluence',
        icon: 'https://www.atlassian.com/favicon.ico'
      },
      {
        name: 'Facebook',
        url: 'https://facebook.com',
        icon: 'https://facebook.com/favicon.ico'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com',
        icon: 'https://twitter.com/favicon.ico'
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com',
        icon: 'https://instagram.com/favicon.ico'
      }
    ],
    graphData: [
      {
        name: 'Mon',
        uv: 4000,
        pv: 2400,
        amt: 2400
      },
      {
        name: 'Tue',
        uv: 3000,
        pv: 1398,
        amt: 2210
      },
      {
        name: 'Wed',
        uv: 2000,
        pv: 9800,
        amt: 2290
      },
      {
        name: 'Thu',
        uv: 2780,
        pv: 3908,
        amt: 2000
      },
      {
        name: 'Fri',
        uv: 1890,
        pv: 4800,
        amt: 2181
      },
      {
        name: 'Sat',
        uv: 2390,
        pv: 3800,
        amt: 2500
      },
      {
        name: 'Sun',
        uv: 3490,
        pv: 4300,
        amt: 2100
      }
    ]
  })

  const [isModalOpen, setIsModalOpen] = React.useState(true)

  return (
    <section>
      <div className="flex flex-col items-start px-24 py-8">
        <header className="flex flex-row items-center justify-between self-stretch">
          <h3 className="text-3xl font-medium text-gray-900">
            Welcome back, {user.name}!
          </h3>
          <button className="flex flex-row border rounded-lg px-4 py-2 shadow">
            <ShareSvg className="w-5 h-5 mr-2" />
            <span className="text-sm">Share</span>
          </button>
        </header>
        <div className="flex flex-col items-start justify-between py-8 gap-6 md:flex-row">
          <PinnedWebsites websites={user.pinnedWebsites} />
          <ProfileCard user={user} />
        </div>
        <BrowsingHistory graphData={user.graphData} />
        <Modal
          isOpen={isModalOpen}
          hideCloseButton={false}
          onClose={() => setIsModalOpen(false)}
        >
          <Onboarding />
        </Modal>
      </div>
    </section>
  )
}
