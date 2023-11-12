import { ReactElement, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Profile from './components/profile/Profile'
import Navbar from './components/navbar/Navbar'
import History from './components/history/History'
import { UserContext } from './components/common/contexts/UserContext'
import { Home } from './components/home'

function App(): ReactElement {
  const [user, setUser] = useState({
    name: 'John Doe',
    avatar: 'https://avatars.githubusercontent.com/u/47280571?v=4',
    address: '0x1234567890123456789012345678901234567890',
    kleo: 3232,
    userId: '4c5fce3c-38aa-4199-b72e-73f195c8ab6d'
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="h-full w-full">
        <div className="flex flex-col font-inter">
          <header className="flex flex-row self-stretch  items-center h-[72px] border-b border-gray-200">
            <Navbar avatar={{ src: user.avatar, alt: 'Profile' }} />
          </header>
          <Routes>
            <Route path="/dashboard" element={<Profile />} />
            <Route path="/history" element={<History />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default App
