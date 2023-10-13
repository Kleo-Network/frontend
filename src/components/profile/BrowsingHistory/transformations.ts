import { BrowsingHistory } from './API_interface'
import { TimeRange } from '../../constants/BrowsingHistory'

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let _ = 0; _ < 6; _++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export const transformBrowsingHistory = (
  data: BrowsingHistory | null,
  timeRange: TimeRange
) => {
  const categoryColors: { [key: string]: string } = {}

  if (timeRange === TimeRange.YEAR) {
    const lastSixMonths = getLast6Months()

    data = lastSixMonths.reduce((acc, month) => {
      acc[month] = data?.[month] || {}
      return acc
    }, {} as BrowsingHistory)
  }

  return Object.entries(data || {}).map(([key, value]) => {
    const categories = Object.entries(value || {}).map(([key, value]) => {
      const color = categoryColors[key] || generateRandomColor()
      categoryColors[key] = color

      return {
        type: key,
        value: value.totalCategoryVisits,
        color: color,
        domains: value.domains
      }
    })
    return {
      type: key,
      items: categories.sort((a, b) => b.value - a.value)
    }
  })
}

const getLuminance = (color: string) => {
  const rgb = parseInt(color.replace('#', ''), 16)
  const r = (rgb >> 16) / 255
  const g = ((rgb >> 8) & 0x00ff) / 255
  const b = (rgb & 0x0000ff) / 255
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export const lightenColor = (color: string, percent = 40): string => {
  if (getLuminance(color) > 0.7) return '#F4EBFF'
  const num = parseInt(color.replace('#', ''), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = ((num >> 8) & 0x00ff) + amt,
    G = (num & 0x0000ff) + amt
  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
      (G < 255 ? (G < 1 ? 0 : G) : 255)
    )
      .toString(16)
      .slice(1)
  )
}
function getLast6Months() {
  const currentDate = new Date()
  return Array.from({ length: 6 }, (_, index) => {
    const monthIndex = currentDate.getMonth() - (6 - index - 1)
    const year = currentDate.getFullYear()
    const month = monthIndex < 0 ? 12 + monthIndex : monthIndex + 1
    return new Date(year, month - 1).toLocaleString('default', {
      month: 'long'
    })
  })
}
