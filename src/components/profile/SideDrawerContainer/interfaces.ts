export interface UrlData {
  icon: string
  title: string
  url: string
  visitTime: number
  favourite: boolean
  hidden: boolean
}

export interface WeekData {
  // urls: UrlData[]
  // visits: number
  data: string
  date: string
  domain: string
  domain_user_id: string
}

export interface Data {
  [week: string]: WeekData
}
