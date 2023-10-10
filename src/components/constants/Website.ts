export interface CurrentBrowserHistory {
  [key: string]: WebsiteHistoryProps[]
}

export interface WebsiteHistoryProps {
  name: string
  url: string
  time: string
  visits: number
  isHidden?: boolean
}
