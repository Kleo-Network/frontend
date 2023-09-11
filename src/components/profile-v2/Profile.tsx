// react component to create profile

import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import BrowsingHistoryChart from '../charts/AreaChart'
import StarredCards from './StarredCards'

const Profile: React.FC = () => {
  const [user, setUser] = useState({
    name: 'Ada Lovelace',
    image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
    address: '0x01e92439CFwes2aA2D759709kwjendkwendkjwnedkjwne',
    kleo: 1000,
    pills: ['Pill 1', 'Pill 2', 'Pill 3', 'Pill 4', 'Pill 5', 'Pill 6'],
    interests: [
      { id: 'flare.analytics.cluster.AgglomerativeCluster', value: 3938 },
      { id: 'flare.analytics.cluster.CommunityStructure', value: 3812 },
      { id: 'flare.analytics.cluster.HierarchicalCluster', value: 6714 },
      { id: 'flare.analytics.cluster.MergeEdge', value: 743 },
      { id: 'flare.analytics.graph.BetweennessCentrality', value: 3534 },
      { id: 'flare.analytics.graph.LinkDistance', value: 5731 },
      { id: 'flare.analytics.graph.MaxFlowMinCut', value: 7840 },
      { id: 'flare.analytics.graph.ShortestPaths', value: 5914 },
      { id: 'flare.analytics.graph.SpanningTree', value: 3416 },
      { id: 'flare.analytics.optimization.AspectRatioBanker', value: 7074 },
      { id: 'flare.animate.Easing', value: 17010 },
      { id: 'flare.animate.FunctionSequence', value: 5842 },
      { id: 'flare.analytics.cluster.AgglomerativeCluster', value: 3938 },
      { id: 'flare.analytics.cluster.CommunityStructure', value: 312 },
      { id: 'flare.analytics.cluster.HierarchicalCluster', value: 6714 },
      { id: 'flare.analytics.cluster.MergeEdge', value: 743 },
      { id: 'flare.analytics.graph.BetweennessCentrality', value: 35340 },
      { id: 'flare.analytics.graph.LinkDistance', value: 5731 },
      { id: 'flare.analytics.graph.MaxFlowMinCut', value: 7840 },
      { id: 'flare.analytics.graph.ShortestPaths', value: 5914 },
      { id: 'flare.analytics.graph.SpanningTree', value: 3416 },
      { id: 'flare.analytics.optimization.AspectRatioBanker', value: 7074 },
      { id: 'flare.animate.Easing', value: 17010 },
      { id: 'flare.animate.FunctionSequence', value: 5842 }
    ],
    events: [
      {
        date: 'January 2023',
        title: 'Event 1',
        description: 'Description of Event 1'
      },
      {
        date: 'February 2023',
        title: 'Event 2',
        description: 'Description of Event 2'
      },
      {
        date: 'January 2023',
        title: 'Event 1',
        description: 'Description of Event 1'
      },
      {
        date: 'February 2023',
        title: 'Event 2',
        description: 'Description of Event 2'
      }
    ]
    // Add more data points as needed
  })

  return (
    <div className="grid grid-cols-4 gap-5 bg-[#e8ebf6] p-3">
      <div className="">
        <ProfileCard user={user} />
      </div>
      <div className="container col-span-3 bg-slate-100 shadow-xl rounded-3xl">
        <div
          className="font-bold text-lg p-5 text-gray-600 bg-white shadow-md rounded-3xl"
          contentEditable
        >
          Top Pinned Searches
        </div>
        <StarredCards />
      </div>
      <div className="col-span-4">
        <BrowsingHistoryChart />
      </div>
    </div>
  )
}

export default Profile
