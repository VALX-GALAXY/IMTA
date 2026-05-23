import { useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function PhotoGallery({ photos, className }) {
  const [active, setActive] = useState(null)

  if (!photos?.length) {
    return (
      <p className="rounded-2xl border border-dashed border-border bg-highlight/60 px-6 py-10 text-center text-sm text-earth">
        Photos will be added here soon.
      </p>
    )
  }

  return (
    <>
      <ul
        className={cn(
          'grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4',
          className,
        )}
      >
        {photos.map((photo, index) => (
          <li key={photo.id ?? `${photo.caption}-${index}`}>
            <button
              type="button"
              onClick={() => setActive(photo)}
              className="group relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-border bg-highlight shadow-sm transition-all hover:border-gold/40 hover:shadow-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
            >
              <img
                src={photo.image}
                alt={photo.caption}
                className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent p-3 pt-8 text-left">
                <p className="line-clamp-2 text-xs font-medium leading-snug text-canvas sm:text-sm">
                  {photo.caption}
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-canvas/10 text-canvas transition-colors hover:bg-canvas/20"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
          <figure
            className="max-h-[min(90vh,820px)] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.image}
              alt={active.caption}
              className="max-h-[min(82vh,760px)] w-auto max-w-full rounded-lg object-contain shadow-surface-lg"
            />
            <figcaption className="mt-3 text-center text-sm text-canvas/90">{active.caption}</figcaption>
          </figure>
        </div>
      ) : null}
    </>
  )
}
