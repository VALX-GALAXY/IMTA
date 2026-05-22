import { cn } from '@/lib/utils'

/** Soft sound-wave SVG — decorative only */
export function SoundWaves({ className, opacity = 0.35 }) {
  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={cn('pointer-events-none w-full', className)}
      aria-hidden
    >
      <path
        d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60 L1200,120 L0,120 Z"
        fill="currentColor"
        opacity={opacity}
      />
      <path
        d="M0,75 Q200,95 400,70 T800,80 T1200,70 L1200,120 L0,120 Z"
        fill="currentColor"
        opacity={opacity * 0.6}
      />
    </svg>
  )
}

export function MusicNotesFloat({ className }) {
  const notes = ['♪', '♫', '♩', '♬']
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden>
      {notes.map((note, i) => (
        <span
          key={note}
          className="home-note-float absolute font-serif text-gold/20"
          style={{
            left: `${12 + i * 22}%`,
            top: `${18 + (i % 2) * 35}%`,
            fontSize: `${1.5 + i * 0.4}rem`,
            animationDelay: `${i * 1.2}s`,
          }}
        >
          {note}
        </span>
      ))}
    </div>
  )
}

export function GradientOrbs({ className }) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden>
      <div className="home-orb absolute -left-20 top-1/4 size-72 rounded-full bg-gold/25 blur-3xl" />
      <div className="home-orb absolute -right-16 top-1/3 size-96 rounded-full bg-imta-indigo/20 blur-3xl [animation-delay:2s]" />
      <div className="home-orb absolute bottom-0 left-1/3 size-64 rounded-full bg-gold/15 blur-3xl [animation-delay:4s]" />
    </div>
  )
}

export function SectionDivider({ className }) {
  return (
    <div className={cn('relative flex items-center justify-center gap-4 py-2', className)} aria-hidden>
      <span className="h-px flex-1 max-w-[8rem] bg-gradient-to-r from-transparent to-gold/50 sm:max-w-[12rem]" />
      <span className="font-serif text-lg text-gold/70">♪</span>
      <span className="h-px flex-1 max-w-[8rem] bg-gradient-to-l from-transparent to-gold/50 sm:max-w-[12rem]" />
    </div>
  )
}
