import { motion } from 'framer-motion'
import { SectionDivider } from '@/components/home/HomeMusicDecor'

export function HomeManifesto() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-canvas via-highlight/80 to-canvas py-14 md:py-20">
      <div className="home-manifesto-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-gold"
        >
          Art &amp; Music · Healing · Community
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-4 font-serif text-[clamp(1.75rem,4.5vw,2.75rem)] font-medium leading-snug text-ink"
        >
          Where melody meets medicine, and every note carries care.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-earth md:text-lg"
        >
          The Indian Music Therapy Association welcomes you into a living gallery of sound — conferences,
          awards, learning, and stories shaped by raga, rhythm, and human connection.
        </motion.p>

        <SectionDivider className="mx-auto mt-8 max-w-md" />
      </div>
    </section>
  )
}
