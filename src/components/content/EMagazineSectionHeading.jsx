import { cn } from '@/lib/utils'

export function EMagazineSectionHeading({ id, title, description, className }) {
  return (
    <header className={cn('text-center', className)}>
      <h2
        id={id}
        className="font-serif text-xl font-medium text-ink md:text-2xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-earth">{description}</p>
      ) : null}
      <div className="mx-auto mt-4 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </header>
  )
}
