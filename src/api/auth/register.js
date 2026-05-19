import { apiRequest, persistAuthSession } from '@/lib/api'

export async function register({ fullName, email, phone, password, agreedToTerms }) {
  const payload = await apiRequest('/auth/register', {
    method: 'POST',
    auth: false,
    body: { fullName, email, phone, password, agreedToTerms },
  })

  persistAuthSession(payload.data)
  return payload
}
