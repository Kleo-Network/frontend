// react component to create profile

import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import BrowsingHistoryChart from '../charts/AreaChart'

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
    <div className="grid grid-cols-3 gap-6 bg-[#e8ebf6] p-3">
      <div className="">
        <ProfileCard user={user} />
      </div>
      <div className="container col-span-2 bg-white rounded-3xl">
        <ul
          className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
          role="tablist"
          data-te-nav-ref
        >
          <li role="presentation">
            <a
              href="#tabs-home"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
              data-te-toggle="pill"
              data-te-target="#tabs-home"
              data-te-nav-active
              role="tab"
              aria-controls="tabs-home"
              aria-selected="true"
            >
              Home
            </a>
          </li>
          <li role="presentation">
            <a
              href="#tabs-profile"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
              data-te-toggle="pill"
              data-te-target="#tabs-profile"
              role="tab"
              aria-controls="tabs-profile"
              aria-selected="false"
            >
              Profile
            </a>
          </li>
          <li role="presentation">
            <a
              href="#tabs-messages"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
              data-te-toggle="pill"
              data-te-target="#tabs-messages"
              role="tab"
              aria-controls="tabs-messages"
              aria-selected="false"
            >
              Messages
            </a>
          </li>
          <li role="presentation">
            <a
              href="#tabs-contact"
              className="disabled pointer-events-none my-2 block border-x-0 border-b-2 border-t-0 border-transparent bg-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-600"
              data-te-toggle="pill"
              data-te-target="#tabs-contact"
              role="tab"
              aria-controls="tabs-contact"
              aria-selected="false"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="mb-6 ">
          <div
            className="flex flex-row flex-wrap"
            id="tabs-home"
            role="tabpanel"
            aria-labelledby="tabs-home-tab"
            data-te-tab-active
          >
            {user.pills.map((pill, index) => (
              <div
                key={index}
                className="py-3 px-10 m-3 rounded-2xl shadow-lg bg-slate-200"
              >
                {pill}
              </div>
            ))}
          </div>
          <div
            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-profile"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab"
          >
            {user.pills.map((pill, index) => (
              <div
                key={index}
                className="py-3 px-10 m-3 w-fit h-fit rounded-2xl shadow-lg bg-slate-200"
              >
                {pill}
              </div>
            ))}
          </div>
          <div
            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-messages"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab"
          >
            {user.pills.map((pill, index) => (
              <div
                key={index}
                className="py-3 px-10 m-3 w-fit h-fit rounded-2xl shadow-lg bg-slate-200"
              >
                {pill}
              </div>
            ))}
          </div>
          <div
            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-contact"
            role="tabpanel"
            aria-labelledby="tabs-contact-tab"
          >
            {user.pills.map((pill, index) => (
              <div
                key={index}
                className="py-3 px-10 m-3 w-fit h-fit rounded-2xl shadow-lg bg-slate-200"
              >
                {pill}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-2 mt-7">
        <BrowsingHistoryChart />
      </div>
      <div className="mt-4">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                First
              </th>
              <th scope="col" className="px-6 py-4">
                Last
              </th>
              <th scope="col" className="px-6 py-4">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td className="whitespace-nowrap px-6 py-4">Mark</td>
              <td className="whitespace-nowrap px-6 py-4">Otto</td>
              <td className="whitespace-nowrap px-6 py-4">@mdo</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td className="whitespace-nowrap px-6 py-4">Jacob</td>
              <td className="whitespace-nowrap px-6 py-4">Thornton</td>
              <td className="whitespace-nowrap px-6 py-4">@fat</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td className="whitespace-nowrap px-6 py-4">Larry</td>
              <td className="whitespace-nowrap px-6 py-4">Wild</td>
              <td className="whitespace-nowrap px-6 py-4">@twitter</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td className="whitespace-nowrap px-6 py-4">Mark</td>
              <td className="whitespace-nowrap px-6 py-4">Otto</td>
              <td className="whitespace-nowrap px-6 py-4">@mdo</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td className="whitespace-nowrap px-6 py-4">Jacob</td>
              <td className="whitespace-nowrap px-6 py-4">Thornton</td>
              <td className="whitespace-nowrap px-6 py-4">@fat</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td className="whitespace-nowrap px-6 py-4">Larry</td>
              <td className="whitespace-nowrap px-6 py-4">Wild</td>
              <td className="whitespace-nowrap px-6 py-4">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Profile
