import { ReactComponent as Sparkle } from '../../assets/images/home/hero_sparkle.svg'
import { ReactComponent as BottomLeftGrid } from '../../assets/images/home/hero_bottom_left_grid.svg'
import { ReactComponent as TopRightGrid } from '../../assets/images/home/hero_top_right_grid.svg'

export const HeroSection = () => {
  return (
    <section className="h-[520px] sm:h-[460px] md:h-[520px] lg:h-[756px] pt-[124px] sm:pt-[80px] md:pt-[114px] lg:pt-[164px] bg-gray-900 flex justify-center relative rounded-bl-[50px] rounded-br-[50px] overflow-hidden">
      <div className="z-[45] h-max max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] flex w-full items-start">
        {/* Hero Text */}
        <div className="flex h-full w-full flex-col justify-start md:items-center items-start px-4">
          {/* Earn Your + Stack in the AI */}
          <div className="flex flex-col text-white font-medium text-[40px] sm:text-[50px] md:text-[55px] lg:text-[80px]">
            <span className="flex items-center justify-start">
              Earn Your
              <Sparkle className="w-8 sm:w-9 md:w-10 lg:w-[57px] sm:ml-9 lg:ml-[52px] h-auto" />
            </span>
            <span className="ml-10 sm:ml-20 md:ml-24 lg:ml-36">
              Stake In The AI
            </span>
          </div>
          {/* Revolution + Create Account */}
          <div className="flex flex-col sm:flex-row gap-4 sm:ml-7 md:ml-10 lg:-ml-10 lg:gap-6">
            <span className="text-white font-medium text-[40px] sm:text-[50px] md:text-[55px] lg:text-[80px]">
              Revolution
            </span>
            <div className="flex flex-col font-roboto font-normal text-sm sm:text-[11px] lg:text-sm text-white max-w-[240px] sm:max-w-[136px] lg:max-w-[220px] gap-4 md:gap-[22px] lg:gap-4 sm:mt-6 lg:mt-9">
              Earn, Govern and Own your data. Earn upto $400/mo with your data.
              <a
                href="#"
                className="py-2 px-7 sm:px-[14px] sm:py-2 lg:px-4 lg:py-[10px] text-white font-medium w-max font-inter text-sm rounded-[4px] bg-primary-500 hover:bg-primary-700"
              >
                Create Account
              </a>
            </div>
          </div>
        </div>
      </div>
      <BottomLeftGrid className="z-20 absolute bottom-0 left-0 w-[318px] h-[318px] sm:w-[360px] sm:h-[360px] md:w-[425px] md:h-[425px] lg:w-[555px] lg:h-[555px] -translate-x-24 translate-y-24 sm:-translate-x-8 md:-translate-x-14 md:translate-y-32 lg:-translate-x-12 lg:translate-y-40 pointer-events-none" />
      <TopRightGrid className="z-20 absolute top-0 right-0 w-[318px] h-[292px] sm:w-[360px] sm:h-[332px] md:w-[425px] md:h-[392px] lg:w-[555px] lg:h-[511px] pointer-events-none lg:translate-x-14 lg:translate-y-6" />
    </section>
  )
}
