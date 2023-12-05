import React, { useState, useEffect } from 'react'
import { ReactComponent as TickIcon } from '../../../assets/images/tick.svg'
import { ReactComponent as LineIcon } from '../../../assets/images/underline.svg'
import { ReactComponent as GreenArrow } from '../../../assets/images/greenArrow.svg'
import { ReactComponent as YellowArrow } from '../../../assets/images/yellowArrow.svg'
import { ReactComponent as RedArrow } from '../../../assets/images/redArrow.svg'
import BgLandscape from '../../../assets/images/bgLandscape.svg'
import BgPortrait from '../../../assets/images/bgPortrait.svg'
import { Card } from './Card'

export function HeroSection() {
  const [user, setUser] = useState({
    name: 'Zahir Mays',
    address: 'zahir.mays.escrowsays31212'
  })

  const [orientation, setOrientation] = useState('landscape')

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    if (mediaQuery.matches) {
      setOrientation('portrait')
    } else {
      setOrientation('landscape')
    }
  }, [])

  return (
    <div
      className={`flex flex-col items-center justify-center self-stretch font-inter bg-no-repeat ${
        orientation === 'landscape' ? 'bg-cover' : 'bg-contain'
      }`}
      style={{
        backgroundImage: `url(${
          orientation === 'landscape' ? BgLandscape : BgPortrait
        })`
      }}
    >
      <div className="background-pattern">
        <div className="mask">
          <div className="background-mask"></div>
        </div>
        <div className="content5">
          <div className="blocks">
            {/* TODO: Add loop to create the mesh to show profiles */}
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col lg:flex-row items-center justify-between gap-16 self-stretch lg:px-32 px-4 py-40 `}
      >
        <div className="flex flex-col items-center gap-8 px-8 py-24 lg:py-0">
          <div className="flex flex-col justify-center items-start gap-12">
            <div className="flex flex-col items-start gap-6 self-stretch relative">
              <div className="flex flex-col items-start gap-6 relative self-stretch text-gray-800 font-inter text-5xl font-normal md:text-7xl">
                <div className="flex flex-col self-end gap-1 absolute -translate-x-[200%] -translate-y-[200%]">
                  <div className="px-2 py-1 bg-green-600 rounded-sm shadow-sm text-sm text-white font-medium">
                    <span>Identity</span>
                  </div>
                  <GreenArrow className="h-7 w-7 fill-green-600 absolute -translate-x-full translate-y-full " />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <div className="flex items-start gap-[-17px]">
                    <span>
                      Your <span className="text-primary font-bold">Data</span>
                    </span>
                    <TickIcon className="w-6 h-6 md:w-11 md:h-12" />
                  </div>
                  <p>
                    Your <span className="text-primary font-bold">Groove</span>
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-shoreline md:text-6xl">
                    stay true to you
                  </div>
                  <LineIcon className="h-2 w-36 md:h-4 md:w-64 float-right" />
                </div>
              </div>
              <div className="flex flex-col self-end gap-1 absolute translate-x-[50%] lg:translate-x-[150%] -bottom-[50%] lg:bottom-0">
                <YellowArrow className="h-7 w-7 fill-orange-400 absolute -translate-x-full -translate-y-full " />
                <div className="px-2 py-1 bg-orange-400 rounded-sm shadow-sm text-sm text-white font-medium">
                  <span>Connect</span>
                </div>
              </div>
              <div className="font-inter text-xl font-normal text-gray-500">
                We use your browsing history to define you anonymously.
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center self-stretch text-center gap-3">
              <a
                href="/signup"
                className="flex items-center justify-center px-4 py-3 border rounded-lg text-white border-primary bg-primary shadow-sm"
              >
                <div className="text3">Launch KLEO</div>
              </a>
              <div className="flex items-center justify-center px-4 py-3 border rounded-lg border-gray-300 bg-white shadow-sm">
                <div className="text-gray-700">Install KLEO Plugin</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="relative">
            <div className="flex flex-col self-end gap-1 absolute -translate-x-[40%] lg:-translate-x-[110%] bottom-0 translate-y-[260%] lg:translate-y-[200%]">
              <RedArrow className="h-7 w-7 fill-red-500 absolute right-0 bottom-2 -translate-y-full" />
              <div className="px-2 py-1 bg-red-500 rounded-sm shadow-sm text-sm text-white font-medium">
                <span>Anonymous</span>
              </div>
            </div>
          </div>
          <Card name={user.name} address={user.address} />
        </div>
      </div>
    </div>
  )
}
