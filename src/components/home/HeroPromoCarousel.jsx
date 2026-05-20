import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { heroPromoSlides } from '@/config/site'
import { getLatestAnnouncement } from '@/data/announcements'
import { cn } from '@/lib/utils'

import 'swiper/css'

function buildCarouselSlides() {
  const latest = getLatestAnnouncement()
  const rest = latest
    ? heroPromoSlides.filter((s) => s.href !== latest.href && s.id !== latest.id)
    : [...heroPromoSlides]

  if (!latest) return { slides: heroPromoSlides, latestId: null }

  return {
    slides: [
      {
        id: latest.id,
        title: latest.title,
        description: latest.description,
        image: latest.image,
        href: latest.href,
      },
      ...rest,
    ],
    latestId: latest.id,
  }
}

export function HeroPromoCarousel({ className }) {
  const swiperRef = useRef(null)
  const { slides, latestId } = useMemo(() => buildCarouselSlides(), [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'w-full max-w-[min(100%,22rem)] overflow-hidden rounded-xl bg-ink/75 p-3 text-canvas backdrop-blur-md md:max-w-sm md:p-4',
        className,
      )}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={slides.length > 1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={(instance) => {
          swiperRef.current = instance
        }}
        className="!overflow-visible"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Link
              to={slide.href}
              className="group flex gap-3 rounded-lg outline-none ring-canvas/0 transition-[box-shadow] focus-visible:ring-2 focus-visible:ring-gold/80"
              aria-label={`Open: ${slide.title}`}
            >
              <div className="size-16 shrink-0 overflow-hidden rounded-lg md:size-[4.5rem]">
                <img
                  src={slide.image}
                  alt=""
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                {latestId && slide.id === latestId ? (
                  <p className="text-xs font-medium uppercase tracking-wide text-gold/90">
                    Latest announcement
                  </p>
                ) : null}
                <p
                  className={cn(
                    'text-sm font-semibold leading-snug',
                    !(latestId && slide.id === latestId) && 'pt-0.5',
                  )}
                >
                  {slide.title}
                </p>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-canvas/80">
                  {slide.description}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-3 flex justify-end gap-1.5">
        <button
          type="button"
          aria-label="Previous slide"
          disabled={slides.length < 2}
          onClick={(e) => {
            e.preventDefault()
            swiperRef.current?.slidePrev()
          }}
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-ink/90 text-canvas shadow-sm ring-1 ring-canvas/15 transition-colors hover:bg-ink hover:ring-canvas/25 disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronLeft className="size-4 shrink-0 stroke-[2]" aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          disabled={slides.length < 2}
          onClick={(e) => {
            e.preventDefault()
            swiperRef.current?.slideNext()
          }}
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-ink/90 text-canvas shadow-sm ring-1 ring-canvas/15 transition-colors hover:bg-ink hover:ring-canvas/25 disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronRight className="size-4 shrink-0 stroke-[2]" aria-hidden />
        </button>
      </div>
    </motion.div>
  )
}
