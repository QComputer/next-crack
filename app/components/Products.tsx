"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLang } from "../LanguageProvider";
import { translations } from "../translations";

export default function Products() {
  const { language } = useLang();
  const t = translations[language];

  const products = [
    { name: language === "English" ? "Espresso Blend" : language === "فارسی" ? "بلند اسپرسو" : "مزيج الإسبريسو", price: "₫ 1,500,000", img: "/images/espresso.jpg" },
    { name: language === "English" ? "Cold Brew Bottle" : language === "فارسی" ? "بطری کلد برو" : "زجاجة كولد برو", price: "₫ 1,200,000", img: "/images/coldbrew.jpg" },
    { name: language === "English" ? "Filter Coffee" : language === "فارسی" ? "قهوه فیلتری" : "قهوة مفلترة", price: "₫ 1,600,000", img: "/images/filter.jpg" },
  ];

  return (
    <section id="products" className="products-section">
      <h2>{t.products.title}</h2>
      <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={20} breakpoints={{640:{slidesPerView:1},900:{slidesPerView:2},1200:{slidesPerView:3}}}>
        {products.map((p, i) => (
          <SwiperSlide key={i}>
            <div className="product-card">
              <div className="bag"><img src={p.img} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:10}}/></div>
              <h3 style={{fontSize:16, marginBottom:6}}>{p.name}</h3>
              <p style={{color:"var(--muted)", fontSize:13}}>{p.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
