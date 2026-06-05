import { musicMemoryRecallImages } from '@/assets/e-magazine/music-memory-recall'
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
  {
    id: 'music-memory-recall',
    type: 'feature',
    title: 'Music & Memory Recall',
    author: 'IMTA E-Magazine',
    intro:
      'How familiar melodies reach past neurodegeneration, and why music meets us in joy and in sorrow.',
    image: musicMemoryRecallImages.cover,
    imageAlt: 'Acoustic guitar — music and memory',
    sections: [
      {
        number: 1,
        title: 'Music as a trigger for autobiographical memory',
        body:
          'Music acts as a trigger to recall autobiographical memories, even in late-stage Alzheimer\'s, often helping patients reconnect with their past and loved ones.',
        highlight:
          'A familiar song can open a door to identity when words alone no longer can.',
        image: musicMemoryRecallImages.sections[0],
        imageAlt: 'Friends together — memories and connection',
      },
      {
        number: 2,
        title: 'How does music "treat" Alzheimer patients?',
        body:
          'Music treats Alzheimer\'s disease by engaging parts of the brain which could escape neurodegeneration. Using familiar melodies familiar to the patient, a therapist is able to unlock memories, improve mood, and reduce agitation. Last mentioned is most needed by the sufferers!',
        highlight: 'Reducing agitation is often what families and caregivers need most.',
        image: musicMemoryRecallImages.sections[1],
        imageAlt: 'Brain model — neuroscience and music therapy',
      },
      {
        number: 3,
        title: 'How does sad music act on a person who is sad or down?',
        body:
          'Sad music is found to help a sad listener by offering emotional validation and a sense of being understood, rather than just adding more sadness. It acts as a form of "sweet sadness" or catharsis. Prolactin, a comforting hormone, is found to be released. It is known to allow self-reflection, comfort, and a sizeable reduction in loneliness by offering genuine companionship.',
        highlight: '"Sweet sadness" — when music holds space without asking you to pretend.',
        image: musicMemoryRecallImages.sections[2],
        imageAlt: 'Person listening to music with headphones',
      },
    ],
  },
]

/** Dedicated section — photo + article + PDF (separate from sliders). */
export const eMagazineJagar = {
  id: 'jagar-music-therapy',
  title: 'Jagar Music Therapy',
  subtitle: 'Jagar held at Chitai Temple, Almora.',
  image: publicAsset('WITH ARTICLE ON JAGAR MUSIC THERAPY.jpeg'),
  imageAlt: 'Jagar held at Chitai Temple, Almora — community ritual with music',
  pdf: publicAsset('Jagar Music Therapy.pdf'),
  paragraphs: [
    'Jagar is a living musical-ritual tradition of Uttarakhand, where voice, rhythm, and community participation come together in a shared healing space.',
    'In music therapy contexts, Jagar is often discussed for how it holds collective emotion, memory, and meaning through sound — especially when guided with cultural sensitivity and care.',
    'Read the full article in the PDF below.',
  ],
}

/** Photo features — images only (not PDF previews). */
export const eMagazinePhotos = [
  {
    id: 'raga-chikitsa-chart',
    title: 'Raga Chikitsa — An Adjunct Therapy',
    image: publicAsset('for E-magazine page.jpeg'),
    imageAlt: 'Chart listing ailments and corresponding Hindustani ragas used in raga chikitsa',
    caption:
      'Ailments such as asthma, blood pressure, depression, and insomnia paired with Hindustani ragas — a reference for adjunct music therapy practice.',
  },
  {
    id: 'music-daily-companion',
    title: 'Music — Your Daily Companion',
    image: publicAsset('For EMAGAZINE.jpeg'),
    imageAlt: 'Infographic on everyday music therapy habits — alarm, mindful listening, and energy chores',
    caption:
      'Practical ways to bring music into daily life: gentler alarms, mindful listening breaks, and rhythm during routine tasks.',
  },
  {
    id: 'gitam-music-therapy-panel',
    title: 'Music Therapy at GITAM University',
    image: publicAsset('music therphy1.jpeg'),
    imageAlt:
      'Panel discussion on music therapy at GITAM University, Visakhapatnam — IMTA collaboration with Dr. T. V. Sairam',
    caption:
      'Lecture and interactive session on Music Therapy — Department of Fine and Performing Arts, GITAM (Deemed to be University), with Indian Music Therapy Association.',
  },
  {
    id: 'gitam-music-therapy-press',
    title: 'Press coverage — The Hans India',
    image: publicAsset('music therapy2.jpeg'),
    imageAlt: 'The Hans India newspaper report on the GITAM music therapy programme, August 2024',
    caption:
      'Experts at the music therapy programme at GITAM campus, Visakhapatnam — coverage from The Hans India, 1 August 2024.',
  },
]

/** PDF articles — downloads only (separate from photo features). */
export const eMagazinePdfs = [
  {
    id: 'jagar-music-therapy',
    title: 'Jagar Music Therapy',
    pdf: publicAsset('Jagar Music Therapy.pdf'),
    description:
      'Full article on Jagar music therapy — practices, cultural context, and clinical reflections (PDF).',
  },
  {
    id: 'flute-guiding-me-pdf',
    title: 'The Flute I Never Knew Was Guiding Me',
    author: 'Siddhartha Rao',
    pdf: publicAsset("Siddhartha's article for MT-1.pdf"),
    description: 'Complete article as submitted for Music Therapy (PDF).',
  },
]
