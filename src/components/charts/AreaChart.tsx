import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
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

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-3 text-xs">
        <MultiProgressBar
          progressBars={[
            { label, percentage: 40, colorClass: 'bg-blue-500' },
            { label, percentage: 20, colorClass: 'bg-red-500' },
            { label, percentage: 5, colorClass: 'bg-green-500' },
            { label, percentage: 5, colorClass: 'bg-yellow-500' }
          ]}
        />
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        First
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Last
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Mark</td>
                      <td className="whitespace-nowrap px-6 py-4">Otto</td>
                      <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        2
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                      <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                      <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        3
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Larry</td>
                      <td className="whitespace-nowrap px-6 py-4">Wild</td>
                      <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Mark</td>
                      <td className="whitespace-nowrap px-6 py-4">Otto</td>
                      <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        2
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                      <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                      <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        3
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Larry</td>
                      <td className="whitespace-nowrap px-6 py-4">Wild</td>
                      <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}

const BrowsingHistoryChart: React.FC = () => {
  return (
    <div className="bg-[#1e293b] p-5 rounded-3xl">
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
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="amt"
            stroke="#818cf8"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BrowsingHistoryChart
