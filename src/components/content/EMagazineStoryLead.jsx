import { cn } from '@/lib/utils'

export function EMagazineStoryLead({ article, className }) {
  const hasThumb = Boolean(article.image)

  return (
    <header
      className={cn(
        'mx-auto flex max-w-3xl flex-col gap-5 rounded-xl border border-border/80 bg-surface/60 px-5 py-5 sm:flex-row sm:items-center sm:gap-8 sm:px-6 sm:py-6',
        hasThumb ? 'sm:text-left' : 'text-center',
        className,
      )}
    >
      {hasThumb ? (
        <figure className="mx-auto flex shrink-0 items-center justify-center rounded-lg border border-gold/25 bg-highlight px-1 py-1 shadow-sm sm:mx-0">
          <img
            src={article.image}
            alt={article.imageAlt ?? ''}
            className="h-auto max-h-52 w-auto max-w-[10.5rem] object-contain object-center sm:max-h-56 sm:max-w-[11.5rem]"
            loading="lazy"
            decoding="async"
          />
        </figure>
      ) : null}
      <div className={cn('min-w-0 flex-1', !hasThumb && 'mx-auto max-w-xl')}>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">In this edition</p>
        <h2 className="mt-2 font-serif text-xl font-medium leading-snug text-ink md:text-2xl">
          {article.title}
        </h2>
        {article.author ? (
          <p className="mt-1.5 text-sm font-medium text-earth">by {article.author}</p>
        ) : null}
        {article.intro ? (
          <p className="mt-3 text-sm leading-relaxed text-earth md:text-base">{article.intro}</p>
        ) : null}
      </div>
    </header>
  )
}
