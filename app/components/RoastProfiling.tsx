"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RoastProfiling() {
  const features = [
    { title: "Customizable roast profiles", desc: "Create, visualize and save roast curves." },
    { title: "Production scheduling", desc: "Plan roasts and manage batches." },
    { title: "Reference notes", desc: "Store roast notes and tasting records." },
    { title: "Curve prediction", desc: "AI suggestions for consistent results." },
    { title: "Inventory sync", desc: "Integrates with inventory tools." },
  ];

  return (
    <section id="roast-profiling" className="roast-section">
      <div className="roast-content">
        <h2>Roast Profiling</h2>
        <div className="subtitle">Ultimate roast profiling software</div>
        <ul className="feature-list">
          {features.map((f, i) => <li key={i}>{f.title} — <span style={{color:"var(--muted)"}}>{f.desc}</span></li>)}
        </ul>
      </div>

      <div style={{width:420}}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          style={{padding:8}}
        >
          {[1,2,3].map((n)=>(
            <SwiperSlide key={n}>
              <div className="feature-card">
                <img src={`https://images.unsplash.com/photo-1517976487492-6a8f9d5a0821?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&s=8b9bdb1a7e3e6b7c8a2b71e0a3e2b49a`} alt="profile" style={{width:"100%", borderRadius:10}} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
