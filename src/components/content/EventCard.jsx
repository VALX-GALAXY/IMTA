import { CalendarDays, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionBadge } from '@/components/content/ContentSection'

export function EventCard({ event, className }) {
  return (
    <article
      className={cn(
        'group overflow-hidden rounded-2xl bg-surface shadow-surface transition-shadow hover:shadow-surface-lg',
        event.image ? 'grid md:grid-cols-[220px_1fr]' : '',
        className,
      )}
    >
      {event.image ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-highlight md:aspect-auto md:min-h-[180px]">
          <img
            src={event.image}
            alt=""
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="flex flex-col justify-center gap-3 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <SectionBadge>{event.type}</SectionBadge>
          {event.partner ? (
            <span className="text-xs text-earth">with {event.partner}</span>
          ) : null}
        </div>

        <div>
          <h3 className="text-base font-semibold text-ink md:text-lg">{event.title}</h3>
          {event.subtitle ? (
            <p className="mt-1 text-sm text-gold">{event.subtitle}</p>
          ) : null}
        </div>

        {event.description ? (
          <p className="text-sm leading-relaxed text-earth">{event.description}</p>
        ) : null}

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-earth">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5 text-gold" aria-hidden />
            {event.date}
          </span>
          {event.location ? (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-gold" aria-hidden />
              {event.location}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export function ForthcomingEventCard({ event }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-surface shadow-surface-lg">
      <div className="relative aspect-[16/9] overflow-hidden bg-highlight">
        <img
          src={event.image}
          alt=""
          className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-surface md:p-6">
          <SectionBadge className="mb-3 bg-surface/20 text-surface">{event.type}</SectionBadge>
          <h3 className="text-xl font-semibold md:text-2xl">{event.title}</h3>
          {event.subtitle ? (
            <p className="mt-1 text-sm text-surface/80">{event.subtitle}</p>
          ) : null}
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-surface/90">
            <CalendarDays className="size-4 text-gold" aria-hidden />
            {event.date}
          </p>
        </div>
      </div>
    </article>
  )
}
