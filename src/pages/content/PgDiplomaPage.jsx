import { Download, ExternalLink, Mail, Phone } from 'lucide-react'
import {
  PG_DIPLOMA_APPLICATION_EMAIL,
  PG_DIPLOMA_APPLICATION_PDF,
  PG_DIPLOMA_BATCH_START,
  PG_DIPLOMA_COURSE_FEE_INR,
} from '@/constants/pgDiploma'
import {
  pgDiplomaApplicantInstructions,
  pgDiplomaApplicationSections,
  pgDiplomaBankDetails,
  pgDiplomaContact,
  pgDiplomaDisclaimer,
  pgDiplomaIntroParagraphs,
  pgDiplomaObjective,
  pgDiplomaProgramme,
  pgDiplomaSyllabus,
} from '@/data/pgDiploma'
import { publicAsset } from '@/lib/publicAsset'
import { cn } from '@/lib/utils'

const PG_DIPLOMA_HERO_IMAGE = publicAsset('7.   IMTA DISTANCE LEARNING PG DIPLOMA COURSE .jpeg')

function SectionCard({ title, children, className, id }) {
  return (
    <section
      id={id}
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

function ProseBlock({ children, className }) {
  return (
    <p className={cn('text-sm leading-relaxed text-ink md:text-base', className)}>{children}</p>
  )
}

export function PgDiplomaPage() {
  const mailtoApply = `mailto:${PG_DIPLOMA_APPLICATION_EMAIL}?subject=${encodeURIComponent(
    'PG Diploma Application — 22nd Batch',
  )}`

  return (
    <section className="bg-canvas py-12 md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Indian Music Therapy Association · {pgDiplomaProgramme.location}
          </p>
          <h1 className="mt-3 font-sans text-2xl font-semibold tracking-tight text-ink md:text-4xl">
            {pgDiplomaProgramme.title}
          </h1>
          <p className="mt-2 text-sm font-medium text-earth md:text-base">
            {pgDiplomaProgramme.subtitle} · commencing {PG_DIPLOMA_BATCH_START}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-earth md:text-lg">
            Prospectus, syllabus, course fee, application form, and how to apply by email.
          </p>
        </header>

        <figure className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border shadow-surface">
          <img
            src={PG_DIPLOMA_HERO_IMAGE}
            alt="IMTA Distance Learning PG Diploma in Music Therapy — 22nd batch"
            className="aspect-[16/9] w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
        </figure>

        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
          <a
            href={PG_DIPLOMA_APPLICATION_PDF}
            download
            className="group flex min-h-[52px] items-center justify-center gap-3 rounded-xl border border-gold/40 bg-ink px-5 py-4 text-center text-sm font-medium text-canvas shadow-sm transition-all hover:bg-ink/90 md:text-base"
          >
            <Download className="size-5 shrink-0 text-gold" aria-hidden />
            Download application form (PDF)
          </a>
          <a
            href={mailtoApply}
            className="group flex min-h-[52px] items-center justify-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 text-center text-sm font-medium text-ink shadow-sm transition-all hover:border-gold/50 hover:bg-highlight md:text-base"
          >
            <Mail className="size-5 shrink-0 text-gold" aria-hidden />
            Email completed application
          </a>
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-center text-xs leading-relaxed text-earth md:text-sm">
          Submit only through{' '}
          <a
            href={mailtoApply}
            className="font-medium text-gold underline decoration-gold/50 underline-offset-2"
          >
            {PG_DIPLOMA_APPLICATION_EMAIL}
          </a>
          . Do not send any participation fee until you are selected and confirmed by email.
        </p>

        <div className="mt-12 space-y-8 md:mt-14 md:space-y-10">
          <SectionCard title="About the programme">
            <div className="space-y-4">
              {pgDiplomaIntroParagraphs.map((paragraph) => (
                <ProseBlock key={paragraph.slice(0, 48)}>{paragraph}</ProseBlock>
              ))}
            </div>
            <ul className="mt-6 flex flex-wrap gap-3">
              {pgDiplomaProgramme.directors.map((person) => (
                <li
                  key={person.name}
                  className="rounded-full border border-border bg-highlight/80 px-4 py-2 text-sm text-ink"
                >
                  <span className="font-medium">{person.name}</span>
                  <span className="text-earth"> — {person.role}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Objective of the programme">
            <ProseBlock>{pgDiplomaObjective}</ProseBlock>
          </SectionCard>

          <SectionCard title="Syllabus">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-ink md:text-base">
                  {pgDiplomaSyllabus.theoretical.title}
                </h3>
                <ProseBlock className="mt-2">{pgDiplomaSyllabus.theoretical.body}</ProseBlock>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink md:text-base">
                  {pgDiplomaSyllabus.assignments.title}
                </h3>
                <ProseBlock className="mt-2">{pgDiplomaSyllabus.assignments.body}</ProseBlock>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Course fee">
            <p className="text-2xl font-semibold text-ink md:text-3xl">
              INR {PG_DIPLOMA_COURSE_FEE_INR.toLocaleString('en-IN')}
            </p>
            <p className="mt-3 text-sm text-earth md:text-base">
              Pay only after selection, as confirmed in your email. Transfer to the IMTA account below
              using the amount specified in this prospectus.
            </p>
          </SectionCard>

          <SectionCard title="Disclaimer">
            <ProseBlock className="text-earth">{pgDiplomaDisclaimer}</ProseBlock>
          </SectionCard>

          <SectionCard title="Application form" id="application-form">
            <p className="mb-6 text-sm text-earth md:text-base">
              Complete the downloadable PDF or use this checklist when preparing your application.
              Include a recent photograph where indicated.
            </p>
            <div className="space-y-6">
              {pgDiplomaApplicationSections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-xl border border-dashed border-border bg-highlight/50 p-4 md:p-5"
                >
                  <h3 className="text-sm font-semibold text-ink md:text-base">{section.title}</h3>
                  <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-earth md:text-base">
                    {section.fields.map((field) => (
                      <li key={field}>{field}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <a
              href={PG_DIPLOMA_APPLICATION_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold underline decoration-gold/50 underline-offset-2 hover:text-ink"
            >
              Open application form PDF
              <ExternalLink className="size-4" aria-hidden />
            </a>
          </SectionCard>

          <SectionCard title="Instructions for applicants">
            <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-ink md:text-base">
              {pgDiplomaApplicantInstructions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </SectionCard>

          <SectionCard title="Payment — Indian Music Therapy Association account">
            <div className="rounded-2xl border border-border bg-highlight/70 p-5 text-sm text-ink md:p-6">
              <dl className="space-y-3">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-earth">
                    Account name
                  </dt>
                  <dd className="mt-0.5 font-medium">{pgDiplomaBankDetails.accountName}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-earth">
                    Bank name
                  </dt>
                  <dd className="mt-0.5">{pgDiplomaBankDetails.bankName}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-earth">
                    Account no.
                  </dt>
                  <dd className="mt-0.5 font-mono text-base">{pgDiplomaBankDetails.accountNo}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-earth">Branch</dt>
                  <dd className="mt-0.5">{pgDiplomaBankDetails.branch}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-earth">
                    IFSC code
                  </dt>
                  <dd className="mt-0.5 font-mono">{pgDiplomaBankDetails.ifsc}</dd>
                </div>
              </dl>
            </div>
            <p className="mt-4 rounded-xl border border-gold/35 bg-gold/10 px-4 py-3 text-sm font-medium text-ink">
              Please do not send any participation fee now. Only on selection as confirmed in your
              email should you transfer INR {PG_DIPLOMA_COURSE_FEE_INR.toLocaleString('en-IN')} as
              specified in the prospectus.
            </p>
          </SectionCard>

          <SectionCard title="Contact">
            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex items-start gap-3 text-ink">
                <Phone className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
                <span>
                  Phone:{' '}
                  <a
                    href={`tel:${pgDiplomaContact.phone}`}
                    className="font-medium text-gold underline decoration-gold/50 underline-offset-2"
                  >
                    {pgDiplomaContact.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3 text-ink">
                <ExternalLink className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
                <span>
                  Website:{' '}
                  <a
                    href={pgDiplomaContact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gold underline decoration-gold/50 underline-offset-2"
                  >
                    {pgDiplomaContact.websiteLabel}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3 text-ink">
                <Mail className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
                <span>
                  Submit applications only to:{' '}
                  <a
                    href={mailtoApply}
                    className="font-medium text-gold underline decoration-gold/50 underline-offset-2"
                  >
                    {PG_DIPLOMA_APPLICATION_EMAIL}
                  </a>
                </span>
              </li>
            </ul>
          </SectionCard>
        </div>
      </div>
    </section>
  )
}
