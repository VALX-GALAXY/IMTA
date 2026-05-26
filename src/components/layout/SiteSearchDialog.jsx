import { Search } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { searchSite } from '@/lib/siteSearch'
import { cn } from '@/lib/utils'

export function SiteSearchDialog({ open, onOpenChange }) {
  const navigate = useNavigate()
  const inputId = useId()
  const inputRef = useRef(null)
  const [query, setQuery] = useState('')
  const results = searchSite(query)

  useEffect(() => {
    if (!open) {
      setQuery('')
      return
    }
    const timer = window.setTimeout(() => inputRef.current?.focus(), 50)
    return () => window.clearTimeout(timer)
  }, [open])

  useEffect(() => {
    function onKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        onOpenChange(true)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onOpenChange])

  function goTo(href) {
    onOpenChange(false)
    navigate(href)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton
        className="gap-0 overflow-hidden p-0 sm:max-w-lg"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader className="border-b border-border px-4 py-4 text-left">
          <DialogTitle className="font-sans text-base font-semibold text-ink">
            Search IMTA
          </DialogTitle>
          <DialogDescription className="text-earth">
            Find pages, programmes, and life members.
          </DialogDescription>
        </DialogHeader>

        <div className="px-4 pt-4">
          <label htmlFor={inputId} className="sr-only">
            Search
          </label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-earth"
              aria-hidden
            />
            <input
              ref={inputRef}
              id={inputId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && results[0]) {
                  e.preventDefault()
                  goTo(results[0].href)
                }
              }}
              placeholder="Search pages, events, members…"
              autoComplete="off"
              className="w-full rounded-xl border border-border bg-surface py-2.5 pr-3 pl-10 text-sm text-ink outline-none transition-shadow focus:border-gold focus:ring-2 focus:ring-gold/20"
            />
          </div>
        </div>

        <div
          className="max-h-[min(50vh,320px)] overflow-y-auto px-2 pb-3 pt-2"
          role="listbox"
          aria-label="Search results"
        >
          {query.trim() && results.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-earth">No results found.</p>
          ) : null}

          {!query.trim() ? (
            <p className="px-3 py-4 text-center text-xs text-earth">
              Type to search — or press{' '}
              <kbd className="rounded border border-border bg-highlight px-1.5 py-0.5 font-mono text-[10px]">
                ⌘K
              </kbd>
            </p>
          ) : null}

          <ul className="space-y-0.5">
            {results.map((result) => (
              <li key={`${result.href}-${result.title}`}>
                <button
                  type="button"
                  role="option"
                  onClick={() => goTo(result.href)}
                  className={cn(
                    'flex w-full flex-col gap-0.5 rounded-lg px-3 py-2.5 text-left transition-colors',
                    'hover:bg-highlight focus-visible:bg-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold',
                  )}
                >
                  <span className="text-sm font-medium text-ink">{result.title}</span>
                  {result.subtitle ? (
                    <span className="line-clamp-2 text-xs leading-relaxed text-earth">
                      {result.subtitle}
                    </span>
                  ) : null}
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-gold">
                    {result.category}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
