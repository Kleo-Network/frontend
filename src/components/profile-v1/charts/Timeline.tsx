import * as React from 'react'
import { Timeline } from 'react-svg-timeline'

export const TimelineChart = () => {
  const [width, setWidth] = React.useState(window.innerWidth - 100)

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth - 100)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const laneId = 'demo-lane'
  const lanes = [
    {
      laneId,
      label: 'Demo Lane'
    }
  ]
  const events = [
    {
      eventId: 'event-1',
      tooltip: '<div>heelo work</div>',
      laneId,
      startTimeMillis: 1167606000000,
      endTimeMillis: 1230698892000
    },
    {
      eventId: 'event-2',
      tooltip: 'Event 2',
      laneId: laneId,
      startTimeMillis: 1399845600000
    }
  ]
  const dateFormat = (ms: number) => new Date(ms).toLocaleString()
  return (
    <div className="bg-white rounded shadow">
      <Timeline
        width={width}
        height={300}
        events={events}
        lanes={lanes}
        dateFormat={dateFormat}
      />
    </div>
  )
}
