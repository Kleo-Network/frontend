export const HowKleoWorksSection = () => {
  return (
    <section className="w-full flex justify-center mb-[100px]">
      <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[488px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] flex w-full h-full items-center px-4">
        <div className="flex flex-col gap-6 xl:gap-10 mac:gap-[50px] w-full h-max items-center">
          {/* How Kleo Works Question & Answer */}
          <div className="flex flex-col items-center justify-normal gap-1 xl:gap-[10px] mac:gap-3 md:max-w-[320px] lg:max-w-[428px] xl:max-w-[500px] mac:max-w-[560px] 2xl:max-w-[745px]">
            <div className="font-semibold text-2xl md:text-[32px] lg:text-[40px] xl:text-[42px] mac:text-5xl 2xl:text-[58px]">
              How Kleo Works?
            </div>
            <div className="font-roboto font-normal text-[11px] md:text-sm xl:text-base 2xl:text-lg text-center">
              Kleo has a three step process to ensure that you are in control of
              your own data and yet get maximum benefits from it.
            </div>
          </div>

          {/* 3 Cards explaining workflow */}
          <div className="flex flex-col lg:flex-row justify-start lg:justify-evenly items-center lg:items-stretch gap-4 md:gap-6 xl:gap-[21px] mac:gap-6 2xl:gap-[30px] [text-wrap:balance]">
            {/* Card - 1 */}
            <div className="w-full lg:w-1/3 lg:min-h-full flex flex-col p-4 lg:p-6 bg-white justify-start rounded-lg md:rounded-2xl lg:rounded-3xl mac:rounded-[18px] 2xl:rounded-[20px] gap-4 lg:gap-6">
              {/* Icon */}
              <div className="w-20 h-20 xl:w-[94px] xl:h-[94px] mac:w-[105px] mac:h-[105px] 2xl:w-[140px] 2xl:h-[140px] rounded-[4px] md:rounded-lg mac:rounded-[10px] 2xl:rounded-[14px] bg-gray-100"></div>
              {/* Text */}
              <div className="flex flex-col justify-start items-start gap-2 lg:gap-4 xl:gap-[12px] mac:gap-[14px] 2xl:gap-4">
                <div className="font-semibold text-lg md:text-2xl 2xl:text-[32px]">
                  Removing PIIs
                </div>
                <div className="font-roboto font-normal text-[11px] md:text-sm lg:text-base 2xl:text-lg">
                  Kleo removes all the personally identifiable information. This
                  includes, names, emails, usernames, addresses, specific
                  locations and more.
                </div>
              </div>
            </div>
            {/* Card - 2 */}
            <div className="w-full lg:w-1/3 lg:min-h-full text-white flex flex-col p-4 lg:p-6 bg-primary-600 justify-start rounded-lg md:rounded-2xl lg:rounded-3xl mac:rounded-[18px] 2xl:rounded-[20px] gap-4 lg:gap-6">
              {/* Icon */}
              <div className="w-20 h-20 xl:w-[94px] xl:h-[94px] mac:w-[105px] mac:h-[105px] 2xl:w-[140px] 2xl:h-[140px] rounded-[4px] md:rounded-lg mac:rounded-[10px] 2xl:rounded-[14px] bg-primary-500"></div>
              {/* Text */}
              <div className="flex flex-col justify-start items-start gap-2 lg:gap-4 xl:gap-[12px] mac:gap-[14px] 2xl:gap-4">
                <div className="font-semibold text-lg md:text-2xl 2xl:text-[32px]">
                  You Govern Your Data
                </div>
                <div className="font-roboto font-normal text-[11px] md:text-sm lg:text-base 2xl:text-lg">
                  There is snapshot voting process to the respective audiences
                  regarding the governance decisions that are taken.
                </div>
              </div>
            </div>
            {/* Card - 3 */}
            <div className="w-full lg:w-1/3 lg:min-h-full flex flex-col p-4 lg:p-6 bg-white justify-start rounded-lg md:rounded-2xl lg:rounded-3xl mac:rounded-[18px] 2xl:rounded-[20px] gap-4 lg:gap-6">
              {/* Icon */}
              <div className="w-20 h-20 xl:w-[94px] xl:h-[94px] mac:w-[105px] mac:h-[105px] 2xl:w-[140px] 2xl:h-[140px] rounded-[4px] md:rounded-lg mac:rounded-[10px] 2xl:rounded-[14px] bg-gray-100"></div>
              {/* Text */}
              <div className="flex flex-col justify-start items-start gap-2 lg:gap-4 xl:gap-[12px] mac:gap-[14px] 2xl:gap-4">
                <div className="font-semibold text-lg md:text-2xl 2xl:text-[32px]">
                  Own
                </div>
                <div className="font-roboto font-normal text-[11px] md:text-sm lg:text-base 2xl:text-lg">
                  Kleo gives you rewards based on the data quality of your
                  contribution. We give rewards every 15 days. It is upto the
                  user to convert them or not.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ;<div className="flex mt-24 flex-col items-center w-full gap-8 px-9">
//   {/* How Kleo Works Title */}
//   <div className="flex flex-col w-full items-center gap-[10px]">
//     <h2 className="font-semibold text-[38px]">How Kleo Works?</h2>
//     <p className="font-normal text-xs max-w-[495px] text-center">
//       Kleo has a three step process to ensure that you are in control of your
//       own data and yet get maximum benefits from it.
//     </p>
//   </div>

//   {/* 3 Cards explaining workflow */}
//   <div className="flex justify-around gap-[20px] w-full max-w-[1050px] [text-wrap:balance]">
//     <div className="w-1/3 flex flex-col p-4 bg-white justify-start rounded-2xl gap-[22px]">
//       <div className="w-24 h-24 bg-gray-100 rounded-lg"></div>
//       <div className="flex flex-col justify-start gap-[11px]">
//         <h4 className="font-semibold text-[22px]">Removing PIIs</h4>
//         <p className="font-normal font-roboto text-xs">
//           Kleo removes all the personally identifiable information. This
//           includes, names, emails, usernames, addresses, specific locations and
//           more.
//         </p>
//       </div>
//     </div>

//     <div className="w-1/3 flex flex-col p-4 bg-primary-600 justify-start rounded-2xl gap-[22px] text-balance">
//       <div className="w-24 h-24 bg-primary-500 rounded-lg"></div>
//       <div className="flex flex-col justify-start gap-[11px]">
//         <h4 className="font-semibold text-[22px] text-white">
//           You Govern Your Data
//         </h4>
//         <p className="font-normal font-roboto text-xs text-white">
//           There is snapshot voting process to the respective audiences regarding
//           the governance decisions that are taken.
//         </p>
//       </div>
//     </div>

//     <div className="w-1/3 flex flex-col p-4 bg-white justify-start rounded-2xl gap-[22px]">
//       <div className="w-24 h-24 bg-gray-100 rounded-lg"></div>
//       <div className="flex flex-col justify-start gap-[11px]">
//         <h4 className="font-semibold text-[22px]">Own</h4>
//         <p className="font-normal font-roboto text-xs">
//           Kleo gives you rewards based on the data quality of your contribution.
//           We give rewards every 15 days. It is upto the user to convert them or
//           not.
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
