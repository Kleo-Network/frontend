import { Footer } from '../../components/_old_home/sections/Footer'
import { Feature1 } from './sections/Feature1'
import { Feature2 } from './sections/Feature2'
import { HeroSection } from './sections/HeroSection'
// import StackedCards from './sections/StackedCards'

export function About() {
  return (
    <div className="flex flex-col items-start justify-center self-stretch font-inter z-40">
      {/* <StackedCards /> */}
      <Feature1 />
      <Feature2 />

      <Footer />
    </div>
  )
}
