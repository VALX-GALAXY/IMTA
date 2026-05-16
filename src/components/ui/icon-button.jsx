import { cn } from '@/lib/utils'

export function IconButton({ className, children, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-surface text-ink shadow-surface transition-transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
