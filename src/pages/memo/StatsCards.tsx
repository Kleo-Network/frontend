import rewardImage from '../../assets/images/reward.png'
import PurpleGridBg from '../../assets/images/PurpleGridBg.svg'

export const StatsCards = () => {
  return (
    <div className="flex flex-col justify-between gap-5 h-full w-full">
      {/* Downloads */}
      <div className="w-full h-full rounded-xl p-5 flex justify-start items-center bg-white gap-5">
        <div className="w-20 h-20 bg-grayblue-100 rounded-lg"></div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl font-bold">3450</h1>
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
        <div className="w-20 h-20 bg-grayblue-100 rounded-lg"></div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl font-bold">100000</h1>
          <h3 className="text-lg font-normal">Active Users</h3>
        </div>
      </div>
      {/* Onchain Transactions */}
      <div className="w-full h-full rounded-xl p-5 flex justify-start items-center bg-white gap-5">
        <div className="w-20 h-20 bg-grayblue-100 rounded-lg"></div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl font-bold">55000000</h1>
          <h3 className="text-lg font-normal">On Chain Transactions</h3>
        </div>
      </div>
    </div>
  )
}
