import { Download } from 'lucide-react'
import { cn } from '@/lib/utils'

export function EMagazineJagarSection({ jagar, className }) {
  if (!jagar) return null

  return (
    <section
      className={cn(
        'overflow-hidden rounded-2xl border border-border bg-surface shadow-surface',
        className,
      )}
      aria-labelledby="jagar-music-therapy"
    >
      <div className="flex flex-col gap-0 lg:flex-row">
        <figure className="flex w-full items-center justify-center bg-highlight/40 p-4 sm:p-6 lg:w-[46%]">
          <img
            src={jagar.image}
            alt={jagar.imageAlt}
            className="h-auto w-full max-w-2xl object-contain"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className="flex flex-1 flex-col justify-center p-5 sm:p-6 lg:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Special feature
          </p>
          <h2
            id="jagar-music-therapy"
            className="mt-2 font-serif text-2xl font-medium leading-snug text-ink md:text-3xl"
          >
            {jagar.title}
          </h2>
          {jagar.subtitle ? (
            <p className="mt-2 text-sm font-medium text-earth md:text-base">{jagar.subtitle}</p>
          ) : null}

          {jagar.paragraphs?.length ? (
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/90 md:text-base">
              {jagar.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          ) : null}

          {jagar.pdf ? (
            <a
              href={jagar.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 bg-ink px-5 py-2.5 text-sm font-medium text-canvas transition-colors hover:border-gold hover:bg-ink/90"
            >
              <Download className="size-4 text-gold" aria-hidden />
              Download PDF
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}

