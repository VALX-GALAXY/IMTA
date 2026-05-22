import { UpcomingConferenceSections } from '@/components/content/UpcomingConferencePromo'
import { HomeAnnouncementStrip } from '@/components/home/HomeAnnouncementStrip'
import { HomeManifesto } from '@/components/home/HomeManifesto'
import { GradientOrbs, SectionDivider, SoundWaves } from '@/components/home/HomeMusicDecor'
import { HeroSection } from '@/components/home/HeroSection'
import { IntroSection } from '@/components/home/IntroSection'
import { QuickLinksSection } from '@/components/home/QuickLinksSection'

export function HomePage() {
  return (
    <div className="home-page overflow-x-hidden">
      <HeroSection />
      <HomeManifesto />
      <HomeAnnouncementStrip />

      <section className="home-conference-section relative overflow-hidden bg-gradient-to-b from-canvas via-highlight/50 to-canvas py-14 md:py-20">
        <GradientOrbs className="opacity-25" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Save the date
            </p>
            <h2 className="mt-2 font-serif text-2xl font-medium text-ink md:text-3xl">
              World Music Therapy Conferences
            </h2>
          </div>
          <UpcomingConferenceSections showCta showTitle={false} />
          <SectionDivider className="mx-auto mt-12 max-w-lg" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 text-gold/15">
          <SoundWaves className="h-16" />
        </div>
      </section>

      <IntroSection />
      <QuickLinksSection />
    </div>
  )
}
