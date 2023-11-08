import { ReactComponent as CopyIcon } from '../../../assets/images/copy.svg'
import ProfilePhoto from '../../../assets/images/content4.png'

interface CardProps {
  name: string
  address: string
}

export function Card({ name, address }: CardProps) {
  return (
    <div className="flex flex-col items-center justify-start shrink-0 drop-shadow-4xl bg-white rounded-xl border border-gray-200 font-inter">
      <div className="flex flex-col items-center justify-start gap-4 p-2 pb-4">
        <div className="flex items-center justify-center">
          <img
            className="w-72 h-72 rounded-lg shadow shrink-0"
            src={ProfilePhoto}
          />
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <span className="text-gray-900 font-medium text-2xl">{name}</span>
          <div className="flex flex-row gap-2 items-center justify-center text-gray-500 font-regular text-sm">
            <span>{address}</span>
            <CopyIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="flex flex-row gap-2 px-2 items-center justify-center self-stretch">
          <button className="bg-primary text-white px-3 py-2 rounded-lg flex-1 shadow-sm">
            Follow
          </button>
          <button className="bg-white border border-gray-200 rounded-lg px-3 py-2 flex-1 shadow-sm">
            Visit Profile
          </button>
        </div>
      </div>
    </div>
  )
}
