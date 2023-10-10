export interface UrlData {
  icon: string
  title: string
  url: string
  visitTime: number
  favourite: boolean
}

export interface WeekData {
  urls: UrlData[]
  visits: number
}

export interface Data {
  [week: string]: WeekData
}
