import { ReactComponent as AutomationScript } from '../../assets/images/home/howKleoWorks/automation_script.svg'
import { ReactComponent as AutomateFlow } from '../../assets/images/home/howKleoWorks/automate_flow.svg'
import { ReactComponent as EarnCoins } from '../../assets/images/home/howKleoWorks/earn_coins.svg'

export const HowKleoWorksSection = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[488px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] flex w-full h-full items-center px-4">
        <div className="flex flex-col gap-6 xl:gap-10 mac:gap-[50px] w-full h-max items-center">
          {/* How Kleo Works Question & Answer */}
          <div className="flex flex-col items-center justify-normal gap-1 xl:gap-[10px] mac:gap-4 md:max-w-[320px] lg:max-w-[428px] xl:max-w-[500px] mac:max-w-[560px] 2xl:max-w-[745px]">
            <div className="font-semibold text-2xl md:text-[32px] lg:text-[40px] xl:text-[42px] mac:text-5xl 2xl:text-[58px]">
              How Kleo Works?
            </div>
            <div className="font-nokora font-normal text-[11px] md:text-sm xl:text-base xl:leading-[30.6px] 2xl:text-lg text-center text-gray-800">
              Kleo has a three step process to ensure that you are in control of
              your EarnCoins data and yet get maximum benefits from it.
            </div>
          </div>

          {/* 3 Cards explaining workflow */}
          <div className="flex flex-col lg:flex-row justify-start lg:justify-evenly items-center lg:items-stretch gap-4 md:gap-6 xl:gap-[21px] mac:gap-6 2xl:gap-[30px] [text-wrap:balance]">
            {/* Card - 1 */}
            <div className="w-full lg:w-1/3 lg:min-h-full flex flex-col p-4 lg:p-6 bg-white justify-start rounded-lg md:rounded-2xl lg:rounded-3xl mac:rounded-[18px] 2xl:rounded-[20px] gap-4 lg:gap-6">
              {/* Icon */}
              <AutomationScript className="w-20 h-20 xl:w-[94px] xl:h-[94px] mac:w-[105px] mac:h-[105px] 2xl:w-[140px] 2xl:h-[140px] rounded-[4px] md:rounded-lg mac:rounded-[10px] 2xl:rounded-[14px]"></AutomationScript>
              {/* Text */}
              <div className="flex flex-col justify-start items-start gap-2 lg:gap-4 xl:gap-[12px] mac:gap-[14px] 2xl:gap-4">
                <div className="font-semibold text-lg md:text-2xl 2xl:text-[32px]">
                  Developers Create Automation Scripts
                </div>
                <div className="font-nokora font-normal text-[11px] md:text-sm xl:text-base xl:leading-[30.6px] 2xl:text-lg text-gray-800">
                  Skilled developers design custom automation scripts tailored
                  to solve specific challenges and streamline workflows.
                </div>
              </div>
            </div>
            {/* Card - 2 */}
            <div className="w-full lg:w-1/3 lg:min-h-full text-white flex flex-col p-4 lg:p-6 bg-primary-600 justify-start rounded-lg md:rounded-2xl lg:rounded-3xl mac:rounded-[18px] 2xl:rounded-[20px] gap-4 lg:gap-6">
              {/* Icon */}
              <AutomateFlow className="w-20 h-20 xl:w-[94px] xl:h-[94px] mac:w-[105px] mac:h-[105px] 2xl:w-[140px] 2xl:h-[140px] rounded-[4px] md:rounded-lg mac:rounded-[10px] 2xl:rounded-[14px]"></AutomateFlow>
              {/* Text */}
              <div className="selection:bg-white selection:text-primary-600 flex flex-col justify-start items-start gap-2 lg:gap-4 xl:gap-[12px] mac:gap-[14px] 2xl:gap-4">
                <div className="font-semibold text-lg md:text-2xl 2xl:text-[32px]">
                  Use those scripts to automate your flow
                </div>
                <div className="font-nokora font-normal text-[11px] md:text-sm xl:text-base xl:leading-[30.6px] 2xl:text-lg text-white">
                  With just a few clicks, you can integrate automation scripts
                  into your processes, eliminating manual tasks and boosting
                  productivity.
                </div>
              </div>
            </div>
            {/* Card - 3 */}
            <div className="w-full lg:w-1/3 lg:min-h-full flex flex-col p-4 lg:p-6 bg-white justify-start rounded-lg md:rounded-2xl lg:rounded-3xl mac:rounded-[18px] 2xl:rounded-[20px] gap-4 lg:gap-6">
              {/* Icon */}
              <EarnCoins className="w-20 h-20 xl:w-[94px] xl:h-[94px] mac:w-[105px] mac:h-[105px] 2xl:w-[140px] 2xl:h-[140px] rounded-[4px] md:rounded-lg mac:rounded-[10px] 2xl:rounded-[14px]"></EarnCoins>
              {/* Text */}
              <div className="flex flex-col justify-start items-start gap-2 lg:gap-4 xl:gap-[12px] mac:gap-[14px] 2xl:gap-4">
                <div className="font-semibold text-lg md:text-2xl 2xl:text-[32px]">
                  Share your data to earn coins to spend on scripts
                </div>
                <div className="font-nokora font-normal text-[11px] md:text-sm xl:text-base xl:leading-[30.6px] 2xl:text-lg text-gray-800">
                  Contribute your data securely to earn coins, which can be used
                  to access or purchase more advanced automation scripts.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
