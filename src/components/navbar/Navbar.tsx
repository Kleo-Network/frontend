import React from 'react'
import { ReactComponent as Logo } from '../../assets/images/kleoLogo.svg'
import { ReactComponent as Settings } from '../../assets/images/privacy.svg'
import { ReactComponent as Notifications } from '../../assets/images/logout.svg'
import { ReactComponent as Hamburger } from '../../assets/images/hamburger.svg'
import { useLocation } from 'react-router-dom'
import { Collapse, Dropdown, initTE } from 'tw-elements'

initTE({ Collapse, Dropdown })
interface NavbarProps {
  avatar: {
    src: string
    alt: string
  }
}

enum Tab {
  HOME = 'Home',
  PROFILE = 'Profile',
  HISTORY = 'History'
}

const Navbar = ({ avatar }: NavbarProps) => {
  const [selectedTab, setSelectedTab] = React.useState(Tab.PROFILE)
  const { pathname } = useLocation()

  React.useEffect(() => {
    if (pathname === '/') {
      setSelectedTab(Tab.HOME)
    } else if (pathname === '/profile') {
      setSelectedTab(Tab.PROFILE)
    } else if (pathname === '/history') {
      setSelectedTab(Tab.HISTORY)
    } else if (pathname === '/privacy') {
      setSelectedTab('Privacy')
    }
  }, [pathname])

  return (
    <nav
      className="relative flex w-full flex-wrap items-center justify-between py-2  border-b border-gray-200 bg-white text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 lg:py-3"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-12">
        {/* <!-- Logo --> */}
        <a
          className="my-2 gap-2 flex items-center justify-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
          href="/"
        >
          <Logo className="w-8 h-8" />
          <h3 className="font-bold text-xl">KLEO</h3>
        </a>
        {/* <!-- Hamburger button for mobile view --> */}
        <button
          className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="[&>svg]:w-7">
            <Hamburger className="w-6 h-6" />
          </span>
        </button>

        {/* <!-- Collapsible navigation container --> */}
        <div
          className="!visible mt-2 ml-4 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
          id="navbarSupportedContent"
          data-te-collapse-item
        >
          <ul
            className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
            data-te-navbar-nav-ref
          >
            {Object.values(Tab).map((tab, i) => {
              return (
                tab !== Tab.HOME && (
                  <li
                    key={i}
                    className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                    data-te-nav-item-ref
                  >
                    <a
                      className={`px-3 py-2 text-gray-700 rounded-md font-medium text-base hover:bg-purple-50 ${
                        selectedTab === tab
                          ? 'text-purple-700 bg-purple-100'
                          : ''
                      }`}
                      href={`/${
                        tab === Tab.PROFILE
                          ? 'profile/0x57e7b7f1c1a8782ac9d3c4d730051bd60068aeee'
                          : tab.toLowerCase()
                      }`}
                      data-te-nav-link-ref
                    >
                      {tab}
                    </a>
                  </li>
                )
              )
            })}
          </ul>
          {/* <!-- Right elements --> */}
          <div className="flex items-center">
            <a
              href="/privacy"
              data-te-ripple-init
              className="p-2 mr-1 stroke-gray-500 hover:stroke-purple-700 hover:bg-purple-100 rounded-md"
            >
              <Settings className="w-5 h-5 stroke-current" />
            </a>
            <a
              data-te-ripple-init
              className="p-2 hover:bg-purple-100 stroke-gray-500 hover:stroke-purple-700 rounded-md"
            >
              <Notifications className="w-5 h-5 stroke-current" />
            </a>
            {/* <button className="p-2 rounded-full">
              <img
                src={avatar.src}
                alt={avatar.alt}
                className="ml-4 w-10 h-10 rounded-full"
              />
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
