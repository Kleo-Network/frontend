import { AboutFooterSection } from './sections/AboutFooterSection'
import { AboutHeroSection } from './sections/AboutHeroSection'
import { AboutTabsSection } from './sections/AboutTabsSection'

export function About() {
  return (
    <main className="h-full bg-[#F5F5FA] w-screen">
      {/* Section just bellow Navbar with same width as Navbar in all screen sizes. */}
      <AboutHeroSection />

      {/* About Tabs Section */}
      <AboutTabsSection />

      {/* About Footer Section */}
      <AboutFooterSection />
    </main>
  )
}
