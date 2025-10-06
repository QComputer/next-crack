"use client";
import { useLang } from "../LanguageProvider";
import { translations } from "../translations";

export default function Courses() {
  const { language } = useLang();
  const t = translations[language];

  const courses = [
    { title: language === "English" ? "Advanced Barista Skills" : language === "فارسی" ? "مهارت‌های پیشرفته باریستا" : "مهارات الباريستا المتقدمة", desc: language === "English" ? "Master espresso & latte art" : language === "فارسی" ? "مهارت اسپرسو و لاته آرت" : "إتقان الإسبرسو وفن اللاتيه", students: 250, lessons: 20, price: "₫ 3,800,000" },
  ];

  return (
    <section id="courses" className="courses-section">
      <h2>{t.courses.title}</h2>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:20, marginTop:14}}>
        {courses.map((c,i)=>(
          <div key={i} className="course-card">
            <div style={{height:160,borderRadius:10,background:"#f6f2ec",marginBottom:12,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <img src="/images/hero-coffee.jpg" alt={c.title} style={{width:"100%",height:"100%",objectFit:"cover"}} />
            </div>
            <h3 style={{fontSize:16}}>{c.title}</h3>
            <p style={{color:"var(--muted)", fontSize:13}}>{c.desc}</p>
            <div style={{display:"flex",justifyContent:"space-between",color:"var(--muted)",marginTop:8}}>
              <span>👨‍🎓 {c.students} </span>
              <span>📘 {c.lessons} </span>
            </div>
            <div style={{marginTop:10,fontWeight:700,color:"var(--green)"}}>{c.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
