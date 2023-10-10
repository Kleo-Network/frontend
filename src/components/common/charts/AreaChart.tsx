import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
  Label
} from 'recharts'

export interface BrowsingData {
  name: string
  amt: number
}

interface BrowsingHistoryChartProps {
  browsingData: BrowsingData[]
  xAxisLabel?: string
  yAxisLabel?: string
}

const BrowsingHistoryChart: React.FC<BrowsingHistoryChartProps> = ({
  browsingData,
  xAxisLabel,
  yAxisLabel
}) => {
  console.log(browsingData)
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={browsingData}
        margin={{
          top: 30,
          right: 40,
          left: 30,
          bottom: 30
        }}
        onClick={(e) => console.log(e)}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7F56D9" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#fff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          stroke="#F2F4F7"
          strokeDasharray="0 0"
          vertical={false}
        />
        <XAxis
          dataKey="name"
          axisLine={false}
          fontSize={12}
          fill="#667085"
          tickLine={false}
        >
          <Label
            value={xAxisLabel}
            offset={-8}
            position="insideBottom"
            fontSize={12}
            fill="#667085"
          />
        </XAxis>
        <YAxis axisLine={false} fontSize={12} fill="#667085" tickLine={false}>
          <Label
            value={yAxisLabel}
            position="insideLeft"
            angle={-90}
            fontSize={12}
            fill="#667085"
          />
        </YAxis>{' '}
        <Tooltip
          cursor={{
            stroke: '#98A2B3',
            strokeWidth: 1,
            strokeDasharray: '5 5',
            fill: '#F2F4F7'
          }}
          content={() => null}
        />{' '}
        <Area
          type="monotone"
          dataKey="amt"
          stroke="#7F56D9"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorPv)"
        />
        <Bar dataKey="amt" barSize={20} fill="#fff" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default BrowsingHistoryChart
