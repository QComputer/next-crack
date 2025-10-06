"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Products() {
  const products = [
    { name: "Espresso Blend", desc: "Rich & caramel", price: "1,500,000" },
    { name: "Ethiopia Single Origin", desc: "Floral & juicy", price: "1,800,000" },
    { name: "Colombian Roast", desc: "Smooth & sweet", price: "1,600,000" },
  ];

  return (
    <section id="products" className="products-section">
      <h2>New Product</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{ 768:{slidesPerView:2}, 1024:{slidesPerView:3} }}
      >
        {products.map((p, i)=>(
          <SwiperSlide key={i}>
            <div className="product-card">
              <div className="bag">
                <img src={`https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&s=7d85b2b4bb2f8d4eab1e3c0f0f4b9a2b`} alt={p.name} style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:10}} />
              </div>
              <h3 style={{fontSize:16, marginBottom:6}}>{p.name}</h3>
              <p style={{color:"var(--muted)", fontSize:13}}>{p.desc}</p>
              <div style={{marginTop:8, fontWeight:700, color:"var(--brown)"}}>₫ {p.price}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
