import React from 'react'
import { ReactComponent as Logo } from '../../assets/images/kleoLogo.svg'
import { ReactComponent as Settings } from '../../assets/images/settings.svg'
import { ReactComponent as Notifications } from '../../assets/images/notifications.svg'

interface NavbarProps {
  avatar: {
    src: string
    alt: string
  }
}

const Navbar = ({ avatar }: NavbarProps) => {
  return (
    <nav className="flex justify-between items-center px-24 w-full">
      <div className="flex items-center">
        <div className="flex flex-row items-center justify-center gap-2">
          <Logo className="w-8 h-8" />
          <h3 className="font-bold text-xl tracking-tighter">KLEO</h3>
        </div>
        <div className="flex items-center gap-1 ml-8">
          <button className="px-3 py-2 text-gray-700 rounded-md font-medium text-base hover:bg-purple-100">
            Home
          </button>
          <button className="px-3 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-md font-medium text-base">
            Dashboard
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <button className="p-2 mr-1 stroke-gray-500 hover:stroke-purple-700 hover:bg-purple-100 rounded-md">
          <Settings className="w-5 h-5 stroke-current" />
        </button>
        <button className="p-2 hover:bg-purple-100 stroke-gray-500 hover:stroke-purple-700 rounded-md">
          <Notifications className="w-5 h-5 stroke-current" />
        </button>
        <button className="p-2 rounded-full">
          <img
            src={avatar.src}
            alt={avatar.alt}
            className="ml-4 w-10 h-10 rounded-full"
          />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
