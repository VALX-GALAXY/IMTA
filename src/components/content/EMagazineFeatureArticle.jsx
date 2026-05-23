import { Brain, Heart, Music2 } from 'lucide-react'
import { musicMemoryRecallPhotoCredit } from '@/assets/e-magazine/music-memory-recall'
import { cn } from '@/lib/utils'

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

function FeatureSection({ section, index }) {
  const Icon = sectionIcons[index % sectionIcons.length]
  const imageRight = index % 2 === 1

  return (
    <section
      className={cn(
        'magazine-feature-section overflow-hidden rounded-2xl border border-border bg-surface shadow-surface',
        index === 0 && 'magazine-feature-section--lead',
      )}
    >
      <div
        className={cn(
          'grid gap-0 lg:grid-cols-2',
          imageRight && 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1',
        )}
      >
        <div className="relative min-h-[220px] overflow-hidden sm:min-h-[260px] lg:min-h-full">
          <img
            src={section.image}
            alt={section.imageAlt}
            className="size-full object-cover object-center"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/5 to-transparent lg:bg-gradient-to-r lg:from-ink/30 lg:via-transparent lg:to-transparent"
            aria-hidden
          />
          <span className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-full bg-canvas/95 font-serif text-lg font-semibold text-ink shadow-surface ring-2 ring-gold/40">
            {section.number}
          </span>
        </div>

        <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/30">
              <Icon className="size-5" aria-hidden />
            </span>
            <SectionOrnament />
          </div>
          <h3 className="font-serif text-xl font-medium leading-snug text-ink md:text-2xl">
            {section.title}
          </h3>
          <p className="mt-4 text-base leading-[1.9] text-ink/90 md:text-[1.05rem]">
            {section.body}
          </p>
          {section.highlight ? (
            <blockquote className="mt-5 border-l-4 border-gold/50 bg-highlight/80 py-3 pl-4 pr-2 font-serif text-sm italic leading-relaxed text-earth md:text-base">
              {section.highlight}
            </blockquote>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export function EMagazineFeatureArticle({ article }) {
  return (
    <article className="mx-auto max-w-4xl">
      <header className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Feature</p>
        <h2 className="mt-3 font-serif text-2xl font-medium leading-snug text-ink md:text-3xl">
          {article.title}
        </h2>
        {article.author ? (
          <p className="mt-2 text-sm font-medium text-earth md:text-base">{article.author}</p>
        ) : null}
        {article.intro ? (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-earth md:text-lg">
            {article.intro}
          </p>
        ) : null}
        <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </header>

      <div className="space-y-8 md:space-y-10">
        {article.sections.map((section, index) => (
          <FeatureSection key={section.number} section={section} index={index} />
        ))}
      </div>

      {article.id === 'music-memory-recall' ? (
        <p className="mt-8 text-center text-xs text-earth">{musicMemoryRecallPhotoCredit}</p>
      ) : null}
    </article>
  )
}
