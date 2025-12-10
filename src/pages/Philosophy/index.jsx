import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Vision from "./Vision";
import CoreValue from "./CoreValue";
import { useLanguage } from "../../contexts/LanguageContext";

const Philosophy = () => {
  const { language } = useLanguage();

  // Refs for animations
  const heroTextRef = useRef(null);
  const scrollDotRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab] = useState("tam-nhin");

  // Language-specific content
  const content = {
    vie: {
      hero: {
        title: "Triết lí Agua",
        subtitle:
          "Agua muốn nuôi dưỡng những game changer, không phải followers",
        scrollText: "Vuốt để xem tiếp",
      },
      main: {
        visionTitle: "Tầm Nhìn & Định hướng",
      },
      footer: {
        companyName: "Agua International Education",
        quickLinks: "Liên kết nhanh",
        home: "Trang Chủ",
        programs: "Gói Học Tập",
        people: "Con Người",
        opportunities: "Cơ Hội",
        contact: "Liên hệ",
        address:
          "20 Mỹ Giang 2A, Khu biệt thự Phú Mỹ Hưng, Quận 7, TP. Hồ Chí Minh",
        phone: "+84 28 1234 5678",
        email: "info@agua.edu.vn",
        copyright: "© {year} Agua International Education. Bảo lưu mọi quyền.",
        privacy: "Chính sách bảo mật",
        terms: "Điều khoản sử dụng",
        sitemap: "Sitemap",
      },
    },
    en: {
      hero: {
        title: "Agua Philosophy",
        subtitle: "Agua wants to nurture game changers, not followers",
        scrollText: "Scroll to continue",
      },
      main: {
        visionTitle: "Vision & Direction",
      },
      footer: {
        companyName: "Agua International Education",
        quickLinks: "Quick Links",
        home: "Home",
        programs: "Learning Packages",
        people: "Our People",
        opportunities: "Opportunities",
        contact: "Contact",
        address: "20 My Giang 2A, Phu My Hung, District 7, Ho Chi Minh City",
        phone: "+84 28 1234 5678",
        email: "info@agua.edu.vn",
        copyright:
          "© {year} Agua International Education. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        sitemap: "Sitemap",
      },
    },
  };

  // Get content based on current language
  const t = content[language] || content.vie;

  const tabComponents = {
    "tam-nhin": <Vision />,
  };

  const tabTitles = {
    "tam-nhin": t.main.visionTitle,
  };

  // Scroll animation for hero text
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !scrolled) {
        setScrolled(true);
        const tl = gsap.timeline();
        tl.to(heroTextRef.current, {
          opacity: 0,
          y: -30,
          duration: 1.2,
          ease: "power3.inOut",
        });
        tl.to(
          ".philosophy-hero",
          { filter: "brightness(1.1)", duration: 1, ease: "power2.inOut" },
          "-=0.8",
        );
      } else if (window.scrollY <= 50 && scrolled) {
        setScrolled(false);
        const tl = gsap.timeline();
        tl.to(heroTextRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        });
        tl.to(
          ".philosophy-hero",
          { filter: "brightness(0.7)", duration: 1, ease: "power2.out" },
          "-=0.8",
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Scroll dot animation
  useEffect(() => {
    gsap.to(scrollDotRef.current, {
      y: 8,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="philosophy-container">
      {/* Hero Section with scroll animation */}
      <section className="philosophy-hero relative w-full h-screen overflow-hidden">
        <img
          src="/images/Philosophy.jpg"
          alt={language === "vie" ? "Triết lý" : "Philosophy"}
          className={`hero-image w-full h-full object-cover ${imageLoaded ? "loaded" : ""}`}
          onLoad={() => setImageLoaded(true)}
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
          <div
            ref={heroTextRef}
            className="text-center text-white space-y-4 px-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Scroll Down Indicator */}
          <div className="flex flex-col items-center space-y-3 mt-10">
            <div
              className="w-8 h-14 border-2 border-white rounded-full flex items-start justify-center p-1 cursor-pointer group hover:border-[#ff8800] transition-colors duration-300"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              <div
                ref={scrollDotRef}
                className="w-2 h-2 bg-white rounded-full group-hover:bg-amber-200 transition-colors duration-300"
              ></div>
            </div>
            {/* Animated text */}
            <div className="flex flex-col items-center">
              <span className="text-white text-xs font-light tracking-widest opacity-80 group-hover:opacity-100 transition-opacity duration-300 mb-1">
                {t.hero.scrollText}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="philosophy-main">
        <div className="main-container">
          <h2 className="section-title">{tabTitles[activeTab]}</h2>
          {tabComponents[activeTab]}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1B2340] text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <img
                  src="/images/logo2.png"
                  alt="Agua International Education"
                  className="h-10 w-auto mr-3"
                />
                <h3 className="text-2xl font-semibold">
                  {t.footer.companyName}
                </h3>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">YouTube</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/home"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t.footer.home}
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t.footer.programs}
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t.footer.people}
                  </a>
                </li>
                <li>
                  <a
                    href="/philosophy"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t.footer.opportunities}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.contact}</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span
                    dangerouslySetInnerHTML={{ __html: t.footer.address }}
                  />
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>{t.footer.phone}</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{t.footer.email}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  {t.footer.copyright.replace(
                    "{year}",
                    new Date().getFullYear(),
                  )}
                </p>
              </div>
              <div className="flex flex-wrap justify-center space-x-6 text-sm">
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.privacy}
                </a>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.terms}
                </a>
                <a
                  href="/sitemap"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.sitemap}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Philosophy;
