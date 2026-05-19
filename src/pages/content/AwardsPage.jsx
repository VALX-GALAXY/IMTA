import { useMemo, useState } from 'react'
import { PageShell } from '@/components/layout/PageShell'
import { ContentSection } from '@/components/content/ContentSection'
import { AwardCard, AwardCategoryCard } from '@/components/content/AwardCard'
import { YearFilter } from '@/components/content/YearFilter'
import { awardCategories, awardWinners } from '@/data/awards'

const winnerYears = [...new Set(awardWinners.map((a) => a.year))].sort((a, b) => b - a)

export function AwardsPage() {
  const [selectedYear, setSelectedYear] = useState('all')

  const filtered = useMemo(() => {
    if (selectedYear === 'all') return awardWinners.filter((a) => !a.featured)
    return awardWinners.filter((a) => a.year === selectedYear && !a.featured)
  }, [selectedYear])

  const featured = awardWinners.find((a) => a.featured)

  return (
    <PageShell
      title="Awards & Honors"
      description="National recognition for excellence in music therapy practice, research, and selfless service."
      className="pb-20"
    >
      {featured ? (
        <ContentSection title="Latest Announcement">
          <AwardCard award={featured} />
        </ContentSection>
      ) : null}

      <ContentSection
        title="Award Winners"
        description="Honourees recognised across categories and years."
        className="mt-14"
      >
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedYear('all')}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              selectedYear === 'all'
                ? 'bg-ink text-surface'
                : 'bg-highlight text-earth hover:bg-gold/20'
            }`}
          >
            All Years
          </button>
          <YearFilter
            years={winnerYears}
            selected={selectedYear === 'all' ? null : selectedYear}
            onChange={setSelectedYear}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((award) => (
            <AwardCard
              key={`${award.year}-${award.name ?? award.title}`}
              award={award}
            />
          ))}
        </div>
      </ContentSection>

      <ContentSection
        title="Awards Instituted"
        description="Annual awards open to IMTA members — eligibility and prizes."
        className="mt-16"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {awardCategories.map((category) => (
            <AwardCategoryCard key={category.name} category={category} />
          ))}
        </div>
        <p className="mt-6 text-sm text-earth">
          Note: Only IMTA members are eligible for the above awards.
        </p>
      </ContentSection>
    </PageShell>
  )
}

export function AwardAnnouncementPage() {
  const featured = awardWinners.find((a) => a.featured)

  return (
    <PageShell
      title="Award Announcement 2026"
      description="Official announcement of IMTA national awards for 2026 — categories, timelines, and nomination guidance."
      className="pb-20"
    >
      {featured ? <AwardCard award={featured} /> : null}

      <ContentSection
        title="Award Categories"
        description="Annual awards instituted by IMTA in collaboration with NADA Centre for Music Therapy."
        className="mt-14"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {awardCategories.map((category) => (
            <AwardCategoryCard key={category.name} category={category} />
          ))}
        </div>
      </ContentSection>
    </PageShell>
  )
}
