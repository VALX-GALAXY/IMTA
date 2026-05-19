import { useLocation } from 'react-router-dom'
import { PageShell } from '@/components/layout/PageShell'
import { pagesByPath } from '@/config/pages'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { pageComponents } from '@/pages/content/pageRegistry'

export function ContentPage() {
  const { pathname } = useLocation()
  const page = pagesByPath[pathname]

  if (!page || page.layout === 'home') {
    return <NotFoundPage />
  }

  const PageComponent = pageComponents[page.id]

  if (PageComponent) {
    return <PageComponent />
  }

  return (
    <PageShell title={page.title} description={page.description}>
      {page.note ? (
        <p className="rounded-2xl border border-border bg-highlight px-5 py-4 text-center text-sm text-earth">
          Content coming soon — {page.note}
        </p>
      ) : null}
    </PageShell>
  )
}
