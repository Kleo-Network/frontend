import { ReactComponent as FooterKleoLogo } from '../../assets/images/home/footer/logo_footer.svg'
import { ReactComponent as PhoneIcon } from '../../assets/images/home/footer/phone.svg'
import { ReactComponent as EmailIcon } from '../../assets/images/home/footer/email.svg'
import { ReactComponent as LinkedIn } from '../../assets/images/home/footer/linkedIn.svg'
import { ReactComponent as FaceBook } from '../../assets/images/home/footer/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/images/home/footer/instagram.svg'
import { ReactComponent as Discord } from '../../assets/images/home/footer/discord.svg'
import { ReactComponent as Grid } from '../../assets/images/home/footer/grid.svg'

export const FooterSection = () => {
  return (
    <div className="mt-[150px] md:mt-[185px] lg:mt-[212px] xl:mt-[170px] mac:mt-[250px]">
      {/* Footer section */}
      <section className="w-full flex justify-center items-end h-[680px] md:h-[743px] xl:h-[444px] mac:h-[484px] bg-gray-blue-100 rounded-t-3xl sm:rounded-t-[32px] md:rounded-t-[40px] p-4 pt-[130px] md:pt-[160px] lg:pt-[163px] xl:p-0 xl:pt-[190px] mac:pt-[197px] relative">
        <div className="w-[328px] sm:w-[440px] md:w-[488px] lg:w-[704px] xl:w-[980px] mac:w-[1140px] relative">
          <div className="flex flex-col gap-6 xl:gap-[12px] items-start w-full xl:items-center">
            {/* Company Logo and Text */}
            <div className="flex flex-col w-full gap-2 lg:gap-4 items-start xl:items-center xl:gap-[12px]">
              <FooterKleoLogo className="h-8 xl:h-10 mac:h-[45px] w-auto" />
              <div className="font-roboto font-normal text-base mac:text-[18px]">
                Kleo Network is a user owned data DAO.
              </div>
            </div>

            {/* Contact Number and Email */}
            <div className="flex flex-col w-full gap-4 xl:flex-row xl:gap-[20px] xl:justify-center">
              {/* Phone Number Pill */}
              <div className="flex items-center px-3 xl:px-4 py-[6px] xl:py-3 mac:px-[18px] bg-gray-blue-200 gap-2 leading-[34px] w-max rounded-s-full rounded-e-full">
                <PhoneIcon className="size-[14px] xl:size-[12px] mac:size-[14px]" />
                <div className="font-roboto font-medium text-sm xl:text-[12px] mac:text-sm">
                  91 8369683781
                </div>
              </div>

              {/* Email Pill */}
              <div className="flex items-center px-3 xl:px-4 py-[6px] xl:py-3 mac:px-[18px] bg-gray-blue-200 gap-2 leading-[34px] w-max rounded-s-full rounded-e-full">
                <EmailIcon className="h-18 xl:h-[11px] mac:h-[13px]" />
                <div className="font-roboto font-medium text-sm xl:text-[12px] mac:text-sm">
                  contact@kleo.network
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col xl:flex-row items-start xl:justify-between w-full gap-2 font-roboto font-normal text-sm md:text-base leading-[1.3] xl:mt-[28px] xl:pb-[16px] mac:mt-[33px] mac:pb-[18px]">
              <a href="#" className="hover:font-semibold">
                Home
              </a>
              <a href="#" className="hover:font-semibold">
                About
              </a>
              <a href="#" className="hover:font-semibold">
                Team
              </a>
              <a href="#" className="hover:font-semibold">
                Fundraising Memo
              </a>
              <a href="#" className="hover:font-semibold">
                Github Documentation
              </a>
              <a href="#" className="hover:font-semibold">
                Legal
              </a>
              <a href="#" className="hover:font-semibold">
                Contact Us
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center justify-between gap-6 w-132 xl:absolute xl:bottom-3 mac:bottom-[14px] xl:right-0">
              <LinkedIn className="size-[28px] hover:text-primary-700" />
              <Instagram className="size-[28px] hover:text-primary-700" />
              <FaceBook className="size-[28px] hover:text-primary-700" />
            </div>

            {/* All rights reserved */}
            <div className="flex items-start w-full border-t border-gray-blue-200 pt-2 font-roboto font-normal text-sm leading-[1.7] xl:py-[12px] mac:py-[14px]">
              All rights reserved. www.kleo.network
            </div>
          </div>
        </div>
        {/* Join Discord Card */}
        <div className="max-w-[328px] sm:max-w-[440px] md:max-w-[488px] lg:max-w-[704px] xl:max-w-[980px] mac:max-w-[1140px] absolute -top-[90px] sm:-top-[70px] md:-top-[105px] xl:-top-[120px] mac:-top-[130px] w-full text-white bg-primary-600 rounded-lg md:rounded-[32px] xl:rounded-[16px] mac:rounded-[18px] overflow-hidden">
          <div className="flex flex-col items-center xl:items-start xl:text-left xl:max-w-[500px] mac:max-w-[560px] text-center gap-4 py-6 px-4 md:p-8 xl:py-[40px] xl:px-[56px] mac:p-[60px] relative">
            {/* Text */}
            <div className="flex flex-col gap-1 lg:gap-4 xl:gap-[12px] w-full leading-[1.3]">
              <div className="font-semibold text-2xl md:text-[32px] lg:text-[40px] xl:text-[38px] mac:text-[44px]">
                Still have questions?
              </div>
              <div className="font-roboto font-normal text-[11px] md:text-sm lg:text-base mac:text-sm">
                Can't find the answer you're looking for? Please chat to our
                friendly team. We will do our best to assist you with the
                questions.
              </div>
            </div>

            {/* Discord Button */}
            <a className="px-4 py-2 bg-white text-primary-800 flex gap-2 items-center rounded-md hover:bg-gray-200 cursor-pointer">
              <Discord className="h-[14px]" />
              <p className="font-normal text-sm">Join Our Discord</p>
            </a>
          </div>
          <Grid className="absolute z-10 top-0 right-0" />
        </div>
      </section>
    </div>
  )
}
