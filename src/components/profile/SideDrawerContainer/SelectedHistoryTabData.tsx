import React, { useEffect, useState, useContext } from 'react'
import AreaChart from '../../common/charts/AreaChart'
import { BrowsingData } from '../../common/charts/AreaChart'
import { ReactComponent as StarIcon } from '../../../assets/images/star.svg'
import { ReactComponent as EyeIcon } from '../../../assets/images/eye.svg'
import useFetch, { FetchStatus } from '../../common/hooks/useFetch'
import {
  TimeRange,
  TimeRangeEpoch,
  TimeRangeMapping
} from '../../constants/BrowsingHistory'
import { getKeyByValue, getVisitTime } from '../../utils/utils'
import { Data } from './interfaces'
import { HistoryListLoader, HistoryTabGraphLoader } from './SkeletonLoaders'
import Alert from '../../common/Alerts'
import { ReactComponent as AlertIcon } from '../../../assets/images/alert.svg'
import { UserContext } from '../../common/contexts/UserContext'
import { getLast6Months } from '../BrowsingHistory/transformations'

interface SelectedHistoryTabDataProps {
  domain: string
}

const API_URL =
  'pinned/get_pinned_data_domain?user_id={userId}&from={from}&to={to}&domain_name={domain}&filter={filter}'

const STAR_URL_API = `history/add_to_favourites?user_id={userId}&visitTime={visitTime}`
const UNSTAR_URL_API = `history/remove_from_favourites?user_id={userId}&url={url}`
const HIDE_URL_API = `history/hide_history_items`

export function SelectedHistoryTabData({
  domain
}: SelectedHistoryTabDataProps) {
  const { user } = useContext(UserContext)
  const [timeRange, setTimeRange] = useState<TimeRange>(TimeRange.MONTH)
  const { status, data, fetchData: fetchData1 } = useFetch<Data>(makeApiUrl())
  const { data: starred, fetchData: fetchData2 } = useFetch<Data>()

  useEffect(() => {
    fetchData1(makeApiUrl())
  }, [timeRange])

  const handleFavourites = (
    visitTime: number,
    url: string,
    favourite: boolean
  ) => {
    let apiUrl = STAR_URL_API.replace('{userId}', user.userId).replace(
      '{visitTime}',
      String(visitTime)
    )
    if (favourite) {
      apiUrl = UNSTAR_URL_API.replace('{userId}', user.userId).replace(
        '{url}',
        url
      )
    }

    fetchData2(apiUrl, {
      method: 'POST',
      onSuccessfulFetch: () => {
        fetchData1(makeApiUrl())
      }
    })
  }

  const handleUrlHide = (visitTimes: number[], hidden: boolean) => {
    fetchData2(HIDE_URL_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: user.userId,
        visit_times: visitTimes,
        hide: !hidden
      }),
      onSuccessfulFetch: () => {
        fetchData1(makeApiUrl())
      }
    })
  }

  const getSortedData = (data: Data | null): Data => {
    const sortedData: Data = {}
    Object.keys(data || {}).forEach((key) => {
      sortedData[key] = {
        ...data![key],
        urls: data![key].urls.sort((a, b) => b.visitTime - a.visitTime)
      }
    })
    return sortedData
  }

  function makeApiUrl(): string {
    const timeRangeKey = getKeyByValue(TimeRange, timeRange)

    const currentTime = new Date().getTime()
    const fromTime =
      currentTime - TimeRangeEpoch[timeRangeKey as keyof typeof TimeRangeEpoch]
    const toTime = currentTime

    return API_URL.replace('{userId}', user.userId)
      .replace('{from}', fromTime.toString())
      .replace('{to}', toTime.toString())
      .replace('{domain}', domain)
      .replace(
        '{filter}',
        TimeRangeMapping[timeRangeKey as keyof typeof TimeRangeMapping]
      )
  }

  const getGraphData = (data: Data): BrowsingData[] => {
    if (timeRange === TimeRange.YEAR) {
      const lastSixMonths = getLast6Months()

      return lastSixMonths.map((month) => {
        return {
          name: month,
          amt: data[month]?.visits || 0
        }
      })
    } else if (timeRange === TimeRange.WEEK) {
      const weekdays = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ]
      const graphData: BrowsingData[] = []
      for (let i = 0; i < 7; i++) {
        graphData.push({
          name: weekdays[i],
          amt: data[weekdays[i]]?.visits || 0
        })
      }
      return graphData
    }
    return Object.keys(data).map((key) => {
      return {
        name: key,
        amt: data[key].visits
      }
    })
  }

  return (
    <div className="data-[te-tab-active]:block" role="tabpanel">
      <div className="flex flex-col items-center">
        <div className="flex flex-row self-stretch items-center justify-between gap-1 pb-4">
          <span className="text-lg text-gray-800 font-semibold">History</span>
          <div
            className="inline-flex  text-sm font-regular text-gray-700 shadow-sm rounded-lg"
            role="group"
          >
            {Object.values(TimeRange).map((range, i) => (
              <button
                key={i}
                className={`${
                  range === timeRange ? 'bg-gray-100' : 'bg-white'
                } text-gray-700 hover:bg-gray-50 border border-gray-200 px-4 py-2 text-sm font-medium ${
                  i === 0 && 'rounded-l-lg'
                } ${
                  i === Object.values(TimeRange).length - 1 && 'rounded-r-lg'
                }`}
                onClick={() => setTimeRange(range)}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
        {status === FetchStatus.LOADING && <HistoryTabGraphLoader />}
        {status === FetchStatus.SUCCESS && (
          <div className="h-[260px] w-full flex items-center  rounded-lg border border-gray-200">
            <AreaChart
              browsingData={getGraphData(data || {})}
              xAxisLabel={timeRange}
              yAxisLabel="Browser Visits"
            />
          </div>
        )}

        {status === FetchStatus.LOADING && <HistoryListLoader />}
        {status === FetchStatus.SUCCESS &&
          Object.keys(data || {}).map((key, index) => (
            <div
              key={index}
              className="flex flex-col mt-4 self-stretch items-start justify-start border border-gray-200 rounded-lg"
            >
              <div className="text-xs self-stretch text-gray-400 font-semibold p-4 border-b border-gray-200 capitalize">
                {key}
              </div>
              <div className="flex flex-col self-stretch mx-6">
                {getSortedData(data)[key].urls.map(
                  ({ visitTime, title, url, favourite, hidden }, index) => (
                    <div
                      key={index}
                      className="flex flex-row gap-4 justify-between items-center self-stretch py-3 border-b border-gray-200 last:border-b-0"
                    >
                      <div className="text-xs text-gray-500 font-regular pt-1">
                        {getVisitTime(visitTime.toString())}
                      </div>
                      <div className="flex flex-col flex-1 items-start justify-center max-w-xs overflow-hidden overflow-ellipsis whitespace-nowrap">
                        <span
                          title={title}
                          className="text-sm text-gray-800 font-medium"
                        >
                          {title}
                        </span>
                        <a
                          href={url}
                          title={url}
                          target="_blank"
                          className="text-xs text-gray-400 font-regular hover:text-purple-700 hover:underline"
                        >
                          {url}
                        </a>
                        {/* <span className="text-xs pt-1 text-gray-500 font-medium">
                      {visits} visits
                    </span> */}
                      </div>
                      <StarIcon
                        className={`${
                          favourite && 'fill-yellow-500 stroke-yellow-500'
                        } w-6 h-6 cursor-pointer stroke-gray-300 hover:fill-yellow-200 hover:stroke-yellow-200`}
                        onClick={() =>
                          handleFavourites(visitTime, url, favourite)
                        }
                      />
                      <EyeIcon
                        className={`
                        ${hidden && 'stroke-purple-700'}
                        w-6 h-6 cursor-pointer stroke-gray-300 hover:stroke-purple-700`}
                        onClick={() => handleUrlHide([visitTime], hidden)}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          ))}

        {status === FetchStatus.ERROR && (
          <div className="m-3">
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
