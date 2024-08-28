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

const Navbar = ({ avatar }: NavbarProps) => {
  return (
    <nav
      className="relative flex w-full flex-wrap items-center justify-between py-2 border-gray-200 bg-white text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 lg:py-3"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-12">
        {/* <!-- Logo --> */}
        <a
          className="my-2 gap-2 flex items-center justify-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
          href="/"
        >
          <Logo className="w-8 h-8" />
          <h3 className="font-bold text-xl">KLEO NETWORK</h3>
        </a>
        <div className="flex items-center gap-1 ml-8">
          <button className="px-3 py-2 text-gray-700 rounded-md font-medium text-base hover:bg-purple-100">
            <a href="/degen">about</a>
          </button>
          <button className="px-3 py-2 hover:bg-purple-100 rounded-md font-medium text-base">
            <a href="https://docs.kleo.network/" target="_blank">docs</a>
          </button>
        </div>
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
          {/* <!-- Right elements --> */}
        </div>
        <div className="flex items-center">
          <div></div>
          <a
            href="https://www.app.kleo.network"
            className="flex items-center justify-center px-4 py-3 border rounded-lg text-white border-primary bg-primary shadow-sm"
          >
            <div className="text3">Launch</div>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
