import { useState } from 'react'
import { Download, FilePenLine } from 'lucide-react'
import { MembershipApplyModal } from '@/components/membership/MembershipApplyModal'
import { MEMBERSHIP_REGISTRATION_PDF } from '@/constants/membership'
import { site } from '@/config/site'
import { cn } from '@/lib/utils'

const benefits = [
  'Networking with music therapists across India.',
  'Member profiles with photos and contact links on the website.',
  'Online platform to publicise workshops and events.',
  'Showcasing universities and music therapy organisations.',
  'Co-sponsoring members’ workshops.',
  '40% concession on IMTA workshops and 15% rebate on publications.',
]

const categories = [
  <>
    <strong>Membership fee:</strong> ₹ 5,000 — one-time fee when you first join IMTA (pay before or with
    your application).
  </>,
  <>
    <strong>Yearly renewal fee:</strong> ₹ 2,000 per calendar year (1 January – 31 December), payable after
    your membership fee. Renew by the notified date (typically by early April) to stay in good standing.
  </>,
  <>
    <strong>Life membership fee:</strong> ₹ 25,000 — one-time payment in lieu of yearly renewals.
  </>,
]

function SectionCard({ title, children, className }) {
  return (
    <section
      className={cn(
        'rounded-2xl border border-border bg-surface p-6 shadow-surface md:p-8',
        className,
      )}
    >
      <h2 className="border-l-4 border-gold pl-4 font-sans text-lg font-semibold text-ink md:text-xl">
        {title}
      </h2>
      <div className="pt-6">{children}</div>
    </section>
  )
}

function NumberedList({ items }) {
  return (
    <ol className="space-y-4">
      {items.map((content, i) => (
        <li
          key={i}
          className="flex gap-4 text-sm leading-relaxed text-ink md:text-base"
        >
          <span
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-sm font-semibold text-ink ring-1 ring-gold/35"
            aria-hidden
          >
            {i + 1}
          </span>
          <span className="pt-1">{content}</span>
        </li>
      ))}
    </ol>
  )
}

export function MembershipPage() {
  const [applyOpen, setApplyOpen] = useState(false)

  return (
    <>
      <section className="bg-canvas py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <header className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Indian Music Therapy Association
            </p>
            <h1 className="mt-3 font-sans text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Memberships
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-earth md:text-lg">
              Join {site.fullName} — fees, benefits, bank details, and how to apply.
            </p>
          </header>

          <div className="mt-12 space-y-8 md:mt-14 md:space-y-10">
            <SectionCard title="Benefits of IMTA">
              <NumberedList items={benefits} />
            </SectionCard>

            <SectionCard title="Categories of membership">
              <NumberedList items={categories} />
            </SectionCard>

            <SectionCard title="Payment and application">
              <p className="mb-6 text-sm font-medium text-ink md:text-base">
                Transfer the applicable amount — membership fee (₹ 5,000), yearly renewal (₹ 2,000), or
                life membership (₹ 25,000) — via online transfer / cheque / DD. Bank details are as follows:
              </p>

              <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
                <div className="rounded-2xl border border-border bg-highlight/70 p-5 text-sm text-ink md:p-6">
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-earth">
                        Account name
                      </dt>
                      <dd className="mt-0.5 font-medium text-ink">Indian Music Therapy Association</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-earth">Bank name</dt>
                      <dd className="mt-0.5">HDFC</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-earth">
                        Account no.
                      </dt>
                      <dd className="mt-0.5 font-mono text-base">50200031191158</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-earth">Branch</dt>
                      <dd className="mt-0.5">T. C. Palya Road</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-earth">IFSC code</dt>
                      <dd className="mt-0.5 font-mono">HDFC0004193</dd>
                    </div>
                  </dl>

                  <div className="mt-6 border-t border-border pt-4 text-sm">
                    <p className="font-semibold text-ink">Note:</p>
                    <p className="mt-1 text-earth">The membership form can be submitted via:</p>
                    <ol className="mt-2 list-decimal space-y-1 pl-5 text-earth">
                      <li>Post to the Bangalore office address below.</li>
                      <li>
                        Scan and email to{' '}
                        <a
                          href={`mailto:${site.contact.email}`}
                          className="font-medium text-gold underline decoration-gold/50 underline-offset-2 transition-colors hover:text-ink hover:decoration-ink/30"
                        >
                          {site.contact.email}
                        </a>
                        .
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-3">
                  <a
                    href={MEMBERSHIP_REGISTRATION_PDF}
                    download
                    className="group flex min-h-[52px] items-center justify-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 text-center text-sm font-medium text-ink shadow-sm transition-all hover:border-gold/50 hover:bg-highlight md:text-base"
                  >
                    <Download
                      className="size-5 shrink-0 text-gold transition-transform group-hover:translate-y-0.5"
                      aria-hidden
                    />
                    Download membership form (PDF)
                  </a>
                  <button
                    type="button"
                    onClick={() => setApplyOpen(true)}
                    className="flex min-h-[52px] items-center justify-center gap-3 rounded-xl border border-gold/40 bg-ink px-5 py-4 text-center text-sm font-medium text-canvas shadow-sm transition-all hover:bg-ink/90 md:text-base"
                  >
                    <FilePenLine className="size-5 shrink-0 text-gold" aria-hidden />
                    Apply for membership
                  </button>
                  <p className="text-center text-xs leading-relaxed text-earth">
                    Prefer offline? Download the PDF, complete it, and send as per the note above.
                  </p>
                </div>
              </div>

              <address className="mt-8 not-italic rounded-xl border border-border bg-highlight/50 p-5 text-sm text-earth">
                <span className="font-semibold text-ink">Office address: </span>
                {site.contact.address}
              </address>
            </SectionCard>
          </div>
        </div>
      </section>

      <MembershipApplyModal open={applyOpen} onOpenChange={setApplyOpen} />
    </>
  )
}
