import { useEffect, useState } from 'react'
import { Method } from 'axios'

type Options<T> = {
  method?: Method
  body?: BodyInit | null
  headers?: HeadersInit
  mode?: RequestMode
  cache?: RequestCache
  credentials?: RequestCredentials
  redirect?: RequestRedirect
  referrerPolicy?: ReferrerPolicy
  integrity?: string
  keepalive?: boolean
  onSuccessfulFetch?: (data?: T) => void
}

type FetchResponse<T> = {
  data: T | null
  status: FetchStatus
  error: any
  fetchData: (url: string) => void
}

export enum FetchStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

function useFetch<T>(url?: string, options?: Options<T>): FetchResponse<T> {
  const [data, setData] = useState<T | null>(null)
  // const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(FetchStatus.IDLE)
  const [error, setError] = useState(null)
  const baseUrl = 'https://api.kleo.network/api/v1/core'
  const controller = new AbortController()
  const signal = controller.signal

  const fetchData = async (url: string) => {
    if (url === '') {
      return
    }
    setStatus(FetchStatus.LOADING)

    fetch(`${baseUrl}/${url}`, {
      method: options?.method || 'GET',
      body: options?.body || null,
      headers: options?.headers || {},
      mode: options?.mode || 'cors',
      cache: options?.cache || 'default',
      credentials: options?.credentials || 'same-origin',
      redirect: options?.redirect || 'follow',
      referrerPolicy: options?.referrerPolicy || 'no-referrer',
      integrity: options?.integrity || '',
      keepalive: options?.keepalive || false,
      signal: signal
    })
      .then((response) => {
        if (!response.ok) {
          throw Error('Could not fetch data for that resource')
        }
        // for (let i = 0; i < 1000000000; i++) {
        //   //
        // }
        return response.json()
      })
      .then((data) => {
        setData(data)
        setStatus(FetchStatus.SUCCESS)
        if (options?.onSuccessfulFetch) {
          options.onSuccessfulFetch()
        }
      })
      .catch((err) => {
        setError(err.message)
        setStatus(FetchStatus.ERROR)
      })
  }

  const fetchDataManually = (url: string) => {
    fetchData(url)
  }

  useEffect(() => {
    fetchData(url || '')
  }, [])

  return { data, status, error, fetchData: fetchDataManually }
}

export default useFetch