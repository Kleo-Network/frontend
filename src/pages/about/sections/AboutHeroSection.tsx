import Download from '../../../assets/images/about/hero/download.svg'
import ActiveUsers from '../../../assets/images/about/hero/activeUsers.svg'
import OnChainTransactions from '../../../assets/images/about/hero/onChainTransactions.svg'
import PurpleCoin from '../../../assets/images/about/hero/purpleCoin.png'

const ABOUT_HERO_DATA = {
  aboutTitle: 'About Us',
  aboutDescription:
    'Kleo Network empowers users to own and monetize their data through a secure, decentralized marketplace. By enabling ethical data sharing and fostering AI innovation, it creates a fair, transparent ecosystem where users earn rewards, and organizations access high-quality, compliant data.',
  statsCards: [
    {
      icon: Download,
      title: 'Downloads',
      count: '20,000+',
      type: 'LIGHT'
    },
    {
      icon: ActiveUsers,
      title: 'Active Users',
      count: '18,000+',
      type: 'DARK'
    },
    {
      icon: OnChainTransactions,
      title: 'On Chain Transactions',
      count: '1500+',
      type: 'DARK'
    }
  ]
}

export const AboutHeroSection = () => {
  return (
    <section className="w-full h-full py-24 px-4 lg:px-9 font-inter">
      <div className="flex justify-start items-center h-fit">
        <div className="flex flex-col justify-start items-start gap-[70px] w-3/4 z-20">
          <div className="text-wrapper max-w-[750px] text-balance gap-6 flex flex-col">
            <h1 className="text-8xl font-medium text-white">
              {ABOUT_HERO_DATA.aboutTitle}
            </h1>
            <p className="text-white font-nokora font-normal text-lg">
              {ABOUT_HERO_DATA.aboutDescription}
            </p>
          </div>
          <div className="stats-wrapper flex justify-start gap-[30px] flex-wrap">
            {ABOUT_HERO_DATA.statsCards.map((card, index) => (
              <StatCard
                key={index}
                title={card.title}
                count={card.count}
                type={card.type}
                iconPath={card.icon}
              />
            ))}
          </div>
        </div>
        <div className="flex w-auto h-auto flex-shrink">
          <img
            src={PurpleCoin}
            className="hidden xl:flex xl:absolute xl:right-0 xl:top-0 h-full z-10"
          />
        </div>
      </div>
    </section>
  )
}

interface StatCardProps {
  title: string
  count: string
  type: string
  iconPath: string
}
const StatCard = ({ title, count, type, iconPath }: StatCardProps) => {
  return (
    <div
      className={`p-[20px] flex justify-start items-center gap-8 rounded-[14px] ${
        type === 'DARK'
          ? 'bg-gray-800 border border-white border-opacity-40'
          : 'bg-white'
      }`}
    >
      <div
        className={`w-[80px] h-[80px] flex justify-center items-center rounded-lg ${
          type === 'DARK' ? 'bg-[#EAECF5] bg-opacity-20' : 'bg-grayblue-100'
        }`}
      >
        <img src={iconPath} className="w-[50px] h-[50px]" />
      </div>
      <div
        className={`flex flex-col justify-center items-start gap-2 font-inter w-max ${
          type === 'DARK' ? 'text-white' : 'text-black'
        }`}
      >
        <p className="font-medium text-lg">{title}</p>
        <span className="font-bold text-5xl">{count}</span>
      </div>
    </div>
  )
}
