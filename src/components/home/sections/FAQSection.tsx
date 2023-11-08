export const FAQSection = () => {
  return (
    <div className="w-[1440px] h-[1136px] py-24 bg-white flex-col justify-start items-center gap-16 inline-flex">
      <div className="self-stretch h-[94px] px-8 flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch h-[94px] flex-col justify-start items-center gap-8 flex">
          <div className="self-stretch h-[94px] flex-col justify-start items-center gap-5 flex">
            <div className="self-stretch text-center text-gray-900 text-4xl font-semibold font-['Inter'] leading-[44px]">
              Frequently asked questions
            </div>
            <div className="self-stretch text-center text-slate-600 text-xl font-normal font-['Inter'] leading-[30px]">
              Everything you need to know about KLEO
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[504px] px-8 flex-col justify-start items-center gap-16 flex">
        <div className="self-stretch h-[504px] flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch h-[84px] flex-col justify-start items-center flex">
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-gray-900 text-lg font-medium font-['Inter'] leading-7">
                  Does KLEO collect and store my browsing history?
                </div>
                <div className="self-stretch text-slate-600 text-base font-normal font-['Inter'] leading-normal">
                  No, KLEO does not collect or store your browsing history. We
                  prioritize your privacy and ensure that your data remains
                  secure and private on your device.
                </div>
              </div>
              <div className="pt-0.5 flex-col justify-start items-start inline-flex">
                <div className="w-6 h-6 relative" />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[52px] pt-6 border-t border-gray-200 flex-col justify-start items-center flex">
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-gray-900 text-lg font-medium font-['Inter'] leading-7">
                  How does KLEO analyze my browser history?
                </div>
              </div>
              <div className="pt-0.5 flex-col justify-start items-start inline-flex">
                <div className="w-6 h-6 relative" />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[52px] pt-6 border-t border-gray-200 flex-col justify-start items-center flex">
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-gray-900 text-lg font-medium font-['Inter'] leading-7">
                  What kind of insights can I expect to receive from KLEO?
                </div>
              </div>
              <div className="pt-0.5 flex-col justify-start items-start inline-flex">
                <div className="w-6 h-6 relative" />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[52px] pt-6 border-t border-gray-200 flex-col justify-start items-center flex">
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-gray-900 text-lg font-medium font-['Inter'] leading-7">
                  Is KLEO compatible with all web browsers?
                </div>
              </div>
              <div className="pt-0.5 flex-col justify-start items-start inline-flex">
                <div className="w-6 h-6 relative" />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[52px] pt-6 border-t border-gray-200 flex-col justify-start items-center flex">
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-gray-900 text-lg font-medium font-['Inter'] leading-7">
                  Can I customize the insights I receive from KLEO?
                </div>
              </div>
              <div className="pt-0.5 flex-col justify-start items-start inline-flex">
                <div className="w-6 h-6 relative" />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[52px] pt-6 border-t border-gray-200 flex-col justify-start items-center flex">
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-gray-900 text-lg font-medium font-['Inter'] leading-7">
                  {' '}
                  Is KLEO a paid service, or is there a free version available?
                </div>
              </div>
              <div className="pt-0.5 flex-col justify-start items-start inline-flex">
                <div className="w-6 h-6 relative" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[218px] px-8 flex-col justify-center items-center gap-8 flex">
        <div className="h-[218px] px-8 pt-8 pb-10 bg-gray-50 rounded-2xl flex-col justify-start items-center gap-8 flex">
          <div className="self-stretch h-[66px] flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch text-center text-gray-900 text-xl font-semibold font-['Inter'] leading-[30px]">
              Still have questions?
            </div>
            <div className="self-stretch text-center text-slate-600 text-lg font-normal font-['Inter'] leading-7">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </div>
          </div>
          <div className="justify-start items-start gap-3 inline-flex">
            <div className="px-[18px] py-3 bg-violet-500 rounded-lg shadow border border-violet-500 justify-center items-center gap-1.5 flex">
              <div className="w-5 h-5 relative" />
              <div className="text-white text-base font-semibold font-['Inter'] leading-normal">
                Join our Discord
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
