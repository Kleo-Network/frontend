import { ReactComponent as XIcon } from '../../../assets/images/X.svg'
import { ReactComponent as Linkedin } from '../../../assets/images/Linkedin.svg'
import { ReactComponent as Facebook } from '../../../assets/images/meta.svg'
import { ReactComponent as Github } from '../../../assets/images/github.svg'
import { ReactComponent as KleoIcon } from '../../../assets/images/kleoLogo.svg'

export const Footer = () => {
  return (
    <div className="pt-16 pb-12 bg-violet-900 flex-col justify-start items-center gap-16 flex self-stretch z-10">
      <div className="self-stretch h-[184px] px-8 flex-col justify-center items-center gap-12 flex">
        <div className="self-stretch justify-center items-center gap-8 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-center items-center gap-8 inline-flex">
            <div className="self-stretch h-32 flex-col justify-center items-center gap-8 flex">
              <div className="justify-start items-center gap-[13.52px] inline-flex">
                <KleoIcon className="w-[48.17px] h-12 relative bg-violet-300" />
                <div className="text-gray-50 text-3xl font-bold leading-[30.39px]">
                  KLEO
                </div>
              </div>
              <div className="self-stretch text-center text-purple-200 text-base font-normal leading-normal">
                CHATURBOTS AI PRIVATE LIMITED <br />
                Phone: 918369683781, Email: vaibhavblogger@gmail.com <br />
                B-71, Alpine Heights, Opp Sakar-3, Income Tax Char Rasta,
                Navrangpura AHMEDABAD Ahmedabad GJ 380009 IN
              </div>
            </div>
            {/* <div className="self-stretch justify-center items-center gap-8 inline-flex">
              <div className="justify-start items-center gap-2 flex">
                <div className="justify-center items-center gap-2 flex">
                  <div className="text-purple-200 text-base font-semibold leading-normal">
                    Overview
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-2 flex">
                <div className="justify-center items-center gap-2 flex">
                  <div className="text-purple-200 text-base font-semibold leading-normal">
                    Features
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-2 flex">
                <div className="justify-center items-center gap-2 flex">
                  <div className="text-purple-200 text-base font-semibold leading-normal">
                    Careers
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-2 flex">
                <div className="justify-center items-center gap-2 flex">
                  <div className="text-purple-200 text-base font-semibold leading-normal">
                    Help
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-2 flex">
                <div className="justify-center items-center gap-2 flex">
                  <div className="text-purple-200 text-base font-semibold leading-normal">
                    Privacy
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="self-stretch h-14 px-8 flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch pt-8 border-t border-violet-500 justify-between items-center flex">
          <div className="text-purple-300 text-base font-normal leading-normal">
            © 2023 KLEO. All rights reserved.
          </div>
          <div className="justify-start items-center gap-6 flex">
            <a href="https://x.com/kleo_network" target="_blank">
              <XIcon className="w-6 h-6 relative" />
            </a>
            <a
              href="https://www.linkedin.com/company/kleonetwork"
              target="_blank"
            >
              <Linkedin className="w-6 h-6 justify-center items-center flex" />
            </a>
            <a href="https://github.com/Kleo-Network" target="_blank">
              <Github className="w-6 h-6 relative" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
