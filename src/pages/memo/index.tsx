import React from 'react'
import Carousel from './Carousel'

const Memo: React.FC = () => {
  return (
    <div className="bg-grayblue-100 overflow-y-auto z-40 w-full h-full pt-[100px] flex justify-center items-start">
      <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] w-full">
        <div className="w-3/4 p-4 rounded-lg bg-grayblue-200">
          <Carousel />
        </div>
      </div>
    </div>
  )
}

export default Memo
