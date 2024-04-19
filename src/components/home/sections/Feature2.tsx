import { ReactComponent as QuotesIcon } from '../../../assets/images/qoutes.svg'
import image1 from '../../../assets/images/feature2.svg'
import { image } from 'd3'

export function Feature2() {
  return (
    <div className="flex-col justify-start items-center gap-2.5 flex self-stretch md:min-h-[100vh] lg:sticky lg:top-0">
      <div className="self-stretch bg-white justify-start items-stretch gap-6 flex flex-col lg:flex-row flex-1">
        <div className="self-stretch flex-1 mx-6 lg:mx-24 py-6 basis-1 flex-col justify-center items-center lg:items-start gap-8 flex">
          <div className="self-stretch flex-col justify-center items-center lg:items-start gap-8 flex">
            <div className="self-stretch flex-col justify-center items-center gap-12 flex">
              <div className="self-stretch flex-col justify-center items-center gap-5 flex">
                <div className="self-stretch flex-col justify-center items-center lg:items-start gap-3 flex">
                  <div className="pl-2.5 pr-3 py-1 text-center lg:text-left bg-purple-100 rounded-2xl flex justify-start items-center gap-1">
                    <div className="text-center text-violet-700 text-sm sm:text-base font-medium">
                      Recent activity!
                    </div>
                  </div>
                  <div className="text-gray-900 text-center lg:text-left text-4xl sm:text-5xl md:text-6xl font-semibold">
                    Dynamic Cards
                  </div>
                </div>
                <div className="text-slate-600 text-center lg:text-left text-base sm:text-lg md:text-2xl font-normal">
                  Follow up on that conversation with your recent activity on
                  the internet.
                  <br /> <br /> <br />
                  Kleo creates interesting cards{' '}
                  <span className="text-purple-800 text-bold">
                    everyday
                  </span>{' '}
                  from your browsing history, you can choose to share and
                  associate them with your identity.
                </div>
              </div>
            </div>
            <a
              href="https://app.kleo.network/"
              className="px-4 py-2 sm:px-6 sm:py-3 md:px-7 md:py-4 bg-violet-700 rounded-lg shadow border border-violet-700 flex justify-center items-center gap-3"
            >
              <div className="text-white text-base font-medium">Try it!</div>
            </a>
          </div>
          {/* <div className="pl-6 pr-8 py-3 bg-purple-50 rounded-2xl justify-start items-start gap-6 flex">
            <div className="py-3 justify-start items-start gap-2.5 flex">
              <QuotesIcon className="w-12 h-12 relative" />
              <div className="text-slate-600 text-center lg:text-left text-base sm:text-lg md:text-2xl font-normal">
                On the internet, <br />
                nobody knows you are a dog!
              </div>
            </div>
          </div> */}
        </div>
        <div className="px-6 py-10 flex-1 lg:px-16 lg:py-36 rounded-2xl m-6 lg:rounded-none lg:m-0 bg-purple-50 basis-1 flex-col flex justify-between">
          <img src={image1} className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}
