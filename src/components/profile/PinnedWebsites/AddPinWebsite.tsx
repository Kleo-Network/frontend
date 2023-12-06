import React, { useContext, useEffect } from 'react'
import ZeroState from '../../common/ZeroState'
import useFetch, { FetchStatus } from '../../common/hooks/useFetch'
import { WebsiteListLoader } from './PinnedSectionLoader'
import Alert from '../../common/Alerts'
import { ReactComponent as AlertIcon } from '../../../assets/images/alert.svg'
import { ReactComponent as PinIcon } from '../../../assets/images/pin.svg'
import { useAuthContext } from '../../common/contexts/UserContext'
import useDebounce from '../../common/hooks/useDebounce'

const API_URL = 'pinned/get_domain?domain={domain}&user_id={userId}'
const PIN_URL = 'pinned/add_pinned_website'
const UNPIN_URL = 'pinned/remove_pinned_website'

interface AddPinWebsiteProps {
  onPinHandler: () => void
}

interface SearchResult {
  domain: string
  visits: number
  pinned: boolean
}

export function AddPinWebsite({ onPinHandler }: AddPinWebsiteProps) {
  const context = useAuthContext()
  const [search, setSearch] = React.useState('')
  const { status, data, error, fetchData } = useFetch<SearchResult[]>()
  const debouncedSearchTerm = useDebounce(search, 500)
  const { data: pinned, fetchData: fetchData2 } = useFetch<any>()

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchData(
        API_URL.replace('{domain}', debouncedSearchTerm).replace(
          '{userId}',
          context!.user.userId
        )
      )
    }
  }, [debouncedSearchTerm])

  const handlePin = (website: SearchResult) => {
    const url = website.pinned ? UNPIN_URL : PIN_URL
    fetchData2(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...website,
        order: 0,
        user_id: context!.user.userId,
        title: website.domain,
        pinned: !website.pinned
      }),
      onSuccessfulFetch(data) {
        setSearch('')
        onPinHandler()
      }
    })
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
          onChange={(e) => setSearch(e.target.value)}
        />
        {search.length === 0 && (
          <div className="flex w-full mb-6">
            <ZeroState
              subheader="Search and pin your favourite websites here"
              actionText=""
            />
          </div>
        )}
        {status === FetchStatus.LOADING && search && <WebsiteListLoader />}
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
            {data.map((website: any, idx: number) => (
              <div
                key={idx}
                className="flex flex-row items-center p-4 gap-4 rounded-xl bg-white"
              >
                <div className="text-left w-full">
                  <h4 className="text-sm font-medium text-gray-800">
                    {website.domain}
                  </h4>
                  <a
                    className="text-xs font-regular text-gray-500 flex max-w-[150px] overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-purple-700 hover:underline"
                    title={website.domain}
                    href={website.domain}
                    target="_blank"
                  >
                    {website.domain}
                  </a>
                  {website.visits && (
                    <span className="text-xs pt-1 text-gray-500 font-medium">
                      {website.visits} visits
                    </span>
                  )}
                </div>
                <button
                  className={`px-3 py-2 flex flex-row items-center gap-2 min-w-[96px] shadow rounded-lg border border-gray-200 ${
                    website.pinned
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700'
                  }`}
                  onClick={() => handlePin(website)}
                >
                  <PinIcon
                    className={`w-5 h-5 ${
                      website.pinned ? 'stroke-white' : 'stroke-gray-700'
                    }`}
                  />
                  <span className="text-sm font-medium">
                    {website.pinned ? 'Unpin' : 'Pin'}
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
