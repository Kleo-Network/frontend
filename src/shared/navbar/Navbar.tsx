import { useState } from 'react'
import { ReactComponent as GrayLogo } from '../../assets/images/navbar/kleoLogoGray.svg'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  // Get current path from useLocation hook
  const location = useLocation()
  const { pathname } = location

  // State to toggle the mobile menu
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center px-9 py-4 w-full">
      {/* LEFT : Logo + Name */}
      <a className="flex w-max justify-start items-center gap-4" href="/">
        <GrayLogo className="size-[55px]" />
        <h3 className="font-bold text-[34px] text-white">KLEO</h3>
      </a>

      {/* Hamburger Menu (Visible on small screens only) */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="flex items-center text-white focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} // Toggle between X and hamburger
            />
          </svg>
        </button>
      </div>

      {/* RIGHT : NavLinks + LaunchBtn (hidden on small screens) */}
      <div className="hidden lg:flex w-max justify-end items-center gap-10 font-regular text-lg text-white">
        <a
          className={`hover:underline hover:underline-offset-4 ${
            pathname === '/' ? 'font-bold' : ''
          }`}
          href="/"
        >
          Home
        </a>
        <a
          className={`hover:underline hover:underline-offset-4 ${
            pathname === '/about' ? 'font-bold' : ''
          }`}
          href="/about"
        >
          About
        </a>
        <a
          className="hover:underline hover:underline-offset-4"
          href="https://docs.kleo.network/"
          target="_blank"
        >
          Docs
        </a>
        <a className="hover:underline hover:underline-offset-4" href="#">
          Twitter ↗
        </a>
        <a className="hover:underline hover:underline-offset-4" href="#">
          Discord ↗
        </a>
        <a
          className="h-[56px] px-[28px] py-[14px] rounded-lg bg-white cursor-pointer hover:bg-white/50 font-semibold text-lg text-primary-800"
          href="https://www.app.kleo.network"
        >
          Launch
        </a>
      </div>

      {/* Mobile Menu (Visible when menu is open) */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:hidden absolute top-full left-0 w-full flex flex-col items-center bg-gray-800 text-white p-6 space-y-4`}
      >
        <a
          className={`block hover:underline ${
            pathname === '/' ? 'font-bold' : ''
          }`}
          href="/"
        >
          Home
        </a>
        <a
          className={`block hover:underline ${
            pathname === '/about' ? 'font-bold' : ''
          }`}
          href="/about"
        >
          About
        </a>
        <a
          className="block hover:underline"
          href="https://docs.kleo.network/"
          target="_blank"
        >
          Docs
        </a>
        {/* TODO: Update bellow Links */}
        <a className="block hover:underline" href="#">
          Twitter ↗
        </a>
        <a className="block hover:underline" href="#">
          Discord ↗
        </a>
        <a
          className="block h-[56px] px-10 py-[14px] rounded-lg bg-white cursor-pointer hover:bg-white/50 font-semibold text-lg text-primary-800"
          href="https://www.app.kleo.network"
        >
          Launch
        </a>
      </div>
    </nav>
  )
}

export default Navbar
