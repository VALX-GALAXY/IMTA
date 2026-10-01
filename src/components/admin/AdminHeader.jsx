import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AdminHeader({ email, onLogout }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-surface px-4 py-4 md:px-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Admin</p>
        <h1 className="mt-1 font-sans text-xl font-semibold text-ink">Control Center</h1>
      </div>

      <div className="flex items-center gap-3">
        {email ? (
          <span className="hidden text-sm text-earth sm:inline">{email}</span>
        ) : null}
        <Button variant="outline" size="sm" onClick={onLogout} className="gap-2">
          <LogOut className="size-4" aria-hidden />
          Logout
        </Button>
      </div>
    </header>
  )
}
