import React from 'react'

interface ProgressBarProps {
  label: string
  percentage: number
  colorClass: string // You can use Tailwind CSS classes for colors (e.g., "bg-blue-500")
}

interface MultiProgressBarProps {
  progressBars: ProgressBarProps[]
}

const MultiProgressBar: React.FC<MultiProgressBarProps> = ({
  progressBars
}) => {
  return (
    <div className="mb-2 flex flex-col">
      <div className="mb-6 h-5 w-full flex flex-row bg-gray-400">
        {progressBars.map((bar, index) => (
          <div
            key={index}
            className={`h-5 ${bar.colorClass}`}
            style={{ width: `${bar.percentage}%` }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default MultiProgressBar
