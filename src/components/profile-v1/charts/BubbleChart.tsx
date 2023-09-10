import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface BubbleChartProps {
  data: any[] // Replace 'any[]' with the appropriate data type for your data
}

const BubbleChart: React.FC<BubbleChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const [width, setWidth] = React.useState(window.innerWidth - 200)

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth - 200)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const interests = [
    {
      topic: 'Programming',
      interest: 4000
    },
    {
      topic: 'Sports',
      interest: 2000
    },
    {
      topic: 'Entertainment',
      interest: 1000
    },
    {
      topic: 'Music',
      interest: 500
    },
    {
      topic: 'Gaming',
      interest: 500
    }
  ]

  useEffect(() => {
    if (svgRef.current) {
      d3.select(svgRef.current).selectAll('*').remove() // Remove all child elements

      // Specify the dimensions of the chart.
      const height = 350
      const margin = 1
      const name = (d: any) => d.id.split('.').pop()
      const group = (d: any) => d.id.split('.')[1]
      const names = (d: any) => name(d).split(/(?=[A-Z][a-z])|\s+/g)

      // Specify the number format for values.
      const format = d3.format(',d')

      // Create a categorical color scale.
      const color = d3
        .scaleOrdinal<string, string>()
        .domain(data.map((d) => d.name))
        .range(['#a6c7e2', '#b19cd9', '#c5a2e3'])

      // Create the pack layout.
      const pack = d3
        .pack()
        .size([width - margin * 2, height - margin * 12])
        .padding(3)

      // Compute the hierarchy from the (flat) data; expose the values
      // for each node; lastly apply the pack layout.
      const root = pack(
        d3.hierarchy({ children: data }).sum((d: any) => d.value) as any
      )

      // Create the SVG container
      const svg = d3
        .select(svgRef.current)
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', [-margin, -margin, width, height])
        .attr('style', 'max-width: 100%; height: auto; font: 10px sans-serif;')
        .attr('text-anchor', 'middle')

      // Place each (leaf) node according to the layout’s x and y values.
      const node = svg
        .append('g')
        .selectAll()
        .data(root.leaves())
        .join('g')
        .attr('transform', (d) => `translate(${d.x},${d.y})`)

      // Add a title.
      node.append('title').text((d: any) => `${d.data.id}\n${format(d.value)}`)

      // Add a filled circle.
      node
        .append('circle')
        .attr('fill-opacity', 0.7)
        .attr('fill', (d) => color(group(d.data)))
        .attr('r', (d) => d.r)

      // Add a label.
      const text = node
        .append('text')
        .attr('clip-path', (d) => `circle(${d.r})`)

      // Add a tspan for each CamelCase-separated word.
      text
        .selectAll()
        .data((d) => names(d.data))
        .join('tspan')
        .attr('x', 0)
        .attr('y', (d, i, nodes) => `${i - nodes.length / 2 + 0.35}em`)
        .text((d: any) => d)

      // Add a tspan for the node’s value.
      text
        .append('tspan')
        .attr('x', 0)
        .attr('y', (d) => `${names(d.data).length / 2 + 0.35}em`)
        .attr('fill-opacity', 0.7)
        .text((d: any) => format(d.value))
    }
  }, [data, width])

  return (
    <div className="w-full flex flex-row gap-4">
      <div className=" bg-white shadow rounded">
        <p className="text-xl font-semibold text-left py-6 px-6 absolute text-gray-600">
          Interests
        </p>
        <svg ref={svgRef}></svg>
      </div>
      <div className="bg-[#565bb4] w-1/5 shadow-md rounded-xl flex flex-col text-indigo-100">
        {interests.map(({ topic, interest }, idx) => (
          <div
            key={idx}
            className={`grow rounded-t-xl flex flex-col justify-center items-center
                ${
                  idx < interests.length - 1 ? ' border-b border-[#6c70b9]' : ''
                }`}
          >
            <p className="text-xl font-bold">{interest}+</p>
            <p className="text-sm font-medium text-indigo-200">{topic}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BubbleChart
