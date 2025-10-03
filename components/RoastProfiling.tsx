"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RoastProfiling() {
    const features = [
        {
            title: "Customizable Roast Profiles",
            desc: "Easily create and save unique roast recipes.",
        },
        {
            title: "Integrated Production Scheduling",
            desc: "Plan and manage your roasting workflow.",
        },
        {
            title: "Detailed Reference Notes",
            desc: "Keep track of cupping notes and roast history.",
        },
        {
            title: "AI-Powered Curve Prediction",
            desc: "Leverage machine learning for optimal results.",
        },
        {
            title: "Inventory Management",
            desc: "Integrates seamlessly with Crispier’s tools.",
        },
    ];

    return (
        <section id="roast-profiling" className="roast-section">
            <h2>Roast Profiling</h2>
            <p className="subtitle">Ultimate roast profiling software</p>

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
                {features.map((f, index) => (
                    <SwiperSlide key={index}>
                        <div className="card feature-card">
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
