import React from 'react'
import AreaChart from '../../common/charts/AreaChart'
import { BrowsingData } from '../../common/charts/AreaChart'
import { ReactComponent as StarIcon } from '../../../assets/images/star.svg'
import { ReactComponent as EyeIcon } from '../../../assets/images/eye.svg'
import { CurrentBrowserHistory } from '../../constants/Website'

interface SelectedHistoryTabDataProps {
  areaChartData: BrowsingData[]
  currentBrowserHistory: CurrentBrowserHistory
}

export function SelectedHistoryTabData({
  areaChartData,
  currentBrowserHistory
}: SelectedHistoryTabDataProps) {
  return (
    <div className="data-[te-tab-active]:block" role="tabpanel">
      <div className="flex flex-col items-center">
        <div className="flex flex-row self-stretch items-center justify-between gap-1 pb-4">
          <span className="text-lg text-gray-800 font-semibold">History</span>
          <div
            className="inline-flex  text-sm font-regular text-gray-700 shadow-sm rounded-lg"
            role="group"
          >
            <button
              type="button"
              className="inline-block rounded-l-lg border border-gray-200 px-4 py-[10px]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              24 Hours
            </button>
            <button
              type="button"
              className="-ml-0.5 inline-block border border-gray-200 px-4 py-[10px]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              7 days
            </button>
            <button
              type="button"
              className="-ml-0.5 inline-block border border-gray-200 px-4 py-[10px]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              30 days
            </button>
            <button
              type="button"
              className="-ml-0.5 inline-block rounded-r-lg border border-gray-200 px-4 py-[10px]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              12 months
            </button>
          </div>
        </div>
        <div className="h-[260px] w-full flex items-center  rounded-lg border border-gray-200">
          <AreaChart browsingData={areaChartData} />
        </div>
        {Object.keys(currentBrowserHistory).map((key, index) => (
          <div
            key={index}
            className="flex flex-col mt-4 self-stretch items-start justify-start border border-gray-200 rounded-lg"
          >
            <div className="text-xs self-stretch text-gray-400 font-semibold p-4 border-b border-gray-200 capitalize">
              {key}
            </div>
            <div className="flex flex-col self-stretch mx-6">
              {currentBrowserHistory[key].map(
                ({ time, name, visits, url }, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-4 justify-between items-center self-stretch py-3 border-b border-gray-200 last:border-b-0"
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
                        className="text-xs text-gray-400 font-regular overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-purple-700"
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
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
