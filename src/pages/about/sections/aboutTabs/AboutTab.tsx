import OwnYourDataIconPath from '../../../../assets/images/about/tabs/about/ownYourData.svg'
import GetRewardedIconPath from '../../../../assets/images/about/tabs/about/getRewarded.svg'
import DeveloperSdkIconPath from '../../../../assets/images/about/tabs/about/developerSDK.svg'

const ABOUT_ABOUT_DATA = {
  centralIdeaText: 'Democratizing Data Ownership',
  centralIdeaDescription:
    'Kleo Network is revolutionizing how users own their data and how organizations access it. A decentralized data marketplace that rewards users while enabling AI innovation.',
  aboutCards: [
    {
      id: 1,
      iconPath: OwnYourDataIconPath,
      title: 'Own Your Data',
      description:
        'Take control of your digital footprint with our secure Chrome extension. Your browsing data is encrypted and signed using public key.',
      theme: 'WHITE'
    },
    {
      id: 2,
      iconPath: GetRewardedIconPath,
      title: 'Get Rewarded',
      description:
        'Earn KLEO tokens for sharing your data and enjoy enhanced personalization across partner sites.',
      theme: 'PURPLE'
    },
    {
      id: 3,
      iconPath: DeveloperSdkIconPath,
      title: 'Developer SDK',
      description:
        'Access high-quality, real-time user data to build powerful AI models and personalized experiences.',
      theme: 'WHITE'
    }
  ]
}

export const AboutTab = () => {
  return (
    <>
      {/* About Central Idea */}
      <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] w-full px-6">
        <div className="flex flex-col justify-start items-center text-center font-inter w-full gap-12">
          {/* Text */}
          <div className="flex flex-col justify-start items-center gap-4">
            <h1 className="font-semibold text-5xl">
              {ABOUT_ABOUT_DATA.centralIdeaText}
            </h1>
            <h4 className="font-nokora font-normal text-lg max-w-[1000px]">
              {ABOUT_ABOUT_DATA.centralIdeaDescription}
            </h4>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap justify-center items-center gap-8 w-full">
            {ABOUT_ABOUT_DATA.aboutCards.map((card) => (
              <div
                key={card.id}
                className={`flex flex-col justify-start items-start gap-8 p-6 rounded-3xl max-w-[440px] h-full ${
                  card.theme === 'PURPLE'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-black'
                }`}
              >
                <img
                  src={card.iconPath}
                  alt={card.title}
                  className="h-28 w-28"
                />
                <div className="flex flex-col justify-between items-start gap-4 h-full w-full">
                  <div className="flex flex-col justify-start items-start gap-4 flex-1">
                    <h2 className="font-semibold text-3xl">{card.title}</h2>
                    <div className="font-nokora text-lg font-normal text-left">
                      {card.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
