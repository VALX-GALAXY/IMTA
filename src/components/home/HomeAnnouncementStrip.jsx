import { motion } from 'framer-motion'
import { Megaphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { SectionDivider } from '@/components/home/HomeMusicDecor'
import { getLatestAnnouncement } from '@/data/announcements'

export function HomeAnnouncementStrip() {
  const latest = getLatestAnnouncement()
  if (!latest) return null

  return (
    <section className="relative border-y border-gold/20 bg-gradient-to-r from-highlight via-surface to-highlight py-5 md:py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 md:flex-row md:items-center md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/25 to-imta-indigo/15 text-gold shadow-surface ring-1 ring-gold/30">
            <Megaphone className="size-5" aria-hidden />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Now playing</p>
            <p className="font-serif text-base font-medium text-ink md:text-lg">{latest.title}</p>
            <p className="mt-0.5 line-clamp-2 text-xs text-earth md:text-sm">{latest.description}</p>
          </div>
        </motion.div>
        <Button
          asChild
          className="shrink-0 bg-ink text-canvas shadow-surface hover:bg-ink/90"
        >
          <Link to={latest.href}>Read announcement</Link>
        </Button>
      </div>
      <SectionDivider className="mx-auto mt-4 max-w-lg opacity-60" />
    </section>
  )
}
