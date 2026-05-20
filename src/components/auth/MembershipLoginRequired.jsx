import { Link, useLocation } from 'react-router-dom'
import { Lock } from 'lucide-react'
import { PageShell } from '@/components/layout/PageShell'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/routes'

export function MembershipLoginRequired({ pageTitle, pageDescription }) {
  const { pathname } = useLocation()
  const next = encodeURIComponent(pathname)
  const loginHref = `${ROUTES.login}?next=${next}`

  return (
    <PageShell
      title={pageTitle}
      description={pageDescription}
      className="pb-20"
    >
      <div className="mx-auto max-w-lg rounded-2xl border border-border bg-surface p-8 text-center shadow-surface md:p-10">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30">
          <Lock className="size-7 text-gold" aria-hidden />
        </div>
        <h2 className="mt-6 font-sans text-xl font-semibold text-ink md:text-2xl">
          Sign in to view membership
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-earth md:text-base">
          Membership benefits, fees, bank details, and the application form are available to signed-in
          visitors. Please log in to continue.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild className="w-full sm:w-auto">
            <Link to={loginHref}>Log in</Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link to={`${ROUTES.register}?next=${next}`}>Create an account</Link>
          </Button>
        </div>
        <p className="mt-6 text-xs text-earth">
          <Link
            to={ROUTES.home}
            className="font-medium text-gold underline decoration-gold/40 underline-offset-2 hover:text-ink"
          >
            Back to homepage
          </Link>
        </p>
      </div>
    </PageShell>
  )
}
