import { Download } from 'lucide-react'
import { cn } from '@/lib/utils'
import { eMagazineMeta } from '@/data/eMagazine'

function OrnamentDivider({ className }) {
  return (
    <div
      className={cn('flex items-center justify-center gap-3 text-gold/90', className)}
      aria-hidden
    >
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/70 sm:w-20" />
      <svg viewBox="0 0 24 24" className="size-3 fill-current sm:size-3.5">
        <path d="M12 2l2.2 6.8H21l-5.5 4 2.1 6.8L12 15.6 6.4 19.6l2.1-6.8L3 8.8h6.8L12 2z" />
      </svg>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/70 sm:w-20" />
    </div>
  )
}

function CornerOrnament({ className, mirrorX = false, mirrorY = false }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn(
        'pointer-events-none absolute size-8 text-gold/50 sm:size-9',
        mirrorX && '-scale-x-100',
        mirrorY && '-scale-y-100',
        className,
      )}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M4 4h8v2H6v6H4V4zm32 0h8v8h-2V6h-6V4zM4 44v-8h2v6h6v2H4zm36 0h-8v-2h6v-6h2v8z"
        opacity="0.35"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        d="M8 8c8-2 14 4 16 12M8 40c6 6 14 8 20 4"
      />
    </svg>
  )
}

export function EMagazineCover({ article, className }) {
  const meta = eMagazineMeta

  return (
    <div
      className={cn(
        'magazine-cover relative mx-auto max-w-3xl overflow-hidden rounded-2xl shadow-surface-lg',
        className,
      )}
    >
      <div className="magazine-cover__bg absolute inset-0" aria-hidden />
      <div className="magazine-cover__sheen absolute inset-0" aria-hidden />

      <div className="relative border border-gold/25 p-2.5 sm:p-3 md:p-4">
        <div className="relative border border-gold/40 px-3 py-6 sm:px-5 sm:py-7 md:px-6 md:py-8">
          <CornerOrnament className="left-1.5 top-1.5 sm:left-2 sm:top-2" />
          <CornerOrnament className="right-1.5 top-1.5 sm:right-2 sm:top-2" mirrorX />
          <CornerOrnament className="bottom-1.5 left-1.5 sm:bottom-2 sm:left-2" mirrorY />
          <CornerOrnament
            className="bottom-1.5 right-1.5 sm:bottom-2 sm:right-2"
            mirrorX
            mirrorY
          />

          <header className="text-center">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gold/90 sm:text-xs">
              {meta.association}
            </p>
            <h2 className="magazine-cover__masthead mt-2 font-serif text-3xl font-medium tracking-wide text-canvas sm:text-4xl md:text-[2.75rem]">
              {meta.publication}
            </h2>
            <p className="mt-2 font-serif text-sm italic text-canvas/75 sm:text-base">
              {meta.subtitle}
            </p>
            <OrnamentDivider className="my-4 sm:my-5" />
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="rounded-full border border-gold/50 bg-gold/10 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs">
                {meta.issue}
              </span>
              <span className="rounded-full border border-canvas/20 bg-canvas/5 px-4 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-canvas/80 sm:text-xs">
                {meta.year}
              </span>
            </div>
          </header>

          <figure className="magazine-cover__frame relative mx-auto mt-6 max-w-xs sm:mt-7 sm:max-w-sm">
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-gold/60 via-gold/25 to-gold/50 opacity-80" />
            <div className="relative overflow-hidden rounded-md border-2 border-gold/60 bg-ink/40 p-1.5 sm:p-2">
              <img
                src={article.image}
                alt={article.imageAlt}
                className="mx-auto w-full object-contain object-center"
                loading="eager"
              />
            </div>
            <figcaption className="sr-only">{article.imageAlt}</figcaption>
          </figure>

          <div className="mt-6 text-center sm:mt-7">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold/80 sm:text-xs">
              Featured story
            </p>
            <h3 className="magazine-cover__title mx-auto mt-3 max-w-xl font-serif text-xl font-medium leading-snug text-canvas sm:text-2xl md:text-[1.75rem]">
              {article.title}
            </h3>
            <p className="mt-4 font-serif text-base text-gold sm:text-lg">by {article.author}</p>
            <OrnamentDivider className="mt-5 sm:mt-6" />
            {article.pdf ? (
              <a
                href={article.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-5 py-2.5 text-sm font-medium text-canvas transition-colors hover:border-gold hover:bg-gold/20"
              >
                <Download className="size-4 text-gold" aria-hidden />
                Download PDF
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
