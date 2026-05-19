import { useState } from 'react'
import { PageShell } from '@/components/layout/PageShell'
import { ContentSection } from '@/components/content/ContentSection'
import { EventCard, ForthcomingEventCard } from '@/components/content/EventCard'
import { YearFilter } from '@/components/content/YearFilter'
import { eventsByYear, eventYears, forthcomingEvents } from '@/data/events'

export function EventsPage() {
  const [selectedYear, setSelectedYear] = useState(eventYears[0])
  const yearData = eventsByYear.find((y) => y.year === selectedYear)

  return (
    <PageShell
      title="Symposia, Seminars, Webinars & Workshops"
      description="Forthcoming programmes and a year-wise archive of IMTA events from 2018 onwards."
      className="pb-20"
    >
      <ContentSection
        title="Forthcoming Events"
        description="Upcoming conferences, webinars, and community programmes."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {forthcomingEvents.map((event) => (
            <ForthcomingEventCard key={event.title} event={event} />
          ))}
        </div>
      </ContentSection>

      <ContentSection
        title="Past Events"
        description="Browse IMTA programmes organised year by year."
        className="mt-16"
      >
        <YearFilter years={eventYears} selected={selectedYear} onChange={setSelectedYear} />

        <div className="mt-6 space-y-4">
          {yearData?.events.map((event) => (
            <EventCard key={event.title + event.date} event={event} />
          ))}
        </div>
      </ContentSection>
    </PageShell>
  )
}
