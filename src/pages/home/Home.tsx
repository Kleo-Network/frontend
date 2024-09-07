import { HeroSection } from './HeroSection'
import DashboardImage from '../../assets/images/home/KleoDashboard.png'
import React, { useState } from 'react'
import { HowKleoWorksSection } from './HowKleoWorksSection'

// Constants for initial and maximum scale
const INITIAL_SCALE = 1
const MAX_SCALE = 1.5

export const HomeComponent = () => {
  const [scale, setScale] = useState(INITIAL_SCALE) // State to manage the scale

  const listenScrollEvent = React.useCallback((event: any) => {
    const scrollTop = event.target.scrollTop
    // Calculate the new scale based on the scroll position
    let newScale =
      INITIAL_SCALE + (scrollTop / 500) * (MAX_SCALE - INITIAL_SCALE)
    // Ensure the scale doesn't exceed MAX_SCALE
    if (newScale > MAX_SCALE) newScale = MAX_SCALE
    // Update the scale state
    setScale(newScale)
  }, [])

  return (
    <div
      className="w-full bg-[#F5F5FA] overflow-y-auto overflow-x-hidden z-40"
      onScroll={listenScrollEvent.bind(this)}
    >
      {/* Hero Section */}
      <HeroSection />

      <div className="flex justify-center relative -top-48">
        <img
          src={DashboardImage}
          alt="Kleo Dashboard"
          className=" max-w-4xl w-[60%] h-auto z-50"
          style={{
            transform: `scale(${scale})`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>

      <HowKleoWorksSection />
    </div>
  )
}
