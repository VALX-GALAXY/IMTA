import { HomeAnnouncementStrip } from '@/components/home/HomeAnnouncementStrip'
import { HeroSection } from '@/components/home/HeroSection'
import { IntroSection } from '@/components/home/IntroSection'
import { QuickLinksSection } from '@/components/home/QuickLinksSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeAnnouncementStrip />
      <IntroSection />
      <QuickLinksSection />
    </>
  )
}
