import React from 'react'
import { ReactComponent as CopyIcon } from '../../assets/images/copy.svg'
import { ReactComponent as TickIcon } from '../../assets/images/check.svg'

interface User {
  user: UserProps
}

interface UserProps {
  name: string
  avatar: string
  userId: string
  kleo: number
}

export default function ProfileCard({ user }: User) {
  const [copied, setCopied] = React.useState(false)

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(user.userId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col self-stretch items-center rounded-lg border border-gray-200 order-first md:order-none">
      <div className="flex flex-col justify-center items-center px-24 pt-6 pb-4">
        <img
          src={user.avatar}
          className="w-24 h-24 rounded-full border-4 border-white"
        />
        <div className="text-center">
          <h3 className="text-2xl font-medium text-gray-900">{user.name}</h3>
          <span className="flex flex-row items-center mt-4 text-base font-regular text-gray-500">
            {shortenAddress(user.userId)}
            <button
              className="ml-2 text-gray-400 w-4 h-4"
              onClick={copyToClipboard}
            >
              {copied ? <TickIcon className=" fill-green-500" /> : <CopyIcon />}
            </button>
          </span>
        </div>
      </div>
      <div className="border-b border-gray-200 w-full" />
      <div className="py-4 flex flex-col gap-2">
        <span className="text-center text-xl font-medium text-gray-900">
          {user.kleo} $KLEO
        </span>
        <span className="text-center text-base font-regular text-gray-500">
          Reputation Score
        </span>
      </div>
    </div>
  )
}
