import { publicAsset } from '@/lib/publicAsset'

/** 9th WMTC preview video (replaces mis-uploaded DLP static video). */
export const worldConference2026Video = publicAsset('for conf 26 page.mp4')
export const worldConference2026Poster = publicAsset('Conf26kerla.jpeg')

const worldConference2026Base = {
  edition: 9,
  title: 'World Music Therapy Conference 2026',
  date: 'December 4–6, 2026',
  venue: 'Trivandrum Tennis Club, Kerala',
  format: 'In-person',
  upcoming: true,
}

/** Slides for the upcoming conferences carousel (poster + video). */
export const upcomingConferenceSlides = [
  {
    id: 'wmtc-2026-poster',
    mediaType: 'poster',
    mediaLabel: 'Conference poster',
    posterStartsFrom: '1 July 2026',
    ...worldConference2026Base,
    image: worldConference2026Poster,
    tagline: 'Healing Hearts... Enriching Lives...',
    exploreLine: 'Explore • Learn • Experience',
    website: 'www.imta.in',
    registrationFee: 'INR 5000 (includes lunch, tea & conference kit)',
    earlyBird: 'Early Bird Concession to IMTA Members: INR 3000',
    earlyBirdExpires: '15 June',
    contactName: 'Mr. KVS Sastry',
    contactPhone: '9886404328',
    highlights: [
      'Songs · Demos · Lectures · Sight-seeing',
      'Awards ceremony · Convocation · Competitions',
    ],
  },
  {
    id: 'wmtc-2026-video',
    mediaType: 'video',
    mediaLabel: 'Conference preview video',
    ...worldConference2026Base,
    video: worldConference2026Video,
  },
]

/** Combined record for archive list & announcements. */
export const worldConference2026 = {
  ...worldConference2026Base,
  highlights: [
    'Indian Music Therapy Association (IMTA) presents World Music Therapy Conference 2026',
    'Healing Hearts... Enriching Lives... · Explore • Learn • Experience',
    'Venue: Trivandrum Tennis Club, Kerala',
    'Dates: December 4–6, 2026',
    'Registration fee: INR 5000 (includes lunch, tea & conference kit)',
    'Early Bird concession to IMTA Members: INR 3000 (expires 15 June)',
    'Highlights: Songs · Demos · Lectures · Sight-seeing · Awards ceremony · Convocation · Competitions',
    'Website: www.imta.in',
    'Contact: Mr. KVS Sastry — 9886404328',
  ],
  image: worldConference2026Poster,
  video: worldConference2026Video,
}

export const conferences = [
  {
    edition: 1,
    title: '1st World Music Therapy Conference',
    theme: 'Music Therapy in the Indian Milieu',
    date: 'December 2018',
    venue: 'New Delhi',
    highlights: [
      'Official launch of the Indian Music Therapy Association',
      'Pre-conference dinner at CSOI, K.G. Marg, New Delhi',
    ],
    image: publicAsset('1st WORLD MUSIC THERAPY CONFERENCE, NEW DELHI , DEC. 2018..jpeg'),
    format: 'In-person',
  },
  {
    edition: 2,
    title: '2nd World Music Therapy Conference',
    theme: 'Music Therapy in the Indian Milieu',
    date: 'December 2019',
    venue: 'Pune',
    highlights: [
      'MIT-World Peace University, Pune, Maharashtra',
      'Inaugurated by the Hon\'ble Vice Chancellor of MIT-WPU',
      'Pre-conference workshop in New Delhi',
    ],
    image: publicAsset('2ND IMTA WORLD CONFERENCE.jpeg'),
    format: 'In-person',
  },
  {
    edition: 3,
    title: '3rd IMTA Annual World Conference',
    date: 'September 16–18, 2020',
    venue: 'Virtual',
    partner: 'Mahatma Gandhi Kashi Vidyapeeth, Varanasi & NADA Centre for Music Therapy',
    highlights: [
      'Inaugural address by Prof. T.N. Singh, Vice Chancellor, MG Kashi Vidyapeeth',
    ],
    image: publicAsset('war erra.jpeg'),
    format: 'Virtual',
  },
  {
    edition: 4,
    title: '4th IMTA Annual World Conference',
    date: 'December 3–5, 2021',
    venue: 'Virtual',
    partner: 'NADA Centre for Music Therapy, Chennai',
    highlights: ['Collaborative virtual conference with NADA Centre'],
    image: publicAsset('sundayweb.jpeg'),
    format: 'Virtual',
  },
  {
    edition: 5,
    title: '5th IMTA Annual Virtual World Conference & Music Therapy Festival',
    theme: 'Music Therapy — Yesterday, Today & Tomorrow',
    date: 'December 3–5, 2022',
    venue: 'Virtual',
    partner: 'NADA Centre for Music Therapy (Regd.), Chennai',
    highlights: [
      'Three-day conference with international speakers from Brazil, Norway, Sri Lanka, and USA',
      'Therapeutic music competition across all three days',
      'Annual awards ceremony and valedictory session',
    ],
    image: publicAsset('Pune Conference .jpeg'),
    format: 'Virtual',
    souvenir: true,
  },
  {
    edition: 6,
    title: '6th World Music Therapy Conference & Art Festival',
    date: 'December , 2023',
    venue: 'Chitra Kala Parishad, Bengaluru',
    partner: 'IMTA ',
    highlights: [
      'Music therapy conference and art festival',
      'Sessions and participation from music therapists and artists',
    ],
    image: publicAsset('6thConference.jpeg'),
    format: 'In-person',
  },
  {
    edition: 7,
    title: '7th IMTA World Conference',
    date: '2024',
    venue: 'Tiruchirappalli',
    highlights: [
      'Annual conference including awards and scientific sessions',
      'Award-winning delegates honoured at the annual ceremony',
      'Popular Musician Award and other honours presented during the conference',
    ],
    image: publicAsset('WORLD CONFERENCE 2024, TIRUCHIRAPPALLY..jpeg'),
    format: 'In-person',
  },
  {
    edition: 8,
    title: '8th IMTA World Conference',
    date: 'December 2025',
    venue: 'New Town',
    highlights: [
      'Gathering of IMTA life members',
      'World conference programme and community sessions',
      'Convocation scene of Music Therapy graduates',
    ],
    image: publicAsset('8th World Conference.jpeg'),
    format: 'In-person',
  },
  worldConference2026,
]

export const conference2022Schedule = {
  theme: 'Music Therapy — Yesterday, Today & Tomorrow',
  dates: 'December 3–5, 2022',
  days: [
    {
      day: 1,
      label: 'Inaugural Function',
      date: 'Saturday, December 3',
      sessions: [
        { time: '11:00 AM', title: 'Invocation', speaker: 'Ms. Sudha Ganesh' },
        { time: '11:05 AM', title: 'Welcome Address & Theme Presentation', speaker: 'Dr. T. V. Sairam' },
        { time: '11:25 AM', title: 'Introduction of IMTA Movement', speaker: 'Dr. Vijayalakshmi Subramaniam' },
        { time: '12:00 PM', title: 'Therapeutic Music Competition', note: '8 participants' },
        { time: '2:00 PM', title: 'Business Session', note: '9 speakers, 20 min each' },
      ],
    },
    {
      day: 2,
      label: 'Business Sessions',
      date: 'Sunday, December 4',
      sessions: [
        { time: '11:00 AM', title: 'Morning Business Session', note: '6 speakers' },
        { time: '1:00 PM', title: 'Therapeutic Music Competition', note: '4 musicians' },
        { time: '2:00 PM', title: 'Afternoon Business Session', note: '6 speakers' },
      ],
    },
    {
      day: 3,
      label: 'Concluding Session',
      date: 'Monday, December 5',
      sessions: [
        { time: '11:00 AM', title: 'International Speakers Session', note: 'Norway, Mangalore, Sri Lanka' },
        { time: '12:00 PM', title: 'Therapeutic Music Competition', note: '7 musicians' },
        { time: '2:00 PM', title: 'Recap, Awards & Valedictory', note: 'Closing ceremony' },
      ],
    },
  ],
}
