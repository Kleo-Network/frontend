import { ReactComponent as DiscordIcon } from '../../../assets/images/discord.svg'
import { ReactComponent as CloseIcon } from '../../../assets/images/closeWithCircle.svg'
import { ReactComponent as OpenIcon } from '../../../assets/images/openWithCircle.svg'
import Accordion from '../../common/Accordion'
import { useState } from 'react'

const FAQs = [
  {
    header: 'Does KLEO collect and store my browsing history?',
    body: `No, KLEO does not collect or store your browsing history. We prioritize
        your privacy and ensure that your data remains secure and private on
        your device.`
  },
  {
    header: 'How does KLEO analyze my browser history?',
    body: 'KLEO analyzes your browser history locally on your device using advanced algorithms. No data is sent to our servers, ensuring your privacy and security.'
  },
  {
    header: 'What kind of insights can I expect to receive from KLEO?',
    body: 'KLEO provides insights into your browsing habits, including most visited websites, time spent online, and other relevant statistics to help you manage your digital well-being.'
  },
  {
    header: 'Is KLEO compatible with all web browsers?',
    body: 'Yes, KLEO is compatible with most major web browsers, including Chrome, Firefox, Safari, and Edge.'
  },
  {
    header: 'Can I customize the insights I receive from KLEO?',
    body: 'Currently, KLEO provides predefined insights. However, we are actively working on a feature to allow users to customize and choose the insights they want to receive.'
  },
  {
    header: 'Is KLEO a paid service, or is there a free version available?',
    body: 'KLEO offers both a free version and a premium subscription service with additional features. The free version includes essential insights, while the premium version provides advanced analytics and customization options.'
  }
]

export const FAQSection = () => {
  const [selectedFaqIndex, setSelectedFaqIndex] = useState<number | null>(null)

  const handleExpandedClick = (idx: number) => {
    selectedFaqIndex === idx
      ? setSelectedFaqIndex(null)
      : setSelectedFaqIndex(idx)
  }

  return (
    <div className="flex-col bg-white py-16 lg:px-36 lg:py-24 justify-start items-center gap-16 flex self-stretch md:min-h-[100vh] z-10">
      <div className="self-stretch px-8 flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch flex-col justify-start items-center gap-8 flex">
          <div className="self-stretch flex-col justify-start items-center gap-5 flex">
            <div className="self-stretch text-center text-gray-900 text-4xl font-semibold">
              Frequently asked questions
            </div>
            <div className="self-stretch text-center text-slate-600 text-xl font-normal">
              Everything you need to know about KLEO
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch  px-8 flex-col justify-start items-center gap-16 flex">
        <div className="self-stretch  flex-col justify-start items-start gap-8 flex">
          {FAQs.map((item, idx) => (
            <div
              key={idx}
              className={`grow shrink basis-0 w-full flex-col justify-start items-start gap-2 flex ${
                idx > 0 && ' pt-6 border-t border-gray-200'
              }`}
            >
              <Accordion
                expanded={selectedFaqIndex === idx}
                setExpanded={() => handleExpandedClick(idx)}
                header={accordionHeader(selectedFaqIndex === idx, item.header)}
                body={accordionBody(item.body)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="self-stretch px-8 flex-col justify-center items-center gap-8 flex">
        <div className="self-stretch px-8 pt-8 pb-10 bg-gray-50 rounded-2xl flex-col justify-start items-center gap-8 flex">
          <div className="self-stretch  flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch text-center text-gray-900 text-xl font-semibold">
              Still have questions?
            </div>
            <div className="self-stretch text-center text-slate-600 text-lg font-normal">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </div>
          </div>
          <div className="justify-start items-start gap-3 inline-flex">
            <a
              href="https://discord.gg/Qn6ZmecTEw"
              target="_blank"
              className="cursor-pointer px-4 py-3 bg-violet-500 rounded-lg shadow border border-violet-500 justify-center items-center gap-1.5 flex"
            >
              <DiscordIcon className="w-5 h-5 relative" />
              <div className="text-white text-base font-semibold">
                Join our Discord
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const accordionHeader = (expanded: boolean, headerText: string) => {
  return (
    <div className="flex flex-row gap-2 justify-between items-start">
      <span className="self-stretch text-gray-900 text-lg font-medium">
        {headerText}
      </span>
      <div className="text-gray-400 text-sm font-regular">
        {expanded ? (
          <CloseIcon className="w-5 h-5" />
        ) : (
          <OpenIcon className=" w-5 h-5" />
        )}
      </div>
    </div>
  )
}

const accordionBody = (bodyText: string) => {
  return (
    <div className="self-stretch justify-start items-start py-2 inline-flex w-[95%]  transition duration-1500 ease-linear">
      <div className="self-stretch text-slate-600 text-base font-normal">
        {bodyText}
      </div>
    </div>
  )
}
