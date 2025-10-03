"use client";

export default function Blog() {
  const posts = [
    {
      title: "Top 5 Coffee Trends in 2025",
      desc: "Discover what's brewing in the coffee industry this year.",
      date: "Sep 15, 2025",
    },
    {
      title: "Roast Profiling Tips",
      desc: "Learn how to adjust your roast for perfect flavors.",
      date: "Aug 30, 2025",
    },
    {
      title: "From Bean to Cup",
      desc: "The journey of specialty coffee explained.",
      date: "Aug 10, 2025",
    },
  ];

  return (
    <section id="blog" className="blog-section">
      <h2>Latest Blog Posts</h2>
      <div className="grid grid-3">
        {posts.map((post, i) => (
          <div key={i} className="card blog-card">
            <div className="image-placeholder">📰</div>
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
            <span className="date">{post.date}</span>
            <a href="#" className="read-more">Read More →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
