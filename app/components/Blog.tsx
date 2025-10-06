"use client";

export default function Blog() {
  const posts = [
    { title: "Top 5 Coffee Trends", desc: "What's brewing in 2025", date: "Sep 15, 2025" },
    { title: "Roast Profiling Tips", desc: "Adjust your roast for flavor", date: "Aug 30, 2025" },
    { title: "From Bean to Cup", desc: "The journey of specialty coffee", date: "Aug 10, 2025" },
  ];

  return (
    <section id="blog" className="blog-section">
      <h2 style={{color:"var(--brown)"}}>Blog</h2>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:18, marginTop:14}}>
        {posts.map((p,i)=>(
          <article key={i} className="blog-card">
            <div style={{height:140, borderRadius:10, overflow:"hidden", marginBottom:10}}>
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f9b9dca7c6d7a4a4c39d2a8f9a6f8e6" alt={p.title} style={{width:"100%", height:"100%", objectFit:"cover"}} />
            </div>
            <h3 style={{fontSize:16}}>{p.title}</h3>
            <p style={{color:"var(--muted)", fontSize:13}}>{p.desc}</p>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:8}}>
              <small style={{color:"var(--muted)"}}>{p.date}</small>
              <a href="#" style={{color:"var(--green)", fontWeight:700}}>Read →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
