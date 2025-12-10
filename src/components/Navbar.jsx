// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext"; // Add this import
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

  // NEW: Add scroll effect handler - UPDATED LOGIC
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide navbar based on scroll direction
      // Always show when scrolling up, regardless of position
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide navbar
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up (anywhere on page) - show navbar
        setIsHidden(false);
      }

      // Set background color when scrolled past a threshold
      setIsScrolled(currentScrollY > 10); // Reduced threshold for faster color change

      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
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
  }, [lastScrollY]);

  // Use language from context instead of local state
  const { language, toggleLanguage } = useLanguage();

  // Language-specific navigation links
  const navLinks = {
    vie: [
      { path: "/home", label: "Trang Chủ" },
      { path: "/services", label: "Gói Học Tập" },
      { path: "/philosophy", label: "Tư Duy" },
      { path: "/contact", label: "Liên Hệ" },
      { path: "/about", label: "Con Người" },
      { path: "/connect/step1", label: "Khởi trình" },
    ],
    en: [
      { path: "/home", label: "Home" },
      { path: "/services", label: "Learning Packages" },
      { path: "/philosophy", label: "Philosophy" },
      { path: "/contact", label: "Contact" },
      { path: "/about", label: "Our People" },
      { path: "/connect/step1", label: "Get Started" },
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

  const LanguageDropdown = ({ textColor = "text-white" }) => {
    // Convert language code to display format
    const getDisplayLanguage = () => {
      return language === "en" ? "EN" : "VN";
    };

    const changeLanguage = (lang) => {
      // lang is 'en' or 'vie' for the context
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

  // Handle closing menu with transition
  const handleLinkClick = () => {
    setShowLinks(false);
    setTimeout(() => setMenuOpen(false), 400);
  };

  // Get current language's links
  const currentNavLinks = navLinks[language] || navLinks.en;

  // Get social media follow text based on language
  const followText = language === "vie" ? "Theo dõi chúng tôi" : "Follow Us";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${
        // KEY FIX: When menu is open, always show white background
        menuOpen
          ? "bg-white"
          : isScrolled
            ? "bg-[#1B2340] shadow-lg"
            : "bg-transparent"
      }`}
    >
      {" "}
      {/* Top navbar */}
      <div className="relative flex items-center justify-between py-6 px-6 md:px-20">
        {/* Left: Animated Hamburger */}
        <button className="p-2 z-50 relative w-8 h-8" onClick={toggleMenu}>
          <div className="relative w-7 h-7">
            {/* Top line */}
            <div
              className={`absolute top-1 left-0 w-7 h-0.5 bg-current transition-all duration-500 ${
                menuOpen
                  ? "top-3 rotate-45 bg-[#274d72]"
                  : "top-1 rotate-0 bg-white"
              }`}
            />
            {/* Middle line - becomes the other part of X */}
            <div
              className={`absolute top-3 left-0 w-7 h-0.5 bg-current transition-all duration-500 ${
                menuOpen
                  ? "opacity-0 translate-x-4"
                  : "opacity-100 translate-x-0 bg-white"
              }`}
            />
            {/* Bottom line */}
            <div
              className={`absolute top-5 left-0 w-7 h-0.5 bg-current transition-all duration-500 ${
                menuOpen
                  ? "top-3 -rotate-45 bg-[#274d72]"
                  : "top-5 rotate-0 bg-white"
              }`}
            />
          </div>
        </button>

        {/* Center: Logo - Use TransitionLink here too */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <TransitionLink
            to="/home"
            className="flex items-center text-white font-semibold"
          >
            <img src="/images/logo2.png" alt="Logo" className="h-12 mr-2" />
            Agua International Education
          </TransitionLink>
        </div>

        {/* Right: Language dropdown */}
        <LanguageDropdown textColor="text-white" />
      </div>
      {/* Full-screen overlay menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top bar inside overlay - removed border */}
        <div className="relative flex justify-between items-center py-6 px-10 md:px-20">
          {/* Close button placeholder for alignment */}
          <div className="w-8 h-8"></div>

          {/* Center logo - Use TransitionLink */}
          <TransitionLink
            to="/home"
            className="flex items-center text-[#1B2340] font-semibold"
            onClick={handleLinkClick}
          >
            <img src="/images/logo2.png" alt="Logo" className="h-12 mr-2" />
            Agua International Education
          </TransitionLink>

          {/* Right: Language dropdown */}
          <LanguageDropdown textColor="text-[#1B2340]" />
        </div>

        {/* Main content area */}
        <div className="flex-1 flex relative">
          {/* Nav links - full width với padding right để chừa chỗ cho social */}
          <div className="flex-1 flex flex-col px-10 md:px-20 py-10 space-y-6 md:space-y-8">
            {currentNavLinks.map((link, index) => (
              <div key={link.path} className="overflow-hidden">
                <TransitionLink
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`nav-link transition-all duration-700 transform pb-3 ${
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

          {/* Social section */}
          <div className="absolute bottom-10 left-10 md:bottom-20 md:right-20">
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
              <h3 className="text-lg font-semibold text-[#1B2340] mb-4 md:text-right">
                {followText}
              </h3>

              <div className="flex space-x-3 md:justify-end">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#1B2340] hover:text-blue-600 transition-colors duration-300"
                >
                  <Facebook size={22} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#1B2340] hover:text-blue-700 transition-colors duration-300"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#1B2340] hover:text-pink-600 transition-colors duration-300"
                >
                  <Instagram size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-10 md:px-20 py-8">
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
          ></div>
        </div>
      </div>
    </nav>
  );
};
