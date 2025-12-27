export default function ReviewSection() {
  const reviews = [
    {
      id: 1,
      name: "XYZ ZYX",
      date: "01-01-2026",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    // ... existing reviews mapping ...
  ]

  return (
    <section className="space-y-12">
      <h2 className="text-2xl font-bold text-neutral-800">Happy Readers</h2>

      {/* Media Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-lg min-w-[200px]">
            <img
              src={`/unboxing-video-frame-.jpg?height=400&width=300&query=unboxing-video-frame-${i}`}
              alt="Reader content"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-2 py-1 w-fit">
                <img src="/abstract-geometric-shapes.png" className="w-5 h-5 rounded-full" />
                <span className="text-[10px] text-white font-medium uppercase tracking-tight">user name</span>
              </div>
              <p className="text-white font-bold text-sm leading-tight drop-shadow-md">Allen books unboxing</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8">
        {/* Rating Summary Area */}
        <div className="space-y-6">
          <div className="bg-white border border-neutral-100 p-8 rounded-2xl shadow-sm text-center">
            <div className="space-y-2 mb-6">
              <span className="text-5xl font-bold text-neutral-800">4.5/5</span>
              <div className="flex justify-center text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
              <p className="text-neutral-400 text-sm font-semibold">150 Review</p>
            </div>

            <div className="space-y-3 mb-8">
              {[5, 4, 3, 2, 1].map((num) => (
                <div key={num} className="flex items-center gap-3 text-sm">
                  <span className="w-6 text-neutral-500 font-bold">{num}⭐</span>
                  <div className="flex-1 h-3 bg-neutral-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: num === 5 ? "85%" : num === 4 ? "15%" : "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-neutral-100">
              <p className="text-sm text-neutral-500 mb-4 leading-relaxed">
                Review this product <br />
                <span className="text-xs">Share your thoughts with other customers</span>
              </p>
              <button className="w-full btn btn-primary py-2 text-sm bg-[#d64a1d]/90">Write review</button>
            </div>
          </div>
        </div>

        {/* Review List Area */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4 bg-white p-2 rounded-xl border border-neutral-100 shadow-sm">
            <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg shadow-md shadow-primary/20">
              All
            </button>
            <button className="px-4 py-2 text-neutral-500 text-sm font-medium hover:bg-neutral-50 rounded-lg">
              Review with image & video
            </button>
            <select className="bg-transparent text-sm font-medium focus:outline-none px-2 cursor-pointer ml-2">
              <option>All Ratings</option>
            </select>
            <select className="bg-transparent text-sm font-medium focus:outline-none px-2 cursor-pointer lg:ml-auto">
              <option>Sort By</option>
            </select>
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-neutral-100 p-6 rounded-2xl shadow-sm">
                <div className="flex gap-4">
                  <img src="/abstract-geometric-shapes.png" className="w-12 h-12 rounded-full ring-2 ring-neutral-50" />
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-neutral-800">XYZ ZYX</h4>
                      <span className="text-xs text-neutral-400 font-medium">01-01-2026</span>
                    </div>
                    <div className="text-yellow-400 text-xs tracking-tighter">⭐⭐⭐⭐</div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                      <button className="text-lg hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                        👍
                      </button>
                      <button className="text-lg hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                        👎
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
