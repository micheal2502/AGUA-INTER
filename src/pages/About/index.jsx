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

  // Animation cho Stats Section
  useEffect(() => {
    const ctx = gsap.context(() => {
      const stats = document.querySelectorAll('.backdrop-blur-sm.bg-white\\/10');
      if (stats.length > 0) {
        gsap.fromTo(stats,
          {
            y: 100,
            opacity: 0,
            scale: 0.8
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: '.hero-section',
              start: "bottom 70%",
              end: "bottom 30%",
              toggleActions: "play reverse play reverse",
            }
          }
        );
      }
    }, heroTextRef);

    return () => ctx.revert();
  }, [language]);

  // Animation cho Section 1 (Why Our Mentors)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: whyMentorsRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animation cho badge
      sectionTl.fromTo(
        whyMentorsRef.current.querySelector(".inline-flex.items-center"),
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0,
      );

      // Animation cho quote
      sectionTl.fromTo(
        whyMentorsRef.current.querySelector(".text-xl.italic"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.2,
      );

      // Animation cho main image (left column)
      sectionTl.fromTo(
        whyMentorsRef.current.querySelector(".lg\\:col-span-2 .relative.rounded-2xl"),
        { x: -100, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.4)" },
        0.4,
      );

      // Animation cho floating quote card
      sectionTl.fromTo(
        whyMentorsRef.current.querySelector(".absolute.-bottom-8"),
        { x: 100, y: 50, opacity: 0, rotation: 5 },
        { x: 0, y: 0, opacity: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" },
        0.6,
      );

      // Animation cho right column content
      sectionTl.fromTo(
        whyMentorsRef.current.querySelector(".lg\\:col-span-1"),
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0.8,
      );

      // Animation cho title trong right column
      sectionTl.fromTo(
        whyMentorsRef.current.querySelector(".lg\\:col-span-1 h2"),
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        1,
      );

      // Animation cho text trong right column
      sectionTl.fromTo(
        whyMentorsRef.current.querySelector(".lg\\:col-span-1 p"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        1.2,
      );
    }, whyMentorsRef);

    return () => ctx.revert();
  }, [language]);

  // Animation cho Section 2 (Meet Our Mentors)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: mentorsRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animation cho section title
      sectionTl.fromTo(
        mentorsRef.current.querySelector(".text-center h2"),
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0,
      );

      // Animation cho section subtitle
      sectionTl.fromTo(
        mentorsRef.current.querySelector(".text-center p"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.2,
      );

      // Animation cho mentor cards
      const mentorCards = mentorsRef.current?.querySelectorAll(".grid > div");
      if (mentorCards) {
        sectionTl.fromTo(
          mentorCards,
          {
            y: 100,
            opacity: 0,
            scale: 0.9,
            rotation: index => index % 2 === 0 ? -3 : 3
          },
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
          sectionTl.fromTo(
            cardImage,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" },
            0.5 + (index * 0.1),
          );
        }

        if (cardContent) {
          const contentElements = cardContent.querySelectorAll("div");
          sectionTl.fromTo(
            contentElements,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
            0.7 + (index * 0.1),
          );
        }
      });
    }, mentorsRef);

    return () => ctx.revert();
  }, [language]);

  // Animation cho Section 3 (Mentor Matching)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: mentorMatchingRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animation cho left column content
      sectionTl.fromTo(
        mentorMatchingRef.current.querySelector(".lg\\:grid-cols-2 > div:first-child"),
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0,
      );

      // Animation cho title
      sectionTl.fromTo(
        mentorMatchingRef.current.querySelector(".lg\\:grid-cols-2 > div:first-child h2"),
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.4)" },
        0.2,
      );

      // Animation cho subtitle
      sectionTl.fromTo(
        mentorMatchingRef.current.querySelector(".lg\\:grid-cols-2 > div:first-child p.text-lg"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.3,
      );

      // Animation cho button
      sectionTl.fromTo(
        mentorMatchingRef.current.querySelector("button"),
        { y: 50, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" },
        0.5,
      );

      // Animation cho privacy note
      sectionTl.fromTo(
        mentorMatchingRef.current.querySelector(".py-10.text-gray-700"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        0.7,
      );

      // Animation cho right column (logo)
      sectionTl.fromTo(
        mentorMatchingRef.current.querySelector(".lg\\:grid-cols-2 > div:last-child"),
        { x: 100, opacity: 0, scale: 0.8 },
        { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.4)" },
        0.4,
      );

      // Animation cho glow effect
      sectionTl.fromTo(
        mentorMatchingRef.current.querySelector(".absolute.bg-gradient-to-r"),
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 0.7, duration: 1.5, ease: "power2.out" },
        0.6,
      );

      // Animation cho logo
      sectionTl.fromTo(
        mentorMatchingRef.current.querySelector("img.w-80"),
        { scale: 0.5, opacity: 0, rotation: -180 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" },
        0.8,
      );

      // Animation cho logo text
      sectionTl.fromTo(
        mentorMatchingRef.current.querySelector(".text-center .text-3xl"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        1,
      );
    }, mentorMatchingRef);

    return () => ctx.revert();
  }, [language]);

  // Effect để detect section đang active
  useEffect(() => {
    const sections = [
      whyMentorsRef,
      mentorsRef,
      mentorMatchingRef,
    ];

    const scrollTriggers = sections.map((sectionRef, index) => {
      return ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          console.log(`About: Entering section ${index + 1}`);
        },
        onEnterBack: () => {
          console.log(`About: Re-entering section ${index + 1}`);
        },
        onLeave: () => {
          console.log(`About: Leaving section ${index + 1}`);
        },
        onLeaveBack: () => {
          console.log(`About: Leaving back from section ${index + 1}`);
        },
      });
    });

    return () => {
      scrollTriggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  const translations = {
    vi: {
      heroTitle: "Đội ngũ ",
      heroTitleHighlight: "Mentor",
      heroSubtitle: "Những chuyên gia giàu kinh nghiệm, từng trải và tận tâm đồng hành cùng bạn",
      scrollText: "Vuốt để xem tiếp",
      
      stats: [
        { number: "100+", label: "Năm kinh nghiệm tổng" },
        { number: "20+", label: "Trường đại học từng học" },
        { number: "15+", label: "Quốc gia từng sống và làm việc" },
        { number: "1000+", label: "Học sinh được mentor" }
      ],
      
      approachBadge: "Phương pháp đồng hành độc đáo",
      approachQuote: "Chúng tôi không chỉ dạy bạn cách vào đại học, mà còn chuẩn bị cho bạn thành công trong cuộc sống",
      
      philosophyTitle: "Triết lí giáo dục ",
      philosophyTitleHighlight: "Agua",
      philosophyText: "Với phương châm 'Giáo dục đi cùng sự hạnh phúc', đội ngũ của Agua luôn tin rằng chúng ta vừa có thể xuất sắc trong học tập đồng thời phát triển đồng độ cuộc sống để đạt được sự hạnh phúc.",
      
      meetMentorsTitle: "Gặp gỡ đội ngũ ",
      meetMentorsHighlight: "Mentor",
      meetMentorsSubtitle: "Những chuyên gia sẽ đồng hành cùng bạn trên hành trình du học",
      
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
      matchingSubtitle: "Mỗi học sinh là duy nhất, mỗi hành trình cần một người đồng hành phù hợp.",
      buttonText: "Đăng ký match mentor miễn phí",
      privacyNote: "Cam kết bảo mật thông tin khách hàng",
      
      footerLinks: {
        home: "Trang Chủ",
        programs: "Gói Học Tập",
        people: "Con Người",
        opportunities: "Cơ Hội"
      },
      
      footerContact: {
        address: "123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh, Việt Nam",
        phone: "+84 28 1234 5678",
        email: "info@agua.edu.vn"
      },
      
      footerBottom: {
        copyright: `© ${new Date().getFullYear()} Agua International Education. Bảo lưu mọi quyền.`,
        privacy: "Chính sách bảo mật",
        terms: "Điều khoản sử dụng",
        sitemap: "Sitemap"
      }
    },
    en: {
      heroTitle: "Our ",
      heroTitleHighlight: "Mentor Team",
      heroSubtitle: "Experienced, well-traveled, and dedicated experts ready to accompany you",
      scrollText: "Scroll to continue",
      
      stats: [
        { number: "100+", label: "Total years of experience" },
        { number: "20+", label: "Universities attended" },
        { number: "15+", label: "Countries lived and worked in" },
        { number: "1000+", label: "Students mentored" }
      ],
      
      approachBadge: "Unique Mentorship Approach",
      approachQuote: "We don't just teach you how to get into university, we prepare you for success in life",
      
      philosophyTitle: "Agua's Educational ",
      philosophyTitleHighlight: "Philosophy",
      philosophyText: "With the motto 'Education Goes Hand in Hand with Happiness', the Agua team believes that we can excel academically while developing a balanced life to achieve happiness.",
      
      meetMentorsTitle: "Meet Our ",
      meetMentorsHighlight: "Mentors",
      meetMentorsSubtitle: "The experts who will accompany you on your study abroad journey",
      
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
          quote: "Every student is an infinite potential waiting to be discovered",
        },
        {
          name: "Mr. Bob Zeng",
          title: "Senior Mentor - UK & Europe",
          education: "Master's in Educational Management - University of Oxford",
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
      matchingSubtitle: "Every student is unique, every journey needs the right companion.",
      buttonText: "Register for free mentor matching",
      privacyNote: "Commitment to customer information security",
      
      footerLinks: {
        home: "Home",
        programs: "Study Packages",
        people: "Our People",
        opportunities: "Opportunities"
      },
      
      footerContact: {
        address: "123 ABC Street, XYZ District, Ho Chi Minh City, Vietnam",
        phone: "+84 28 1234 5678",
        email: "info@agua.edu.vn"
      },
      
      footerBottom: {
        copyright: `© ${new Date().getFullYear()} Agua International Education. All rights reserved.`,
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        sitemap: "Sitemap"
      }
    }
  };

  const tContent = translations[language] || translations.vi;

  return (
    <div className={`about-page ${scrolled ? "scrolled" : ""}`}>
      {/* Hero Section - Focus on Mentors */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden hero-section">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Agua Mentors Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-purple-900/80"></div>
        </div>

        {/* Hero Content */}
        <div ref={heroTextRef} className="relative z-10 container mx-auto px-5 text-center text-white">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {tContent.heroTitle}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                {tContent.heroTitleHighlight}
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light max-w-3xl mx-auto">
              {tContent.heroSubtitle}
            </p>

            {/* Mentor Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {tContent.stats.map((stat, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20 hover:border-white/40 transition-colors"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-blue-100">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                {tContent.scrollText}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Mentors - Redesigned with 2/3 - 1/3 Grid */}
      <section ref={whyMentorsRef} className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Column - Image with Description (2/3 width) */}
            <div className="lg:col-span-2 relative">
              {/* Small Description Above Image */}
              <div className="mb-8">
                <div className="inline-flex items-center bg-blue-100 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-4">
                  <svg
                    className="w-5 h-5 mr-2"
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
                <p className="text-xl text-gray-700 italic leading-relaxed">
                  "{tContent.approachQuote}"
                </p>
              </div>

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Agua Mentorship Approach"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Quote */}
              <div className="absolute -bottom-8 -right-8 bg-white p-7 rounded-2xl shadow-2xl max-w-sm z-10 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center border-2 border-blue-200">
                    <img
                      src="/images/logo2.png"
                      alt="Agua Logo"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-gray-900">
                      {language === 'vi' ? 'Triết lý Agua' : 'Agua Philosophy'}
                    </div>
                    <div className="text-sm text-blue-600 font-medium">
                      {language === 'vi' ? 'Luôn như vậy' : 'Always has been'}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic border-l-4 border-blue-300 pl-4 py-1">
                  "{language === 'vi' ? 'Chúng tôi không chỉ dạy bạn cách học, mà còn cách sống' : 'We teach you not just how to learn, but how to live'}"
                </p>
              </div>
            </div>

            {/* Right Column - Educational Philosophy (1/3 width) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-4xl font-bold mb-8 text-gray-900">
                  {tContent.philosophyTitle}
                  <span className="text-blue-600">{tContent.philosophyTitleHighlight}</span>
                </h2>

                <div className="space-y-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      {tContent.philosophyText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Mentors - Detailed */}
      <section ref={mentorsRef} className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {tContent.meetMentorsTitle}
              <span className="text-blue-600">{tContent.meetMentorsHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {tContent.meetMentorsSubtitle}
            </p>
          </div>

          {/* Mentors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tContent.mentors.map((mentor, index) => {
              const images = ["/images/Mentor1.png", "/images/Mentor2.png", "/images/Mentor3.png"];
              
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  {/* Mentor Image */}
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={images[index]}
                      alt={mentor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Mentor Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-bold text-2xl mb-1">{mentor.name}</h3>
                      <p className="text-blue-200 font-medium">{mentor.title}</p>
                    </div>
                  </div>

                  {/* Mentor Details */}
                  <div className="p-6">
                    {/* Education & Experience */}
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <svg
                          className="w-5 h-5 text-blue-500 mr-2"
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
                        <span className="font-medium text-gray-900">
                          {mentor.education}
                        </span>
                      </div>

                      <div className="flex items-center mb-4">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
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
                        <span className="font-medium text-gray-900">
                          {mentor.experience}
                        </span>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <svg
                            className="w-5 h-5 text-blue-600 mr-2"
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
                          <span className="font-bold text-blue-700">
                            {language === 'vi' ? 'Chuyên môn chính:' : 'Main Specialty:'}
                          </span>
                        </div>
                        <p className="text-blue-800 font-medium">
                          {mentor.specialty}
                        </p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <svg
                          className="w-5 h-5 text-amber-500 mr-2"
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
                        {language === 'vi' ? 'Thành tựu nổi bật' : 'Notable Achievements'}
                      </h4>
                      <ul className="space-y-2">
                        {mentor.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg
                              className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm text-gray-700">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quote */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600 italic text-sm">
                        "{mentor.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentor Matching - Redesigned */}
      <section ref={mentorMatchingRef} className="py-20">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-700 leading-relaxed">
                {tContent.matchingTitle}
              </h2>

              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                {tContent.matchingSubtitle}
              </p>

              {/* Button with Icon */}
              <button className="bg-white text-blue-600 px-4 sm:px-6 py-2 rounded-full font-semibold border border-blue-600 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-md w-fit sm:w-auto text-sm sm:text-base">
                <span className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 group-hover:animate-pulse"
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
                </span>
              </button>

              {/* Small note */}
              <p className="py-10 text-gray-700 leading-relaxed text-sm flex items-center mb-12">
                <svg
                  className="w-4 h-4 mr-2"
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
              </p>
            </div>

            {/* Right Column - Extra Large Logo */}
            <div className="relative">
              {/* Main Logo - Takes up most of the grid */}
              <div className="relative flex items-center justify-center">
                {/* Large Glow Effect */}
                <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-cyan-500/30 rounded-full blur-3xl opacity-70"></div>

                {/* Giant Logo Container */}
                <div className="relative z-10 w-full max-w-[500px] mx-auto">
                  <div className="flex flex-col items-center">
                    {/* Giant Logo */}
                    <img
                      src="/images/logo2.png"
                      alt="Agua International Education"
                      className="w-80 h-80 md:w-120 md:h-120 object-contain mb-6"
                    />

                    {/* Logo Text - Minimal */}
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">AGUA</div>
                      <div className="text-lg">
                        International Education
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-white rounded-full"></div>
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
                <h3 className="text-2xl font-semibold">
                  Agua International Education
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
                {language === 'vi' ? 'Liên kết nhanh' : 'Quick Links'}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {tContent.footerLinks.home}
                  </a>
                </li>
                <li>
                  <a
                    href="/programs"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {tContent.footerLinks.programs}
                  </a>
                </li>
                <li>
                  <a
                    href="/people"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {tContent.footerLinks.people}
                  </a>
                </li>
                <li>
                  <a
                    href="/opportunities"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {tContent.footerLinks.opportunities}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === 'vi' ? 'Liên hệ' : 'Contact'}
              </h4>
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
                  <span>
                    {tContent.footerContact.address}
                  </span>
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
                  <span>{tContent.footerContact.phone}</span>
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
                  <span>{tContent.footerContact.email}</span>
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
                  {tContent.footerBottom.copyright}
                </p>
              </div>
              <div className="flex flex-wrap justify-center space-x-6 text-sm">
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {tContent.footerBottom.privacy}
                </a>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {tContent.footerBottom.terms}
                </a>
                <a
                  href="/sitemap"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {tContent.footerBottom.sitemap}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;