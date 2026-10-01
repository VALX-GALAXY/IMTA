import { apiRequest, ApiRequestError } from '@/lib/api'

const API_BASE = import.meta.env.VITE_API_URL || '/api'

export async function submitMembershipApplication(formData) {
  const token = localStorage.getItem('imta_access_token')
  const headers = {}
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${API_BASE}/membership/applications`, {
    method: 'POST',
    headers,
    credentials: 'include',
    body: formData,
  })

  const payload = await response.json().catch(() => ({}))

  if (!response.ok) {
    const message = payload.message || 'Could not submit your application. Please try again.'
    throw new ApiRequestError(message, {
      status: response.status,
      errors: payload.errors,
    })
  }

  return payload
}

export function fetchMyMembershipApplications() {
  return apiRequest('/membership/applications/me')
}
