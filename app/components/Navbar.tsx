"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { FaHome, FaCoffee } from "react-icons/fa";
import { MdCampaign, MdMenuBook } from "react-icons/md";
import { useLang } from "../LanguageProvider";
import { translations } from "../translations";

export default function Navbar() {
  const { language, setLanguage } = useLang();
  const t = translations[language];

  const [langOpen, setLangOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const changeLanguage = (lang: "English" | "فارسی" | "العربية") => {
    setLanguage(lang);
    setLangOpen(false);
  };

  return (
    <header className="navbar">
      {/* Row 1 */}
      <div className="navbar-top">
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: "var(--brown)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>CR</div>
          <div style={{ fontWeight: 800, color: "var(--brown)" }}>CRACK</div>
        </div>

        <div style={{ flex: 1, margin: "0 16px" }}>
          <div className="search-wrapper">
            <input placeholder={t.navbar.search} />
            <FiSearch className="search-icon" />
          </div>
        </div>

        <div className="top-actions">
          <button className="signin-btn"><FiUser /> <span>{t.navbar.signIn}</span></button>
          <button className="icon-btn"><FiShoppingCart /></button>
        </div>
      </div>

      {/* Row 2 */}
      <div className="navbar-bottom">
        <nav className="nav-links">
          <Link href="#home"><FaHome /> {t.navbar.home}</Link>
          <Link href="#new"><MdCampaign /> {t.navbar.newProduct}</Link>
          <Link href="#coffees"><FaCoffee /> {t.navbar.coffees}</Link>
          <Link href="#courses"><MdMenuBook /> {t.navbar.courses}</Link>
        </nav>

        <div className="nav-options" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="dropdown">
            <span onClick={() => setLangOpen((s) => !s)}>🌐 {language}</span>
            {langOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => changeLanguage("English")}>English</li>
                <li onClick={() => changeLanguage("فارسی")}>فارسی</li>
                <li onClick={() => changeLanguage("العربية")}>العربية</li>
              </ul>
            )}
          </div>

          <span className="theme" onClick={toggleTheme}>{theme === "light" ? "⭐ Light" : "🌙 Dark"}</span>
        </div>
      </div>
    </header>
  );
}
