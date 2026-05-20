import { motion } from 'framer-motion'
import { Megaphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { getLatestAnnouncement } from '@/data/announcements'

export function HomeAnnouncementStrip() {
  const latest = getLatestAnnouncement()
  if (!latest) return null

  return (
    <section className="border-y border-border bg-surface py-4 md:py-5">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 md:flex-row md:items-center md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/25">
            <Megaphone className="size-5" aria-hidden />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">Latest</p>
            <p className="text-sm font-medium text-ink md:text-base">{latest.title}</p>
            <p className="mt-0.5 line-clamp-2 text-xs text-earth md:text-sm">{latest.description}</p>
          </div>
        </motion.div>
        <Button
          asChild
          variant="outline"
          className="shrink-0 border-gold/40 transition-all hover:border-gold hover:bg-gold/10"
        >
          <Link to={latest.href}>Read announcement</Link>
        </Button>
      </div>
    </section>
  )
}
