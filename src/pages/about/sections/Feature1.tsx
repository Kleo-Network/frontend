import { ReactComponent as QuotesIcon } from '../../../assets/images/qoutes.svg'

import image1 from '../../../assets/images/graph.svg'
import { GraphBrowsingHistory } from '../../../components/mocks/LandingPage'

export function Feature1() {
  return (
    <div className="flex-col justify-start items-center gap-2.5 flex self-stretch md:min-h-[100vh] lg:sticky lg:top-10">
      <div className="self-stretch bg-white justify-start items-stretch gap-6 flex flex-col lg:flex-row">
        <div className="self-stretch flex-1 mx-6 lg:mx-24 py-6 basis-2/5 flex-col justify-center items-center lg:items-start gap-8 flex">
          <div className="self-stretch flex-col justify-center items-center lg:items-start gap-8 flex">
            <div className="self-stretch flex-col justify-center items-center gap-12 flex">
              <div className="self-stretch flex-col justify-center items-center gap-5 flex">
                <div className="self-stretch flex-col justify-center items-center lg:items-start gap-3 flex">
                  <div className="pl-2.5 pr-3 py-1 text-center lg:text-left bg-purple-100 rounded-2xl flex justify-start items-center gap-1">
                    <div className="text-center text-violet-700 text-sm sm:text-base font-medium">
                      We win together
                    </div>
                  </div>
                  <div className="text-gray-900 text-center lg:text-left text-4xl sm:text-5xl md:text-6xl font-semibold">
                    Airdrop Seasons
                  </div>
                </div>
                <div className="text-slate-600 text-center lg:text-left text-base sm:text-lg md:text-2xl font-normal">
                  The fees collected from minting the NFTs, is distributed back
                  to those who were actively minting everyday, earlier you
                  signup the more rewards you get.
                  <br />
                  <br />
                  <br />
                  <b>Mint Everyday!</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-16 flex-1 lg:px-16 lg:py-10 rounded-2xl lg:rounded-none lg:m-0 bg-purple-50 basis-3/5 flex-col flex justify-between">
          {/* Second div content */}
          <img src={image1} className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}
