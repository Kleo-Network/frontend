import React from 'react'
import Carousel from './Carousel'
import { StatsCards } from './StatsCards'

const Memo: React.FC = () => {
  return (
    <div className="bg-grayblue-100 overflow-y-auto z-40 w-full h-full pt-[100px] flex justify-center items-start">
      <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] w-full p-6">
        {/* Carousel and Stat Cards */}
        <div className="grid grid-cols-[0.66fr_0.333fr] gap-5">
          <div>
            <Carousel />
          </div>
          <div>
            <StatsCards />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Memo
