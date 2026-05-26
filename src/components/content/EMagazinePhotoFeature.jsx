import { cn } from '@/lib/utils'

/** Shared image frame — equal width/height for every photo in the slider. */
const PHOTO_FRAME_CLASS =
  'flex h-48 w-full shrink-0 items-center justify-center bg-highlight/40 px-3 py-2 sm:h-52'

export function EMagazinePhotoFeature({ photo, className, compact = false }) {
  return (
    <article
      className={cn(
        'flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-surface',
        className,
      )}
    >
      <figure className={PHOTO_FRAME_CLASS}>
        <img
          src={photo.image}
          alt={photo.imageAlt}
          className="max-h-full max-w-full object-contain object-center"
          loading="lazy"
          decoding="async"
        />
      </figure>
      <div
        className={cn(
          'shrink-0 border-t border-border/60',
          compact ? 'px-3.5 py-2.5 sm:px-4 sm:py-3' : 'px-5 py-4 sm:px-6 sm:py-5',
        )}
      >
        <h3 className="font-serif text-sm font-medium leading-snug text-ink sm:text-base md:text-lg">
          {photo.title}
        </h3>
        {photo.caption ? (
          <p
            className={cn(
              'mt-1.5 leading-relaxed text-earth',
              compact ? 'line-clamp-3 text-xs sm:text-sm' : 'mt-2 text-sm',
            )}
          >
            {photo.caption}
          </p>
        ) : null}
      </div>
    </article>
  )
}
