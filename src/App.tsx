import { ReactElement, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { UserContext } from './components/common/contexts/UserContext'
import Navbar from './shared/navbar/Navbar'
import { HomeComponent } from './pages/home/Home'
import { About } from './pages/about'
import Memo from './pages/memo'

function App(): ReactElement {
  const [user, setUser] = useState({
    name: 'John Doe',
    avatar: 'https://avatars.githubusercontent.com/u/47280571?v=4',
    address: '0x57e7b7f1c1a8782ac9d3c4d730051bd60068aeee',
    kleo: 3232,
    userId: '0x57e7b7f1c1a8782ac9d3c4d730051bd60068aeee'
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="selection:bg-primary-600 selection:text-white flex flex-col font-inter h-full w-full items-center">
        <header className="flex w-full justify-center h-[44px] lg:h-[62px] xl:h-[62px] mac:h-[66px] 2xl:h-[88px] bg-[#111323] backdrop-blur-lg z-50 fixed pointer-events-none">
          <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] flex w-full h-full items-center">
            <Navbar />
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/privacy" element={<PrivacyPolicy />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </UserContext.Provider>
  )
}

export default App
