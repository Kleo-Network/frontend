import { useState } from 'react'
import PlusIconPath from '../../assets/images/home/faq/plus.svg'
import MinusIconPath from '../../assets/images/home/faq/minus.svg'

const faqs = [
  {
    question: 'Does KLEO collect and store my browsing history?',
    answer:
      'No, Kleo encrypts and stores your browsing history on Decentralised Storage. Our Smart Contracts ensure that only the DAO proposed scripts or you can access your data. '
  },
  {
    question: 'What is Kleo DATA DAO? How can I participate?',
    answer:
      'Kleo DATA DAO is a community driven collective which decides how user owned data is to be utlised. The aim is to drive benefits for the community. Install Extension, Join our discord, and check out Snapshot Voting Processes.'
  },
  {
    question: 'What is Proof Of Contribution Algorithm?',
    answer:
      'Kleo has an algorithm known as Proof of Contribution which decides the value of an individual user data to the entire DATA DAO. This algorithm is how our users are awarded!'
  },
  {
    question: 'How frequently are users awarded Kleo Points?',
    answer:
      'Users are awarded Kleo Points every 15 days, these can be claimed anytime user wants. We intend to start distributing rewards from End of Ocotober 2024.'
  },
  {
    question: 'Is KLEO a paid service, or is there a free version available?',
    answer:
      'Kleo is free to use for our users who want to protect their privacy and do not want it to be used as part of DATA DAO. It is user owned data. '
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
                    <div className="font-roboto font-normal text-[11px] md:text-sm text-black lg:text-base 2xl:text-lg">
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
