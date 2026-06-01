import { motion } from 'framer-motion'
import { useLayoutEffect, useRef } from 'react'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { MusicNotesFloat, SoundWaves } from '@/components/home/HomeMusicDecor'
import { HeroPromoCarousel } from '@/components/home/HeroPromoCarousel'
import { PillButton } from '@/components/ui/pill-button'
import { site } from '@/config/site'
import { ROUTES } from '@/constants/routes'

const HERO_VIDEO_SRC = '/hero.mp4'

function useHeroVideo() {
  const videoRef = useRef(null)

  useLayoutEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.defaultMuted = true
    video.volume = 0
    video.playsInline = true
    video.setAttribute('muted', '')
    video.setAttribute('playsinline', '')

    const playVideo = async () => {
      if (video.paused) {
        try {
          await video.play()
        } catch {
          /* Autoplay may be blocked until user interacts */
        }
      }
    }

    void playVideo()
    const tId = window.setTimeout(playVideo, 100)

    const onVisible = () => {
      if (document.visibilityState === 'visible') void playVideo()
      else video.pause()
    }
    document.addEventListener('visibilitychange', onVisible)

    video.addEventListener('canplay', playVideo)

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) void playVideo()
        else video.pause()
      },
      { threshold: 0.1 },
    )
    observer.observe(video)

    return () => {
      window.clearTimeout(tId)
      video.removeEventListener('canplay', playVideo)
      document.removeEventListener('visibilitychange', onVisible)
      observer.disconnect()
    }
  }, [])

  return videoRef
}

const headlineLines = [
  { text: 'HEALING THROUGH', accent: false },
  { text: 'MUSIC', accent: true },
  { text: 'BEGINS WITH YOU.', accent: false },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function HeroSection() {
  const videoRef = useHeroVideo()

  return (
    <section className="home-hero bg-canvas px-3 pb-3 pt-3 md:px-4 md:pb-4 md:pt-4">
      <div className="relative min-h-[min(92vh,860px)] overflow-hidden rounded-[2rem] ring-1 ring-gold/20 md:rounded-[2.5rem]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <video
            ref={videoRef}
            className="hero-bg-video size-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            tabIndex={-1}
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
        </div>

        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent"
          aria-hidden
        />
        <MusicNotesFloat />

        <div className="absolute inset-x-0 bottom-0 text-gold/25">
          <SoundWaves className="h-24 md:h-32" />
        </div>

        <SiteHeader variant="hero" />

        <div className="relative z-10 flex min-h-[min(92vh,860px)] flex-col justify-end px-5 pb-28 pt-28 md:px-10 md:pb-12 lg:pb-16">
          <div className="max-w-3xl">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-canvas/20 bg-canvas/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-canvas/90 backdrop-blur-sm"
            >
              <span className="text-gold" aria-hidden>
                ♪
              </span>
              Indian Music Therapy Association
            </motion.p>

            <h1 className="font-sans text-[clamp(2.25rem,6vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-canvas">
              {headlineLines.map((line, i) => (
                <motion.span
                  key={line.text}
                  custom={i + 1}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className={line.accent ? 'home-hero-accent block font-serif normal-case' : 'block'}
                >
                  {line.text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-5 max-w-xl font-serif text-base italic leading-relaxed text-canvas/90 md:mt-6 md:text-lg"
            >
              {site.tagline} - a sanctuary of sound for therapists, artists, and healers across India.
            </motion.p>

            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-7 flex flex-wrap gap-3 md:mt-8"
            >
              <PillButton to={ROUTES.introduction}>Explore IMTA</PillButton>
              <PillButton
                to={ROUTES.eMagazine}
                showIcon={false}
                className="border border-canvas/30 bg-canvas/10 text-canvas backdrop-blur-sm hover:bg-canvas/20"
              >
                E-Magazine
              </PillButton>
            </motion.div>
          </div>

          <div className="absolute bottom-5 right-5 z-20 hidden md:block">
            <HeroPromoCarousel />
          </div>
        </div>

        <div className="relative z-20 px-5 pb-6 md:hidden">
          <HeroPromoCarousel />
        </div>
      </div>
    </section>
  )
}
