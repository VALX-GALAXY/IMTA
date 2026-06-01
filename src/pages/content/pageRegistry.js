import { CoreGroupPage } from '@/pages/content/CoreGroupPage'
import { IntroductionPage } from '@/pages/content/IntroductionPage'
import { LifeMembersPage } from '@/pages/content/LifeMembersPage'
import { EventsPage } from '@/pages/content/EventsPage'
import { AwardsPage, AwardAnnouncementPage } from '@/pages/content/AwardsPage'
import { ConferencesPage } from '@/pages/content/ConferencesPage'
import { BookshelfPage } from '@/pages/content/BookshelfPage'
import { EMagazinePage } from '@/pages/content/EMagazinePage'
import { MembershipPage } from '@/pages/content/MembershipPage'
import { PgDiplomaPage } from '@/pages/content/PgDiplomaPage'
import { CollaboratingInstitutionsPage } from '@/pages/content/CollaboratingInstitutionsPage'

export const pageComponents = {
  introduction: IntroductionPage,
  'core-group': CoreGroupPage,
  'life-members': LifeMembersPage,
  events: EventsPage,
  'award-winners': AwardsPage,
  'award-announcement-2026': AwardAnnouncementPage,
  conferences: ConferencesPage,
  bookshelf: BookshelfPage,
  'e-magazine': EMagazinePage,
  membership: MembershipPage,
  'distance-learning': PgDiplomaPage,
  'collaborating-institutions': CollaboratingInstitutionsPage,
}
