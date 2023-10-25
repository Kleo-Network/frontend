export interface BrowserHistoryCategory {
  items: CategoryData[]
  type: string
}

export interface CategoryData {
  domains: DomainData[]
  value: number
  color: string
  type: string
}

export interface DomainData {
  domain: string
  icon: string
  title: string
  visitCounterTimeRange: number
}

export enum TimeRange {
  DAY = '24 Hours',
  WEEK = '7 days',
  MONTH = '30 days',
  YEAR = '6 months'
}

export enum TimeRangeEpoch {
  DAY = 86400000,
  WEEK = 604800000,
  MONTH = 2592000000,
  YEAR = 15552000000
}

export enum TimeRangeMapping {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year'
}
