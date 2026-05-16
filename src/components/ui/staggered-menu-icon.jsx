import { cn } from '@/lib/utils'

const lineBase =
  'block h-[2px] rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]'

export function StaggeredMenuIcon({ className }) {
  return (
    <span
      className={cn(
        'flex h-[18px] w-[22px] flex-col justify-between',
        className,
      )}
      aria-hidden
    >
      {/* Top — short, right-aligned → slides left on hover */}
      <span
        className={cn(
          lineBase,
          'ml-auto w-3 group-hover/menu:-translate-x-[7px]',
        )}
      />
      {/* Middle — full width */}
      <span
        className={cn(
          lineBase,
          'w-full origin-center group-hover/menu:scale-x-105',
        )}
      />
      {/* Bottom — short, left-aligned → slides right on hover */}
      <span
        className={cn(lineBase, 'w-3 group-hover/menu:translate-x-[7px]')}
      />
    </span>
  )
}
