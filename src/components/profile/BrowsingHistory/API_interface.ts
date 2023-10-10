export interface Domain {
  domain: string
  icon: string
  name: string
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
