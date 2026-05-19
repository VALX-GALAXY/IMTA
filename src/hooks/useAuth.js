import { useCallback, useEffect, useState } from 'react'
import { toast } from 'sonner'
import { logout as logoutRequest } from '@/api/auth/logout'

function readIsLoggedIn() {
  return Boolean(localStorage.getItem('imta_access_token'))
}

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(readIsLoggedIn)

  useEffect(() => {
    const sync = () => setIsLoggedIn(readIsLoggedIn())
    window.addEventListener('imta-auth-change', sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener('imta-auth-change', sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  const logout = useCallback(async () => {
    await logoutRequest()
    setIsLoggedIn(false)
    toast.success('Signed out successfully')
  }, [])

  return { isLoggedIn, logout }
}
