import { ReactComponent as EmptyIcon } from '../../assets/images/emptyState.svg'

export default function ZeroState() {
  return (
    <div className="flex flex-col items-center w-full justify-center gap-2 p-5">
      <EmptyIcon className="w-30 h-30" />
      <span className="text-sm text-gray-600 font-semibold">
        No pinned websites
      </span>
      <span className="text-sm text-gray-400 font-regular">
        You can pin your favorite websites here.
      </span>
      <span className="text-sm text-gray-400 font-regular">
        Click <i className="font-medium">+Add New</i> to get started.
      </span>
    </div>
  )
}
