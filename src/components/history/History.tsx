import React from 'react'
import { ReactComponent as BinIcon } from '../../assets/images/bin.svg'
import { ReactComponent as StarIcon } from '../../assets/images/star.svg'
import { ReactComponent as EyeIcon } from '../../assets/images/eye.svg'
import { ReactComponent as SearchIcon } from '../../assets/images/search.svg'
import {
  CurrentBrowserHistory,
  WebsiteHistoryProps
} from '../constants/Website'
import useFetch, { FetchStatus } from '../common/hooks/useFetch'
import Alert from '../common/Alerts'
import { ReactComponent as AlertIcon } from '../../assets/images/alert.svg'
import Modal from '../common/Modal'
// TODO: Remove this import
import data from '../mocks/History.json'

const API_URL = '../mocks/History.json'

export default function History() {
  const [search, setSearch] = React.useState('')
  // const { status, data, fetchData } = useFetch<CurrentBrowserHistory>(API_URL)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  // React.useEffect(() => {
  //   fetchData(API_URL)
  // }, [])

  const filteredHistory: CurrentBrowserHistory = React.useMemo(() => {
    return Object.keys(data as CurrentBrowserHistory).reduce(
      (acc, key) => ({
        ...acc,
        [key]: data![key].filter(
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
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex flex-row items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 ml-4"
          >
            <BinIcon className="w-5 h-5 text-red-600" />
            <span className="text-sm text-red-600 font-medium">
              Clear History
            </span>
          </button>
        </div>
      </div>
      {/* {status === FetchStatus.LOADING && <LoadingSpinner />} */}
      {/* {status === FetchStatus.SUCCESS && */}
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
      {status === FetchStatus.ERROR && (
        <div className="w-full my-6">
          <Alert
            type="danger"
            message="Could not fetch the data, please try again later."
            icon={<AlertIcon className="w-5 h-5 fill-red-200 stroke-red-600" />}
          />
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col items-center justify-center p-6">
          <div className="rounded-full bg-red-100 p-2 border-8 border-red-50">
            <BinIcon className="w-6 h-6 text-red-600" />
          </div>
          <span className="text-gray-900 text-lg font-medium mt-4">
            Delete browsing history?
          </span>
          <span className="text-gray-500 text-sm font-regular mt-1 text-center">
            Are you sure you want to delete the browsing history? This action
            cannot be undone.
          </span>
          <div className="flex flex-row self-stretch justify-center items-center gap-3 mt-6">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 self-stretch flex-1 rounded-lg shadow border border-gray-200 text-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 self-stretch flex-1 rounded-lg shadow bg-red-600 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
