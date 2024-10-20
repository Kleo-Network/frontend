import { useEffect, useRef, useState } from 'react'

type BackgroundGrid = {
  columns: number
  rows: number
}

export const HeroSection = () => {
  const bgGridContainerRef = useRef<HTMLDivElement | null>(null),
    [bgGrid, setBgGrid] = useState<BackgroundGrid>({
      columns: 0,
      rows: 0
    }),
    cursorRef = useRef<HTMLDivElement | null>(null)

  function calculateGridSize(): void {
    if (bgGridContainerRef.current) {
      const columns = Math.ceil(bgGridContainerRef.current.clientWidth / 64),
        rows = Math.ceil(bgGridContainerRef.current.clientHeight / 64)

      setBgGrid({ columns, rows })
    }
  }

  function moveCursorBackDrop(event: MouseEvent): void {
    if (cursorRef.current && window.innerWidth >= 1280) {
      const x = event.clientX,
        y = event.clientY

      cursorRef.current.style.left = x + 'px'
      cursorRef.current.style.top = y + 'px'
    }
  }

  useEffect(() => {
    window.addEventListener('resize', calculateGridSize)
    calculateGridSize()

    if (bgGridContainerRef.current) {
      bgGridContainerRef.current.addEventListener(
        'mousemove',
        moveCursorBackDrop
      )
    }

    return () => {
      window.removeEventListener('resize', calculateGridSize)

      if (bgGridContainerRef.current) {
        bgGridContainerRef.current.removeEventListener(
          'mousemove',
          moveCursorBackDrop
        )
      }
    }
  }, [])

  return (
    <section className="h-[520px] sm:h-[460px] md:h-[520px] lg:h-[756px] xl:h-[700px] mac:h-[736px] 2xl:h-[900px] pt-[124px] sm:pt-[80px] md:pt-[114px] lg:pt-[164px] xl:pt-[113px] mac:pt-[126px] 2xl:pt-[160px] flex justify-center relative rounded-bl-[50px] rounded-br-[50px] overflow-hidden leading-tight pointer-events-none">
      {/* Background Grid */}
      <div
        className="bg-grid-container group absolute top-0 left-0 w-full h-[520px] overflow-hidden pointer-events-auto bg-[#101828] sm:h-[460px] md:h-[520px] lg:h-[756px] xl:h-[700px] mac:h-[736px] 2xl:h-[900px]"
        ref={bgGridContainerRef}
      >
        <div
          className="cursor bg-[#7F56D9] w-[196px] h-[196px] absolute rounded-full opacity-50 blur-[20px] invisible -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-linear group-hover:visible"
          ref={cursorRef}
        ></div>
        <div
          className="sparkle top-32 right-32 hidden xl:inline-block"
          style={{ animationDelay: '3s' }}
        ></div>
        <div className="sparkle top-32 left-32 hidden xl:inline-block"></div>
        {Array.from({ length: bgGrid.rows }, (_, i) => i + 1).map((row) => (
          <div className="bg-grid-row w-full flex" key={row}>
            {Array.from({ length: bgGrid.columns }, (_, i) => i + 1).map(
              (column) => (
                <div
                  className="bg-grid-box-item relative h-16 w-16 z-[2] bg-[#111323] mr-[1.5px] mb-[1.5px] transition-colors duration-[800ms] ease-linear xl:hover:bg-[#1D2449] xl:hover:duration-100"
                  key={column}
                ></div>
              )
            )}
          </div>
        ))}
      </div>
      <div className="z-[45] h-max max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] flex w-full items-start">
        {/* Hero Text */}
        <div className="flex h-full w-full flex-col justify-start md:items-center xl:items-start xl:ml-16 mac:ml-0 items-start px-4">
          {/* Earn Your + Stack in the AI */}
          <div className="flex flex-col text-white font-inter font-medium text-[28px] sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[78px] mac:text-[88px] 2xl:text-[116px]">
            <span className="flex items-center justify-start">EARN YOUR</span>
            <span className="ml-10 sm:ml-20 md:ml-24 lg:ml-36 mac:ml-48 2xl:ml-64">
              STAKE IN THE AI
            </span>
          </div>
          {/* Revolution + Create Account */}
          <div className="flex flex-col sm:flex-row gap-4 sm:ml-7 md:ml-10 lg:-ml-10 xl:ml-[4rem] 2xl:ml-[9rem] lg:gap-6 xl:gap-[52px] mac:gap-[70px] 2xl:gap-[95px]">
            <span className="text-white font-inter font-medium text-[28px] sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[78px] mac:text-[88px] 2xl:text-[116px]">
              REVOLUTION
            </span>
            <div className="flex flex-col text-sm sm:text-[11px] lg:text-sm xl:text-xl mac:text-[23px] text-white max-w-[240px] sm:max-w-[136px] lg:max-w-[220px] xl:max-w-[394px] mac:max-w-[443px] 2xl:max-w-[590px] gap-4 md:gap-[22px] lg:gap-4 md:mt-[6px] lg:mt-2">
              <div className="xl:leading-[47.6px] font-nokora font-light">
                Earn, Govern and Own your data.<br></br>
                Earn upto $400/mo with your data.
              </div>
              <a
                href="https://app.kleo.network"
                className="py-2 px-7 pointer-events-auto sm:px-[14px] sm:py-2 lg:px-4 lg:py-[10px] xl:py-[18px] xl:px-8 mac:py-[20px] mac:px-9 text-white font-medium w-max font-inter text-sm xl:text-xl mac:text-[23px] 2xl:text-[30px] rounded-[4px] xl:rounded-[6px] bg-primary-500 hover:bg-primary-700"
              >
                Create Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
