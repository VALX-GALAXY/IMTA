import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Newspaper,
  Trophy,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { GradientOrbs, SectionDivider } from '@/components/home/HomeMusicDecor'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/lib/utils'

const links = [
  {
    title: 'National Awards',
    description: 'Honouring excellence in practice, research, and education.',
    href: ROUTES.awardWinners,
    icon: Trophy,
    gradient: 'from-gold/20 via-highlight to-surface',
  },
  {
    title: 'World Music Therapy Conferences',
    description: '9th edition, Trivandrum 2026 — preview video and past editions.',
    href: ROUTES.conferences,
    icon: CalendarDays,
    gradient: 'from-imta-indigo/15 via-highlight to-surface',
  },
  {
    title: 'IMTA Events',
    description: 'Webinars, symposia, workshops, and outreach by year.',
    href: ROUTES.events,
    icon: Newspaper,
    gradient: 'from-gold/15 via-surface to-highlight',
  },
  {
    title: 'E-Magazine',
    description: 'Stories, research highlights, and community updates.',
    href: ROUTES.eMagazine,
    icon: BookOpen,
    gradient: 'from-highlight via-gold/10 to-surface',
  },
  {
    title: 'Membership',
    description: 'Benefits, fees, bank details, and how to apply.',
    href: ROUTES.membership,
    icon: Users,
    gradient: 'from-imta-indigo/10 via-highlight to-surface',
  },
]

export function QuickLinksSection() {
  return (
    <section className="relative overflow-hidden bg-canvas py-16 md:py-24">
      <GradientOrbs className="opacity-30" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Explore the gallery
          </p>
          <h2 className="mt-3 font-serif text-2xl font-medium text-ink md:text-3xl">
            Programmes &amp; resources
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-earth md:text-base">
            Five doorways into the world of music therapy - awards, conferences, learning, stories,
            and membership.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {links.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={item.href}
                  className={cn(
                    'home-link-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 p-5 shadow-surface',
                    'bg-gradient-to-br',
                    item.gradient,
                    'transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-surface-lg',
                  )}
                >
                  <div
                    className="pointer-events-none absolute -bottom-2 -right-1 font-serif text-6xl text-gold/[0.07] transition-all group-hover:text-gold/[0.12]"
                    aria-hidden
                  >
                    ♫
                  </div>
                  <div className="relative flex items-start justify-between gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-surface/80 text-gold shadow-sm ring-1 ring-gold/25 backdrop-blur-sm transition-colors group-hover:bg-gold/15">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <ArrowUpRight className="size-5 shrink-0 text-earth transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                  </div>
                  <h3 className="relative mt-4 text-base font-semibold text-ink">{item.title}</h3>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-earth">
                    {item.description}
                  </p>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <SectionDivider className="mx-auto mt-14 max-w-lg" />
      </div>
    </section>
  )
}
