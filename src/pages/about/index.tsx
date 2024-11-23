import { AboutHeroSection } from './sections/AboutHeroSection'
// import StackedCards from './sections/StackedCards'

export function About() {
  return (
    <main className="h-full bg-grayblue-200 w-screen">
      <div className="w-screen h-fit bg-[#0B0E16] flex justify-center relative rounded-bl-[30px] rounded-br-[30px] xl:rounded-bl-[50px] xl:rounded-br-[50px]">
        <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] w-full pt-[44px] lg:pt-[62px] xl:pt-[62px] mac:pt-[66px] 2xl:pt-[88px]">
          {/* Section just bellow Navbar with same width as Navbar in all screen sizes. */}
          <AboutHeroSection />
        </div>
      </div>
    </main>
  )
}
