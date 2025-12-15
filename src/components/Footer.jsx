import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  // Translation content
  const translations = {
    vi: {
      companyName: "Agua International Education",
      quickLinks: "Liên kết nhanh",
      contact: "Liên hệ",
      home: "Trang Chủ",
      programs: "Gói Học Tập",
      people: "Con Người",
      opportunities: "Triết Lí",
      address: "20 Mỹ Giang 2A, Khu biệt thự Phú Mỹ Hưng, Quận 7, TP. Hồ Chí Minh",
      phone: "+84 28 1234 5678",
      email: "info@agua.edu.vn",
      copyright: "© {year} Agua International Education. Bảo lưu mọi quyền.",
      privacy: "Chính sách bảo mật",
      terms: "Điều khoản sử dụng",
      sitemap: "Sitemap"
    },
    en: {
      companyName: "Agua International Education",
      quickLinks: "Quick Links",
      contact: "Contact",
      home: "Home",
      programs: "Study Packages",
      people: "Our People",
      opportunities: "Philosophy",
      address: "20 My Giang 2A, Phu My Hung, District 7, Ho Chi Minh City",
      phone: "+84 28 1234 5678",
      email: "info@agua.edu.vn",
      copyright: "© {year} Agua International Education. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      sitemap: "Sitemap"
    }
  };

  const t = translations[language] || translations.en;

  return (
    <footer className="bg-[#2B82C2] text-white relative overflow-hidden">
      {/* Border trang trí phía trên */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400"></div>
      
      {/* Hiệu ứng sóng nước */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="rgba(255,255,255,0.1)"></path>
        </svg>
      </div>

      {/* Pattern nền */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-white rounded-full"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info - Chiếm 2 cột */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative mr-4">
                <div className="absolute inset-0 bg-white/20 blur-lg rounded-full"></div>
                <img
                  src="/images/logo2.png"
                  alt="Agua International Education"
                  className="h-14 w-auto relative"
                />
              </div>
              <div>
                <h3 className="text-3xl font-semibold mb-1">
                  {t.companyName}
                </h3>
                <p className="text-blue-100 text-sm">
                  {language === "vi" ? "Giáo dục không biên giới" : "Education Without Borders"}
                </p>
              </div>
            </div>

            <p className="text-blue-100 mb-6 max-w-xl text-lg leading-relaxed">
              {language === "vi" 
                ? "AGUA - Nơi mỗi hành trình học tập được dẫn dắt bởi tri thức, cảm hứng và sự đồng hành tận tâm." 
                : "AGUA - Where every learning journey is guided by knowledge, inspiration, and dedicated mentorship."}
            </p>

            {/* Social Media với border trang trí */}
            <div className="flex space-x-4 border-l-4 border-cyan-300 pl-6 py-3">
              <a href="#" className="group relative p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300">
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-300 rounded-full transition-all duration-300"></div>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="group relative p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300">
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-400 rounded-full transition-all duration-300"></div>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" className="group relative p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300">
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-full transition-all duration-300"></div>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="group relative p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300">
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-400 rounded-full transition-all duration-300"></div>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links - với border trang trí */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
            <h4 className="text-xl font-semibold mb-6 pb-3 border-b border-white/20">
              {t.quickLinks}
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", text: t.home },
                { href: "/services", text: t.programs },
                { href: "/about", text: t.people },
                { href: "/philosophy", text: t.opportunities },
                { href: "/blog", text: language === "vi" ? "Blog & Tin tức" : "Blog & News" },
                { href: "/contact", text: language === "vi" ? "Liên hệ" : "Contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <svg className="w-4 h-4 mr-3 text-cyan-300 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - với border trang trí */}
          <div className="relative bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="absolute -top-3 left-6 bg-[#2B82C2] px-4 py-1 rounded-full text-sm font-semibold">
              {t.contact}
            </div>
            <ul className="space-y-5 text-blue-100">
              <li className="flex items-start group">
                <div className="p-2 bg-white/10 rounded-lg mr-4 group-hover:bg-white/20 transition-colors duration-300">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span dangerouslySetInnerHTML={{ __html: t.address }} />
              </li>
              <li className="flex items-center group">
                <div className="p-2 bg-white/10 rounded-lg mr-4 group-hover:bg-white/20 transition-colors duration-300">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>{t.phone}</span>
              </li>
              <li className="flex items-center group">
                <div className="p-2 bg-white/10 rounded-lg mr-4 group-hover:bg-white/20 transition-colors duration-300">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>{t.email}</span>
              </li>
            </ul>
            
            {/* Newsletter mini form */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-blue-100 mb-3">
                {language === "vi" ? "Đăng ký nhận tin" : "Subscribe to updates"}
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder={language === "vi" ? "Email của bạn" : "Your email"}
                  className="flex-grow px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-sm outline-none focus:bg-white/20"
                />
                <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer với border trang trí */}
      <div className="relative border-t border-white/20">
        {/* Gradient border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-blue-100 text-sm">
                {t.copyright.replace("{year}", new Date().getFullYear())}
              </p>
              <p className="text-blue-200/70 text-xs mt-2">
                {language === "vi" 
                  ? "Mọi quyền được bảo lưu. Thiết kế với cho giáo dục tương lai." 
                  : "All rights reserved. Designed with for future education."}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/privacy" className="text-blue-100 hover:text-white transition-colors text-sm flex items-center group">
                <svg className="w-4 h-4 mr-2 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                {t.privacy}
              </a>
              <a href="/terms" className="text-blue-100 hover:text-white transition-colors text-sm flex items-center group">
                <svg className="w-4 h-4 mr-2 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t.terms}
              </a>
              <a href="/sitemap" className="text-blue-100 hover:text-white transition-colors text-sm flex items-center group">
                <svg className="w-4 h-4 mr-2 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                {t.sitemap}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;