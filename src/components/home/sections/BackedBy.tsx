const BackedByList = [
  {
    name: 'Polygon',
    link: 'https://polygon.technology'
  },
  {
    name: 'Gitcoin Grants',
    link: 'https://grants.gitcoin.co'
  },
  {
    name: 'Superteam India',
    link: 'https://superteam.fun'
  }
]
export function BackedBy() {
  return (
    <div className="self-stretch py-12 lg:py-20 bg-violet-100 justify-center items-start flex z-10">
      <div className="px-8 flex-col justify-center items-center gap-8 flex">
        <div className="self-stretch text-center text-gray-800 text-3xl font-semibold">
          Backed by
        </div>
        <div className="self-stretch justify-center items-start gap-16 flex flex-row flex-wrap">
          {BackedByList.map(({ name, link }) => (
            <div className="flex flex-row gap-2 items-center">
              <img
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
                src={`https://www.google.com/s2/favicons?domain=${link}&sz=64`}
              />
              <span className="text-gray-800 text-xl lg:text-2xl font-medium">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
