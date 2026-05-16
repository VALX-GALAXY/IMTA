import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { pages } from '@/config/pages'
import { MainLayout } from '@/layouts/MainLayout'
import { LenisProvider } from '@/providers/LenisProvider'
import { ContentPage } from '@/pages/ContentPage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'

const contentRoutes = pages.filter((p) => p.path !== '/' && p.layout !== 'home')

export function AppRouter() {
  return (
    <BrowserRouter>
      <LenisProvider>
        <Routes>
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
