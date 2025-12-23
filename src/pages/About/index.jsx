import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useLanguage } from "../../contexts/LanguageContext";

const About = () => {
  const { language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const scrollDotRef = useRef(null);
  const heroTextRef = useRef(null);

  // Refs cho tất cả các section trong About page
  const whyMentorsRef = useRef(null);
  const mentorsRef = useRef(null);
  const mentorMatchingRef = useRef(null);

  // Simplified hero scroll animation - only fade out once
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !scrolled) {
        setScrolled(true);
        gsap.to(heroTextRef.current, {
          opacity: 0,
          y: -30,
          duration: 1.2,
          ease: "power3.inOut",
        });
        gsap.to(".hero-section", {
          filter: "brightness(1.1)",
          duration: 1,
          ease: "power2.inOut",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Initial hero animation
  useEffect(() => {
    if (heroTextRef.current) {
      gsap.fromTo(
        heroTextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.3 }
      );
    }
  }, []);

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

  // Animation cho Section 1 (Why Our Mentors) - Fixed: only animate in
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: whyMentorsRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      });

      // Animation cho badge
      const badge = whyMentorsRef.current?.querySelector(".inline-flex.items-center");
      if (badge) {
        gsap.set(badge, { y: -50, opacity: 0 });
        sectionTl.to(badge, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 0);
      }

      // Animation cho quote
      const quote = whyMentorsRef.current?.querySelector(".text-xl.italic");
      if (quote) {
        gsap.set(quote, { y: 50, opacity: 0 });
        sectionTl.to(quote, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 0.2);
      }

      // Animation cho main image
      const mainImage = whyMentorsRef.current?.querySelector(
        ".lg\\:col-span-2 .relative.rounded-2xl",
      );
      if (mainImage) {
        gsap.set(mainImage, { x: -100, opacity: 0, scale: 0.9 });
        sectionTl.to(mainImage, { x: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.4)" }, 0.4);
      }

      // Animation cho floating quote card
      const floatingQuote = whyMentorsRef.current?.querySelector(".absolute.-bottom-8");
      if (floatingQuote) {
        gsap.set(floatingQuote, { x: 100, y: 50, opacity: 0, rotation: 5 });
        sectionTl.to(floatingQuote, {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        }, 0.6);
      }

      // Animation cho right column content
      const rightColumn = whyMentorsRef.current?.querySelector(".lg\\:col-span-1");
      if (rightColumn) {
        gsap.set(rightColumn, { x: 100, opacity: 0 });
        sectionTl.to(rightColumn, { x: 0, opacity: 1, duration: 1, ease: "power2.out" }, 0.8);
      }

      // Animation cho title trong right column
      const rightTitle = whyMentorsRef.current?.querySelector(".lg\\:col-span-1 h2");
      if (rightTitle) {
        gsap.set(rightTitle, { y: -30, opacity: 0 });
        sectionTl.to(rightTitle, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 1);
      }

      // Animation cho text trong right column
      const rightText = whyMentorsRef.current?.querySelector(".lg\\:col-span-1 p");
      if (rightText) {
        gsap.set(rightText, { y: 30, opacity: 0 });
        sectionTl.to(rightText, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 1.2);
      }
    }, whyMentorsRef);

    return () => ctx.revert();
  }, [language]);

  // Animation cho Section 2 (Meet Our Mentors) - Fixed: only animate in
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: mentorsRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      });

      // Animation cho section title
      const sectionTitle = mentorsRef.current?.querySelector(".text-center h2");
      if (sectionTitle) {
        gsap.set(sectionTitle, { y: -50, opacity: 0 });
        sectionTl.to(sectionTitle, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 0);
      }

      // Animation cho section subtitle
      const sectionSubtitle = mentorsRef.current?.querySelector(".text-center p");
      if (sectionSubtitle) {
        gsap.set(sectionSubtitle, { y: 50, opacity: 0 });
        sectionTl.to(sectionSubtitle, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 0.2);
      }

      // Animation cho mentor cards
      const mentorCards = mentorsRef.current?.querySelectorAll(".grid > div");
      if (mentorCards) {
        gsap.set(mentorCards, {
          y: 100,
          opacity: 0,
          scale: 0.9,
          rotation: (index) => (index % 2 === 0 ? -3 : 3),
        });
        sectionTl.to(
          mentorCards,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.4)",
          },
          0.4,
        );
      }

      // Animation cho card content với delay
      mentorCards?.forEach((card, index) => {
        const cardImage = card.querySelector(".relative.h-96");
        const cardContent = card.querySelector(".p-6");

        if (cardImage) {
          gsap.set(cardImage, { scale: 0.8, opacity: 0 });
          sectionTl.to(
            cardImage,
            { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" },
            0.5 + index * 0.1,
          );
        }

        if (cardContent) {
          const contentElements = cardContent.querySelectorAll("div");
          gsap.set(contentElements, { y: 20, opacity: 0 });
          sectionTl.to(
            contentElements,
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.out",
            },
            0.7 + index * 0.1,
          );
        }
      });
    }, mentorsRef);

    return () => ctx.revert();
  }, [language]);

  // Animation cho Section 3 (Mentor Matching) - Fixed: only animate in
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: mentorMatchingRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      });

      // Animation cho left column content
      const leftColumn = mentorMatchingRef.current?.querySelector(
        ".lg\\:grid-cols-2 > div:first-child",
      );
      if (leftColumn) {
        gsap.set(leftColumn, { x: -100, opacity: 0 });
        sectionTl.to(leftColumn, { x: 0, opacity: 1, duration: 1, ease: "power2.out" }, 0);
      }

      // Animation cho title
      const title = mentorMatchingRef.current?.querySelector(
        ".lg\\:grid-cols-2 > div:first-child h2",
      );
      if (title) {
        gsap.set(title, { y: -30, opacity: 0 });
        sectionTl.to(title, { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.4)" }, 0.2);
      }

      // Animation cho subtitle
      const subtitle = mentorMatchingRef.current?.querySelector(
        ".lg\\:grid-cols-2 > div:first-child p.text-lg",
      );
      if (subtitle) {
        gsap.set(subtitle, { y: 30, opacity: 0 });
        sectionTl.to(subtitle, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 0.3);
      }

      // Animation cho button
      const button = mentorMatchingRef.current?.querySelector("button");
      if (button) {
        gsap.set(button, { y: 50, opacity: 0, scale: 0.9 });
        sectionTl.to(button, { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" }, 0.5);
      }

      // Animation cho privacy note
      const privacyNote = mentorMatchingRef.current?.querySelector(".py-10.text-gray-700");
      if (privacyNote) {
        gsap.set(privacyNote, { y: 30, opacity: 0 });
        sectionTl.to(privacyNote, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 0.7);
      }

      // Animation cho right column (logo)
      const rightColumn = mentorMatchingRef.current?.querySelector(
        ".lg\\:grid-cols-2 > div:last-child",
      );
      if (rightColumn) {
        gsap.set(rightColumn, { x: 100, opacity: 0, scale: 0.8 });
        sectionTl.to(rightColumn, { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.4)" }, 0.4);
      }

      // Animation cho glow effect
      const glowEffect = mentorMatchingRef.current?.querySelector(".absolute.bg-gradient-to-r");
      if (glowEffect) {
        gsap.set(glowEffect, { scale: 0, opacity: 0 });
        sectionTl.to(glowEffect, { scale: 1, opacity: 0.7, duration: 1.5, ease: "power2.out" }, 0.6);
      }

      // Animation cho logo
      const logo = mentorMatchingRef.current?.querySelector("img.w-80");
      if (logo) {
        gsap.set(logo, { scale: 0.5, opacity: 0, rotation: -180 });
        sectionTl.to(
          logo,
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(1.7)",
          },
          0.8,
        );
      }

      // Animation cho logo text
      const logoText = mentorMatchingRef.current?.querySelector(".text-center .text-3xl");
      if (logoText) {
        gsap.set(logoText, { y: 50, opacity: 0 });
        sectionTl.to(logoText, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 1);
      }
    }, mentorMatchingRef);

    return () => ctx.revert();
  }, [language]);

  // Remove the console.log debug section effect since it's not needed
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const translations = {
    vi: {
      heroTitle: "Đội ngũ ",
      heroTitleHighlight: "Mentor",
      heroSubtitle:
        "Những chuyên gia giàu kinh nghiệm, từng trải và tận tâm đồng hành cùng bạn",
      scrollText: "Vuốt để xem tiếp",

      stats: [
        { number: "100+", label: "Năm kinh nghiệm tổng" },
        { number: "20+", label: "Trường đại học từng học" },
        { number: "15+", label: "Quốc gia từng sống và làm việc" },
        { number: "1000+", label: "Học sinh được mentor" },
      ],

      approachBadge: "Phương pháp đồng hành độc đáo",
      approachQuote:
        "Chúng tôi không chỉ dạy bạn cách vào đại học, mà còn chuẩn bị cho bạn thành công trong cuộc sống",

      philosophyTitle: "Triết lí giáo dục ",
      philosophyTitleHighlight: "Agua",
      philosophyText:
        "Với phương châm 'Giáo dục đi cùng sự hạnh phúc', đội ngũ của Agua luôn tin rằng chúng ta vừa có thể xuất sắc trong học tập đồng thời phát triển đồng độ cuộc sống để đạt được sự hạnh phúc.",

      meetMentorsTitle: "Gặp gỡ đội ngũ ",
      meetMentorsHighlight: "Mentor",
      meetMentorsSubtitle:
        "Các nhà giáo dục, nhà lãnh đạo tư tưởng và người truyền cảm hứng cùng nhau tạo nên những làn sóng học tập bền vững, đồng hành với học sinh trên hành trình trưởng thành và khai mở tiềm năng",

      foundersSection: {
        title: "Đội ngũ Sáng lập",
        subtitle: "Những người tiên phong",
        description: "Những người đặt nền móng và định hướng cho triết lý giáo dục Agua",
        founders: [
          {
            name: "Ms. Nguyễn Phương Ly",
            title: "Nhà sáng lập & Giám đốc Học thuật",
            education: "PhD - Harvard University",
            role: "Lãnh đạo Chiến lược",
            roleDescription: "Người định hình triết lý giáo dục và định hướng phát triển dài hạn",
            quote: "Tạo dựng nền tảng vững chắc cho thế hệ tương lai",
          },
          {
            name: "Ms. Ashley",
            title: "Đồng sáng lập & Cố vấn Chiến lược",
            education: "PhD - Stanford University",
            role: "Cố vấn Học thuật",
            roleDescription: "Chuyên gia về giáo dục quốc tế và phát triển chương trình đào tạo",
            quote: "Đổi mới giáo dục thông qua nghiên cứu và thực tiễn",
          }
        ]
      },

      mentorsSection: {
        title: "Đội ngũ Mentor Chuyên môn",
        subtitle: "Chuyên gia Đồng hành",
        description: "Các chuyên gia giàu kinh nghiệm trực tiếp đồng hành cùng học sinh",
      },

      mentors: [
        {
          name: "Ms. Nguyễn Phương Ly",
          title: "Giám đốc Học thuật & Founder",
          education: "Tiến sĩ Giáo dục Quốc tế - Đại học Harvard",
          experience: "15+ năm tư vấn du học Mỹ & Châu Âu",
          specialty: "Học bổng toàn phần Ivy League & Top 50 Mỹ",
          achievements: [
            "Giúp 200+ học sinh đạt học bổng toàn phần",
            "Cựu giảng viên Đại học Stanford",
            "Tác giả sách 'Du học thành công'",
          ],
          quote: "Mỗi học sinh là một tiềm năng vô hạn cần được khai phá",
        },
        {
          name: "Mr. Bob Zeng",
          title: "Senior Mentor - UK & Europe",
          education: "Thạc sĩ Quản lý Giáo dục - Đại học Oxford",
          experience: "12 năm làm việc tại Vương quốc Anh",
          specialty: "Russell Group Universities & Medical Schools",
          achievements: [
            "Chuyên gia tuyển sinh Oxford/Cambridge",
            "Đào tạo 150+ học sinh vào top UK",
            "Cựu Admissions Officer - UCL",
          ],
          quote: "Chuẩn bị hôm nay cho thành công ngày mai",
        },
        {
          name: "Mr. Harry Bott",
          title: "Lead Mentor - Australia & Canada",
          education: "MBA - Đại học Toronto, CPA Canada",
          experience: "10 năm tư vấn di trú và du học",
          specialty: "Định cư sau tốt nghiệp & PR Pathways",
          achievements: [
            "Tỷ lệ visa thành công 99%",
            "Chuyên gia Group of Eight Úc",
            "Cố vấn chính sách di trú",
          ],
          quote: "Lựa chọn đúng đắn tạo nên tương lai khác biệt",
        },
      ],

      matchingTitle: "Sẵn sàng khởi hành bắt đầu từ những làn sóng nhỏ",
      matchingSubtitle:
        "Mỗi học sinh là duy nhất, mỗi hành trình cần một người đồng hành phù hợp.",
      buttonText: "Đăng ký match mentor miễn phí",
      privacyNote: "Cam kết bảo mật thông tin khách hàng",
    },
    en: {
      heroTitle: "Our Team",
      heroTitleHighlight: "Mentor Team",
      heroSubtitle:
        "Experienced, well-traveled, and dedicated experts ready to accompany you",
      scrollText: "Scroll to continue",

      stats: [
        { number: "100+", label: "Total years of experience" },
        { number: "20+", label: "Universities attended" },
        { number: "15+", label: "Countries lived and worked in" },
        { number: "1000+", label: "Students mentored" },
      ],

      approachBadge: "Unique Mentorship Approach",
      approachQuote:
        "We don't just teach you how to get into university, we prepare you for success in life",

      philosophyTitle: "Agua's Educational ",
      philosophyTitleHighlight: "Philosophy",
      philosophyText:
        "With the motto 'Education Goes Hand in Hand with Happiness', the Agua team believes that we can excel academically while developing a balanced life to achieve happiness.",

      meetMentorsTitle: "Meet Our ",
      meetMentorsHighlight: "Mentors",
      meetMentorsSubtitle:
        "Our educators, thought leaders, and inspirers work together to build a lasting foundation for learning — accompanying students as they grow and unlock their potential.",

      foundersSection: {
        title: "Founding Team",
        subtitle: "The Pioneers",
        description: "The individuals who laid the foundation and defined Agua's educational philosophy",
        founders: [
          {
            name: "Ms. Giang Nguyen",
            title: "Founder & Academic Director",
            education: "PhD - Harvard University",
            role: "Strategic Leader",
            roleDescription: "Shapes educational philosophy and long-term development direction",
            quote: "Building a solid foundation for future generations",
          },
          {
            name: "Ms. Ashley",
            title: "Co-founder & Strategic Advisor",
            education: "PhD - Stanford University",
            role: "Academic Advisor",
            roleDescription: "Expert in international education and curriculum development",
            quote: "Innovating education through research and practice",
          }
        ]
      },

      mentorsSection: {
        title: "Professional Mentor Team",
        subtitle: "Guiding Experts",
        description: "Experienced experts who directly guide and mentor students",
      },

      mentors: [
        {
          name: "Ms. Nguyễn Phương Ly",
          title: "Academic Director & Founder",
          education: "PhD in International Education - Harvard University",
          experience: "15+ years consulting for US & Europe study abroad",
          specialty: "Full scholarships to Ivy League & Top 50 US universities",
          achievements: [
            "Helped 200+ students secure full scholarships",
            "Former lecturer at Stanford University",
            "Author of 'Successful Study Abroad'",
          ],
          quote:
            "Every student is an infinite potential waiting to be discovered",
        },
        {
          name: "Mr. Bob Zeng",
          title: "Senior Mentor - UK & Europe",
          education:
            "Master's in Educational Management - University of Oxford",
          experience: "12 years working in the United Kingdom",
          specialty: "Russell Group Universities & Medical Schools",
          achievements: [
            "Oxford/Cambridge admissions specialist",
            "Trained 150+ students into top UK universities",
            "Former Admissions Officer - UCL",
          ],
          quote: "Prepare today for success tomorrow",
        },
        {
          name: "Mr. Harry Bott",
          title: "Lead Mentor - Australia & Canada",
          education: "MBA - University of Toronto, CPA Canada",
          experience: "10 years in immigration and study abroad consulting",
          specialty: "Post-graduation settlement & PR Pathways",
          achievements: [
            "99% visa success rate",
            "Group of Eight Australia specialist",
            "Immigration policy advisor",
          ],
          quote: "The right choices make a different future",
        },
      ],

      matchingTitle: "Ready to embark, starting from small waves",
      matchingSubtitle:
        "Every student is unique, every journey needs the right companion.",
      buttonText: "Register for free mentor matching",
      privacyNote: "Commitment to customer information security",
    },
  };

  const tContent = translations[language] || translations.vi;

  return (
    <div className="manrope-regular">
      <div className="pt-16 md:pt-20"></div>
      <div className={`about-page ${scrolled ? "scrolled" : ""}`}>
        {/* Why Our Mentors - Redesigned with responsive improvements */}
        <section
          ref={whyMentorsRef}
          className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-blue-50 manrope-regular"
        >
          <div className="text-center max-w-5xl mx-auto px-4">
            <h1
              className="manrope-extrabold text-[#0974B6] 
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
          leading-tight mb-4 sm:mb-6 md:mb-8"
            >
              {tContent.heroTitle}
              <span className="block">{tContent.heroTitleHighlight}</span>
            </h1>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-start">
              {/* Left Column - Image with Description (2/3 width) */}
              <div className="lg:col-span-2 relative">
                {/* Small Description Above Image */}
                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm manrope-semibold mb-3 sm:mb-4">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    {tContent.approachBadge}
                  </div>
                  <p className="text-lg sm:text-xl text-gray-700 italic leading-relaxed manrope-light">
                    "{tContent.approachQuote}"
                  </p>
                </div>

                {/* Main Image */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Agua Mentorship Approach"
                    className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Quote - Responsive positioning */}
                <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8 bg-white p-4 sm:p-5 md:p-7 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl max-w-[250px] sm:max-w-sm z-10 border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden mr-3 sm:mr-4 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center border-2 border-blue-200">
                      <img
                        src="/images/logo2.png"
                        alt="Agua Logo"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="manrope-bold text-sm sm:text-base md:text-lg text-gray-900 truncate">
                        {language === "vi"
                          ? "Triết lý Agua"
                          : "Agua Philosophy"}
                      </div>
                      <div className="text-xs sm:text-sm text-[#0974B6] manrope-medium">
                        {language === "vi" ? "Luôn như vậy" : "Always has been"}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic border-l-2 sm:border-l-4 border-blue-300 pl-2 sm:pl-4 py-1 text-xs sm:text-sm md:text-base manrope-light leading-tight">
                    "
                    {language === "vi"
                      ? "Chúng tôi không chỉ dạy bạn cách học, mà còn cách sống"
                      : "We teach you not just how to learn, but how to live"}
                    "
                  </p>
                </div>
              </div>

              {/* Right Column - Educational Philosophy (1/3 width) */}
              <div className="lg:col-span-1 mt-8 sm:mt-10 lg:mt-0">
                <div className="lg:sticky lg:top-24">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl manrope-bold mb-6 md:mb-8 text-[#0974B6]">
                    {tContent.philosophyTitle}
                    <span className="block">{tContent.philosophyTitleHighlight}</span>
                  </h2>

                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <p className="text-gray-700 leading-relaxed manrope-regular text-sm sm:text-base md:text-lg">
                        {tContent.philosophyText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Mentors - Detailed with responsive improvements */}
        <section ref={mentorsRef} className="py-12 sm:py-16 md:py-20 bg-white manrope-regular">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title section with better responsive layout */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-start mb-12 sm:mb-16 md:mb-20">
              {/* Left Column - Big Title with decorative element */}
              <div className="relative">
                <div className="absolute -left-2 sm:-left-4 top-0 w-1 h-12 sm:h-16 md:h-20 bg-[#0974B6] hidden lg:block"></div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl manrope-extrabold text-[#0974B6] leading-tight">
                  <span className="block">{tContent.meetMentorsTitle}</span>
                  {tContent.meetMentorsHighlight}
                </h2>
              </div>

              {/* Right Column - Subtitle with icon */}
              <div className="border-l-2 sm:border-l-4 border-blue-200 pl-4 sm:pl-6 lg:pl-8 py-2">
                <div className="flex items-center mb-2 sm:mb-3">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm manrope-semibold text-blue-700 uppercase tracking-wide">
                    {language === "vi"
                      ? "Tại sao chọn chúng tôi"
                      : "Why Choose Us"}
                  </span>
                </div>
                <p className="text-gray-600 manrope-regular text-base sm:text-lg leading-relaxed">
                  {tContent.meetMentorsSubtitle}
                </p>
              </div>
            </div>

            {/* Founder Section with Highlight - Now with 2 founders */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full manrope-bold text-sm sm:text-base mb-3 sm:mb-4">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  {tContent.foundersSection.title}
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl manrope-bold text-gray-800 mb-4">
                  {tContent.foundersSection.subtitle}
                </h3>
                <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
                  {tContent.foundersSection.description}
                </p>
              </div>

              {/* Founder Cards - 2 in a row with center alignment */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
                {tContent.foundersSection.founders.map((founder, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-blue-50 to-white rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100"
                  >
                    {/* Founder Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1 rounded-full text-xs manrope-bold">
                        {language === "vi" ? "Sáng lập" : "Founder"}
                      </div>
                    </div>

                    {/* Founder Image */}
                    <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                      <img
                        src={index === 0 ? "/images/founder1.jpg" : "/images/Mentor1.png"}
                        alt={founder.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>

                      {/* Founder Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                        <h3 className="manrope-bold text-xl sm:text-2xl mb-1">
                          {founder.name}
                        </h3>
                        <p className="text-blue-200 manrope-medium text-sm sm:text-base">
                          {founder.title}
                        </p>
                      </div>
                    </div>

                    {/* Founder Details */}
                    <div className="p-4 sm:p-6">
                      <div className="mb-4">
                        <div className="flex items-center mb-3">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 14l9-5-9-5-9 5 9 5z"
                            />
                          </svg>
                          <span className="manrope-medium text-gray-900 text-sm sm:text-base">
                            {founder.education}
                          </span>
                        </div>

                        <div className="bg-blue-100 p-3 sm:p-4 rounded-lg border border-blue-200">
                          <div className="flex items-center mb-2">
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                            </svg>
                            <span className="manrope-bold text-blue-700 text-sm sm:text-base">
                              {founder.role}
                            </span>
                          </div>
                          <p className="text-blue-800 manrope-regular text-xs sm:text-sm">
                            {founder.roleDescription}
                          </p>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="pt-4 border-t border-blue-100">
                        <div className="flex items-start">
                          <svg
                            className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className="text-gray-600 italic text-xs sm:text-sm manrope-light">
                            "{founder.quote}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mentors Section */}
            <div>
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-2 rounded-full manrope-bold text-sm sm:text-base mb-3 sm:mb-4">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0c-.75 0-1.5-.25-2-.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {tContent.mentorsSection.title}
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl manrope-bold text-gray-800 mb-4">
                  {tContent.mentorsSection.subtitle}
                </h3>
                <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
                  {tContent.mentorsSection.description}
                </p>
              </div>

              {/* Mentor Cards Grid - 2 in a row on mobile, 3 on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {tContent.mentors.map((mentor, index) => {
                  const mentorImages = [
                    "/images/Mentor1.png",
                    "/images/Mentor2.png",
                    "/images/Mentor3.png",
                  ];

                  return (
                    <div
                      key={index}
                      className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
                    >
                      {/* Mentor Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-3 py-1 rounded-full text-xs manrope-bold">
                          {language === "vi" ? "Mentor" : "Mentor"}
                        </div>
                      </div>

                      {/* Mentor Image */}
                      <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                        <img
                          src={mentorImages[index]}
                          alt={mentor.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Mentor Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                          <h3 className="manrope-bold text-xl sm:text-2xl mb-1">
                            {mentor.name}
                          </h3>
                          <p className="text-green-200 manrope-medium text-sm sm:text-base">
                            {mentor.title}
                          </p>
                        </div>
                      </div>

                      {/* Mentor Details */}
                      <div className="p-4 sm:p-6">
                        {/* Education & Experience */}
                        <div className="mb-4 sm:mb-6">
                          <div className="flex items-center mb-3">
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5z"
                              />
                            </svg>
                            <span className="manrope-medium text-gray-900 text-sm sm:text-base">
                              {mentor.education}
                            </span>
                          </div>

                          <div className="flex items-center mb-3">
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            <span className="manrope-medium text-gray-900 text-sm sm:text-base">
                              {mentor.experience}
                            </span>
                          </div>

                          <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-100">
                            <div className="flex items-center mb-1 sm:mb-2">
                              <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0"
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
                              <span className="manrope-bold text-green-700 text-sm sm:text-base">
                                {language === "vi"
                                  ? "Chuyên môn chính:"
                                  : "Main Specialty:"}
                              </span>
                            </div>
                            <p className="text-green-800 manrope-medium text-sm sm:text-base">
                              {mentor.specialty}
                            </p>
                          </div>
                        </div>

                        {/* Quote */}
                        <div className="pt-4 border-t border-gray-100">
                          <div className="flex items-start">
                            <svg
                              className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <p className="text-gray-600 italic text-xs sm:text-sm manrope-light">
                              "{mentor.quote}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Mentor Matching - Redesigned with responsive improvements */}
        <section ref={mentorMatchingRef} className="py-12 sm:py-16 md:py-20 manrope-regular bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              {/* Left Column - Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl manrope-bold mb-4 sm:mb-6 leading-tight text-[#0974B6] leading-relaxed">
                  {tContent.matchingTitle}
                </h2>

                <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-700 leading-relaxed manrope-regular">
                  {tContent.matchingSubtitle}
                </p>

                {/* Button with Icon */}
                <button className="bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full manrope-semibold border border-blue-600 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-md w-full sm:w-auto text-sm sm:text-base flex items-center justify-center sm:justify-start">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-pulse flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                  {tContent.buttonText}
                </button>

                {/* Small note */}
                <div className="pt-6 sm:pt-8 md:pt-10 text-gray-700 leading-relaxed text-xs sm:text-sm flex items-start mb-8 sm:mb-10 md:mb-12 manrope-regular">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  {tContent.privacyNote}
                </div>
              </div>

              {/* Right Column - Extra Large Logo */}
              <div className="relative order-first lg:order-last mt-8 sm:mt-10 lg:mt-0">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-blue-500/20 via-blue-400/15 to-cyan-500/20 rounded-full blur-xl sm:blur-2xl md:blur-3xl opacity-50 sm:opacity-60"></div>

                  <div className="relative z-10 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto">
                    <div className="flex flex-col items-center">
                      <img
                        src="/images/logo2.png"
                        alt="Agua International Education"
                        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain mb-4 sm:mb-6"
                      />

                      <div className="text-center text-[#0974B6]">
                        <div className="text-xl sm:text-2xl md:text-3xl manrope-bold mb-1">AGUA</div>
                        <div className="text-sm sm:text-base md:text-lg manrope-regular">
                          International Education
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 overflow-hidden opacity-10">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 border-2 border-white rounded-full"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 border-2 border-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;