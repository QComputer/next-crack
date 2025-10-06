"use client";
import { useLang } from "../LanguageProvider";
import { translations } from "../translations";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer(){
  const { language } = useLang();
  const t = translations[language];
  const isRTL = language !== "English";

  return (
    <footer className={`footer ${isRTL ? "rtl" : ""}`}>
      <div className="footer-top">
        <div className="footer-col">
          <h4>{t.footer.customerService}</h4>
          <ul>
            <li>{language === "English" ? "Contact Us" : language === "فارسی" ? "تماس با ما" : "اتصل بنا"}</li>
            <li>{language === "English" ? "Shipping Info" : language === "فارسی" ? "اطلاعات ارسال" : "معلومات الشحن"}</li>
            <li>{language === "English" ? "Returns" : language === "فارسی" ? "بازگشت کالا" : "الإرجاع"}</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t.footer.policies}</h4>
          <ul>
            <li>{language === "English" ? "Privacy Policy" : language === "فارسی" ? "سیاست حفظ حریم خصوصی" : "سياسة الخصوصية"}</li>
            <li>{language === "English" ? "Terms" : language === "فارسی" ? "شرایط" : "الشروط"}</li>
            <li>{language === "English" ? "Refund Policy" : language === "فارسی" ? "سیاست بازپرداخت" : "سياسة الاسترداد"}</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t.footer.quickLinks}</h4>
          <ul>
            <li>{language === "English" ? "About Us" : language === "فارسی" ? "درباره ما" : "من نحن"}</li>
            <li>{language === "English" ? "Courses" : language === "فارسی" ? "دوره‌ها" : "الدورات"}</li>
            <li>{language === "English" ? "Blog" : language === "فارسی" ? "بلاگ" : "مدونة"}</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t.footer.cafeHours}</h4>
          <p>{language === "English" ? "Mon–Fri: 8AM–9PM" : language === "فارسی" ? "دوشنبه تا جمعه: ۸ صبح تا ۹ شب" : "الإثنين–الجمعة: 8 صباحًا - 9 مساءً"}</p>
          <p>{language === "English" ? "Sat–Sun: 9AM–6PM" : language === "فارسی" ? "شنبه تا یکشنبه: ۹ صبح تا ۶ عصر" : "السبت–الأحد: 9 صباحًا - 6 مساءً"}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
        </div>
        <p>© {new Date().getFullYear()} {language === "English" ? "Crack Coffee. All rights reserved." : language === "فارسی" ? "کراک کافی. تمامی حقوق محفوظ است." : "كراك كوفي. جميع الحقوق محفوظة."}</p>
      </div>
    </footer>
  );
}
