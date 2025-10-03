"use client";

import { useEffect, useState } from "react";

export default function SpecialDiscount() {
    // Target date (example: 7 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance <= 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((distance / (1000 * 60)) % 60),
                seconds: Math.floor((distance / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="discount" className="discount-section">
            <h2>Special Discount</h2>
            <div className="discount-container">
                {/* Countdown */}
                <div className="countdown">
                    <div className="time-box">
                        <span>{timeLeft.days}</span>
                        <small>Days</small>
                    </div>
                    <div className="time-box">
                        <span>{timeLeft.hours}</span>
                        <small>Hours</small>
                    </div>
                    <div className="time-box">
                        <span>{timeLeft.minutes}</span>
                        <small>Minutes</small>
                    </div>
                    <div className="time-box">
                        <span>{timeLeft.seconds}</span>
                        <small>Seconds</small>
                    </div>
                </div>

                {/* Offer Card */}
                <div className="card discount-card">
                    <div className="badge">-35%</div>
                    <div className="image-placeholder">🎥</div>
                    <h3>Latte Art Training</h3>
                    <p>
                        Learn from professionals how to create beautiful latte art. Perfect
                        for baristas & coffee enthusiasts.
                    </p>
                    <div className="rating">★★★★★</div>
                    <div className="price">Now ₫2,450,000</div>
                </div>
            </div>
        </section>
    );
}
