import { motion } from 'framer-motion'
import { useLayoutEffect, useRef } from 'react'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { HeroPromoCarousel } from '@/components/home/HeroPromoCarousel'
import { PillButton } from '@/components/ui/pill-button'
import { site } from '@/config/site'
import { ROUTES } from '@/constants/routes'

/** Served from public/ — faststart MP4 for mobile autoplay */
const HERO_VIDEO_SRC = '/hero.mp4'

function HeroBackgroundVideo() {
  const videoRef = useRef(null)

  useLayoutEffect(() => {
    const video = videoRef.current
    if (!video) return

    const prepare = () => {
      video.muted = true
      video.defaultMuted = true
      video.volume = 0
      video.playsInline = true
      video.controls = false
      video.setAttribute('muted', '')
      video.setAttribute('playsinline', '')
      video.setAttribute('webkit-playsinline', '')
      video.removeAttribute('controls')
    }

    const play = async () => {
      prepare()
      if (!video.paused) return
      try {
        await video.play()
      } catch {
        /* retry after buffer */
      }
    }

    prepare()
    void play()

    const onReady = () => void play()
    video.addEventListener('loadedmetadata', onReady)
    video.addEventListener('loadeddata', onReady)
    video.addEventListener('canplay', onReady)
    video.addEventListener('canplaythrough', onReady)

    const rafId = requestAnimationFrame(() => void play())
    const tId = window.setTimeout(() => void play(), 100)

    const onVisible = () => {
      if (document.visibilityState === 'visible') void play()
    }
    document.addEventListener('visibilitychange', onVisible)

    const onPageShow = (e) => {
      if (e.persisted) void play()
    }
    window.addEventListener('pageshow', onPageShow)

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) void play()
      },
      { threshold: 0.1 },
    )
    observer.observe(video)

    return () => {
      cancelAnimationFrame(rafId)
      window.clearTimeout(tId)
      video.removeEventListener('loadedmetadata', onReady)
      video.removeEventListener('loadeddata', onReady)
      video.removeEventListener('canplay', onReady)
      video.removeEventListener('canplaythrough', onReady)
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('pageshow', onPageShow)
      observer.disconnect()
    }
  }, [])

  return (
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
        controlsList="nodownload noplaybackrate nofullscreen"
        tabIndex={-1}
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
    </div>
  )
}

const headlineLines = ['HEALING THROUGH', 'MUSIC BEGINS', 'WITH YOU.']

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function HeroSection() {
  return (
    <section className="bg-canvas px-3 pb-3 pt-3 md:px-4 md:pb-4 md:pt-4">
      <div className="relative min-h-[min(92vh,860px)] overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
        <HeroBackgroundVideo />

        {/* Dark overlay for legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/30"
          aria-hidden
        />
        <div className="absolute inset-0 bg-ink/20" aria-hidden />

        <SiteHeader variant="hero" />

        {/* Hero copy — left aligned like Amrita reference */}
        <div className="relative z-10 flex min-h-[min(92vh,860px)] flex-col justify-end px-5 pb-28 pt-28 md:px-10 md:pb-12 lg:pb-16">
          <div className="max-w-3xl">
            <h1 className="font-sans text-[clamp(2.25rem,6vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-canvas">
              {headlineLines.map((line, i) => (
                <motion.span
                  key={line}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-5 max-w-xl text-sm leading-relaxed text-canvas/90 md:mt-6 md:text-base"
            >
              {site.tagline} Explore membership, national awards, conferences, and
              resources for music therapy professionals across India.
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-7 md:mt-8"
            >
              <PillButton to={ROUTES.introduction}>Explore IMTA</PillButton>
            </motion.div>
          </div>

          {/* Promo card — bottom right */}
          <div className="absolute bottom-5 right-5 z-20 hidden md:block">
            <HeroPromoCarousel />
          </div>
        </div>

        {/* Mobile promo card */}
        <div className="relative z-20 px-5 pb-6 md:hidden">
          <HeroPromoCarousel />
        </div>
      </div>
    </section>
  )
}
