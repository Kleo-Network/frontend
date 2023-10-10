import React from 'react'
import ContentLoader from 'react-content-loader'

export function TotalVisitLoader() {
  return (
    <ContentLoader viewBox="0 0 340 20">
      <rect x="0" y="0" rx="5" ry="5" width="100" height="20" />
    </ContentLoader>
  )
}

export function ListLoader() {
  return (
    <div className="flex flex-col items-center justify-center mx-4 mb-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <ContentLoader
          viewBox="0 0 400 60"
          key={index}
          className={`${index < 4 ? ' border-b' : ''} border-gray-200 p-3`}
        >
          <rect x="0" y="0" rx="3" ry="3" width="300" height="13" />
          <rect x="0" y="24" rx="3" ry="3" width="100" height="11" />
          <rect x="0" y="50" rx="3" ry="3" width="37" height="10" />
          <rect x="42" y="50" rx="3" ry="3" width="37" height="10" />
        </ContentLoader>
      ))}
    </div>
  )
}

export function HistoryTabGraphLoader() {
  return (
    <div className="flex items-center justify-center w-full">
      <ContentLoader viewBox="0 0 350 200">
        <rect x="0" y="0" rx="8" ry="8" width="350" height="200" />
      </ContentLoader>
    </div>
  )
}

export function HistoryListLoader() {
  return (
    <div className="flex flex-col items-center w-full justify-center mx-4 my-4 rounded-lg border border-gray-200">
      {Array.from({ length: 5 }).map((_, index) => (
        <ContentLoader
          viewBox="0 0 400 60"
          key={index}
          className={`${index < 4 ? ' border-b' : ''} border-gray-200 p-3`}
        >
          <circle cx="12" cy="30" r="12" />
          <rect x="30" y="15" rx="5" ry="5" width="300" height="10" />
          <rect x="30" y="35" rx="5" ry="5" width="300" height="10" />
          <circle cx="350" cy="30" r="8" />
          <circle cx="380" cy="30" r="8" />
        </ContentLoader>
      ))}
    </div>
  )
}
