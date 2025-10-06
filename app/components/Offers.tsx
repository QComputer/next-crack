"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLang } from "../LanguageProvider";
import { translations } from "../translations";

export default function Offers() {
  const { language } = useLang();
  const t = translations[language];

  const offers = [
    { name: language === "English" ? "Roaster Machine" : language === "فارسی" ? "دستگاه رست" : "ماكينة التحميص", price: "₫ 12,000,000", img: "/images/espresso.jpg" },
    { name: language === "English" ? "Cold Brew Kit" : language === "فارسی" ? "ست کلد برو" : "عدة كولد برو", price: "₫ 1,200,000", img: "/images/coldbrew.jpg" },
    { name: language === "English" ? "Barista Tools" : language === "فارسی" ? "ابزار باریستا" : "أدوات البارستا", price: "₫ 2,000,000", img: "/images/filter.jpg" },
  ];

  return (
    <section id="offers" className="offers-section">
      <h2>Offers</h2>
      <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={18} breakpoints={{640:{slidesPerView:1},900:{slidesPerView:2},1200:{slidesPerView:3}}}>
        {offers.map((o, i) => (
          <SwiperSlide key={i}>
            <div className="offer-card">
              <div style={{height:120,borderRadius:10,overflow:"hidden",marginBottom:12}}>
                <img src={o.img} alt={o.name} style={{width:"100%",height:"100%",objectFit:"cover"}} />
              </div>
              <div style={{fontWeight:700}}>{o.name}</div>
              <div style={{marginTop:8,color:"var(--muted)"}}>{o.price}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
