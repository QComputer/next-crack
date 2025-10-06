"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Offers() {
  const offers = [
    { name: "Roaster Machine", price: "12,000,000", badge: "Hot Deal" },
    { name: "Cold Brew Kit", price: "1,200,000", badge: "Best Seller" },
    { name: "Barista Tools", price: "2,000,000", badge: "New" },
  ];

  return (
    <section id="offers" className="offers-section">
      <h2>Offers</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={18}
        breakpoints={{ 640:{slidesPerView:1}, 900:{slidesPerView:2}, 1200:{slidesPerView:3} }}
      >
        {offers.map((o,i)=>(
          <SwiperSlide key={i}>
            <div className="offer-card" style={{padding:16}}>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8}}>
                <div style={{fontWeight:700}}>{o.name}</div>
                <div style={{background: "var(--brown)", color:"#fff", padding:"4px 8px", borderRadius:8, fontSize:12}}>{o.badge}</div>
              </div>
              <div style={{height:120, borderRadius:10, background:"#faf5ef", marginBottom:12, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&s=0b3f8f6c2b2f0c5a6c6c1f6f3a8b5a3e" alt={o.name} style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:10}} />
              </div>
              <p style={{color:"var(--muted)", fontSize:13}}>Short description about the offer and what's included.</p>
              <div style={{marginTop:8, fontWeight:700, color:"var(--brown)"}}>₫ {o.price}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
