"use client";
import { useLang } from "../LanguageProvider";
import { translations } from "../translations";

export default function About() {
  const { language } = useLang();
  const t = translations[language];
  return (
    <section id="about" className="about-section">
      <div style={{display:"flex", gap:24, alignItems:"flex-start", justifyContent:"space-between"}}>
        <div style={{flex:1}}>
          <h2 className="about-heading">{t.about.title} <span>{/* visual accent */}</span></h2>
          <p className="about-text">{t.about.description}</p>
        </div>

        <div style={{width:260}}>
          <img src="/images/hero-coffee.jpg" alt="beans" style={{width:"100%", borderRadius:12}} />
        </div>
      </div>
    </section>
  );
}
