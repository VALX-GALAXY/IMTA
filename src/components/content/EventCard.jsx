import { CalendarDays, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionBadge } from '@/components/content/ContentSection'

export function EventCard({ event, className }) {
  const photos = event.images?.length
    ? event.images
    : event.image
      ? [event.image]
      : []

  return (
    <article
      className={cn(
        'group overflow-hidden rounded-2xl bg-surface shadow-surface transition-shadow hover:shadow-surface-lg',
        photos.length ? 'grid md:grid-cols-[220px_1fr]' : '',
        className,
      )}
    >
      {photos.length ? (
        <div
          className={cn(
            'relative overflow-hidden bg-highlight',
            photos.length === 1
              ? 'aspect-[16/10] md:aspect-auto md:min-h-[180px]'
              : 'grid grid-rows-3 gap-0.5 md:min-h-[180px]',
          )}
        >
          {photos.map((src, index) => (
            <img
              key={src}
              src={src}
              alt=""
              className={cn(
                'object-cover transition-transform duration-500 group-hover:scale-[1.03]',
                photos.length === 1 ? 'size-full' : 'aspect-[4/3] size-full min-h-0',
              )}
              loading="lazy"
            />
          ))}
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

        {event.links?.length ? (
          <ul className="flex flex-col gap-1.5 text-sm">
            {event.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gold underline decoration-gold/40 underline-offset-2 transition-colors hover:text-ink hover:decoration-ink/30"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
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
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-surface-lg transition-shadow hover:shadow-surface-lg">
      <div className="flex min-h-[280px] items-center justify-center bg-highlight p-4 sm:min-h-[360px]">
        <img
          src={event.image}
          alt={event.title}
          className="max-h-[min(420px,55vh)] w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex flex-col gap-3 border-t border-border p-5 md:p-6">
        <SectionBadge>{event.type}</SectionBadge>
        <div>
          <h3 className="text-xl font-semibold text-ink md:text-2xl">{event.title}</h3>
          {event.subtitle ? (
            <p className="mt-1 text-sm text-gold">{event.subtitle}</p>
          ) : null}
        </div>
        <p className="inline-flex items-center gap-1.5 text-sm text-earth">
          <CalendarDays className="size-4 text-gold" aria-hidden />
          {event.date}
        </p>
      </div>
    </article>
  )
}
