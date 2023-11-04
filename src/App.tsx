import { ReactElement, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Profile from './components/profile/Profile'
import Navbar from './components/navbar/Navbar'
import History from './components/history/History'
import { UserContext } from './components/common/contexts/UserContext'

function App(): ReactElement {
  const [user, setUser] = useState({
    name: 'John Doe',
    avatar: 'https://avatars.githubusercontent.com/u/47280571?v=4',
    address: '0x1234567890123456789012345678901234567890',
    kleo: 3232,
    userId: '05ecb209-8e92-4e2b-a2f0-c0d638f415ae'
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
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default App
