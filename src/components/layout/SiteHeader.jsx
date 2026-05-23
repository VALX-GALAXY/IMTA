import { useState } from 'react'
import { AnimatedSearchIcon } from '@/components/ui/animated-search-icon'
import { AuthNavLink } from '@/components/layout/AuthNavLink'
import { BrandLogo } from '@/components/layout/BrandLogo'
import { MegaMenu } from '@/components/layout/MegaMenu'
import { IconButton } from '@/components/ui/icon-button'
import { StaggeredMenuIcon } from '@/components/ui/staggered-menu-icon'
import { PillButton } from '@/components/ui/pill-button'
import { ROUTES } from '@/constants/routes'
import { useAuth } from '@/hooks/useAuth'
import { cn } from '@/lib/utils'

export function SiteHeader({ variant = 'hero', className }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isLoggedIn } = useAuth()
  const isHero = variant === 'hero'

  return (
    <>
      <header
        className={cn(
          'flex items-center justify-between gap-4',
          isHero
            ? 'absolute inset-x-0 top-0 z-30 px-4 pt-4 md:px-8 md:pt-6'
            : 'relative border-b border-border bg-surface px-4 py-4 md:px-6',
          className,
        )}
      >
        <BrandLogo variant={isHero ? 'hero' : 'default'} />

        <div className="flex items-center gap-2 md:gap-3">
          <AuthNavLink
            className={cn(
              'inline-flex h-10 items-center rounded-full px-3 text-xs font-medium transition-colors sm:h-11 sm:px-4 sm:text-sm',
              isHero
                ? 'bg-surface text-ink shadow-surface hover:bg-canvas'
                : 'border border-border text-ink hover:bg-highlight',
            )}
          />
          {!isLoggedIn ? (
            <PillButton
              to={ROUTES.register}
              showIcon={false}
              className="h-10 px-3 text-xs sm:h-11 sm:px-5 sm:text-sm"
            >
              Apply for Membership
            </PillButton>
          ) : null}
          <PillButton to={ROUTES.membership} className="hidden lg:inline-flex">
            Membership
          </PillButton>
          <IconButton aria-label="Search" className="group/search">
            <AnimatedSearchIcon />
          </IconButton>
          <IconButton
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="group/menu"
            onClick={() => setMenuOpen(true)}
          >
            <StaggeredMenuIcon />
          </IconButton>
        </div>
      </header>

      <MegaMenu open={menuOpen} onOpenChange={setMenuOpen} />
    </>
  )
}
