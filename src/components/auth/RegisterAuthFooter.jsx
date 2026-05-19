import { Link } from 'react-router-dom'
import { site } from '@/config/site'

const footerColumns = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About Us', href: '/introduction' },
      { label: 'Find a Therapist', href: '/contact' },
      { label: 'Research Paper', href: '/bookshelf' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Knowledge Base', href: '/what-is-music-therapy' },
      { label: 'Events & Webinars', href: '/events' },
      { label: 'Member FAQ', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/terms' },
    ],
  },
]

export function RegisterAuthFooter() {
  return (
    <footer className="border-t border-[#E8EAF0] bg-auth-muted px-6 py-12 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xl font-bold text-imta-indigo">{site.name}</p>
          <p className="mt-3 text-xs leading-relaxed text-[#6B7280]">
            © {new Date().getFullYear()} {site.fullName}. Healing through rhythm.
          </p>
        </div>
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
            <ul className="mt-3 space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-xs text-[#6B7280] transition-colors hover:text-imta-indigo"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
