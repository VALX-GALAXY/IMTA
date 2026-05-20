import { useMemo } from 'react'
import { PageShell } from '@/components/layout/PageShell'
import { ContentSection } from '@/components/content/ContentSection'
import { ConferenceCard } from '@/components/content/ConferenceCard'
import { conferences, conference2022Schedule } from '@/data/conferences'

/** Latest year mentioned in a conference date string (e.g. "December 2025", "2024"). */
function conferenceSortYear(conference) {
  const years = conference.date.match(/\b20\d{2}\b/g)
  if (!years?.length) return 0
  return Math.max(...years.map(Number))
}

export function ConferencesPage() {
  const conferencesNewestFirst = useMemo(
    () => [...conferences].sort((a, b) => conferenceSortYear(b) - conferenceSortYear(a)),
    [],
  )

  return (
    <PageShell
      title="Annual Conferences"
      description="Archive of IMTA world conferences — newest editions first, from recent gatherings back to our inaugural Delhi meeting."
      className="pb-20"
    >
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
