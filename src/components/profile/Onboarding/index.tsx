import React from 'react'
import { ReactComponent as Kleo } from '../../../assets/images/kleoWithBg.svg'
import { ReactComponent as Arrow } from '../../../assets/images/arrow.svg'
import Accordion from '../../common/Accordion'

export default function Onboarding() {
  const [expanded, setExpanded] = React.useState(false)

  return (
    <div className="flex flex-col items-start">
      <div className="p-6 text-lg w-full font-medium text-gray-900 border-b border-gray-200">
        Connect these to get started!
      </div>
      <div className="flex flex-row items-start gap-4 p-6">
        <Kleo className="w-16 h-16" />
        <div className="flex flex-col items-start justify-center">
          <span className="text-gray-900 text-base font-medium">
            Install Kleo Plugin
          </span>
          <span className="text-gray-400 text-sm font-regular">
            Unlock insights, personalize your Browsing and safeguard your
            privacy
          </span>
          <div className="flex flex-row justify-start items-center mt-4 text-sm font-medium">
            <button className="px-4 py-3 bg-primary text-white rounded-lg shadow mr-1">
              Install Plugin
            </button>
            <button className="px-4 py-3 ml-1 rounded-lg shadow border border-gray-200 text-gray-700">
              I have already installed
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start gap-4 p-6">
        <Kleo className="w-16 h-16" />
        <div className="flex flex-col items-start justify-center">
          <span className="text-gray-900 text-base font-medium">
            Connect Lens
          </span>
          <span className="text-gray-400 text-sm font-regular">
            Unlock insights, personalize your Browsing and safeguard your
            privacy
          </span>
          <div className="flex flex-row justify-start items-center mt-4 text-sm font-medium">
            <button className="px-4 py-3 bg-primary text-white rounded-lg shadow mr-1">
              Connect with Lens
            </button>
          </div>
        </div>
      </div>
      <div className="p-6 border-t border-gray-200 w-full">
        <Accordion
          expanded={expanded}
          setExpanded={setExpanded}
          header={accordionHeader(expanded)}
          body={accordionBody()}
        />
      </div>
    </div>
  )
}

const accordionHeader = (expanded: boolean) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <span className="text-gray-900 text-sm font-medium">
        Why should I install Kleo Plugin?
      </span>
      <button className="text-gray-400 text-sm font-regular">
        {expanded ? (
          <Arrow className="w-5 h-5" />
        ) : (
          <Arrow className=" w-5 h-5transform rotate-180" />
        )}
      </button>
    </div>
  )
}

const accordionBody = () => {
  return (
    <div className="flex flex-col items-start justify-center">
      <div className="flex flex-col justify-start items-start mt-4 text-sm font-regular">
        <div>
          <span className="text-gray-900">In-Depth Insights : </span>
          <span className="text-gray-400">
            Gain a deep understanding of your online activities and habits for
            better decision-making.
          </span>
        </div>
        <div>
          <span className="text-gray-900">Tailored Recommendations : </span>
          <span className="text-gray-400">
            Receive personalized recommendations to enhance your online
            experience.
          </span>
        </div>
        <div>
          <span className="text-gray-900"> Privacy Assurance : </span>
          <span className="text-gray-400">
            Rest assured, your data remains private and secure while using KLEO.
          </span>
        </div>
        <div>
          <span className="text-gray-900"> User-Friendly Interface :</span>
          <span className="text-gray-400">
            Enjoy a seamless, intuitive experience in exploring your browsing
            data.
          </span>
        </div>
        <div>
          <span className="text-gray-900">Productivity Enhancement : </span>
          <span className="text-gray-400">
            Optimize your online time and boost productivity with KLEO's
            insights.
          </span>
        </div>
      </div>
    </div>
  )
}
