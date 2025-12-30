import BookGrid from "@/components/books/BookGrid";

export default function HomePage() {
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">📚 Book Store</h1>
      <p className="text-muted-foreground mt-2">
        Read books with a smooth, modern reader experience.
      </p>

      <BookGrid />
    </main>
  );
}
