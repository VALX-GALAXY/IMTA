import { publicAsset } from '@/lib/publicAsset'

export const forthcomingEvents = [
  {
    title: 'IMTA World Conference 2026',
    subtitle: 'Trivandrum',
    date: 'December 4–6, 2026',
    type: 'Conference',
    image: publicAsset('FORTHCOMING EVENTS\u00a0.jpeg'),
  },
  {
    title: 'Bollywood Music Therapy Webinar',
    date: 'May 17, 2026',
    type: 'Webinar',
    image: publicAsset('Bollywood Music Therapy Webinar  .jpeg'),
  },
]

export const eventsByYear = [
  {
    year: 2022,
    events: [
      {
        title: 'Republic Day Celebration — Patriotic Songs in Indian Languages',
        date: 'Jan 26–27, 2022',
        type: 'Webinar',
        partner: 'NADA Centre for Music Therapy',
      },
      {
        title: 'Musical Tribute to Bharat Ratna Lata Mangeshkar Ji',
        date: 'Feb 12, 2022',
        type: 'Webinar',
        partner: 'NADA Centre for Music Therapy',
      },
      {
        title: 'The Night of Shiva — Maha Shivratri',
        date: 'Mar 1, 2022',
        type: 'Webinar',
        partner: 'NADA Centre for Music Therapy',
      },
      {
        title: '2nd Public Awareness Program on Music Therapy',
        date: 'Apr 23–24, 2022',
        type: 'Webinar',
      },
      {
        title: 'Visit to Indian Music Experience Museum',
        date: 'Jun 12, 2022',
        type: 'Outreach',
        location: 'Bengaluru',
      },
      {
        title: 'Music Therapy in Hospitals',
        date: 'Jun 25–26, 2022',
        type: 'Webinar',
      },
      {
        title: 'Sound in Art & Science — 5th CMTE Online Program',
        date: 'Aug 27–28, 2022',
        type: 'CMTE',
      },
      {
        title: '5th Annual Virtual World Conference',
        subtitle: 'Music Therapy — Yesterday, Today & Tomorrow',
        date: 'Dec 3–5, 2022',
        type: 'Conference',
        image: publicAsset('awards.jpeg'),
      },
    ],
  },
  {
    year: 2021,
    events: [
      {
        title: 'Saint Thyagaraja Therapeutic Raga Music Festival',
        date: 'Feb 7, 2021',
        type: 'Festival',
      },
      {
        title: 'IMTA Public Awareness Program 2021',
        date: 'Mar 24–25, 2021',
        type: 'Awareness Program',
      },
      {
        title: 'Prayer Syllables and Songs of India',
        date: 'May 8, 2021',
        type: 'Webinar',
        partner: 'NADA Centre for Music Therapy',
      },
      {
        title: 'Bollywood Night',
        date: 'Jun 12, 2021',
        type: 'Webinar',
        partner: 'NADA Centre for Music Therapy',
      },
      {
        title: 'Melodic Monsoon — Singing Concert',
        date: 'Jul 24, 2021',
        type: 'Concert',
        partner: 'NADA Centre for Music Therapy',
      },
      {
        title: 'Shlokas for Shoka — An Evening of Prayer and Solace',
        date: 'Jul 31, 2021',
        type: 'Webinar',
      },
      {
        title: 'Azadi ka Amrit Mahotsav — Patriotic Song Concert',
        date: 'Aug 15, 2021',
        type: 'Concert',
      },
      {
        title: 'Grand Musical Event — New Year Welcome',
        date: 'Dec 31, 2021',
        type: 'Concert',
      },
      {
        title: '4th Annual Virtual World Conference',
        date: 'Dec 3–5, 2021',
        type: 'Conference',
        partner: 'NADA Centre for Music Therapy, Chennai',
        image: publicAsset('sundayweb.jpeg'),
      },
    ],
  },
  {
    year: 2020,
    events: [
      {
        title: 'Sangeet Chikitsa 2.0 — Experiential Workshop on Music Therapy',
        date: 'Mar 1, 2020',
        type: 'Workshop',
        location: 'KLE Technological University, Hubballi, Karnataka',
        partner: 'Manatarang Counselling',
      },
      {
        title: 'Sunday Webinar Series (13 sessions)',
        date: 'May 17 – Sep 27, 2020',
        type: 'Webinar Series',
        description:
          'Weekly two-hour sessions during the COVID-19 pandemic with eminent speakers from across India.',
        image: publicAsset('sundayweb.jpeg'),
      },
      {
        title: '3rd IMTA Annual World Conference (Virtual)',
        date: 'Sep 16–18, 2020',
        type: 'Conference',
        partner: 'Mahatma Gandhi Kashi Vidyapeeth, Varanasi & NADA Centre',
        image: publicAsset('war erra.jpeg'),
      },
    ],
  },
  {
    year: 2019,
    events: [
      {
        title: 'YENMUSIMED 2019 — Music Therapy in Palliative Care',
        date: 'Sep 16–18, 2019',
        type: 'Symposium',
        location: 'Mangalore',
        partner: 'Centre of Palliative Care, Yenepoya Deemed University',
      },
      {
        title: 'Pre-Conference Workshop on Music Therapy',
        date: 'Nov 17, 2019',
        type: 'Workshop',
        location: 'New Delhi',
      },
      {
        title: '2nd IMTA Annual Conference',
        date: 'Dec 1–2, 2019',
        type: 'Conference',
        location: 'MIT-World Peace University, Pune',
        image: publicAsset('2ND IMTA WORLD CONFERENCE.jpeg'),
      },
    ],
  },
  {
    year: 2018,
    events: [
      {
        title: 'Pre-Conference Dinner',
        date: 'Nov 30, 2018',
        type: 'Dinner',
        location: 'CSOI, K.G. Marg, New Delhi',
      },
      {
        title: '1st IMTA Annual Conference & Launch of IMTA',
        subtitle: 'Music Therapy in the Indian Milieu',
        date: 'Dec 1–2, 2018',
        type: 'Conference',
        location: 'YWCA of Delhi, Ashoka Road, New Delhi',
        image: publicAsset('FIRST IMTA WORLD CONFERENCE, NEW DELHI. DEC 2018.jpeg'),
      },
    ],
  },
]

export const eventYears = eventsByYear.map((y) => y.year)
