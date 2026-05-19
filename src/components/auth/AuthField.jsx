import { cn } from '@/lib/utils'

export function AuthField({
  id,
  label,
  labelExtra,
  type = 'text',
  className,
  inputClassName,
  ...props
}) {
  return (
    <div className={cn('space-y-1.5', className)}>
      <div className="flex items-center justify-between gap-2">
        <label htmlFor={id} className="text-sm font-medium text-ink">
          {label}
        </label>
        {labelExtra}
      </div>
      <input
        id={id}
        type={type}
        className={cn(
          'w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-earth/60 focus:border-gold focus:ring-2 focus:ring-gold/20',
          inputClassName,
        )}
        {...props}
      />
    </div>
  )
}
