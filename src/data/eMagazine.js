import { publicAsset } from '@/lib/publicAsset'

export const eMagazineMeta = {
  association: 'Indian Music Therapy Association',
  publication: 'E-Magazine',
  subtitle: 'Healing through music, story & reflection',
  issue: 'Feature Edition',
  year: '2026',
}

export const eMagazineArticles = [
  {
    id: 'flute-guiding-me',
    title: 'The Flute I Never Knew Was Guiding Me',
    author: 'Siddhartha Rao',
    image: publicAsset('Sid Flute Image.png'),
    imageAlt: 'Siddhartha Rao with flute',
    pdf: publicAsset("Siddhartha's article for MT-1.pdf"),
    paragraphs: [
      'As a child, I did not dream of becoming a musician, a psychologist, or a music therapist. I simply dreamt of owning a flute.',
      'There was something magical about the flute music of Lord Krishna. Whenever I heard it in temples, bhajans, or on television, the world around me seemed to pause for a moment. I could never explain why, but the sound made me feel safe, calm, and deeply connected to something beyond words.',
      'Years passed, but that connection with music never left me. Life slowly unfolded in a way I could never have planned. I pursued Hindustani Classical Music, which taught me how sound can express emotions that language often cannot. Later, my studies in Clinical Psychology helped me understand pain, trauma, emotions, and the silent struggles people carry within themselves.',
      'And then one day, everything connected.',
      'I realised that music was never just my passion — it was quietly preparing me for a purpose. Music Therapy showed me that healing does not always begin with medicines or conversations. Sometimes healing begins with a vibration, a melody, a rhythm, or a single note that reaches the heart before the mind can respond.',
      'When I look back today, I feel that the little child who was searching for a flute was actually searching for himself.',
      'Perhaps that is how purpose enters our lives — softly, innocently, and years before we are mature enough to recognise it.',
    ],
  },
]
