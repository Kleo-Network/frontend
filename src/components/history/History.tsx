import React from 'react'
import { ReactComponent as BinIcon } from '../../assets/images/bin.svg'
import { ReactComponent as StarIcon } from '../../assets/images/star.svg'
import { ReactComponent as EyeIcon } from '../../assets/images/eye.svg'
import { ReactComponent as SearchIcon } from '../../assets/images/search.svg'
import { CurrentBrowserHistory } from '../constants/Website'

const websiteHistory: CurrentBrowserHistory = {
  today: [
    {
      name: 'Stack Overflow Node.js problem set',
      url: 'https://stackoverflow.com/questions/tagged/node.js',
      time: '12:00 PM',
      visits: 10
    },
    {
      name: 'Stack Overflow Ethereum problem set',
      url: 'https://stackoverflow.com/questions/tagged/ethereum',
      time: '12:00 PM',
      visits: 10
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      time: '12:00 PM',
      visits: 10
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      time: '12:00 PM',
      visits: 10
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      time: '12:00 PM',
      visits: 10
    }
  ],
  yesterday: [
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      time: '12:00 PM',
      visits: 10
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      time: '12:00 PM',
      visits: 10
    }
  ],
  '2 days ago': [
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      time: '12:00 PM',
      visits: 10
    }
  ]
}

export default function History() {
  const [search, setSearch] = React.useState('')

  const filteredHistory: CurrentBrowserHistory = React.useMemo(() => {
    return Object.keys(websiteHistory).reduce(
      (acc, key) => ({
        ...acc,
        [key]: websiteHistory[key].filter(
          ({ name, url }) =>
            name.toLowerCase().includes(search.toLowerCase()) ||
            url.toLowerCase().includes(search.toLowerCase())
        )
      }),
      {}
    )
  }, [search])

  return (
    <div className="py-12 px-24 flex flex-col items-start justify-center">
      <div className="flex flex-row justify-between mb-4 w-full">
        <h1 className="text-xl font-medium text-gray-900">History</h1>
        <div className="flex flex-row justify-center items-center">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 active:outline-none focus:outline-none focus:border-purple-700"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="flex flex-row items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 ml-4">
            <BinIcon className="w-5 h-5 text-red-600" />
            <span className="text-sm text-red-600 font-medium">
              Clear History
            </span>
          </button>
        </div>
      </div>
      {Object.keys(filteredHistory).map((key, index) => (
        <div
          key={index}
          className="flex flex-col mt-4 self-stretch items-start justify-start border border-gray-200 rounded-lg"
        >
          <div className="text-xs self-stretch text-gray-400 font-semibold p-4 border-b border-gray-200 capitalize">
            {key}
          </div>
          <div className="flex flex-col self-stretch mx-6">
            {filteredHistory[key].map(({ time, name, visits, url }, index) => (
              <div
                key={index}
                className="flex flex-row gap-8 justify-between items-center self-stretch py-3 border-b border-gray-200 last:border-b-0"
              >
                <div className="text-xs text-gray-500 font-regular pt-1">
                  {time}
                </div>
                <div className="flex flex-col flex-1 items-start justify-center">
                  <span className="text-sm text-gray-800 font-medium overflow-hidden overflow-ellipsis whitespace-nowrap">
                    {name}
                  </span>
                  <a
                    href={url}
                    title={url}
                    target="_blank"
                    className="text-xs text-gray-400 font-regular overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-purple-700 hover:underline"
                  >
                    {url}
                  </a>
                  <span className="text-xs pt-1 text-gray-500 font-medium">
                    {visits} visits
                  </span>
                </div>
                <StarIcon className="w-6 h-6 cursor-pointer stroke-gray-300 hover:fill-yellow-200 hover:stroke-yellow-200" />
                <EyeIcon className="w-6 h-6 cursor-pointer stroke-gray-300 hover:stroke-purple-700" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
