import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteBackgroundAudio } from '@/components/layout/SiteBackgroundAudio'
import { pages } from '@/config/pages'
import { MainLayout } from '@/layouts/MainLayout'
import { LenisProvider } from '@/providers/LenisProvider'
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
