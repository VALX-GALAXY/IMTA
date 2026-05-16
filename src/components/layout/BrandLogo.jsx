import { Link } from 'react-router-dom'
import { site } from '@/config/site'
import { cn } from '@/lib/utils'

export function BrandLogo({ className, variant = 'hero', onClick }) {
  const isHero = variant === 'hero'

  return (
    <Link
      to="/"
      onClick={onClick}
      className={cn(
        'inline-flex flex-col justify-center rounded-md px-3 py-2 transition-opacity hover:opacity-90',
        isHero ? 'bg-ink text-canvas min-w-[140px] md:min-w-[160px]' : 'bg-ink text-canvas',
        className,
      )}
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] md:text-xs">
        {site.name}
      </span>
      <span className="mt-0.5 text-[9px] leading-tight opacity-90 md:text-[10px]">
        {site.fullName}
      </span>
    </Link>
  )
}
