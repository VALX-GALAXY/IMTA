import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

export function AnimatedSearchIcon({ className }) {
  return (
    <span
      className={cn('relative block size-5 overflow-hidden', className)}
      aria-hidden
    >
      <Search className="search-icon-slide size-5" />
    </span>
  )
}
