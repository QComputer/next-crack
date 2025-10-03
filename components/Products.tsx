"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Products() {
    const products = [
        {
            name: "Espresso Blend",
            desc: "Rich & bold, perfect for cappuccinos.",
            price: "1,500,000",
            rating: 5,
        },
        {
            name: "Single Origin Ethiopia",
            desc: "Floral & fruity with vibrant acidity.",
            price: "1,800,000",
            rating: 4,
        },
        {
            name: "Colombian Roast",
            desc: "Smooth body, caramel sweetness.",
            price: "1,600,000",
            rating: 5,
        },
        {
            name: "Decaf Special",
            desc: "All flavor, no caffeine.",
            price: "1,400,000",
            rating: 3,
        },
    ];

    return (
        <section id="products" className="products-section">
            <h2>New Products</h2>

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
                {products.map((p, index) => (
                    <SwiperSlide key={index}>
                        <div className="card product-card">
                            <div className="image-placeholder">📦</div>
                            <h3>{p.name}</h3>
                            <p>{p.desc}</p>
                            <div className="rating">
                                {"★".repeat(p.rating)}{"☆".repeat(5 - p.rating)}
                            </div>
                            <div className="price">₫ {p.price}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
