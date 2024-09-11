import { ReactComponent as RemovePII } from '../../assets/images/home/howKleoWorks/removePII.svg'
import { ReactComponent as Govern } from '../../assets/images/home/howKleoWorks/govern.svg'
import { ReactComponent as Own } from '../../assets/images/home/howKleoWorks/own.svg'

export const HowKleoWorksSection = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[488px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] flex w-full h-full items-center px-4">
        <div className="flex flex-col gap-6 xl:gap-10 mac:gap-[50px] w-full h-max items-center">
          {/* How Kleo Works Question & Answer */}
          <div className="flex flex-col items-center justify-normal gap-1 xl:gap-[10px] mac:gap-3 md:max-w-[320px] lg:max-w-[428px] xl:max-w-[500px] mac:max-w-[560px] 2xl:max-w-[745px]">
            <div className="font-semibold text-2xl md:text-[32px] lg:text-[40px] xl:text-[42px] mac:text-5xl 2xl:text-[58px]">
              How Kleo Works?
            </div>
            <div className="font-roboto font-normal text-[11px] md:text-sm xl:text-base 2xl:text-lg text-center">
              Kleo has a three step process to ensure that you are in control of
              your data and <b>your data earns while you sleep.</b>
            </div>
          </div>

          {/* 3 Cards explaining workflow */}
          <div className="flex flex-col lg:flex-row justify-start lg:justify-evenly items-center lg:items-stretch gap-4 md:gap-6 xl:gap-[21px] mac:gap-6 2xl:gap-[30px] [text-wrap:balance]">
            {/* Card - 1 */}
            <div className="w-full lg:w-1/3 lg:min-h-full flex flex-col p-4 lg:p-6 bg-white justify-start rounded-lg md:rounded-2xl lg:rounded-3xl mac:rounded-[18px] 2xl:rounded-[20px] gap-4 lg:gap-6">
              {/* Icon */}
              <RemovePII className="w-20 h-20 xl:w-[94px] xl:h-[94px] mac:w-[105px] mac:h-[105px] 2xl:w-[140px] 2xl:h-[140px] rounded-[4px] md:rounded-lg mac:rounded-[10px] 2xl:rounded-[14px]"></RemovePII>
              {/* Text */}
              <div className="flex flex-col justify-start items-start gap-2 lg:gap-4 xl:gap-[12px] mac:gap-[14px] 2xl:gap-4">
                <div className="font-semibold text-lg md:text-2xl 2xl:text-[32px]">
                  Confidential
                </div>
                <div className="font-roboto font-normal text-[11px] md:text-sm lg:text-base 2xl:text-lg">
                  Kleo removes all the personally identifiable information. This
                  includes, names, emails, usernames, addresses, specific
                  locations and{' '}
                  <a
                    href="https://docs.kleo.network/kleo_network/pii/"
                    target="_blank"
                    className="underline"
                  >
                    more
                  </a>
                </div>
              </div>
            </div>
            {/* Card - 2 */}
            <div className="w-full lg:w-1/3 lg:min-h-full text-white flex flex-col p-4 lg:p-6 bg-primary-600 justify-start rounded-lg md:rounded-2xl lg:rounded-3xl mac:rounded-[18px] 2xl:rounded-[20px] gap-4 lg:gap-6">
              {/* Icon */}
              <Govern className="w-20 h-20 xl:w-[94px] xl:h-[94px] mac:w-[105px] mac:h-[105px] 2xl:w-[140px] 2xl:h-[140px] rounded-[4px] md:rounded-lg mac:rounded-[10px] 2xl:rounded-[14px]"></Govern>
              {/* Text */}
              <div className="flex flex-col justify-start items-start gap-2 lg:gap-4 xl:gap-[12px] mac:gap-[14px] 2xl:gap-4">
                <div className="font-semibold text-lg md:text-2xl 2xl:text-[32px]">
                  You Govern Your Data
                </div>
                <div className="font-roboto font-normal text-[11px] md:text-sm lg:text-base 2xl:text-lg">
                  Decentralised smart contracts ensure that your data can only
                  be accessed if it passes majority{' '}
                  <a
                    href="https://snapshot.org/#/kleo-network.eth/"
                    target="_blank"
                    className="underline"
                  >
                    vote on snapshot.org
                  </a>
                </div>
              </div>
            </div>
            {/* Card - 3 */}
            <div className="w-full lg:w-1/3 lg:min-h-full flex flex-col p-4 lg:p-6 bg-white justify-start rounded-lg md:rounded-2xl lg:rounded-3xl mac:rounded-[18px] 2xl:rounded-[20px] gap-4 lg:gap-6">
              {/* Icon */}
              <Own className="w-20 h-20 xl:w-[94px] xl:h-[94px] mac:w-[105px] mac:h-[105px] 2xl:w-[140px] 2xl:h-[140px] rounded-[4px] md:rounded-lg mac:rounded-[10px] 2xl:rounded-[14px]"></Own>
              {/* Text */}
              <div className="flex flex-col justify-start items-start gap-2 lg:gap-4 xl:gap-[12px] mac:gap-[14px] 2xl:gap-4">
                <div className="font-semibold text-lg md:text-2xl 2xl:text-[32px]">
                  Ownership
                </div>
                <div className="font-roboto font-normal text-[11px] md:text-sm lg:text-base 2xl:text-lg">
                  Fair Equity Ownership. <br />
                  Proof of contribution based on quantity and quality of your
                  data determines your reward. Earn upto $400/month.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
