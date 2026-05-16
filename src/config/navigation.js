import { pages } from '@/config/pages'
import { ROUTES } from '@/constants/routes'

const categoryMeta = {
  about: {
    label: 'About',
    headline: 'About IMTA',
    description:
      'Learn about the Indian Music Therapy Association — our story, governance, members, and partners advancing healing through music.',
    knowMoreHref: ROUTES.introduction,
  },
  programs: {
    label: 'Programs',
    headline: 'Programs & Courses',
    description:
      'Professional pathways from beginner online learning to postgraduate diploma — plus national award announcements.',
    knowMoreHref: ROUTES.distanceLearning,
  },
  'awards-events': {
    label: 'Awards & Events',
    headline: 'Awards & Events',
    description:
      'Celebrate excellence, explore past conferences, and browse symposia, seminars, webinars, and workshops.',
    knowMoreHref: ROUTES.awardWinners,
  },
  publications: {
    label: 'Publications',
    headline: 'Publications & Reports',
    description:
      'E-magazine, bookshelf, financial statements, activity reports, and featured AGM documents.',
    knowMoreHref: ROUTES.eMagazine,
  },
}

/** Mega-menu categories — every inner page listed */
export const megaMenuCategories = Object.entries(categoryMeta).map(
  ([id, meta]) => ({
    id,
    ...meta,
    links: pages
      .filter((p) => p.category === id)
      .map((p) => ({
        title: p.title,
        href: p.path,
        description: p.note ?? p.description,
      })),
  }),
)

/** Flat footer / quick links */
export const footerColumns = [
  {
    title: 'About',
    links: [
      { label: 'Introduction', href: ROUTES.introduction },
      { label: 'What is Music Therapy', href: ROUTES.whatIsMusicTherapy },
      { label: 'Core Group', href: ROUTES.coreGroup },
      { label: 'Contact', href: ROUTES.contact },
    ],
  },
  {
    title: 'Membership',
    links: [
      { label: 'PG Diploma', href: ROUTES.distanceLearning },
      { label: 'Online Programme', href: ROUTES.onlineProgramme },
      { label: 'Award Announcement 2026', href: ROUTES.awardAnnouncement2026 },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'E-Magazine', href: ROUTES.eMagazine },
      { label: 'Award Winners', href: ROUTES.awardWinners },
      { label: 'Conferences', href: ROUTES.conferences },
    ],
  },
]
