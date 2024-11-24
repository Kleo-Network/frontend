import { useState } from 'react'

// Placeholder components for tab content
const UpdatesTab = () => <div>Updates Tab Content</div>
const AboutTab = () => <div>About Tab Content</div>
const TeamTab = () => <div>Team Tab Content</div>
const TreasuryTab = () => <div>Treasury Tab Content</div>
const RoadmapTab = () => <div>Roadmap Tab Content</div>

const ABOUT_TABS_DATA = {
  tabList: [
    { id: 'updatesTab', name: 'Updates', component: <UpdatesTab /> },
    { id: 'aboutTab', name: 'About', component: <AboutTab /> },
    { id: 'teamTab', name: 'Team', component: <TeamTab /> },
    { id: 'treasuryTab', name: 'Treasury', component: <TreasuryTab /> },
    { id: 'roadmapTab', name: 'Roadmap', component: <RoadmapTab /> }
  ]
}

// Main AboutTabsSection Component
export const AboutTabsSection = () => {
  const [activeTab, setActiveTab] = useState('updatesTab')

  return (
    <div className="w-full h-fit flex justify-center">
      <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] w-full">
        <section className="w-full px-6 font-inter flex flex-col justify-start items-center">
          {/* TabBar */}
          <div className="w-full py-6 border-b border-b-grayblue-200">
            <div className="w-full p-2 flex justify-between gap-0 bg-[#E3E6F2] rounded-lg text-grayblue-800 font-semibold">
              {ABOUT_TABS_DATA.tabList.map((tab) => (
                <p
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 px-7 text-xl w-full flex justify-center rounded-lg cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-grayblue-800 text-white'
                      : 'text-grayblue-800'
                  }`}
                >
                  {tab.name}
                </p>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="w-full py-20">
            {
              ABOUT_TABS_DATA.tabList.find((tab) => tab.id === activeTab)
                ?.component
            }
          </div>
        </section>
      </div>
    </div>
  )
}
