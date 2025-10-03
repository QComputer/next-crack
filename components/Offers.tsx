"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Offers() {
  const offers = [
    {
      name: "Coffee Roaster Machine",
      desc: "Small-batch roaster for cafes.",
      price: "12,000,000",
      rating: 5,
      badge: "Hot Deal",
    },
    {
      name: "Espresso Training Course",
      desc: "Learn espresso extraction from pros.",
      price: "3,500,000",
      rating: 4,
      badge: "Limited",
    },
    {
      name: "Cold Brew Kit",
      desc: "Everything you need to brew cold coffee.",
      price: "1,200,000",
      rating: 5,
      badge: "Best Seller",
    },
    {
      name: "Barista Tools Set",
      desc: "Tampers, pitchers, and accessories.",
      price: "2,000,000",
      rating: 4,
      badge: "New",
    },
  ];

  return (
    <section id="offers" className="offers-section">
      <h2>Special Offers</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {offers.map((o, index) => (
          <SwiperSlide key={index}>
            <div className="card offer-card">
              <div className="badge">{o.badge}</div>
              <div className="image-placeholder">🔥</div>
              <h3>{o.name}</h3>
              <p>{o.desc}</p>
              <div className="rating">
                {"★".repeat(o.rating)}{"☆".repeat(5 - o.rating)}
              </div>
              <div className="price">₫ {o.price}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
