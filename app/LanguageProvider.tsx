"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Lang = "English" | "فارسی" | "العربية";

const LangContext = createContext<{
  language: Lang;
  setLanguage: (lang: Lang) => void;
}>({ language: "English", setLanguage: () => {} });

export const useLang = () => useContext(LangContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Lang>("English");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Lang | null;
    if (saved) setLanguage(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.setAttribute(
      "lang",
      language === "English" ? "en" : language === "فارسی" ? "fa" : "ar"
    );
    document.documentElement.setAttribute(
      "dir",
      language === "English" ? "ltr" : "rtl"
    );
  }, [language]);

  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
}
