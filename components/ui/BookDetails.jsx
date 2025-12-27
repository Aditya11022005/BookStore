export default function BookDetails({
  book = {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    previewImage: "/placeholder.svg",
    author: {
      name: "XYZ",
      photo: "/author-photo.jpg",
      country: "India",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    type: "Information tech & AI",
    pages: 500,
    topics: new Array(1080),
  },
}) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-neutral-800">About book</h2>
        <p className="text-neutral-600 leading-relaxed text-sm">{book.description}</p>
        <div className="relative group overflow-hidden rounded-lg shadow-md max-w-sm">
          <img
            src={book.previewImage || "/placeholder.svg?height=200&width=300&query=open-book-preview"}
            alt="Book Preview"
            className="w-full h-auto transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white font-bold text-lg bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/30">
              Preview
            </span>
          </div>
        </div>
      </div>

      <div className="border border-neutral-100 rounded-xl overflow-hidden shadow-sm bg-white">
        {/* Author Row */}
        <div className="grid grid-cols-[140px_1fr] border-b border-neutral-100">
          <div className="p-6 bg-neutral-50/50 flex items-center justify-center font-bold text-neutral-700">Author</div>
          <div className="p-6 flex items-center gap-4">
            <img
              src={book.author.photo || "/placeholder.svg?height=60&width=60&query=author-headshot"}
              alt="Author"
              className="w-16 h-16 rounded-full object-cover border-2 border-primary/10"
            />
            <div>
              <h3 className="font-bold text-xl text-neutral-800 flex items-center gap-2">
                {book.author.name} <span className="text-sm font-normal text-neutral-400">{book.author.country}</span>
              </h3>
              <p className="text-xs text-neutral-500 mt-1">{book.author.bio}</p>
            </div>
          </div>
        </div>
        {/* Type Row */}
        <div className="grid grid-cols-[140px_1fr] border-b border-neutral-100">
          <div className="p-6 bg-neutral-50/50 flex items-center justify-center font-bold text-neutral-700">
            Book Type
          </div>
          <div className="p-6 text-neutral-600">{book.type}</div>
        </div>
        {/* Pages Row */}
        <div className="grid grid-cols-[140px_1fr]">
          <div className="p-6 bg-neutral-50/50 flex items-center justify-center font-bold text-neutral-700">
            page & Topics
          </div>
          <div className="p-6 text-neutral-600">
            {book.pages}/{book.topics.length}
          </div>
        </div>
      </div>
    </section>
  )
}
