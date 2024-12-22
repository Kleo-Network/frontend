import VaibhavProfileImage from '../../../../assets/images/about/tabs/team/vaibhav.svg'
import PratikProfileImage from '../../../../assets/images/about/tabs/team/pratik.svg'
import RuchiProfileImage from '../../../../assets/images/about/tabs/team/ruchi.svg'
import PrinceProfileImage from '../../../../assets/images/about/tabs/team/prince.svg'
import JainamProfileImage from '../../../../assets/images/about/tabs/team/jainam.svg'

import LinkedinIconPath from '../../../../assets/images/about/tabs/team/linkedinIcon.svg'
import PortfolioIconPath from '../../../../assets/images/about/tabs/team/portfolioIcon.svg'
import { profile } from 'console'

// TODO: Update Bellow Social Links and add any social by adding an icon and the config if you want
const ABOUT_TEAM_TAB_DATA = {
  teamMembers: [
    {
      name: 'Vaibhav Maheshwari',
      profilePath: VaibhavProfileImage,
      role: 'FOUNDER',
      bio: "NIT Surat alumnus with a Master's in Mathematics. 4 years of full-stack dev experience, and active in web3 space for last 3 years. Full time on Kleo Network for last 2 years.",
      socials: [
        {
          iconPath: LinkedinIconPath,
          link: 'https://www.linkedin.com/in/vaibhavgeek/'
        },
        {
          iconPath: PortfolioIconPath,
          link: 'https://vaibhavgeek.blogspot.com'
        }
      ]
    },
    {
      name: 'Pratik Ostwal',
      profilePath: PratikProfileImage,
      role: 'GROWTH MARKETING',
      bio: '5 years of experience in web2 marketing. Lead growth at Digitala, Axis Bank (Freecharge) and Trianly. Full time on Kleo for last 3 months.',
      socials: [
        {
          iconPath: LinkedinIconPath,
          link: 'https://www.linkedin.com/in/pratikostwal/'
        },
        {
          iconPath: PortfolioIconPath,
          link: 'https://pratikostwal.wixsite.com/productsuccess'
        }
      ]
    },
    {
      name: 'Ruchi Tripathi',
      profilePath: RuchiProfileImage,
      role: 'UX DESIGNER',
      bio: 'Product Manager and competency in UX and UI interfaces. 2+ years of Design Experience working with startups. Part Time on Kleo for last 2 months.',
      socials: [
        {
          iconPath: LinkedinIconPath,
          link: 'https://www.linkedin.com/in/ruchi-tripathi-525820158/'
        },
        {
          iconPath: PortfolioIconPath,
          link: 'https://www.behance.net/ruchii'
        }
      ]
    },
    {
      name: 'Prince Dalsaniya',
      profilePath: PrinceProfileImage,
      role: 'TECH LEAD',
      bio: 'Ahmedabad University Alumni, 3+ years Web2 full stack Dev Part time on Kleo for last 2 months.',
      socials: [
        {
          iconPath: LinkedinIconPath,
          link: 'https://www.linkedin.com/in/prince-dalsaniya-256b031a1/'
        },
        {
          iconPath: PortfolioIconPath,
          link: 'https://princedalsaniya.vercel.app/'
        }
      ]
    },
    {
      name: 'Jainam Shah',
      profilePath: JainamProfileImage,
      role: 'FRONTEND DEVELOPER',
      bio: 'Recent Ahmedabad University graduate with 1 year of experience as a full stack developer, passionate about full stack development and UI/UX design. Part time on Kleo for last 2 months.',
      socials: [
        {
          iconPath: LinkedinIconPath,
          link: 'https://www.linkedin.com/in/jainam-shah-61250020b/'
        }
      ]
    }
  ]
}

export const TeamTab = () => {
  return (
    <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] w-full px-6">
      <div className="flex flex-wrap gap-8 justify-evenly">
        {ABOUT_TEAM_TAB_DATA.teamMembers.map((member, index) => (
          <div
            className="flex flex-col justify-start items-center max-w-[440px] bg-white p-8 rounded-2xl mt-20"
            key={index}
          >
            <div className="relative -top-[35%] md:-top-1/3 h-20">
              <img
                src={member.profilePath}
                alt={member.name}
                className="h-44 w-44"
              />
            </div>
            <div className="flex flex-col justify-between items-center gap-4 h-full w-full text-center">
              <div className="flex flex-col justify-start items-center gap-4 flex-1">
                <h2 className="font-medium text-2xl text-primary-700">
                  {member.role}
                </h2>
                <h1 className="font-medium text-3xl">{member.name}</h1>
                <div className="text-lg font-normal">{member.bio}</div>
              </div>
              <div className="flex gap-4">
                {member.socials.map((social) => (
                  <a href={social.link} target="_blank">
                    <img
                      src={social.iconPath}
                      className="opacity-80 hover:opacity-100 hover:scale-110 transition-transform"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
