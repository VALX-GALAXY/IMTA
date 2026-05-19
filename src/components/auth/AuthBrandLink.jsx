import { Link } from 'react-router-dom'
import { site } from '@/config/site'
import { cn } from '@/lib/utils'

export function AuthBrandLink({ className, variant = 'indigo' }) {
  return (
    <Link
      to="/"
      className={cn(
        'text-2xl font-bold tracking-tight transition-opacity hover:opacity-80',
        variant === 'indigo' ? 'text-imta-indigo' : 'text-ink',
        className,
      )}
    >
      {site.name}
    </Link>
  )
}
