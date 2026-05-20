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
import { ROUTES } from '@/constants/routes'
import { cn } from '@/lib/utils'

const links = [
  {
    title: 'National Awards',
    description: 'Honouring excellence in practice, research, and education.',
    href: ROUTES.awardWinners,
    icon: Trophy,
  },
  {
    title: 'Conferences',
    description: 'World conference archive — editions, themes, and highlights.',
    href: ROUTES.conferences,
    icon: CalendarDays,
  },
  {
    title: 'IMTA Events',
    description: 'Webinars, symposia, workshops, and outreach by year.',
    href: ROUTES.events,
    icon: Newspaper,
  },
  {
    title: 'E-Magazine',
    description: 'Stories, research highlights, and community updates.',
    href: ROUTES.eMagazine,
    icon: BookOpen,
  },
  {
    title: 'Membership',
    description: 'Benefits, fees, bank details, and how to apply.',
    href: ROUTES.membership,
    icon: Users,
  },
]

export function QuickLinksSection() {
  return (
    <section className="bg-canvas py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Explore</p>
          <h2 className="mt-3 text-2xl font-semibold text-ink md:text-3xl">Programmes & resources</h2>
          <p className="mt-3 text-sm leading-relaxed text-earth md:text-base">
            Jump to the sections members and visitors use most — same navigation as the rest of the site.
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
                    'group flex h-full flex-col rounded-2xl border border-border/90 bg-surface p-5 shadow-surface',
                    'transition-all duration-300 hover:-translate-y-1 hover:border-gold/35 hover:shadow-surface-lg',
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-colors group-hover:bg-gold/15">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <ArrowUpRight className="size-5 shrink-0 text-earth transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-earth">{item.description}</p>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
