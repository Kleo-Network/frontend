import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  ResponsiveContainer
} from 'recharts'

interface BarChartContainerProps {
  data: any
}

const ANIMATION_DURATION = 600
const TOTAL_BARS = 3

export function BarChartContainer({ data }: BarChartContainerProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20
        }}
        onClick={(e) => console.log(e)} //TODO: make tooltip appear on click and hover
      >
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
            value="Month"
            offset={-8}
            position="insideBottom"
            fontSize={12}
            fill="#667085"
          />
        </XAxis>
        <YAxis axisLine={false} fontSize={12} fill="#667085" tickLine={false}>
          <Label
            value="Browser Visits"
            offset={-8}
            position="insideLeft"
            angle={-90}
            fontSize={12}
            fill="#667085"
          />
        </YAxis>
        <Tooltip
          cursor={{
            stroke: '#98A2B3',
            strokeWidth: 1,
            strokeDasharray: '5 5',
            fill: '#F2F4F7',
            radius: 8
          }}
          content={() => null}
        />
        // TODO: use forEach here to create bars dynamically
        <Bar
          dataKey="pv"
          stackId="a"
          fill="#8884d8"
          maxBarSize={32}
          radius={[0, 0, 8, 8]}
          animationBegin={(ANIMATION_DURATION / TOTAL_BARS) * 0}
          animationDuration={ANIMATION_DURATION / TOTAL_BARS}
          animationEasing="ease-in"
        />
        <Bar
          dataKey="uv"
          stackId="a"
          fill="#82ca9d"
          maxBarSize={32}
          animationBegin={(ANIMATION_DURATION / TOTAL_BARS) * 1}
          animationDuration={ANIMATION_DURATION / TOTAL_BARS}
        />
        <Bar
          dataKey="amt"
          stackId="a"
          fill="#824a99"
          maxBarSize={32}
          radius={[8, 8, 0, 0]}
          animationBegin={(ANIMATION_DURATION / TOTAL_BARS) * 2}
          animationDuration={ANIMATION_DURATION / TOTAL_BARS}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
