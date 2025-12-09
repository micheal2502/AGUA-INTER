import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { comparisonTable, luminaryData, faqData } from "../../constants";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext"; // Add this import
import { comparisonTable as comparisonTableData, luminaryData as luminaryDataAll, faqData as faqDataAll } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const { language } = useLanguage();
const comparisonTable = comparisonTableData[language] || comparisonTableData.vie;
const luminaryData = luminaryDataAll[language] || luminaryDataAll.vie;
const faqData = faqDataAll[language] || faqDataAll.vie;
  
  // Language-specific content
  const content = {
    vie: {
      hero: {
        title: "Các chương trình học",
        subtitle: "Các gói học tập thiết kế riêng",
        description: "cho từng học sinh"
      },
      comparisonSection: {
        title: "So Sánh Các Lộ Trình Giáo Dục",
        description: "Lựa chọn lộ trình phù hợp với độ tuổi và mục tiêu phát triển của học sinh"
      },
      luminarySection: {
        title: "LỘ TRÌNH TỎA SÁNG VÔ TẬN",
        subtitle: "Chương trình thành viên trọn đời - Đầu tư một lần, đồng hành suốt đời"
      },
      faqSection: {
        title: "Câu Hỏi Thường Gặp",
        description: "Tìm câu trả lời cho những thắc mắc phổ biến về chương trình AGUA"
      },
      ctaSection: {
        title: "Bắt Đầu Hành Trình Cùng AGUA",
        description: "Đăng ký khảo sát miễn phí để nhận đánh giá toàn diện và lộ trình học tập cá nhân hóa cho con bạn.",
        benefits: [
          "Đánh giá năng lực toàn diện miễn phí",
          "Tư vấn 1-1 với chuyên gia giáo dục",
          "Lộ trình học tập cá nhân hóa"
        ],
        button: "Đăng Ký Khảo Sát Miễn Phí",
        quote: "\"Giáo dục không phải là đổ đầy một cái bình, mà là thắp sáng một ngọn lửa\"",
        author: "William Butler Yeats"
      },
      footer: {
        companyName: "AGUA EDUCATION",
        description: "AGUA - Nơi kiến tạo cuộc sống hạnh phúc thông qua giáo dục. Chúng tôi đồng hành cùng học sinh trên hành trình khám phá bản thân và chinh phục ước mơ.",
        quickLinks: "Liên kết nhanh",
        home: "Trang Chủ",
        programs: "Gói Học Tập",
        people: "Con Người",
        opportunities: "Cơ Hội",
        contact: "Liên hệ",
        address: "123 Đường ABC, Quận XYZ<br />TP. Hồ Chí Minh, Việt Nam",
        phone: "+84 28 1234 5678",
        email: "info@agua.edu.vn",
        copyright: "© {year} Agua International Education. Bảo lưu mọi quyền.",
        privacy: "Chính sách bảo mật",
        terms: "Điều khoản sử dụng",
        sitemap: "Sitemap"
      }
    },
    en: {
      hero: {
        title: "Learning Programs",
        subtitle: "Personalized learning packages designed",
        description: "for each student"
      },
      comparisonSection: {
        title: "Compare Education Pathways",
        description: "Choose the pathway that fits your child's age and development goals"
      },
      luminarySection: {
        title: "ENDLESS SHINING PATHWAY",
        subtitle: "Lifetime membership program - One-time investment, lifelong companionship"
      },
      faqSection: {
        title: "Frequently Asked Questions",
        description: "Find answers to common questions about the AGUA program"
      },
      ctaSection: {
        title: "Start Your Journey with AGUA",
        description: "Register for a free survey to receive a comprehensive assessment and personalized learning pathway for your child.",
        benefits: [
          "Comprehensive free ability assessment",
          "1-1 consultation with education experts",
          "Personalized learning pathway"
        ],
        button: "Register for Free Survey",
        quote: "\"Education is not the filling of a pail, but the lighting of a fire\"",
        author: "William Butler Yeats"
      },
      footer: {
        companyName: "AGUA EDUCATION",
        description: "AGUA - Where happy lives are created through education. We accompany students on their journey of self-discovery and dream achievement.",
        quickLinks: "Quick Links",
        home: "Home",
        programs: "Learning Packages",
        people: "Our People",
        opportunities: "Opportunities",
        contact: "Contact",
        address: "123 ABC Street, XYZ District<br />Ho Chi Minh City, Vietnam",
        phone: "+84 28 1234 5678",
        email: "info@agua.edu.vn",
        copyright: "© {year} Agua International Education. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        sitemap: "Sitemap"
      }
    }
  };

  // Get content based on current language
  const t = content[language] || content.vie;

  // Refs cho tất cả các section trong Services page
  const heroSectionRef = useRef(null);
  const comparisonSectionRef = useRef(null);
  const faqSectionRef = useRef(null);
  const ctaSectionRef = useRef(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Animation cho Hero Section
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      sectionTl.fromTo(
        heroSectionRef.current.querySelector(".section-title h1"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0,
      );

      sectionTl.fromTo(
        heroSectionRef.current.querySelector(".section-title p"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.2,
      );

      // Animation cho bảng so sánh
      const tableRows = heroSectionRef.current?.querySelectorAll(
        ".bg-white.rounded-2xl > .grid > div",
      );
      if (tableRows) {
        sectionTl.fromTo(
          tableRows,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          0.4,
        );
      }
    }, heroSectionRef);

    return () => ctx.revert();
  }, [language]); // Add language dependency

  // Animation cho Comparison Section
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: comparisonSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animation cho header gradient
      sectionTl.fromTo(
        comparisonSectionRef.current.querySelector(
          ".bg-gradient-to-r.from-purple-300.to-blue-300",
        ),
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0,
      );

      // Animation cho các section content
      const contentSections = comparisonSectionRef.current?.querySelectorAll(
        ".bg-gradient-to-br.from-purple-50.to-blue-50 > div > div",
      );
      if (contentSections) {
        sectionTl.fromTo(
          contentSections,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          0.2,
        );
      }

      // Animation cho footer CTA
      sectionTl.fromTo(
        comparisonSectionRef.current.querySelector(
          ".bg-gradient-to-r.from-gray-500.to-blue-500",
        ),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.4,
      );
    }, comparisonSectionRef);

    return () => ctx.revert();
  }, [language]); // Add language dependency

  // Animation cho FAQ Section
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: faqSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animation cho tiêu đề
      sectionTl.fromTo(
        faqSectionRef.current.querySelector("h2"),
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0,
      );

      // Animation cho các câu hỏi
      const questions = faqSectionRef.current?.querySelectorAll(".faq-item");
      if (questions) {
        sectionTl.fromTo(
          questions,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          0.2,
        );
      }
    }, faqSectionRef);

    return () => ctx.revert();
  }, [language]); // Add language dependency

  // Animation cho CTA Section
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ctaSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animation cho text content
      sectionTl.fromTo(
        ctaSectionRef.current.querySelector(".text-left h2"),
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0,
      );

      sectionTl.fromTo(
        ctaSectionRef.current.querySelector(".text-left p"),
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0.2,
      );

      sectionTl.fromTo(
        ctaSectionRef.current.querySelector(".text-left button"),
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" },
        0.4,
      );

      // Animation cho logo
      sectionTl.fromTo(
        ctaSectionRef.current.querySelector(".flex.justify-center > div"),
        { x: 100, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.4)" },
        0.6,
      );
    }, ctaSectionRef);

    return () => ctx.revert();
  }, [language]); // Add language dependency

  return (
    <>
      {/* Hero Section với ảnh */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt={language === 'vie' ? "Khái niệm giáo dục kỹ thuật số" : "Digital education concept"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center text-white space-y-6 px-4 max-w-6xl">
            <h1 className="hero-title">{t.hero.title}</h1>
            <p className="hero-subtitle">
              {t.hero.subtitle}
            </p>
            <p className="section-title text-xl md:text-2xl text-blue-100 leading-relaxed">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Bảng so sánh Section */}
      <section
        ref={heroSectionRef}
        className="py-20 bg-gradient-to-b from-blue-100 to-blue-50"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="section-title mb-12 text-center">
            <h1 className="hero-subtitle text-4xl font-bold mb-4 text-[#1B2340]">
              {t.comparisonSection.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.comparisonSection.description}
            </p>
          </div>

          {/* Bảng so sánh với border */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              {/* Cột Category */}
              <div className="hero-subtitle bg-gradient-to-b from-blue-50 to-blue-100 p-6 border-r border-gray-300">
                <div className="space-y-8">
                  {comparisonTable.map((row, index) => (
                    <div
                      key={index}
                      className={`${index === 0 ? "h-32" : index === 1 ? "h-24" : "min-h-[120px]"} flex items-start border-b border-gray-200 last:border-b-0 pb-8 last:pb-0`}
                    >
                      <h3 className="font-bold text-lg text-[#1B2340] sticky top-6">
                        {row.category}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Các cột Discovery, Momentum, Launch */}
              {["discovery", "momentum", "launch"].map((pathway, colIndex) => (
                <div
                  key={pathway}
                  className={`vision-title p-6 ${
                    colIndex === 0
                      ? "bg-blue-50"
                      : colIndex === 1
                        ? "bg-green-50"
                        : "bg-purple-50"
                  } ${colIndex < 2 ? "border-r border-gray-300" : ""}`}
                >
                  <div className="space-y-8">
                    {comparisonTable.map((row, rowIndex) => (
                      <div
                        key={rowIndex}
                        className="min-h-[120px] border-b border-gray-200 last:border-b-0 pb-8 last:pb-0"
                      >
                        {/* Row 1: Lộ Trình */}
                        {rowIndex === 0 && (
                          <div className="text-center">
                            <h3 className="text-2xl font-bold text-[#1B2340] mb-2">
                              {row[pathway].title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {row[pathway].subtitle}
                            </p>
                          </div>
                        )}

                        {/* Row 2: Chi Phí */}
                        {rowIndex === 1 && (
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600 mb-1">
                              {row[pathway].price}
                            </div>
                            <div className="text-gray-600 text-sm">
                              {row[pathway].duration}
                            </div>
                          </div>
                        )}

                        {/* Row 3: Đối Tượng */}
                        {rowIndex === 2 && (
                          <div className="text-sm text-gray-700 leading-relaxed">
                            {row[pathway]}
                          </div>
                        )}

                        {/* Row 4: Trải nghiệm cốt lõi */}
                        {rowIndex === 3 && (
                          <div className="space-y-2">
                            {Array.isArray(row[pathway]) &&
                              row[pathway].map((item, i) => (
                                <div key={i} className="text-sm text-gray-700">
                                  {i % 2 === 0 ? (
                                    <span className="font-semibold text-[#1B2340]">
                                      {item}
                                    </span>
                                  ) : (
                                    <span className="text-gray-600">
                                      {item}
                                    </span>
                                  )}
                                </div>
                              ))}
                          </div>
                        )}

                        {/* Row 5: Mentoring & Hỗ trợ */}
                        {rowIndex === 4 && (
                          <div className="space-y-4">
                            {Array.isArray(row[pathway]) &&
                              row[pathway].map((item, i) => (
                                <div key={i} className="text-sm text-gray-700">
                                  {i % 2 === 0 ? (
                                    <span className="font-semibold text-[#1B2340]">
                                      {item}
                                    </span>
                                  ) : (
                                    <span className="text-gray-600">
                                      {item}
                                    </span>
                                  )}
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bảng Lộ Trình Tỏa Sáng Vô Tận */}
      <section
        ref={comparisonSectionRef}
        className="services-page py-20 bg-gradient-to-b from-blue-50 to-blue-100"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden border border-purple-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-100 to-blue-600 text-white py-12 px-6 text-center">
              <h1 className="hero-subtitle text-3xl md:text-4xl font-bold mb-4">
                {t.luminarySection.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t.luminarySection.subtitle}
              </p>
            </div>

            {/* Content */}
            <div className="p-8">
              {luminaryData.map((section, index) => (
                <div
                  key={index}
                  className={`py-8 ${
                    index !== luminaryData.length - 1
                      ? "border-b border-gray-300"
                      : ""
                  }`}
                >
                  <h3 className="text-xl font-bold text-black mb-6 flex items-center">
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                    {section.category}
                  </h3>

                  {/* Nội dung dạng string */}
                  {typeof section.content === "string" && (
                    <div className="text-gray-700 leading-relaxed">
                      {section.content}
                    </div>
                  )}

                  {/* Nội dung dạng array đơn giản */}
                  {Array.isArray(section.content) &&
                    !section.content[0]?.title &&
                    !section.content[0]?.phase && (
                      <ul className="space-y-2">
                        {section.content.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                  {/* Thiết kế trải nghiệm */}
                  {Array.isArray(section.content) &&
                    section.content[0]?.title && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.content.map((exp, i) => (
                          <div
                            key={i}
                            className="bg-white p-4 rounded-lg border border-gray-100"
                          >
                            <h4 className="font-semibold text-gray-600 mb-2">
                              {exp.title}
                            </h4>
                            <ul className="space-y-1">
                              {exp.items.map((item, j) => (
                                <li
                                  key={j}
                                  className="text-sm text-gray-600 flex items-start"
                                >
                                  <span className="text-gray-400 mr-2">-</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                  {/* Các giai đoạn hành trình */}
                  {Array.isArray(section.content) &&
                    section.content[0]?.phase && (
                      <div className="space-y-4">
                        {section.content.map((phase, i) => (
                          <div
                            key={i}
                            className="bg-white p-4 rounded-lg border border-gray-100"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-600">
                                {phase.phase}
                              </h4>
                              <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                                {phase.duration}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">
                              {phase.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={faqSectionRef}
        className="py-20 bg-gradient-to-b from-blue-100 to-blue-50"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="hero-subtitle text-4xl md:text-5xl font-bold text-[#1B2340] mb-6">
              {t.faqSection.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.faqSection.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="philosophy-nav faq-item bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-blue-50 transition-all duration-300"
                  onClick={() => {
                    const content = document.getElementById(
                      `faq-content-${index}`,
                    );
                    const icon = document.getElementById(`faq-icon-${index}`);
                    const faqItem = document.getElementById(
                      `faq-item-${index}`,
                    );

                    if (content && icon && faqItem) {
                      if (content.classList.contains("max-h-0")) {
                        // Open FAQ
                        content.classList.remove("max-h-0", "opacity-0");
                        content.classList.add("max-h-96", "opacity-100");
                        icon.style.transform = "rotate(180deg)";
                      } else {
                        // Close FAQ
                        content.classList.remove("max-h-96", "opacity-100");
                        content.classList.add("max-h-0", "opacity-0");
                        icon.style.transform = "rotate(0deg)";
                      }
                    }
                  }}
                  id={`faq-item-${index}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#1B2340] pr-4 text-left">
                      {faq.question}
                    </h3>
                  </div>
                  <svg
                    id={`faq-icon-${index}`}
                    className="w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ease-in-out"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id={`faq-content-${index}`}
                  className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out"
                >
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      <div className="bg-blue-50/50 p-4 rounded-lg mb-4">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>

                      {faq.additionalInfo && (
                        <div className="mt-4 space-y-3">
                          {faq.additionalInfo.map((info, infoIndex) => (
                            <div
                              key={infoIndex}
                              className="flex items-start space-x-3"
                            >
                              <svg
                                className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-gray-600">{info}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaSectionRef}
        className="py-20 bg-gradient-to-b from-blue-50 to-blue-100"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Phần bên trái - Text & Button */}
            <div className="text-left">
              <h2 className="missions-title text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {t.ctaSection.title}
              </h2>
              <p className="section-description text-xl md:text-2xl leading-relaxed mb-8">
                {t.ctaSection.description}
              </p>

              {/* Benefits */}
              <div className="mb-8 space-y-4">
                {t.ctaSection.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg
                      className="w-6 h-6 text-green-400 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Survey Button */}
              <div className="mb-8">
                <Link to="/connect/step1">
                  <button className="section-description bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-2xl cursor-pointer">
                    {t.ctaSection.button}
                  </button>
                </Link>
              </div>
            </div>

            {/* Chỉ 1 logo lớn - Luôn căn giữa */}
            <div className="flex justify-center">
              <div className="transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="w-80 h-32 md:w-96 md:h-40 lg:w-[480px] lg:h-80 bg-white/10 rounded-2xl flex items-center justify-center mx-auto">
                  <img
                    src="/images/logo1.png"
                    alt="AGUA Logo"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
                <div className="text-center mt-8">
                  <p className="section-description text-lg">
                    {t.ctaSection.quote}
                  </p>
                  <p className="missions-title mt-2">{t.ctaSection.author}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <h3 className="text-2xl font-bold">{t.footer.companyName}</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                {t.footer.description}
              </p>

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
              <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t.footer.home}
                  </a>
                </li>
                <li>
                  <a
                    href="/programs"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t.footer.programs}
                  </a>
                </li>
                <li>
                  <a
                    href="/news"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t.footer.people}
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
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
                  <span dangerouslySetInnerHTML={{ __html: t.footer.address }} />
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
                  {t.footer.copyright.replace('{year}', new Date().getFullYear())}
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
    </>
  );
};

export default Services;