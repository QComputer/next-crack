"use client";
import Image from "next/image";
import { useLang } from "../LanguageProvider";
import { translations } from "../translations";

export default function RoastProfiling() {
  const { language } = useLang();
  const t = translations[language];

  return (
    <section className="roast-section" id="roast">
      <div className="roast-container">
        <div className="roast-text">
          <h2>{t.roast.title}</h2>
          <ul>
            {t.roast.features.map((f, idx) => (
              <li key={idx}>☕ {f}</li>
            ))}
          </ul>
          <button className="roast-btn">
            {language === "English" ? "Learn More" : language === "فارسی" ? "بیشتر بدانید" : "اعرف المزيد"}
          </button>
        </div>

        <div className="roast-image">
          <Image src="/images/roast-machine.jpg" alt="Roasting machine" width={480} height={360} className="roast-photo" />
        </div>
      </div>
    </section>
  );
}
