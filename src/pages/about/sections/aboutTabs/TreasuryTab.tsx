import BgGridPath from '../../../../assets/images/about/tabs/treasury/Grid.svg'
import TotalFundingIconPath from '../../../../assets/images/about/tabs/treasury/totalFunding.svg'
import TotalSpentIconPath from '../../../../assets/images/about/tabs/treasury/totalSpent.svg'
import RemainingBalanceIconPath from '../../../../assets/images/about/tabs/treasury/remainingBalance.svg'

const ABOUT_TREASURY_DATA = {
  fundingCards: [
    {
      id: '1',
      iconPath: TotalFundingIconPath,
      title: 'Total Funding',
      amount: '$64,000',
      theme: 'WHITE'
    },
    {
      id: '2',
      iconPath: TotalSpentIconPath,
      title: 'Total Spent',
      amount: '$24,000',
      theme: 'WHITE'
    },
    {
      id: '3',
      iconPath: RemainingBalanceIconPath,
      title: 'Remaining Balance',
      amount: '$40,000',
      theme: 'PURPLE'
    }
  ],
  spendBreakdown: {
    graphConfig: [
      { percentage: 46.82, color: '#8C65E0', label: 'Building Tech' },
      { percentage: 18.16, color: '#B692F6', label: 'Marketing' },
      { percentage: 32.38, color: '#E9D7FE', label: 'Team' }
    ],
    totalAmount: '$24,000',
    title: 'Spend Breakdown',
    description:
      "Here's how we allocate your contributions to make a meaningful impact:"
  }
}

export const TreasuryTab = () => {
  return (
    <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] w-full px-6">
      <div className="grid grid-cols-12 gap-8 w-full">
        {/* Funding Cards */}
        {ABOUT_TREASURY_DATA.fundingCards.map((card) => (
          <div
            key={card.id}
            className={`p-6 rounded-2xl shadow flex flex-col gap-8 ${
              card.theme === 'WHITE'
                ? 'bg-white text-black'
                : `bg-no-repeat bg-cover h-full text-white`
            } col-span-4`}
            style={
              card.theme === 'WHITE'
                ? {}
                : { backgroundImage: `url(${BgGridPath})` }
            }
          >
            <img src={card.iconPath} alt="" className="h-20 w-20" />
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-lg">{card.title}</h4>
              <h1 className="font-bold text-6xl">{card.amount}</h1>
            </div>
          </div>
        ))}

        {/* Spend Breakdown */}
        <div className="col-span-6 p-8 bg-gray-700 text-white rounded-2xl shadow">
          <div className="h-full flex justify-evenly items-center gap-12">
            <CircularGraph
              data={ABOUT_TREASURY_DATA.spendBreakdown.graphConfig}
              totalAmount={ABOUT_TREASURY_DATA.spendBreakdown.totalAmount}
            />
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-2xl">
                  {ABOUT_TREASURY_DATA.spendBreakdown.title}
                </h1>
                <h4 className="font-normal text-base">
                  {ABOUT_TREASURY_DATA.spendBreakdown.description}
                </h4>
              </div>
              <div className="flex flex-col gap-4">
                {ABOUT_TREASURY_DATA.spendBreakdown.graphConfig.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="flex justify-start items-center gap-4"
                    >
                      <div
                        className={`h-4 w-4 rounded-full bg-[${item.color.toString()}]`}
                      ></div>
                      <p className="font-normal text-base">{item.label}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow col-span-6">
          Spend Categories
        </div>

        {/* Funding Sources */}
        <div className="p-4 bg-white rounded-lg shadow col-span-9">
          Funding Sources
        </div>
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow col-span-3">
          Treasury Tracking
        </div>
      </div>
    </div>
  )
}

interface CircularGraphProps {
  data: { percentage: number; color: string; label: string }[]
  totalAmount: string
}

const CircularGraph = ({ data, totalAmount }: CircularGraphProps) => {
  const total = data.reduce((sum, item) => sum + item.percentage, 0)
  const gap = 2
  let currentOffset = 0

  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
        {data.map((item, index) => {
          const segmentPercentage = (item.percentage / total) * 100
          const dashArray = `${segmentPercentage - gap} ${
            100 - segmentPercentage + gap
          }`
          const offset = currentOffset
          currentOffset += segmentPercentage

          return (
            <circle
              key={index}
              cx="18"
              cy="18"
              r="15.9155"
              fill="transparent"
              stroke={item.color}
              strokeWidth="4"
              strokeDasharray={dashArray}
              strokeDashoffset={100 - offset}
              strokeLinecap="butt"
            />
          )
        })}
      </svg>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <p className="text-base font-normal text-gray-300">Total</p>
        <p className="text-3xl font-semibold text-white">{totalAmount}</p>
        <p className="text-xs text-gray-300 rounded-full bg-gray-600 px-2 py-1">
          In last year
        </p>
      </div>
    </div>
  )
}
