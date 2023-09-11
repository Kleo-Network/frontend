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

const data = [
  {
    name: "Jan '23",
    amt: 2400
  },
  {
    name: "Feb '23",
    amt: 2210
  },
  {
    name: "Mar '23",
    amt: 2400
  },
  {
    name: "Apr '23",
    amt: 2210
  },
  {
    name: "May '23",
    amt: 2290
  },
  {
    name: "Jun '23",
    amt: 2000
  },
  {
    name: "Jul '23",
    amt: 2181
  },
  {
    name: "Aug '23",
    amt: 2500
  },
  {
    name: "Sept '23",
    amt: 2100
  }
]

const websiteArr = [
  {
    label: 'Website 1',
    percentage: 40,
    colorClass: 'bg-blue-500'
  },
  {
    label: 'Website 2',
    percentage: 20,
    colorClass: 'bg-red-500'
  },
  {
    label: 'Website 3',
    percentage: 5,
    colorClass: 'bg-green-500'
  },
  {
    label: 'Website 4',
    percentage: 5,
    colorClass: 'bg-yellow-500'
  },
  {
    label: 'Website 5',
    percentage: 0,
    colorClass: 'bg-green-500'
  },
  {
    label: 'Website 6',
    percentage: 0,
    colorClass: 'bg-yellow-500'
  }
]

const CustomTooltip = ({ label }: any) => {
  //   if (active && payload && payload.length) {
  return (
    <div className="custom-tooltip rounded-3xl bg-white p-5 shadow-lg text-xs">
      <MultiProgressBar progressBars={websiteArr} />
      <div className="flex flex-row flex-wrap">
        {websiteArr.map((bar, index) => (
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8" key={index}>
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <div
                  data-te-chip-init
                  data-te-ripple-init
                  className="[word-wrap: break-word] my-[5px] mr-4 flex h-[42px] cursor-pointer items-center justify-between rounded-[21px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none"
                >
                  <img
                    className="my-0 -ml-[12px] mr-[8px] h-10 w-10 rounded-[100%]"
                    src="https://picsum.photos/200/300"
                    alt="Contact Person"
                  />
                  {bar.label}
                  <span
                    data-te-chip-close
                    className="float-right w-4 cursor-pointer pl-[8px] text-[16px] text-black opacity-[.53] transition-all duration-200 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-3 w-3 fill-black"
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

const BrowsingHistoryChart: React.FC = () => {
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
            data={data}
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
        <CustomTooltip label={''} />
      </div>
    </div>
  )
}

export default BrowsingHistoryChart
