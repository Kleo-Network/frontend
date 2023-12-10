import React from 'react'
import ContentLoader from 'react-content-loader'

const PinSkeletonLoader: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-x-2 gap-y-4 p-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="p-4 rounded-xl bg-white border border-gray-200 w-64"
        >
          <ContentLoader viewBox="0 0 380 70">
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="250" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="150" height="10" />
          </ContentLoader>
        </div>
      ))}
    </div>
  )
}

export default PinSkeletonLoader

export const WebsiteListLoader: React.FC = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="py-4 w-full">
          <ContentLoader viewBox="0 0 340 60">
            <rect x="0" y="0" rx="3" ry="3" width="67" height="8" />
            <rect x="76" y="0" rx="3" ry="3" width="140" height="8" />
            <rect x="127" y="48" rx="3" ry="3" width="53" height="8" />
            <rect x="187" y="48" rx="3" ry="3" width="72" height="8" />
            <rect x="18" y="48" rx="3" ry="3" width="100" height="8" />
            <rect x="0" y="71" rx="3" ry="3" width="37" height="8" />
            <rect x="18" y="23" rx="3" ry="3" width="140" height="8" />
            <rect x="166" y="23" rx="3" ry="3" width="173" height="8" />
          </ContentLoader>
        </div>
      ))}
    </>
  )
}
