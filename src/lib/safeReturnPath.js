/** Prevent open redirects — only same-origin relative paths allowed. */
export function getSafeReturnPath(nextParam) {
  if (!nextParam || typeof nextParam !== 'string') return null
  const trimmed = nextParam.trim()
  if (!trimmed.startsWith('/') || trimmed.startsWith('//')) return null
  if (trimmed.includes('://')) return null
  return trimmed
}
