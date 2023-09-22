import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Bar
} from 'recharts'
import MultiProgressBar from './MultiProgressBar'

interface BrowsingData {
  name: string
  amt: number
}

interface Website {
  label: string
  link: string
  percentage: number
  colorClass: string
}
interface CustomTooltipProps {
  websites: Website[]
  // add other props here
}

interface BrowsingHistoryChartProps {
  browsingData: BrowsingData[]
  websitesArr: Website[]
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ websites }) => {
  //   if (active && payload && payload.length) {
  return (
    <div className="custom-tooltip rounded-3xl bg-white p-3 shadow-lg text-xs">
      <h3 className="text-center text-lg text-gray-700 font-medium leading-8 mb-3 shadow-sm bg-slate-100 rounded">
        Time Snapshot
      </h3>
      <MultiProgressBar progressBars={websites} />
      <div className="flex flex-row flex-wrap justify-between">
        {websites.map((bar, index) => (
          <div className="" key={index}>
            <div className=" py-2">
              <div className="">
                <div
                  data-te-chip-init
                  data-te-ripple-init
                  className={`[word-wrap: break-word] my-[5px] flex h-[42px] cursor-pointer items-center justify-between rounded-[21px] ${bar.colorClass} px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-white shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none`}
                >
                  <img
                    className="my-0 -ml-[12px] mr-[8px] h-10 w-10 rounded-[100%]"
                    src={bar.link}
                    alt="Contact Person"
                  />
                  {bar.label}
                  <span
                    data-te-chip-close
                    className="float-right w-4 cursor-pointer pl-[8px] text-[16px] text-white opacity-[.83] transition-all duration-200 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-3 w-3 fill-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
  //   }

  return null
}

const BrowsingHistoryChart: React.FC<BrowsingHistoryChartProps> = ({
  browsingData,
  websitesArr
}) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="bg-[#1e293b] p-5 rounded-3xl col-span-2 shadow-lg">
        <div className="pb-3">
          <h3 className="text-white text-lg font-bold">Browsing History</h3>
          <span className="text-gray-400 text-sm">
            Your visual journey on the internet
          </span>
        </div>
        <ResponsiveContainer width="100%" aspect={3}>
          <AreaChart
            width={400}
            height={400}
            data={browsingData}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 0
            }}
            onClick={(e) => console.log(e)}
          >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#818cf8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="1 1" fill="#1e293b" opacity={0.3} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}

            <Area
              type="monotone"
              dataKey="amt"
              stroke="#818cf8"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorPv)"
            />
            <Bar dataKey="amt" barSize={20} fill="#fff" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div>
        <CustomTooltip websites={websitesArr} />
      </div>
    </div>
  )
}

export default BrowsingHistoryChart
