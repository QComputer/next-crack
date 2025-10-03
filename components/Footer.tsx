"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>☕ Crack Coffee</h2>
          <p>
            Empowering coffee lovers with tools, courses, and products to
            perfect their craft. Taste the crack difference.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#products">Products</Link></li>
            <li><Link href="#courses">Courses</Link></li>
            <li><Link href="#offers">Offers</Link></li>
            <li><Link href="#blog">Blog</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">👍</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="YouTube">▶️</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Crack Coffee. All rights reserved.</p>
      </div>
    </footer>
  );
}
