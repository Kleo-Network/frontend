import CalendarIconPath from '../../../../assets/images/about/tabs/updates/calendar.svg'
import GoalIconPath from '../../../../assets/images/about/tabs/updates/goal.svg'
import HightLightIconPath from '../../../../assets/images/about/tabs/updates/hightlight.svg'
import DownloadsIconPath from '../../../../assets/images/about/tabs/updates/downloads.svg'
import GrantIconPath from '../../../../assets/images/about/tabs/updates/grant.svg'
import ProgressIconPath from '../../../../assets/images/about/tabs/updates/progress.svg'
import XIconPath from '../../../../assets/images/about/tabs/updates/x.svg'

const ABOUT_UPDATES_DATA = {
  updates: [
    {
      date: 'November 4th, 2024',
      goals: [
        'Pooling data to build novel AI models',
        'Building hyper-personalized user experiences',
        'Creating use cases for research data sales'
      ],
      highlights: [
        'Surpassed 10,000+ extension downloads',
        'Successfully managed community during server issues',
        'Preparing for Devcon in Bangkok (Nov 6-11)'
      ]
    },
    {
      date: 'October 29th, 2024',
      highlights: [
        'Launched web dashboard with referral features & leaderboards',
        'Reached 8,000 users (25% WoW increase)',
        "Integrated with Polygon's Safe Gas Station",
        'Selected for POL Rush at Devcon'
      ],
      specialNote: 'Software ate the world; now, AI is eating software'
    },
    {
      date: 'October 22nd, 2024',
      highlights: [
        {
          iconPath: DownloadsIconPath,
          title: 'Extension Downloads',
          number: '6,400',
          progressRate: '25'
        },
        {
          iconPath: XIconPath,
          title: 'X Followers',
          number: '43,000',
          progressRate: '10'
        },
        {
          iconPath: GrantIconPath,
          title: 'Grant Received',
          number: '$24,000',
          progressRate: '25'
        }
      ]
    },
    {
      date: 'October 15th, 2024',
      highlights: [
        '5,000 extension installs milestone reached',
        'Developed proprietary activity classification algorithm on TEE',
        'Built strong community: 30k+ Twitter followers, 900 Discord members',
        'Completed 5 bounties with 1,200 USDC distributed'
      ]
    }
  ]
}

export const UpdatesTab = () => {
  return (
    <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] w-full px-6 flex justify-center">
      <div className="flex w-full justify-center px-6 mb-[520px] sm:mb-[560px]">
        <ol className="relative border-s-4 border-primary-600 pl-8 w-full max-w-[980px]">
          {/* First Item on TimeLine */}
          <li className="mb-16 ms-6 w-full">
            {/* Left Side Dot on timeline */}
            <span className="absolute flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full -start-8 border-[12px] border-primary-300" />
            {/* Right Side Dot on timeline */}
            <div className="flex flex-col gap-6">
              {/* Date */}
              <div className="py-4 px-7 flex justify-center items-center gap-3 w-fit bg-grayblue-700 rounded-full text-white">
                <img src={CalendarIconPath} alt="" className="h-6 w-6" />
                <p className="font-semibold text-2xl">
                  {ABOUT_UPDATES_DATA.updates[0].date}
                </p>
              </div>

              {/* SDK end goal */}
              <ListCard
                title="SDK End Goals"
                iconPath={GoalIconPath}
                list={ABOUT_UPDATES_DATA.updates[0].goals!}
              />

              {/* Highlights */}
              <ListCard
                title="Hightlights"
                iconPath={HightLightIconPath}
                list={ABOUT_UPDATES_DATA.updates[0].highlights as string[]}
              />
            </div>
          </li>

          {/* Second Item on TimeLine */}
          <li className="mb-16 ms-6 w-full">
            {/* Left Side Dot on timeline */}
            <span className="absolute flex items-center justify-center w-8 h-8 bg-primary-600 rounded-full -start-4" />
            {/* Right Side Dot on timeline */}
            <div className="flex flex-col gap-6 relative -top-4">
              {/* Date */}
              <div className="py-4 px-7 flex justify-center items-center gap-3 w-fit bg-grayblue-700 rounded-full text-white">
                <img src={CalendarIconPath} alt="" className="h-6 w-6" />
                <p className="font-semibold text-2xl">
                  {ABOUT_UPDATES_DATA.updates[1].date}
                </p>
              </div>
              {/* Special Note */}
              <div className="flex justify-start items-center gap-8 p-4 rounded-2xl bg-primary-200">
                <div className="h-20 w-3 bg-primary-800" />
                <div className="text-primary-800 font-semibold text-3xl">
                  {ABOUT_UPDATES_DATA.updates[1].specialNote}
                </div>
              </div>
              {/* Highlights */}
              <ListCard
                title="Hightlights"
                iconPath={HightLightIconPath}
                list={ABOUT_UPDATES_DATA.updates[1].highlights! as string[]}
              />
            </div>
          </li>

          {/* Third Item on TimeLine */}
          <li className="mb-16 ms-6 w-full">
            {/* Left Side Dot on timeline */}
            <span className="absolute flex items-center justify-center w-8 h-8 bg-primary-600 rounded-full -start-4" />
            {/* Right Side Dot on timeline */}
            <div className="flex flex-col gap-6 relative -top-4">
              {/* Date */}
              <div className="py-4 px-7 flex justify-center items-center gap-3 w-fit bg-grayblue-700 rounded-full text-white">
                <img src={CalendarIconPath} alt="" className="h-6 w-6" />
                <p className="font-semibold text-2xl">
                  {ABOUT_UPDATES_DATA.updates[2].date}
                </p>
              </div>
              <StatsHighLightCard
                list={
                  ABOUT_UPDATES_DATA.updates[2].highlights! as HightLightItem[]
                }
                title="Hightlights"
              />
            </div>
          </li>

          {/* Last Dot on timeline */}
          <li className="ms-6 w-full">
            {/* Left Side Dot on timeline */}
            <span className="absolute flex items-center justify-center w-8 h-8 bg-primary-600 rounded-full -start-4" />
            {/* Right Side Dot on timeline */}
            <div className="flex flex-col gap-6 h-0 relative -top-4">
              {/* Date */}
              <div className="py-4 px-7 flex justify-center items-center gap-3 w-fit bg-grayblue-700 rounded-full text-white">
                <img src={CalendarIconPath} alt="" className="h-6 w-6" />
                <p className="font-semibold text-2xl">
                  {ABOUT_UPDATES_DATA.updates[3].date}
                </p>
              </div>
              {/* Highlights */}
              <ListCard
                title="Hightlights"
                iconPath={HightLightIconPath}
                list={ABOUT_UPDATES_DATA.updates[3].highlights as string[]}
              />
            </div>
          </li>
        </ol>
      </div>
    </div>
  )
}

interface ListCardProps {
  title: string
  iconPath: string
  list: string[]
}

const ListCard = ({ title, iconPath, list }: ListCardProps) => {
  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-xl">
      <h2 className="font-semibold text-3xl">{title}</h2>
      <div className="flex flex-col gap-2 w-full">
        {list.map((goal, index) => (
          <div key={index}>
            <div className="flex justify-start items-center gap-4 p-4">
              <img src={iconPath} alt="" className="h-10 w-10" />
              <p className="font-normal text-2xl">{goal}</p>
            </div>
            {/* Add separator except for the last item */}
            {index < list.length - 1 && (
              <div className="border border-black border-opacity-10" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

interface HightLightItem {
  iconPath: string
  title: string
  number: string
  progressRate: string
}
interface StatsHighLightCardProps {
  title: string
  list: HightLightItem[]
}

const StatsHighLightCard = ({ title, list }: StatsHighLightCardProps) => {
  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-xl">
      <h2 className="font-semibold text-3xl">{title}</h2>
      <div className="flex flex-col gap-6 w-full">
        {list.map((highlight, index) => (
          <div key={index}>
            <div className="flex p-5 rounded-2xl bg-[#F5F5FA] gap-8">
              <img src={highlight.iconPath} alt="" className="w-20 h-20" />
              <div className="flex flex-col gap-2">
                <h4 className="font-medium text-lg">{highlight.title}</h4>
                <div className="flex justify-start items-baseline gap-4 flex-wrap">
                  <span className="font-bold text-4xl sm:text-5xl">
                    {highlight.number}
                  </span>
                  <div className="flex justify-start items-baseline text-[#12B76A]">
                    <span className="font-bold text-xl">
                      {highlight.progressRate}%
                    </span>
                    <img src={ProgressIconPath} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
