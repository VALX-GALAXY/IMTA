import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/routes'

export function IntroSection() {
  return (
    <section className="bg-highlight py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
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
            IMTA connects clinicians, educators, and researchers through accredited
            programs, national recognition, and a growing community dedicated to
            healing through music.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link to={ROUTES.introduction}>About IMTA</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to={ROUTES.awardWinners}>View Awards</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { label: 'Members', value: '2,400+' },
            { label: 'Annual conference', value: '15th edition' },
            { label: 'Award categories', value: '12' },
            { label: 'Partner institutions', value: '80+' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-surface p-5 shadow-surface"
            >
              <p className="text-2xl font-semibold text-ink">{stat.value}</p>
              <p className="mt-1 text-sm text-earth">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
