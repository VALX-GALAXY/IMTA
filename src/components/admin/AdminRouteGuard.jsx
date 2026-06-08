import { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { useAdminAuth } from '@/hooks/useAdminAuth'

export function AdminRouteGuard() {
  const location = useLocation()
  const { isLoggedIn, isValidating, validateSession } = useAdminAuth()
  const [checked, setChecked] = useState(false)
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function check() {
      if (!isLoggedIn) {
        if (!cancelled) {
          setIsValid(false)
          setChecked(true)
        }
        return
      }

      const valid = await validateSession()
      if (!cancelled) {
        setIsValid(valid)
        setChecked(true)
      }
    }

    check()
    return () => {
      cancelled = true
    }
  }, [isLoggedIn, validateSession])

  if (!checked || isValidating) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-canvas">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent" />
      </div>
    )
  }

  if (!isLoggedIn || !isValid) {
    const next = encodeURIComponent(location.pathname)
    return <Navigate to={`${ROUTES.adminLogin}?next=${next}`} replace />
  }

  return <Outlet />
}
