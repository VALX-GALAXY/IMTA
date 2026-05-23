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
