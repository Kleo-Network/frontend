import { HeroSection } from './HeroSection'
import DashboardImage from '../../assets/images/home/KleoDashboard.png'
import React, { useState } from 'react'
import { HowKleoWorksSection } from './HowKleoWorksSection'
import { ReactComponent as GridFirstImage } from '../../assets/images/home/grid_first_image.svg'

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

      <div className="flex justify-center relative -top-[50px] lg:-top-[150px] xl:-top-[80px] mac:-top-[90px] 2xl:-top-[110px]">
        <img
          src={DashboardImage}
          alt="Kleo Dashboard"
          className="max-w-4xl w-[60%] h-auto z-50 2xl:w-[60%] 2xl:max-w-5xl"
          style={{
            transform: `scale(${scale})`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>

      <HowKleoWorksSection />

      <section className="w-full bg-gray-900 flex justify-center rounded-[50px] py-[100px] text-white">
        <div className="max-w-[1050px] w-full">
          <div className="grid grid-cols-2 grid-rows-3 gap-[18px]">
            <div className=" flex flex-col justify-center items-start">
              <div className="font-montserrat font-semibold text-[38px]">
                <div className="">Own A Stake For</div>
                <div className="">Your Data</div>
              </div>
              <div className="[text-wrap: balance] font-roboto font-light text-xs">
                <p>
                  Machine Learning Models / Analytics Houses want this data.
                  Kleo and VANA DAO will come up with a proof of contribution
                  which will then decide on user contribution tokens/$ amount
                  that will be shared based on the requirement. Rest assured no
                  personally identifiable information will be leaked.
                </p>
                <p>
                  We will be using snapshot for Kleo token holders to manage
                  conversation between data requirement and data liquidity
                  provider.
                </p>
              </div>
            </div>
            <div className="">
              <GridFirstImage className="w-full h-auto" />
            </div>

            <div className="">
              <img
                src="path-to-your-image.jpg"
                alt="Description"
                className="w-full h-auto"
              />
            </div>
            <div className="">x</div>

            <div className="">x</div>
            <div className="">
              <img
                src="path-to-your-image.jpg"
                alt="Description"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
