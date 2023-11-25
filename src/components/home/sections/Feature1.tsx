import { ReactComponent as QuotesIcon } from '../../../assets/images/qoutes.svg'
import { ReactComponent as SortIcon } from '../../../assets/images/sort.svg'
import { ReactComponent as Cursor } from '../../../assets/images/cursor.svg'
import { BarChartContainer } from '../../common/charts/BarChartContainer'
import { GraphBrowsingHistory } from '../../mocks/LandingPage'

export function Feature1() {
  console.log('GraphBrowsingHistory', GraphBrowsingHistory)
  return (
    <div className="flex-col justify-start items-center gap-2.5 flex self-stretch md:min-h-[100vh] lg:sticky lg:top-0">
      <div className="self-stretch bg-white justify-start items-stretch gap-6 flex flex-col lg:flex-row flex-1">
        <div className="self-stretch flex-1 mx-24 py-6 basis-1/2 flex-col justify-center items-center lg:items-start gap-8 flex">
          <div className="self-stretch flex-col justify-center items-center lg:items-start gap-8 flex">
            <div className="self-stretch flex-col justify-center items-center gap-12 flex">
              <div className="self-stretch flex-col justify-center items-center gap-5 flex">
                <div className="self-stretch flex-col justify-center items-center lg:items-start gap-3 flex">
                  <div className="self-stretch text-center lg:text-left text-gray-900 text-5xl font-semibold">
                    Digital Identity Reimagined
                  </div>
                </div>
                <div className="self-stretch text-center lg:text-left text-slate-600 text-2xl font-normal">
                  Categorize your internet browsing under umbrella of different
                  categories. You can make domains and certain categories public
                  as well.
                </div>
              </div>
            </div>
            <div className="px-7 py-4 bg-violet-700 rounded-lg shadow border border-violet-700 justify-center items-center gap-3 flex">
              <div className="text-white text-lg font-medium">Try KLEO</div>
            </div>
          </div>
          <div className="pl-6 pr-8 py-3 bg-purple-50 rounded-2xl justify-start items-start gap-6 flex">
            <div className="py-3 justify-start items-start gap-2.5 flex">
              <QuotesIcon className="w-12 h-12 relative" />
              <div className="text-slate-600 text-2xl font-normal">
                We don’t beg, we don’t lie, <br />
                we don’t put lipstick on a pig.
              </div>
            </div>
          </div>
        </div>
        <div className="px-16 py-10 flex-1 lg:py-36 rounded-2xl m-6 lg:rounded-none lg:m-0 bg-purple-50 basis-1/2 flex-col flex h-fit justify-between">
          <div className="w-fit relative bg-white rounded-2xl shadow-6xl border border-gray-200 flex-col justify-start items-start flex">
            <div className="self-stretch pb-4 bg-white  border-b border-b-gray-200 flex-col justify-start items-start rounded-t-2xl gap-4 flex">
              <div className="px-4 pt-3 justify-center items-end gap-3 flex">
                <div className="self-stretch flex-col justify-center items-start gap-[2.85px] flex">
                  <div className="self-stretch justify-start items-center gap-1 flex">
                    <div className="text-gray-900 text-xs font-medium">
                      Your Browsing History
                    </div>
                  </div>
                  <div className="self-stretch text-gray-500 text-xs font-normal">
                    Keep track of your browsing history and their category
                    ratings.
                  </div>
                </div>
              </div>
            </div>
            <div className=" self-stretch justify-start items-start flex">
              <div className="self-stretch h-96 w-full p-4 flex-col justify-start items-start gap-2 flex">
                <BarChartContainer
                  data={GraphBrowsingHistory}
                  xAxisLabel="Last 7 Days"
                  yAxisLabel="Browser Visits"
                  handleBarClick={() => null}
                />
              </div>
            </div>
          </div>
          <div className="w-fit relative -mt-[50%] ml-[25%] bg-white rounded-2xl shadow-6xl border border-gray-200 flex-col justify-start items-start flex">
            <div className="self-stretch justify-start items-start gap-2 flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start flex">
                <div className="self-stretch  p-5 border-b border-b-gray-200 flex-col justify-center items-start gap-3 flex">
                  <div className="self-stretch justify-between items-center flex">
                    <div className="text-slate-800 text-xs font-bold">
                      7 Days Summary
                    </div>
                    <div className="px-2 py-1 mix-blend-multiply bg-gray-100 rounded-xl justify-start items-center flex">
                      <div className="text-center text-slate-700 text-xs font-medium">
                        482 visits
                      </div>
                    </div>
                  </div>
                  <svg
                    className="max-w-full"
                    height="26"
                    viewBox="0 0 400 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_5578_34001)">
                      <path
                        d="M0.566406 0.944336H76.6264V25.6999H0.566406V0.944336Z"
                        fill="#6941C6"
                      />
                      <path
                        d="M76.626 0.944336H152.686V25.6999H76.626V0.944336Z"
                        fill="#6941C6"
                      />
                      <path
                        d="M152.687 0.944336H228.747V25.6999H152.687V0.944336Z"
                        fill="#6941C6"
                      />
                      <path
                        d="M228.746 0.944336H304.806V25.6999H228.746V0.944336Z"
                        fill="#9E77ED"
                      />
                      <path
                        d="M304.807 0.944336H380.867V25.6999H304.807V0.944336Z"
                        fill="#D6BBFB"
                      />
                      <path
                        d="M380.866 0.944336H399.433V25.6999H380.866V0.944336Z"
                        fill="#E9D7FE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5578_34001">
                        <rect
                          x="0.566406"
                          y="0.944336"
                          width="398.867"
                          height="24.7556"
                          rx="6.18889"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="flex flex-row gap-1 pt-2 flex-wrap">
                    <div className="flex flex-col border border-gray-200 rounded-md p-1">
                      <div className="flex flex-row gap-2 items-center justify-center">
                        <div className="dot5">
                          <div className="w-2 h-2 rounded-full bg-purple-700"></div>
                        </div>
                        <div className="text23">Development</div>
                      </div>
                    </div>
                    <div className="flex flex-col border border-gray-200 rounded-md p-1">
                      <div className="flex flex-row gap-2 items-center justify-center">
                        <div className="dot5">
                          <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                        </div>
                        <div className="text23">Entertainment</div>
                      </div>
                    </div>
                    <div className="flex flex-col border border-gray-200 rounded-md p-1">
                      <div className="flex flex-row gap-2 items-center justify-center">
                        <div className="dot5">
                          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        </div>
                        <div className="text23">Shopping</div>
                      </div>
                    </div>
                    <div className="flex flex-col border border-gray-200 rounded-md p-1">
                      <div className="flex flex-row gap-2 items-center justify-center">
                        <div className="dot5">
                          <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                        </div>
                        <div className="text23">Music</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-col justify-center items-center flex">
                  <div className="self-stretch px-4 py-3 flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center flex">
                      <div className="flex-col justify-center items-start flex">
                        <div className="text-slate-800 text-xs font-semibold">
                          Overall Visits
                        </div>
                        <div className="text-center text-gray-400 text-xs font-medium">
                          482 total visits
                        </div>
                      </div>
                      <div className="p-2 bg-white rounded-md shadow border border-gray-300 justify-center items-center gap-2 flex">
                        <SortIcon className="w-4 h-4 relative" />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch px-4 py-3 justify-start items-center gap-3 flex">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://www.google.com/s2/favicons?domain=https://www.youtube.com&sz=32"
                    />
                    <div className="grow shrink basis-0 flex-col justify-start items-start flex">
                      <div className="text-slate-800 text-xs font-medium leading-none">
                        Youtube
                      </div>
                      <div className="justify-center items-center gap-2 flex">
                        <div className="text-center text-gray-400 text-xs font-medium">
                          140 visits
                        </div>
                        <div className="w-1 h-1 bg-zinc-300 rounded-md" />
                        <div className="text-center text-gray-400 text-xs font-normal">
                          https://www.youtube.com/
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch px-4 py-3 bg-gray-50 justify-start items-center gap-3 flex">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://www.google.com/s2/favicons?domain=https://www.github.com&sz=32"
                    />
                    <div className="grow shrink basis-0 flex-col justify-start items-start flex">
                      <div className="justify-start items-start gap-2 flex">
                        <div className="text-slate-800 text-xs font-medium leading-none">
                          GitHub
                        </div>
                      </div>
                      {/* <Cursor className="w-4 h-4 relative" /> */}
                      <div className="justify-center items-center gap-2 flex">
                        <div className="text-center text-gray-400 text-xs font-medium">
                          82 visits
                        </div>
                        <div className="w-[3.09px] h-[3.09px] bg-zinc-300 rounded-md" />
                        <div className="text-center text-violet-700 text-xs font-normal underline">
                          https://github.com/
                        </div>
                      </div>
                    </div>
                    <Cursor className="w-4 h-4 relative" />
                  </div>
                  <div className="self-stretch px-4 py-3 justify-start items-center gap-3 flex">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://www.google.com/s2/favicons?domain=https://stackoverflow.com&sz=32"
                    />
                    <div className="grow shrink basis-0 flex-col justify-start items-start flex">
                      <div className="text-slate-800 text-xs font-medium leading-none">
                        Stack Overflow
                      </div>
                      <div className="justify-center items-center gap-2 flex">
                        <div className="text-center text-gray-400 text-xs font-medium">
                          29 visits
                        </div>
                        <div className="w-[3.09px] h-[3.09px] bg-zinc-300 rounded-md" />
                        <div className="text-center text-gray-400 text-xs font-normal">
                          https://stackoverflow.com/
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch px-4 py-3 justify-start items-center gap-3 flex">
                    <img
                      className="w-6 h-6"
                      src="https://www.google.com/s2/favicons?domain=https://netflix.com&sz=32"
                    />
                    <div className="grow shrink basis-0 flex-col justify-start items-start flex">
                      <div className="text-slate-800 text-xs font-medium leading-none">
                        Netflix
                      </div>
                      <div className="justify-center items-center gap-2 flex">
                        <div className="text-center text-gray-400 text-xs font-medium">
                          16 visits
                        </div>
                        <div className="w-[3.09px] h-[3.09px] bg-zinc-300 rounded-md" />
                        <div className="text-center text-gray-400 text-xs font-normal">
                          https://www.netflix.com/
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
