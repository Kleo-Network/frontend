import { ReactComponent as HeroBackground } from '../../assets/images/home/hero_background.svg'

export const HeroSection = () => {
  return (
    <section className="h-[520px] sm:h-[460px] md:h-[520px] lg:h-[756px] xl:h-[700px] mac:h-[736px] 2xl:h-[900px] flex justify-center relative rounded-bl-[50px] rounded-br-[50px] overflow-hidden leading-tight bg-[#0B0E16]">
      {/* Hero Background Image */}
      <div className="w-full h-full absolute top-0 left-0 hidden sm:block">
        <HeroBackground style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Hero Text */}
      <div className="z-50 w-full h-full flex items-center justify-center px-[16px] sm:px-0 lg:items-start lg:pt-[160px] xl:pt-[120px]">
        <div className="w-full text-white font-inter font-medium text-[40px] flex flex-col gap-y-[8px] sm:w-[320px] sm:text-[50px] md:text-[55px] md:w-[380px] lg:text-[79.79px] lg:w-[554px] lg:gap-y-[12px] xl:text-[97px] xl:gap-y-[4px] xl:w-[680px] mac:w-[700px]">
          <h2 className="leading-[110%]">AI Agents</h2>
          <h2 className="ml-[40px] leading-[110%] sm:ml-0 sm:text-right">
            For Your
          </h2>
          <h2 className="leading-[90%] sm:ml-[40px] lg:ml-[72px] mac:ml-[80px]">Browser</h2>
          <a
            href="https://app.kleo.network"
            className="bg-primary-500 hover:bg-primary-700 text-[14px] w-fit rounded-[4px] py-[8px] px-[28px] mt-[8px] sm:px-[14px] xl:text-[20px] xl:py-[18px] xl:px-[32px] mac:text-[22.5px] mac:py-[20px] mac:px-[35px] sm:self-end sm:-mr-[80px] mac:-mr-[120px]"
          >
            Create Account
          </a>
        </div>
      </div>
    </section>
  )
}
