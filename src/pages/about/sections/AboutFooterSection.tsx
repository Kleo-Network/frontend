import KleoLogoWithName from '../../../assets/images/footer/kleoLogoWithName.svg'
import PhoneIcon from '../../../assets/images/footer/phoneIcon.svg'
import EmailIcon from '../../../assets/images/footer/emailIcon.svg'
import LinkedinIcon from '../../../assets/images/footer/linkedinIcon.svg'
import InstagramIcon from '../../../assets/images/footer/instagramIcon.svg'
import FacebookIcon from '../../../assets/images/footer/facebookIcon.svg'
import { useLocation } from 'react-router-dom'

const ABOUT_FOOTER_DATA = {
  kleoLogoWithNamePath: KleoLogoWithName,
  kleoIntroText: 'Kleo Network is a user owned data DAO.',
  contactChips: [
    {
      iconPath: PhoneIcon,
      text: '+91 8369683781'
    },
    {
      iconPath: EmailIcon,
      text: 'contact@kleo.network'
    }
  ],
  // TODO: @vaibhav Update bellow social links.
  socialLinks: [
    {
      iconPath: LinkedinIcon,
      link: 'https://www.linkedin.com/company/kleonetwork/'
    },
    {
      iconPath: InstagramIcon,
      link: 'https://www.linkedin.com/company/kleonetwork/'
    },
    {
      iconPath: FacebookIcon,
      link: 'https://www.linkedin.com/company/kleonetwork/'
    }
  ],
  footNoteText: 'All rights reserved. www.kleo.network',
  navigationLinks: {
    home: '/',
    about: '/about',
    documentation: 'https://docs.kleo.network/',
    github: 'https://https://github.com/Kleo-Network/',
    // TODO: @vaibhav Update bellow pitchDeck link.
    pitchDeck: '/'
  }
}

export const AboutFooterSection = () => {
  return (
    <div className="bg-grayblue-100 md:rounded-tl-[30px] md:rounded-tr-[30px] xl:rounded-tl-[50px] xl:rounded-tr-[50px] pt-20">
      <div className="w-screen h-fit flex justify-center">
        <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] w-full">
          <div className="flex flex-col justify-start items-center gap-14">
            {/* Contact Information */}
            <div className="flex flex-col gap-4 justify-start items-center">
              <img
                src={ABOUT_FOOTER_DATA.kleoLogoWithNamePath}
                alt="KLEO Logo"
                className="h-16"
              />
              <div className="font-roboto font-light text-2xl">
                {ABOUT_FOOTER_DATA.kleoIntroText}
              </div>
              <div className="flex justify-center items-center flex-wrap gap-6">
                {ABOUT_FOOTER_DATA.contactChips.map((chip, index) => (
                  <ContactChip
                    key={index}
                    iconPath={chip.iconPath}
                    text={chip.text}
                  />
                ))}
              </div>
            </div>
            {/* Bottom Navigation + FootNote */}
            <div className="flex flex-col gap-5 w-full pb-5 px-6">
              <FooterNavigation />
              <div className="border border-[#D5D9EB]"></div>
              <FootNote />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ContactChipProps {
  iconPath: string
  text: string
}

const ContactChip = ({ iconPath, text }: ContactChipProps) => {
  return (
    <div className="flex justify-center items-center px-6 py-4 gap-4 bg-grayblue-200 rounded-full">
      <img src={iconPath} alt="Phone" className="h-4 w-4" />
      <div className="font-roboto font-normal text-lg">{text}</div>
    </div>
  )
}

const FooterNavigation = () => {
  // Get current path from useLocation hook
  const location = useLocation()
  const { pathname } = location

  return (
    <div className="flex justify-between items-center font-roboto font-normal text-lg">
      <a
        href="/"
        className={
          pathname === '/' ? 'font-semibold underline underline-offset-8' : ''
        }
      >
        Home
      </a>
      <a
        href="/about"
        className={
          pathname === '/about'
            ? 'font-semibold underline underline-offset-8'
            : ''
        }
      >
        About
      </a>
      <a href="https://docs.kleo.network/" target="_blank">
        Documentation
      </a>
      <a href="https://https://github.com/Kleo-Network/" target="_blank">
        Github
      </a>
      <a href="/">Pitch Deck</a>
    </div>
  )
}

const FootNote = () => {
  return (
    <div className="flex justify-between">
      <p className="font-roboto font-light text-lg">
        {ABOUT_FOOTER_DATA.footNoteText}
      </p>
      <div className="flex gap-6 justify-end items-center">
        {ABOUT_FOOTER_DATA.socialLinks.map((link, index) => (
          <SocialLink key={index} iconPath={link.iconPath} link={link.link} />
        ))}
      </div>
    </div>
  )
}

interface SocialLinkProps {
  iconPath: string
  link: string
}

const SocialLink = ({ iconPath, link }: SocialLinkProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={iconPath} alt="Social Link" className="h-6 w-6" />
    </a>
  )
}
