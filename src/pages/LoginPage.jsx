import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { toast } from 'sonner'
import { login } from '@/api/auth/login'
import { getSafeReturnPath } from '@/lib/safeReturnPath'
import { AuthField } from '@/components/auth/AuthField'
import { AuthDivider, GoogleAuthButton } from '@/components/auth/GoogleAuthButton'
import { AuthPrimaryButton } from '@/components/auth/AuthPrimaryButton'
import { AuthShell } from '@/components/auth/AuthShell'
import { LoginAuthFooter } from '@/components/auth/LoginAuthFooter'
import { ROUTES } from '@/constants/routes'
import { ApiRequestError } from '@/lib/api'

export function LoginPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const returnTo = getSafeReturnPath(searchParams.get('next'))
  const [remember, setRemember] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setFieldErrors({})
    setIsSubmitting(true)

    const form = new FormData(e.currentTarget)

    try {
      const result = await login({
        email: form.get('email'),
        password: form.get('password'),
        remember,
      })
      toast.success(result.message || 'Signed in successfully')
      navigate(returnTo ?? ROUTES.home, { replace: true })
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
    <AuthShell
      activeTab="login"
      headline="Welcome back"
      description="Sign in to access your member account, resources, and the certified practitioners network."
      sideContent={
        <>
          <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-highlight px-4 py-2.5 text-sm font-medium text-ink">
            <Sparkles className="size-4 fill-gold text-gold" aria-hidden />
            Certified Practitioners Network
          </div>
        </>
      }
      footer={<LoginAuthFooter />}
    >
      <div className="mx-auto w-full max-w-md">
        <h1 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Account</h1>
        <p className="mt-3 text-2xl font-bold tracking-tight text-ink md:text-3xl">Welcome Back</p>
        <p className="mt-2 text-sm text-earth">
          Please enter your details to access your account.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
          <AuthField
            id="email"
            name="email"
            label="Email Address"
            type="email"
            autoComplete="email"
            placeholder="practitioner@imta.org"
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
            labelExtra={
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-ink transition-colors hover:text-gold"
              >
                Forgot password?
              </Link>
            }
            aria-invalid={Boolean(fieldErrors.password)}
            aria-describedby={fieldErrors.password ? 'password-error' : undefined}
          />
          {fieldErrors.password ? (
            <p id="password-error" className="-mt-3 text-xs text-red-600">
              {fieldErrors.password}
            </p>
          ) : null}

          <label className="flex cursor-pointer items-center gap-2.5">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="size-4 rounded border-border text-gold focus:ring-gold/30"
            />
            <span className="text-sm text-earth">Remember me</span>
          </label>

          <AuthPrimaryButton disabled={isSubmitting}>
            {isSubmitting ? 'Signing in…' : 'Login'}
          </AuthPrimaryButton>
        </form>

        <AuthDivider />

        <GoogleAuthButton />

        <p className="mt-8 text-center text-sm text-earth">
          Don&apos;t have an account?{' '}
          <Link
            to={
              returnTo
                ? `${ROUTES.register}?next=${encodeURIComponent(returnTo)}`
                : ROUTES.register
            }
            className="font-semibold text-ink transition-colors hover:text-gold"
          >
            Register now
          </Link>
        </p>
      </div>
    </AuthShell>
  )
}
