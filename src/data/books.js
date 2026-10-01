import { publicAsset } from '@/lib/publicAsset'

/** Member publications — featured titles plus book1–book10 in /public (book6 image not provided). */
export const books = [
  {
    id: 'understanding-music-therapy',
    title: 'Understanding Music Therapy',
    author: 'T. V. Sairam',
    publisher: 'Agam Kala Prakashan, Delhi',
    year: 2026,
    image: publicAsset('book .jpeg'),
  },
  {
    id: 'indian-music-therapy',
    title: 'Indian Music Therapy: From Aesthetics to Therapeutics',
    author: 'Editors: T. V. Sairam & Ujjal Kumar Roy',
    year: 2025,
    image: publicAsset('Indian Music.jpeg'),
  },
  {
    id: 'book1',
    title: 'Rog Nivarak Sangeet',
    author: 'Dr. T. V. Sairam',
    publisher: 'Hindi translation: Gayatri Anand',
    image: publicAsset('book1.jpeg'),
  },
  {
    id: 'book2',
    title: 'Bollywood Music Therapy',
    author: 'T. V. Sairam',
    publisher: 'A Study on the Emotional Experience of Bollywood Songs · Indian Music Therapy Association, Bengaluru',
    year: 2025,
    image: publicAsset('book2.jpeg'),
  },
  {
    id: 'book3',
    title: 'Bollywood Music Therapy',
    author: 'T. V. Sairam',
    publisher: 'Study Group report — emotional response to healing Bollywood songs · IMTA, Bengaluru',
    image: publicAsset('book3.jpeg'),
  },
  {
    id: 'book4',
    title: 'Medicinal Music',
    author: 'T. V. Sairam',
    image: publicAsset('book4.jpeg'),
  },
  {
    id: 'book5',
    title: 'Noi Theerkkum Isai',
    author: 'Dr. T. V. Sairam',
    publisher: 'Tamil · Written form: Vijaya Raju',
    image: publicAsset('book5.jpeg'),
  },
  {
    id: 'book7',
    title: 'Music Therapy Digest',
    author: 'Editors: T. V. Sairam & Gayathri Sankar',
    publisher: 'Extracts from Scientific & Popular Journals · Indian Music Therapy Association',
    image: publicAsset('book7.jpeg'),
  },
  {
    id: 'book8',
    title: 'What Is Music?',
    author: 'T. V. Sairam',
    image: publicAsset('book8.jpeg'),
  },
  {
    id: 'book9',
    title: 'Dictionary of Music Therapy',
    author: 'T. V. Sairam',
    publisher: 'Student Edition · NADA Center for Music Therapy, New Delhi',
    year: 2022,
    image: publicAsset('book9.jpeg'),
  },
  {
    id: 'book10',
    title: 'Self-Music Therapy',
    author: 'T. V. Sairam',
    publisher: 'Musings on Music Therapy · Nāda, www.nada.in',
    image: publicAsset('book10.jpeg'),
  },
]

export const memberBooksNote =
  'Publications by IMTA members advancing the science and practice of music therapy in India.'
