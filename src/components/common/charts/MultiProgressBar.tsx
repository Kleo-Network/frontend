import React from 'react'

interface ProgressBarProps {
  value: number
  color: string
}

interface MultiProgressBarProps {
  progressBars: ProgressBarProps[]
}

const MultiProgressBar: React.FC<MultiProgressBarProps> = ({
  progressBars
}) => {
  const total = progressBars.reduce((a, b) => a + Number(b.value), 0)

  return (
    <div className="mb-2 flex flex-col rounded-lg self-stretch">
      <div className="h-8 w-full flex flex-row bg-gray-400 rounded-lg overflow-hidden">
        {progressBars.map(({ value, color }, index) => (
          <div
            key={index}
            className="h-8"
            style={{
              width: `${(value / total) * 100}%`,
              backgroundColor: color
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default MultiProgressBar
