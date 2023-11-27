import { ReactComponent as CrossIcon } from '../../../assets/images/cross.svg'
import { ReactComponent as KleoIcon } from '../../../assets/images/kleoWithBg.svg'
import { ReactComponent as TickIcon } from '../../../assets/images/check.svg'
import { ReactComponent as ShieldIcon } from '../../../assets/images/shield.svg'
import MetaMaskIcon from '../../../assets/images/metaMask.png'

export function Feature4() {
  return (
    <div className="flex-col justify-start items-center gap-2.5 flex self-stretch md:min-h-[100vh] z-10">
      <div className="self-stretch bg-gray-50 justify-start items-stretch gap-6 flex flex-col lg:flex-row flex-1 lg:h-screen">
        <div className="self-stretch flex-1 mx-6 lg:mx-24 py-6 basis-1 flex-col justify-center items-center lg:items-start gap-8 flex">
          <div className="flex flex-col justify-center items-center gap-12">
            <div className="flex flex-col justify-center items-center lg:items-start gap-5">
              <div className="flex flex-col justify-center items-center lg:items-start gap-3">
                <div className="pl-2.5 pr-3 py-1 text-center lg:text-left bg-purple-100 rounded-2xl flex justify-start items-center gap-1">
                  <div className="text-center text-violet-700 text-sm sm:text-base font-medium">
                    Coming soon
                  </div>
                </div>
                <div className="text-gray-900 text-center lg:text-left text-4xl sm:text-5xl md:text-6xl font-semibold">
                  Groove anonymously with your kind
                </div>
              </div>
              <div className="text-slate-600 text-center lg:text-left text-base sm:text-lg md:text-2xl font-normal">
                Connect with individuals who have the same belief system, make
                friends and know people who have similar tastes as you in
                sports, entertainment, work etc etc.
              </div>
              <button className="px-4 py-2 sm:px-6 sm:py-3 md:px-7 md:py-4 bg-violet-700 rounded-lg shadow border border-violet-700 flex justify-center items-center gap-3">
                <div className="text-white text-base font-medium">Try KLEO</div>
              </button>
            </div>
          </div>
        </div>
        <div className="px-16 py-10 flex-1 lg:py-36 rounded-2xl m-6 lg:rounded-none lg:m-0 bg-purple-50 basis-1 flex-col flex h-fit lg:h-auto justify-center">
          <div className="w-fit relative bg-white rounded-2xl shadow-6xl border border-gray-200 flex-col justify-start items-start flex">
            <div className="self-stretch h-[92px] p-5 border-b border-gray-200 flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-between items-start flex">
                <div className="justify-center items-center gap-2.5 flex">
                  <div className="flex-col justify-start items-start gap-1 flex self-stretch">
                    <div className="text-center text-gray-500 text-sm font-normal leading-tight">
                      Step 1 / 2
                    </div>
                    <div className="text-gray-900 text-lg font-medium leading-7">
                      Connect these to get started!
                    </div>
                  </div>
                </div>
                <CrossIcon className="w-5 h-5 stroke-gray-500 relative" />
              </div>
            </div>
            <div className="self-stretch px-5 pt-6 pb-4 flex-col justify-start items-start gap-6 flex">
              <div className="justify-start items-start gap-3 flex self-stretch">
                <div className="w-16 h-16 relative">
                  <KleoIcon className="w-12 h-12 left-[8px] top-[8px] absolute" />
                  <div className="absolute bottom-0 left-auto right-0 top-auto z-10 rounded-full bg-green-600 p-1 border-4 border-white ">
                    <TickIcon className="w-3 h-3 fill-white" />
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-4 flex self-stretch">
                  <div className="self-stretch pt-2 flex-col justify-start items-center gap-0.5 flex">
                    <div className="justify-start items-center gap-2 flex self-stretch">
                      <div className="text-gray-900 text-base font-medium">
                        Install KLEO Plugin
                      </div>
                    </div>
                    <div className="self-stretch text-gray-500 text-sm font-normal">
                      Unlock insights, personalize your Browsing, and safeguard
                      your privacy
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch px-5 pt-4 pb-6 flex-col justify-start items-start gap-6 flex">
              <div className="justify-start items-start gap-3 flex self-stretch">
                <div className="w-16 h-16 relative">
                  <img
                    className="w-12 h-12 left-[8px] top-[8px] absolute"
                    src={MetaMaskIcon}
                  />
                  <div className="absolute bottom-0 left-auto right-0 top-auto z-10 rounded-full bg-green-600 p-1 border-4 border-white ">
                    <TickIcon className="w-3 h-3 fill-white" />
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-4 flex self-stretch">
                  <div className="self-stretch pt-2 flex-col justify-start items-start gap-0.5 flex">
                    <div className="self-stretch text-gray-900 text-base font-medium">
                      Connect MetaMask
                    </div>
                    <div className="self-stretch text-gray-500 text-sm font-normal">
                      An Ethereum Wallet in your Browser. Helps you verify your
                      profile on KLEO
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch px-5 py-6 border-t border-gray-200 flex-col justify-start items-start gap-4 flex">
              <div className="justify-between items-center flex self-stretch">
                <div className="justify-center items-center gap-2.5 flex">
                  <div className="text-gray-900 text-sm font-medium">
                    Why should I install KLEO Plugin?
                  </div>
                </div>
                <div className="w-5 h-5 relative" />
              </div>
            </div>
          </div>
          <div className="w-fit relative ml-[20%] -mt-[20%] p-6 bg-white rounded-2xl shadow-6xl border border-gray-200 justify-start items-start gap-3 flex flex-row">
            <ShieldIcon className="w-20 h-20 shrink-0" />
            <div className="text-gray-900 text-base md:text-xl font-normal">
              KLEO does not store any user data. We are committed to preserving
              anonymity.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
