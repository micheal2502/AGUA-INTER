// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Menu,
  X,
  ChevronDown,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import TransitionLink from "./Layout/TransitionLinks";

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // NEW: Effect để ngăn scroll khi menu mở
  useEffect(() => {
    if (menuOpen) {
      // Lưu lại scroll position hiện tại
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // Khôi phục scroll
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    // Cleanup function
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Scroll effect handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Chỉ áp dụng scroll effect khi menu đóng
      if (!menuOpen) {
        // Show/hide navbar based on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsHidden(true);
        } else if (currentScrollY < lastScrollY) {
          setIsHidden(false);
        }

        // Set background color when scrolled past a threshold
        setIsScrolled(currentScrollY > 10);
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [lastScrollY, menuOpen]);

  const { language, toggleLanguage } = useLanguage();

  // Language-specific navigation links
  const navLinks = {
    vie: [
      { path: "/home", label: "Trang Chủ" },
      { path: "/services", label: "Gói Học Tập" },
      { path: "/philosophy", label: "Định Hướng" },
      { path: "/contact", label: "Liên Hệ" },
      { path: "/about", label: "Con Người" },
      { path: "/connect/step1", label: "Khởi trình" },
      { path: "/blog", label: "Blog" },
    ],
    en: [
      { path: "/home", label: "Home" },
      { path: "/services", label: "Learning Packages" },
      { path: "/philosophy", label: "Philosophy" },
      { path: "/contact", label: "Contact" },
      { path: "/about", label: "Our People" },
      { path: "/connect/step1", label: "Get Started" },
      { path: "/blog", label: "Blog" },
    ],
  };

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      setTimeout(() => setShowLinks(true), 300);
    } else {
      setShowLinks(false);
      setTimeout(() => setMenuOpen(false), 400);
    }
  };

  useEffect(() => {
    setMenuOpen(false);
    setShowLinks(false);
  }, [location]);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const LanguageDropdown = ({ textColor = "text-[#0974B6]" }) => {
    const getDisplayLanguage = () => {
      return language === "en" ? "EN" : "VN";
    };

    const changeLanguage = (lang) => {
      const langCode = lang === "EN" ? "en" : "vie";
      toggleLanguage(langCode);
    };

    return (
      <div className="relative group cursor-pointer select-none">
        <span className={`flex items-center font-semibold ${textColor}`}>
          {getDisplayLanguage()}
          <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
        </span>
        <div className="absolute left-0 mt-1 flex flex-col opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          {["EN", "VN"].map((lang) => (
            <span
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={`cursor-pointer py-1 transition font-semibold ${
                lang === getDisplayLanguage() ? "underline" : ""
              } ${textColor} hover:text-blue-600`}
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    );
  };

  const handleLinkClick = () => {
    setShowLinks(false);
    setTimeout(() => setMenuOpen(false), 400);
  };

  const currentNavLinks = navLinks[language] || navLinks.en;
  const followText = language === "vie" ? "Theo dõi chúng tôi" : "Follow Us";

  return (
    <>
      {/* Navbar chính */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } ${
          menuOpen
            ? "bg-white"
            : isScrolled
              ? "bg-white shadow-lg"
              : "bg-transparent"
        }   } max-w-[100vw]`} // Thêm các class này`}
      >
        {/* Top navbar */}
        <div className="relative flex items-center justify-between py-4 px-4 md:px-20">
          {/* Left: Logo and text */}
          <div className="flex-1 flex justify-start">
            <TransitionLink to="/home" className="flex items-center gap-4">
              <img src="/images/logo2.png" alt="Logo" className="h-12" />
              <div className="flex flex-col">
                <span className="text-[#0974B6] font-bold text-2xl leading-tight">
                  Agua
                </span>
                <span className="text-[#0974B6] font-semibold text-sm leading-tight">
                  International
                </span>
                <span className="text-[#0974B6] font-semibold text-sm leading-tight">
                  Education
                </span>
              </div>
            </TransitionLink>
          </div>

          {/* Right: Hamburger menu and Language dropdown */}
          <div className="flex items-center space-x-2 md:space-x-6">
            {!menuOpen && <LanguageDropdown textColor="text-[#0974B6]" />}
            <button
              className="p-2 md:p-3 z-50 relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group/hamburger"
              onClick={toggleMenu}
            >
              <div className="relative w-5 h-5 md:w-6 md:h-6 mx-auto">
                <div
                  className={`absolute top-0.5 md:top-1 left-0 w-5 md:w-6 h-0.5 transition-all duration-500 rounded-full ${
                    menuOpen
                      ? "top-2 md:top-3 rotate-45 bg-gradient-to-r from-[#274d72] to-[#1B2340]"
                      : "top-0.5 md:top-1 rotate-0 bg-gradient-to-r from-[#0974B6] to-blue-500"
                  } group-hover/hamburger:from-[#0056b3] group-hover/hamburger:to-blue-600`}
                />
                <div
                  className={`absolute top-2 md:top-3 left-0 w-5 md:w-6 h-0.5 transition-all duration-500 rounded-full ${
                    menuOpen
                      ? "opacity-0 translate-x-3 md:translate-x-4"
                      : "opacity-100 translate-x-0 bg-gradient-to-r from-blue-300 to-blue-200"
                  } group-hover/hamburger:from-blue-400 group-hover/hamburger:to-blue-300`}
                />
                <div
                  className={`absolute top-3.5 md:top-5 left-0 w-5 md:w-6 h-0.5 transition-all duration-500 rounded-full ${
                    menuOpen
                      ? "top-2 md:top-3 -rotate-45 bg-gradient-to-r from-[#274d72] to-[#1B2340]"
                      : "top-3.5 md:top-5 rotate-0 bg-gradient-to-r from-blue-100 to-blue-50"
                  } group-hover/hamburger:from-blue-200 group-hover/hamburger:to-blue-100`}
                />
              </div>

              {!menuOpen && (
                <div className="absolute inset-0 rounded-full border-2 border-blue-100/50 animate-ping opacity-0 group-hover/hamburger:opacity-100"></div>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen overlay menu - Đặt ở vị trí riêng */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`} // Thêm overflow-y-auto
      >
        {/* Top bar inside overlay - fixed trên mobile */}
        <div className="sticky top-0 bg-white z-10 border-b border-blue-100">
          <div className="flex justify-between items-center py-6 px-6 md:px-20">
            {/* Logo */}
            <TransitionLink
              to="/home"
              className="flex items-center gap-3"
              onClick={handleLinkClick}
            >
              <img
                src="/images/logo2.png"
                alt="Logo"
                className="h-10 md:h-14"
              />
              <div className="flex flex-col">
                <span className="text-[#1B2340] font-bold text-lg md:text-2xl leading-tight">
                  Agua
                </span>
                <span className="text-[#1B2340] font-semibold text-xs md:text-sm leading-tight">
                  International Education
                </span>
              </div>
            </TransitionLink>

            {/* Close button */}
            <button
              onClick={toggleMenu}
              className="p-2 text-[#1B2340] hover:text-blue-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Main content area - flex-col trên mobile */}
        <div className="flex-1 flex flex-col md:flex-row">
          {/* Left: Nav links */}
          <div className="flex-1 flex flex-col px-6 md:px-20 py-6 md:py-10 space-y-4 md:space-y-8">
            {currentNavLinks.map((link, index) => (
              <div key={link.path} className="overflow-hidden">
                <TransitionLink
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`nav-link transition-all duration-700 transform pb-2 md:pb-3 text-2xl md:text-6xl ${
                    showLinks
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-8"
                  } hover:text-blue-400 ${
                    isActiveLink(link.path) ? "nav-link-active" : ""
                  }`}
                  style={{
                    transitionDelay: showLinks
                      ? `${index * 100 + 200}ms`
                      : "0ms",
                  }}
                >
                  {link.label}
                </TransitionLink>
              </div>
            ))}
          </div>

          {/* Right: Contact & Social section - full width trên mobile */}
          <div className="w-full md:w-1/3 px-6 md:px-10 py-6 md:py-10 border-t md:border-l border-blue-100">
            <div
              className={`transition-all duration-700 transform ${
                showLinks
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: showLinks
                  ? `${currentNavLinks.length * 100 + 400}ms`
                  : "0ms",
              }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#1B2340] mb-6 md:mb-8">
                {followText}
              </h3>

              {/* Social media items - grid trên mobile */}
              <div className="grid grid-cols-1 gap-4 md:space-y-6 mb-8 md:mb-12">
                <div className="flex items-center space-x-3 md:space-x-4 group">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-br from-blue-50 to-white rounded-full border border-blue-100 text-[#1B2340] hover:text-blue-600 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex items-center justify-center w-12 h-12"
                  >
                    <Facebook
                      size={24}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                  <div className="flex flex-col">
                    <span className="text-[#1B2340] font-medium">Facebook</span>
                    <span className="text-sm text-blue-500">
                      @aguainternational
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 md:space-x-4 group">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-br from-blue-50 to-white rounded-full border border-blue-100 text-[#1B2340] hover:text-blue-700 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex items-center justify-center w-12 h-12"
                  >
                    <Linkedin
                      size={24}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                  <div className="flex flex-col">
                    <span className="text-[#1B2340] font-medium">LinkedIn</span>
                    <span className="text-sm text-blue-500">
                      Agua International
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 md:space-x-4 group">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-br from-pink-50 to-white rounded-full border border-pink-100 text-[#1B2340] hover:text-pink-600 hover:border-pink-200 hover:shadow-lg transition-all duration-300 flex items-center justify-center w-12 h-12"
                  >
                    <Instagram
                      size={24}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                  <div className="flex flex-col">
                    <span className="text-[#1B2340] font-medium">
                      Instagram
                    </span>
                    <span className="text-sm text-pink-500">
                      @agua.education
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact information */}
              <div className="mb-8 md:mb-12">
                <h4 className="text-lg md:text-xl font-semibold text-[#1B2340] mb-4">
                  {language === "vie" ? "Liên hệ" : "Contact"}
                </h4>

                <div className="flex items-start space-x-3 md:space-x-4 mb-4 group">
                  <div className="p-2 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100 flex items-center justify-center w-10 h-10 mt-1">
                    <svg
                      className="w-5 h-5 text-[#0974B6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#1B2340] font-medium">Email</span>
                    <a
                      href="mailto:info@aguainternational.edu"
                      className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-300 break-all"
                    >
                      info@aguainternational.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4 group">
                  <div className="p-2 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100 flex items-center justify-center w-10 h-10 mt-1">
                    <svg
                      className="w-5 h-5 text-[#0974B6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#1B2340] font-medium">
                      {language === "vie" ? "Địa chỉ" : "Address"}
                    </span>
                    <span className="text-sm text-[#1B2340] opacity-80 leading-relaxed">
                      {language === "vie"
                        ? "20 Mỹ Giang 2A, Khu biệt thự Phú Mỹ Hưng, Quận 7, TP. Hồ Chí Minh"
                        : "20 My Giang 2A, Phu My Hung, District 7, Ho Chi Minh City"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Language selector */}
              <div
                className={`transition-all duration-700 transform ${
                  showLinks
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: showLinks
                    ? `${currentNavLinks.length * 100 + 600}ms`
                    : "0ms",
                }}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src="/images/image.png"
                    alt="Language"
                    className="h-8 w-8 hidden md:block"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => toggleLanguage("en")}
                      className={`text-lg md:text-xl font-bold transition-all duration-300 ${
                        language === "en"
                          ? "text-[#0974B6] underline underline-offset-4"
                          : "text-[#1B2340] opacity-60 hover:opacity-100 hover:text-[#0974B6]"
                      }`}
                    >
                      ENG
                    </button>
                    <span className="text-[#1B2340] opacity-30 text-lg md:text-xl">
                      /
                    </span>
                    <button
                      onClick={() => toggleLanguage("vie")}
                      className={`text-lg md:text-xl font-bold transition-all duration-300 ${
                        language === "vie"
                          ? "text-[#0974B6] underline underline-offset-4"
                          : "text-[#1B2340] opacity-60 hover:opacity-100 hover:text-[#0974B6]"
                      }`}
                    >
                      VIE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
