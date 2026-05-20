import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageShell } from '@/components/layout/PageShell'
import { ContentSection } from '@/components/content/ContentSection'
import { EventCard, ForthcomingEventCard } from '@/components/content/EventCard'
import { YearFilter } from '@/components/content/YearFilter'
import { ROUTES } from '@/constants/routes'
import { eventsByYear, eventYears, forthcomingEvents } from '@/data/events'
import { cn } from '@/lib/utils'

/** Flatten archived events with `year` for filtering and grouping. */
function eventsWithYears() {
  return eventsByYear.flatMap((y) => y.events.map((event) => ({ ...event, year: y.year })))
}

export function EventsPage() {
  const [selectedYear, setSelectedYear] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  const archiveFlat = useMemo(() => eventsWithYears(), [])

  const eventsInScope = useMemo(() => {
    if (selectedYear === 'all') return archiveFlat
    return archiveFlat.filter((e) => e.year === selectedYear)
  }, [archiveFlat, selectedYear])

  const typeOptions = useMemo(() => {
    const types = [...new Set(eventsInScope.map((e) => e.type))]
    return types.sort((a, b) => a.localeCompare(b))
  }, [eventsInScope])

  const filteredPast = useMemo(() => {
    if (selectedType === 'all') return eventsInScope
    return eventsInScope.filter((e) => e.type === selectedType)
  }, [eventsInScope, selectedType])

  const groupedByYear = useMemo(() => {
    const map = new Map()
    for (const event of filteredPast) {
      const y = event.year
      if (!map.has(y)) map.set(y, [])
      map.get(y).push(event)
    }
    return [...map.entries()].sort((a, b) => b[0] - a[0])
  }, [filteredPast])

  return (
    <PageShell
      title="IMTA Events"
      description="Upcoming programmes and a searchable archive of symposia, seminars, webinars, workshops, meetings, and outreach — from 2018 onward."
      className="pb-20"
    >
      <p className="-mt-2 mb-10 max-w-3xl text-sm leading-relaxed text-earth">
        World conference editions with edition numbers, themes, and photo galleries live on the{' '}
        <Link
          to={ROUTES.conferences}
          className="font-medium text-ink underline decoration-gold/50 underline-offset-2 transition-colors hover:text-gold hover:decoration-gold"
        >
          Annual Conferences
        </Link>{' '}
        page.
      </p>

      <ContentSection
        title="Forthcoming events"
        description="Save the date — conferences, webinars, and IMTA community programmes."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {forthcomingEvents.map((event) => (
            <ForthcomingEventCard key={event.title + event.date} event={event} />
          ))}
        </div>
      </ContentSection>

      <ContentSection
        title="Past events archive"
        description="Filter by year and event type, or view all years together."
        className="mt-16"
      >
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setSelectedYear('all')
              setSelectedType('all')
            }}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              selectedYear === 'all'
                ? 'bg-ink text-surface'
                : 'bg-highlight text-earth hover:bg-gold/20',
            )}
          >
            All years
          </button>
          <YearFilter
            years={eventYears}
            selected={selectedYear === 'all' ? null : selectedYear}
            onChange={(y) => {
              setSelectedYear(y)
              setSelectedType('all')
            }}
          />
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          <span className="mr-1 self-center text-xs font-medium uppercase tracking-wider text-earth">
            Type
          </span>
          <button
            type="button"
            onClick={() => setSelectedType('all')}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              selectedType === 'all'
                ? 'bg-gold/25 text-ink ring-1 ring-gold/40'
                : 'bg-highlight text-earth hover:bg-gold/15',
            )}
          >
            All types
          </button>
          {typeOptions.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setSelectedType(t)}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                selectedType === t
                  ? 'bg-gold/25 text-ink ring-1 ring-gold/40'
                  : 'bg-highlight text-earth hover:bg-gold/15',
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <p className="mb-6 text-sm text-earth">
          Showing{' '}
          <span className="font-medium text-ink">
            {filteredPast.length} programme{filteredPast.length !== 1 ? 's' : ''}
          </span>
          {selectedYear !== 'all' ? <> for {selectedYear}</> : null}
          {selectedType !== 'all' ? (
            <>
              {' '}
              · type: <span className="font-medium text-ink">{selectedType}</span>
            </>
          ) : null}
        </p>

        <div className="space-y-10">
          {groupedByYear.map(([year, events]) => (
            <div key={year}>
              {(selectedYear === 'all' || groupedByYear.length > 1) && (
                <h3 className="mb-4 border-b border-border pb-2 text-sm font-semibold text-ink">
                  {year}
                </h3>
              )}
              <div className="space-y-4">
                {events.map((event) => (
                  <EventCard
                    key={`${year}-${event.title}-${event.date}`}
                    event={event}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredPast.length === 0 ? (
          <p className="rounded-2xl border border-border bg-highlight px-5 py-8 text-center text-sm text-earth">
            No events match these filters. Try another year or event type.
          </p>
        ) : null}
      </ContentSection>
    </PageShell>
  )
}
