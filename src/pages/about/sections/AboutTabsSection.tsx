import { useState } from 'react'
import { TeamTab } from './aboutTabs/TeamTab'
import { AboutTab } from './aboutTabs/AboutTab'
import { TreasuryTab } from './aboutTabs/TreasuryTab'

// Placeholder components for tab content
const UpdatesTab = () => <div>Updates Tab Content</div>
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
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleTabChange = (tabId: string) => {
    if (activeTab !== tabId) {
      setIsTransitioning(true) // Start transition
      setTimeout(() => {
        setActiveTab(tabId) // Change tab after transition delay
        setIsTransitioning(false) // End transition
      }, 300) // Match this duration with your transition class
    }
  }

  return (
    <div className="w-full h-fit flex flex-col justify-start items-center">
      <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] w-full">
        <section className="w-full px-6 font-inter flex flex-col justify-start items-center">
          {/* TabBar */}
          <div className="w-full py-6 border-b border-b-grayblue-200">
            <div className="w-full p-2 flex justify-between gap-0 bg-[#E3E6F2] rounded-lg text-grayblue-800 font-semibold">
              {ABOUT_TABS_DATA.tabList.map((tab) => (
                <p
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`py-2 px-2 md:py-3 md:px-7 text-xl w-full flex justify-center rounded-lg cursor-pointer transition-all ${
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
        </section>
      </div>
      {/* Tab Content */}
      <div
        className={`w-full py-20 transition-all duration-300 ease-in-out transform flex justify-center ${
          isTransitioning
            ? 'opacity-0 translate-x-4'
            : 'opacity-100 translate-x-0'
        }`}
      >
        {ABOUT_TABS_DATA.tabList.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  )
}
