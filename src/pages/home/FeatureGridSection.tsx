import { ReactComponent as GridFirstImage } from '../../assets/images/home/grid_first_image.svg'
import { ReactComponent as GridSecondImage } from '../../assets/images/home/grid_second_image.svg'
import { ReactComponent as GridThirdImage } from '../../assets/images/home/grid_third_image.svg'

export const FeatureGridSection = () => {
  return (
    <section className="w-full bg-gray-900 flex justify-center rounded-3xl sm:rounded-[32px] md:rounded-[40px] 2xl:rounded-[50px] text-white mt-[60px] sm:mt-[80px] lg:mt-[100px] mac:mt-[120px] 2xl:mt-[150px] py-[60px] md:py-[80px] lg:py-[100px] mac:py-[120px] 2xl:py-[150px] px-4 sm:px-[100px] md:px-[140px] lg:px-0">
      <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[488px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] flex w-full h-full items-center">
        <div className="flex flex-col gap-[60px] sm:gap-[70px] md:gap-[80px] lg:gap-[100px] items-center lg:w-full">
          {/* Pair - 1 */}
          <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-[100px] items-center justify-between">
            {/* Image */}
            <GridFirstImage className="w-full lg:w-1/2 h-auto rounded-lg sm:rounded-[16px] md:rounded-[18px] lg:rounded-[16px] mac:rounded-[18px] 2xl:rounded-[24px] lg:min-h-[456px] mac:min-h-[560px] 2xl:min-h-[746px]" />
            {/* Text */}
            <div className="flex flex-col gap-1 md:gap-4 items-start w-full lg:w-1/2 xl:max-w-[395px]">
              <div className="font-semibold text-2xl md:text-[32px] xl:text-[42px] xl:leading-tight mac:text-[48px] 2xl:text-[58px]">
                AI agents that help you own your data
              </div>
              <p className="font-nokora font-normal text-[11px] md:text-sm xl:text-base xl:leading-[30.6px] 2xl:text-lg text-white">
                Earn from your extension! Be a part of Kleo Data DAO,
                <br />
                <br />
                Personalise your DAPP.
              </p>
            </div>
          </div>

          {/* Pair - 2 */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[100px] items-center justify-between">
            {/* Image */}
            <GridSecondImage className="w-full lg:w-1/2 h-auto rounded-lg lg:min-h-[456px] mac:min-h-[560px] 2xl:min-h-[746px]" />
            {/* Text */}
            <div className="flex flex-col gap-1 md:gap-4 items-start w-full lg:w-1/2 xl:max-w-[395px]">
              <div className="font-semibold text-2xl md:text-[32px] xl:text-[42px] xl:leading-tight mac:text-[48px] 2xl:text-[58px]">
                AI agent to own your data.
              </div>
              <p className="font-nokora font-normal text-[11px] md:text-sm xl:text-base xl:leading-[30.6px] 2xl:text-lg text-white">
                Machine Learning Models / Analytics Houses want this data. Kleo
                and VANA DAO will come up with a proof of contribution which
                will then decide on user contribution tokens/$ amount that will
                be shared based on the requirement. Rest assured no personally
                identifiable information will be leaked.
                <br />
                <br />
                We will be using snapshot for Kleo token holders to manage
                conversation between data requirement and data liquidity
                provider
              </p>
            </div>
          </div>

          {/* Pair - 3 */}
          <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-[100px] items-center justify-between">
            {/* Image */}
            <GridThirdImage className="w-full lg:w-1/2 h-auto rounded-lg lg:min-h-[456px] mac:min-h-[560px] 2xl:min-h-[746px]" />
            {/* Text */}
            <div className="flex flex-col gap-4 items-start w-full lg:w-1/2 xl:max-w-[395px]">
              <div className="flex flex-col gap-1 md:gap-4 items-start w-full">
                <div className="font-semibold text-2xl md:text-[32px] xl:text-[42px] xl:leading-tight mac:text-[48px] 2xl:text-[58px]">
                  Make life easier
                </div>
                <p className="font-nokora font-normal text-[11px] md:text-sm xl:text-base xl:leading-[30.6px] 2xl:text-lg text-white">
                  Based on intelligence and complexity of your actions inside
                  the browser, kleo will reward kleo XP points. Kleo will be
                  transparent about the activity that helps you get the maximum
                  kleo points but the exact algorithm will be closed source to
                  ensure there is no farming.
                  <br/>
                  <br/>
                  Just do what you do and earn rewards on the basis of the
                  activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
