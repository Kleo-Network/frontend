export const HowKleoWorksSection = () => {
  return (
    <section className="w-full flex justify-center mb-[100px]">
      <div className="flex mt-24 flex-col items-center max-w-[1592px] w-full gap-8 px-9">
        {/* How Kleo Works Title */}
        <div className="flex flex-col w-full items-center gap-[10px]">
          <h2 className="font-semibold text-[38px]">How Kleo Works?</h2>
          <p className="font-normal text-xs max-w-[495px] text-center">
            Kleo has a three step process to ensure that you are in control of
            your own data and yet get maximum benefits from it.
          </p>
        </div>

        {/* 3 Cards explaining workflow */}
        <div className="flex justify-around gap-[20px] w-full max-w-[1050px] [text-wrap:balance]">
          <div className="w-1/3 flex flex-col p-4 bg-white justify-start rounded-2xl gap-[22px]">
            <div className="w-24 h-24 bg-gray-100 rounded-lg"></div>
            <div className="flex flex-col justify-start gap-[11px]">
              <h4 className="font-semibold text-[22px]">Removing PIIs</h4>
              <p className="font-normal text-xs">
                Kleo removes all the personally identifiable information. This
                includes, names, emails, usernames, addresses, specific
                locations and more.
              </p>
            </div>
          </div>

          <div className="w-1/3 flex flex-col p-4 bg-primary-600 justify-start rounded-2xl gap-[22px] text-balance">
            <div className="w-24 h-24 bg-primary-500 rounded-lg"></div>
            <div className="flex flex-col justify-start gap-[11px]">
              <h4 className="font-semibold text-[22px] text-white">
                You Govern Your Data
              </h4>
              <p className="font-normal text-xs text-white">
                There is snapshot voting process to the respective audiences
                regarding the governance decisions that are taken.
              </p>
            </div>
          </div>

          <div className="w-1/3 flex flex-col p-4 bg-white justify-start rounded-2xl gap-[22px]">
            <div className="w-24 h-24 bg-gray-100 rounded-lg"></div>
            <div className="flex flex-col justify-start gap-[11px]">
              <h4 className="font-semibold text-[22px]">Own</h4>
              <p className="font-normal text-xs">
                Kleo gives you rewards based on the data quality of your
                contribution. We give rewards every 15 days. It is upto the user
                to convert them or not.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
