import { useState } from 'react'
import { ReactComponent as GrayLogo } from '../../assets/images/navbar/kleoLogoGray.svg'
import { ReactComponent as Hamburger } from '../../assets/images/navbar/hamburger.svg'
import { ReactComponent as Cross } from '../../assets/images/navbar/cross.svg'
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
        <GrayLogo width={'45px'} height={'45px'} />
        <h3 className="font-bold text-2xl text-white">KLEO</h3>
      </a>

      {/* Hamburger Menu (Visible on small screens only) */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="flex items-center text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <Cross className="w-5 h-5" />
          ) : (
            <Hamburger className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* RIGHT : NavLinks + LaunchBtn (hidden on small screens) */}
      <div className="hidden lg:flex w-max justify-end items-center gap-10 font-regular text-base text-white">
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
          className="h-11 px-[14px] py-[10px] rounded-lg bg-white cursor-pointer hover:bg-white/50 font-semibold text-base text-primary-800"
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
          className="block h-[48px] px-5 py-3 rounded-lg bg-white cursor-pointer hover:bg-white/50 font-semibold text-base text-primary-800"
          href="https://www.app.kleo.network"
        >
          Launch
        </a>
      </div>
    </nav>
  )
}

export default Navbar
