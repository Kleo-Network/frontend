// create component

import React, { useState } from 'react'

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
    <div className="bg-white shadow-xl rounded-3xl py-3">
      <div className="photo-wrapper p-2 bg-slate-100 -mt-3 rounded-t-3xl">
        <img
          className="w-36 h-36 rounded-full mx-auto border-[8px] border-y-indigo-400 border-x-white mb-2 shadow-lg"
          src={user.image}
          alt={user.name}
        />
      </div>
      <div>
        <div className="shadow-sm pt-3 pb-5">
          <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
            {user.name}
          </h3>
          <div className="text-center">
            <button
              onClick={copyToClipboard}
              className="bg-indigo-500 hover:bg-indigo-700 text-xs text-white  py-1 px-2 rounded-full"
            >
              <span>
                {shortenAddress(user.address)}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block pb-1 ml-1 fill-white"
                  viewBox="0 0 448 512"
                >
                  <path d="M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z" />{' '}
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="text-center py-3 text-gray-400 text-xs font-semibold">
          <p className=" text-black text-lg">Balance:</p>
          <p className="text-indigo-500 text-xl font-bold">{user.kleo} $KLEO</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
