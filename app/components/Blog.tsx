"use client";
import { useLang } from "../LanguageProvider";
import { translations } from "../translations";

export default function Blog() {
  const { language } = useLang();
  const t = translations[language];

  const posts = [
    { title: language === "English" ? "Top 5 Coffee Trends" : language === "فارسی" ? "۵ روند برتر قهوه" : "أهم 5 اتجاهات للقهوة", desc: language === "English" ? "What's brewing in 2025" : language === "فارسی" ? "چه چیزهایی در حال رخ دادن است" : "ما الجديد في 2025", date: "Sep 15, 2025" },
  ];

  return (
    <section id="blog" className="blog-section">
      <h2>{t.blog.title}</h2>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:18, marginTop:14}}>
        {posts.map((p,i)=>(
          <article key={i} className="blog-card">
            <div style={{height:140,borderRadius:10,overflow:"hidden",marginBottom:10}}>
              <img src="/images/hero-coffee.jpg" alt={p.title} style={{width:"100%",height:"100%",objectFit:"cover"}} />
            </div>
            <h3 style={{fontSize:16}}>{p.title}</h3>
            <p style={{color:"var(--muted)", fontSize:13}}>{p.desc}</p>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8}}>
              <small style={{color:"var(--muted)"}}>{p.date}</small>
              <a href="#" style={{color:"var(--green)",fontWeight:700}}>Read →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
