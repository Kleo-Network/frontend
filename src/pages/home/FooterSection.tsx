import { ReactComponent as FooterKleoLogo } from '../../assets/images/home/footer/logo_footer.svg'
import { ReactComponent as PhoneIcon } from '../../assets/images/home/footer/phone.svg'
import { ReactComponent as EmailIcon } from '../../assets/images/home/footer/email.svg'
import { ReactComponent as LinkedIn } from '../../assets/images/home/footer/linkedIn.svg'
import { ReactComponent as FaceBook } from '../../assets/images/home/footer/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/images/home/footer/instagram.svg'
import { ReactComponent as Discord } from '../../assets/images/home/footer/discord.svg'

export const FooterSection = () => {
  return (
    <div className="mt-[150px] md:mt-[185px] lg:mt-[212px]">
      {/* Footer section */}
      <section className="w-full flex justify-center items-end h-[680px] md:h-[743px] bg-gray-blue-100 rounded-t-3xl sm:rounded-t-[32px] md:rounded-t-[40px] p-4 pt-[130px] md:pt-[160px] lg:pt-[163px] relative">
        <div className="w-[328px] sm:w-[440px] md:w-[488px] lg:w-[704px]">
          <div className="flex flex-col gap-6 items-start w-full">
            {/* Company Logo and Text */}
            <div className="flex flex-col w-full gap-2 lg:gap-4 items-start">
              <FooterKleoLogo className="h-8 w-auto" />
              <div className="font-roboto font-normal text-base">
                Kleo Network is a user owned data DAO.
              </div>
            </div>

            {/* Contact Number and Email */}
            <div className="flex flex-col w-full gap-4">
              {/* Phone Number Pill */}
              <div className="flex items-center px-3 py-[6px] bg-gray-blue-200 gap-2 leading-[34px] w-max rounded-s-full rounded-e-full">
                <PhoneIcon className="size-[14px]" />
                <div className="font-roboto font-medium text-sm">
                  91 8369683781
                </div>
              </div>

              {/* Email Pill */}
              <div className="flex items-center px-3 py-[6px] bg-gray-blue-200 gap-2 leading-[32px] w-max rounded-s-full rounded-e-full">
                <EmailIcon className="h-18" />
                <div className="font-roboto font-medium text-sm">
                  contact@kleo.network
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-start w-full gap-2 font-roboto font-normal text-sm md:text-base leading-[1.3]">
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
            <div className="flex items-center justify-between gap-6 w-132">
              <LinkedIn className="size-[28px] hover:text-primary-700" />
              <Instagram className="size-[28px] hover:text-primary-700" />
              <FaceBook className="size-[28px] hover:text-primary-700" />
            </div>

            {/* All rights reserved */}
            <div className="flex items-start w-full border-t border-gray-blue-200 pt-2 font-roboto font-normal text-sm leading-[1.7]">
              All rights reserved. www.kleo.network
            </div>
          </div>
        </div>
        {/* Join Discord Card */}
        <div className="max-w-[328px] sm:max-w-[440px] md:max-w-[488px] lg:max-w-[704px] absolute -top-[90px] sm:-top-[70px] md:-top-[105px] w-full text-white bg-primary-600 rounded-lg md:rounded-[32px] flex flex-col py-6 px-4 md:p-8 items-center text-center gap-4">
          {/* Text */}
          <div className="flex flex-col gap-1 lg:gap-4 w-full leading-[1.3]">
            <div className="font-semibold text-2xl md:text-[32px] lg:text-[40px]">
              Still have questions?
            </div>
            <div className="font-roboto font-normal text-[11px] md:text-sm lg:text-base">
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
      </section>
    </div>
  )
}
