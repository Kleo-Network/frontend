import { ReactComponent as Feature2Svg } from '../../../assets/images/feature2.svg'

export function Feature2() {
  return (
    <div className="flex-col justify-start items-center gap-2.5 flex self-stretch md:min-h-[100vh] lg:sticky lg:top-0">
      <div className="self-stretch bg-gray-50 justify-start items-stretch gap-6 flex flex-col lg:flex-row flex-1">
        <div className="self-stretch flex-1 mx-6 lg:mx-24 py-6 basis-1 flex-col justify-center items-center lg:items-start gap-8 flex">
          <div className="self-stretch flex-col justify-center items-center gap-12 flex">
            <div className="self-stretch flex-col justify-center items-center gap-5 flex">
              <div className="text-gray-900 text-center lg:text-left text-4xl sm:text-5xl md:text-6xl font-semibold">
                Deeper community engagements.
              </div>
              <div className="text-slate-600 text-center lg:text-left text-base sm:text-lg md:text-2xl font-normal">
                Not just Transactional. Built on empathy, entertainment and a
                personal touch. Discover more of what you have in common than
                different.
              </div>
            </div>
          </div>
          <button className="px-4 py-2 sm:px-6 sm:py-3 md:px-7 md:py-4 bg-violet-700 rounded-lg shadow border border-violet-700 flex justify-center items-center gap-3">
            <div className="text-white text-base font-medium">Try KLEO</div>
          </button>
        </div>
        <div className="px-6 py-10 flex-1 lg:px-16 lg:py-36 rounded-2xl m-6 lg:rounded-none lg:m-0 bg-purple-50 basis-1 flex-col flex justify-between">
          <Feature2Svg className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}
