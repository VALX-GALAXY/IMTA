import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/lib/utils'

export function AuthNavLink({ className, onNavigate }) {
  const navigate = useNavigate()
  const { isLoggedIn, logout } = useAuth()

  async function handleLogout() {
    await logout()
    onNavigate?.()
    navigate(ROUTES.home)
  }

  if (isLoggedIn) {
    return (
      <button
        type="button"
        onClick={handleLogout}
        className={cn('cursor-pointer border-0 bg-transparent font-inherit text-inherit', className)}
      >
        Logout
      </button>
    )
  }

  return (
    <Link to={ROUTES.login} className={className} onClick={onNavigate}>
      Login
    </Link>
  )
}
