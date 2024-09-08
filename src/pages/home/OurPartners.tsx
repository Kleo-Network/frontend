import VerticalPartnersGrid from '../../assets/images/home/partners-vertical.svg'
import HorizontalPartnersGrid from '../../assets/images/home/partners-horizontal.svg'

export const OurPartnersSection = () => {
  return (
    <section className="w-full flex justify-center pt-[60px] sm:pt-[80px] lg:pt-[100px] mac:pt-[120px] 2xl:pt-[150px]">
      <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[488px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] flex w-full h-full items-center px-4">
        <div className="flex flex-col gap-6 lg:gap-[40px] w-full items-center">
          {/* Text Of Partners */}
          <div className="flex flex-col w-full gap-6 sm:max-w-[288px] md:max-w-[318px] lg:max-w-[464px] text-center">
            <div className="font-semibold text-2xl md:text-[32px] lg:text-[40px]">
              Our Partners
            </div>
            <div className="font-roboto font-normal text-[11px] md:text-sm lg:text-base">
              We have partnered with industry leaders to help us build and scale
              this solution. Notable partners are mentioned here.{' '}
            </div>
          </div>

          {/* Image Grid of Partner Icons */}
          <div className="w-full flex justify-center items-center max-w-[440px] md:max-w-[488px] lg:max-w-[704px]">
            {/* Image for screens smaller than the 'sm' breakpoint */}
            <img
              src={VerticalPartnersGrid}
              alt="Vertical Grid"
              className="w-full block sm:hidden"
            />

            {/* Image for screens larger than or equal to the 'sm' breakpoint */}
            <img
              src={HorizontalPartnersGrid}
              alt="Horizontal Grid"
              className="w-full hidden sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
