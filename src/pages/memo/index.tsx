import React, { useState } from 'react'

const Memo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('updates')

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className="container">
      <div className="image-container">
        <div className="image">{/* Image carousel goes here */}</div>
      </div>
      <div className="stats-container">
        <div className="stat">
          <h3>3450 downloads</h3>
        </div>
        <div className="stat">
          <h3>3000 active users</h3>
        </div>
        <div className="stat">
          <h3>23300 onchain transactions</h3>
        </div>
      </div>
      <div className="tab-container">
        <div
          className={`tab ${activeTab === 'updates' ? 'active' : ''}`}
          onClick={() => handleTabClick('updates')}
        >
          updates
        </div>
        <div
          className={`tab ${activeTab === 'team' ? 'active' : ''}`}
          onClick={() => handleTabClick('team')}
        >
          team
        </div>
        <div
          className={`tab ${activeTab === 'treasury' ? 'active' : ''}`}
          onClick={() => handleTabClick('treasury')}
        >
          treasury
        </div>
      </div>
      <div className="content-container">
        {activeTab === 'updates' && <div>Updates content goes here</div>}
        {activeTab === 'team' && <div>Team content goes here</div>}
        {activeTab === 'treasury' && <div>Treasury content goes here</div>}
      </div>
    </div>
  )
}

export default Memo
