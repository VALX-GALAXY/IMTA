import { Link } from 'react-router-dom'
import { BrandLogo } from '@/components/layout/BrandLogo'
import { footerColumns, site } from '@/config/site'
import { ROUTES } from '@/constants/routes'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <BrandLogo variant="default" className="inline-flex" />
            <p className="mt-4 max-w-xs text-sm text-earth">{site.tagline}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link to={link.href} className="text-sm text-earth transition-colors hover:text-ink">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 text-sm text-earth md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to={ROUTES.introduction} className="hover:text-ink">
              About
            </Link>
            <Link to={ROUTES.contact} className="hover:text-ink">
              Contact
            </Link>
            <Link to={ROUTES.eMagazine} className="hover:text-ink">
              E-Magazine
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
