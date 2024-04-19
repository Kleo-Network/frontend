import { Feature1 } from './sections/Feature1'
import { Feature2 } from './sections/Feature2'
import { Footer } from './../home/sections/Footer'
import { HeroSection } from './sections/HeroSection'
// import StackedCards from './sections/StackedCards'

export function Degen() {
  return (
    <div className="flex flex-col items-start justify-center self-stretch font-inter">
      {/* <StackedCards /> */}
      <Feature1 />
      <Feature2 />
     
      <Footer />
    </div>
  )
}
