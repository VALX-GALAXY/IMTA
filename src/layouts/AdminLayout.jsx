import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { toast } from 'sonner'
import { AdminHeader } from '@/components/admin/AdminHeader'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { ROUTES } from '@/constants/routes'
import { useAdminAuth } from '@/hooks/useAdminAuth'

export function AdminLayout() {
  const navigate = useNavigate()
  const { admin, logout } = useAdminAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  function handleLogout() {
    logout()
    toast.success('Signed out successfully')
    navigate(ROUTES.adminLogin, { replace: true })
  }

  return (
    <div className="flex min-h-screen flex-col bg-canvas md:flex-row">
      <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3 md:hidden">
        <p className="font-sans text-base font-semibold text-ink">IMTA Admin</p>
        <button
          type="button"
          onClick={() => setSidebarOpen((open) => !open)}
          className="rounded-lg p-2 text-ink hover:bg-highlight"
          aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
        >
          {sidebarOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block`}>
        <AdminSidebar onLogout={handleLogout} />
      </div>

      <div className="flex min-h-screen flex-1 flex-col">
        <AdminHeader email={admin?.email} onLogout={handleLogout} />
        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
