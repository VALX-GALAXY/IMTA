import { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Shield } from 'lucide-react'
import { toast } from 'sonner'
import { AuthField } from '@/components/auth/AuthField'
import { AuthPrimaryButton } from '@/components/auth/AuthPrimaryButton'
import { ROUTES } from '@/constants/routes'
import { ApiRequestError, adminLogin, readAdminToken } from '@/lib/adminApi'
import { getSafeReturnPath } from '@/lib/safeReturnPath'

export function AdminLoginPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const returnTo = getSafeReturnPath(searchParams.get('next')) ?? ROUTES.adminDashboard
  const [fieldErrors, setFieldErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (readAdminToken()) {
      navigate(ROUTES.adminDashboard, { replace: true })
    }
  }, [navigate])

  async function handleSubmit(e) {
    e.preventDefault()
    setFieldErrors({})
    setIsSubmitting(true)

    const form = new FormData(e.currentTarget)

    try {
      const result = await adminLogin({
        email: form.get('email'),
        password: form.get('password'),
      })
      toast.success(result.message || 'Signed in successfully')
      navigate(returnTo, { replace: true })
    } catch (err) {
      if (err instanceof ApiRequestError && err.errors?.length) {
        const fieldErrorMap = {}
        for (const item of err.errors) {
          fieldErrorMap[item.field] = item.message
        }
        setFieldErrors(fieldErrorMap)
      }
      toast.error(
        err instanceof ApiRequestError ? err.message : 'Unable to sign in. Please try again.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-8 shadow-surface-lg">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-highlight">
            <Shield className="size-5 text-gold" aria-hidden />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">IMTA Admin</p>
            <h1 className="font-sans text-xl font-semibold text-ink">Sign in</h1>
          </div>
        </div>

        <p className="mt-4 text-sm text-earth">
          Enter your admin credentials to access the dashboard.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
          <AuthField
            id="email"
            name="email"
            label="Email Address"
            type="email"
            autoComplete="email"
            placeholder="admin@theimta.in"
            required
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? 'email-error' : undefined}
          />
          {fieldErrors.email ? (
            <p id="email-error" className="-mt-3 text-xs text-red-600">
              {fieldErrors.email}
            </p>
          ) : null}

          <AuthField
            id="password"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            required
            aria-invalid={Boolean(fieldErrors.password)}
            aria-describedby={fieldErrors.password ? 'password-error' : undefined}
          />
          {fieldErrors.password ? (
            <p id="password-error" className="-mt-3 text-xs text-red-600">
              {fieldErrors.password}
            </p>
          ) : null}

          <AuthPrimaryButton disabled={isSubmitting}>
            {isSubmitting ? 'Signing in…' : 'Login'}
          </AuthPrimaryButton>
        </form>

        <p className="mt-8 text-center text-sm text-earth">
          <Link to={ROUTES.home} className="font-medium text-ink transition-colors hover:text-gold">
            Back to website
          </Link>
        </p>
      </div>
    </div>
  )
}
