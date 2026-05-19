import { Mail, MapPin, Phone } from 'lucide-react'
import { site } from '@/config/site'
import { cn } from '@/lib/utils'

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function YoutubeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function SocialLink({ href, label, children, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        'inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-earth shadow-sm transition-colors hover:border-gold/40 hover:text-ink',
        className,
      )}
    >
      {children}
    </a>
  )
}

export function SiteFooter() {
  const phoneDisplay = site.contact.phones.join(' / ')

  return (
    <footer className="border-t border-border bg-highlight">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div>
            <h3 className="font-sans text-lg font-semibold text-ink md:text-xl">About Us</h3>
            <div className="mt-3 h-0.5 w-12 rounded-full bg-gold" />
            <p className="mt-5 text-sm leading-[1.85] text-earth md:text-base">
              {site.footerAbout}
            </p>

            <div className="mt-6 flex items-center gap-3">
              {site.social.facebook ? (
                <SocialLink href={site.social.facebook} label="Facebook">
                  <FacebookIcon className="size-4" />
                </SocialLink>
              ) : null}
              {site.social.youtube ? (
                <SocialLink href={site.social.youtube} label="YouTube">
                  <YoutubeIcon className="size-4" />
                </SocialLink>
              ) : null}
            </div>
          </div>

          <div>
            <h3 className="font-sans text-lg font-semibold text-ink md:text-xl">
              {site.fullName}
            </h3>
            <div className="mt-3 h-0.5 w-12 rounded-full bg-gold" />
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
                <span className="text-sm leading-relaxed text-earth md:text-base">
                  {site.contact.address}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
                <a
                  href={`tel:${site.contact.phones[0]}`}
                  className="text-sm text-earth transition-colors hover:text-ink md:text-base"
                >
                  {phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-sm text-earth transition-colors hover:text-ink md:text-base"
                >
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <p className="text-sm text-earth">
            © {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
