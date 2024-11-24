import BgGridPath from '../../../../assets/images/about/tabs/treasury/Grid.svg'
import TotalFundingIconPath from '../../../../assets/images/about/tabs/treasury/totalFunding.svg'
import TotalSpentIconPath from '../../../../assets/images/about/tabs/treasury/totalSpent.svg'
import RemainingBalanceIconPath from '../../../../assets/images/about/tabs/treasury/remainingBalance.svg'
import BuildingTechIconPath from '../../../../assets/images/about/tabs/treasury/buldingTech.svg'
import MarketingIconPath from '../../../../assets/images/about/tabs/treasury/marketing.svg'
import TeamIconPath from '../../../../assets/images/about/tabs/treasury/team.svg'

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
  },
  spendCategories: {
    title: 'Spend Categories',
    categories: [
      {
        iconPath: BuildingTechIconPath,
        title: 'Building Tech',
        percentage: 45.8,
        amount: '$11,000'
      },
      {
        iconPath: MarketingIconPath,
        title: 'Marketing',
        percentage: 20.8,
        amount: '$5,000'
      },
      {
        iconPath: TeamIconPath,
        title: 'Team',
        percentage: 33.3,
        amount: '$8,000'
      }
    ]
  },
  fundingSources: {
    title: 'Funding Sources',
    sources: [
      {
        name: 'Thrive X Polygon Grant',
        amount: '$24,000',
        description: 'Grant'
      },
      {
        name: 'Vaibhav Maheshwari',
        amount: '$40,000',
        description: 'Investment'
      }
    ]
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
        <div className="col-span-6 p-8 bg-gray-700 text-white rounded-2xl shadow h-[380px]">
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
        <div className="p-6 bg-white rounded-lg shadow col-span-6 flex flex-col gap-6">
          <h1 className="font-semibold text-2xl">
            {ABOUT_TREASURY_DATA.spendCategories.title}
          </h1>
          <div className="flex flex-col justify-evenly h-full w-full">
            {ABOUT_TREASURY_DATA.spendCategories.categories.map(
              (category, index) => (
                <div
                  key={index}
                  className="flex justify-between p-2 pr-4 bg-[#F5F5FA] items-center rounded-lg"
                >
                  <div className="flex justify-start items-center gap-6">
                    <img src={category.iconPath} alt="" className="h-14 w-14" />
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold text-lg">
                        {category.title}
                      </h3>
                      <h4 className="font-normal text-base">
                        {category.percentage}% of total spend
                      </h4>
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl">{category.amount}</h3>
                </div>
              )
            )}
          </div>
        </div>

        {/* Funding Sources */}
        <div className="p-6 bg-white rounded-lg shadow col-span-9 flex flex-col w-full gap-6">
          <h1 className="font-semibold text-2xl">
            {ABOUT_TREASURY_DATA.fundingSources.title}
          </h1>
          <div className="flex flex-col gap-6">
            {ABOUT_TREASURY_DATA.fundingSources.sources.map((source, index) => (
              <div
                key={index}
                className="flex justify-between p-4 bg-[#F5F5FA] items-center rounded-lg"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-lg">{source.name}</h3>
                  <h4 className="font-normal text-base">
                    {source.description}
                  </h4>
                </div>
                <h3 className="font-semibold text-xl">{source.amount}</h3>
              </div>
            ))}
          </div>
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
