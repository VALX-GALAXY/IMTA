import { Link } from 'react-router-dom'
import { site } from '@/config/site'
import { publicAsset } from '@/lib/publicAsset'
import { cn } from '@/lib/utils'

const LOGO_SRC = publicAsset('Logo.png')

export function AuthBrandLink({ className, variant = 'indigo' }) {
  return (
    <Link
      to="/"
      className={cn(
        'inline-flex items-center transition-opacity hover:opacity-80',
        className,
      )}
    >
      <img
        src={LOGO_SRC}
        alt={site.fullName}
        className="h-10 w-auto max-w-[200px] object-contain md:h-12"
      />
      <span className="sr-only">{site.fullName}</span>
    </Link>
  )
}
