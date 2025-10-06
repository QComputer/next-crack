"use client";

export default function Courses() {
  const courses = [
    { title: "Advanced Barista Skills", desc: "Master espresso & latte art", students: 250, lessons: 20, price: "3,800,000" },
    { title: "Roasting Fundamentals", desc: "Profiles, cupping & QC", students: 180, lessons: 15, price: "4,200,000" },
  ];

  return (
    <section id="courses" className="courses-section">
      <h2>Courses</h2>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:20, marginTop:14}}>
        {courses.map((c,i)=>(
          <div key={i} className="course-card">
            <div style={{height:160, borderRadius:10, background:"#f6f2ec", marginBottom:12, display:"flex", alignItems:"center", justifyContent:"center"}}>
              <img src="https://images.unsplash.com/photo-1517244683845-6d4b63f9483a?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c3d7f8a9b6b9d1c2e4f3a5c6b7d8e9f" alt={c.title} style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:10}} />
            </div>
            <h3 style={{fontSize:16}}>{c.title}</h3>
            <p style={{color:"var(--muted)", fontSize:13}}>{c.desc}</p>
            <div style={{display:"flex", justifyContent:"space-between", color:"var(--muted)", marginTop:8}}>
              <span>👨‍🎓 {c.students} students</span>
              <span>📘 {c.lessons} lessons</span>
            </div>
            <div style={{marginTop:10, fontWeight:700, color:"var(--green)"}}>₫ {c.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
