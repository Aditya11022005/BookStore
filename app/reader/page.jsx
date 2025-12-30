"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { books } from "@/lib/booksData";

const PdfReader = dynamic(
  () => import("@/components/reader/PdfReader"),
  { ssr: false }
);

export default function ReaderPage() {
  const params = useSearchParams();
  const bookId = params.get("book");
  const book = books.find(b => b.id === bookId);

  if (!book) return <p className="p-6">Book not found</p>;

  return <PdfReader file={book.file} bookId={book.id} />;
}
