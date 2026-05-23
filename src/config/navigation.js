import { ROUTES } from '@/constants/routes'

/**
 * Mega menu: only these sections (ordered). Introduction, What is Music Therapy,
 * Contact, etc. are excluded — use header/footer elsewhere.
 */
export const megaMenuCategories = [
  {
    id: 'imta-sections',
    label: 'Sections',
    headline: 'IMTA Life Members',
    description:
      'Award programmes, governance, learning pathways, archives, publications, and professional accreditation.',
    knowMoreHref: ROUTES.lifeMembers,
    links: [
      {
        title: 'IMTA Award Winners',
        href: ROUTES.awardWinners,
        description:
          'National honourees recognised for excellence across years and categories.',
      },
      {
        title: 'IMTA Core Group',
        href: ROUTES.coreGroup,
        description:
          'Leadership and core committee members guiding IMTA initiatives.',
      },
      {
        title: 'IMTA E-Magazine',
        href: ROUTES.eMagazine,
        description:
          'Digital magazine issues with covers, features, and downloadable PDFs.',
      },
      {
        title: 'World Music Therapy Conference',
        href: ROUTES.conferences,
        description:
          '9th edition in Trivandrum, Dec 2026 — plus archive of past world conferences.',
      },
      {
        title: 'IMTA Events',
        href: ROUTES.events,
        description:
          'Symposia, seminars, webinars, workshops, meetings, and outreach — browse by year and event type.',
      },
      {
        title: 'IMTA Award Announcement — 2026',
        href: ROUTES.awardAnnouncement2026,
        description:
          'Official announcement, categories, timelines, and how to apply or nominate.',
      },
      {
        title: 'IMTA Distance Learning — PG Diploma Course',
        href: ROUTES.distanceLearning,
        description:
          '22nd batch (July 2026) — prospectus, syllabus, application PDF, and how to apply by email.',
      },
      {
        title: 'IMTA Online Programme for Beginners',
        href: ROUTES.onlineProgramme,
        description:
          'Introductory online learning pathway for newcomers to music therapy.',
      },
      {
        title: 'IMTA M.O.A',
        href: ROUTES.moa,
        description:
          'Memorandum of Association — constitution and organisational framework.',
      },
      {
        title: 'IMTA Annual Financial Statements (Past)',
        href: ROUTES.financialStatements,
        description:
          'Audited financial statements sorted by year for transparency and review.',
      },
      {
        title: 'IMTA Activity Reports (Past)',
        href: ROUTES.activityReports,
        description:
          'Annual activity reports documenting programmes, outreach, and milestones.',
      },
      {
        title: 'IMTA Financial Statement (2025–26) for 9th AGM',
        href: ROUTES.agmFinancialStatement,
        description:
          'Featured financial statement presented at the Annual General Meeting.',
      },
      {
        title: 'IMTA Activity Report (2025–26) for 9th AGM',
        href: ROUTES.agmActivityReport,
        description:
          'Featured activity report for the 2025–26 AGM cycle.',
      },
      {
        title: 'IMTA Bookshelf: Books Written by IMTA Members',
        href: ROUTES.bookshelf,
        description:
          'Books authored by members with bibliographic detail and links.',
      },
      {
        title: 'IMTA Life Members',
        href: ROUTES.lifeMembers,
        description:
          'Directory of IMTA life members across the country.',
      },
      {
        title: 'Collaborating Institutions & Universities',
        href: ROUTES.collaboratingInstitutions,
        description:
          'Partner hospitals, universities, and organisations working with IMTA.',
      },
      {
        title:
          'IMTA Music Therapy Accreditation for Individual Therapists & Organizations in Action',
        href: ROUTES.accreditation,
        description:
          'Individual and organisational accreditation standards and listings.',
      },
    ],
  },
]

/** Flat footer / quick links */
export const footerColumns = [
  {
    title: 'About',
    links: [
      { label: 'Introduction', href: ROUTES.introduction },
      { label: 'Membership', href: ROUTES.membership },
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
      { label: 'IMTA Events', href: ROUTES.events },
    ],
  },
]
