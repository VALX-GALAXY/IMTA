import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminRouteGuard } from '@/components/admin/AdminRouteGuard'
import { SiteBackgroundAudio } from '@/components/layout/SiteBackgroundAudio'
import { pages } from '@/config/pages'
import { AdminLayout } from '@/layouts/AdminLayout'
import { MainLayout } from '@/layouts/MainLayout'
import { LenisProvider } from '@/providers/LenisProvider'
import { AdminDashboardPage } from '@/pages/admin/AdminDashboardPage'
import { AdminLoginPage } from '@/pages/admin/AdminLoginPage'
import { AdminMembersPage } from '@/pages/admin/AdminMembersPage'
import { ContentPage } from '@/pages/ContentPage'
import { HomePage } from '@/pages/HomePage'
import { LoginPage } from '@/pages/LoginPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { RegisterPage } from '@/pages/RegisterPage'

const contentRoutes = pages.filter((p) => p.path !== '/' && p.layout !== 'home')

export function AppRouter() {
  return (
    <BrowserRouter>
      <SiteBackgroundAudio />
      <LenisProvider>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="admin/login" element={<AdminLoginPage />} />
          <Route path="admin" element={<AdminRouteGuard />}>
            <Route element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboardPage />} />
              <Route path="members" element={<AdminMembersPage />} />
            </Route>
          </Route>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            {contentRoutes.map((page) => (
              <Route
                key={page.id}
                path={page.path.replace(/^\//, '')}
                element={<ContentPage />}
              />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </LenisProvider>
    </BrowserRouter>
  )
}
