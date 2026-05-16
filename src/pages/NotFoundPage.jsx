import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/routes'

export function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-canvas px-4 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-gold">404</p>
      <h1 className="mt-2 text-3xl font-semibold text-ink">Page not found</h1>
      <p className="mt-3 max-w-md text-earth">
        The page you are looking for may have moved or does not exist yet.
      </p>
      <Button asChild className="mt-8">
        <Link to={ROUTES.home}>Back to home</Link>
      </Button>
    </section>
  )
}
