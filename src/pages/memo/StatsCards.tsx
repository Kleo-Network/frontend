import rewardImage from '../../assets/images/reward.png'
import PurpleGridBg from '../../assets/images/PurpleGridBg.svg'
import { ArrowDownToLine, ArrowRightLeft, Users } from 'lucide-react'

export const StatsCards = () => {
  return (
    <div className="flex flex-col gap-5 h-full w-full">
      {/* Wrapper for Downloads and Active Users */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full xl:flex xl:flex-col xl:h-2/3">
        {/* Downloads */}
        <div className="w-full h-full rounded-xl p-5 flex justify-start items-center bg-white gap-5 text-grayblue-600">
          <div className="w-20 h-20 bg-grayblue-100 rounded-lg flex items-center justify-center">
            <ArrowDownToLine className="w-16 h-16" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-4xl font-bold">20,000</h1>
            <h3 className="text-lg font-normal">Downloads</h3>
          </div>
        </div>

        {/* Active Users */}
        <div
          className="w-full h-full rounded-xl p-5 flex justify-start items-center gap-5 text-white"
          style={{
            backgroundImage: `url(${PurpleGridBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <div className="w-20 h-20 bg-grayblue-100 rounded-lg flex items-center justify-center">
            <Users className="w-16 h-16 text-grayblue-600" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-4xl font-bold">18000</h1>
            <h3 className="text-lg font-normal">Active Users</h3>
          </div>
        </div>
      </div>

      {/* On Chain Transactions */}
      <div className="w-full h-full rounded-xl p-5 flex justify-start items-center bg-white gap-5 md:col-span-2 xl:h-1/3 text-grayblue-600">
        <div className="w-20 h-20 bg-grayblue-100 rounded-lg flex items-center justify-center">
          <ArrowRightLeft className="w-16 h-16" />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl font-bold">1500</h1>
          <h3 className="text-lg font-normal">On Chain Transactions</h3>
        </div>
      </div>
    </div>
  )
}
