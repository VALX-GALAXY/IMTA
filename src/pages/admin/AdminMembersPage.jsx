import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { MEMBERSHIP_OPTIONS } from '@/constants/membership'
import { ApiRequestError, fetchAdminMembers } from '@/lib/adminApi'
import { cn } from '@/lib/utils'

function membershipLabel(type) {
  return MEMBERSHIP_OPTIONS.find((o) => o.id === type)?.label || type
}

function formatDate(value) {
  if (!value) return '—'
  return new Date(value).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function TableSkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="h-10 rounded-lg bg-highlight" />
      ))}
    </div>
  )
}

export function AdminMembersPage() {
  const [members, setMembers] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [search, setSearch] = useState('')
  const [membershipType, setMembershipType] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const loadMembers = useCallback(async () => {
    setIsLoading(true)
    try {
      const payload = await fetchAdminMembers({
        page,
        limit: 10,
        search: search.trim() || undefined,
        membershipType: membershipType || undefined,
      })
      setMembers(payload.data.members)
      setTotal(payload.data.total)
      setTotalPages(payload.data.totalPages)
    } catch (err) {
      toast.error(err instanceof ApiRequestError ? err.message : 'Failed to load members.')
    } finally {
      setIsLoading(false)
    }
  }, [page, search, membershipType])

  useEffect(() => {
    const timer = setTimeout(() => {
      loadMembers()
    }, 300)
    return () => clearTimeout(timer)
  }, [loadMembers])

  useEffect(() => {
    setPage(1)
  }, [search, membershipType])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-sans text-2xl font-semibold text-ink">Members</h2>
        <p className="mt-1 text-sm text-earth">
          Manage membership form submissions. {total > 0 ? `${total} total` : ''}
        </p>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-4 shadow-surface sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-earth" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or email…"
            className="w-full rounded-xl border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-ink outline-none transition-colors placeholder:text-earth/60 focus:border-gold focus:ring-2 focus:ring-gold/20"
          />
        </div>

        <select
          value={membershipType}
          onChange={(e) => setMembershipType(e.target.value)}
          className="rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-ink outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
        >
          <option value="">All types</option>
          {MEMBERSHIP_OPTIONS.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <section className="rounded-2xl border border-border bg-surface p-6 shadow-surface">
        <div className="overflow-x-auto">
          {isLoading ? (
            <TableSkeleton />
          ) : members.length ? (
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-earth">
                  <th className="px-3 py-3 font-medium">Name</th>
                  <th className="px-3 py-3 font-medium">Email</th>
                  <th className="px-3 py-3 font-medium">Mobile</th>
                  <th className="px-3 py-3 font-medium">Membership Type</th>
                  <th className="px-3 py-3 font-medium">Created Date</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr
                    key={member.id || member._id}
                    className={cn('border-b border-border/60 last:border-0')}
                  >
                    <td className="px-3 py-3 font-medium text-ink">{member.fullName}</td>
                    <td className="px-3 py-3 text-earth">{member.email}</td>
                    <td className="px-3 py-3 text-earth">{member.mobile}</td>
                    <td className="px-3 py-3 text-earth">
                      {membershipLabel(member.membershipRole)}
                    </td>
                    <td className="px-3 py-3 text-earth">{formatDate(member.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="rounded-xl border border-border bg-highlight px-5 py-8 text-center text-sm text-earth">
              No members found matching your filters.
            </div>
          )}
        </div>

        {!isLoading && totalPages > 1 ? (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-earth">
              Page {page} of {totalPages}
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="gap-1"
              >
                <ChevronLeft className="size-4" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="gap-1"
              >
                Next
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  )
}
