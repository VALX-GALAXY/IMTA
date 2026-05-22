import { ROUTES } from '@/constants/routes'
import { awardCategories } from '@/data/awards'
import { conferences } from '@/data/conferences'
import { eventsByYear } from '@/data/events'
import { lifeMembers } from '@/data/lifeMembers'

function editionOrdinal(n) {
  const j = n % 10
  const k = n % 100
  if (k >= 11 && k <= 13) return `${n}th`
  switch (j) {
    case 1:
      return `${n}st`
    case 2:
      return `${n}nd`
    case 3:
      return `${n}rd`
    default:
      return `${n}th`
  }
}

/**
 * Homepage metrics derived from the same data modules as the rest of the site
 * (no placeholder “2,400+” style numbers).
 */
export function getHomeStats() {
  const maxConferenceEdition = Math.max(0, ...conferences.map((c) => c.edition))
  const totalArchivedEvents = eventsByYear.reduce((sum, y) => sum + y.events.length, 0)
  const lifeMemberCount = lifeMembers.length
  const awardProgrammeCount = awardCategories.length

  return [
    {
      id: 'life-members',
      value: String(lifeMemberCount),
      label: 'Life members in directory',
      hint: 'Searchable profiles',
      href: ROUTES.lifeMembers,
    },
    {
      id: 'conference-edition',
      value: maxConferenceEdition ? `${editionOrdinal(maxConferenceEdition)}` : '—',
      label: 'Latest World Music Therapy Conference edition',
      hint: 'Conference archive on site',
      href: ROUTES.conferences,
    },
    {
      id: 'awards',
      value: String(awardProgrammeCount),
      label: 'National award programmes',
      hint: 'Instituted by IMTA',
      href: ROUTES.awardWinners,
    },
    {
      id: 'events',
      value: String(totalArchivedEvents),
      label: 'Past programmes in archive',
      hint: 'Webinars to World Music Therapy Conferences',
      href: ROUTES.events,
    },
  ]
}
