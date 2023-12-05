import { ReactElement, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Profile from './components/profile/Profile'
import Navbar from './components/navbar/Navbar'
import History from './components/history/History'
import { UserContext } from './components/common/contexts/UserContext'
import { Home } from './components/home'
import PrivacyPolicy from './components/home/sections/PrivacyPolicy'
import SignUp from './components/signup'

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
      <div className="h-full w-full">
        <div className="flex flex-col font-inter self-stretch h-full">
          <header className="flex flex-row self-stretch items-center">
            <Navbar avatar={{ src: user.avatar, alt: 'Profile' }} />
          </header>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/history" element={<History />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default App
