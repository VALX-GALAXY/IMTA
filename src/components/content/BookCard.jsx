import { BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BookCard({ book, className }) {
  return (
    <article
      className={cn(
        'group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-surface transition-shadow hover:shadow-surface-lg',
        className,
      )}
    >
      <div className="flex min-h-[280px] items-center justify-center bg-highlight p-4 sm:min-h-[320px]">
        <img
          src={book.image}
          alt={book.title}
          className="max-h-[300px] w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02] sm:max-h-[340px]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 border-t border-border p-5 md:p-6">
        <div className="flex size-10 items-center justify-center rounded-full bg-gold/15">
          <BookOpen className="size-5 text-gold" aria-hidden />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-ink md:text-xl">{book.title}</h3>
          <p className="mt-2 text-sm text-earth">{book.author}</p>
          {book.publisher ? (
            <p className="mt-1 text-sm leading-relaxed text-earth/80">{book.publisher}</p>
          ) : null}
        </div>
        {book.year ? (
          <span className="mt-auto w-fit rounded-full bg-highlight px-3 py-1 text-xs font-medium text-earth">
            {book.year}
          </span>
        ) : null}
      </div>
    </article>
  )
}
