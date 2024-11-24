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
  ]
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
        <div className="p-4 bg-white rounded-lg shadow col-span-4">
          Total Funding: $64,000
        </div>
        <div className="p-4 bg-white rounded-lg shadow col-span-4">
          Total Spent: $24,000
        </div>
        <div className="p-4 bg-purple-500 text-white rounded-lg shadow col-span-4">
          Remaining Balance: $40,000
        </div>

        {/* Spend Breakdown */}
        <div className="col-span-6 p-4 bg-gray-800 text-white rounded-lg shadow">
          Spend Breakdown: Chart Here
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
