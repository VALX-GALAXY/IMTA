import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowUpRight, Eye, EyeOff, FileText, Headphones, Users } from 'lucide-react'
import { toast } from 'sonner'
import { register } from '@/api/auth/register'
import { AuthField } from '@/components/auth/AuthField'
import { AuthDivider, GoogleAuthButton } from '@/components/auth/GoogleAuthButton'
import { AuthShell } from '@/components/auth/AuthShell'
import { LoginAuthFooter } from '@/components/auth/LoginAuthFooter'
import { PillButton } from '@/components/ui/pill-button'
import { ROUTES } from '@/constants/routes'
import { ApiRequestError } from '@/lib/api'
import { cn } from '@/lib/utils'

const inputClassName =
  'w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-earth/60 focus:border-gold focus:ring-2 focus:ring-gold/20'

export function RegisterPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setFieldErrors({})
    setIsSubmitting(true)

    const form = new FormData(e.currentTarget)

    try {
      const result = await register({
        fullName: form.get('fullName'),
        email: form.get('email'),
        phone: form.get('phone'),
        password: form.get('password'),
        agreedToTerms: agreed,
      })
      toast.success(result.message || 'Account created successfully')
      navigate(ROUTES.home)
    } catch (err) {
      if (err instanceof ApiRequestError && err.errors?.length) {
        const next = {}
        for (const item of err.errors) {
          next[item.field] = item.message
        }
        setFieldErrors(next)
      }
      toast.error(
        err instanceof ApiRequestError
          ? err.message
          : 'Unable to create your account. Please try again.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AuthShell
      activeTab="register"
      headline="Join our community"
      description="Become part of the rhythm of healing. Access certified therapy resources and connect with practitioners across India."
      sideContent={
        <>
          <div className="mt-8 space-y-4">
            <div className="rounded-xl bg-highlight p-4">
              <FileText className="size-5 text-gold" aria-hidden />
              <p className="mt-3 text-sm font-medium text-ink">Clinical Data</p>
              <p className="mt-1 text-xs leading-relaxed text-earth">
                Evidence-based research &amp; case studies.
              </p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <Users className="size-5 text-gold" aria-hidden />
              <p className="mt-3 text-sm font-medium text-ink">Community</p>
              <p className="mt-1 text-xs leading-relaxed text-earth">
                Connect with 5,000+ practitioners.
              </p>
            </div>
          </div>
          <Link
            to={ROUTES.introduction}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-gold"
          >
            Know more
            <ArrowUpRight className="size-4" />
          </Link>
        </>
      }
      footer={<LoginAuthFooter />}
    >
      <div className="mx-auto w-full max-w-lg">
        <h1 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Registration</h1>
        <p className="mt-3 text-2xl font-bold tracking-tight text-ink md:text-3xl">
          Create your account
        </p>
        <p className="mt-2 text-sm text-earth">
          Already a member?{' '}
          <Link to={ROUTES.login} className="font-semibold text-ink transition-colors hover:text-gold">
            Login
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <AuthField
              id="fullName"
              name="fullName"
              label="Full Name"
              autoComplete="name"
              placeholder="Arun Kumar"
              required
              aria-invalid={Boolean(fieldErrors.fullName)}
            />
            <AuthField
              id="phone"
              name="phone"
              label="Phone Number"
              type="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              required
              aria-invalid={Boolean(fieldErrors.phone)}
            />
          </div>
          {fieldErrors.fullName ? <p className="text-xs text-red-600">{fieldErrors.fullName}</p> : null}
          {fieldErrors.phone ? <p className="text-xs text-red-600">{fieldErrors.phone}</p> : null}

          <AuthField
            id="email"
            name="email"
            label="Email Address"
            type="email"
            autoComplete="email"
            placeholder="arun.kumar@therapy.in"
            required
            aria-invalid={Boolean(fieldErrors.email)}
          />
          {fieldErrors.email ? <p className="-mt-3 text-xs text-red-600">{fieldErrors.email}</p> : null}

          <div className="space-y-1.5">
            <label htmlFor="password" className="text-sm font-medium text-ink">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                placeholder="••••••••"
                required
                minLength={8}
                className={cn(inputClassName, 'pr-12')}
                aria-invalid={Boolean(fieldErrors.password)}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute top-1/2 right-3 -translate-y-1/2 rounded-md p-1 text-earth transition-colors hover:text-gold"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
            <p className="text-xs text-earth">Minimum 8 characters with uppercase, lowercase, number, and symbol.</p>
            {fieldErrors.password ? <p className="text-xs text-red-600">{fieldErrors.password}</p> : null}
          </div>

          <label className="flex cursor-pointer items-start gap-2.5">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
              className="mt-0.5 size-4 rounded border-border text-gold focus:ring-gold/30"
            />
            <span className="text-xs leading-relaxed text-earth">
              By checking this, I agree to the{' '}
              <Link to="/terms" className="font-medium text-ink transition-colors hover:text-gold">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="font-medium text-ink transition-colors hover:text-gold">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {fieldErrors.agreedToTerms ? (
            <p className="text-xs text-red-600">{fieldErrors.agreedToTerms}</p>
          ) : null}

          <div className="pt-2">
            <PillButton
              type="submit"
              showIcon={false}
              className="h-14 w-full justify-center px-8 text-base font-semibold disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!agreed || isSubmitting}
            >
              {isSubmitting ? 'Creating account…' : 'Continue'}
            </PillButton>
          </div>
        </form>

        <AuthDivider />

        <GoogleAuthButton>Sign up with Google</GoogleAuthButton>

        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-border bg-highlight p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface">
              <Headphones className="size-5 text-gold" aria-hidden />
            </div>
            <p className="text-xs leading-relaxed text-earth">
              Need help with registration? Our support team is available Mon–Fri, 9am – 6pm.
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-canvas"
          >
            Chat Now
          </button>
        </div>
      </div>
    </AuthShell>
  )
}
