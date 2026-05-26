import { Download, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

export function EMagazinePdfDownload({ item, className }) {
  return (
    <article
      className={cn(
        'flex flex-col gap-4 rounded-xl border border-border bg-surface p-4 shadow-surface sm:flex-row sm:items-center sm:justify-between sm:p-5',
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 gap-3">
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold"
          aria-hidden
        >
          <FileText className="size-5" />
        </div>
        <div className="min-w-0">
          <h2 className="font-serif text-base font-medium leading-snug text-ink md:text-lg">
            {item.title}
          </h2>
          {item.author ? (
            <p className="mt-1 text-sm font-medium text-earth">by {item.author}</p>
          ) : null}
          {item.description ? (
            <p className="mt-1.5 text-xs leading-relaxed text-earth sm:text-sm">{item.description}</p>
          ) : null}
        </div>
      </div>
      <a
        href={item.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full border border-gold/50 bg-ink px-4 py-2 text-sm font-medium text-canvas transition-colors hover:border-gold hover:bg-ink/90 sm:self-center"
      >
        <Download className="size-4 text-gold" aria-hidden />
        Download PDF
      </a>
    </article>
  )
}
