import { cn } from '@/lib/utils'

export function ContentSection({ title, description, children, className }) {
  return (
    <section className={cn('space-y-6', className)}>
      {(title || description) && (
        <div className="space-y-2">
          {title ? (
            <h2 className="font-sans text-xl font-semibold tracking-tight text-ink md:text-2xl">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="max-w-2xl text-sm leading-relaxed text-earth md:text-base">
              {description}
            </p>
          ) : null}
        </div>
      )}
      {children}
    </section>
  )
}

export function SectionBadge({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-highlight px-3 py-1 text-xs font-medium uppercase tracking-wider text-earth',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function EmptyAvatar({ name }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  return (
    <div className="flex size-full items-center justify-center bg-gradient-to-br from-highlight to-gold/20">
      <span className="text-lg font-semibold text-earth">{initials}</span>
    </div>
  )
}
