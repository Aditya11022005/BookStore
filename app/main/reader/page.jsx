import PdfReader from "@/components/reader/PdfReader";
import { books } from "@/lib/booksData";

export default function ReaderPage({ searchParams }) {
  const bookId = searchParams.book;
  const book = books.find(b => b.id === bookId);

  if (!book) return <p>Book not found</p>;

  return (
    <main>
      <h2 style={{ textAlign: "center" }}>{book.title}</h2>
      <PdfReader file={book.file} />
    </main>
  );
}
