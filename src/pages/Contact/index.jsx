import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useLanguage } from "../../contexts/LanguageContext";

const Contact = () => {
  const { language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const scrollDotRef = useRef(null);
  const heroTextRef = useRef(null);

  // Refs cho tất cả các section trong Contact page
  const contactInfoRef = useRef(null);
  const contactFormRef = useRef(null);
  const contactMapRef = useRef(null);
  const globalNetworkRef = useRef(null);

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
          ".hero-section",
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
          ".hero-section",
          { filter: "brightness(0.7)", duration: 1, ease: "power2.out" },
          "-=0.8",
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Add animation for scroll dot
  useEffect(() => {
    if (scrollDotRef.current) {
      gsap.to(scrollDotRef.current, {
        y: 8,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  // Animation cho Section 1 (Contact Info)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animation cho title
      sectionTl.fromTo(
        contactInfoRef.current.querySelector(".text-center h2"),
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0,
      );

      // Animation cho description
      sectionTl.fromTo(
        contactInfoRef.current.querySelector(".text-center p"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.2,
      );

      // Animation cho main contact card
      sectionTl.fromTo(
        contactInfoRef.current.querySelector(".lg\\:col-span-2 .bg-white"),
        { y: 80, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.4)" },
        0.4,
      );

      // Animation cho các phần tử bên trong card
      const cardElements = contactInfoRef.current?.querySelectorAll(
        ".lg\\:col-span-2 .bg-white > *",
      );
      if (cardElements) {
        sectionTl.fromTo(
          cardElements,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          0.6,
        );
      }

      // Animation cho department contacts
      const departmentCards =
        contactInfoRef.current?.querySelectorAll(".grid > div");
      if (departmentCards) {
        sectionTl.fromTo(
          departmentCards,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          0.8,
        );
      }
    }, contactInfoRef);

    return () => ctx.revert();
  }, [language]);

  // Animation cho Section 2 (Contact Form)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animation cho form card
      sectionTl.fromTo(
        contactFormRef.current,
        { x: 100, opacity: 0, rotation: 5 },
        { x: 0, opacity: 1, rotation: 0, duration: 1, ease: "back.out(1.4)" },
        0,
      );

      // Animation cho form title
      sectionTl.fromTo(
        contactFormRef.current.querySelector("h3"),
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.2,
      );

      // Animation cho form description
      sectionTl.fromTo(
        contactFormRef.current.querySelector("p.mb-8"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.3,
      );

      // Animation cho form inputs
      const formInputs = contactFormRef.current?.querySelectorAll("form > div");
      if (formInputs) {
        sectionTl.fromTo(
          formInputs,
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          0.4,
        );
      }

      // Animation cho button
      sectionTl.fromTo(
        contactFormRef.current.querySelector("button"),
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" },
        0.8,
      );

      // Animation cho response time section
      sectionTl.fromTo(
        contactFormRef.current.querySelector(".mt-8"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        1,
      );
    }, contactFormRef);

    return () => ctx.revert();
  }, [language]);

  // Animation cho Section 3 (Map Section)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: contactMapRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animation cho section title
      sectionTl.fromTo(
        contactMapRef.current.querySelector(".text-center h2"),
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0,
      );

      // Animation cho section description
      sectionTl.fromTo(
        contactMapRef.current.querySelector(".text-center p"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.2,
      );

      // Animation cho left content
      sectionTl.fromTo(
        contactMapRef.current.querySelector(
          ".lg\\:grid-cols-2 > div:first-child",
        ),
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0.4,
      );

      // Animation cho right map
      sectionTl.fromTo(
        contactMapRef.current.querySelector(
          ".lg\\:grid-cols-2 > div:last-child",
        ),
        { x: 100, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.4)" },
        0.6,
      );

      // Animation cho travel guide
      sectionTl.fromTo(
        contactMapRef.current.querySelector(".bg-gray-50"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.8,
      );
    }, contactMapRef);

    return () => ctx.revert();
  }, [language]);

  // Animation cho Section 4 (Global Network)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: globalNetworkRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animation cho section title
      sectionTl.fromTo(
        globalNetworkRef.current.querySelector(".text-center h3"),
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0,
      );

      // Animation cho office cards
      const officeCards =
        globalNetworkRef.current?.querySelectorAll(".grid > div");
      if (officeCards) {
        sectionTl.fromTo(
          officeCards,
          { y: 100, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.4)",
          },
          0.3,
        );
      }

      // Animation cho card content
      officeCards?.forEach((card, index) => {
        const cardContent = card.querySelectorAll(".p-6 > *");
        if (cardContent) {
          sectionTl.fromTo(
            cardContent,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
            },
            0.6 + index * 0.1,
          );
        }
      });
    }, globalNetworkRef);

    return () => ctx.revert();
  }, [language]);

  // Effect để detect section đang active
  useEffect(() => {
    const sections = [
      contactInfoRef,
      contactFormRef,
      contactMapRef,
      globalNetworkRef,
    ];

    const scrollTriggers = sections.map((sectionRef, index) => {
      return ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          console.log(`Contact: Entering section ${index + 1}`);
        },
        onEnterBack: () => {
          console.log(`Contact: Re-entering section ${index + 1}`);
        },
        onLeave: () => {
          console.log(`Contact: Leaving section ${index + 1}`);
        },
        onLeaveBack: () => {
          console.log(`Contact: Leaving back from section ${index + 1}`);
        },
      });
    });

    return () => {
      scrollTriggers.forEach((trigger) => trigger.kill());
    };
  }, []);
  // Translation content
  const translations = {
    vi: {
      heroTitle: "Kết nối với chúng tôi",
      heroSubtitle:
        "Chúng tôi luôn sẵn sàng đồng hành cùng bạn trên hành trình giáo dục quốc tế",
      scrollText: "Vuốt để xem tiếp",

      sectionTitle: "Liên hệ với chúng tôi",
      sectionDescription:
        "Agua International Education luôn sẵn sàng lắng nghe và hỗ trợ bạn trên hành trình giáo dục quốc tế. Chúng tôi cam kết mang đến những giải pháp giáo dục tốt nhất cho tương lai của bạn.",

      contactInfoTitle: "Thông tin liên hệ chi tiết",
      headquarters: "Trụ sở chính tại Việt Nam",
      address:
        "20 Mỹ Giang 2A, Khu biệt thự Phú Mỹ Hưng, Quận 7, TP. Hồ Chí Minh",
      workingHours: "Giờ làm việc: Thứ 2 - Thứ 6: 8:00 - 17:00",

      phone: "Điện thoại",
      vietnamPhone: "Việt Nam:",
      internationalPhone: "Quốc tế:",
      hotline: "Hotline:",

      email: "Email",
      generalInquiry: "Tổng đài:",
      admission: "Tư vấn:",
      partnership: "Hợp tác:",

      departmentContacts: "Liên hệ theo bộ phận",
      departments: [
        {
          name: "Tuyển sinh & Học thuật",
          email: "admission@agua.edu.vn",
          phone: "028 1234 5678",
          ext: "101",
        },
        {
          name: "Hỗ trợ học sinh quốc tế",
          email: "international@agua.edu.vn",
          phone: "028 1234 5678",
          ext: "102",
        },
        {
          name: "Đối tác & Hợp tác",
          email: "partnership@agua.edu.vn",
          phone: "028 1234 5678",
          ext: "103",
        },
        {
          name: "Truyền thông & Marketing",
          email: "marketing@agua.edu.vn",
          phone: "028 1234 5678",
          ext: "104",
        },
      ],

      quickContactTitle: "Gửi tin nhắn cho chúng tôi",
      quickContactSubtitle:
        "Để lại thông tin, chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ",

      formLabels: {
        name: "Họ và tên *",
        email: "Email *",
        phone: "Số điện thoại",
        subject: "Chủ đề *",
        message: "Nội dung *",
        submit: "Gửi tin nhắn",
      },

      subjectOptions: [
        { value: "", label: "Chọn chủ đề" },
        { value: "admission", label: "Tư vấn tuyển sinh" },
        { value: "program", label: "Thông tin chương trình" },
        { value: "partnership", label: "Hợp tác đối tác" },
        { value: "other", label: "Khác" },
      ],

      responseTime: "Thời gian phản hồi",
      responseItems: [
        "Email: Phản hồi trong vòng 24 giờ",
        "Điện thoại: Trong giờ hành chính",
        "Tin nhắn trực tuyến: 24/7",
      ],

      mapTitle: "Mạng lưới toàn cầu của chúng tôi",
      mapDescription:
        "Agua International Education có mặt tại hơn 20 quốc gia với mạng lưới đối tác giáo dục uy tín trên toàn thế giới",

      mainOffice: "Trụ sở chính tại Việt Nam",
      officeDescription1:
        "Tọa lạc tại khu đô thị hiện đại Phú Mỹ Hưng, trụ sở chính của Agua International Education được thiết kế với không gian học tập và làm việc tiêu chuẩn quốc tế.",
      officeDescription2:
        "Với vị trí thuận lợi, dễ dàng kết nối với các trường quốc tế, đại sứ quán và các tổ chức giáo dục hàng đầu.",

      travelGuide: "Hướng dẫn di chuyển",
      travelItems: [
        "Từ sân bay Tân Sơn Nhất: 15-20 phút",
        "Gần trạm xe buýt: 500m",
        "Bãi đậu xe miễn phí cho khách tham quan",
      ],

      branchOffices: "Các văn phòng đại diện",
      branches: [
        {
          city: "London",
          country: "Anh",
          email: "uk@agua.edu.vn",
          phone: "+44 20 1234 5678",
        },
        {
          city: "Sydney",
          country: "Úc",
          email: "aus@agua.edu.vn",
          phone: "+61 2 1234 5678",
        },
        {
          city: "Toronto",
          country: "Canada",
          email: "ca@agua.edu.vn",
          phone: "+1 416 123 4567",
        },
        {
          city: "Singapore",
          country: "Singapore",
          email: "sg@agua.edu.vn",
          phone: "+65 6123 4567",
        },
      ],

      footerLinks: {
        home: "Trang Chủ",
        programs: "Gói Học Tập",
        people: "Con Người",
        opportunities: "Cơ Hội",
      },

      footerContact: {
        address:
          "20 Mỹ Giang 2A, Khu biệt thự Phú Mỹ Hưng, Quận 7, TP. Hồ Chí Minh",
        phone: "+84 28 1234 5678",
        email: "info@agua.edu.vn",
      },

      footerBottom: {
        copyright: `© ${new Date().getFullYear()} Agua International Education. Bảo lưu mọi quyền.`,
        privacy: "Chính sách bảo mật",
        terms: "Điều khoản sử dụng",
        sitemap: "Sitemap",
      },
    },
    en: {
      heroTitle: "Connect With Us",
      heroSubtitle:
        "We're always ready to accompany you on your international education journey",
      scrollText: "Scroll to continue",

      sectionTitle: "Contact Us",
      sectionDescription:
        "Agua International Education is always ready to listen and support you on your international education journey. We are committed to providing the best educational solutions for your future.",

      contactInfoTitle: "Detailed Contact Information",
      headquarters: "Headquarters in Vietnam",
      address:
        "20 My Giang 2A, Phu My Hung Urban Area, District 7, Ho Chi Minh City",
      workingHours: "Working Hours: Monday - Friday: 8:00 AM - 5:00 PM",

      phone: "Phone",
      vietnamPhone: "Vietnam:",
      internationalPhone: "International:",
      hotline: "Hotline:",

      email: "Email",
      generalInquiry: "General Inquiry:",
      admission: "Admission:",
      partnership: "Partnership:",

      departmentContacts: "Contact by Department",
      departments: [
        {
          name: "Admission & Academic",
          email: "admission@agua.edu.vn",
          phone: "028 1234 5678",
          ext: "101",
        },
        {
          name: "International Student Support",
          email: "international@agua.edu.vn",
          phone: "028 1234 5678",
          ext: "102",
        },
        {
          name: "Partnership & Cooperation",
          email: "partnership@agua.edu.vn",
          phone: "028 1234 5678",
          ext: "103",
        },
        {
          name: "Media & Marketing",
          email: "marketing@agua.edu.vn",
          phone: "028 1234 5678",
          ext: "104",
        },
      ],

      quickContactTitle: "Send Us a Message",
      quickContactSubtitle:
        "Leave your information and we'll contact you within 24 hours",

      formLabels: {
        name: "Full Name *",
        email: "Email *",
        phone: "Phone Number",
        subject: "Subject *",
        message: "Message *",
        submit: "Send Message",
      },

      subjectOptions: [
        { value: "", label: "Select a subject" },
        { value: "admission", label: "Admission Consultation" },
        { value: "program", label: "Program Information" },
        { value: "partnership", label: "Partnership" },
        { value: "other", label: "Other" },
      ],

      responseTime: "Response Time",
      responseItems: [
        "Email: Response within 24 hours",
        "Phone: During business hours",
        "Online Message: 24/7",
      ],

      mapTitle: "Our Global Network",
      mapDescription:
        "Agua International Education operates in over 20 countries with a network of trusted education partners worldwide",

      mainOffice: "Headquarters in Vietnam",
      officeDescription1:
        "Located in the modern Phu My Hung urban area, Agua International Education's headquarters is designed with international-standard learning and working spaces.",
      officeDescription2:
        "With a convenient location, it's easy to connect with international schools, embassies, and leading educational organizations.",

      travelGuide: "Travel Guide",
      travelItems: [
        "From Tan Son Nhat Airport: 15-20 minutes",
        "Near bus station: 500m",
        "Free parking for visitors",
      ],

      branchOffices: "Representative Offices",
      branches: [
        {
          city: "London",
          country: "UK",
          email: "uk@agua.edu.vn",
          phone: "+44 20 1234 5678",
        },
        {
          city: "Sydney",
          country: "Australia",
          email: "aus@agua.edu.vn",
          phone: "+61 2 1234 5678",
        },
        {
          city: "Toronto",
          country: "Canada",
          email: "ca@agua.edu.vn",
          phone: "+1 416 123 4567",
        },
        {
          city: "Singapore",
          country: "Singapore",
          email: "sg@agua.edu.vn",
          phone: "+65 6123 4567",
        },
      ],

      footerLinks: {
        home: "Home",
        programs: "Study Packages",
        people: "Our People",
        opportunities: "Opportunities",
      },

      footerContact: {
        address: "20 My Giang 2A, Phu My Hung, District 7, Ho Chi Minh City",
        phone: "+84 28 1234 5678",
        email: "info@agua.edu.vn",
      },

      footerBottom: {
        copyright: `© ${new Date().getFullYear()} Agua International Education. All rights reserved.`,
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        sitemap: "Sitemap",
      },
    },
  };

  const tContent = translations[language] || translations.vi;

  return (
    <div
      className={`contact-page ${scrolled ? "scrolled" : ""} manrope-regular`}
    >
      {/* Hero Section với animation giống Home */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden hero-section">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Agua International Education Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
        </div>

        {/* Hero Content với animation */}
        <div
          ref={heroTextRef}
          className="relative z-10 container mx-auto px-5 text-center text-white"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              {tContent.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light">
              {tContent.heroSubtitle}
            </p>
            {/* Scroll Indicator giống Home */}
            <div className="flex flex-col items-center space-y-3 mt-10">
              <div
                className="w-8 h-14 border-2 border-white rounded-full flex items-start justify-center p-1 cursor-pointer group hover:border-[#ff8800] transition-colors duration-300"
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
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
                  {tContent.scrollText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section với ref */}
      <section className="contact-page py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-5">
          {/* Contact Info Section */}
          <div ref={contactInfoRef}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                {tContent.sectionTitle}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {tContent.sectionDescription}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info Card */}
              <div className="lg:col-span-2 space-y-12">
                <div className="bg-white p-10 rounded-2xl shadow-xl space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-4 text-gray-800">
                      {tContent.contactInfoTitle}
                    </h3>
                  </div>

                  {/* Headquarters */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-center">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          {tContent.headquarters}
                        </h4>
                        <p className="text-gray-700">
                          {tContent.address}
                          <br />
                          <span className="font-medium">
                            {language === "vi"
                              ? "Giờ làm việc:"
                              : "Working Hours:"}
                          </span>{" "}
                          {language === "vi"
                            ? "Thứ 2 - Thứ 6: 8:00 - 17:00"
                            : "Monday - Friday: 8:00 AM - 5:00 PM"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Methods */}
                  <div className="grid md:grid-cols-2 gap-6 pt-8 border-t">
                    <div className="text-center">
                      <div className="bg-blue-50 p-4 rounded-xl inline-block mb-3">
                        <svg
                          className="w-8 h-8 text-blue-600"
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
                      </div>
                      <h5 className="font-bold mb-2">{tContent.phone}</h5>
                      <p className="text-gray-700">
                        {tContent.vietnamPhone}{" "}
                        <a
                          href="tel:+842812345678"
                          className="text-blue-600 hover:underline"
                        >
                          +84 28 1234 5678
                        </a>
                        <br />
                        {tContent.internationalPhone}{" "}
                        <a
                          href="tel:+442012345678"
                          className="text-blue-600 hover:underline"
                        >
                          +44 20 1234 5678
                        </a>
                        <br />
                        {tContent.hotline}{" "}
                        <a
                          href="tel:+84987654321"
                          className="text-red-600 font-semibold hover:underline"
                        >
                          +84 987 654 321
                        </a>
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="bg-green-50 p-4 rounded-xl inline-block mb-3">
                        <svg
                          className="w-8 h-8 text-green-600"
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
                      </div>
                      <h5 className="font-bold mb-2">{tContent.email}</h5>
                      <p className="text-gray-700">
                        {tContent.generalInquiry}{" "}
                        <a
                          href="mailto:info@agua.edu.vn"
                          className="text-blue-600 hover:underline"
                        >
                          info@agua.edu.vn
                        </a>
                        <br />
                        {tContent.admission}{" "}
                        <a
                          href="mailto:admission@agua.edu.vn"
                          className="text-blue-600 hover:underline"
                        >
                          admission@agua.edu.vn
                        </a>
                        <br />
                        {tContent.partnership}{" "}
                        <a
                          href="mailto:partnership@agua.edu.vn"
                          className="text-blue-600 hover:underline"
                        >
                          partnership@agua.edu.vn
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Department Contacts */}
                <div className="bg-white p-10 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-8 text-gray-800">
                    {tContent.departmentContacts}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {tContent.departments.map((dept, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-5 hover:border-blue-400 transition-colors hover:shadow-lg"
                      >
                        <h4 className="font-bold text-lg mb-3 text-gray-800">
                          {dept.name}
                        </h4>
                        <div className="space-y-2">
                          <p className="flex items-center text-gray-700">
                            <svg
                              className="w-4 h-4 mr-2 text-blue-500"
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
                            <a
                              href={`mailto:${dept.email}`}
                              className="hover:text-blue-600 transition-colors"
                            >
                              {dept.email}
                            </a>
                          </p>
                          <p className="flex items-center text-gray-700">
                            <svg
                              className="w-4 h-4 mr-2 text-green-500"
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
                            {dept.phone}{" "}
                            {language === "vi" ? "(ext:" : "(extension:"}{" "}
                            {dept.ext})
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Contact Form với ref riêng */}
              <div
                ref={contactFormRef}
                className="bg-gradient-to-br from-blue-500 to-blue-400 to-blue-300 text-white p-10 rounded-2xl shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-6">
                  {tContent.quickContactTitle}
                </h3>
                <p className="mb-8 text-blue-100">
                  {tContent.quickContactSubtitle}
                </p>

                <form className="space-y-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      {tContent.formLabels.name}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
                      placeholder={
                        language === "vi" ? "Nguyễn Văn A" : "John Smith"
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      {tContent.formLabels.email}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
                      placeholder="example@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      {tContent.formLabels.phone}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
                      placeholder="+84 123 456 789"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      {tContent.formLabels.subject}
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all">
                      {tContent.subjectOptions.map((option, index) => (
                        <option
                          key={index}
                          value={option.value}
                          className="text-gray-800"
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      {tContent.formLabels.message}
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
                      placeholder={
                        language === "vi"
                          ? "Xin chào Agua, tôi quan tâm đến..."
                          : "Hello Agua, I'm interested in..."
                      }
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:-translate-y-1 duration-300"
                  >
                    {tContent.formLabels.submit}
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-bold mb-4">{tContent.responseTime}</h4>
                  <ul className="space-y-2 text-sm text-blue-100">
                    {tContent.responseItems.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section với ref */}
      <section ref={contactMapRef} className="contact-map py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {tContent.mapTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {tContent.mapDescription}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">{tContent.mainOffice}</h3>
              <div className="space-y-4 mb-8">
                <p className="text-gray-700">{tContent.officeDescription1}</p>
                <p className="text-gray-700">{tContent.officeDescription2}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold mb-4 text-lg">
                  {tContent.travelGuide}
                </h4>
                <ul className="space-y-3">
                  {tContent.travelItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-600 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                title="Agua International Education Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.132407374581!2d106.7151061152603!3d10.742615092343622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f28a1cde6a5%3A0x3b3b0e1234567890!2s20%20M%C4%83y%20Giang%202A%2C%20Ph%C3%BA%20M%E1%BB%B9%20H%C6%B0ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM!5e0!3m2!1sen!2s!4v1695000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Global Network với ref riêng */}
          <div ref={globalNetworkRef} className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-center">
              {tContent.branchOffices}
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {tContent.branches.map((office, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={
                        [
                          "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                          "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                          "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                          "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                        ][index]
                      }
                      alt={`${office.city} office`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2">
                      {office.city}, {office.country}
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-blue-500"
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
                        {office.email}
                      </p>
                      <p className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-green-500"
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
                        {office.phone}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
