import { ROUTES } from '@/constants/routes'

/** All site pages — metadata for routes, mega menu, and placeholders */
export const pages = [
  {
    id: 'home',
    path: ROUTES.home,
    title: 'Homepage',
    description: 'Hero, intro, and featured sections for the Indian Music Therapy Association.',
    layout: 'home',
    category: null,
  },
  {
    id: 'introduction',
    path: ROUTES.introduction,
    title: 'IMTA Introduction',
    description: 'Our founding story, mission, and the journey of music therapy in India.',
    category: 'about',
  },
  {
    id: 'what-is-music-therapy',
    path: ROUTES.whatIsMusicTherapy,
    title: 'What is Music Therapy',
    description:
      'An educational overview of music therapy practice, evidence, and clinical applications.',
    note: 'Educational, long-form',
    category: 'about',
  },
  {
    id: 'award-winners',
    path: ROUTES.awardWinners,
    title: 'Award Winners',
    description: 'National honourees recognised for excellence across years and categories.',
    category: 'awards-events',
  },
  {
    id: 'core-group',
    path: ROUTES.coreGroup,
    title: 'IMTA Core Group',
    description: 'Leadership and core committee members guiding IMTA initiatives.',
    category: 'about',
  },
  {
    id: 'e-magazine',
    path: ROUTES.eMagazine,
    title: 'E-Magazine',
    description: 'Features, reflections, and stories from the IMTA community.',
    category: 'publications',
  },
  {
    id: 'conferences',
    path: ROUTES.conferences,
    title: 'World Music Therapy Conference',
    description:
      '9th World Music Therapy Conference, Trivandrum (Dec 2026) and archive of past IMTA editions.',
    category: 'awards-events',
  },
  {
    id: 'events',
    path: ROUTES.events,
    title: 'IMTA Events',
    description:
      'IMTA programmes year by year — symposia, seminars, webinars, workshops, conferences, and outreach.',
    category: 'awards-events',
  },
  {
    id: 'award-announcement-2026',
    path: ROUTES.awardAnnouncement2026,
    title: 'Award Announcement 2026',
    description: 'Official announcement, categories, timelines, and how to apply or nominate.',
    category: 'programs',
  },
  {
    id: 'distance-learning',
    path: ROUTES.distanceLearning,
    title: "T.V. Sairam's Music Therapy — PG Diploma",
    description:
      '22nd batch from July 2026 — prospectus, syllabus, INR 20,000 fee, application PDF, and email submission.',
    category: 'programs',
  },
  {
    id: 'online-programme',
    path: ROUTES.onlineProgramme,
    title: 'Online Programme for Beginners',
    description: 'Introductory online learning pathway for newcomers to music therapy.',
    note: 'Course detail',
    category: 'programs',
  },
  {
    id: 'activity-reports',
    path: ROUTES.activityReports,
    title: 'Activity Reports (Past)',
    description: 'Annual activity reports documenting programmes, outreach, and milestones.',
    note: 'Year-sorted document list',
    category: 'publications',
  },
  {
    id: 'agm-activity-report',
    path: ROUTES.agmActivityReport,
    title: 'AGM Activity Report 2025–26',
    description: 'Featured activity report for the 2025–26 AGM cycle.',
    note: 'Featured document',
    category: 'publications',
  },
  {
    id: 'bookshelf',
    path: ROUTES.bookshelf,
    title: 'Bookshelf',
    description: 'Recommended books and resources with authors and external links.',
    category: 'publications',
  },
  {
    id: 'life-members',
    path: ROUTES.lifeMembers,
    title: 'IMTA Life Members',
    description: 'Searchable directory of IMTA life members across the country.',
    category: 'about',
  },
  {
    id: 'collaborating-institutions',
    path: ROUTES.collaboratingInstitutions,
    title: 'Collaborating Institutions & Universities',
    description:
      'Partner hospitals, universities, and organisations that supported past IMTA music therapy initiatives and conferences.',
    category: 'about',
  },
  {
    id: 'accreditation',
    path: ROUTES.accreditation,
    title: 'Accreditation',
    description: 'Individual and organisational accreditation standards and listings.',
    note: 'Individual + org listings',
    category: 'about',
  },
  {
    id: 'membership',
    path: ROUTES.membership,
    title: 'Membership',
    description:
      'Benefits, fee categories, bank details, downloadable registration form, and online application.',
    category: 'about',
  },
  {
    id: 'contact',
    path: ROUTES.contact,
    title: 'Contact',
    description: 'Reach the secretariat — enquiry form, map, and postal address.',
    note: 'Form, map, address',
    category: 'about',
  },
]

export const pagesByPath = Object.fromEntries(pages.map((p) => [p.path, p]))
