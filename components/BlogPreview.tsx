export default function BlogPreview() {
  const blogImages = [
    "/blog-1.png",
    "/blog-2.png",
    "/blog-3.png",
    "/blog-4.png",
  ]

  return (
    <section id="blog" className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold">Blog</h2>
      <div className="mt-6 flex gap-4 overflow-x-auto py-2">
        {blogImages.map((img, i) => (
          <article key={i} className="min-w-[220px] bg-white/5 rounded-xl p-4">
            <div
              className="h-28 rounded-md bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
            <h4 className="mt-3 font-semibold">Post title #{i + 1}</h4>
            <p className="text-xs text-neutral-400 mt-1">Short excerpt about coffee and craft.</p>
          </article>
        ))}
      </div>
    </section>
  )
}