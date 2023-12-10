export interface Domain {
  domain: string
  icon: string
  title: string
  visitCounterTimeRange: number
}

export interface Category {
  domains: Domain[]
  totalCategoryVisits: number
}

export interface TimeRange {
  [key: string]: Category
}

export interface BrowsingHistory {
  [key: string]: TimeRange
}

export interface ProcessingHistory {
  processing: boolean
}
