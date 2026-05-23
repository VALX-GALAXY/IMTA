import { EMagazineCover } from '@/components/content/EMagazineCover'
import { EMagazineFeatureArticle } from '@/components/content/EMagazineFeatureArticle'
import { PageShell } from '@/components/layout/PageShell'
import { eMagazineArticles } from '@/data/eMagazine'

function MagazineArticleBody({ article }) {
  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Continue reading</p>
        <h2 className="mt-3 font-serif text-2xl font-medium leading-snug text-ink md:text-3xl">
          {article.title}
        </h2>
        <p className="mt-2 text-sm font-medium text-earth md:text-base">{article.author}</p>
        <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </header>

      <div className="space-y-6 rounded-2xl border border-border bg-surface p-6 shadow-surface md:p-10">
        {article.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-base leading-[1.9] text-ink/90 first:text-lg first:leading-[1.85] md:first:text-xl"
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
      <div className="mx-auto max-w-5xl space-y-14 md:space-y-20">
        {eMagazineArticles.map((article, index) => (
          <div key={article.id}>
            {index > 0 ? (
              <div
                className="mx-auto mb-14 flex max-w-md items-center gap-4 md:mb-20"
                aria-hidden
              >
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
                <span className="font-serif text-sm text-gold">♪</span>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
              </div>
            ) : null}
            <div className="space-y-12 md:space-y-16">
              <EMagazineCover article={article} />
              {article.sections?.length ? (
                <EMagazineFeatureArticle article={article} />
              ) : (
                <MagazineArticleBody article={article} />
              )}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
