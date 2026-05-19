import { Link } from 'react-router-dom'
import { site } from '@/config/site'

export function LoginAuthFooter() {
  return (
    <div className="flex flex-col gap-3 text-xs text-earth sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {site.fullName}. Healing through rhythm.
      </p>
      <nav className="flex gap-5">
        <Link to="/privacy" className="transition-colors hover:text-gold">
          Privacy Policy
        </Link>
        <Link to="/terms" className="transition-colors hover:text-gold">
          Terms of Service
        </Link>
      </nav>
    </div>
  )
}
