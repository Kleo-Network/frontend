import { ReactComponent as QuotesIcon } from '../../../assets/images/qoutes.svg'
import image1 from '../../../assets/images/pie_graph.svg'
import image2 from '../../../assets/images/piechart.svg'

import { image } from 'd3'

export function Feature2() {
  return (
    <div className="flex-col justify-start items-center gap-2.5 flex self-stretch md:min-h-[100vh] lg:sticky lg:top-0">
      <div className="self-stretch bg-white justify-start items-stretch gap-6 flex flex-col lg:flex-row">
        <div className="self-stretch mx-6 lg:mx-24 py-6 basis-2/5 flex-col justify-center items-center lg:items-start gap-8 flex">
          <div className="self-stretch flex-col justify-center items-center lg:items-start gap-8 flex">
            <div className="self-stretch flex-col justify-center items-center gap-12 flex">
              <div className="self-stretch flex-col justify-center items-center gap-5 flex">
                <div className="self-stretch flex-col justify-center items-center lg:items-start gap-3 flex">
                  <div className="pl-2.5 pr-3 py-1 text-center lg:text-left bg-purple-100 rounded-2xl flex justify-start items-center gap-1">
                    <div className="text-center text-violet-700 text-sm sm:text-base font-medium">
                      Tentative Kleo Token
                    </div>
                  </div>
                  <div className="text-gray-900 text-center lg:text-left text-4xl sm:text-5xl md:text-6xl font-semibold">
                    $KLEO Token
                  </div>
                </div>
                <div className="text-slate-600 text-center lg:text-left text-base sm:text-lg md:text-2xl font-normal">
                 <img src={image2} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-10 lg:px-16 lg:py-36 rounded-2xl m-6 lg:rounded-none lg:m-0 bg-purple-50 basis-3/5 flex-col flex justify-between">
          <img src={image1} className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}