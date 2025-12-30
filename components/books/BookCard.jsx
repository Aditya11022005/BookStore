import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <div className="rounded-xl border bg-card shadow-sm hover:shadow-md transition p-4">
      <div className="h-56 bg-muted rounded-lg mb-4 flex items-center justify-center text-muted-foreground">
        📘 Cover
      </div>

      <h3 className="font-semibold text-lg">{book.title}</h3>
      <p className="text-sm text-muted-foreground">{book.author}</p>

      <Link
        href={`/reader?book=${book.id}`}
        className="mt-4 inline-block text-sm font-medium text-primary"
      >
        Read Book →
      </Link>
    </div>
  );
}
