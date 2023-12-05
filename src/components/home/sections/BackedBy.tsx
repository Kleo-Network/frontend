import PolygonLogo from '../../../assets/images/Polygon.png'
import GitcoinLogo from '../../../assets/images/gitcoin.webp'
import SuperteamLogo from '../../../assets/images/superteam.png'

const BackedByList = [
  {
    name: 'Polygon',
    link: 'https://polygon.technology',
    imgSrc: PolygonLogo,
    width: '',
    height: 'h-16 lg:h-24'
  },
  {
    name: 'Gitcoin Grants',
    link: 'https://grants.gitcoin.co',
    imgSrc: GitcoinLogo,
    width: '',
    height: 'h-12 lg:h-20'
  },
  {
    name: 'Superteam India',
    link: 'https://superteam.fun',
    imgSrc: SuperteamLogo,
    width: 'w-20 lg:w-28',
    height: 'h-20 lg:h-28'
  }
]
export function BackedBy() {
  return (
    <div className="self-stretch py-12 lg:py-20 bg-violet-100 justify-center items-start flex z-10">
      <div className="self-stretch px-8 flex-col justify-center items-center gap-8 flex">
        <div className="self-stretch text-center text-primary text-4xl font-semibold">
          Backed by
        </div>
        <div className="self-stretch justify-center items-center gap-12 lg:gap-36 flex flex-row flex-wrap">
          {BackedByList.map(({ name, imgSrc, width, height }) => (
            <div className="flex flex-row gap-2 items-center" key={name}>
              <img
                className={`min-w-20 h-12 lg:h-20 rounded-lg ${width} ${height}`}
                src={imgSrc}
              />
              {/* <span className="text-gray-800 text-xl lg:text-2xl font-medium">
                {name}
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
