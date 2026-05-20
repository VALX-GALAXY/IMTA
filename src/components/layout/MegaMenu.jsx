import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Sparkles, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthNavLink } from '@/components/layout/AuthNavLink'
import { BrandLogo } from '@/components/layout/BrandLogo'
import { PillButton } from '@/components/ui/pill-button'
import { megaMenuCategories } from '@/config/navigation'
import { ROUTES } from '@/constants/routes'
import { useAuth } from '@/hooks/useAuth'
import { cn } from '@/lib/utils'

export function MegaMenu({ open, onOpenChange }) {
  const { isLoggedIn } = useAuth()
  const [activeId, setActiveId] = useState(megaMenuCategories[0].id)
  const scrollRef = useRef(null)
  const sectionRefs = useRef({})

  const active = megaMenuCategories.find((c) => c.id === activeId) ?? megaMenuCategories[0]

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onOpenChange(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onOpenChange])

  const close = () => onOpenChange(false)

  const scrollToCategory = (id) => {
    setActiveId(id)
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex h-dvh max-h-dvh flex-col overflow-hidden bg-highlight p-3 pt-3 md:h-auto md:max-h-none md:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[2rem] bg-surface shadow-surface-lg md:h-auto md:min-h-[min(92vh,860px)] md:max-h-[min(92vh,860px)] md:rounded-[2.5rem]"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top bar */}
            <div className="flex shrink-0 flex-wrap items-center justify-between gap-4 border-b border-border px-4 py-4 md:px-8 md:py-5">
              <BrandLogo variant="default" className="shrink-0" onClick={close} />

              {megaMenuCategories.length > 1 ? (
                <nav
                  className="order-3 flex w-full gap-x-5 overflow-x-auto overscroll-x-contain pb-1 [-webkit-overflow-scrolling:touch] md:order-none md:w-auto md:flex-1 md:flex-wrap md:justify-center md:overflow-visible md:pb-0"
                  aria-label="Menu categories"
                >
                  {megaMenuCategories.map((cat) => {
                    const isActive = cat.id === activeId
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => scrollToCategory(cat.id)}
                        className={cn(
                          'inline-flex shrink-0 items-center gap-1.5 text-sm font-medium transition-colors',
                          isActive ? 'text-ink' : 'text-earth hover:text-ink',
                        )}
                      >
                        {cat.label}
                        {isActive ? (
                          <Sparkles className="size-3.5 fill-gold text-gold" />
                        ) : null}
                      </button>
                    )
                  })}
                </nav>
              ) : (
                <div className="order-3 hidden md:order-none md:block md:flex-1" aria-hidden />
              )}

              <div className="flex items-center gap-2 md:gap-3">
                <AuthNavLink
                  onNavigate={close}
                  className="inline-flex h-10 items-center rounded-full border border-border px-3 text-xs font-medium text-ink transition-colors hover:bg-highlight sm:h-11 sm:px-4 sm:text-sm"
                />
                {!isLoggedIn ? (
                  <PillButton
                    to={ROUTES.register}
                    showIcon={false}
                    className="h-10 px-3 text-xs sm:h-11 sm:px-5 sm:text-sm"
                    onClick={close}
                  >
                    Register
                  </PillButton>
                ) : null}
                <PillButton
                  to={ROUTES.membership}
                  className="hidden lg:inline-flex"
                  onClick={close}
                >
                  Membership
                </PillButton>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close menu"
                  className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full bg-highlight text-ink transition-colors hover:bg-highlight/80"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden md:flex-row">
              {/* Left feature panel */}
              <div className="relative hidden shrink-0 flex-col justify-center border-r border-gold px-8 py-10 md:flex md:w-[32%] lg:w-[30%] lg:px-10">
                <h2 className="font-sans text-2xl font-bold uppercase leading-tight tracking-tight text-ink lg:text-3xl">
                  {active.headline}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-earth lg:text-base">
                  {active.description}
                </p>
                <Link
                  to={ROUTES.home}
                  onClick={close}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-gold"
                >
                  Homepage
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  to={active.knowMoreHref}
                  onClick={close}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-gold"
                >
                  Know more
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>

              {/* Right — all sections visible, scrollable */}
              <div
                ref={scrollRef}
                data-lenis-prevent
                className="min-h-0 flex-1 touch-pan-y overflow-y-auto overscroll-y-contain px-5 py-6 [-webkit-overflow-scrolling:touch] md:px-8 md:py-8 lg:px-10"
              >
                {/* Mobile active summary */}
                <div className="mb-8 border-b border-border pb-6 md:hidden">
                  <h2 className="font-sans text-xl font-bold uppercase text-ink">
                    {active.headline}
                  </h2>
                  <p className="mt-2 text-sm text-earth">{active.description}</p>
                </div>

                <div className="space-y-10">
                  {megaMenuCategories.map((category) => (
                    <section
                      key={category.id}
                      ref={(el) => {
                        sectionRefs.current[category.id] = el
                      }}
                      className="scroll-mt-4"
                    >
                      <h3 className="mb-5 border-b border-border pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        {category.label}
                      </h3>
                      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                        {category.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              to={link.href}
                              onClick={close}
                              className="group block rounded-xl p-3 transition-colors hover:bg-highlight"
                            >
                              <span className="inline-flex items-center gap-1 text-base font-semibold text-ink transition-colors group-hover:text-gold">
                                {link.title}
                                <span className="text-earth transition-transform group-hover:translate-x-0.5 group-hover:text-gold">
                                  ›
                                </span>
                              </span>
                              <p className="mt-1.5 text-sm leading-relaxed text-earth">
                                {link.description}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
