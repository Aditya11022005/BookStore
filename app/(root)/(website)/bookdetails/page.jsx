import BookInfo from "@/components/ui/BookInfo"
import BookDetails from "@/components/ui/BookDetails"
import ReviewSection from "@/components/ui/ReviewSection"

export default function BookDetailPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-5 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm font-semibold uppercase mb-8 text-neutral-500">
        <a href="/" className="hover:text-primary transition-colors">
          HOME
        </a>
        <span>/</span>
        <span className="text-primary">book details</span>
      </nav>

      {/* Product Top Section */}
      <BookInfo />

      {/* Middle Specs & About Section */}
      <BookDetails />

      {/* Bottom Reviews Section */}
      <ReviewSection />
    </main>
  )
}
