import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/routes'
import { getHomeStats } from '@/lib/homeStats'
import { cn } from '@/lib/utils'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

function StatCard({ stat }) {
  return (
    <motion.div variants={item}>
      <Link
        to={stat.href}
        className={cn(
          'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface p-5 shadow-surface outline-none',
          'transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-surface-lg',
          'focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-highlight',
        )}
      >
        <div className="flex items-start justify-between gap-2">
          <p className="text-2xl font-semibold tracking-tight text-ink md:text-[1.65rem]">
            {stat.value}
          </p>
          <ArrowUpRight
            className="size-5 shrink-0 text-gold opacity-70 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
            aria-hidden
          />
        </div>
        <p className="mt-2 text-sm font-medium text-ink">{stat.label}</p>
        {stat.hint ? <p className="mt-1 text-xs text-earth">{stat.hint}</p> : null}
      </Link>
    </motion.div>
  )
}

export function IntroSection() {
  const stats = getHomeStats()

  return (
    <section className="bg-highlight py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-14 md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            Indian Music Therapy Association
          </p>
          <h2 className="mt-3 font-sans text-3xl font-semibold text-ink md:text-4xl">
            Advancing evidence-based music therapy across India
          </h2>
          <p className="mt-4 text-base leading-relaxed text-earth">
            IMTA connects clinicians, educators, and researchers through accredited programmes,
            national recognition, and a growing community dedicated to healing through music.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              className="shadow-sm transition-transform hover:translate-y-px active:translate-y-0"
            >
              <Link to={ROUTES.introduction}>About IMTA</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-border bg-surface/80 shadow-sm transition-all hover:border-gold/50 hover:bg-surface"
            >
              <Link to={ROUTES.awardWinners}>View Awards</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={container}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
