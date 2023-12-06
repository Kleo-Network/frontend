import React, {
  useContext,
  useEffect,
  useRef,
  useCallback,
  useState
} from 'react'
import { ReactComponent as BinIcon } from '../../assets/images/bin.svg'
import { ReactComponent as StarIcon } from '../../assets/images/star.svg'
import { ReactComponent as EyeIcon } from '../../assets/images/eye.svg'
import { ReactComponent as SearchIcon } from '../../assets/images/search.svg'
import useFetch, { FetchStatus } from '../common/hooks/useFetch'
import Alert from '../common/Alerts'
import { ReactComponent as AlertIcon } from '../../assets/images/alert.svg'
import Modal from '../common/Modal'
import { HistoryListLoader } from '../profile/SideDrawerContainer/SkeletonLoaders'
import { useAuthContext } from '../common/contexts/UserContext'
import { UrlData } from '../constants/UrlData'
import { Data } from '../profile/SideDrawerContainer/interfaces'
import { getVisitTime } from '../utils/utils'
import useDebounce from '../common/hooks/useDebounce'

const STAR_URL_API = `history/add_to_favourites?user_id={userId}&visitTime={visitTime}`
const UNSTAR_URL_API = `history/remove_from_favourites?user_id={userId}&url={url}`
const HIDE_URL_API = `history/hide_history_items`
const API_URL =
  'history/scan_history_by_url_or_title?user_id={userId}&search={search}&page={pageNo}&size={pageSize}'
const DELETE_HISTORY = `history/delete_history_items`

export default function History() {
  const context = useAuthContext()
  const [search, setSearch] = useState('')
  const debouncedSearchTerm = useDebounce(search, 500)
  const [pageNo, setPageNo] = useState(1)
  const pageSize = 50
  const [fetchedItems, setFetchedItems] = useState<UrlData[]>([])
  const { status, data, fetchData } = useFetch<UrlData[]>(makeApiUrl(pageNo))
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data: starred, fetchData: fetchData2 } = useFetch<Data>()
  const {
    data: deleted,
    fetchData: deleteDataFetch,
    status: deleteStatus
  } = useFetch()
  const observer = useRef<IntersectionObserver | null>(null)
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [isAllSelected, setIsAllSelected] = useState(false)
  const globalCheckboxRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (debouncedSearchTerm) {
      setPageNo(1)
      fetchData(makeApiUrl(1))
    }
  }, [debouncedSearchTerm])

  const toggleItemSelection = (visitTime: number) => {
    const newSelectedItems = selectedItems.includes(visitTime)
      ? selectedItems.filter((item) => item !== visitTime)
      : [...selectedItems, visitTime]
    setSelectedItems(newSelectedItems)
    if (globalCheckboxRef.current) {
      const allVisitTimes = filteredHistory.map((item) => item.visitTime)

      globalCheckboxRef.current.indeterminate =
        newSelectedItems.length > 0 &&
        newSelectedItems.length < allVisitTimes.length
    }
  }

  const toggleAllSelection = () => {
    const allVisitTimes = filteredHistory.map((item) => item.visitTime)

    if (selectedItems.length === allVisitTimes.length) {
      setSelectedItems([])
      setIsAllSelected(false)
    } else {
      setSelectedItems(allVisitTimes)
      setIsAllSelected(true)
    }
  }

  const lastItemRef = useCallback((node: Element | null) => {
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageNo((prevPageNo) => {
          fetchData(makeApiUrl(prevPageNo + 1))
          setIsAllSelected(false)
          return prevPageNo + 1
        })
      }
    })
    if (node) observer.current.observe(node)
  }, [])

  function makeApiUrl(pageNo: number): string {
    return API_URL.replace('{userId}', context!.user.userId)
      .replace('{search}', search)
      .replace('{pageNo}', pageNo.toString())
      .replace('{pageSize}', pageSize.toString())
  }

  const handleFavourites = (
    visitTime: number,
    url: string,
    favourite: boolean
  ) => {
    let apiUrl = STAR_URL_API.replace('{userId}', context!.user.userId).replace(
      '{visitTime}',
      String(visitTime)
    )
    if (favourite) {
      apiUrl = UNSTAR_URL_API.replace('{userId}', context!.user.userId).replace(
        '{url}',
        url
      )
    }

    fetchData2(apiUrl, {
      method: 'POST',
      onSuccessfulFetch: () => {
        fetchData(makeApiUrl(pageNo))
      }
    })
  }

  const deleteSelectedHistory = () => {
    console.log('deleting selected history items:', selectedItems)
    deleteDataFetch(DELETE_HISTORY, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: context!.user.userId,
        visit_times: selectedItems
      }),
      onSuccessfulFetch: () => {
        setIsModalOpen(false)
        fetchData(makeApiUrl(1))
      }
    })
  }

  const handleUrlHide = (visitTimes: number[], hidden: boolean) => {
    fetchData2(HIDE_URL_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: context!.user.userId,
        visit_times: visitTimes,
        hide: !hidden
      }),
      onSuccessfulFetch: () => {
        fetchData(makeApiUrl(pageNo))
      }
    })
  }

  function markKeywords(text: string) {
    if (!search) {
      return [text]
    }
    const regex = new RegExp(`(${search})`, 'gi')
    const parts = text.split(regex)
    return parts.map((part, index) => {
      if (part.match(regex)) {
        return <mark key={index}>{part}</mark>
      }
      return part
    })
  }

  const filteredHistory: UrlData[] = React.useMemo(() => {
    const newFetchedItems = [...fetchedItems, ...(data || [])]
    setFetchedItems(newFetchedItems)
    console.log(newFetchedItems.length)

    return (newFetchedItems || []).filter((item) => item.url.includes(search))
  }, [search, data])

  function HistoryItem(
    index: number,
    visitTime: number,
    title: string,
    url: string,
    favourite: boolean,
    handleFavourites: (
      visitTime: number,
      url: string,
      favourite: boolean
    ) => void,
    hidden: boolean,
    handleUrlHide: (visitTimes: number[], hidden: boolean) => void,
    isChecked: boolean,
    toggleItemSelection: (visitTime: number) => void
  ) {
    return (
      <div
        key={index}
        className="flex flex-row gap-4 justify-between items-center self-stretch py-3 "
      >
        <div>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => toggleItemSelection(visitTime)}
          />
        </div>
        <div className="text-xs text-gray-500 font-regular pt-1">
          {getVisitTime(visitTime.toString())}
        </div>
        <div className="flex flex-col flex-1 items-start justify-center overflow-hidden overflow-ellipsis whitespace-nowrap">
          <span title={title} className="text-sm text-gray-800 font-medium">
            {markKeywords(title)}
          </span>
          <a
            href={url}
            title={url}
            target="_blank"
            className="text-xs text-gray-400 font-regular hover:text-purple-700 hover:underline"
          >
            {markKeywords(url)}
          </a>
        </div>
        <StarIcon
          className={`${
            favourite && 'fill-yellow-500 stroke-yellow-500'
          } w-6 h-6 cursor-pointer stroke-gray-300 hover:fill-yellow-200 hover:stroke-yellow-200`}
          onClick={() => handleFavourites(visitTime, url, favourite)}
        />
        <EyeIcon
          className={`
                        ${hidden && 'stroke-purple-700'}
                        w-6 h-6 cursor-pointer stroke-gray-300 hover:stroke-purple-700`}
          onClick={() => handleUrlHide([visitTime], hidden)}
        />
      </div>
    )
  }
  return (
    <div className="py-12 px-24 flex flex-col items-start justify-center">
      <div className="flex flex-row justify-between mb-4 w-full">
        <h1 className="text-xl font-medium text-gray-900">History</h1>
        <div className="flex flex-row justify-center items-center">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 active:outline-none focus:outline-none focus:border-purple-700"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            disabled={selectedItems.length === 0}
            className="flex flex-row items-center justify-center gap-2 rounded-lg text-red-600 border border-gray-300 px-4 py-2 ml-4 disabled:bg-gray-50 disabled:text-red-300"
          >
            <BinIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Clear History</span>
          </button>
        </div>
      </div>

      {(filteredHistory.length || status === FetchStatus.SUCCESS) && (
        <div className="flex flex-col mt-4 self-stretch items-start justify-start border border-gray-200 rounded-lg">
          <div className="flex self-stretch gap-2 items-center px-6 py-3 border-b-2 border-gray-200">
            <input
              type="checkbox"
              checked={isAllSelected}
              onChange={toggleAllSelection}
              ref={globalCheckboxRef}
            />
            <span>Select All</span>
          </div>
          <div className="flex flex-col self-stretch mx-6">
            {filteredHistory.map(
              ({ favourite, hidden, icon, url, title, visitTime }, index) => {
                const isChecked = selectedItems.includes(visitTime)

                if (filteredHistory.length === index + 1) {
                  return (
                    <div
                      ref={lastItemRef}
                      key={index}
                      className="border-b border-gray-200 last:border-b-0"
                    >
                      {HistoryItem(
                        index,
                        visitTime,
                        title,
                        url,
                        favourite,
                        handleFavourites,
                        hidden,
                        handleUrlHide,
                        isChecked,
                        toggleItemSelection
                      )}
                    </div>
                  )
                } else {
                  return (
                    <div
                      key={index}
                      className="border-b border-gray-200 last:border-b-0"
                    >
                      {HistoryItem(
                        index,
                        visitTime,
                        title,
                        url,
                        favourite,
                        handleFavourites,
                        hidden,
                        handleUrlHide,
                        isChecked,
                        toggleItemSelection
                      )}
                    </div>
                  )
                }
              }
            )}
          </div>
        </div>
      )}
      {status === FetchStatus.LOADING && <HistoryListLoader />}

      {status === FetchStatus.ERROR && (
        <div className="w-full my-6">
          <Alert
            type="danger"
            message="Could not fetch the data, please try again later."
            icon={<AlertIcon className="w-5 h-5 fill-red-200 stroke-red-600" />}
          />
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        hideCloseButton={deleteStatus === FetchStatus.LOADING}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="flex flex-col items-center justify-center p-6">
          <div className="rounded-full bg-red-100 p-2 border-8 border-red-50">
            <BinIcon className="w-6 h-6 text-red-600" />
          </div>
          <span className="text-gray-900 text-lg font-medium mt-4">
            Delete browsing history?
          </span>
          <span className="text-gray-500 text-sm font-regular mt-1 text-center">
            Are you sure you want to delete the browsing history? This action
            cannot be undone.
          </span>
          {deleteStatus === FetchStatus.LOADING && (
            <div
              className="inline-block m-1 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Deleting...
              </span>
            </div>
          )}
          {deleteStatus === FetchStatus.ERROR && (
            <div className="w-full my-4">
              <Alert
                type="danger"
                message="Could not delete the data, please try again later."
                icon={
                  <AlertIcon className="w-5 h-5 fill-red-200 stroke-red-600" />
                }
              />
            </div>
          )}
          <div className="flex flex-row self-stretch justify-center items-center gap-3 mt-6">
            <button
              onClick={() => setIsModalOpen(false)}
              disabled={deleteStatus === FetchStatus.LOADING}
              className="px-4 py-2 self-stretch flex-1 rounded-lg shadow border border-gray-200 text-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={() => deleteSelectedHistory()}
              disabled={deleteStatus === FetchStatus.LOADING}
              className="px-4 py-2 self-stretch flex-1 rounded-lg shadow bg-red-600 text-white"
            >
              {deleteStatus === FetchStatus.LOADING ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
