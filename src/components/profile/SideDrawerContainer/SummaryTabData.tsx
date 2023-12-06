import React, { useEffect, useState, useContext } from 'react'
import { ReactComponent as AddIcon } from '../../../assets/images/add.svg'
import useFetch, { FetchStatus } from '../../common/hooks/useFetch'
import { ListLoader, TotalVisitLoader } from './SkeletonLoaders'
import Alert from '../../common/Alerts'
import { ReactComponent as AlertIcon } from '../../../assets/images/alert.svg'
import ZeroState from '../../common/ZeroState'
import { getKeyByValue, getVisitTime } from '../../utils/utils'
import { useAuthContext } from '../../common/contexts/UserContext'
import { HistoryTabGraphLoader } from './SkeletonLoaders'
import {
  TimeRange,
  TimeRangeEpoch,
  TimeRangeMapping
} from '../../constants/BrowsingHistory'
import AreaChart, { BrowsingData } from '../../common/charts/AreaChart'
import { Data, WeekData } from './interfaces'
import { useParams } from 'react-router-dom'
import { getLast6Months } from '../BrowsingHistory/transformations'

interface SummaryTabDataProps {
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
const API_URL_GRAPH =
  'pinned/get_pinned_data_domain?user_id={userId}&from={from}&to={to}&domain_name={domain}&filter={filter}'

export function SummaryTabData({ domain }: SummaryTabDataProps) {
  const context = useAuthContext()
  const { status, data, error } = useFetch<SummaryTabData>(makeApiUrl())
  const { id } = useParams()

  const [summaryData, setSummaryData] = useState<SummaryTabData | null>(data)

  const [timeRange, setTimeRange] = useState<TimeRange>(TimeRange.MONTH)
  const {
    status: graphStatus,
    data: graphData,
    fetchData: fetchData1
  } = useFetch<WeekData[]>(makeApiUrlGraph())

  useEffect(() => {
    fetchData1(makeApiUrlGraph())
  }, [timeRange])

  function makeApiUrlGraph(): string {
    const timeRangeKey = getKeyByValue(TimeRange, timeRange)

    const currentTime = new Date().getTime() / 1000
    const fromTime =
      currentTime - TimeRangeEpoch[timeRangeKey as keyof typeof TimeRangeEpoch]
    const toTime = currentTime

    return API_URL_GRAPH.replace('{userId}', context!.user.userId)
      .replace('{from}', fromTime.toString())
      .replace('{to}', toTime.toString())
      .replace('{domain}', domain)
      .replace(
        '{filter}',
        TimeRangeMapping[timeRangeKey as keyof typeof TimeRangeMapping]
      )
  }

  function getCategory(timeRange: TimeRange, date: number): string {
    const currentDate = new Date(date * 1000)
    const currentDay = currentDate.getDay()
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()

    switch (timeRange) {
      case TimeRange.DAY:
        return currentDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
        })
      case TimeRange.WEEK:
        return currentDate.toLocaleDateString('en-US', { weekday: 'short' })
      case TimeRange.MONTH:
        return `Week ${Math.ceil(currentDate.getDate() / 7)}`
      case TimeRange.YEAR:
        return currentDate.toLocaleString('en-US', { month: 'short' })
      default:
        return ''
    }
  }

  const getGraphData = (data: WeekData[]): BrowsingData[] => {
    // if (timeRange === TimeRange.YEAR) {
    //   const lastSixMonths = getLast6Months()

    //   return lastSixMonths.map((month) => {
    //     return {
    //       name: month,
    //       amt: data[month]?.visits || 0
    //     }
    //   })
    // } else if (timeRange === TimeRange.WEEK) {
    //   const weekdays = [
    //     'Monday',
    //     'Tuesday',
    //     'Wednesday',
    //     'Thursday',
    //     'Friday',
    //     'Saturday',
    //     'Sunday'
    //   ]
    //   const graphData: BrowsingData[] = []
    //   for (let i = 0; i < 7; i++) {
    //     graphData.push({
    //       name: weekdays[i],
    //       amt: data[weekdays[i]]?.visits || 0
    //     })
    //   }
    //   return graphData
    // } else if (timeRange === TimeRange.MONTH) {
    const aggregatedData: BrowsingData[] = []

    if (timeRange === TimeRange.DAY) {
      const timeData = JSON.parse(data.length ? data[0].data : '[]')

      const newData = timeData.map((entry: any) => {
        return {
          name: entry['time_bracket'],
          amt: entry['visitCount']
        }
      })

      console.log(newData, timeData)
      return newData
    }

    data.forEach((entry) => {
      const timeData = JSON.parse(entry.data)

      timeData.forEach((timeEntry: any) => {
        const category = getCategory(timeRange, Number(entry.date))

        const existingEntry = aggregatedData.find(
          (aggEntry) =>
            aggEntry.name === getCategory(timeRange, Number(entry.date)) &&
            getCategory(timeRange, Number(entry.date)) === category
        )

        if (existingEntry) {
          existingEntry.amt += timeEntry.visitCount
        } else {
          aggregatedData.push({
            name: getCategory(timeRange, Number(entry.date)),
            amt: timeEntry.visitCount
          })
        }
      })
    })

    aggregatedData.sort((a, b) => {
      const monthOrder: any = {
        Jan: 1,
        Feb: 2,
        Mar: 3,
        Apr: 4,
        May: 5,
        Jun: 6,
        Jul: 7,
        Aug: 8,
        Sep: 9,
        Oct: 10,
        Nov: 11,
        Dec: 12
      }

      return monthOrder[a.name] - monthOrder[b.name]
    })

    // Sort aggregatedData based on the name property (assuming name represents weeks)
    aggregatedData.sort((a, b) => {
      const getWeekNumber = (name: string) =>
        parseInt(name.replace('Week', ''), 10)
      return getWeekNumber(a.name) - getWeekNumber(b.name)
    })

    aggregatedData.sort((a, b) => {
      const dayOrder: any = {
        Sunday: 0,
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6
      }

      return dayOrder[a.name] - dayOrder[b.name]
    })

    console.log(aggregatedData)
    return aggregatedData
    // }
    // return Object.keys(data).map((key) => {
    //   return {
    //     name: key,
    //     amt: data[key].visits
    //   }
    // })
  }

  useEffect(() => {
    setSummaryData(data)
  }, [data])

  function makeApiUrl(): string {
    return API_URL.replace('{userId}', context!.user.userId).replace(
      '{domain}',
      domain
    )
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
      <div className="flex flex-row items-center justify-between mx-3 my-4">
        <span className="text-lg text-gray-800 font-semibold">History</span>
        <div
          className="flex flex-row  text-sm font-regular text-gray-700 shadow-sm rounded-lg"
          role="group"
        >
          {Object.values(TimeRange).map((range, i) => (
            <button
              key={i}
              className={`${
                range === timeRange ? 'bg-gray-100' : 'bg-white'
              } text-gray-700 hover:bg-gray-50 border border-gray-200 px-4 py-2 text-sm font-medium ${
                i === 0 && 'rounded-l-lg'
              } ${i === Object.values(TimeRange).length - 1 && 'rounded-r-lg'}`}
              onClick={() => setTimeRange(range)}
            >
              {range}
            </button>
          ))}
        </div>
      </div>
      {graphStatus === FetchStatus.LOADING && <HistoryTabGraphLoader />}
      {graphStatus === FetchStatus.SUCCESS && (
        <div className="h-[260px] w-full flex items-center self-stretch  rounded-lg border border-gray-200">
          <AreaChart
            browsingData={getGraphData(graphData || [])}
            xAxisLabel={timeRange}
            yAxisLabel="Browser Visits"
          />
        </div>
      )}
      <div className="flex flex-col items-start justify-center gap-1 rounded-lg border border-gray-200 mt-4">
        <div className="flex flex-row self-stretch justify-between items-center border-b border-gray-200 p-6">
          <span className="text-base font-medium text-gray-900">Favorites</span>
          {id === context!.user.userId && (
            <button className="flex flex-row gap-2 items-center justify-center rounded-lg border border-gray-200 shadow px-3 py-2">
              <AddIcon className="w-5 h-5 stroke-gray-700" />
              <span className="text-sm text-gray-700 font-regular">
                Add new
              </span>
            </button>
          )}
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
