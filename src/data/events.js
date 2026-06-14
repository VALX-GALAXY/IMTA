import { publicAsset } from '@/lib/publicAsset'

export const forthcomingEvents = [
  {
    title: 'Carnatic Music Therapy — Online Webinar',
    date: 'March 3, 2026',
    type: 'Webinar',
    image: publicAsset('5.\u2060 \u2060IMTA WEBINAR ETC PAGE.jpeg'),
  },
  {
    title: 'Bollywood Music Therapy Webinar',
    date: 'May 17, 2026',
    type: 'Webinar',
    image: publicAsset('Bollywood Music Therapy Webinar  .jpeg'),
  },
  {
    title: 'Polish Music Therapy',
    subtitle: "Last of the Year's IMTA Sunday Webinar Series",
    date: 'Sunday, June 28, 2026 · 5:00 PM IST',
    type: 'Webinar',
    image: publicAsset('WEBINAR PAGE.jpeg'),
    video: publicAsset('Webinar page 2026.mp4'),
  },
]

/** Past archive — newest year first; within each year, broadly reverse chronological. */
export const eventsByYear = [
  {
    year: 2025,
    events: [
      {
        title: 'Delhi Meeting of Music Therapists',
        date: 'April 18, 2025',
        type: 'Meeting',
        location: 'CSOI, Chanakyapuri, New Delhi',
        image: publicAsset('delhi.jpeg'),
      },
    ],
  },
  {
    year: 2024,
    events: [
      {
        title: '2024 Symposium',
        subtitle: 'GITAM University, Visakhapatnam',
        date: 'July 31, 2024',
        type: 'Symposium',
        location: 'GITAM University, Visakhapatnam',
        images: [
          publicAsset('event1.jpeg'),
          publicAsset('event2.jpeg'),
          publicAsset('event3.jpeg'),
          publicAsset('music therphy1.jpeg'),
          publicAsset('music therapy2.jpeg'),
        ],
      },
      {
        title: 'Health Benefits of Music Therapy — World Health Day',
        subtitle:
          'One-day seminar in collaboration with Aryabhata College (Department of Psychology), South Campus, Dhaula Kuan, University of Delhi',
        date: 'April 7, 2024',
        type: 'Seminar',
        location: 'Aryabhata College (Department of Psychology), University of Delhi',
        description:
          'Program on 7 April 2024 (Sunday). Eminent doctors and psychologists who are IMTA members and faculty from Aryabhata College address the audience. Registration was to open 1 March 2024. Coordinator: Satish Kumar, Secretary IMTA — 9350076170.',
      },
      {
        title: 'Adjunct Therapy — Role of Music Therapy in Medical, Dental and Nursing Care',
        subtitle: 'One-day symposium in Chandigarh',
        date: 'April 5, 2024',
        type: 'Symposium',
        location: 'Rayat Bahra Dental College and Hospital, Mohali (with IMTA)',
        description:
          'Theme: Adjunct Therapy — Role of Music Therapy in Medical, Dental and Nursing care. Organized by Rayat Bahra Dental College and Hospital, Mohali in collaboration with IMTA.',
      },
    ],
  },
  {
    year: 2023,
    events: [
      {
        title: '6th World Annual Conference (Offline) — Art & Music Therapy Festival',
        subtitle: 'IMTA Annual Conference 2023',
        date: 'December 1–3, 2023',
        type: 'Conference',
        location: 'Karnataka Chitrakala Parishath, Kumakrupa Road, Near Hotel Lalit, Bengaluru',
      },
      {
        title: 'IMTA Online Symposium — Psychology & Music',
        date: 'September 24, 2023',
        type: 'Symposium',
        location: 'Online',
        description:
          'From 11:00 AM onwards. Registration: ₹500 for IMTA members, ₹1000 for non-members. Coordinator: Dr. Vijaya Lakshmi — 98862 73009.',
      },
      {
        title: 'Patriotic Songs from Indian Languages — Independence Day',
        date: 'August 15, 2023',
        type: 'Concert',
        location: 'Online',
        description: 'Google Meet presentation for Independence Day.',
        links: [{ label: 'Google Meet', href: 'https://meet.google.com/ryd-jndb-hir' }],
      },
      {
        title: 'Music Therapy in Hospitals — Problems and Prospects',
        date: 'June 25, 2023',
        type: 'Webinar',
        location: 'Webinar',
      },
      {
        title: 'IMTA–NADA Music Mela 2023',
        subtitle: 'Music Mela — emotional nuances in music (virtual)',
        date: 'April 30, 2023',
        type: 'Festival',
        location: 'Webinar',
        description:
          'Virtual programme with 30+ singers from India and abroad. No entrance fee — all welcome.',
      },
    ],
  },
  {
    year: 2022,
    events: [
      {
        title: '5th Annual Online Conference — Music Therapy: Yesterday, Today & Tomorrow',
        date: 'December 3–5, 2022',
        type: 'Conference',
        location: 'Webinar',
        description:
          'Participation by registration. Fees: IMTA members ₹500, non-members ₹1000. After payment, email proof of payment, name and contact to imtaevent@gmail.com for roll number and WhatsApp participant group. IMTA members may cite membership number.',
        image: publicAsset('awards.jpeg'),
      },
      {
        title: 'Sound in Art & Science — 5th CMTE Online Programme',
        date: 'August 27–28, 2022',
        type: 'CMTE',
        location: 'Webinar',
        description:
          '11:00 AM to 4:00 PM. Fees: ₹500 (members), ₹1000 (non-members). Last date of registration: 20 August 2022.',
      },
      {
        title: 'Music Therapy in Hospitals',
        date: 'June 25–26, 2022',
        type: 'Webinar',
        location: 'Webinar',
        description:
          '11 AM to 4 PM. Fees: members ₹500, non-members ₹1000. Payment confirmation by 20 June; email imtaevent@gmail.com for roll number and WhatsApp group. Helpline: Mr. Satish Kumar — 93500 76170.',
      },
      {
        title: '2nd Public Awareness Programme on Music Therapy',
        date: 'April 23–24, 2022',
        type: 'Webinar',
        location: 'Webinar (link shared to participants)',
        description:
          'Participation fee ₹1000 (80G exempted); IMTA members 50% concession. Official certificate of participation. Email particulars to imtaevent@gmail.com for registration number before 20 April 2022.',
      },
      {
        title: 'The Night of Shiva (Maha Shivratri)',
        subtitle: 'IMTA & NADA Centre — 9 PM to 11 PM IST',
        date: 'March 1, 2022',
        type: 'Webinar',
        partner: 'NADA Centre for Music Therapy',
        location: 'Google Meet',
        links: [{ label: 'Google Meet', href: 'https://meet.google.com/iib-qugh-onw' }],
      },
      {
        title: 'Musical Tribute to Bharat Ratna Lata Mangeshkar Ji',
        date: 'February 12, 2022',
        type: 'Webinar',
        partner: 'NADA Centre for Music Therapy',
        location: 'Google Meet',
        links: [{ label: 'Google Meet', href: 'https://meet.google.com/ecb-wbfw-zdb' }],
      },
      {
        title: 'Republic Day Celebration — Patriotic Songs in Indian Languages',
        date: 'January 26–27, 2022',
        type: 'Webinar',
        partner: 'NADA Centre for Music Therapy',
        location: 'Webinar',
        description: 'IMTA & NADA present patriotic songs in Indian languages.',
      },
      {
        title: 'Visit to Indian Music Experience Museum',
        date: 'June 12, 2022',
        type: 'Outreach',
        location: 'Bengaluru',
      },
    ],
  },
  {
    year: 2021,
    events: [
      {
        title: 'Grand Musical New Year Celebrations 2022',
        date: 'December 31, 2021 – January 10, 2022',
        type: 'Webinar',
        location: 'Webinar',
        description: 'Grand musical new year celebrations.',
      },
      {
        title: '4th Annual Virtual Conference 2021',
        date: 'December 3–5, 2021',
        type: 'Conference',
        partner: 'NADA Centre for Music Therapy, Chennai',
        location: 'Online webinar',
        description:
          'Indian Music Therapy Association (Regd.) with NADA Centre for Music Therapy, Chennai — fourth annual conference, 10 AM to 6 PM. Member presentations and “Music for Music Therapy” session during lunch break 1–2 PM.',
        image: publicAsset('sundayweb.jpeg'),
      },
      {
        title: 'Patriotic Songs Concert — Azadi ka Amrit Mahotsav',
        subtitle: 'IMTA & NADA Centre',
        date: 'August 15, 2021',
        type: 'Concert',
        partner: 'NADA Centre for Music Therapy',
        location: 'Google Meet',
        description: 'Celebrating the spirit of Bharat with music.',
        links: [{ label: 'Google Meet', href: 'https://meet.google.com/hyj-xbjn-dpa' }],
      },
      {
        title: 'Shlokas for Shoka — An Evening of Prayer and Solace',
        date: 'July 31, 2021',
        type: 'Webinar',
        partner: 'NADA Centre for Music Therapy',
        location: 'Google Meet',
        links: [{ label: 'Google Meet', href: 'https://meet.google.com/raq-aoae-rnz' }],
      },
      {
        title: 'Melodic Monsoon — Singing Concert',
        date: 'July 24, 2021',
        type: 'Concert',
        partner: 'NADA Centre for Music Therapy',
        location: 'Google Meet',
        description: 'Coordinator: Siddharth Sahai — WhatsApp 9891343331.',
        links: [{ label: 'Google Meet', href: 'https://meet.google.com/eqb-bjhs-ags' }],
      },
      {
        title: 'Bollywood Night',
        date: 'June 12, 2021',
        type: 'Webinar',
        partner: 'NADA Centre for Music Therapy',
        location: 'Google Meet',
        links: [{ label: 'Google Meet', href: 'https://meet.google.com/pdn-yvaj-cuy' }],
      },
      {
        title: 'Applications — Dr. Ramachandran Narayanan Memorial Award / IMTA–NADA Fellowship 2021',
        date: 'May 21 – August 1, 2021',
        type: 'Award',
        location: 'Website',
        description:
          'Fellowship for an outstanding medical scholar with music background (MBBS minimum) for the NADA PG Diploma distance learning programme. Selection by IMTA.',
      },
      {
        title: 'Applications — Smt. Radha Sairam Creative Music Therapist Award 2021',
        date: 'May 17 – August 1, 2021',
        type: 'Award',
        description: 'Last date for application with photo and credentials: 1 August 2021.',
      },
      {
        title: 'Prayer Syllables and Songs of India',
        subtitle: 'For lokakshemam (wellbeing of all) — NADA and IMTA family',
        date: 'May 8, 2021',
        type: 'Webinar',
        partner: 'NADA Centre for Music Therapy',
        location: 'Live webinar',
      },
      {
        title: 'Public Awareness Programme — Music Therapy: The Art and Science',
        date: 'April 24–25, 2021',
        type: 'Awareness Programme',
        location: 'Live webinar',
        description: 'IMTA first public awareness programme.',
      },
      {
        title: 'Saint Thyagaraja Therapeutic Raga Music Festival 2021',
        date: 'February 7, 2021',
        type: 'Festival',
        location: 'Live webinar',
        description: 'Session 1 — Carnatic ragas (11 AM–1 PM); Session 2 — Hindustani ragas (3 PM–5 PM).',
      },
    ],
  },
  {
    year: 2020,
    events: [
      {
        title: '3rd Annual Virtual World Conference & Music Therapy Festival',
        subtitle: 'In collaboration with Mahatma Gandhi Kashi Vidyapeeth, Varanasi',
        date: 'December 4–6, 2020',
        type: 'Conference',
        location: 'Live webinar',
      },
      {
        title: '3rd IMTA Annual World Conference (Virtual)',
        subtitle: 'September edition with MG Kashi Vidyapeeth & NADA Centre',
        date: 'September 16–18, 2020',
        type: 'Conference',
        partner: 'Mahatma Gandhi Kashi Vidyapeeth, Varanasi & NADA Centre',
        location: 'Virtual',
        image: publicAsset('war erra.jpeg'),
      },
      {
        title: 'Twelfth National Webinar — Punjabi on Music Therapy',
        date: 'September 27, 2020',
        type: 'Webinar',
        location: 'Facebook',
        links: [{ label: 'Facebook recording', href: 'https://fb.watch/62WHrXoJq0/' }],
      },
      {
        title: 'Eleventh National Webinar — Effect of Music (Bengali)',
        date: 'August 23, 2020',
        type: 'Webinar',
        location: 'Facebook',
        links: [{ label: 'Facebook recording', href: 'https://fb.watch/62WJRwTiqo/' }],
      },
      {
        title: 'Tenth National Webinar — Music Therapy (Tamil)',
        date: 'July 19, 2020',
        type: 'Webinar',
        location: 'Facebook',
        links: [{ label: 'Facebook recording', href: 'https://fb.watch/62WLKG2Ufu/' }],
      },
      {
        title: 'Ninth National Webinar — Music, Silence and the Brain',
        date: 'July 12, 2020',
        type: 'Webinar',
        location: 'Facebook',
        links: [{ label: 'Facebook recording', href: 'https://fb.watch/62WP2Ls2-n/' }],
      },
      {
        title: 'Eighth National Webinar — संगीत चिकित्सा (Music Therapy) in Hindi',
        date: 'July 5, 2020',
        type: 'Webinar',
        location: 'Facebook',
        links: [{ label: 'Facebook recording', href: 'https://fb.watch/62WR2RlgHY/' }],
      },
      {
        title: 'Sixth National Webinar — Kannada Music Therapy',
        date: 'June 21, 2020',
        type: 'Webinar',
        location: 'Live webinar',
        description:
          'Exploring the richness of Indian music traditions. (Fifth national webinar listed below.)',
      },
      {
        title: 'Fifth National Webinar — A Psychological Study of Listener’s Response to Music',
        date: 'June 14, 2020',
        type: 'Webinar',
        location: 'YouTube',
        links: [{ label: 'YouTube recording', href: 'https://www.youtube.com/watch?v=U_KP29OBD3k' }],
      },
      {
        title: 'Fourth National Webinar — Music Therapy (Malayalam)',
        date: 'June 7, 2020',
        type: 'Webinar',
        location: 'YouTube',
        links: [{ label: 'YouTube recording', href: 'https://www.youtube.com/watch?v=rirrOlt39ZU' }],
      },
      {
        title: 'Third National Webinar — Psychology of Music',
        date: 'May 31, 2020',
        type: 'Webinar',
        location: 'YouTube',
        links: [
          { label: 'YouTube (Part 1)', href: 'https://www.youtube.com/watch?v=2vuo7qvVqro' },
          { label: 'YouTube (Part 2)', href: 'https://www.youtube.com/watch?v=gVoGjIOd_CE' },
        ],
      },
      {
        title: 'Second National Webinar on Raga Therapy',
        date: 'May 24, 2020',
        type: 'Webinar',
        location: 'YouTube',
        links: [
          { label: 'Session 1', href: 'https://www.youtube.com/watch?v=cFRk6klrUwc' },
          { label: 'Session 2', href: 'https://www.youtube.com/watch?v=nNUlZ8_vLXM' },
          { label: 'Session 3', href: 'https://www.youtube.com/watch?v=9F-MUo2eQ5U' },
          { label: 'Session 4', href: 'https://www.youtube.com/watch?v=AsFVpn869lw' },
          { label: 'Session 5', href: 'https://www.youtube.com/watch?v=4lsLdelUlT0' },
        ],
      },
      {
        title: 'First National Webinar on Raga Therapy',
        subtitle: 'Overview of therapeutic effects of Indian ragas',
        date: 'May 17, 2020',
        type: 'Webinar',
        location: 'YouTube',
        links: [
          { label: 'Recording 1', href: 'https://www.youtube.com/watch?v=GnHhc7qE08A' },
          { label: 'Recording 2', href: 'https://www.youtube.com/watch?v=Y8RxDamCQlg' },
          { label: 'Recording 3', href: 'https://www.youtube.com/watch?v=_ssa3yq0-9k' },
          { label: 'Recording 4', href: 'https://www.youtube.com/watch?v=QjAc3huPfL8' },
        ],
      },
      {
        title: 'Sunday Webinar Series (13 sessions)',
        date: 'May 17 – September 27, 2020',
        type: 'Webinar Series',
        description:
          'Weekly two-hour national webinars during the COVID-19 pandemic — see numbered national webinars above for selected recordings.',
        image: publicAsset('sundayweb.jpeg'),
      },
      {
        title: 'Sangeet Chikitsa 2.0 — Experiential Workshop on Music Therapy',
        date: 'March 1, 2020',
        type: 'Workshop',
        location: 'KLE Technological University, Hubballi, Karnataka',
        partner: 'Manatarang Counselling',
        description:
          'Organized by IMTA with Manatarang Counselling on World Music Therapy Day.',
      },
    ],
  },
  {
    year: 2019,
    events: [
      {
        title: '2nd World Music Therapy Conference',
        subtitle: 'Pune — December 2019',
        date: 'December 2019',
        type: 'Conference',
        location: 'Pune',
        image: publicAsset('2ND IMTA WORLD CONFERENCE.jpeg'),
      },
      {
        title: 'Pre-Conference Workshop on Music Therapy',
        date: 'November 17, 2019',
        type: 'Workshop',
        location: 'New Delhi',
      },
      {
        title: 'YENMUSIMED 2019 — Music Therapy in Palliative Care',
        date: 'September 16–18, 2019',
        type: 'Symposium',
        location: 'Centre of Palliative Care, Yenepoya Deemed to be University, Mangalore',
        partner: 'Yenepoya Deemed University',
      },
    ],
  },
  {
    year: 2018,
    events: [
      {
        title: '1st World Music Therapy Conference & Launch of IMTA',
        subtitle: 'New Delhi — December 2018',
        date: 'December 2018',
        type: 'Conference',
        location: 'New Delhi',
        description: 'Launch of the Indian Music Therapy Association (IMTA).',
        image: publicAsset('1st WORLD MUSIC THERAPY CONFERENCE, NEW DELHI , DEC. 2018..jpeg'),
      },
      {
        title: 'Pre-Conference Dinner — Eve of First Annual Conference',
        date: 'November 30, 2018',
        type: 'Dinner',
        location: 'Civil Services Officers Institute (CSOI), K.G. Marg, New Delhi',
      },
    ],
  },
]

export const eventYears = eventsByYear.map((y) => y.year)
