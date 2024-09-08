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
    <div className="mt-[60px] sm:mt-[80px]">
      <section className="w-full flex justify-center">
        <div className="max-w-[328px] sm:max-w-[440px]">
          <div className="flex flex-col w-full items-center gap-6 sm:gap-6">
            {/* Title */}
            <div className="font-semibold text-2xl text-center max-w-[250px]">
              Frequently Asked Questions
            </div>
            {/* Question Container */}
            <div className="py-6 px-4 bg-white flex flex-col gap-4 rounded-lg sm:rounded-2xl">
              {faqs.map((faq, index) => (
                <div key={index} className="flex flex-col gap-2">
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex justify-between items-center gap-4"
                  >
                    <div
                      className={`font-medium text-sm ${
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
                    <div className="font-roboto font-normal text-[11px] text-black">
                      {faq.answer}
                    </div>
                  )}

                  {index !== faqs.length - 1 && (
                    <hr className="text-gray-200 w-full" />
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
