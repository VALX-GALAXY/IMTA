import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Image as ImageIcon, VideoOff } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { publicAsset } from '@/lib/publicAsset'
import { setSiteVideoPlaying } from '@/lib/siteVideoPlayback'
import { upcomingBeginnerCourse } from '@/data/events'

const UPCOMING_EVENT_VIDEO_ID = 'upcoming-event'

const UPCOMING_EVENT_MEDIA = [
  {
    type: 'image',
    label: 'Event photo 1',
    src: publicAsset('events/upcoming-event-photo-1.jpg'),
    alt: 'IMTA upcoming event, 25 to 29 November 2026',
  },
  {
    type: 'image',
    label: 'Event photo 2',
    src: publicAsset('events/upcoming-event-photo-2.jpg'),
    alt: 'A second view of the IMTA upcoming event, 25 to 29 November 2026',
  },
  {
    type: 'video',
    label: 'Event video',
    src: publicAsset('events/upcoming-event-video.mp4'),
  },
]

function MediaPlaceholder({ kind, title }) {
  const Icon = kind === 'video' ? VideoOff : ImageIcon

  return (
    <div className="flex size-full flex-col items-center justify-center gap-3 bg-highlight px-5 text-center text-earth">
      <span className="flex size-12 items-center justify-center rounded-full border border-gold/40 bg-surface text-ink">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <span className="text-sm font-medium text-ink">{title}</span>
      <span className="text-xs">Indian Music Therapy Association</span>
    </div>
  )
}

export function UpcomingEvent() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [unavailablePhotos, setUnavailablePhotos] = useState({})
  const [videoUnavailable, setVideoUnavailable] = useState(false)
  const reduceMotion = useReducedMotion()
  const activeMedia = UPCOMING_EVENT_MEDIA[activeIndex]
  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
        }

  useEffect(() => () => setSiteVideoPlaying(UPCOMING_EVENT_VIDEO_ID, false), [])
  const changeSlide = (direction) => {
    setActiveIndex((current) => (current + direction + UPCOMING_EVENT_MEDIA.length) % UPCOMING_EVENT_MEDIA.length)
  }

  useEffect(() => {
    if (activeMedia.type === 'video' && !videoUnavailable) return undefined

    const timer = window.setTimeout(() => changeSlide(1), 10000)
    return () => window.clearTimeout(timer)
  }, [activeIndex, activeMedia.type, videoUnavailable])

  return (
    <section className="bg-canvas py-14 md:py-20" aria-labelledby="upcoming-event-title">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between md:mb-10"
          {...reveal()}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              25–29 November 2026
            </p>
            <h2
              id="upcoming-event-title"
              className="mt-2 font-serif text-2xl font-medium text-ink md:text-3xl"
            >
              Upcoming Event
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-earth md:text-base">
              Join the IMTA community for its upcoming programme, bringing music therapy
              practitioners and the wider community together.
            </p>
          </div>
          <Link
            to={ROUTES.events}
            className="inline-flex min-h-11 w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-surface transition-colors hover:bg-ink/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            View Event Details
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </motion.div>

        <motion.div className="min-w-0" {...reveal(0.05)}>
          <div className="group relative aspect-video overflow-hidden rounded-xl border border-border bg-highlight shadow-surface-lg">
            <motion.div
              key={activeIndex}
              className="absolute inset-0"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
            >
              {activeMedia.type === 'image' ? (
                unavailablePhotos[activeIndex] ? (
                  <MediaPlaceholder kind="photo" title="Event photo coming soon" />
                ) : (
                  <img
                    src={activeMedia.src}
                    alt={activeMedia.alt}
                    loading="lazy"
                    decoding="async"
                    onError={() =>
                      setUnavailablePhotos((current) => ({ ...current, [activeIndex]: true }))
                    }
                    className="size-full object-contain transition-opacity duration-300 group-hover:opacity-95 motion-reduce:transition-none"
                  />
                )
              ) : videoUnavailable ? (
                <MediaPlaceholder kind="video" title="Event video coming soon" />
              ) : (
                <video
                  className="size-full bg-ink object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label="Upcoming IMTA event video"
                  onPlay={() => setSiteVideoPlaying(UPCOMING_EVENT_VIDEO_ID, true)}
                  onPause={() => setSiteVideoPlaying(UPCOMING_EVENT_VIDEO_ID, false)}
                  onEnded={() => {
                    setSiteVideoPlaying(UPCOMING_EVENT_VIDEO_ID, false)
                    setActiveIndex(0)
                  }}
                  onError={() => {
                    setSiteVideoPlaying(UPCOMING_EVENT_VIDEO_ID, false)
                    setVideoUnavailable(true)
                  }}
                >
                  <source src={activeMedia.src} type="video/mp4" />
                  Your browser does not support the video player.
                </video>
              )}
            </motion.div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-medium text-earth" aria-live="off">
              {activeMedia.label} <span className="text-earth/70">· {activeIndex + 1} of 3</span>
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => changeSlide(-1)}
                aria-label="Previous event media"
                className="flex size-10 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:bg-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <ArrowLeft aria-hidden="true" className="size-4" />
              </button>
              <div className="flex items-center gap-1.5" role="group" aria-label="Choose event media">
                {UPCOMING_EVENT_MEDIA.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${item.label.toLowerCase()}`}
                    aria-pressed={activeIndex === index}
                    className="flex size-10 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    <span
                      className={`h-2 rounded-full transition-all ${activeIndex === index ? 'w-6 bg-gold' : 'w-2 bg-earth/35 hover:bg-earth/60'}`}
                    />
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => changeSlide(1)}
                aria-label="Next event media"
                className="flex size-10 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:bg-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <ArrowRight aria-hidden="true" className="size-4" />
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                IMTA Beginner Programme
              </p>
              <h3
                id="upcoming-course-title"
                className="mt-2 font-serif text-xl font-medium text-ink md:text-2xl"
              >
                {upcomingBeginnerCourse.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-earth md:text-base">
                {upcomingBeginnerCourse.description}
              </p>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
              {[
                ['Date', upcomingBeginnerCourse.date],
                ['Time', upcomingBeginnerCourse.time],
                ['Mode', upcomingBeginnerCourse.mode],
                ['Duration', upcomingBeginnerCourse.duration],
                ['Course Direction', upcomingBeginnerCourse.courseDirection],
                ['Certification', upcomingBeginnerCourse.certification],
              ].map(([label, value]) => (
                <div key={label} className="min-w-0 border-l-2 border-gold/50 pl-3">
                  <dt className="text-xs font-medium text-earth">{label}</dt>
                  <dd className="mt-1 break-words text-sm font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  )
}