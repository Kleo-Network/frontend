import { ReactComponent as EmptyIcon } from '../../assets/images/emptyState.svg'

const HEADER = 'No pinned websites'
const SUBHEADER = 'You can pin your favorite websites here.'
const ACTION_TEXT =
  'Click <i className="font-medium">+Add New</i> to get started.'

interface ZeroStateProps {
  header?: string
  subheader?: string
  actionText?: string
}

export default function ZeroState({
  header = HEADER,
  subheader = SUBHEADER,
  actionText = ACTION_TEXT
}: ZeroStateProps) {
  return (
    <div className="flex flex-col items-center w-full justify-center gap-2 p-5">
      <EmptyIcon className="w-30 h-30" />
      <span className="text-sm text-gray-600 font-semibold">{header}</span>
      <span className="text-sm text-gray-400 font-regular">{subheader}</span>
      <span
        dangerouslySetInnerHTML={{ __html: actionText }}
        className="text-sm text-gray-400 font-regular"
      ></span>
    </div>
  )
}
