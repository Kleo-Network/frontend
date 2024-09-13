import { useState } from 'react'
import PlusIconPath from '../../assets/images/home/faq/plus.svg'
import MinusIconPath from '../../assets/images/home/faq/minus.svg'

const faqs = [
  {
    question: 'Does KLEO collect and store my browsing history?',
    answer:
      'No, Kleo encrypts and stores your browsing history. Only you have access to this data and the governance body from the snapshot voting process.'
  },
  {
    question: 'Are you sending my browsing history to an external API?',
    answer:
      'No, Kleo encrypts and stores your browsing history. Only you have access to this data and the governance body from the snapshot voting process.'
  },
  {
    question: 'What kind of cards can I expect to receive from KLEO?',
    answer:
      'No, Kleo encrypts and stores your browsing history. Only you have access to this data and the governance body from the snapshot voting process.'
  },
  {
    question: 'Is KLEO compatible with all web browsers?',
    answer:
      'No, Kleo encrypts and stores your browsing history. Only you have access to this data and the governance body from the snapshot voting process.'
  },
  {
    question: 'Can I customize the insights I receive from KLEO?',
    answer:
      'No, Kleo encrypts and stores your browsing history. Only you have access to this data and the governance body from the snapshot voting process.'
  },
  {
    question: 'Is KLEO a paid service, or is there a free version available?',
    answer:
      'No, Kleo encrypts and stores your browsing history. Only you have access to this data and the governance body from the snapshot voting process.'
  }
]

export const FaqSection = () => {
  // State to track which FAQ is open
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Toggle the index of the open FAQ
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="mt-[60px] sm:mt-[80px] lg:mt-[100px] mac:mt-[120px] 2xl:mt-[150px]">
      <section className="w-full flex justify-center">
        <div className="max-w-[328px] sm:max-w-[440px] md:max-w-[488px] lg:max-w-[704px] xl:min-w-[980px] mac:min-w-[1140px] 2xl:min-w-[1520px]">
          <div className="flex flex-col w-full items-center gap-6 lg:gap-10 xl:flex-row xl:items-start mac:justify-between">
            {/* Title */}
            <div className="font-semibold text-2xl text-center max-w-[250px] lg:font-bold lg:text-[40px] lg:leading-tight lg:max-w-[350px] xl:text-left xl:max-w-[240px] xl:font-semibold xl:text-[38px] xl:leading-snug mac:text-[44px] 2xl:text-[58px]">
              Frequently Asked Questions
            </div>
            {/* Question Container */}
            <div className="py-6 px-4 bg-white flex flex-col gap-4 rounded-lg sm:rounded-2xl md:px-6 lg:py-8 xl:py-6 xl:w-full mac:rounded-[18px] mac:max-w-[752px] 2xl:max-w-[1003px] 2xl:rounded-[24px] 2xl:py-8 2xl:px-10">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 xl:gap-[10px] mac:gap-[12px]"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex justify-between items-center gap-4 2xl:gap-[18px]"
                  >
                    <div
                      className={`font-medium text-sm md:text-base lg:text-2xl xl:text-xl 2xl:text-[24px] ${
                        openIndex === index ? 'text-primary-600' : 'text-black'
                      }`}
                    >
                      {faq.question}
                    </div>
                    {/* Toggling Plus/Minus Icon */}
                    <img
                      src={openIndex === index ? MinusIconPath : PlusIconPath}
                      alt={openIndex === index ? 'Minus Icon' : 'Plus Icon'}
                      className="w-5 h-5 text-primary-600"
                    />
                  </button>

                  {/* Answer */}
                  {openIndex === index && (
                    <div className="font-normal text-[11px] md:text-sm text-black lg:text-base 2xl:text-lg">
                      {faq.answer}
                    </div>
                  )}

                  {index !== faqs.length - 1 && (
                    <hr className="text-gray-200 w-full lg:mt-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
