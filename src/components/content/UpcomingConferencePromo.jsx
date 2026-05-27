import { motion } from 'framer-motion'
import { CalendarDays, ChevronLeft, ChevronRight, Globe, MapPin, Phone, Ticket } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { ContentSection, SectionBadge } from '@/components/content/ContentSection'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/routes'
import { upcomingConferenceSlides } from '@/data/conferences'
import { cn } from '@/lib/utils'

import 'swiper/css'
import 'swiper/css/pagination'

function ConferencePromoCard({ slide }) {
  return (
    <div className="flex min-h-[320px] w-full flex-col items-center justify-center bg-gradient-to-br from-gold/15 via-highlight to-surface px-6 py-10 text-center md:min-h-[420px] md:px-12">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        Indian Music Therapy Association
      </p>
      <p className="mt-1 text-xs font-semibold text-ink">(IMTA)</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-earth">Presents</p>
      <p className="mt-2 text-sm font-medium text-earth">Save the date</p>
      <h2 className="mt-4 max-w-2xl text-2xl font-bold leading-tight text-ink md:text-4xl">
        {slide.title}
      </h2>
      {slide.tagline ? (
        <p className="mt-3 text-sm font-semibold text-ink md:text-base">{slide.tagline}</p>
      ) : null}
      {slide.exploreLine ? <p className="mt-2 text-sm text-earth">{slide.exploreLine}</p> : null}
      <p className="mt-6 text-xl font-semibold text-gold md:text-2xl">{slide.date}</p>
      <p className="mt-2 text-lg text-earth">{slide.venue}</p>
      <p className="mt-6 rounded-full bg-surface/80 px-4 py-1.5 text-sm font-medium text-ink ring-1 ring-gold/25">
        {slide.format} · {slide.edition}
        {getOrdinal(slide.edition)} Edition
      </p>
      {slide.posterStartsFrom ? (
        <p className="mt-4 text-sm text-earth">Official poster from {slide.posterStartsFrom}</p>
      ) : null}
      {slide.website ? <p className="mt-3 text-sm font-medium text-gold">{slide.website}</p> : null}
    </div>
  )
}

function ConferenceSlideMedia({ slide }) {
  if (slide.mediaType === 'poster') {
    if (slide.promoCard) {
      return <ConferencePromoCard slide={slide} />
    }

    return (
      <div className="flex min-h-[320px] w-full items-center justify-center bg-highlight p-4 md:min-h-[420px] md:p-8">
        <img
          src={slide.image}
          alt={`${slide.title} poster`}
          className="max-h-[min(70vh,520px)] w-full object-contain"
          loading="eager"
          decoding="async"
        />
      </div>
    )
  }

  return (
    <div className="flex min-h-[320px] w-full items-center justify-center bg-ink md:min-h-[420px]">
      <video
        className="max-h-[min(70vh,520px)] w-full object-contain"
        controls
        playsInline
        preload="metadata"
      >
        <source src={slide.video} type="video/mp4" />
      </video>
    </div>
  )
}

function ConferenceSlideDetails({ slide }) {
  return (
    <div className="space-y-3 border-t border-border bg-surface p-5 md:p-6">
      <p className="text-xs font-medium uppercase tracking-wide text-gold">{slide.mediaLabel}</p>
      <div className="flex flex-wrap gap-2">
        <SectionBadge>Upcoming</SectionBadge>
        <SectionBadge>{slide.format}</SectionBadge>
        <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
          {slide.edition}
          {getOrdinal(slide.edition)} Edition
        </span>
      </div>
      <h3 className="text-lg font-semibold text-ink md:text-xl">{slide.title}</h3>
      <div className="space-y-1.5 text-sm text-earth">
        {slide.posterStartsFrom ? (
          <p className="inline-flex items-center gap-2">
            <CalendarDays className="size-4 shrink-0 text-gold" aria-hidden />
            Poster from {slide.posterStartsFrom}
          </p>
        ) : null}
        <p className="inline-flex items-center gap-2">
          <CalendarDays className="size-4 shrink-0 text-gold" aria-hidden />
          Conference: {slide.date}
        </p>
        <p className="inline-flex items-start gap-2">
          <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
          {slide.venue}
        </p>
        {slide.registrationFee ? (
          <p className="inline-flex items-start gap-2">
            <Ticket className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
            {slide.registrationFee}
          </p>
        ) : null}
        {slide.earlyBird ? (
          <p className="inline-flex items-start gap-2">
            <CalendarDays className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
            {slide.earlyBird}
            {slide.earlyBirdExpires ? ` (expires ${slide.earlyBirdExpires})` : ''}
          </p>
        ) : null}
        {slide.website ? (
          <p className="inline-flex items-start gap-2">
            <Globe className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
            {slide.website}
          </p>
        ) : null}
        {slide.contactPhone ? (
          <p className="inline-flex items-start gap-2">
            <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
            {slide.contactName ? `${slide.contactName}: ` : ''}
            {slide.contactPhone}
          </p>
        ) : null}
      </div>

      {slide.highlights?.length ? (
        <ul className="space-y-1.5 border-t border-border pt-4 text-sm text-earth">
          {slide.highlights.map((item) => (
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

function ConferenceSwiperBlock({ canLoop, slides, swiperRef }) {
  return (
    <div className="home-conference-swiper relative overflow-hidden rounded-2xl bg-surface shadow-surface-lg ring-1 ring-gold/15">
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
        className="upcoming-conference-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="!h-auto">
            <ConferenceSlideMedia slide={slide} />
            <ConferenceSlideDetails slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {canLoop ? (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-3 top-[42%] z-10 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface/95 text-ink shadow-md ring-1 ring-border transition-colors hover:bg-surface md:left-4"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-3 top-[42%] z-10 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface/95 text-ink shadow-md ring-1 ring-border transition-colors hover:bg-surface md:right-4"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </>
      ) : null}
    </div>
  )
}

export function UpcomingConferenceSections({
  className,
  showCta = true,
  showTitle = true,
  sectionTitle = 'Upcoming World Music Therapy Conferences',
}) {
  const swiperRef = useRef(null)
  const slides = upcomingConferenceSlides
  const canLoop = slides.length > 1

  const swiper = (
    <ConferenceSwiperBlock canLoop={canLoop} slides={slides} swiperRef={swiperRef} />
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className={cn(className)}
    >
      {showTitle ? <ContentSection title={sectionTitle}>{swiper}</ContentSection> : swiper}

      {showCta ? (
        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline" className="border-gold/40">
            <Link to={ROUTES.conferences}>All World Music Therapy Conference details</Link>
          </Button>
        </div>
      ) : null}
    </motion.div>
  )
}

/** @deprecated Use UpcomingConferenceSections */
export function UpcomingConferencePromo() {
  return <UpcomingConferenceSections showCta={false} />
}

function getOrdinal(n) {
  const suffixes = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]
}
