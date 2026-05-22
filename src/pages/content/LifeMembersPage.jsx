import { useMemo, useState } from 'react'
import { PageShell } from '@/components/layout/PageShell'
import { ProfileCard } from '@/components/content/ProfileCard'
import { lifeMembers } from '@/data/lifeMembers'

export function LifeMembersPage() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return lifeMembers
    return lifeMembers.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.location.toLowerCase().includes(q) ||
        m.membershipId.toLowerCase().includes(q) ||
        m.title?.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <PageShell
      title="IMTA Life Members"
      description="Directory of IMTA life members — practitioners and scholars advancing music therapy across India."
      className="pb-20"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-earth">
          Showing {filtered.length} member{filtered.length !== 1 ? 's' : ''}
        </p>
        <label className="relative w-full sm:max-w-xs">
          <span className="sr-only">Search life members</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, city, or ID…"
            className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-ink shadow-sm outline-none transition-shadow focus:border-gold focus:ring-2 focus:ring-gold/20"
          />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((member) => (
          <ProfileCard key={member.membershipId + member.name} {...member} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-border bg-highlight px-5 py-8 text-center text-sm text-earth">
          No members match your search.
        </p>
      ) : null}
    </PageShell>
  )
}
