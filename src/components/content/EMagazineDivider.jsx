import { cn } from '@/lib/utils'

export function EMagazineDivider({ className }) {
  return (
    <div
      className={cn('mx-auto flex max-w-md items-center gap-4', className)}
      aria-hidden
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
      <span className="font-serif text-sm text-gold">♪</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
    </div>
  )
}
