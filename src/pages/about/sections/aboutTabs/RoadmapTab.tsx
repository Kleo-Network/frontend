import WhiteTickIconPath from '../../../../assets/images/about/tabs/roadmap/whiteTick.svg'

export const RoadmapTab = () => {
  return (
    <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] w-full px-6 flex justify-center">
      <div className="flex flex-col gap-12 w-full justify-center">
        <div className="flex flex-col gap-4 w-full text-center">
          <h1 className="font-semibold text-6xl">Roadmap</h1>
          <h4 className="font-nokora font-normal text-2xl">2022 - 2025</h4>
        </div>

        {/* Roadmap Timeline */}
        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid max-w-[1000px]">
          {/* Event-1 */}
          <div className="flex md:contents">
            {/* Line and Dot for Item1 */}
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-2 h-full bg-primary-600 rounded-t-full"></div>
              </div>
              <div className="absolute w-10 h-10 -mt-5 -ml-2 bg-primary-600 rounded-full top-0 flex justify-center items-center">
                <img src={WhiteTickIconPath} alt="" />
              </div>
            </div>
            {/* Content For Item1 */}
            <div className="relative p-6 -top-5 mb-10 flex flex-col gap-4 bg-white rounded-2xl col-start-6 col-end-10 mr-auto">
              <h3 className="text-base font-normal text-primary-700">
                March 2024
              </h3>
              <h1 className="font-semibold text-4xl">Launch Extension</h1>
              <p className="text-lg font-normal">
                Extension Launch to capture data points and pre-mine active with
                VANA
              </p>
            </div>
          </div>

          {/* Event-2 */}
          <div className="flex md:contents flex-row-reverse">
            {/* Content For Item1 */}
            <div className="relative p-6 -top-5 mb-10 flex flex-col gap-4 bg-white rounded-2xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 className="text-base font-normal text-primary-700">
                March 2024
              </h3>
              <h1 className="font-semibold text-4xl">Dashboard Launch</h1>
              <p className="text-lg font-normal">
                Launching our dashboard for users to view points, referrals and
                earn tokens
              </p>
            </div>
            {/* Line and Dot for Item1 */}
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-2 h-full bg-primary-600 rounded-t-full"></div>
              </div>
              <div className="absolute w-10 h-10 -mt-5 -ml-2 bg-primary-600 rounded-full top-0 flex justify-center items-center">
                <img src={WhiteTickIconPath} alt="" />
              </div>
            </div>
          </div>

          {/* Event-3 */}
          <div className="flex md:contents">
            {/* Line and Dot for Item1 */}
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-2 h-full bg-primary-600 rounded-t-full"></div>
              </div>
              <div className="absolute w-10 h-10 -mt-5 -ml-2 bg-primary-600 rounded-full top-0 flex justify-center items-center">
                <img src={WhiteTickIconPath} alt="" />
              </div>
            </div>
            {/* Content For Item1 */}
            <div className="relative p-6 -top-5 mb-10 flex flex-col gap-4 bg-white rounded-2xl col-start-6 col-end-10 mr-auto">
              <h3 className="text-base font-normal text-primary-700">
                March 2024
              </h3>
              <h1 className="font-semibold text-4xl">10,000 users</h1>
              <p className="text-lg font-normal">
                Tapping into web3 native communities, partnering up with chains
                and gain 10,000 users
              </p>
            </div>
          </div>

          {/* Event-4 */}
          <div className="flex md:contents flex-row-reverse">
            {/* Content For Item1 */}
            <div className="relative py-4 px-7 -top-5 md:-top-4 mb-48 flex flex-col gap-4 rounded-full bg-grayblue-700 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h2 className="font-semibold text-2xl text-white">We Are Here</h2>
            </div>
            {/* Line and Dot for Item1 */}
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-2 h-full bg-white rounded-t-full"></div>
              </div>
              <div className="absolute w-[50px] h-[50px] md:w-[68px] md:h-[68px] -mt-5 -ml-6 md:-ml-5 bg-primary-600 rounded-full top-0 flex justify-center items-center border-[10px] md:border-[14px] border-primary-300" />
            </div>
          </div>

          {/* Event-5 */}
          <div className="flex md:contents">
            {/* Line and Dot for Item1 */}
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-2 h-full bg-white rounded-t-full"></div>
              </div>
              <div className="absolute w-10 h-10 -mt-5 -ml-2 bg-white rounded-full top-0 flex justify-center items-center">
                <img src={WhiteTickIconPath} alt="" />
              </div>
            </div>
            {/* Content For Item1 */}
            <div className="relative p-6 -top-5 mb-10 flex flex-col gap-4 bg-white rounded-2xl col-start-6 col-end-10 mr-auto">
              <h3 className="text-base font-normal text-primary-700">
                March 2024
              </h3>
              <h1 className="font-semibold text-4xl">My Data Page</h1>
              <p className="text-lg font-normal">
                Launch My Data Page for user to view, control and set
                permissions for their data
              </p>
            </div>
          </div>

          {/* Event-6 */}
          <div className="flex md:contents flex-row-reverse">
            {/* Content For Item1 */}
            <div className="relative p-6 -top-5 mb-10 flex flex-col gap-4 bg-white rounded-2xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 className="text-base font-normal text-primary-700">
                March 2024
              </h3>
              <h1 className="font-semibold text-4xl">SDK Launch</h1>
              <p className="text-lg font-normal">
                Launching SDK for organisations to query data.
              </p>
            </div>
            {/* Line and Dot for Item1 */}
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-2 h-full bg-white rounded-t-full"></div>
              </div>
              <div className="absolute w-10 h-10 -mt-5 -ml-2 bg-white rounded-full top-0 flex justify-center items-center">
                <img src={WhiteTickIconPath} alt="" />
              </div>
            </div>
          </div>

          {/* Event-7 */}
          <div className="flex md:contents">
            {/* Line and Dot for Item1 */}
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="absolute w-10 h-10 -mt-5 -ml-2 md:-ml-5 bg-white rounded-full top-0 flex justify-center items-center">
                <img src={WhiteTickIconPath} alt="" />
              </div>
            </div>
            {/* Content For Item1 */}
            <div className="relative p-6 -top-5 ml-6 md:ml-0 flex flex-col gap-4 bg-white rounded-2xl col-start-6 col-end-10 mr-auto">
              <h3 className="text-base font-normal text-primary-700">
                March 2024
              </h3>
              <h1 className="font-semibold text-4xl">Airdrop 1</h1>
              <p className="text-lg font-normal">
                Giving users first airdrop once we reach active data
                commissioning by 10 organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
