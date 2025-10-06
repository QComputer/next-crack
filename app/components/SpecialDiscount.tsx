"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useLang } from "../LanguageProvider";
import { translations } from "../translations";

export default function SpecialDiscount() {
  const { language } = useLang();
  const t = translations[language];

  const products = [
    { id: 1, name: language === "English" ? "Espresso Blend" : language === "فارسی" ? "بلند اسپرسو" : "مزيج الإسبريسو", price: "$24.99", old: "$32.99", img: "/images/espresso.jpg" },
    { id: 2, name: language === "English" ? "Cold Brew Bottle" : language === "فارسی" ? "بطری کلد برو" : "زجاجة كولد برو", price: "$12.50", old: "$18.00", img: "/images/coldbrew.jpg" },
    { id: 3, name: language === "English" ? "Filter Coffee" : language === "فارسی" ? "قهوه فیلتری" : "قهوة مفلترة", price: "$16.00", old: "$21.50", img: "/images/filter.jpg" },
  ];

  return (
    <section className="special-discount" id="discount">
      <div className="discount-container">
        <h2 className="discount-title">{t.discount.title}</h2>

        <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={20} slidesPerView={1} breakpoints={{640:{slidesPerView:2},1024:{slidesPerView:3}}} dir={language === "English" ? "ltr" : "rtl"}>
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="discount-card">
                <div className="discount-img">
                  <img src={p.img} alt={p.name} style={{width:"100%",height:200,objectFit:"cover"}} />
                  <span className="discount-badge">{language === "English" ? "25% OFF" : language === "فارسی" ? "۲۵٪ تخفیف" : "خصم 25٪"}</span>
                </div>

                <div className="discount-info">
                  <h3>{p.name}</h3>
                  <div className="price"><span className="new">{p.price}</span><span className="old">{p.old}</span></div>
                  <button className="buy-btn">{language === "English" ? "Add to Cart" : language === "فارسی" ? "افزودن به سبد" : "أضف إلى السلة"}</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
