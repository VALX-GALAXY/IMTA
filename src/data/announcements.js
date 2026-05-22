import { ROUTES } from '@/constants/routes'
import { publicAsset } from '@/lib/publicAsset'

/**
 * Site announcements — list with newest first. The hero carousel uses index 0 as “latest”.
 * Add new rows at the top when you publish a new announcement.
 */
export const announcements = [
  {
    id: 'world-conference-2026',
    title: '9th World Music Therapy Conference',
    description: 'Trivandrum, Kerala — December 4–6, 2026. Poster from 1 July 2026.',
    image: publicAsset('WORLD MUSIC THERAPY CONFERENC.jpeg'),
    href: ROUTES.conferences,
  },
  {
    id: 'award-announcement-2026',
    title: 'Award Announcement 2026',
    description: 'Categories, timelines, and nomination guidance for national awards.',
    image: publicAsset('ANNOUNCEMENT.jpeg'),
    href: ROUTES.awardAnnouncement2026,
  },
]

/** Latest announcement for hero / promos (first entry). */
export function getLatestAnnouncement() {
  return announcements[0] ?? null
}
