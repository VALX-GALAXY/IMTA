import { publicAsset } from '@/lib/publicAsset'

const AWARD_TEXT_FIELDS = ['name', 'title', 'description', 'category', 'eligibility', 'prize']

/** Strip "+ Plaque" from award copy wherever it appears. */
export function stripPlaqueFromAwardText(text) {
  if (typeof text !== 'string' || !text) return text
  return text.replace(/\s*\+\s*Plaque\b/gi, '').trim()
}

function sanitizeAwardEntry(entry) {
  const sanitized = { ...entry }
  for (const key of AWARD_TEXT_FIELDS) {
    if (typeof sanitized[key] === 'string') {
      sanitized[key] = stripPlaqueFromAwardText(sanitized[key])
    }
  }
  return sanitized
}

const awardCategoriesRaw = [
  {
    name: 'Smt. Radha Sairam Annual Award for Creative Music Therapist',
    year: 2022,
    eligibility:
      'Qualified and Experienced Music Therapists below 50 years as on 1st January of the Award announcement, with dynamic and proactive involvement with IMTA and with proven achievements in many aspects of music therapy such as presentation, singing, volunteering, organizing, educating, research and publication, broadcasting etc. Doctoral and post-doctoral research experience will be an added qualification. (Award Amount: INR 10,000.)',
    prize: '',
  },
  {
    name: 'Dr. Ramachandran Narayanan Memorial IMTA–NADA Annual Fellowship',
    year: 2022,
    eligibility:
      'Outstanding medical scholars (from all types of medical disciplines/branches can aplly for this fellowship for free admission to one year IMTA PG DIPLOMA PROGRAMME . (Notional value of the Fellowship: INR 20,000)',
    prize: '',
  },
  {
    name: 'Dr. Krishnamurthy Chandramoleshwar Award for Best Research Article on Music Therapy',
    year: 2022,
    eligibility:
      'AUthors or the First Authors of Best scientific research article on MUSIC THERAPY published within two previous years of the year of Award . (Award Amount- INR 5000),',
    prize: '',
  },
  {
    name: 'IMTA AWARD FOR THE BEST MUSIC THERAPY BOOK',
    year: 2022,
    eligibility:
      'Authors or the First Authof of a book, published within two previous years of the year of the Award. (Award amount-INR 5000)..',
    prize: '',
  },
]

export const awardCategories = awardCategoriesRaw.map(sanitizeAwardEntry)

const awardWinnersRaw = [
  {
    year: 2026,
    category: 'IMTA Awards',
    title: 'Award Announcement 2026',
    description: 'Official announcement of IMTA national awards for 2026.',
    images: [publicAsset('ANNOUNCEMENT.jpeg'), publicAsset('ann.jpeg')],
    image: publicAsset('ANNOUNCEMENT.jpeg'),
    featured: true,
  },
  {
    year: 2025,
    category: 'Dr. Krishnamurthy Chandramouleshwar Awardee - Best Scientific Article on Music Therapy',
    name: 'Dr. Farah Husain',
    location: 'New Delhi',
    description: 'Chandramouleshwara Awardee for the best scientific article on music therapy (IMTA).',
    image: publicAsset('Dr Farah Husain.jpeg'),
  },
  {
    year: 2025,
    category: 'Smt. Radha Sairam Creative Music Therapist Awardee',
    name: 'Ms. Gitashree Majumdar',
    location: 'Hyderabad',
    image: publicAsset('Ms Gitashree Majumdar, Hyderabad. .jpeg'),
  },
  {
    year: 2025,
    category: 'IMTA Awardee for Self-less Service',
    name: 'Dr. Geetha R. Bhat',
    location: 'Bengaluru',
    image: publicAsset('Dr. Geetha R. Bhat, Bengaluru.jpeg'),
  },
  {
    year: 2025,
    category: 'Popular Presenter Awardee',
    name: 'Smt. Pallavi Nagpal',
    location: 'Ludhiana',
    image: publicAsset('Smt Pallavi Nagpal.jpeg'),
  },
  {
    year: 2024,
    category: 'Popular Presenter Awardee',
    name: 'I Nagasudha Pranava',
    location: 'Hyderabad',
    image: publicAsset('I Nagasudha Pranava.jpeg'),
  },
  {
    year: 2024,
    category: 'Popular Musician Awardee',
    name: 'Dr. C. Lalithambal',
    description: 'Recognised at the annual conference, 2024.',
    image: publicAsset('Lalithambal.jpeg'),
  },
  {
    year: 2023,
    category: 'Popular Singer Awardee',
    name: 'Smt. Falguni Rawal',
    location: 'Gujarat',
    image: publicAsset('Smt Falguni Rawal.jpeg'),
  },
  {
    year: 2023,
    category: 'Popular Singers in Conference',
    name: 'Manasvini Lakhanpal',
    location: 'Ghaziabad',
    image: publicAsset('MANASVINI LAKHANPAL, GHAZIABAD,.jpeg'),
  },
  {
    year: 2022,
    category: 'Smt. Radha Sairam Creative Music Therapist of the Year',
    name: 'Dr. Farah Husain',
    location: 'New Delhi',
    description: 'Creative Music Therapist of the Year (IMTA).',
    image: publicAsset('Dr Farah Husain.jpeg'),
  },
  {
    year: 2021,
    category: 'Smt. Radha Sairam Creative Music Therapist Awardee',
    name: 'Dr. Shambhavi Das',
    location: 'Gurugram, NCR',
    description:
      'PhD in Indian Classical Music. Vocalist, music guru at Surdemy, and music therapist at Nadamaya Clinic and Ananya Child Care & Development Center.',
    image: publicAsset('Dr. Shambhavi Das.jpeg'),
  },
  {
    year: 2022,
    category: 'Dr. Ramachandran Narayanan Memorial Fellowship',
    name: 'Dr. Lakshmi Sravanti',
    location: 'Bengaluru',
    description:
      'MD, DM (NIMHANS), HRRS Fellow 2019. Consultant Child and Adolescent Psychiatrist.',
  },
  {
    year: 2020,
    category: 'Smt. Radha Sairam Creative Music Therapist Awardee',
    name: 'Dr. Durgesh Upadhyay',
    location: 'Varanasi',
    image: publicAsset('d.jpeg'),
  },
  {
    year: 2020,
    category: 'Best Signature Tune Awardee',
    name: 'Chaitrra Sairam',
    location: 'Chennai',
    description: 'Vocalist & Music Therapist',
    image: publicAsset('Chaitrra Sairam.jpeg'),
  },
]

export const awardWinners = awardWinnersRaw.map(sanitizeAwardEntry)
