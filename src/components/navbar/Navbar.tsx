import React from 'react'
import { ReactComponent as Logo } from '../../assets/images/kleoLogo.svg'
import { ReactComponent as Settings } from '../../assets/images/settings.svg'
import { ReactComponent as Notifications } from '../../assets/images/notifications.svg'
import { useNavigate, useLocation } from 'react-router-dom'

interface NavbarProps {
  avatar: {
    src: string
    alt: string
  }
}

enum Tab {
  HOME = 'Home',
  DASHBOARD = 'Dashboard',
  HISTORY = 'History',
  PRIVACY = 'Privacy'
}

const Navbar = ({ avatar }: NavbarProps) => {
  const [selectedTab, setSelectedTab] = React.useState(Tab.DASHBOARD)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (pathname === '/') {
      setSelectedTab(Tab.HOME)
    } else if (pathname === '/dashboard') {
      setSelectedTab(Tab.DASHBOARD)
    } else if (pathname === '/history') {
      setSelectedTab(Tab.HISTORY)
    } else if (pathname === '/privacy') {
      setSelectedTab(Tab.PRIVACY)
    }
  }, [pathname])

  return (
    <nav className="flex justify-between items-center px-24 w-full">
      <div className="flex items-center">
        <button
          className="flex flex-row items-center justify-center gap-2"
          onClick={() => {
            setSelectedTab(Tab.HOME)
            navigate('/')
          }}
        >
          <Logo className="w-8 h-8" />
          <h3 className="font-bold text-xl tracking-tighter">KLEO</h3>
        </button>
        <div className="flex items-center gap-1 ml-8">
          {Object.values(Tab).map((tab, i) => {
            return (
              tab !== Tab.HOME && (
                <button
                  key={i}
                  className={`px-3 py-2 text-gray-700 rounded-md font-medium text-base hover:bg-purple-50 ${
                    selectedTab === tab ? 'text-purple-700 bg-purple-100' : ''
                  }`}
                  onClick={() => {
                    setSelectedTab(tab)
                    navigate(`/${tab.toLowerCase()}`)
                  }}
                >
                  {tab}
                </button>
              )
            )
          })}
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
