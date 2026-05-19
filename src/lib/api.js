const API_BASE = import.meta.env.VITE_API_URL || '/api'

export class ApiRequestError extends Error {
  constructor(message, { status, errors } = {}) {
    super(message)
    this.name = 'ApiRequestError'
    this.status = status
    this.errors = errors
  }
}

export async function apiRequest(path, options = {}) {
  const { method = 'GET', body, headers = {}, auth = true } = options

  const requestHeaders = {
    'Content-Type': 'application/json',
    ...headers,
  }

  if (auth) {
    const token = localStorage.getItem('imta_access_token')
    if (token) {
      requestHeaders.Authorization = `Bearer ${token}`
    }
  }

  const response = await fetch(`${API_BASE}${path}`, {
    method,
    headers: requestHeaders,
    credentials: 'include',
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

export function persistAuthSession({ accessToken, user }) {
  if (accessToken) {
    localStorage.setItem('imta_access_token', accessToken)
  }
  if (user) {
    localStorage.setItem('imta_user', JSON.stringify(user))
  }
  window.dispatchEvent(new Event('imta-auth-change'))
}

export function clearAuthSession() {
  localStorage.removeItem('imta_access_token')
  localStorage.removeItem('imta_user')
  window.dispatchEvent(new Event('imta-auth-change'))
}
