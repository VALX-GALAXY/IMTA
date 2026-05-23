import { publicAsset } from '@/lib/publicAsset'

export { footerColumns } from '@/config/navigation'
export { megaMenuCategories } from '@/config/navigation'

export const site = {
  name: 'IMTA',
  fullName: 'Indian Music Therapy Association',
  tagline: 'Healing through music, science, and community.',
  contactEmail: 'info@theimta.in',
  footerAbout:
    'To propogate Music Therapy as an alternative intervention in hospitals, hospices and various other areas, where music could be profitably used for the benefit of mankind. To make a professional forum for the working Music Therapists of India so that they can meet at regular intervals to exchange their professional skills and understanding of this nascent subject.',
  contact: {
    address:
      'Office: No. 32, "Sree Maatha" 5th Main Road, Sir M V Nagar, Ramamurthy Nagar, Bangalore - 560016',
    phones: ['9891184950', '9886404328'],
    email: 'info@theimta.in',
  },
  social: {
    facebook: 'https://www.facebook.com/',
    youtube: 'https://www.youtube.com/',
  },
}

export const heroPromoSlides = [
  {
    id: 'pg-diploma',
    title: 'PG Diploma — 22nd Batch',
    description: 'T.V. Sairam’s Music Therapy programme from 1 July 2026. Download the application form.',
    image: publicAsset('book .jpeg'),
    href: '/distance-learning',
  },
  {
    id: 'annual-conference',
    title: '9th World Music Therapy Conference',
    description: 'Trivandrum — December 4–6, 2026. Watch the preview and save the date.',
    image: publicAsset('WORLD MUSIC THERAPY CONFERENC.jpeg'),
    href: '/conferences',
  },
]
