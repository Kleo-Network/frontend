export function Feature3() {
  return (
    <div className="flex-col justify-start items-center gap-2.5 flex self-stretch md:min-h-[100vh] lg:sticky lg:top-0">
      <div className="self-stretch bg-white justify-start items-stretch gap-6 flex flex-col lg:flex-row flex-1 h-screen">
        <div className="self-stretch mx-6 lg:mx-24 py-6 flex-1 basis-1 flex-col justify-center items-center lg:items-start gap-8 flex">
          <div className="self-stretch flex-col justify-center items-center gap-12 flex">
            <div className="self-stretch flex-col justify-center items-center lg:items-start gap-5 flex">
              <div className="self-stretch flex-col justify-center items-center lg:items-start gap-3 flex">
                <div className="pl-2.5 pr-3 py-1 mix-blend-multiply bg-purple-50 rounded-2xl justify-start items-center gap-1 flex">
                  <div className="text-center text-violet-700 text-sm sm:text-base font-medium">
                    Coming soon
                  </div>
                </div>
                <div className="text-gray-900 text-center lg:text-left text-4xl sm:text-5xl md:text-6xl font-semibold">
                  Human Experiences
                </div>
              </div>
              <div className="text-slate-600 text-center lg:text-left text-base sm:text-lg md:text-2xl font-normal">
                Connect with individuals who have the same browsing patterns as
                what you put into a textbox! Learn from human experiences on
                specific topic and earn from contributing your time.
              </div>
              {/* <a
                href="/signup"
                className="px-4 py-2 sm:px-6 sm:py-3 md:px-7 md:py-4 bg-violet-700 rounded-lg shadow border border-violet-700 flex justify-center items-center gap-3"
              >
                <div className="text-white text-base font-medium">Try KLEO</div>
              </a> */}
            </div>
          </div>
        </div>
        <div className="px-6 py-10 flex-1 lg:px-16 lg:py-36 rounded-2xl m-6 lg:rounded-none lg:m-0 bg-purple-50 basis-1 flex-col flex justify-between">
          <img src="/feature3.svg" className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}
