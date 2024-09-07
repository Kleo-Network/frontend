import { ReactElement, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { UserContext } from './components/common/contexts/UserContext'
import Navbar from './shared/navbar/Navbar'

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
      <div className="flex flex-col font-inter h-full w-full items-center">
        <header className="flex w-full justify-center h-[68px] bg-white bg-opacity-[0.16] fixed top-0 backdrop-blur-md z-50">
          <div className="max-w-[1592px] flex w-full h-full items-center">
            <Navbar />
          </div>
        </header>

        <Routes>
          {/* <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </div>
    </UserContext.Provider>
  )
}

export default App
