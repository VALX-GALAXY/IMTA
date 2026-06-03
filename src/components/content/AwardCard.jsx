import { useRef } from 'react'
import { Award, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { cn } from '@/lib/utils'
import { SectionBadge } from '@/components/content/ContentSection'

import 'swiper/css'
import 'swiper/css/pagination'

function FeaturedAwardPhotos({ title, photos }) {
  const swiperRef = useRef(null)

  if (photos.length === 1) {
    return (
      <div className="relative flex w-full justify-center bg-ink px-3 py-4 sm:px-6 sm:py-8">
        <img
          src={photos[0]}
          alt={title}
          className="mx-auto max-h-[min(92vh,960px)] w-full max-w-4xl object-contain object-center"
          loading="eager"
        />
      </div>
    )
  }

  return (
    <div className="award-announcement-swiper relative bg-ink px-3 py-4 sm:px-6 sm:py-8">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={photos.length > 1}
        autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        onSwiper={(instance) => {
          swiperRef.current = instance
        }}
        className="award-announcement-swiper__root !pb-10"
      >
        {photos.map((src, index) => (
          <SwiperSlide key={src}>
            <img
              src={src}
              alt={`${title} — poster ${index + 1}`}
              className="mx-auto max-h-[min(92vh,960px)] w-full max-w-4xl object-contain object-center"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        aria-label="Previous announcement poster"
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-4 top-1/2 z-10 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface/95 text-ink shadow-md ring-1 ring-border transition-colors hover:bg-surface sm:left-6 sm:size-10"
      >
        <ChevronLeft className="size-5" aria-hidden />
      </button>
      <button
        type="button"
        aria-label="Next announcement poster"
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-4 top-1/2 z-10 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface/95 text-ink shadow-md ring-1 ring-border transition-colors hover:bg-surface sm:right-6 sm:size-10"
      >
        <ChevronRight className="size-5" aria-hidden />
      </button>
    </div>
  )
}

export function AwardCard({ award, className }) {
  if (award.featured) {
    const photos = award.images?.length
      ? award.images
      : award.image
        ? [award.image]
        : []

    return (
      <article
        className={cn(
          'overflow-hidden rounded-2xl bg-surface shadow-surface-lg',
          className,
        )}
      >
        <FeaturedAwardPhotos title={award.title} photos={photos} />
        <div className="space-y-2 p-6">
          <SectionBadge>{award.year}</SectionBadge>
          <h3 className="text-xl font-semibold text-ink">{award.title}</h3>
          {award.description ? (
            <p className="text-sm leading-relaxed text-earth">{award.description}</p>
          ) : null}
        </div>
      </article>
    )
  }

  return (
    <article
      className={cn(
        'group overflow-hidden rounded-2xl bg-surface shadow-surface transition-shadow hover:shadow-surface-lg',
        award.image ? 'grid sm:grid-cols-[160px_1fr]' : '',
        className,
      )}
    >
      {award.image ? (
        <div className="relative aspect-square overflow-hidden bg-highlight sm:aspect-auto sm:min-h-[180px]">
          <img
            src={award.image}
            alt={award.name}
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex aspect-square items-center justify-center bg-highlight sm:aspect-auto sm:min-h-[180px]">
          <Award className="size-10 text-gold/60" aria-hidden />
        </div>
      )}

      <div className="flex flex-col justify-center gap-2 p-5">
        <SectionBadge>{award.year}</SectionBadge>
        <p className="text-xs font-medium uppercase tracking-wide text-gold">{award.category}</p>
        <h3 className="text-lg font-semibold text-ink">{award.name}</h3>
        {award.location ? (
          <p className="inline-flex items-center gap-1.5 text-sm text-earth">
            <MapPin className="size-3.5 text-gold" aria-hidden />
            {award.location}
          </p>
        ) : null}
        {award.description ? (
          <p className="text-sm leading-relaxed text-earth">{award.description}</p>
        ) : null}
      </div>
    </article>
  )
}

export function AwardCategoryCard({ category }) {
  return (
    <article className="rounded-2xl border border-border bg-highlight/50 p-5 md:p-6">
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/15">
          <Award className="size-5 text-gold" aria-hidden />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-ink">{category.name}</h3>
          <p className="text-sm leading-relaxed text-earth">{category.eligibility}</p>
          {category.prize ? <p className="text-sm font-medium text-gold">{category.prize}</p> : null}
        </div>
      </div>
    </article>
  )
}
