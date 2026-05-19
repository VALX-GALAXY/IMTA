import { cn } from '@/lib/utils'

export function AuthPrimaryButton({ children, className, type = 'submit', ...props }) {
  return (
    <button
      type={type}
      className={cn(
        'group/auth-primary relative w-full overflow-hidden rounded-full bg-gold py-3.5 text-sm font-semibold text-ink shadow-surface transition-shadow duration-300 hover:shadow-surface-lg active:scale-[0.98]',
        className,
      )}
      {...props}
    >
      <span
        className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/auth-primary:scale-x-100"
        aria-hidden
      />
      <span className="relative z-10 block">{children}</span>
    </button>
  )
}
