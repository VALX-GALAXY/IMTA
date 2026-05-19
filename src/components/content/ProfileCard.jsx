import { MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { EmptyAvatar } from '@/components/content/ContentSection'

export function ProfileCard({
  name,
  role,
  title,
  location,
  membershipId,
  image,
  featured = false,
  className,
}) {
  return (
    <article
      className={cn(
        'group overflow-hidden rounded-2xl bg-surface shadow-surface transition-shadow duration-300 hover:shadow-surface-lg',
        featured && 'md:col-span-2 md:grid md:grid-cols-[240px_1fr] md:gap-0',
        className,
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden bg-highlight',
          featured ? 'aspect-[4/5] md:aspect-auto md:min-h-full' : 'aspect-[4/5]',
        )}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <EmptyAvatar name={name} />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className={cn('flex flex-col justify-center p-5 md:p-6', featured && 'md:py-8')}>
        {membershipId ? (
          <span className="mb-2 w-fit rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-medium text-ink">
            {membershipId}
          </span>
        ) : null}

        <h3 className={cn('font-semibold text-ink', featured ? 'text-xl md:text-2xl' : 'text-lg')}>
          {name}
        </h3>

        {(role || title) && (
          <p className="mt-1 text-sm font-medium text-gold">{role || title}</p>
        )}

        {role && title ? (
          <p className="mt-1 text-sm text-earth">{title}</p>
        ) : null}

        {location ? (
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-earth">
            <MapPin className="size-3.5 shrink-0 text-gold" aria-hidden />
            {location}
          </p>
        ) : null}
      </div>
    </article>
  )
}
