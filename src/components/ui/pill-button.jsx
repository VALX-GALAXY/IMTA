import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const CIRCLE_R = 14
const CIRCLE_C = 2 * Math.PI * CIRCLE_R

function PillButtonContent({ children, showIcon }) {
  return (
    <>
      {/* White progress fill — sweeps left to right on hover */}
      <span
        className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/pill:scale-x-100"
        aria-hidden
      />

      <span className="relative z-10 flex items-center gap-2.5">
        {showIcon ? (
          <span className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-ink">
            {/* Clockwise ring progress */}
            <svg
              className="absolute inset-0 size-full -rotate-90"
              viewBox="0 0 32 32"
              aria-hidden
            >
              <circle
                cx="16"
                cy="16"
                r={CIRCLE_R}
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={CIRCLE_C}
                className="stroke-dashoffset-[88] transition-[stroke-dashoffset] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/pill:stroke-dashoffset-0"
              />
            </svg>
            <Plus
              className="relative size-4 text-canvas transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/pill:rotate-90"
              strokeWidth={2.5}
            />
          </span>
        ) : null}
        <span className="pr-0.5">{children}</span>
      </span>
    </>
  )
}

export function PillButton({
  children,
  to,
  href,
  className,
  showIcon = true,
  ...props
}) {
  const classes = cn(
    'group/pill relative inline-flex h-11 cursor-pointer items-center overflow-hidden rounded-full bg-gold pl-1.5 pr-5 text-sm font-medium text-ink shadow-surface transition-shadow hover:shadow-surface-lg active:scale-[0.98]',
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        <PillButtonContent showIcon={showIcon}>{children}</PillButtonContent>
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        <PillButtonContent showIcon={showIcon}>{children}</PillButtonContent>
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      <PillButtonContent showIcon={showIcon}>{children}</PillButtonContent>
    </button>
  )
}
