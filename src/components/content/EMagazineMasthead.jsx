import { cn } from '@/lib/utils'
import { eMagazineMeta } from '@/data/eMagazine'

function OrnamentDivider({ className }) {
  return (
    <div
      className={cn('flex items-center justify-center gap-3 text-gold/90', className)}
      aria-hidden
    >
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/70 sm:w-16" />
      <svg viewBox="0 0 24 24" className="size-3 fill-current">
        <path d="M12 2l2.2 6.8H21l-5.5 4 2.1 6.8L12 15.6 6.4 19.6l2.1-6.8L3 8.8h6.8L12 2z" />
      </svg>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/70 sm:w-16" />
    </div>
  )
}

function CornerOrnament({ className, mirrorX = false, mirrorY = false }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn(
        'pointer-events-none absolute size-7 text-gold/50 sm:size-8',
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
    </svg>
  )
}

export function EMagazineMasthead({ className }) {
  const meta = eMagazineMeta

  return (
    <header
      className={cn(
        'magazine-cover relative mx-auto max-w-2xl overflow-hidden rounded-2xl shadow-surface-lg',
        className,
      )}
    >
      <div className="magazine-cover__bg absolute inset-0" aria-hidden />
      <div className="magazine-cover__sheen absolute inset-0" aria-hidden />

      <div className="relative border border-gold/25 p-2 sm:p-3">
        <div className="relative border border-gold/40 px-4 py-6 sm:px-6 sm:py-7">
          <CornerOrnament className="left-1.5 top-1.5" />
          <CornerOrnament className="right-1.5 top-1.5" mirrorX />
          <CornerOrnament className="bottom-1.5 left-1.5" mirrorY />
          <CornerOrnament className="bottom-1.5 right-1.5" mirrorX mirrorY />

          <div className="text-center">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gold/90 sm:text-xs">
              {meta.association}
            </p>
            <h1 className="magazine-cover__masthead mt-2 font-serif text-2xl font-medium tracking-wide text-canvas sm:text-3xl md:text-4xl">
              {meta.publication}
            </h1>
            <p className="mt-2 font-serif text-sm italic text-canvas/75">{meta.subtitle}</p>
            <OrnamentDivider className="my-4" />
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="rounded-full border border-gold/50 bg-gold/10 px-3 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs">
                {meta.issue}
              </span>
              <span className="rounded-full border border-canvas/20 bg-canvas/5 px-3 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider text-canvas/80 sm:text-xs">
                {meta.year}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
