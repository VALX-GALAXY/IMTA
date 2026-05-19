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
      <div className="grid gap-6 lg:grid-cols-2">
        {books.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </PageShell>
  )
}
