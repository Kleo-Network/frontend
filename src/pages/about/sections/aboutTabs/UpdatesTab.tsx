import CalendarIconPath from '../../../../assets/images/about/tabs/updates/calendar.svg'
import GoalIconPath from '../../../../assets/images/about/tabs/updates/goal.svg'
import HightLightIconPath from '../../../../assets/images/about/tabs/updates/hightlight.svg'

const ABOUT_UPDATES_DATA = {
  updates: [
    {
      date: 'November 4th, 2024',
      goalsIconPath: GoalIconPath,
      goals: [
        'Pooling data to build novel AI models',
        'Building hyper-personalized user experiences',
        'Creating use cases for research data sales'
      ],
      hightLightIconPath: HightLightIconPath,
      highlights: [
        'Surpassed 10,000+ extension downloads',
        'Successfully managed community during server issues',
        'Preparing for Devcon in Bangkok (Nov 6-11)'
      ]
    }
  ]
}

export const UpdatesTab = () => {
  return (
    <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] w-full px-6 flex justify-center">
      <div className="flex w-full justify-center px-6">
        <ol className="relative border-s-4 border-primary-600 pl-8 w-full max-w-[980px]">
          {/* First Item on TimeLine */}
          <li className="mb-10 ms-6 w-full">
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
                iconPath={ABOUT_UPDATES_DATA.updates[0].goalsIconPath}
                list={ABOUT_UPDATES_DATA.updates[0].goals}
              />

              {/* Highlights */}
              <ListCard
                title="Hightlights"
                iconPath={HightLightIconPath}
                list={ABOUT_UPDATES_DATA.updates[0].highlights}
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
