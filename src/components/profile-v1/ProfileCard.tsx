// Profile page with welcome text and user image using tailwind css

import React from 'react'

interface User {
  user: {
    name: string
    image: string
    address: string
    kleo: number
  }
}

const ProfileCard: React.FC<User> = ({ user }) => {
  const shortenAddress = (address: string) => {
    return address.substring(0, 6) + '...' + address.substring(38, 42)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(user.address)
  }

  return (
    <div className="rounded flex justify-between bg-white p-6 w-full h-fit shadow">
      <div className="flex flex-col justify-around">
        <div>
          <p className="text-lg font-bold text-gray-600">Welcome, </p>
          <p className="text-3xl font-bold text-[#8187ae]">{user.name}</p>
        </div>

        <div className=" mt-4">
          <div className="flex flex-col">
            <p className="text-base font-bold text-gray-600">$KLEO Balance:</p>
            <p className="text-2xl font-bold text-[#8187ae]">{user.kleo}</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a className="d-flex hover:cursor-default" href="#">
          <img
            src={user.image}
            className="rounded-full border-[8px] border-violet-200 mb-2 shadow-lg"
            alt=""
            width={150}
            height={150}
          />
        </a>
        <span
          className="text-xs text-gray-500 bg-gray-300 p-1 rounded-md hover:cursor-pointer"
          onClick={copyToClipboard}
        >
          {shortenAddress(user.address)}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline-block pb-1 ml-1 fill-gray-500"
            viewBox="0 0 448 512"
          >
            <path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />{' '}
          </svg>
        </span>
      </div>
    </div>
  )
}

export default ProfileCard
