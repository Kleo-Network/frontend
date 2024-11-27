import OwnYourDataIconPath from '../../../../assets/images/about/tabs/about/ownYourData.svg'
import GetRewardedIconPath from '../../../../assets/images/about/tabs/about/getRewarded.svg'
import DeveloperSdkIconPath from '../../../../assets/images/about/tabs/about/developerSDK.svg'
import ForKleoUsersImagePath from '../../../../assets/images/about/tabs/about/forKleoUsers.svg'
import ForDevelopersImagePath from '../../../../assets/images/about/tabs/about/forDevelopers.svg'

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
  ],
  transformingDataIntoValueText: 'Transforming Data into Value',
  transformingDataIntoValueDescription:
    'Unlock secure control, personalized insights, and cutting-edge AI with user-driven data solutions for individuals and organizations.',
  forKleoUsers: {
    title: 'For Kleo Users',
    points: [
      'Secure data ownership through encryption',
      'Query your data like a personal memory assistant',
      'Earn rewards for data contributions',
      'Enhanced personalization across partner sites',
      'Complete control over data sharing'
    ],
    posterImagePath: ForKleoUsersImagePath
  },
  forDevelopers: {
    title: 'For Developers & Organizations',
    points: [
      'Real-time access to high-quality user data',
      'Build better AI models with authentic data',
      'User-specific personalization capabilities',
      'Access to pooled anonymous data insights',
      'Simple SDK integration'
    ],
    posterImagePath: ForDevelopersImagePath
  }
}

const AboutTab = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      {/* About Central Idea */}
      <div className="max-w-[1140px] w-full px-6">
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
          <div className="flex justify-center items-stretch gap-8 w-full">
            {ABOUT_ABOUT_DATA.aboutCards.map((card) => (
              <div
                key={card.id}
                className={`flex flex-col justify-start items-start gap-8 p-6 rounded-3xl flex-1 ${
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
      {/* Transforming Data into Value */}
      <div className="w-screen bg-gray-900 mt-24 md:rounded-[30px] xl:rounded-[50px] py-24 flex flex-col justify-start items-center">
        <div className="max-w-[1140px] w-full px-6">
          <div className="flex flex-col gap-4 w-full text-white">
            {/* Heading */}
            <div className="flex flex-col w-full gap-4 text-center items-center">
              <h1 className="font-semibold text-6xl">
                {ABOUT_ABOUT_DATA.transformingDataIntoValueText}
              </h1>
              <h4 className="font-nokora font-normal text-lg max-w-[880px]">
                {ABOUT_ABOUT_DATA.transformingDataIntoValueDescription}
              </h4>
            </div>

            {/* For Kleo Users */}
            <div className="flex flex-col-reverse xl:flex-row gap-6 xl:gap-6 justify-between items-start h-full w-full mt-12">
              <div className="flex flex-col gap-6 flex-1 text-center xl:text-left">
                <h3 className="font-semibold text-3xl">
                  {ABOUT_ABOUT_DATA.forKleoUsers.title}
                </h3>
                <div className="flex flex-col gap-4">
                  {ABOUT_ABOUT_DATA.forKleoUsers.points.map((point, index) => (
                    <div
                      key={index}
                      className="flex gap-4 items-center p-4 bg-white bg-opacity-10 rounded-2xl w-full"
                    >
                      <div className="w-4 h-4 bg-primary-500 rounded-full" />
                      <p className="font-nokora font-normal text-xl">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
              <img
                src={ABOUT_ABOUT_DATA.forKleoUsers.posterImagePath}
                alt=""
                className="h-full xl:ml-10"
              />
            </div>

            {/* For Developers */}
            <div className="flex flex-col xl:flex-row gap-6 xl:gap-6 justify-between items-start h-full w-full mt-12">
              <img
                src={ABOUT_ABOUT_DATA.forDevelopers.posterImagePath}
                alt=""
                className="h-full xl:mr-10"
              />
              <div className="flex flex-col gap-6 flex-1 text-center xl:text-left">
                <h3 className="font-semibold text-3xl">
                  {ABOUT_ABOUT_DATA.forDevelopers.title}
                </h3>
                <div className="flex flex-col gap-4">
                  {ABOUT_ABOUT_DATA.forDevelopers.points.map((point, index) => (
                    <div
                      key={index}
                      className="flex gap-4 items-center p-4 bg-white bg-opacity-10 rounded-2xl w-full"
                    >
                      <div className="w-4 h-4 bg-primary-500 rounded-full" />
                      <p className="font-nokora font-normal text-xl">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutTab
