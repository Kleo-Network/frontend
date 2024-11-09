import React, { useState } from 'react'
import KleoNewsfeed from './Update'
import About from './About'
import Team from './Team'
import Funding from './Funding'
export const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Updates')

  const renderContent = () => {
    switch (activeTab) {
      case 'Updates':
        return <KleoNewsfeed />
      case 'About':
        return <About />
      case 'Team':
        return <Team />
      case 'Funding':
        return <Funding />
      default:
        return null
    }
  }

  return (
    <div className="my-5">
      {/* Mobile Select Dropdown for Tabs */}
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select your tab
        </label>
        <select
          id="tabs"
          className="bg-grayblue-200 border border-grayblue-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          <option>Updates</option>
          <option>About</option>
          <option>Team</option>
          <option>Funding</option>
        </select>
      </div>

      {/* Tab List for larger screens */}
      <ul className="hidden sm:flex text-sm font-medium text-center text-gray-900 rounded-lg divide-x border border-grayblue-300 divide-grayblue-300">
        <li className="w-full focus-within:z-10">
          <a
            href="#"
            onClick={() => setActiveTab('Updates')}
            className={`inline-block w-full p-4 text-lg ${
              activeTab === 'Profile' ? 'bg-grayblue-200' : 'bg-grayblue-100'
            } border-grayblue-100 rounded-s-lg hover:bg-grayblue-300`}
          >
            Updates
          </a>
        </li>
        <li className="w-full focus-within:z-10">
          <a
            href="#"
            onClick={() => setActiveTab('About')}
            className={`inline-block w-full p-4 text-lg ${
              activeTab === 'About' ? 'bg-grayblue-200' : 'bg-grayblue-100'
            } border-grayblue-100 hover:bg-grayblue-300`}
          >
            About
          </a>
        </li>
        <li className="w-full focus-within:z-10">
          <a
            href="#"
            onClick={() => setActiveTab('Team')}
            className={`inline-block w-full p-4 text-lg ${
              activeTab === 'Team' ? 'bg-grayblue-200' : 'bg-grayblue-100'
            } border-grayblue-100 hover:bg-grayblue-300`}
          >
            Team
          </a>
        </li>
        <li className="w-full focus-within:z-10">
          <a
            href="#"
            onClick={() => setActiveTab('Funding')}
            className={`inline-block w-full p-4 text-lg ${
              activeTab === 'Funding' ? 'bg-grayblue-200' : 'bg-grayblue-100'
            } border-grayblue-100 rounded-e-lg hover:bg-grayblue-300`}
          >
            Treasury
          </a>
        </li>
      </ul>

      {/* Content Section */}
      <div className="p-4 bg-grayblue-100 mt-4 rounded-lg shadow text-gray-900">
        {renderContent()}
      </div>
    </div>
  )
}
