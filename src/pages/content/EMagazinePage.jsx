import { EMagazineDivider } from '@/components/content/EMagazineDivider'
import { EMagazineFeatureArticle } from '@/components/content/EMagazineFeatureArticle'
import { EMagazineJagarSection } from '@/components/content/EMagazineJagarSection'
import { EMagazineMasthead } from '@/components/content/EMagazineMasthead'
import { EMagazinePdfDownload } from '@/components/content/EMagazinePdfDownload'
import { EMagazinePhotoSlider } from '@/components/content/EMagazinePhotoSlider'
import { EMagazineSectionHeading } from '@/components/content/EMagazineSectionHeading'
import { EMagazineStoryLead } from '@/components/content/EMagazineStoryLead'
import { PageShell } from '@/components/layout/PageShell'
import { eMagazineArticles, eMagazineJagar, eMagazinePdfs } from '@/data/eMagazine'

function MagazineArticleBody({ article }) {
  return (
    <article className="mx-auto max-w-3xl">
      <div className="space-y-5 rounded-xl border border-border bg-surface p-5 shadow-surface md:p-8">
        {article.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-base leading-[1.85] text-ink/90 first:text-[1.05rem] md:first:text-lg"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  )
}

export function EMagazinePage() {
  return (
    <PageShell
      title="E-Magazine"
      description="Features, reflections, and stories from the IMTA community."
      className="pb-20"
    >
      <div className="mx-auto max-w-4xl space-y-10 md:space-y-14">
        <EMagazineMasthead />

        <section aria-label="Articles" className="space-y-10 md:space-y-14">
          {eMagazineArticles.map((article, index) => (
            <div key={article.id} className="space-y-6 md:space-y-8">
              {index > 0 ? <EMagazineDivider /> : null}
              <EMagazineStoryLead article={article} />
              {article.sections?.length ? (
                <EMagazineFeatureArticle article={article} compactHeader />
              ) : (
                <MagazineArticleBody article={article} />
              )}
            </div>
          ))}
        </section>

        <EMagazineDivider className="pt-2" />

        <section className="space-y-6" aria-labelledby="jagar-music-therapy">
          <EMagazineSectionHeading
            id="jagar-music-therapy"
            title="Jagar Music Therapy"
          />
          <EMagazineJagarSection jagar={eMagazineJagar} className="mx-auto max-w-4xl" />
        </section>

        <EMagazineDivider />

        <section className="space-y-6" aria-labelledby="emagazine-photos-heading">
          <EMagazineSectionHeading
            id="emagazine-photos-heading"
            title="Photo features"
            description="Event and field photographs from the IMTA community."
          />
          <EMagazinePhotoSlider className="mx-auto max-w-4xl" />
        </section>

        <EMagazineDivider />

        <section className="mx-auto max-w-2xl space-y-5" aria-labelledby="emagazine-pdfs-heading">
          <EMagazineSectionHeading
            id="emagazine-pdfs-heading"
            title="PDF articles"
            description="Download full articles — separate from the photographs above."
          />
          <div className="space-y-4">
            {eMagazinePdfs.map((item) => (
              <EMagazinePdfDownload key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  )
}
