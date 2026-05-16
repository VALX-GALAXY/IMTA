import { useState } from 'react'
import { AnimatedSearchIcon } from '@/components/ui/animated-search-icon'
import { BrandLogo } from '@/components/layout/BrandLogo'
import { MegaMenu } from '@/components/layout/MegaMenu'
import { IconButton } from '@/components/ui/icon-button'
import { StaggeredMenuIcon } from '@/components/ui/staggered-menu-icon'
import { PillButton } from '@/components/ui/pill-button'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/lib/utils'

export function SiteHeader({ variant = 'hero', className }) {
  const [menuOpen, setMenuOpen] = useState(false)
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
          <PillButton to={ROUTES.introduction} className="hidden sm:inline-flex">
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
