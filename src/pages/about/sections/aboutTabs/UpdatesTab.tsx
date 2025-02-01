import CalendarIconPath from '../../../../assets/images/about/tabs/updates/calendar.svg'
import GoalIconPath from '../../../../assets/images/about/tabs/updates/goal.svg'
import HightLightIconPath from '../../../../assets/images/about/tabs/updates/hightlight.svg'
import DownloadsIconPath from '../../../../assets/images/about/tabs/updates/downloads.svg'
import GrantIconPath from '../../../../assets/images/about/tabs/updates/grant.svg'
import ProgressIconPath from '../../../../assets/images/about/tabs/updates/progress.svg'
import XIconPath from '../../../../assets/images/about/tabs/updates/x.svg'

interface HightLightItem {
  iconPath: string
  title: string
  number: string
  progressRate: string
}

interface Update {
  date: string
  goals?: string[]
  highlights: (string | HightLightItem)[]
  specialNote?: string
}

const ABOUT_UPDATES_DATA = {
  updates: [
    {
      date: 'January 22nd, 2025',
      highlights: [
        'Reached 85,000+ extension users with enhanced server infrastructure',
        'Created AI Agents with browswer automation capabilities',
        'Onboarded a new member for technical head in the Kleo Team',
        'Launched KDAT token on VANA MAINNET'
      ]
    },

    {
      date: 'January 15th, 2025',
      highlights: [
        {
          iconPath: DownloadsIconPath,
          title: 'Extension Downloads',
          number: '80,000',
          progressRate: '166.67%'
        }
      ]
    },
    {
      date: 'November 24th, 2024',
      highlights: [
        'Reached 30,000+ extension users with enhanced server infrastructure',
        'Launched comprehensive memo page at kleo.network/about',
        'Won 50,000 $POL Tokens at AggSummit, Bangkok',
        'Preparing for India Blockchain Week in Bangalore'
      ],
      specialNote:
        'Growth and momentum are what a startup lives on, and you always have to focus on maintaining these. – Sam Altman, CEO of OpenAI'
    },
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

interface ListCardProps {
  title: string
  iconPath: string
  list: string[]
}

const ListCard = ({ title, iconPath, list }: ListCardProps) => {
  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-xl">
      <h2 className="font-semibold text-2xl">{title}</h2>
      <div className="flex flex-col gap-2 w-full">
        {list.map((goal, index) => (
          <div key={index}>
            <div className="flex justify-start items-center gap-4 p-4">
              <img src={iconPath} alt="" className="h-8 w-8" />
              <p className="font-normal text-lg">{goal}</p>
            </div>
            {index < list.length - 1 && (
              <div className="border border-black border-opacity-10" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

interface StatsHighLightCardProps {
  title: string
  list: HightLightItem[]
}

const StatsHighLightCard = ({ title, list }: StatsHighLightCardProps) => {
  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-xl">
      <h2 className="font-semibold text-2xl">{title}</h2>
      <div className="flex flex-col gap-6 w-full">
        {list.map((highlight, index) => (
          <div key={index}>
            <div className="flex p-5 rounded-2xl bg-[#F5F5FA] gap-8">
              <img src={highlight.iconPath} alt="" className="w-16 h-16" />
              <div className="flex flex-col gap-2">
                <h4 className="font-medium text-base">{highlight.title}</h4>
                <div className="flex justify-start items-baseline gap-4 flex-wrap">
                  <span className="font-bold text-3xl sm:text-4xl">
                    {highlight.number}
                  </span>
                  <div className="flex justify-start items-baseline text-[#12B76A]">
                    <span className="font-bold text-lg">
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

export const UpdatesTab = () => {
  return (
    <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] w-full px-6 flex justify-center">
      <div className="flex w-full justify-center px-6">
        <ol className="relative border-s-4 border-primary-600 pl-8 w-full max-w-[980px]">
          {ABOUT_UPDATES_DATA.updates.map((update, index) => (
            <li
              key={index}
              className={`${
                index !== ABOUT_UPDATES_DATA.updates.length - 1 ? 'mb-16' : ''
              } ms-6 w-full`}
            >
              <span
                className={`absolute flex items-center justify-center ${
                  index === 0
                    ? 'w-12 h-12 -start-6 border-8 border-primary-300'
                    : 'w-6 h-6 -start-3'
                } bg-primary-600 rounded-full`}
              />
              <div
                className={`flex flex-col gap-6 ${
                  index !== 0 ? 'relative -top-3' : ''
                }`}
              >
                <div className="py-3 px-6 flex justify-center items-center gap-3 w-fit bg-grayblue-700 rounded-full text-white">
                  <img src={CalendarIconPath} alt="" className="h-5 w-5" />
                  <p className="font-semibold text-lg">{update.date}</p>
                </div>

                {update.goals && (
                  <ListCard
                    title="SDK End Goals"
                    iconPath={GoalIconPath}
                    list={update.goals}
                  />
                )}

                {update.highlights &&
                  Array.isArray(update.highlights) &&
                  (typeof update.highlights[0] === 'string' ? (
                    <ListCard
                      title="Highlights"
                      iconPath={HightLightIconPath}
                      list={update.highlights as string[]}
                    />
                  ) : (
                    <StatsHighLightCard
                      title="Highlights"
                      list={update.highlights as HightLightItem[]}
                    />
                  ))}

                {update.specialNote && (
                  <div className="flex justify-start items-center gap-6 p-4 rounded-2xl bg-primary-200">
                    <div className="h-16 w-2 bg-primary-800" />
                    <div className="text-primary-800 font-semibold text-xl">
                      {update.specialNote}
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
