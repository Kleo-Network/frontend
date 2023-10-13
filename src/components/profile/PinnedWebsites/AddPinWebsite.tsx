import React from 'react'
import ZeroState from '../../common/ZeroState'
import useFetch, { FetchStatus } from '../../common/hooks/useFetch'
import { WebsiteListLoader } from './PinnedSectionLoader'
import Alert from '../../common/Alerts'
import { ReactComponent as AlertIcon } from '../../../assets/images/alert.svg'
import { ReactComponent as PinIcon } from '../../../assets/images/pin.svg'

const API_URL = '../../mocks/PinnedWebsitesSearch.json'

export function AddPinWebsite() {
  const [search, setSearch] = React.useState('')
  const { status, data, error, fetchData } = useFetch<[]>()

  const onSearch = (searchText: string) => {
    setSearch(searchText)
    fetchData(API_URL.replace('{search}', searchText))
  }

  return (
    <div className="flex flex-col items-start">
      <div className="p-6 text-lg w-full font-medium text-gray-900 border-b border-gray-200">
        Add Pinned Website
      </div>
      <div className="flex flex-col w-full  max-h-[80vh] overflow-scroll items-start gap-4 p-6">
        <input
          type="text"
          className="min-h-[auto] w-full rounded-lg border px-3 py-[0.32rem] leading-[1.6] text-base font-regular text-gray-800 bg-white border-gray-200 shadow-sm focus:outline-none focus:border-primary focus:ring-0"
          placeholder="Search or Enter url here"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
        {search.length === 0 && (
          <div className="flex w-full mb-6">
            <ZeroState
              subheader="Search and pin your favourite websites here"
              actionText=""
            />
          </div>
        )}
        {status === FetchStatus.LOADING && <WebsiteListLoader />}
        {status === FetchStatus.SUCCESS && search && !data && (
          <div className="flex w-full mb-6">
            <ZeroState
              header="No results found"
              subheader={search}
              actionText="0 visits"
            />
          </div>
        )}
        {status === FetchStatus.SUCCESS && search && data && (
          <div className="flex flex-col w-full">
            {data.map((website: any) => (
              <div
                key={website.id}
                className="flex flex-row items-center p-4 gap-4 rounded-xl bg-white border border-gray-200 w-64"
              >
                <div className="text-left w-full">
                  <h4 className="text-sm font-medium text-gray-800">
                    {website.name}
                  </h4>
                  <a
                    className="text-xs font-regular text-gray-500 flex max-w-[150px] overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-purple-700 hover:underline"
                    title={website.domain_name}
                    href={website.domain_name}
                    target="_blank"
                  >
                    {website.domain_name}
                  </a>
                </div>
                <button className="px-3 py-2 flex flex-row items-center gap-2 shadow rounded-lg border border-gray-200">
                  <PinIcon className="w-5 h-5" />
                  <span className="text-sm text-gray-700 font-medium">
                    Unpin
                  </span>
                </button>
              </div>
            ))}
          </div>
        )}
        {status === FetchStatus.ERROR && (
          <div className="w-full my-16">
            <Alert
              type="danger"
              message="Could not fetch the data, please try again later."
              icon={
                <AlertIcon className="w-5 h-5 fill-red-200 stroke-red-600" />
              }
            />
          </div>
        )}
      </div>
    </div>
  )
}
