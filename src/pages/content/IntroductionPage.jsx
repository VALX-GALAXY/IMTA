import { MapPin } from 'lucide-react'
import { PageShell } from '@/components/layout/PageShell'
import {
  imtaAddress,
  saraswatiImage,
  visionMissionItems,
  whyImtaParagraphs,
} from '@/data/introduction'

function DropCapParagraph({ letter, text }) {
  return (
    <p className="text-base leading-[1.85] text-ink/90">
      <span
        className="float-left mr-3 mt-1 flex size-11 items-center justify-center rounded-lg bg-imta-indigo/10 font-serif text-3xl font-semibold leading-none text-imta-indigo"
        aria-hidden
      >
        {letter}
      </span>
      {text}
    </p>
  )
}

export function IntroductionPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(imtaAddress.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  return (
    <PageShell
      title="IMTA Introduction"
      description="Our founding story, vision, and the journey of music therapy in India."
      className="pb-20"
    >
      <article className="overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-surface md:p-8 lg:p-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-10">
          <figure className="w-full max-w-[220px] shrink-0 md:max-w-[240px]">
            <div className="overflow-hidden rounded-xl bg-highlight shadow-sm">
              <img
                src={saraswatiImage}
                alt="Goddess Saraswati"
                className="w-full object-contain"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs tracking-wide text-earth">
              Goddess Saraswati — patron of music, learning &amp; the arts
            </figcaption>
          </figure>

          <div className="min-w-0 flex-1">
            <div className="mb-8">
              <h2 className="font-sans text-2xl font-semibold text-ink md:text-3xl">
                Why IMTA?
              </h2>
              <div className="mt-3 h-0.5 w-16 rounded-full bg-gold" />
            </div>

            <div className="space-y-7">
              {whyImtaParagraphs.map((paragraph) => (
                <DropCapParagraph
                  key={paragraph.letter}
                  letter={paragraph.letter}
                  text={paragraph.text}
                />
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface shadow-surface">
        <div className="border-b border-border px-6 py-8 text-center md:px-10">
          <h2 className="font-sans text-xl font-semibold tracking-wide text-ink md:text-2xl">
            OUR VISION &amp; MISSION
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-gold" />
        </div>

        <ul className="space-y-5 px-6 py-8 md:px-10 md:py-10">
          {visionMissionItems.map((item) => (
            <li key={item.slice(0, 40)} className="flex gap-4">
              <span
                className="mt-2 size-0 shrink-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-gold"
                aria-hidden
              />
              <p className="text-base leading-[1.85] text-ink/90">{item}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface shadow-surface">
        <div className="grid lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col justify-center gap-4 border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r">
            <div className="flex size-11 items-center justify-center rounded-full bg-gold/15">
              <MapPin className="size-5 text-gold" aria-hidden />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-ink">{imtaAddress.name}</h2>
              <p className="mt-1 text-sm font-medium text-gold">
                Indian Music Therapy Association
              </p>
            </div>
            <address className="space-y-0.5 not-italic text-sm leading-relaxed text-earth">
              {imtaAddress.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(imtaAddress.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-fit text-sm font-medium text-imta-indigo underline-offset-4 hover:underline"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="relative aspect-[4/3] min-h-[280px] bg-highlight lg:aspect-auto lg:min-h-[360px]">
            <iframe
              title="IMTA office location — Sree Maatha, Bengaluru"
              src={mapSrc}
              className="absolute inset-0 size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </PageShell>
  )
}
