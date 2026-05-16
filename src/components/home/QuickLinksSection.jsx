import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/lib/utils'

const links = [
  {
    title: 'National Awards',
    description: 'Honouring excellence in practice, research, and education.',
    href: ROUTES.awardWinners,
  },
  {
    title: 'Conferences',
    description: 'Workshops, keynotes, and collaborative learning nationwide.',
    href: ROUTES.conferences,
  },
  {
    title: 'E-Magazine',
    description: 'Stories, research highlights, and community updates.',
    href: ROUTES.eMagazine,
  },
]

export function QuickLinksSection() {
  return (
    <section className="bg-canvas py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-semibold text-ink md:text-3xl"
        >
          Explore IMTA
        </motion.h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {links.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={item.href}
                className={cn(
                  'group flex h-full flex-col rounded-2xl bg-surface p-6 shadow-surface transition-shadow hover:shadow-surface-lg',
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <ArrowUpRight className="size-5 shrink-0 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-earth">
                  {item.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
