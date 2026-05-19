import { Link } from 'react-router-dom'
import { site } from '@/config/site'
import { publicAsset } from '@/lib/publicAsset'
import { cn } from '@/lib/utils'

const LOGO_SRC = publicAsset('Logo.png')

export function BrandLogo({ className, variant = 'hero', onClick }) {
  const isHero = variant === 'hero'

  return (
    <Link
      to="/"
      onClick={onClick}
      className={cn(
        'inline-flex shrink-0 items-center transition-opacity hover:opacity-90',
        className,
      )}
    >
      <img
        src={LOGO_SRC}
        alt={site.fullName}
        className={cn(
          'h-auto w-auto max-w-[180px] object-contain md:max-w-[220px]',
          isHero ? 'h-11 md:h-14' : 'h-9 md:h-11',
        )}
      />
      <span className="sr-only">{site.fullName}</span>
    </Link>
  )
}
