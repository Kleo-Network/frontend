import React from 'react'

interface ProgressBarProps {
  label: string
  percentage: number
  color: string
}

interface MultiProgressBarProps {
  progressBars: ProgressBarProps[]
}

const MultiProgressBar: React.FC<MultiProgressBarProps> = ({
  progressBars
}) => {
  return (
    <div className="mb-2 flex flex-col rounded-lg self-stretch">
      <div className="h-8 w-full flex flex-row bg-gray-400 rounded-lg overflow-hidden">
        {progressBars.map((bar, index) => (
          <div
            key={index}
            className="h-8"
            style={{ width: `${bar.percentage}%`, backgroundColor: bar.color }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default MultiProgressBar
