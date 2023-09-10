// Profile page with welcome text and user image using tailwind css

import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import BubbleChart from './charts/BubbleChart'
import { TimelineChart } from './charts/Timeline'

const ProfileV1: React.FC = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    image: 'https://bootdey.com/img/Content/avatar/avatar8.png',
    address: '0x01e92439CFwes2aA2D759709kwjendkwendkjwnedkjwne',
    kleo: 1000,
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
    <div className="flex flex-col items-left gap-5  w-full bg-[#e8ebf6] p-6">
      <ProfileCard user={user} />
      <BubbleChart data={user.interests} />
      <TimelineChart />
    </div>
  )
}

export default ProfileV1
