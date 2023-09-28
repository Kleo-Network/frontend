import React, { ReactElement, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Profile from './components/profile/Profile'
import Navbar from './components/navbar/Navbar'
import History from './components/history/History'

function App(): ReactElement {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col font-inter">
        <header className="flex flex-row self-stretch  items-center h-[72px] border-b border-gray-200">
          <Navbar avatar={{ src: '' /*user.avatar*/, alt: 'Profile' }} />
        </header>
        <Routes>
          <Route path="/dashboard" element={<Profile />} />
          <Route path="/history" element={<History />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
