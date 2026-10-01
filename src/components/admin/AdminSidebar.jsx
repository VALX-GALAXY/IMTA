import { LayoutDashboard, Users, LogOut } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/lib/utils'

const navItems = [
  { to: ROUTES.adminDashboard, label: 'Dashboard', icon: LayoutDashboard },
  { to: ROUTES.adminMembers, label: 'Members', icon: Users },
]

export function AdminSidebar({ onLogout, className }) {
  return (
    <aside
      className={cn(
        'flex w-full flex-col border-r border-border bg-surface md:w-64 md:min-h-screen',
        className,
      )}
    >
      <div className="border-b border-border px-5 py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">IMTA</p>
        <p className="mt-1 font-sans text-lg font-semibold text-ink">Admin Panel</p>
      </div>

      <nav className="flex flex-1 flex-col gap-1 p-4">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-highlight text-ink'
                  : 'text-earth hover:bg-highlight/60 hover:text-ink',
              )
            }
          >
            <Icon className="size-4 shrink-0" aria-hidden />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-border p-4">
        <button
          type="button"
          onClick={onLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-earth transition-colors hover:bg-highlight/60 hover:text-ink"
        >
          <LogOut className="size-4 shrink-0" aria-hidden />
          Logout
        </button>
      </div>
    </aside>
  )
}
