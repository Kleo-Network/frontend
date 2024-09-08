import { ReactComponent as Sparkle } from '../../assets/images/home/hero_sparkle.svg'
import { ReactComponent as BottomLeftGrid } from '../../assets/images/home/hero_bottom_left_grid.svg'
import { ReactComponent as TopRightGrid } from '../../assets/images/home/hero_top_right_grid.svg'

export const HeroSection = () => {
  return (
    <section className="h-[520px] pt-[124px] bg-gray-900 flex justify-center relative rounded-bl-[50px] rounded-br-[50px] overflow-hidden">
      <div className="z-[45] h-max max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] flex w-full items-start">
        {/* Hero Text */}
        <div className="flex h-full w-full flex-col justify-start items-start px-4">
          {/* Earn Your + Stack in the AI */}
          <div className="flex flex-col text-white font-medium text-[40px]">
            <span className="flex items-center justify-start">
              Earn Your
              <Sparkle className="w-8 h-auto" />
            </span>
            <span className="ml-10">Stake In The AI</span>
          </div>
          {/* Revolution + Create Account */}
          <div className="flex flex-col gap-4">
            <span className="text-white font-medium text-[40px]">
              Revolution
            </span>
            <div className="flex flex-col font-roboto font-normal text-sm text-white max-w-[240px] gap-4">
              Earn, Govern and Own your data. Earn upto $400/mo with your data.
              <a
                href="#"
                className="py-2 px-7 bg-primary-500 hover:bg-primary-700 text-white font-medium text-[20px] w-max rounded-[4px] font-inter text-sm"
              >
                Create Account
              </a>
            </div>
          </div>
        </div>
      </div>
      <BottomLeftGrid className="z-20 absolute bottom-0 left-0 w-[318px] h-auto -translate-x-24 translate-y-24 pointer-events-none" />
      <TopRightGrid className="z-20 absolute top-0 right-0 w-[318px] h-[292px] pointer-events-none" />
    </section>
  )
}
