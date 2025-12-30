import BookCard from "./BookCard";
import { books } from "@/lib/booksData";

export default function BookGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
