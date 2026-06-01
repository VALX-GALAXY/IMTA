import { useMemo, useState } from 'react'
import { Building2, Globe2, Handshake, MapPin, Search } from 'lucide-react'
import { PageShell } from '@/components/layout/PageShell'
import {
  collaboratingInstitutions,
  collaboratingInstitutionsIntro,
} from '@/data/collaboratingInstitutions'
import { cn } from '@/lib/utils'

function InstitutionCard({ name, location }) {
  return (
    <article className="group relative flex h-full gap-3 overflow-hidden rounded-2xl border border-border bg-surface p-4 shadow-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-highlight hover:shadow-surface-lg">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
      <span
        className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/20 transition-all duration-300 group-hover:bg-gold/25 group-hover:ring-gold/35"
        aria-hidden
      >
        <Building2 className="size-5" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold leading-snug text-ink md:text-[0.95rem]">{name}</h3>
        {location ? (
          <p className="mt-1.5 inline-flex items-center gap-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-earth">
            <MapPin className="size-3 shrink-0 text-gold/80" aria-hidden />
            {location}
          </p>
        ) : null}
      </div>
    </article>
  )
}

export function CollaboratingInstitutionsPage() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return collaboratingInstitutions
    return collaboratingInstitutions.filter(
      (inst) =>
        inst.name.toLowerCase().includes(q) ||
        inst.location?.toLowerCase().includes(q),
    )
  }, [query])

  const withLocation = collaboratingInstitutions.filter((i) => i.location).length

  return (
    <PageShell
      title="Collaborating Institutions & Universities"
      description="Hospitals, universities, cultural centres, and professional bodies across India and the world that have partnered with IMTA on music therapy initiatives and conferences."
      className="pb-20"
    >
      <div className="relative mb-10 overflow-hidden rounded-[1.5rem] border border-gold/25 bg-linear-to-br from-highlight via-surface to-gold/10 p-6 shadow-surface md:p-8">
        <div
          className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-gold/15 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-10 size-40 rounded-full bg-highlight blur-2xl"
          aria-hidden
        />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
              <Handshake className="size-6" aria-hidden />
            </span>
            <div className="space-y-2">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold">
                Past initiatives &amp; conferences
              </p>
              <p className="text-base font-medium leading-relaxed text-ink md:text-lg">
                {collaboratingInstitutionsIntro}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 lg:flex-col lg:items-end">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-surface/90 px-4 py-2 text-xs font-semibold text-ink shadow-surface backdrop-blur-sm">
              <Globe2 className="size-4 text-gold" aria-hidden />
              {collaboratingInstitutions.length} global partners
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-xs font-medium text-earth">
              {withLocation} with listed locations
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-earth">
          Showing {filtered.length} institution{filtered.length !== 1 ? 's' : ''}
        </p>
        <label className="relative w-full sm:max-w-sm">
          <span className="sr-only">Search collaborating institutions</span>
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-earth/70"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or location…"
            className="w-full rounded-xl border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-ink shadow-sm outline-none transition-shadow focus:border-gold focus:ring-2 focus:ring-gold/20"
          />
        </label>
      </div>

      <ul
        className={cn(
          'grid gap-3 sm:grid-cols-2 lg:grid-cols-3',
          filtered.length === 0 && 'hidden',
        )}
      >
        {filtered.map((inst) => (
          <li key={inst.name}>
            <InstitutionCard {...inst} />
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-border bg-highlight px-5 py-8 text-center text-sm text-earth">
          No institutions match your search.
        </p>
      ) : null}
    </PageShell>
  )
}
