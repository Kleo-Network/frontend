import React from 'react'
import PinnedWebsites from './PinnedWebsites'
import { ReactComponent as ShareSvg } from '../../assets/images/share.svg'
import ProfileCard from './ProfileCard'
import BrowsingHistory from './BrowsingHistory/BrowsingHistory'
import Modal from '../common/Modal'
import Onboarding from './Onboarding'

export default function Profile() {
  const user = {
    name: 'John Doe',
    avatar: 'https://avatars.githubusercontent.com/u/47280571?v=4',
    address: '0x1234567890123456789012345678901234567890',
    kleo: 3232
  }

  const [isModalOpen, setIsModalOpen] = React.useState(true)

  return (
    <section>
      <div className="flex flex-col items-start px-24 py-8">
        <header className="flex flex-row items-center justify-between self-stretch">
          <h3 className="text-3xl font-medium text-gray-900">
            Welcome back, {user.name}!
          </h3>
          <div className="flex flex-row gap-2">
            <button className="flex flex-row border rounded-lg px-4 py-2 shadow">
              <ShareSvg className="w-5 h-5 mr-2" />
              <span className="text-sm">Share</span>
            </button>
            <button className="flex flex-row border rounded-lg px-4 py-2 shadow">
              <ShareSvg className="w-5 h-5 mr-2" />
              <span className="text-sm">Collect</span>
            </button>
          </div>
        </header>
        <div className="flex flex-col w-full items-start justify-between py-8 gap-6 md:flex-row">
          <PinnedWebsites />
          <ProfileCard user={user} />
        </div>
        <BrowsingHistory />
        <Modal
          isOpen={isModalOpen}
          hideCloseButton={false}
          onClose={() => setIsModalOpen(false)}
        >
          <Onboarding closeModal={() => setIsModalOpen(false)} />
        </Modal>
      </div>
    </section>
  )
}
