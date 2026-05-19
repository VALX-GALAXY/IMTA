import { CalendarDays, MapPin, Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionBadge } from '@/components/content/ContentSection'

export function ConferenceCard({ conference, reversed = false }) {
  return (
    <article
      className={cn(
        'group overflow-hidden rounded-2xl bg-surface shadow-surface transition-shadow hover:shadow-surface-lg',
        'grid lg:grid-cols-2',
      )}
    >
      <div
        className={cn(
          'relative aspect-[16/10] overflow-hidden bg-highlight lg:aspect-auto lg:min-h-[320px]',
          reversed && 'lg:order-2',
        )}
      >
        <img
          src={conference.image}
          alt=""
          className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-surface/95 px-3 py-1 text-xs font-semibold text-ink shadow-sm">
            {conference.edition}
            {getOrdinal(conference.edition)} Edition
          </span>
        </div>
      </div>

      <div className={cn('flex flex-col justify-center gap-4 p-6 md:p-8', reversed && 'lg:order-1')}>
        <div className="flex flex-wrap gap-2">
          <SectionBadge>{conference.format}</SectionBadge>
          {conference.souvenir ? <SectionBadge>Souvenir Available</SectionBadge> : null}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-ink md:text-2xl">{conference.title}</h3>
          {conference.theme ? (
            <p className="mt-2 text-sm font-medium text-gold">{conference.theme}</p>
          ) : null}
        </div>

        <div className="space-y-2 text-sm text-earth">
          <p className="inline-flex items-center gap-2">
            <CalendarDays className="size-4 shrink-0 text-gold" aria-hidden />
            {conference.date}
          </p>
          <p className="inline-flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
            {conference.venue}
          </p>
          {conference.partner ? (
            <p className="inline-flex items-start gap-2">
              <Users className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              {conference.partner}
            </p>
          ) : null}
        </div>

        {conference.highlights?.length ? (
          <ul className="space-y-1.5 border-t border-border pt-4 text-sm text-earth">
            {conference.highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}

function getOrdinal(n) {
  const suffixes = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]
}
