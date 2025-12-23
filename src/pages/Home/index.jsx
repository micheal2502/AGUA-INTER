import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Carousel from "../../components/Layout/Carousel";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useLanguage } from "../../contexts/LanguageContext"; // Import the LanguageContext
import { Link } from "react-router-dom";

const Home = () => {
  const { language } = useLanguage(); // Get current language

  const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  const logos = [
    { id: 1, name: "Vingroup", logo: "images/vinschool.png" },
    { id: 2, name: "Sovico", logo: "images/FTU.png" },
    { id: 3, name: "Other", logo: "images/HUST.png" },
    { id: 4, name: "NEU", logo: "images/NEU.png" },
    { id: 5, name: "Harvard", logo: "images/harvard.png" },
    { id: 6, name: "MIT", logo: "images/MIT.png" },
    { id: 7, name: "VUW", logo: "images/VUW.png" },
    { id: 8, name: "UOA", logo: "images/UOA.png" },
    { id: 9, name: "NUS", logo: "images/NUS.png" },
    { id: 10, name: "Vingroup", logo: "images/vinschool.png" },
    { id: 11, name: "Sovico", logo: "images/FTU.png" },
    { id: 12, name: "Other", logo: "images/HUST.png" },
    { id: 13, name: "NEU", logo: "images/NEU.png" },
    { id: 14, name: "Harvard", logo: "images/harvard.png" },
    { id: 15, name: "MIT", logo: "images/MIT.png" },
    { id: 16, name: "VUW", logo: "images/VUW.png" },
    { id: 17, name: "UOA", logo: "images/UOA.png" },
    { id: 18, name: "NUS", logo: "images/NUS.png" },
  ];

  const heroTextRef = useRef(null);
  const scrollDotRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // Refs cho tất cả các section
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null); // Các gói lộ trình
  const thirdSectionRef = useRef(null); // Trải nghiệm thực tế
  const fourthSectionRef = useRef(null); // Người dẫn dắt
  const fifthSectionRef = useRef(null); // Câu chuyện giáo dục

  const textContentRef = useRef(null);
  const imageRef = useRef(null);

  // Language-specific content
  const content = {
    vie: {
      hero: {
        title: "Nơi Kiến Tạo Cuộc Sống",
        subtitle: "Hạnh phúc thông qua giáo dục",
        scrollText: "Vuốt để xem tiếp",
      },
      firstSection: {
        title: "Từ trái tim của đội ngũ",
        mainText:
          "Chúng tôi khuyến khích học sinh cởi mở, dám thử, bộc lộ trong một môi trường có nền tảng - có định hướng",
        bullet1:
          "Không chỉ là đồng hành cùng học sinh — mà là thật sự thấu hiểu và dẫn lối.",
        bullet1Title: "Thấu hiểu & Dẫn lối",
        bullet1Desc:
          "Chúng tôi không chỉ dừng lại ở việc đồng hành mà còn thấu hiểu sâu sắc những khó khăn, ước mơ và tiềm năng của từng học sinh.",
        bullet2:
          "Châm ngòi hứng thú, khai phá tiềm năng, phát triển không giới hạn.",
        bullet2Title: "Khai phá Tiềm năng",
        bullet2Desc:
          "Mỗi học sinh đều sở hữu những tài năng đặc biệt. Chúng tôi giúp khơi dậy đam mê học tập và khai phá điểm mạnh riêng biệt.",
        bullet3: "Một nền giáo dục tốt, song hành sự sáng tạo không ngừng.",
        bullet3Title: "Giáo dục Hạnh phúc",
        bullet3Desc:
          "Chúng tôi tin rằng một nền giáo dục chất lượng phải song hành cùng cuộc sống hạnh phúc và nuôi dưỡng tâm hồn học sinh.",
        button: "Tìm hiểu thêm",
      },
      minimap: {
        title: "Phạm vi Toàn cầu",
        subtitle: "Làm việc với người giỏi nhất để trở thành người giỏi nhất",
        description:
          "Những chuyên gia của Agua được chọn lọc hết sức kĩ càng, đến từ những trường đại học số 1 thế giới.",
        networkTitle: "Mạng lưới Toàn cầu của Chúng tôi",
        networkDesc:
          "Chúng tôi có mạng lưới chuyên gia tại các quốc gia hàng đầu về giáo dục:",
        countries: [
          "🇺🇸 Hoa Kỳ - Ivy League & Top 50",
          "🇬🇧 Anh - Russell Group",
          "🇦🇺 Úc - Group of Eight",
          "🇨🇦 Canada - U15 Group",
          "🇸🇬 Singapore - NUS, NTU",
          "🇭🇰 Hong Kong - Các trường đại học hàng đầu châu Á",
          "🇳🇿 New Zealand - Group of Eight",
        ],
      },
      secondSection: {
        title: "Các gói lộ trình",
        description:
          "Mỗi lộ trình là một phương pháp được thiết kế riêng biệt, phù hợp với nhu cầu, độ tuổi và cá tính riêng biệt của từng học viên.",
        subDescription:
          "Phương pháp chuyên biệt - lộ trình chuyên sâu. Khám phá 3 lộ trình:",
        packages: ["Discovery", "Momentum", "Launch"],
        explore: "Khám phá",
        rightDescription:
          "Chỉ tham gia bằng lời mời. Ba lộ trình riêng biệt được thiết kế chuyên sâu dựa trên những giai đoạn phát triển khác nhau của sự phát triển trí tuệ và cảm xúc.",
        journey:
          "Lộ Trình tỏa sáng - đồng hành chuyên sâu trong quá trình chuyển hóa tài năng của các học viên.",
      },
      thirdSection: {
        title1: "Trải Nghiệm",
        title2: "Thực Tế",
        description1:
          "Lộ trình dành cho những học viên mới bắt đầu, giúp khám phá tiềm năng và xác định hướng đi phù hợp nhất với khả năng và đam mê cá nhân.",
        timeline1: "Thời gian: 3 tháng • Độ tuổi: 12-15 • Cấp độ: Cơ bản",
        description2:
          "Xây dựng nền tảng vững chắc và phát triển toàn diện các kỹ năng cần thiết cho hành trình học tập dài hạn.",
        timeline2: "Thời gian: 4 tháng • Độ tuổi: 15-17 • Cấp độ: Trung cấp",
        introText:
          "Trải nghiệm những hành trình đặc biệt, những trải nghiệm mới lạ. Chúng tôi kiến tạo 1 hành trình nơi nuôi dưỡng trí tuệ, cảm xúc và tái tạo năng lượng toàn diện cho học viên.",
        description3:
          "Lộ trình nâng cao dành cho học viên đã có nền tảng, tập trung vào phát triển chuyên sâu và hoàn thiện kỹ năng để đạt được mục tiêu cao hơn.",
        timeline3: "Thời gian: 6 tháng • Độ tuổi: 16-18 • Cấp độ: Nâng cao",
        button: "Tìm hiểu thêm",
      },
      fourthSection: {
        title: "Người Dẫn Dắt",
        description:
          "Những nhà giáo dục xuất sắc là những người dẫn đầu tư tưởng và nhà kiến tạo tầm nhìn.",
        teamName: "Đội ngũ của Aqua",
        rightDescription:
          "Những người dẫn dắt cuộc đồng của chúng tôi không chỉ làm việc bằng trí tuệ, kinh nghiệm, sự chân trình mà cả bằng tình yêu, sự tâm huyết với giáo dục.",
        button: "Tìm hiểu thêm",
      },
      fifthSection: {
        title: "Những câu chuyện về giáo dục",
        description:
          "Những suy ngẫm, chiêm nghiệm và góc nhìn giáo dục đa chiều từ đội ngũ phía sau Agua — những con người tận tâm tìm kiếm những giá trị tốt đẹp nhất cho hành trình học tập của mỗi học sinh.",
        button: "Tìm hiểu thêm",
      },
      inheritanceSection: {
        title: "Từ những người tiền nghiệm",
        subtitle: "Kế thừa và dẫn dắt",
        description:
          "Học từ những người giỏi nhất để trở thành người giỏi nhất, tìm hiểu thêm về cơ hội ở Agua",
      },
      footer: {
        companyName: "Agua International Education",
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
        sitemap: "Sitemap",
      },
    },
    en: {
      hero: {
        title: "Where Lives Are Built",
        subtitle: "Happiness through education",
        scrollText: "Scroll to continue",
      },
      firstSection: {
        title: "From the heart of our team",
        mainText:
          "We encourage students to be open, daring, expressive in an environment with foundation - with direction",
        bullet1:
          "Not just accompanying students - but truly understanding and guiding.",
        bullet1Title: "Understanding & Guidance",
        bullet1Desc:
          "We don't just stop at accompanying students but deeply understand their difficulties, dreams, and potential.",
        bullet2: "Ignite interest, unlock potential, develop without limits.",
        bullet2Title: "Unlocking Potential",
        bullet2Desc:
          "Every student possesses special talents. We help ignite learning passion and discover unique strengths.",
        bullet3: "A good education, alongside continuous creativity.",
        bullet3Title: "Happy Education",
        bullet3Desc:
          "We believe that quality education must go hand in hand with a happy life and nurturing students' souls.",
        button: "Learn more",
      },
      minimap: {
        title: "Global Coverage",
        subtitle: "Work with the best to become the best",
        description:
          "Agua's experts are carefully selected from the world's top universities.",
        networkTitle: "Our Global Network",
        networkDesc:
          "We have a network of experts in the world's leading education countries:",
        countries: [
          "🇺🇸 USA - Ivy League & Top 50",
          "🇬🇧 UK - Russell Group",
          "🇦🇺 Australia - Group of Eight",
          "🇨🇦 Canada - U15 Group",
          "🇸🇬 Singapore - NUS, NTU",
          "🇭🇰 Hong Kong - Top Asian Universities",
          "🇳🇿 New Zealand - Group of Eight",
        ],
      },
      secondSection: {
        title: "Learning Pathways",
        description:
          "Each pathway is a uniquely designed method, suitable for the individual needs, ages, and personalities of each student.",
        subDescription:
          "Specialized method - intensive pathway. Explore 3 pathways:",
        packages: ["Discovery", "Momentum", "Launch"],
        explore: "Explore",
        rightDescription:
          "Participation by invitation only. Three distinct pathways designed in-depth based on different stages of intellectual and emotional development.",
        journey:
          "Shining Pathway - intensive companionship in the process of transforming students' talents.",
      },
      thirdSection: {
        title1: "Real World",
        title2: "Experience",
        description1:
          "A pathway for beginners to explore potential and determine the most suitable direction based on individual abilities and passions.",
        timeline1: "Duration: 3 months • Age: 12-15 • Level: Basic",
        description2:
          "Build a solid foundation and comprehensively develop necessary skills for long-term learning journey.",
        timeline2: "Duration: 4 months • Age: 15-17 • Level: Intermediate",
        introText:
          "Experience special journeys, new experiences. We create a journey that nurtures intelligence, emotions, and comprehensively regenerates energy for students.",
        description3:
          "Advanced pathway for students with foundation, focusing on in-depth development and skill perfection to achieve higher goals.",
        timeline3: "Duration: 6 months • Age: 16-18 • Level: Advanced",
        button: "Learn more",
      },
      fourthSection: {
        title: "Our Guides",
        description:
          "Excellent educators are thought leaders and vision creators.",
        teamName: "Aqua Team",
        rightDescription:
          "Our journey guides work not only with intellect, experience, sincerity but also with love and dedication to education.",
        button: "Learn more",
      },
      fifthSection: {
        title: "Educational Stories",
        description:
          "Reflections, contemplations, and multi-dimensional educational perspectives from the team behind Agua — dedicated people seeking the best values for each student's learning journey.",
        button: "Learn more",
      },
      inheritanceSection: {
        title: "From the Pioneers",
        subtitle: "Inheritance and Guidance",
        description:
          "Learn from the best to become the best, learn more about opportunities at Agua",
      },
      footer: {
        companyName: "Agua International Education",
        quickLinks: "Quick Links",
        home: "Home",
        programs: "Learning Packages",
        people: "Our People",
        opportunities: "Opportunities",
        contact: "Contact",
        address: "123 ABC Street, XYZ District<br />Ho Chi Minh City, Vietnam",
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

  // Animation cho Section 1
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: firstSectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        },
      });

      sectionTl.fromTo(
        textContentRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0,
      );

      sectionTl.fromTo(
        imageRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.2,
      );

      const listItems =
        textContentRef.current?.querySelectorAll(".flex.items-start");
      if (listItems) {
        sectionTl.fromTo(
          listItems,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          0.4,
        );
      }

      const button = textContentRef.current?.querySelector("button");
      if (button) {
        sectionTl.fromTo(
          button,
          { y: 30, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" },
          0.8,
        );
      }
    }, firstSectionRef);

    return () => ctx.revert();
  }, [language]); // Add language as dependency

  // Animation cho Section 2 (Các gói lộ trình)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: secondSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      sectionTl.fromTo(
        secondSectionRef.current.querySelector(".lg\\:col-span-2"),
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0,
      );

      sectionTl.fromTo(
        secondSectionRef.current.querySelector(".space-y-8"),
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0.3,
      );

      const leftElements = secondSectionRef.current?.querySelectorAll(
        ".lg\\:col-span-2 > *",
      );
      if (leftElements) {
        sectionTl.fromTo(
          leftElements,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
          0.5,
        );
      }

      const rightElements =
        secondSectionRef.current?.querySelectorAll(".space-y-8 > *");
      if (rightElements) {
        sectionTl.fromTo(
          rightElements,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
          0.8,
        );
      }
    }, secondSectionRef);

    return () => ctx.revert();
  }, [language]);

  // Animation cho Section 3 (Trải nghiệm thực tế)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: thirdSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      sectionTl.fromTo(
        thirdSectionRef.current.querySelector(".grid > div:nth-child(1)"),
        { y: 100, opacity: 0, rotation: -5 },
        { y: 0, opacity: 1, rotation: 0, duration: 1, ease: "back.out(1.4)" },
        0,
      );

      sectionTl.fromTo(
        thirdSectionRef.current.querySelector(".grid > div:nth-child(2)"),
        { y: 100, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.4)" },
        0.2,
      );

      sectionTl.fromTo(
        thirdSectionRef.current.querySelector(".grid > div:nth-child(3)"),
        { y: 100, opacity: 0, rotation: 5 },
        { y: 0, opacity: 1, rotation: 0, duration: 1, ease: "back.out(1.4)" },
        0.4,
      );

      const gridItems =
        thirdSectionRef.current?.querySelectorAll(".grid > div > *");
      if (gridItems) {
        sectionTl.fromTo(
          gridItems,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          0.6,
        );
      }
    }, thirdSectionRef);

    return () => ctx.revert();
  }, [language]);

  // Animation cho Section 4 (Người dẫn dắt)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: fourthSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animation cho title và button
      sectionTl.fromTo(
        fourthSectionRef.current.querySelector("h2"),
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0,
      );

      sectionTl.fromTo(
        fourthSectionRef.current.querySelector("button"),
        { y: -50, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        0.2,
      );

      // Animation cho grid lớn
      sectionTl.fromTo(
        fourthSectionRef.current.querySelector(".lg\\:col-span-2"),
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0.4,
      );

      // Animation cho grid bé
      sectionTl.fromTo(
        fourthSectionRef.current.querySelector(".space-y-8"),
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0.6,
      );
    }, fourthSectionRef);

    return () => ctx.revert();
  }, [language]);

  // Animation cho Section 5 (Câu chuyện giáo dục)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: fifthSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animation cho grid bé (bên trái)
      sectionTl.fromTo(
        fifthSectionRef.current.querySelector(".lg\\:col-span-1"),
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0,
      );

      // Animation cho grid lớn (bên phải)
      sectionTl.fromTo(
        fifthSectionRef.current.querySelector(".lg\\:col-span-2"),
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0.3,
      );

      // Animation cho carousel
      sectionTl.fromTo(
        fifthSectionRef.current.querySelector(".max-w-full"),
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.4)" },
        0.6,
      );

      // Animation cho button
      sectionTl.fromTo(
        fifthSectionRef.current.querySelector("button"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        0.8,
      );
    }, fifthSectionRef);

    return () => ctx.revert();
  }, [language]);

  // Effect để detect section đang active
  useEffect(() => {
    const sections = [
      firstSectionRef,
      secondSectionRef,
      thirdSectionRef,
      fourthSectionRef,
      fifthSectionRef,
    ];

    const scrollTriggers = sections.map((sectionRef, index) => {
      return ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          console.log(`Entering section ${index + 1}`);
        },
        onEnterBack: () => {
          console.log(`Re-entering section ${index + 1}`);
        },
        onLeave: () => {
          console.log(`Leaving section ${index + 1}`);
        },
        onLeaveBack: () => {
          console.log(`Leaving back from section ${index + 1}`);
        },
      });
    });

    return () => {
      scrollTriggers.forEach((trigger) => trigger.kill());
    };
  }, []);

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
    <div className={`home-page ${scrolled ? "scrolled" : ""}`}>
      {/* Hero Section */}
      <section className="hero-section relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/intro.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
          <div
            ref={heroTextRef}
            className="text-center text-white space-y-4 px-4"
          >
            <h1 className="title-text text-lg md:text-2xl">{t.hero.title}</h1>
            <p className="text-4xl md:text-6xl ">
              <span className="highlight-text">
                {language === "vie" ? "Hạnh phúc " : "Happiness "}
              </span>
              <span className="title-text">
                {language === "vie" ? " thông qua " : " through "}
              </span>
              <span className="highlight-text">
                {language === "vie" ? "giáo dục" : "education"}
              </span>
            </p>
          </div>
          {/* Scroll Down Mouse Icon */}
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
            <div className="flex flex-col items-center">
              <span className="text-white text-xs font-light tracking-widest opacity-80 group-hover:opacity-100 transition-opacity duration-300 mb-1">
                {t.hero.scrollText}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* First Section */}
      <section className="py-12 md:py-16 bg-white" ref={firstSectionRef}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Section */}
            <div className="space-y-4 md:space-y-6" ref={textContentRef}>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3d76b8] mt-2">
                  {t.firstSection.title}
                </h2>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
                {t.firstSection.mainText}
              </p>

              <div className="space-y-3 md:space-y-4 relative">
                {/* Item 1 */}
                <div className="group flex items-start space-x-3 cursor-pointer relative z-30">
                  <div className="relative w-5 h-5 md:w-6 md:h-6 flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="absolute top-1 left-0 w-5 md:w-6 h-0.5 bg-[#3d76b8] transition-all duration-300 group-hover:top-2 group-hover:w-3 group-hover:rotate-45 group-hover:left-1" />
                    <div className="absolute top-3 left-0 w-5 md:w-6 h-0.5 bg-[#3d76b8] transition-all duration-300 group-hover:w-3" />
                    <div className="absolute top-5 left-0 w-5 md:w-6 h-0.5 bg-[#3d76b8] transition-all duration-300 group-hover:top-4 group-hover:w-3 group-hover:-rotate-45 group-hover:left-1" />
                  </div>

                  <p className="text-gray-700 text-sm sm:text-base relative pb-1 transition-all duration-300 group-hover:text-[#3d76b8] group-hover:font-medium">
                    {t.firstSection.bullet1}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3d76b8] transition-all duration-300 group-hover:w-full"></span>
                  </p>

                  <div
                    className="absolute top-full left-0 w-full max-w-md sm:max-w-2xl bg-white shadow-2xl rounded-lg p-4 md:p-6 mt-2 
                        opacity-0 invisible scale-95 transition-all duration-500 ease-out
                        group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:mt-4
                        border border-gray-100 z-40 pointer-events-none
                        group-hover:pointer-events-auto"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="relative h-40 md:h-48 lg:h-full rounded-lg overflow-hidden">
                        <img
                          src="/images/collaboration.png"
                          alt={
                            language === "vie"
                              ? "Đồng hành cùng học sinh"
                              : "Accompanying students"
                          }
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>

                      <div className="flex flex-col justify-center">
                        <h3 className="text-lg md:text-xl font-bold text-[#1B2340] mb-2 md:mb-3">
                          {t.firstSection.bullet1Title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {t.firstSection.bullet1Desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="group flex items-start space-x-3 cursor-pointer relative z-20">
                  <div className="relative w-5 h-5 md:w-6 md:h-6 flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="absolute top-1 left-0 w-5 md:w-6 h-0.5 bg-[#3d76b8] transition-all duration-300 group-hover:top-2 group-hover:w-3 group-hover:rotate-45 group-hover:left-1" />
                    <div className="absolute top-3 left-0 w-5 md:w-6 h-0.5 bg-[#3d76b8] transition-all duration-300 group-hover:w-3" />
                    <div className="absolute top-5 left-0 w-5 md:w-6 h-0.5 bg-[#3d76b8] transition-all duration-300 group-hover:top-4 group-hover:w-3 group-hover:-rotate-45 group-hover:left-1" />
                  </div>

                  <p className="text-gray-700 text-sm sm:text-base relative pb-1 transition-all duration-300 group-hover:text-[#3d76b8] group-hover:font-medium">
                    {t.firstSection.bullet2}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3d76b8] transition-all duration-300 group-hover:w-full"></span>
                  </p>

                  <div
                    className="absolute top-full left-0 w-full max-w-md sm:max-w-2xl bg-white shadow-2xl rounded-lg p-4 md:p-6 mt-2 
                        opacity-0 invisible scale-95 transition-all duration-500 ease-out
                        group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:mt-4
                        border border-gray-100 z-30 pointer-events-none
                        group-hover:pointer-events-auto"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="relative h-40 md:h-48 lg:h-full rounded-lg overflow-hidden">
                        <img
                          src="/images/best.png"
                          alt={
                            language === "vie"
                              ? "Khai phá tiềm năng"
                              : "Unlocking potential"
                          }
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>

                      <div className="flex flex-col justify-center">
                        <h3 className="text-lg md:text-xl font-bold text-[#1B2340] mb-2 md:mb-3">
                          {t.firstSection.bullet2Title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {t.firstSection.bullet2Desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="group flex items-start space-x-3 cursor-pointer relative z-10">
                  <div className="relative w-5 h-5 md:w-6 md:h-6 flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="absolute top-1 left-0 w-5 md:w-6 h-0.5 bg-[#3d76b8] transition-all duration-300 group-hover:top-2 group-hover:w-3 group-hover:rotate-45 group-hover:left-1" />
                    <div className="absolute top-3 left-0 w-5 md:w-6 h-0.5 bg-[#3d76b8] transition-all duration-300 group-hover:w-3" />
                    <div className="absolute top-5 left-0 w-5 md:w-6 h-0.5 bg-[#3d76b8] transition-all duration-300 group-hover:top-4 group-hover:w-3 group-hover:-rotate-45 group-hover:left-1" />
                  </div>

                  <p className="text-gray-700 text-sm sm:text-base relative pb-1 transition-all duration-300 group-hover:text-[#3d76b8] group-hover:font-medium">
                    {t.firstSection.bullet3}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3d76b8] transition-all duration-300 group-hover:w-full"></span>
                  </p>

                  <div
                    className="absolute top-full left-0 w-full max-w-md sm:max-w-2xl bg-white shadow-2xl rounded-lg p-4 md:p-6 mt-2 
                        opacity-0 invisible scale-95 transition-all duration-500 ease-out
                        group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:mt-4
                        border border-gray-100 z-20 pointer-events-none
                        group-hover:pointer-events-auto"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="relative h-40 md:h-48 lg:h-full rounded-lg overflow-hidden">
                        <img
                          src="/images/innovation.png"
                          alt={
                            language === "vie"
                              ? "Giáo dục hạnh phúc"
                              : "Happy education"
                          }
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>

                      <div className="flex flex-col justify-center">
                        <h3 className="text-lg md:text-xl font-bold text-[#1B2340] mb-2 md:mb-3">
                          {t.firstSection.bullet3Title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {t.firstSection.bullet3Desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 md:pt-4">
                <Link to="/philosophy">
                  <button className="bg-[#0d68a5] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-[#267bb4] transform hover:scale-105 transition-all duration-300 shadow-lg text-sm md:text-base">
                    {t.firstSection.button}
                  </button>
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative" ref={imageRef}>
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl">
                <img
                  src="/images/Agua1.png"
                  alt="Agua International Education"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimap Section */}
      <section className="minimap-section py-8 md:py-12">
        <div className="grid-container">
          <div className="grid-row first-row">
            <div className="grid-cell cell-60 dotted-border-right p-4 md:p-6">
              <div className="map-container">
                <div className="map-layout flex flex-col lg:flex-row gap-6">
                  <div className="map-content w-full lg:w-1/2">
                    <h2 className="missions-title text-xl sm:text-2xl md:text-3xl">{t.minimap.title}</h2>
                    <h3 className="section-description text-base sm:text-lg md:text-xl">
                      {t.minimap.subtitle}
                    </h3>
                    <p className="text-sm sm:text-base">{t.minimap.description}</p>

                    <div className="highlighted-countries mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="country-item">
                        <span className="country-dot usa-dot"></span>
                        <span className="country-name text-sm">United States</span>
                      </div>
                      <div className="country-item">
                        <span className="country-dot uk-dot"></span>
                        <span className="country-name text-sm">United Kingdom</span>
                      </div>
                      <div className="country-item">
                        <span className="country-dot aus-dot"></span>
                        <span className="country-name text-sm">Australia</span>
                      </div>
                      <div className="country-item">
                        <span className="country-dot canada-dot"></span>
                        <span className="country-name text-sm">Canada</span>
                      </div>
                      <div className="country-item">
                        <span className="country-dot singapore-dot"></span>
                        <span className="country-name text-sm">Singapore</span>
                      </div>
                      <div className="country-item">
                        <span className="country-dot nz-dot"></span>
                        <span className="country-name text-sm">New Zealand</span>
                      </div>
                      <div className="country-item sm:col-span-2">
                        <span className="country-dot hk-dot"></span>
                        <span className="country-name text-sm">Hong Kong</span>
                      </div>
                    </div>
                  </div>

                  <div className="map-visual w-full lg:w-1/2">
                    <ComposableMap
                      projectionConfig={{ scale: 60, center: [0, 20] }}
                      width={300}
                      height={200}
                      className="w-full h-auto"
                    >
                      <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                          geographies.map((geo) => {
                            const countryName = geo.properties.name;
                            let fillColor = "#EAEAEC";

                            if (countryName.includes("United States")) {
                              fillColor = "#FF6B6B";
                            } else if (countryName.includes("United Kingdom")) {
                              fillColor = "#74B9FF";
                            } else if (countryName.includes("Australia")) {
                              fillColor = "#A29BFE";
                            } else if (countryName.includes("Canada")) {
                              fillColor = "#55E6C1";
                            } else if (countryName.includes("Singapore")) {
                              fillColor = "#FDCB6E";
                            } else if (countryName.includes("New Zealand")) {
                              fillColor = "#6EE7B7";
                            } else if (countryName.includes("Hong Kong")) {
                              fillColor = "#FF7675";
                            }

                            return (
                              <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={fillColor}
                                stroke="transparent"
                                style={{
                                  default: { outline: "none" },
                                  hover: { outline: "none" },
                                }}
                              />
                            );
                          })
                        }
                      </Geographies>
                    </ComposableMap>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-cell cell-40 p-4 md:p-6">
              <div className="content">
                <h2 className="text-lg sm:text-xl md:text-2xl">{t.minimap.networkTitle}</h2>
                <p className="text-sm sm:text-base mb-4">{t.minimap.networkDesc}</p>
                <ul className="special-text country-list space-y-2">
                  {t.minimap.countries.map((country, index) => (
                    <li key={index} className="text-xs sm:text-sm md:text-base">
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section
        className="py-12 md:py-16 bg-gradient-to-tr from-blue-50 to-[#0974B6]"
        ref={secondSectionRef}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-3 md:space-y-4">
                  <h2 className="section-description text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3d76b8]">
                    {t.secondSection.title}
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                    {t.secondSection.description}
                  </p>
                </div>

                <Link to="/services">
                  <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl cursor-pointer transition-transform duration-500 ease-out hover:scale-105">
                    <img
                      src="/images/plan.jpg"
                      alt={
                        language === "vie"
                          ? "Hành trình giáo dục"
                          : "Educational journey"
                      }
                      className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                </Link>

                <div className="space-y-3">
                  <div className="hidden md:block">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-2 sm:gap-3">
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg sm:mr-2">
                        {t.secondSection.subDescription}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
                        {t.secondSection.packages.map((pkg, index) => (
                          <span
                            key={index}
                            className="plan-text text-base sm:text-lg md:text-xl font-bold text-[#1B2340] whitespace-nowrap 
                            cursor-pointer transition-all duration-300 ease-in-out
                            hover:text-[#2c5a8a] hover:scale-105 hover:underline"
                          >
                            {pkg}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="block md:hidden">
                    <p className="text-gray-700 leading-relaxed text-base mb-3">
                      {t.secondSection.subDescription}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {t.secondSection.packages.map((pkg, index) => (
                        <span
                          key={index}
                          className="plan-text text-lg font-bold text-[#3d76b8]"
                        >
                          {pkg}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-[#3d76b8] font-medium cursor-pointer group mt-4">
                <span className="text-sm sm:text-base">{t.secondSection.explore}</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3 md:space-y-4">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  {t.secondSection.rightDescription}
                </p>
              </div>

              <div className="relative rounded-lg md:rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/flower.png"
                  alt={
                    language === "vie"
                      ? "Phương pháp học tập"
                      : "Learning method"
                  }
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
              </div>

              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {t.secondSection.journey}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section
        className="py-12 md:py-16 bg-gradient-to-tl from-[#0974B6] to-blue-50"
        ref={thirdSectionRef}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="space-y-4 md:space-y-6">
              <h3 className="section-description text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3d76b8]">
                {t.thirdSection.title1}
              </h3>
              <h3 className="section-description text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3d76b8]">
                {t.thirdSection.title2}
              </h3>
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 ease-out hover:scale-105">
                <img
                  src="/images/R0003935.JPG"
                  alt={
                    language === "vie"
                      ? "Lộ trình Khám phá"
                      : "Discovery Pathway"
                  }
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
              </div>

              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {t.thirdSection.description1}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {t.thirdSection.timeline1}
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/R0003260.JPG"
                  alt={
                    language === "vie"
                      ? "Lộ trình Momentum"
                      : "Momentum Pathway"
                  }
                  className="w-full h-48 sm:h-60 md:h-80 object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
              </div>

              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {t.thirdSection.description2}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {t.thirdSection.timeline2}
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg leading-relaxed">
                {t.thirdSection.introText}
              </p>
              <div className="flex justify-end">
                <button className="bg-white text-blue-600 px-4 py-2 sm:px-6 sm:py-2 rounded-full font-semibold border border-blue-600 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-md text-sm sm:text-base">
                  {t.thirdSection.button}
                </button>
              </div>
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/dive.png"
                  alt={
                    language === "vie" ? "Lộ trình Launch" : "Launch Pathway"
                  }
                  className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
              </div>

              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {t.thirdSection.description3}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {t.thirdSection.timeline3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section
        className="py-12 md:py-16 bg-gradient-to-tr from-blue-50 to-[#0974B6]"
        ref={fourthSectionRef}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <h2 className="section-description text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3d76b8]">
                      {t.fourthSection.title}
                    </h2>
                    <button className="bg-white text-blue-600 px-4 py-2 sm:px-6 sm:py-2 rounded-full font-semibold border border-blue-600 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-md text-sm sm:text-base w-fit">
                      {t.fourthSection.button}
                    </button>
                  </div>
                </div>
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl">
                  <img
                    src="/images/Mentor1.png"
                    alt={
                      language === "vie"
                        ? "Hành trình giáo dục"
                        : "Educational journey"
                    }
                    className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

                <div className="space-y-3">
                  <div className="hidden md:block">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-2 sm:gap-3">
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg sm:mr-2">
                        {t.fourthSection.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="plan-text text-base sm:text-lg font-bold text-[#1B2340] whitespace-nowrap 
                        cursor-pointer transition-all duration-300 ease-in-out
                        hover:text-[#2c5a8a] hover:scale-105 hover:underline">
                          {t.fourthSection.teamName}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="block md:hidden">
                    <p className="text-gray-700 leading-relaxed text-base mb-3">
                      {t.fourthSection.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="plan-text text-lg font-bold text-[#3d76b8]">
                        {t.fourthSection.teamName}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3 md:space-y-4">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  {t.fourthSection.rightDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section */}
      <section
        className="py-12 md:py-16 bg-gradient-to-tl from-[#0974B6] to-blue-50"
        ref={fifthSectionRef}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-3 md:space-y-4">
                <h2 className="section-description text-2xl sm:text-3xl md:text-4xl font-bold text-[#3d76b8]">
                  {t.fifthSection.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {t.fifthSection.description}
                </p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold border border-blue-600 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-md text-sm sm:text-base w-fit">
                  {t.fifthSection.button}
                </button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="w-full overflow-hidden">
                <Carousel baseWidth={800} round={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inheritance Section */}
      <section className="py-12 md:py-16 bg-gradient-to-tr from-blue-50 to-[#0974B6]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center space-y-3 md:space-y-4 text-center">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              {t.inheritanceSection.subtitle}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3d76b8]">
              {t.inheritanceSection.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base max-w-2xl">
              {t.inheritanceSection.description}
            </p>
          </div>
        </div>
      </section>

      {/* Logo Marquee Section */}
      <section className="bg-gradient-to-tl from-[#0974B6] to-blue-50 py-8 md:py-12 overflow-hidden">
        <div className="w-full">
          <div className="marquee-content">
            {logos.map((logo) => (
              <div key={logo.id} className="logo-item">
                <img src={logo.logo} alt={logo.name} className="logo-image h-8 sm:h-10 md:h-12 object-contain" />
              </div>
            ))}
            {logos.map((logo) => (
              <div key={`${logo.id}-duplicate`} className="logo-item">
                <img src={logo.logo} alt={logo.name} className="logo-image h-8 sm:h-10 md:h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;