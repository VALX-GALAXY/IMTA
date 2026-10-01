import { motion } from 'framer-motion'
import { CalendarDays, ChevronLeft, ChevronRight, Mail, MapPin } from 'lucide-react'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { SectionBadge } from '@/components/content/ContentSection'
import { upcomingPgDiplomaSlides } from '@/data/pgDiploma'
import { cn } from '@/lib/utils'

import 'swiper/css'
import 'swiper/css/pagination'

function PgDiplomaSlideMedia({ slide }) {
  if (slide.mediaType === 'video') {
    return (
      <div className="flex min-h-[180px] w-full items-center justify-center bg-ink md:min-h-[220px]">
        <video
          className="max-h-[min(40vh,280px)] w-full object-contain"
          controls
          playsInline
          preload="metadata"
          title={slide.title}
        >
          <source src={slide.video} type="video/mp4" />
        </video>
      </div>
    )
  }

  return (
    <div className="flex min-h-[180px] w-full items-center justify-center bg-highlight p-3 md:min-h-[220px] md:p-4">
      <img
        src={slide.image}
        alt={slide.mediaLabel}
        className="max-h-[min(40vh,280px)] w-full object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

function PgDiplomaSlideDetails({ slide }) {
  return (
    <div className="space-y-2 border-t border-border bg-surface p-3 md:p-4">
      <p className="text-[10px] font-medium uppercase tracking-wide text-gold">{slide.mediaLabel}</p>
      <div className="flex flex-wrap gap-1.5">
        <SectionBadge className="px-2 py-0.5 text-[10px]">Upcoming</SectionBadge>
        <SectionBadge className="px-2 py-0.5 text-[10px]">Distance Learning</SectionBadge>
        <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold text-gold">
          22nd Batch
        </span>
      </div>
      <h3 className="text-sm font-semibold text-ink md:text-base">{slide.title}</h3>
      <p className="text-xs font-medium text-gold">{slide.subtitle}</p>
      <div className="space-y-1 text-xs text-earth">
        <p className="inline-flex items-center gap-1.5">
          <CalendarDays className="size-3.5 shrink-0 text-gold" aria-hidden />
          Commencing {slide.batchStart}
        </p>
        {slide.applyBy ? (
          <p className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5 shrink-0 text-gold" aria-hidden />
            Apply by {slide.applyBy}
          </p>
        ) : null}
        <p className="inline-flex items-start gap-1.5">
          <MapPin className="mt-0.5 size-3.5 shrink-0 text-gold" aria-hidden />
          {slide.location}
        </p>
        {slide.applicationEmail ? (
          <p className="inline-flex items-start gap-1.5">
            <Mail className="mt-0.5 size-3.5 shrink-0 text-gold" aria-hidden />
            {slide.applicationEmail}
          </p>
        ) : null}
      </div>

      {slide.studyMaterials ? (
        <p className="rounded-lg bg-highlight/70 px-2.5 py-2 text-xs text-ink">
          {slide.studyMaterials}
        </p>
      ) : null}

      {slide.eligibility ? <p className="text-xs font-medium text-earth">{slide.eligibility}</p> : null}

      {slide.badges?.length ? (
        <ul className="space-y-1.5 border-t border-border pt-3 text-xs text-earth">
          {slide.badges.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

function PgDiplomaSwiperBlock({ canLoop, slides, swiperRef }) {
  return (
    <div className="relative mx-auto max-w-2xl overflow-hidden rounded-xl bg-surface shadow-surface ring-1 ring-gold/15">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={canLoop}
        autoplay={
          canLoop
            ? { delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true }
            : false
        }
        pagination={{ clickable: true }}
        onSwiper={(instance) => {
          swiperRef.current = instance
        }}
        className="upcoming-pg-diploma-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="!h-auto">
            <PgDiplomaSlideMedia slide={slide} />
            <PgDiplomaSlideDetails slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {canLoop ? (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-2 top-[38%] z-10 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-surface/95 text-ink shadow-md ring-1 ring-border transition-colors hover:bg-surface"
          >
            <ChevronLeft className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-2 top-[38%] z-10 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-surface/95 text-ink shadow-md ring-1 ring-border transition-colors hover:bg-surface"
          >
            <ChevronRight className="size-4" aria-hidden />
          </button>
        </>
      ) : null}
    </div>
  )
}

export function UpcomingPgDiplomaSection({ className }) {
  const swiperRef = useRef(null)
  const slides = upcomingPgDiplomaSlides
  const canLoop = slides.length > 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className={cn(className)}
    >
      <section className="space-y-3">
        <h2 className="text-center text-base font-semibold tracking-tight text-ink md:text-lg">
          Upcoming PG Diploma Programme
        </h2>
        <PgDiplomaSwiperBlock canLoop={canLoop} slides={slides} swiperRef={swiperRef} />
      </section>
    </motion.div>
  )
}
