import { useCallback, useEffect, useState } from 'react'
import {
  clearAdminSession,
  fetchAdminProfile,
  readAdminToken,
  readAdminUser,
} from '@/lib/adminApi'

function readIsAdminLoggedIn() {
  return Boolean(readAdminToken())
}

export function useAdminAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(readIsAdminLoggedIn)
  const [admin, setAdmin] = useState(readAdminUser)
  const [isValidating, setIsValidating] = useState(false)

  useEffect(() => {
    const sync = () => {
      setIsLoggedIn(readIsAdminLoggedIn())
      setAdmin(readAdminUser())
    }
    window.addEventListener('imta-admin-auth-change', sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener('imta-admin-auth-change', sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  const validateSession = useCallback(async () => {
    const token = readAdminToken()
    if (!token) {
      setIsLoggedIn(false)
      setAdmin(null)
      return false
    }

    setIsValidating(true)
    try {
      const payload = await fetchAdminProfile()
      setAdmin(payload.data.admin)
      setIsLoggedIn(true)
      return true
    } catch {
      clearAdminSession()
      setIsLoggedIn(false)
      setAdmin(null)
      return false
    } finally {
      setIsValidating(false)
    }
  }, [])

  const logout = useCallback(() => {
    clearAdminSession()
    setIsLoggedIn(false)
    setAdmin(null)
  }, [])

  return { isLoggedIn, admin, isValidating, validateSession, logout }
}
