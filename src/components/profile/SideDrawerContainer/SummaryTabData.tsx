import React, { useEffect, useState } from 'react'
import { ReactComponent as AddIcon } from '../../../assets/images/add.svg'
import useFetch, { FetchStatus } from '../../common/hooks/useFetch'
import { ListLoader, TotalVisitLoader } from './SkeletonLoaders'
import Alert from '../../common/Alerts'
import { ReactComponent as AlertIcon } from '../../../assets/images/alert.svg'
import ZeroState from '../../common/ZeroState'
import { getVisitTime } from '../../utils/utils'

interface SummaryTabDataProps {
  userId: string
  domain: string
}

interface SummaryTabData {
  total_visit_count: number
  favourites: {
    category: string
    category_description: string
    category_group: string
    domain: string
    favourite: boolean
    hidden: boolean
    id: string
    isLocal: boolean
    lastVisitTime: string
    title: string
    url: string
    visitCount: string
    visitTime: string
  }[]
}
const API_URL =
  'pinned/get_pinned_summary_domain?user_id={userId}&domain_name={domain}'

export function SummaryTabData({ userId, domain }: SummaryTabDataProps) {
  const { status, data, error } = useFetch<SummaryTabData>(makeApiUrl())

  const [summaryData, setSummaryData] = useState<SummaryTabData | null>(data)

  useEffect(() => {
    setSummaryData(data)
  }, [data])

  function makeApiUrl(): string {
    return API_URL.replace('{userId}', userId).replace('{domain}', domain)
  }

  return (
    <div className="data-[te-tab-active]:block" role="tabpanel">
      <div className="flex flex-col items-start justify-center gap-1 p-6 rounded-lg border border-gray-200">
        <span className="text-base text-gray-700 font-medium">
          Total visits
          {/* TODO: Add last fetch date */}
          {/* <span className="text-sm text-gray-400 font-regular">
            (since 23rd June, 2023)
          </span> */}
        </span>

        {status === FetchStatus.LOADING ? (
          <div className="w-full h-fit mt-2">
            <TotalVisitLoader />
          </div>
        ) : (
          <span className="text-4xl text-gray-900 font-medium">
            {summaryData?.total_visit_count}
          </span>
        )}
      </div>
      <div className="flex flex-col items-start justify-center gap-1 rounded-lg border border-gray-200 mt-4">
        <div className="flex flex-row self-stretch justify-between items-center border-b border-gray-200 p-6">
          <span className="text-base font-medium text-gray-900">Favorites</span>
          <button className="flex flex-row gap-2 items-center justify-center rounded-lg border border-gray-200 shadow px-3 py-2">
            <AddIcon className="w-5 h-5" />
            <span className="text-sm text-gray-700 font-regular">Add new</span>
          </button>
        </div>
        {status === FetchStatus.LOADING ? (
          <div className="w-full h-fit mt-2">
            <ListLoader />
          </div>
        ) : (
          summaryData?.favourites?.map(
            ({ title, url, visitCount, visitTime }, i) => (
              <div
                key={i}
                className="flex flex-row items-center self-stretch p-4 gap-4 border-b border-gray-200"
              >
                <div className="text-left w-full">
                  <h4 className="text-sm font-medium text-gray-800">{title}</h4>
                  <a
                    className="text-xs py-1 font-regular text-gray-400 flex overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-purple-700 hover:underline"
                    title={url}
                    href={url}
                    target="_blank"
                  >
                    {url}
                  </a>
                  <div className="flex flex-row gap-2 items-center text-xs font-regular text-gray-400 pt-1">
                    <span>{visitCount} Visits</span>
                    <span className="w-1 h-1 rounded-full bg-gray-200 border border-gray-200"></span>
                    <span>Last visited on {getVisitTime(visitTime)} </span>
                  </div>
                </div>
              </div>
            )
          )
        )}
        {status === FetchStatus.SUCCESS &&
          summaryData?.favourites?.length === 0 && <ZeroState />}
        {status === FetchStatus.ERROR && (
          <div className="m-3">
            <Alert
              type="danger"
              message="Could not fetch the data, please retry"
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
