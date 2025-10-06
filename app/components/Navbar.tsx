"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { FaHome, FaCoffee } from "react-icons/fa";
import { MdCampaign, MdMenuBook } from "react-icons/md";

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState<"English" | "فارسی" | "العربية">("English");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load saved theme + language
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const savedLang = localStorage.getItem("language") as "English" | "فارسی" | "العربية" | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
    if (savedLang) {
      setLanguage(savedLang);
      document.documentElement.setAttribute("lang", savedLang === "English" ? "en" : savedLang === "فارسی" ? "fa" : "ar");
      document.documentElement.setAttribute("dir", savedLang === "English" ? "ltr" : "rtl");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Change language + persist
  const changeLanguage = (lang: "English" | "فارسی" | "العربية") => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.setAttribute("lang", lang === "English" ? "en" : lang === "فارسی" ? "fa" : "ar");
    document.documentElement.setAttribute("dir", lang === "English" ? "ltr" : "rtl");
    setLangOpen(false);
  };

  return (
    <header className="navbar">
      {/* Row 1 */}
      <div className="navbar-top">
        {/* Left: Logo */}
        <div className="navbar-left">
          <div className="logo-circle">CR</div>
          <span className="logo-text">CRACK</span>
        </div>
        {/* Search */}
        <div className="search-wrapper">
          <input type="text" placeholder={language === "English" ? "Search" : language === "فارسی" ? "جستجو" : "بحث"} />
          <FiSearch className="search-icon" />
        </div>

        {/* Sign in + Cart */}
        <div className="top-actions">
          <button className="signin-btn">
            <FiUser />
            <span>{language === "English" ? "Sign in" : language === "فارسی" ? "ورود" : "تسجيل الدخول"}</span>
          </button>
          <button className="icon-btn">
            <FiShoppingCart />
          </button>
        </div>
      </div>

      {/* Row 2 */}
      <div className="navbar-bottom">
        <nav className="nav-links">
          <Link href="#home"><FaHome /> {language === "English" ? "Home" : language === "فارسی" ? "خانه" : "الرئيسية"}</Link>
          <Link href="#new"><MdCampaign /> {language === "English" ? "New Product" : language === "فارسی" ? "محصول جدید" : "منتج جديد"}</Link>
          <Link href="#coffees"><FaCoffee /> {language === "English" ? "Coffees" : language === "فارسی" ? "قهوه‌ها" : "قهوة"}</Link>
          <Link href="#courses"><MdMenuBook /> {language === "English" ? "Courses" : language === "فارسی" ? "دوره‌ها" : "الدورات"}</Link>
        </nav>

        <div className="nav-options">
          {/* Language Dropdown */}
          <div className="dropdown">
            <span onClick={() => setLangOpen(!langOpen)}>🌐 {language}</span>
            {langOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => changeLanguage("English")}>English</li>
                <li onClick={() => changeLanguage("فارسی")}>فارسی</li>
                <li onClick={() => changeLanguage("العربية")}>العربية</li>
              </ul>
            )}
          </div>

          {/* Theme Toggle */}
          <span className="theme" onClick={toggleTheme}>
            {theme === "light" ? "⭐ Light Theme" : "🌙 Dark Theme"}
          </span>
        </div>
      </div>
    </header>
  );
}
