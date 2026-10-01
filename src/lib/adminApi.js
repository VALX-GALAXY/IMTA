import { ApiRequestError } from '@/lib/api'

const API_BASE = import.meta.env.VITE_API_URL || '/api'
const ADMIN_TOKEN_KEY = 'imta_admin_token'
const ADMIN_USER_KEY = 'imta_admin_user'

export { ApiRequestError }

export function readAdminToken() {
  return localStorage.getItem(ADMIN_TOKEN_KEY)
}

export function readAdminUser() {
  try {
    return JSON.parse(localStorage.getItem(ADMIN_USER_KEY) || 'null')
  } catch {
    return null
  }
}

export function persistAdminSession({ accessToken, admin }) {
  if (accessToken) {
    localStorage.setItem(ADMIN_TOKEN_KEY, accessToken)
  }
  if (admin) {
    localStorage.setItem(ADMIN_USER_KEY, JSON.stringify(admin))
  }
  window.dispatchEvent(new Event('imta-admin-auth-change'))
}

export function clearAdminSession() {
  localStorage.removeItem(ADMIN_TOKEN_KEY)
  localStorage.removeItem(ADMIN_USER_KEY)
  window.dispatchEvent(new Event('imta-admin-auth-change'))
}

export async function adminApiRequest(path, options = {}) {
  const { method = 'GET', body, headers = {}, auth = true } = options

  const requestHeaders = {
    'Content-Type': 'application/json',
    ...headers,
  }

  if (auth) {
    const token = readAdminToken()
    if (token) {
      requestHeaders.Authorization = `Bearer ${token}`
    }
  }

  const response = await fetch(`${API_BASE}${path}`, {
    method,
    headers: requestHeaders,
    body: body ? JSON.stringify(body) : undefined,
  })

  const payload = await response.json().catch(() => ({}))

  if (!response.ok) {
    const message = payload.message || 'Something went wrong. Please try again.'
    throw new ApiRequestError(message, {
      status: response.status,
      errors: payload.errors,
    })
  }

  return payload
}

export function adminLogin({ email, password }) {
  return adminApiRequest('/admin/login', {
    method: 'POST',
    body: { email, password },
    auth: false,
  }).then((payload) => {
    persistAdminSession({
      accessToken: payload.data.accessToken,
      admin: payload.data.admin,
    })
    return payload
  })
}

export function fetchAdminProfile() {
  return adminApiRequest('/admin/profile')
}

export function fetchAdminDashboard() {
  return adminApiRequest('/admin/dashboard')
}

export function fetchAdminMembers(params = {}) {
  const searchParams = new URLSearchParams()
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.set(key, String(value))
    }
  }
  const qs = searchParams.toString()
  return adminApiRequest(`/admin/members${qs ? `?${qs}` : ''}`)
}

export function fetchAdminMemberById(id) {
  return adminApiRequest(`/admin/members/${id}`)
}
