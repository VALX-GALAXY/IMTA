import { Award, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionBadge } from '@/components/content/ContentSection'

export function AwardCard({ award, className }) {
  if (award.featured) {
    return (
      <article
        className={cn(
          'overflow-hidden rounded-2xl bg-surface shadow-surface-lg',
          className,
        )}
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-highlight">
          <img
            src={award.image}
            alt={award.title}
            className="size-full object-cover object-top"
            loading="lazy"
          />
        </div>
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
          <p className="text-sm font-medium text-gold">{category.prize}</p>
        </div>
      </div>
    </article>
  )
}
