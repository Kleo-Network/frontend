// react component to create profile

import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import BrowsingHistoryChart from '../charts/AreaChart'
import StarredCards from './StarredCards'
import Navbar from '../navbar/Navbar'

const ProfileV2: React.FC = () => {
  const [user, setUser] = useState({
    name: 'Ada Lovelace',
    image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
    address: '0x01e92439CFwes2aA2D759709kwjendkwendkjwnedkjwne',
    kleo: 1000,
    topPinned: [
      {
        label: 'Github.com',
        icon: 'Github',
        link: 'https://github.com',
        subPinned: [
          {
            label: 'Kleo-Frontend',
            link: 'https://github.com/Kleo-Network/frontend'
          },
          {
            label: 'Kleo-Backend',
            link: 'https://github.com/Kleo-Network/backend-node'
          },
          {
            label: 'Kleo-Connect',
            link: 'https://github.com/Kleo-Network/kleo-connect'
          },
          {
            label: 'Kleo-Contracts',
            link: 'https://github.com/Kleo-Network/contracts'
          },
          {
            label: 'Kleo-Extension',
            link: 'https://github.com/Kleo-Network/extension'
          }
        ]
      },
      {
        label: 'Youtube.com',
        icon: 'Youtube',
        link: 'https://youtube.com',
        subPinned: [
          {
            label: 'React Tutorial',
            link: 'https://www.youtube.com/watch?v=4UZrsTqkcW4'
          },
          {
            label: 'Node.js Tutorial',
            link: 'https://www.youtube.com/watch?v=ENrzD9HAZK4'
          },
          {
            label: 'Angular Tutorial',
            link: 'https://www.youtube.com/watch?v=2OHbjep_WjQ'
          },
          {
            label: 'Writing smart contracts',
            link: 'https://www.youtube.com/watch?v=qGquE3Cm6jo'
          },
          {
            label: 'Testing Tutorial',
            link: 'https://www.youtube.com/watch?v=4UZrsTqkcW4'
          }
        ]
      },
      {
        label: 'StackOverflow',
        icon: 'Stackoverflow',
        link: 'https://stackoverflow.com/',
        subPinned: [
          {
            label: 'Fixing CORS',
            link: 'https://stackoverflow.com/questions/58372337/how-to-fix-cors-error-request-doesnt-pass-access-control-check'
          },
          {
            label: 'Recharts in React',
            link: 'https://stackoverflow.com/questions/tagged/recharts'
          },
          {
            label: 'React Questions',
            link: 'https://stackoverflow.com/questions/tagged/reactjs'
          },
          {
            label: 'Node.js Questions',
            link: 'https://stackoverflow.com/questions/tagged/node.js'
          },
          {
            label: 'Solidity Questions',
            link: 'https://stackoverflow.com/questions/tagged/solidity'
          }
        ]
      },
      {
        label: 'Reddit.com',
        icon: 'Reddit',
        link: 'https://reddit.com',
        subPinned: [
          {
            label: 'r/ethereum',
            link: 'https://www.reddit.com/r/ethereum/'
          },
          {
            label: 'r/ethdev',
            link: 'https://www.reddit.com/r/ethdev/'
          },
          {
            label: 'r/ethtrader',
            link: 'https://www.reddit.com/r/ethtrader/'
          },
          {
            label: 'r/latesttechnews',
            link: 'https://www.reddit.com/r/latesttechnews/'
          },
          {
            label: 'r/programming',
            link: 'https://www.reddit.com/r/programming/'
          }
        ]
      }
    ],
    browsingData: [
      {
        name: "Jan '23",
        amt: 2400
      },
      {
        name: "Feb '23",
        amt: 2210
      },
      {
        name: "Mar '23",
        amt: 2400
      },
      {
        name: "Apr '23",
        amt: 2210
      },
      {
        name: "May '23",
        amt: 2290
      },
      {
        name: "Jun '23",
        amt: 2000
      },
      {
        name: "Jul '23",
        amt: 2181
      },
      {
        name: "Aug '23",
        amt: 2500
      },
      {
        name: "Sept '23",
        amt: 2100
      }
    ],
    websiteArr: [
      {
        label: 'Website 1',
        link: 'https://picsum.photos/200/10',
        percentage: 40,
        colorClass: 'bg-blue-500'
      },
      {
        label: 'Website 2',
        link: 'https://picsum.photos/200/20',
        percentage: 0,
        colorClass: 'bg-blue-500'
      },
      {
        label: 'Website 6',
        link: 'https://picsum.photos/200/30',
        percentage: 0,
        colorClass: 'bg-blue-500'
      },
      {
        label: 'Website 2',
        link: 'https://picsum.photos/200/40',
        percentage: 20,
        colorClass: 'bg-red-500'
      },
      {
        label: 'Website 5',
        link: 'https://picsum.photos/200/50',
        percentage: 0,
        colorClass: 'bg-red-500'
      },
      {
        label: 'Website 3',
        link: 'https://picsum.photos/200/60',
        percentage: 5,
        colorClass: 'bg-green-500'
      },
      {
        label: 'Website 4',
        link: 'https://picsum.photos/200/70',
        percentage: 5,
        colorClass: 'bg-yellow-500'
      }
    ]
  })

  return (
    <div>
      {/* <Navbar /> */}
      <div
        className="grid grid-cols-4 gap-5 bg-[#e8ebf6] p-3"
        id="slim-content"
      >
        <div className="">
          <ProfileCard user={user} />
        </div>
        <div className="container col-span-3 bg-slate-100 shadow-xl rounded-3xl">
          <div
            className="font-bold text-lg p-5 text-gray-600 bg-white shadow-md rounded-3xl"
            contentEditable
          >
            Pinned Websites
          </div>
          <StarredCards topPinned={user.topPinned} />
        </div>
        <div className="col-span-4">
          <BrowsingHistoryChart
            browsingData={user.browsingData}
            websitesArr={user.websiteArr}
          />
        </div>
      </div>
    </div>
  )
}

export default ProfileV2
