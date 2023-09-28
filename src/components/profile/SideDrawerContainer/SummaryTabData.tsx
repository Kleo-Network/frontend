import React from 'react'
import { ReactComponent as AddIcon } from '../../../assets/images/add.svg'

export function SummaryTabData() {
  return (
    <div className="data-[te-tab-active]:block" role="tabpanel">
      <div className="flex flex-col items-start justify-center gap-1 p-6 rounded-lg border border-gray-200">
        <span className="text-base text-gray-700 font-medium">
          Total visits{' '}
          <span className="text-sm text-gray-400 font-regular">
            (since 23rd June, 2023)
          </span>
        </span>
        <span className="text-4xl text-gray-900 font-medium">32,206</span>
      </div>
      <div className="flex flex-col items-start justify-center gap-1 rounded-lg border border-gray-200 mt-4">
        <div className="flex flex-row self-stretch justify-between items-center border-b border-gray-200 p-6">
          <span className="text-base font-medium text-gray-900">Favorites</span>
          <button className="flex flex-row gap-2 items-center justify-center rounded-lg border border-gray-200 shadow px-3 py-2">
            <AddIcon className="w-5 h-5" />
            <span className="text-sm text-gray-700 font-regular">Add new</span>
          </button>
        </div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-row items-center self-stretch p-4 gap-4 border-b border-gray-200"
          >
            <div className="text-left w-full">
              <h4 className="text-sm font-medium text-gray-800">
                Python Dash app problem over callback for multiple filtering
                with dataframe
              </h4>
              <a
                className="text-xs font-regular text-gray-400 flex overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-purple-700"
                title="https://www.youtube.com/"
                href="https://www.youtube.com/"
                target="_blank"
              >
                https://stackoverflow.com/questions/77129583/python-dash-app-problem-over-callback-for-multiple-filtering-with-dataframe{' '}
              </a>
              <span className="text-xs font-regular text-gray-400 pt-2">
                {29 + i} Visits
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
