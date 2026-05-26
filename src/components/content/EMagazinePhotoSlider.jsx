import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { EMagazinePhotoFeature } from '@/components/content/EMagazinePhotoFeature'
import { eMagazinePhotos } from '@/data/eMagazine'
import { cn } from '@/lib/utils'

import 'swiper/css'
import 'swiper/css/pagination'

export function EMagazinePhotoSlider({ className }) {
  const swiperRef = useRef(null)
  const canLoop = eMagazinePhotos.length > 2

  return (
    <div
      className={cn(
        'emagazine-photo-swiper relative overflow-hidden rounded-2xl ring-1 ring-border/80',
        className,
      )}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1.08}
        centeredSlides={false}
        loop={canLoop}
        autoplay={
          canLoop
            ? { delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }
            : false
        }
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1.35, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 2, spaceBetween: 28 },
        }}
        onSwiper={(instance) => {
          swiperRef.current = instance
        }}
        className="emagazine-photo-swiper__root !pb-10"
      >
        {eMagazinePhotos.map((photo) => (
          <SwiperSlide key={photo.id} className="!h-auto">
            <EMagazinePhotoFeature photo={photo} compact className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>

      {eMagazinePhotos.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-2 top-[38%] z-10 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface/95 text-ink shadow-md ring-1 ring-border transition-colors hover:bg-surface sm:left-3 sm:size-10"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-2 top-[38%] z-10 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface/95 text-ink shadow-md ring-1 ring-border transition-colors hover:bg-surface sm:right-3 sm:size-10"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </>
      ) : null}
    </div>
  )
}
