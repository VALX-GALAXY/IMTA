import { useMemo } from 'react'
import { Phone } from 'lucide-react'
import { PageShell } from '@/components/layout/PageShell'
import { ContentSection, SectionBadge } from '@/components/content/ContentSection'
import { ConferenceCard } from '@/components/content/ConferenceCard'
import { UpcomingConferenceSections } from '@/components/content/UpcomingConferencePromo'
import {
  conferences,
  conference2022Schedule,
  worldConference2026Bulletin,
} from '@/data/conferences'

/** Latest year mentioned in a conference date string (e.g. "December 2025", "2024"). */
function conferenceSortYear(conference) {
  const years = conference.date.match(/\b20\d{2}\b/g)
  if (!years?.length) return 0
  return Math.max(...years.map(Number))
}

export function ConferencesPage() {
  const conferencesNewestFirst = useMemo(
    () =>
      [...conferences]
        .filter((c) => !c.upcoming)
        .sort((a, b) => conferenceSortYear(b) - conferenceSortYear(a)),
    [],
  )

  const bulletin = worldConference2026Bulletin

  return (
    <PageShell
      title="World Music Therapy Conference"
      description="IMTA’s annual World Music Therapy Conference — upcoming 9th edition in Trivandrum and an archive of past gatherings."
      className="pb-20"
    >
      <UpcomingConferenceSections className="mb-14" showCta={false} />

      <ContentSection
        title={bulletin.title}
        description={`${bulletin.subtitle} · Update dated ${bulletin.issued}`}
        className="mb-14"
      >
        <div className="overflow-hidden rounded-2xl bg-surface shadow-surface ring-1 ring-gold/15">
          <div className="flex flex-wrap items-center gap-2 border-b border-border px-5 py-4 md:px-6">
            <SectionBadge>Latest update</SectionBadge>
            <span className="text-xs font-medium text-earth">{bulletin.issued}</span>
          </div>

          <ol className="space-y-3 px-5 py-5 text-sm leading-relaxed text-earth md:px-6 md:text-base">
            {bulletin.highlights.map((item, index) => (
              <li key={item} className="flex gap-3">
                <span className="mt-0.5 w-6 shrink-0 text-right text-xs font-semibold text-gold md:text-sm">
                  {index + 1}.
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>

          <div className="space-y-4 border-t border-border bg-highlight/40 px-5 py-5 md:px-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">Contacts</p>
            <ul className="grid gap-4 sm:grid-cols-3">
              {bulletin.contacts.map((contact) => (
                <li key={contact.phone} className="text-sm text-earth">
                  <p className="font-semibold text-ink">{contact.name}</p>
                  <p className="mt-0.5 text-xs leading-snug text-earth/90">{contact.role}</p>
                  <p className="mt-2 inline-flex items-center gap-1.5">
                    <Phone className="size-3.5 shrink-0 text-gold" aria-hidden />
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                      className="font-medium text-ink hover:text-gold"
                    >
                      {contact.phone}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Past conferences"
        description="Editions from our inaugural Delhi meeting through recent gatherings."
        className="mb-10"
      />

      <div className="space-y-10">
        {conferencesNewestFirst.map((conference, index) => (
          <ConferenceCard
            key={conference.edition}
            conference={conference}
            reversed={index % 2 === 1}
          />
        ))}
      </div>

      <ContentSection
        title="2022 Conference — Program Overview"
        description={`${conference2022Schedule.theme} · ${conference2022Schedule.dates}`}
        className="mt-16"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {conference2022Schedule.days.map((day) => (
            <article
              key={day.day}
              className="rounded-2xl border border-border bg-surface p-5 shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-gold">
                Day {day.day}
              </p>
              <h3 className="mt-1 font-semibold text-ink">{day.label}</h3>
              <p className="text-sm text-earth">{day.date}</p>
              <ul className="mt-4 space-y-3 border-t border-border pt-4">
                {day.sessions.map((session) => (
                  <li key={session.time + session.title} className="text-sm">
                    <span className="font-medium text-ink">{session.time}</span>
                    <p className="text-earth">{session.title}</p>
                    {session.speaker ? (
                      <p className="text-xs text-earth/80">{session.speaker}</p>
                    ) : null}
                    {session.note ? (
                      <p className="text-xs text-earth/80">{session.note}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </ContentSection>
    </PageShell>
  )
}
