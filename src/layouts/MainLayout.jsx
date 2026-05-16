import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'

export function MainLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      {!isHome ? <SiteHeader variant="default" /> : null}
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
