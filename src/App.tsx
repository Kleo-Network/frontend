import { ReactElement, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { UserContext } from './components/common/contexts/UserContext'
import { Home } from './components/home'
import PrivacyPolicy from './components/home/sections/PrivacyPolicy'
import { Degen } from './components/degen/index'
import Navbar from './components/shared/navbar/Navbar'

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
      <div className="flex flex-col font-inter h-full w-full items-center bg-gray-900">
        <header className="flex w-full justify-center h-[88px] bg-white bg-opacity-[0.16] fixed top-0 backdrop-blur-md">
          <div className="max-w-[1592px] flex w-full h-full items-center">
            <Navbar />
          </div>
        </header>

        {/* <Routes>
            <Route path="/degen" element={<Degen />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes> */}
      </div>
    </UserContext.Provider>
  )
}

export default App
