import { PageShell } from '@/components/layout/PageShell'
import { ContentSection } from '@/components/content/ContentSection'
import { ProfileCard } from '@/components/content/ProfileCard'
import { coreGroupMembers } from '@/data/coreGroup'

export function CoreGroupPage() {
  return (
    <PageShell
      title="IMTA Core Group"
      description="Leadership guiding the Indian Music Therapy Association — honorary office bearers."
      className="pb-20"
    >
      <ContentSection
        title="IMTA Core Group"
        description="Honorary office bearers serving the association across India."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreGroupMembers.map((member) => (
            <ProfileCard key={member.name} {...member} />
          ))}
        </div>
      </ContentSection>
    </PageShell>
  )
}
