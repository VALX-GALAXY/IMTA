import { BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BookCard({ book, className }) {
  return (
    <article
      className={cn(
        'group overflow-hidden rounded-2xl bg-surface shadow-surface transition-shadow hover:shadow-surface-lg',
        'grid sm:grid-cols-[180px_1fr]',
        className,
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-highlight sm:aspect-auto sm:min-h-[260px]">
        <img
          src={book.image}
          alt={book.title}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-center gap-3 p-5 md:p-6">
        <div className="flex size-10 items-center justify-center rounded-full bg-gold/15">
          <BookOpen className="size-5 text-gold" aria-hidden />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-ink md:text-xl">{book.title}</h3>
          <p className="mt-2 text-sm text-earth">{book.author}</p>
          {book.publisher ? (
            <p className="mt-1 text-sm text-earth/80">{book.publisher}</p>
          ) : null}
        </div>
        <span className="w-fit rounded-full bg-highlight px-3 py-1 text-xs font-medium text-earth">
          {book.year}
        </span>
      </div>
    </article>
  )
}
