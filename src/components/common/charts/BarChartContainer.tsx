import React from 'react'
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
  data: StackedBarChartData[]
  xAxisLabel?: string
  yAxisLabel?: string
  handleBarClick: (e: number) => void
}

interface StackedBarChartData {
  type: string
  items: BarChartData[]
}

interface BarChartData {
  type: string
  value: number
  color: string
}

const ANIMATION_DURATION = 600

export function BarChartContainer({
  data,
  xAxisLabel,
  yAxisLabel,
  handleBarClick
}: BarChartContainerProps) {
  const [activeTooltipIndex, setActiveTooltipIndex] = React.useState(0)
  const flattenData = data.map((week) => {
    const flattenedItems = week.items.reduce((acc: any, item: any) => {
      acc[item.type] = item.value
      return acc
    }, {})
    const sortedItems = Object.entries(flattenedItems)
      .sort((a: any, b: any) => b[1] - a[1])
      .reduce((acc: any, [key, value]) => {
        acc[key] = value
        return acc
      }, {})
    return { type: week.type, ...sortedItems }
  })
  const allCategories = [
    ...new Set(data.flatMap((week) => week.items.map((item) => item.type)))
  ]
  const categoryColors = data
    .flatMap((week) => week.items)
    .reduce((acc: any, item) => {
      acc[item.type] = item.color
      return acc
    }, {})

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={flattenData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20
        }}
        onClick={(e) => handleBarClick(e?.activeTooltipIndex || 0)}
      >
        <CartesianGrid
          stroke="#F2F4F7"
          strokeDasharray="0 0"
          vertical={false}
        />
        <XAxis
          dataKey="type"
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
            radius: 8,
            pointerEvents: 'auto'
          }}
          content={() => null}
          trigger="click"
          active={activeTooltipIndex === 1 || activeTooltipIndex === 2}
        />
        {allCategories.map((category, index) => (
          <Bar
            key={'bar-' + category}
            dataKey={category}
            stackId="bar"
            fill={categoryColors[category]}
            radius={
              index === 0
                ? [0, 0, 8, 8]
                : index === allCategories.length - 1
                ? [8, 8, 0, 0]
                : [0, 0, 0, 0]
            }
            animationBegin={(ANIMATION_DURATION / allCategories.length) * index}
            animationDuration={ANIMATION_DURATION / allCategories.length}
            animationEasing="ease-in"
            onClick={(e) => setActiveTooltipIndex(e?.activeTooltipIndex || 0)}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  )
}
