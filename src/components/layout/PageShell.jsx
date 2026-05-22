import { cn } from '@/lib/utils'

export function PageShell({ title, description, children, className }) {
  return (
    <section className={cn('bg-canvas py-16 md:py-24', className)}>
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <h1 className="font-sans text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-earth md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {children ? (
        <div className="mx-auto mt-12 w-full max-w-5xl px-4 md:px-6">{children}</div>
      ) : null}
    </section>
  )
}
