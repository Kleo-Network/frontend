import { ReactComponent as Sparkle } from '../../assets/images/home/hero_sparkle.svg'
import { ReactComponent as BottomLeftGrid } from '../../assets/images/home/hero_bottom_left_grid.svg'
import { ReactComponent as TopRightGrid } from '../../assets/images/home/hero_top_right_grid.svg'

export const HeroSection = () => {
  return (
    <section className="h-[840px] w-full bg-gray-900 flex justify-center rounded-bl-[50px] rounded-br-[50px] relative overflow-y-hidden">
      <div className="max-w-[1592px] w-full">
        <div className="px-9 w-full flex flex-col mt-[110px] z-30">
          <div className="flex w-full font-medium text-[96px] items-center text-white px-[7%]">
            Earn Your
            <Sparkle className="ml-16" />
          </div>
          <div className="flex w-full justify-center items-center text-[96px] font-medium text-white">
            Stake In The AI
          </div>
          <div className="flex w-full justify-center items-start gap-14 pl-32">
            <span className="text-[96px] font-medium text-white">
              Revolution
            </span>
            <div className="flex flex-col max-w-md font-normal text-[20px] text-white mt-14">
              Earn, Govern and Own your data. Earn upto $400/mo with your data.
              {/* TODO: Update bellow Link */}
              <a
                href="#"
                className="mt-3 py-4 px-8 bg-primary-500 hover:bg-primary-700 text-white font-medium text-[20px] w-max rounded-md"
              >
                Create Account
              </a>
            </div>
          </div>
        </div>
      </div>
      <BottomLeftGrid className="z-20 absolute bottom-0 left-0 w-[560px] h-[560px] -translate-x-32 pointer-events-none" />
      <TopRightGrid className="z-20 absolute top-0 right-0 w-[560px] h-[560px] pointer-events-none" />
    </section>
  )
}
