import { ReactComponent as QuotesIcon } from '../../../assets/images/qoutes.svg'
import { GraphBrowsingHistory } from '../../mocks/LandingPage'
import image1 from '../../../assets/images/feature1.svg'

export function Feature0() {
  console.log('GraphBrowsingHistory', GraphBrowsingHistory)
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
                      Who are you on the internet?
                    </div>
                  </div>
                  <div className="text-gray-900 text-center lg:text-left text-4xl sm:text-5xl md:text-5xl font-semibold">
                    Elevate Your Online Presence
                  </div>
                </div>
                <div className="text-slate-600 text-center lg:text-left text-base sm:text-lg md:text-2xl font-normal">
                  Showcase your unique identity with Kleo! Take control of how
                  you appear online and share what truly matters to you.
                  <br /> <br />
                  From GitHub contributions to social media profiles, connect
                  everything that defines your digital self.
                </div>
              </div>
            </div>
            <a
              href="https://app.kleo.network/signup"
              className="px-4 py-2 sm:px-6 sm:py-3 md:px-7 md:py-4 bg-violet-700 rounded-lg shadow border border-violet-700 flex justify-center items-center gap-3"
            >
              <div className="text-white text-base font-medium ">TRY KLEO</div>
            </a>
          </div>
          {/* <div className="pl-6 pr-8 py-3 bg-purple-50 rounded-2xl justify-start items-start gap-6 flex">
            <div className="py-3 justify-start items-start gap-2.5 flex">
              <QuotesIxcon className="w-12 h-12 relative" />
              <div className="text-slate-600 text-center lg:text-left text-base sm:text-lg md:text-2xl font-normal">
                We don’t beg, we don’t lie, <br />
                we don’t put lipstick on a pig.
              </div>
            </div>
          </div> */}
        </div>
        <div className="px-16 py-10 flex-1 lg:px-16 lg:py-36 rounded-2xl lg:rounded-none lg:m-0 bg-purple-50 basis-1 flex-col flex justify-between ">
          {/* <img src={image1} className="w-4/5" /> */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tYpP6p4_9UA?si=UK_bH7fQsbog_cvh"
            title="Kleo Video Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg mt-16"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
