import { BarChartContainer } from '../charts/BarChartContainer'
import MultiProgressBar from '../charts/MultiProgressBar'
import { ReactComponent as SortIcon } from '../../assets/images/sort.svg'

interface BrowsingHistoryProps {
  graphData: any
}
const tags = [
  { label: 'Social', color: '#824A99', percentage: 30 },
  { label: 'News', color: '#8884d8', percentage: 15 },
  { label: 'Entertainment', color: '#F18226', percentage: 20 },
  { label: 'Shopping', color: '#82CA9D', percentage: 5 },
  { label: 'Finance', color: '#FFD700', percentage: 5 },
  { label: 'Gaming', color: '#4169E1', percentage: 15 },
  { label: 'Other', color: '#A9A9A9', percentage: 1 }
]

export default function BrowsingHistory({ graphData }: BrowsingHistoryProps) {
  return (
    <div className="flex flex-col self-stretch rounded-lg border border-gray-200">
      <div className="flex flex-row flex-1 gap-2 justify-between items-center border-b p-5 border-gray-200">
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
      <div className="md:flex  md:space-x-4">
        <div className="md:w-3/5 h-[550px] p-6 border-b md:border-r border-gray-200">
          <BarChartContainer data={graphData} />
        </div>
        <div className="md:w-2/5 h-[550px] flex flex-col items-start">
          <div className="flex flex-col justify-center items-start gap-3 p-5 self-stretch border-b border-gray-200 md:-ml-4">
            <div className="flex flex-row flex-1 justify-between items-center gap-1 self-stretch">
              <h3 className="text-base font-bold text-gray-800">
                7 Days Summary
              </h3>
              <span className="text-xs text-gray-700 bg-gray-100 py-[2px] px-2 rounded-2xl">
                482 visits
              </span>
            </div>
            <div className="flex"></div>
            <MultiProgressBar progressBars={tags} />
            <div className="flex flex-row flex-wrap gap-2 self-stretch items-center justify-start">
              {tags.map(({ label, color }, i) => (
                <button
                  key={i}
                  className="flex items-center  gap-2 rounded-lg border border-gray-200 px-2 py-1"
                >
                  <div
                    className="w-2 h-2 flex-none rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                  <h3 className="text-sm font-medium text-gray-700">{label}</h3>
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch px-6 py-4 gap-4 md:-ml-4 overflow-scroll">
            <div className="flex flex-row items-start self-stretch">
              <div className="flex flex-row flex-1 items-center justify-between">
                <div className="flex flex-col items-start">
                  <div className="text-base text-gray-800 font-medium">
                    Top Visits
                  </div>
                  <div className="text-xs text-gray-400 font-regular">
                    482 Visits
                  </div>
                </div>
                <button className="border border-gray-200 rounded-lg p-2">
                  <SortIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            {tags.map(({ label, color }, i) => (
              <div key={i} className="flex flex-row self-stretch">
                <div className="flex flex-row items-center gap-6 self-stretch">
                  <div className="flex flex-row flex-none items-center justify-center w-8 h-8 rounded-full">
                    <img
                      src="https://github.githubassets.com/favicons/favicon.png"
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="text-sm text-gray-800 font-medium">
                      {label}
                    </div>
                    <div className="flex flex-row gap-2 items-center text-xs text-gray-400 font-regular">
                      <span>482 Visits</span>
                      <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                      <a
                        href={label}
                        target="_blank"
                        className="hover:text-purple-700"
                      >
                        https://github.com
                        {/* {label} */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
