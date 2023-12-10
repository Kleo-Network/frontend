import { BarChartContainer } from '../../common/charts/BarChartContainer'
import MultiProgressBar from '../../common/charts/MultiProgressBar'
import { ReactComponent as SortIcon } from '../../../assets/images/sort.svg'
import { ReactComponent as AlertIcon } from '../../../assets/images/alert.svg'
import animationDataProcessing from '../../../assets/images/processing.json'
import noDataAnimation from '../../../assets/images/NoData.json'
import Lottie from 'react-lottie'
import ChartLoader from './ChartLoader'
import useFetch, { FetchStatus } from '../../common/hooks/useFetch'
import { useContext, useEffect, useState } from 'react'
import Alert from '../../common/Alerts'
import {
  BrowserHistoryCategory,
  CategoryData,
  DomainData,
  TimeRange,
  TimeRangeEpoch,
  TimeRangeMapping
} from '../../constants/BrowsingHistory'
import { transformBrowsingHistory, lightenColor } from './transformations'
import {
  BrowsingHistory as GraphData,
  ProcessingHistory
} from './API_interface'
import { getKeyByValue } from '../../utils/utils'
import { useAuthContext } from '../../common/contexts/UserContext'

const API_URL =
  'history/get_browsing_history_graph?user_id={userId}&from={from}&to={to}&filter={filter}'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationDataProcessing,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}
const defaultOptionsNoData = {
  loop: true,
  autoplay: true,
  animationData: noDataAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

export default function BrowsingHistory() {
  const context = useAuthContext()
  const [timeRange, setTimeRange] = useState<TimeRange>(TimeRange.MONTH)
  const { status, data, fetchData } = useFetch<GraphData | ProcessingHistory>(
    makeApiUrl()
  )
  const [graphData, setGraphData] = useState<BrowserHistoryCategory[]>([])
  const [selectedBarData, setSelectedBarData] = useState<CategoryData[]>([])
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [filter, setFilter] = useState<string | null>(null)

  const handleBarClick = (activeBar: number) => {
    setSelectedBarData(graphData[activeBar].items)
    console.log('selectedBarData', graphData[activeBar].items)
  }

  const totalVisits = selectedBarData.reduce((a, b) => a + Number(b.value), 0)
  const totalCategoryVisits = (): number => {
    if (filter) {
      return selectedBarData.reduce(
        (a, b) => (b.type === filter ? a + b.value : a),
        0
      )
    }
    return totalVisits
  }

  useEffect(() => {
    if (!data?.processing) {
      const transformedData = transformBrowsingHistory(
        data as GraphData,
        timeRange
      )
      setGraphData(transformedData)
    }
  }, [data])

  useEffect(() => {
    fetchData(makeApiUrl())
  }, [timeRange])

  function makeApiUrl(): string {
    const timeRangeKey = getKeyByValue(TimeRange, timeRange)

    const currentTime = new Date().getTime() / 1000
    const fromTime =
      currentTime - TimeRangeEpoch[timeRangeKey as keyof typeof TimeRangeEpoch]

    return API_URL.replace('{userId}', context!.user.userId)
      .replace('{from}', fromTime.toString())
      .replace('{to}', String(currentTime))
      .replace(
        '{filter}',
        TimeRangeMapping[timeRangeKey as keyof typeof TimeRangeMapping]
      )
  }

  const formatCategoryName = (name: string) => {
    return name.replace('Category: ', '')
  }

  const domains: DomainData[] = selectedBarData
    .filter(({ type }) => (filter ? type === filter : true))
    .flatMap((category: { domains: DomainData[] }) => category.domains)
    .sort(({ visitCounterTimeRange: v1 }, { visitCounterTimeRange: v2 }) =>
      sortOrder === 'desc' ? v2 - v1 : v1 - v2
    )

  const onFilterChange = (currentFilter: string) => {
    if (currentFilter === filter) {
      currentFilter = ''
    }
    setFilter(currentFilter)
  }

  return (
    <>
      <div className="flex flex-col self-stretch rounded-lg border border-gray-200">
        <div className="flex flex-col md:flex-row flex-1 gap-2 justify-between items-center border-b p-5 border-gray-200">
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-medium text-gray-900">
              Browsing History
            </h3>
            <span className="text-sm font-regular text-gray-500">
              Keep track of your browsing history and their category ratings.
            </span>
          </div>
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
        {status === FetchStatus.LOADING && <ChartLoader />}

        {status === FetchStatus.SUCCESS && graphData.length > 0 && (
          <div className="md:flex  md:space-x-4">
            <div className="md:w-3/5 h-[550px] p-6 border-b md:border-r border-gray-200">
              <BarChartContainer
                data={graphData}
                xAxisLabel={timeRange}
                yAxisLabel="Browser Visits"
                handleBarClick={handleBarClick}
              />
            </div>
            <div className="md:w-2/5 h-[550px] flex flex-col items-start overflow-auto">
              <div className="flex flex-col justify-center items-start gap-3 p-5 self-stretch border-b border-gray-200 md:-ml-4">
                <div className="flex flex-row flex-1 justify-between items-center gap-1 self-stretch">
                  <h3 className="text-base font-bold text-gray-800">
                    {timeRange} Summary
                  </h3>
                  <span className="text-xs text-gray-700 bg-gray-100 py-[2px] px-2 rounded-2xl">
                    {totalVisits} visits
                  </span>
                </div>
                <MultiProgressBar progressBars={selectedBarData} />
                <div className="flex flex-row flex-wrap gap-2 self-stretch items-center justify-start max-h-40 overflow-scroll">
                  {selectedBarData.map(({ type, color }, i) => (
                    <button
                      key={i}
                      className="flex items-center  gap-2 rounded-lg border border-gray-200 px-2 py-1"
                      style={{
                        backgroundColor:
                          filter === type ? lightenColor(color) : '#fff'
                      }}
                      onClick={() => onFilterChange(type)}
                    >
                      <div
                        className="w-2 h-2 flex-none rounded-full"
                        style={{ backgroundColor: color }}
                      ></div>
                      <h3 className="text-sm font-medium text-gray-700">
                        {formatCategoryName(type)}
                      </h3>
                    </button>
                  ))}
                </div>
              </div>
              <div
                data-te-perfect-scrollbar-init
                className="flex flex-col items-start self-stretch px-6 py-4 gap-4 md:-ml-4 overflow-scroll"
              >
                <div className="flex flex-row items-start self-stretch">
                  <div className="flex flex-row flex-1 items-center justify-between">
                    <div className="flex flex-col items-start">
                      <div className="text-base text-gray-800 font-medium">
                        {filter ? formatCategoryName(filter) : 'Top Visits'}
                      </div>
                      <div className="text-xs text-gray-400 font-regular">
                        {totalCategoryVisits()} Visits
                      </div>
                    </div>
                    <button
                      className="border border-gray-200 rounded-lg p-2 hover:bg-gray-50 active:bg-gray-100"
                      onClick={() =>
                        setSortOrder((val) => (val === 'asc' ? 'desc' : 'asc'))
                      }
                    >
                      <SortIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                {domains.map(
                  ({ domain, icon, visitCounterTimeRange, title }, i) => (
                    <div key={i} className="flex flex-row self-stretch">
                      <div className="flex flex-row items-center gap-6 self-stretch">
                        <div className="flex flex-row flex-none items-center justify-center w-8 h-8 rounded-full">
                          <img src={icon} className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col items-start">
                          <div className="text-sm text-gray-800 font-medium">
                            {domain}
                          </div>
                          <div className="flex flex-row gap-2 items-center text-xs text-gray-400 font-regular">
                            <span>{visitCounterTimeRange} Visits</span>
                            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                            <a
                              href={domain}
                              target="_blank"
                              className="hover:text-purple-700 hover:underline"
                            >
                              {domain}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {status === FetchStatus.SUCCESS && data?.processing && (
          <div className="flex flex-col items-center justify-center py-24 px-6 gap-2">
            <div className="flex w-1/2 mb-8 md:w-1/3">
              <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
            </div>
            <h3 className="text-gray-700 font-semibold text-base -mt-10">
              Reports will take some time to load...
            </h3>
            <span className="text-gray-700 font-medium text-sm text-center">
              It might take around 10-12 mins to prepare report. You can come
              back later.
            </span>
          </div>
        )}

        {status === FetchStatus.SUCCESS && graphData.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 px-6 gap-2">
            <div className="flex w-1/2 mb-4 md:w-1/3 -mt-10">
              <Lottie
                options={defaultOptionsNoData}
                height={'100%'}
                width={'100%'}
              />
            </div>
            <h3 className="text-gray-700 font-semibold text-base -mt-10">
              No Data was recorded in this time...
            </h3>
            <span className="text-gray-700 font-medium text-sm text-center">
              Please try again later and make sure the Kleo Extension is
              installed
            </span>
          </div>
        )}

        {status === FetchStatus.ERROR && (
          <div className="m-3">
            <Alert
              type="danger"
              message="Could not fetch the data, please refresh the page"
              icon={
                <AlertIcon className="w-5 h-5 fill-red-200 stroke-red-600" />
              }
            />
          </div>
        )}
      </div>
    </>
  )
}
