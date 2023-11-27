import { ReactComponent as AddIcon } from '../../../assets/images/add.svg'

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
        <div className="px-16 pt-10 pb-6 flex-1 lg:py-36 rounded-2xl m-6 lg:rounded-none lg:m-0 bg-purple-50 basis-1 flex-col flex h-fit justify-between">
          <div className="w-fit relative bg-white rounded-2xl shadow-6xl border border-gray-200 flex-col justify-start items-start flex">
            <div className="self-stretch bg-white flex-col justify-start rounded-2xl items-start gap-4 pb-3 border-b border-b-gray-200 flex">
              <div className="self-stretch px-6 pt-5 flex-col justify-center items-start gap-5 flex">
                <div className="self-stretch justify-center items-center gap-1 flex">
                  <div className="grow shrink basis-0 justify-between items-center flex">
                    <div className="justify-start items-center gap-2 flex">
                      <div className="text-gray-900 text-lg font-medium">
                        Pinned Websites
                      </div>
                    </div>
                    <div className="px-3.5 py-2 bg-white rounded-lg shadow border border-gray-300 justify-center items-center gap-2 flex">
                      <AddIcon className="w-5 h-5 stroke-gray-500 relative" />
                      <div className="text-slate-700 text-sm font-medium">
                        Add New
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start flex">
              <div className="grow flex-wrap shrink-0 basis-0 p-5 justify-start items-center gap-2 flex">
                <div className="p-4 flex-1 rounded-xl border border-gray-200 justify-start items-center gap-4 flex">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://www.google.com/s2/favicons?domain=https://stackoverflow.com&sz=32"
                  />
                  <div className="grow shrink basis-0 flex-col justify-start items-start flex">
                    <div className="text-slate-800 text-sm font-medium">
                      Stack Overflow
                    </div>
                    <div className="self-stretch text-gray-400 text-xs font-normal">
                      https://stackoverflow.com
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-1 rounded-xl border border-gray-200 justify-start items-center gap-4 flex">
                  <img
                    className="w-8 h-8 rounded"
                    src="https://www.google.com/s2/favicons?domain=https://www.slack.com&sz=48"
                  />
                  <div className="grow shrink basis-0 flex-col justify-start items-start flex">
                    <div className="text-slate-800 text-sm font-medium">
                      Slack
                    </div>
                    <div className="self-stretch te00 text-xs font-normal">
                      https://slack.com
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-1 rounded-xl border border-gray-200 justify-start items-center gap-4 flex">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://www.google.com/s2/favicons?domain=https://npmjs.com&sz=48"
                  />
                  <div className="grow shrink basis-0 flex-col justify-start items-start flex">
                    <div className="text-slate-800 text-sm font-medium">
                      npm
                    </div>
                    <div className="self-stretch text-gray-400 text-xs font-normal">
                      https://www.npmjs.com
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-1 rounded-xl border border-gray-200 justify-start items-center gap-4 flex">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://www.google.com/s2/favicons?domain=https://atlassion.com&sz=48"
                  />
                  <div className="grow shrink basis-0 flex-col justify-start items-start flex">
                    <div className="text-slate-800 text-sm font-medium">
                      Confluence
                    </div>
                    <div className="self-stretch text-gray-400 text-xs font-normal">
                      https://www.atlassian.com
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-1 rounded-xl border border-gray-200 justify-start items-center gap-4 flex">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://www.google.com/s2/favicons?domain=https://www.atlassian.com/software/confluence&sz=48"
                  />
                  <div className="grow shrink basis-0 flex-col justify-start items-start flex">
                    <div className="text-slate-800 text-sm font-medium">
                      npm
                    </div>
                    <div className="self-stretch text-gray-400 text-xs font-normal">
                      https://www.npmjs.com
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-1 rounded-xl border border-gray-200 justify-start items-center gap-4 flex">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://via.placeholder.com/32x32"
                  />
                  <div className="grow shrink basis-0 flex-col justify-start items-start flex">
                    <div className="text-slate-800 text-sm font-medium">
                      npm
                    </div>
                    <div className="self-stretch text-gray-400 text-xs font-normal">
                      https://www.npmjs.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit relative -mt-[15%] ml-[25%] bg-white rounded-2xl shadow-6xl justify-center items-center gap-4 flex flex-col self-stretch">
            <div className="self-stretch px-6 pt-6 pb-4 flex-col justify-start items-start gap-2.5 flex">
              <div className="self-stretch justify-start items-start gap-4 flex">
                <div className="grow shrink basis-0 justify-center items-start gap-4 flex">
                  <img
                    className="w-12 h-12 rounded-[30px]"
                    src="https://www.google.com/s2/favicons?domain=https://stackoverflow.com&sz=48"
                  />
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch flex-col justify-start items-start flex">
                      <div className="text-slate-800 text-xl font-medium">
                        StackOverflow
                      </div>
                      <div className="self-stretch text-gray-500 text-sm font-normal">
                        https://stackoverflow.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch pl-6 pt-4 border-b border-gray-200 flex-col justify-start items-start gap-2 flex">
              <div className="justify-start items-start gap-4 flex">
                <div className="px-1 pt-px pb-5 justify-center items-center gap-2 flex">
                  <div className="text-gray-500 text-sm font-medium">
                    Summary
                  </div>
                </div>
                <div className="px-1 pt-px pb-5 justify-center items-center gap-2 flex">
                  <div className="text-gray-500 text-sm font-medium">
                    History
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch p-6 flex-col justify-center items-start gap-4 flex">
              <div className="self-stretch p-6 rounded-lg border border-gray-200 flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch">
                    <span className="text-slate-700 text-base font-medium">
                      Total visits
                    </span>
                    <span className="text-gray-500 text-base font-normal">
                      {' '}
                    </span>
                    <span className="text-gray-500 text-sm font-normal">
                      (since 23rd June, 2023)
                    </span>
                  </div>
                  <div className="self-stretch justify-start items-baseline gap-3 flex">
                    <div className="text-gray-900 text-4xl font-medium">
                      32,206
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-lg border border-gray-200 flex-col justify-center items-start flex">
                <div className="self-stretch px-6 flex-col max-w-full max-h-[300px] overflow-hidden justify-start items-start flex">
                  <div className="self-stretch py-3 border-b border-gray-200 justify-start items-center gap-4 flex">
                    <div className="basis-0 flex-col justify-start items-start gap-1 flex">
                      <div className="self-stretch flex-col justify-start items-start flex">
                        <div className="self-stretch text-slate-800 text-sm font-medium">
                          Css background image and transparency issue
                        </div>
                        <div className="self-stretch text-violet-700 text-xs font-normal underline">
                          https://stackoverflow.com/questions/77129585/css-background-image-and-transparency-issue
                        </div>
                      </div>
                      <div className="justify-center items-center gap-2 flex">
                        <div className="text-center text-gray-500 text-xs font-medium">
                          29 visits
                        </div>
                      </div>
                    </div>
                    <div className="w-6 h-6 relative" />
                    <div className="p-2 justify-start items-center gap-2.5 flex">
                      <div className="w-5 h-5 relative" />
                    </div>
                  </div>
                  <div className="self-stretch py-3 border-b border-gray-200 justify-start items-center gap-4 flex">
                    <div className="flex-col justify-start items-start gap-1 flex">
                      <div className="self-stretch flex-col justify-start items-start flex">
                        <div className="self-stretch text-slate-800 text-sm font-medium">
                          Python Dash app problem over callback for multiple
                          filtering with dataframe
                        </div>
                        <div className="self-stretch text-gray-400 text-xs font-normal">
                          https://stackoverflow.com/questions/77129583
                        </div>
                      </div>
                      <div className="justify-center items-center gap-2 flex">
                        <div className="text-center text-gray-500 text-xs font-medium">
                          29 visits
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch py-3 border-b border-gray-200 justify-start items-center gap-4 flex">
                    <div className="flex-col justify-start items-start gap-1 flex">
                      <div className="self-stretch flex-col justify-start items-start flex">
                        <div className="self-stretch text-slate-800 text-sm font-medium">
                          Prevent windows from aut-correcting outlook email
                          username
                        </div>
                        <div className="self-stretch text-gray-400 text-xs font-normal">
                          https://stackoverflow.com/questions/77129579/preventsername
                        </div>
                      </div>
                      <div className="justify-center items-center gap-2 flex">
                        <div className="text-center text-gray-500 text-xs font-medium">
                          29 visits
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
