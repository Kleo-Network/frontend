import { ReactComponent as GridFirstImage } from '../../assets/images/home/grid_first_image.svg'
import { ReactComponent as GridSecondImage } from '../../assets/images/home/grid_second_image.svg'
import { ReactComponent as GridThirdImage } from '../../assets/images/home/grid_third_image.svg'

export const FeatureGridSection = () => {
  return (
    <section className="w-full bg-gray-900 flex justify-center rounded-[50px] text-white mt-[60px] sm:mt-[80px] lg:mt-[100px] mac:mt-[120px] 2xl:mt-[150px] py-[60px] md:py-[80px] lg:py-[100px] mac:py-[120px] 2xl:py-[150px] px-4 sm:px-[100px] md:px-[140px] lg:px-[160px] xl:px-[150px] 2xl:px-[200px]">
      <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] flex w-full h-full items-center">
        <div className="flex flex-col gap-[60px] sm:gap-[70px] md:gap-[80px] items-center">
          {/* Pair - 1 */}
          <div className="flex flex-col gap-6 items-center">
            {/* Image */}
            <GridFirstImage className="w-full h-auto rounded-lg" />
            {/* Text */}
            <div className="flex flex-col gap-1 md:gap-4 items-start w-full">
              <div className="font-semibold text-2xl md:text-[32px]">
                Own A Stake For Your Data
              </div>
              <p className="font-roboto font-normal text-[11px] md:text-sm">
                Machine Learning Models / Analytics Houses want this data. Kleo
                and VANA DAO will come up with a proof of contribution which
                will then decide on user contribution tokens/$ amount that will
                be shared based on the requirement. Rest assured no personally
                identifiable information will be leaked.
                <br />
                <br />
                We will be using snapshot for Kleo token holders to manage
                conversation between data requirement and data liquidity
                provider.
              </p>
            </div>
          </div>

          {/* Pair - 2 */}
          <div className="flex flex-col gap-6 items-center">
            {/* Image */}
            <GridSecondImage className="w-full h-auto rounded-lg" />
            {/* Text */}
            <div className="flex flex-col gap-1 md:gap-4 items-start w-full">
              <div className="font-semibold text-2xl md:text-[32px]">
                Earn Rewards
              </div>
              <p className="font-roboto font-normal text-[11px] md:text-sm">
                Based on intelligence and complexity of your actions inside the
                browser, kleo will reward kleo XP points. Kleo will be
                transparent about the activity that helps you get the maximum
                kleo points but the exact algorithm will be closed source to
                ensure there is no farming.
                <br />
                <br />
                Just do what you do and earn rewards on the basis of the
                activity.
              </p>
            </div>
          </div>

          {/* Pair - 3 */}
          <div className="flex flex-col gap-6 items-center">
            {/* Image */}
            <GridThirdImage className="w-full h-auto rounded-lg" />
            {/* Text */}
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="flex flex-col gap-1 md:gap-4 items-start w-full">
                <div className="font-semibold text-2xl md:text-[32px]">
                  Kleo SDK
                </div>
                <p className="font-roboto font-normal text-[11px] md:text-sm">
                  Earn from your extension! Be a part of Kleo Data DAO.
                  <br />
                  <br />
                  Personalize your DAPP.
                </p>
              </div>
              <a
                href="#"
                className="font-medium text-sm text-white bg-primary-500 hover:bg-primary-600 px-[14px] py-[8px] rounded-[4px]"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
