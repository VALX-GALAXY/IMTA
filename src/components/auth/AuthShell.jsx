import { motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrandLogo } from '@/components/layout/BrandLogo'
import { PillButton } from '@/components/ui/pill-button'
import { ROUTES } from '@/constants/routes'

const ease = [0.22, 1, 0.36, 1]

export function AuthShell({
  activeTab,
  headline,
  description,
  children,
  footer,
  sideContent,
}) {
  const navigate = useNavigate()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') navigate('/')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  const shellMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.25 },
      }

  const panelMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.35, ease },
      }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex h-dvh max-h-dvh flex-col overflow-hidden bg-highlight p-3 pt-3 md:h-auto md:max-h-none md:min-h-screen md:p-4"
      {...shellMotion}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={activeTab === 'login' ? 'Login' : 'register'}
        className="relative mx-auto flex h-full min-h-0 w-full max-w-[1400px] flex-col overflow-hidden rounded-[2rem] bg-surface shadow-surface-lg md:h-auto md:min-h-[min(92vh,860px)] md:max-h-[min(92vh,860px)] md:rounded-[2.5rem]"
        {...panelMotion}
      >
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-border px-4 py-4 md:px-8 md:py-5">
          <BrandLogo variant="default" className="shrink-0" />

          <div className="flex items-center gap-2 md:gap-3">
            <PillButton to={ROUTES.membership} className="hidden lg:inline-flex">
              Membership
            </PillButton>
            <button
              type="button"
              onClick={() => navigate('/')}
              aria-label="Close and return home"
              className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full bg-highlight text-ink transition-colors hover:bg-highlight/80"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden md:flex-row">
          <div className="relative hidden shrink-0 flex-col justify-center border-r border-gold px-8 py-10 md:flex md:w-[32%] lg:w-[30%] lg:px-10">
            <h2 className="font-sans text-2xl font-bold uppercase leading-tight tracking-tight text-ink lg:text-3xl">
              {headline}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-earth lg:text-base">{description}</p>
            {sideContent}
          </div>

          <div
            data-lenis-prevent
            className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-y-contain [-webkit-overflow-scrolling:touch]"
          >
            <div className="mb-6 border-b border-border px-5 py-6 md:hidden">
              <h2 className="font-sans text-xl font-bold uppercase text-ink">{headline}</h2>
              <p className="mt-2 text-sm text-earth">{description}</p>
            </div>

            <div className="flex-1 px-5 py-6 md:px-8 md:py-8 lg:px-10">{children}</div>

            {footer ? (
              <div className="shrink-0 border-t border-border px-5 py-4 md:px-8 lg:px-10">
                {footer}
              </div>
            ) : null}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
