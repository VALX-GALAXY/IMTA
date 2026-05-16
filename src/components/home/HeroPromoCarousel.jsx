import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { heroPromoSlides } from '@/config/site'
import { cn } from '@/lib/utils'

import 'swiper/css'

export function HeroPromoCarousel({ className }) {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

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
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
        className="!overflow-visible"
      >
        {heroPromoSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Link to={slide.href} className="group flex gap-3">
              <div className="size-16 shrink-0 overflow-hidden rounded-lg md:size-[4.5rem]">
                <img
                  src={slide.image}
                  alt=""
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-sm font-semibold leading-snug">{slide.title}</p>
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
          ref={prevRef}
          type="button"
          aria-label="Previous slide"
          className="inline-flex size-8 items-center justify-center rounded-md bg-canvas/15 text-canvas transition-colors hover:bg-canvas/25"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          ref={nextRef}
          type="button"
          aria-label="Next slide"
          className="inline-flex size-8 items-center justify-center rounded-md bg-canvas/15 text-canvas transition-colors hover:bg-canvas/25"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </motion.div>
  )
}
