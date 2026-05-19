import { apiRequest, clearAuthSession } from '@/lib/api'

export async function logout() {
  try {
    await apiRequest('/auth/logout', { method: 'POST' })
  } catch {
    // Clear local session even if the request fails (e.g. expired token)
  } finally {
    clearAuthSession()
  }
}
