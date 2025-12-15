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
      <section className="philosophy-hero relative w-full h-screen h-[80%] overflow-hidden">
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
            <h1 className="manrope-regular text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t.hero.title}
            </h1>
            <p className="manrope-regular text-xl md:text-2xl lg:text-3xl font-light">
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
    </div>
  );
};

export default Philosophy;
