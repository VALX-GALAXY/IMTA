import { cn } from '@/lib/utils'

export function YearFilter({ years, selected, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {years.map((year) => (
        <button
          key={year}
          type="button"
          onClick={() => onChange(year)}
          className={cn(
            'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
            selected === year
              ? 'bg-ink text-surface'
              : 'bg-highlight text-earth hover:bg-gold/20',
          )}
        >
          {year}
        </button>
      ))}
    </div>
  )
}
