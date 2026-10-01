import { Brain, ChevronLeft, ChevronRight, Heart, Music2 } from 'lucide-react'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { musicMemoryRecallPhotoCredit } from '@/assets/e-magazine/music-memory-recall'
import { cn } from '@/lib/utils'

import 'swiper/css'
import 'swiper/css/pagination'

const sectionIcons = [Music2, Brain, Heart]

function SectionOrnament() {
  return (
    <div className="flex items-center gap-2 text-gold/70" aria-hidden>
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/60" />
      <span className="text-xs">♪</span>
      <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  )
}

function FeatureSection({ section, index, className }) {
  const Icon = sectionIcons[index % sectionIcons.length]

  return (
    <section
      className={cn(
        'magazine-feature-section flex h-full min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-surface sm:min-h-[24rem]',
        index === 0 && 'magazine-feature-section--lead',
        className,
      )}
    >
      <figure className="relative flex h-56 w-full shrink-0 items-center justify-center bg-highlight/30 px-4 py-3 sm:h-60 md:h-64">
        <img
          src={section.image}
          alt={section.imageAlt}
          className="max-h-full max-w-full object-contain object-center"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <span className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-full bg-canvas/95 font-serif text-lg font-semibold text-ink shadow-surface ring-2 ring-gold/40">
          {section.number}
        </span>
      </figure>

      <div className="flex min-h-[7.5rem] flex-1 flex-col justify-center p-5 md:p-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/30">
            <Icon className="size-5" aria-hidden />
          </span>
          <SectionOrnament />
        </div>
        <h3 className="font-serif text-lg font-medium leading-snug text-ink md:text-xl">
          {section.title}
        </h3>
        <p className="mt-3 text-sm leading-[1.85] text-ink/90 md:text-base">
          {section.body}
        </p>
        {section.highlight ? (
          <blockquote className="mt-4 border-l-4 border-gold/50 bg-highlight/80 py-2.5 pl-4 pr-2 font-serif text-sm italic leading-relaxed text-earth">
            {section.highlight}
          </blockquote>
        ) : null}
      </div>
    </section>
  )
}

function FeatureSectionsSlider({ sections }) {
  const swiperRef = useRef(null)
  const canLoop = sections.length > 1

  return (
    <div className="emagazine-feature-swiper relative overflow-hidden rounded-2xl ring-1 ring-border/80">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={canLoop}
        speed={650}
        autoplay={
          canLoop
            ? {
                delay: 7000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        pagination={{ clickable: true }}
        onSwiper={(instance) => {
          swiperRef.current = instance
        }}
        className="emagazine-feature-swiper__root !pb-12 [&_.swiper-slide]:!flex [&_.swiper-slide]:!h-auto [&_.swiper-wrapper]:!items-stretch"
      >
        {sections.map((section, index) => (
          <SwiperSlide key={section.number} className="!h-auto !self-stretch">
            <FeatureSection section={section} index={index} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>

      {canLoop ? (
        <>
          <button
            type="button"
            aria-label="Previous section"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-2 top-[32%] z-10 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface/95 text-ink shadow-md ring-1 ring-border transition-colors hover:bg-surface sm:left-3 sm:size-10"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next section"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-2 top-[32%] z-10 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface/95 text-ink shadow-md ring-1 ring-border transition-colors hover:bg-surface sm:right-3 sm:size-10"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </>
      ) : null}
    </div>
  )
}

export function EMagazineFeatureArticle({ article, compactHeader = false }) {
  const sections = article.sections ?? []

  return (
    <article className="mx-auto max-w-3xl">
      {!compactHeader ? (
        <header className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Feature</p>
          <h2 className="mt-3 font-serif text-2xl font-medium leading-snug text-ink md:text-3xl">
            {article.title}
          </h2>
          {article.author ? (
            <p className="mt-2 text-sm font-medium text-earth md:text-base">{article.author}</p>
          ) : null}
          {article.intro ? (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-earth">
              {article.intro}
            </p>
          ) : null}
          <div className="mx-auto mt-5 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </header>
      ) : null}

      {sections.length > 0 ? <FeatureSectionsSlider sections={sections} /> : null}

      {article.id === 'music-memory-recall' && musicMemoryRecallPhotoCredit ? (
        <p className="mt-6 text-center text-xs text-earth">{musicMemoryRecallPhotoCredit}</p>
      ) : null}
    </article>
  )
}
