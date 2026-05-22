import { publicAsset } from '@/lib/publicAsset'

const worldConference2026Base = {
  edition: 9,
  title: '9th World Music Therapy Conference',
  date: 'December 4–6, 2026',
  venue: 'Trivandrum, Kerala',
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
    image: publicAsset('WORLD MUSIC THERAPY CONFERENC.jpeg'),
  },
  {
    id: 'wmtc-2026-video',
    mediaType: 'video',
    mediaLabel: 'Conference preview video',
    ...worldConference2026Base,
    video: publicAsset('9TH WORLD MUSIC THERAPY CONFERENCE, TRIVANDRUM, DEC.4-6. 2026..mp4'),
  },
]

/** Combined record for archive list & announcements. */
export const worldConference2026 = {
  ...worldConference2026Base,
  highlights: [
    'Indian Music Therapy Association annual world conference',
    'In-person gathering of members, clinicians, and researchers',
    'Registration and programme details to follow',
  ],
  image: upcomingConferenceSlides[0].image,
  video: upcomingConferenceSlides[1].video,
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
    edition: 7,
    title: '7th IMTA World Conference',
    date: '2024',
    venue: 'India',
    highlights: [
      'Annual conference including awards and scientific sessions',
      'Popular Musician Award and other honours presented during the conference',
    ],
    image: publicAsset('CONFERENCE 2024.jpeg'),
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
