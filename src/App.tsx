import React, { ReactElement, useState } from 'react'
import Profile from './components/profile-v2/Profile'

function App(): ReactElement {
  // const [count, setCount] = useState(0)

  return (
    <div className="h-full w-full">
      <Profile />
    </div>
  )
}

export default App
