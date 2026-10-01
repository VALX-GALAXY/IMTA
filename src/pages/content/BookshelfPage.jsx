import { PageShell } from '@/components/layout/PageShell'
import { BookCard } from '@/components/content/BookCard'
import { books, memberBooksNote } from '@/data/books'

export function BookshelfPage() {
  return (
    <PageShell
      title="Bookshelf"
      description={memberBooksNote}
      className="pb-20"
    >
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </PageShell>
  )
}
