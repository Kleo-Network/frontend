// create component

import React, { useState } from 'react'
import CopyIcon from '../../assets/copy.svg'

interface User {
  user: {
    name: string
    image: string
    address: string
    kleo: number
  }
}

const ProfileCard: React.FC<User> = ({ user }) => {
  const [copied, setCopied] = useState(false)

  const shortenAddress = (address: string) => {
    return address.substring(0, 6) + '...' + address.substring(38, 42)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(user.address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
                {copied ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block pb-1 ml-1 fill-green-500"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                ) : (
                  <CopyIcon />
                )}
              </span>
            </button>
          </div>
        </div>

        <div className="text-center py-3 text-gray-400 text-xs shadow-sm font-semibold">
          <p className=" text-black text-lg">Balance:</p>
          <p className="text-indigo-500 text-xl font-bold">{user.kleo} $KLEO</p>
        </div>
      </div>
      <div className="text-center py-3 font-semibold">
        <p className=" text-black text-lg">Verify your humanity:</p>
        <button
          onClick={copyToClipboard}
          className="shadow bg-indigo-500 hover:bg-indigo-700  m-2 px-5 py-2 text-white rounded-2xl "
        >
          <span>
            Gitcoin Passport
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-indigo-500"
              viewBox="0 0 512 512"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm224-72V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24zm112 0V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
            </svg> */}
          </span>
        </button>
        {/*<button
          onClick={copyToClipboard}
          className="shadow hover:bg-indigo-700 m-2  p-3 rounded-full"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-indigo-500"
              viewBox="0 0 448 512"
            >
              <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
            </svg>
          </span>
        </button>
        <button
          onClick={copyToClipboard}
          className="shadow-lg hover:bg-indigo-700 m-2  p-3 rounded-full"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-indigo-500"
              viewBox="0 0 448 512"
            >
              <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z" />
            </svg>
          </span>
        </button> */}
      </div>
    </div>
  )
}

export default ProfileCard
