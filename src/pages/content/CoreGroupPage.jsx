import { PageShell } from '@/components/layout/PageShell'
import { ContentSection } from '@/components/content/ContentSection'
import { ProfileCard } from '@/components/content/ProfileCard'
import {
  coreGroupMembers,
  governingCouncil,
  organizingCommittee2022,
} from '@/data/coreGroup'

export function CoreGroupPage() {
  return (
    <PageShell
      title="Core Group & Governing Council"
      description="Leadership guiding the Indian Music Therapy Association — honorary office bearers and the organising committee."
      className="pb-20"
    >
      <ContentSection title="Governing Council">
        <ProfileCard {...governingCouncil} role={governingCouncil.role} featured />
      </ContentSection>

      <ContentSection
        title="IMTA Core Group"
        description="Honorary office bearers serving the association across India."
        className="mt-14"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreGroupMembers.map((member) => (
            <ProfileCard key={member.name} {...member} />
          ))}
        </div>
      </ContentSection>

      <ContentSection
        title="Organising Committee — Conference 2022"
        description="Members who coordinated the 5th Annual Virtual World Conference & Music Therapy Festival."
        className="mt-14"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {organizingCommittee2022.map((member) => (
            <div
              key={member.name}
              className="rounded-xl border border-border bg-surface px-4 py-3 shadow-sm transition-colors hover:border-gold/30"
            >
              <p className="font-medium text-ink">{member.name}</p>
              <p className="mt-0.5 text-sm text-earth">{member.location}</p>
            </div>
          ))}
        </div>
      </ContentSection>
    </PageShell>
  )
}
