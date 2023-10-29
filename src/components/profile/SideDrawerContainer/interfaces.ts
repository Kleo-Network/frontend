export interface UrlData {
  icon: string
  title: string
  url: string
  visitTime: number
  favourite: boolean
  hidden: boolean
}

export interface WeekData {
  urls: UrlData[]
  visits: number
}

export interface Data {
  [week: string]: WeekData
}
