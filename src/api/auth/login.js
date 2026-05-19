import { apiRequest, persistAuthSession } from '@/lib/api'

export async function login({ email, password, remember }) {
  const payload = await apiRequest('/auth/login', {
    method: 'POST',
    auth: false,
    body: { email, password, remember },
  })

  persistAuthSession(payload.data)
  return payload
}
