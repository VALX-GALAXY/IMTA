import { useEffect, useState } from 'react'
import { CalendarDays, CalendarRange, Users, PieChart } from 'lucide-react'
import { toast } from 'sonner'
import { AdminStatCard, AdminStatCardSkeleton } from '@/components/admin/AdminStatCard'
import { MEMBERSHIP_OPTIONS } from '@/constants/membership'
import { ApiRequestError, fetchAdminDashboard } from '@/lib/adminApi'
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
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="h-10 rounded-lg bg-highlight" />
      ))}
    </div>
  )
}

export function AdminDashboardPage() {
  const [stats, setStats] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setIsLoading(true)
      try {
        const payload = await fetchAdminDashboard()
        if (!cancelled) {
          setStats(payload.data)
        }
      } catch (err) {
        if (!cancelled) {
          toast.error(
            err instanceof ApiRequestError ? err.message : 'Failed to load dashboard data.',
          )
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false)
        }
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-sans text-2xl font-semibold text-ink">Dashboard</h2>
        <p className="mt-1 text-sm text-earth">Overview of membership registrations.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, i) => <AdminStatCardSkeleton key={i} />)
        ) : (
          <>
            <AdminStatCard
              title="Total Members"
              value={stats?.totalMembers ?? 0}
              description="All registrations"
              icon={Users}
            />
            <AdminStatCard
              title="Today's Registrations"
              value={stats?.membersRegisteredToday ?? 0}
              description="Since midnight"
              icon={CalendarDays}
            />
            <AdminStatCard
              title="This Month"
              value={stats?.membersRegisteredThisMonth ?? 0}
              description="Current calendar month"
              icon={CalendarRange}
            />
            <AdminStatCard
              title="Membership Types"
              value={stats?.membershipTypeStats?.length ?? 0}
              description="Active categories"
              icon={PieChart}
            />
          </>
        )}
      </div>

      {!isLoading && stats?.membershipTypeStats?.length ? (
        <section className="rounded-2xl border border-border bg-surface p-6 shadow-surface">
          <h3 className="border-l-4 border-gold pl-4 font-sans text-lg font-semibold text-ink">
            Membership Types
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.membershipTypeStats.map((item) => (
              <div
                key={item.membershipType}
                className="rounded-xl border border-border bg-highlight/40 px-4 py-3"
              >
                <p className="text-sm text-earth">{membershipLabel(item.membershipType)}</p>
                <p className="mt-1 font-sans text-2xl font-semibold text-ink">{item.count}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="rounded-2xl border border-border bg-surface p-6 shadow-surface">
        <h3 className="border-l-4 border-gold pl-4 font-sans text-lg font-semibold text-ink">
          Recent Registrations
        </h3>

        <div className="mt-6 overflow-x-auto">
          {isLoading ? (
            <TableSkeleton />
          ) : stats?.recentMembers?.length ? (
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-earth">
                  <th className="px-3 py-3 font-medium">Name</th>
                  <th className="px-3 py-3 font-medium">Email</th>
                  <th className="px-3 py-3 font-medium">Mobile</th>
                  <th className="px-3 py-3 font-medium">Type</th>
                  <th className="px-3 py-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentMembers.map((member) => (
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
              No registrations yet.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
