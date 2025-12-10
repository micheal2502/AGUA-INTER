import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import handTreeImage from "/images/protection.png";
import graduate from "/images/graduate.png";
import thinking from "/images/skill.png";
import develop from "/images/develop.png";
import award from "/images/award.png";
import globe from "/images/navigation.png";
import first from "/images/first.png";
import { useLanguage } from "../../contexts/LanguageContext";

const Vision = () => {
  const { language } = useLanguage();

  // Refs for animations
  const gridSectionRef = useRef(null);
  const visionSectionRef = useRef(null);
  const timelineSectionRef = useRef(null);

  // Existing state and content...
  const content = {
    vie: {
      // ... keep all Vietnamese content ...
      gridSection: {
        agua: "AGUA",
        developMore: "Phát Triển nhiều hơn việc học",
        developDesc:
          "Chúng tôi kiến tạo một hành trình vừa nuôi dưỡng trí tuệ – cảm xúc, vừa tái tạo năng lượng toàn diện.",
        listenAndRespect: "Lắng nghe và cùng trân trọng",
        listenDesc:
          "Chúng tôi lắng nghe và trân trọng cảm xúc, suy nghĩ chân thực của các bạn trẻ, mang lại môi trường an lành, hạnh phúc và chân thực.",
        aguaMission:
          "Nếu AGUA theo đuổi sứ mệnh giáo dục giúp người học phát triển toàn diện và hạnh phúc, thì chúng tôi là biểu tượng của đào tạo chất lượng cao mà vẫn nuôi dưỡng cảm hứng, hòa mình vào công nghệ và kết nối với cộng đồng một cách sâu sắc.",
        togetherCreate: "Cùng nhau & chúng tôi kiến tạo",
        togetherDesc:
          "một hành trình vừa nuôi dưỡng trí tuệ – cảm xúc, vừa tái tạo năng lượng toàn diện.",
        sustainableTraining: "Đào tạo & Phát triển bền vững",
        sustainableDesc:
          "Chúng tôi tiên phong trong việc xây dựng nền tảng đào tạo công nghệ bền vững, cam kết phát triển toàn diện cho từng học viên.",
        relax: "Thư giãn thân - tâm - trí",
        relaxDesc: "để khơi nguồn sáng tạo",
      },
      visionSection: {
        title:
          "Kiến tạo tương lai nơi mỗi cá nhân được phát triển toàn diện, hạnh phúc và thành công trong kỷ nguyên số",
        visionTitle: "TẦM NHÌN",
        visionDescription:
          "Đến năm 2034, AGUA trở thành hệ sinh thái giáo dục công nghệ hàng đầu Đông Nam Á, nơi mỗi học viên không chỉ thành thạo kỹ năng số mà còn phát triển toàn diện về trí tuệ, cảm xúc và tinh thần. Chúng tôi xây nên nền móng vững bằng đội ngũ mentor xuất sắc.",
        visionPoints: [
          "Tuyển chọn mentor top 1% qua 4 vòng: hồ sơ, dạy thử, xử lý tình huống 'panic deadline', phỏng vấn EQ.",
          "Hệ thống peer-review định kỳ để duy trì chuẩn chất lượng trong toàn bộ đội ngũ mentor.",
          "Playbook vận hành minh bạch: quy trình onboarding mentor & học viên được chuẩn hóa theo từng bước.",
          "KPI giám sát mentor theo hiệu suất làm việc, số học viên, và chỉ số hài lòng từ phụ huynh/học sinh.",
          "Hệ thống Reflection Hub và nội dung phản hồi không đồng bộ (asynchronous) giúp mentor tiết kiệm thời gian, học viên vẫn được hướng dẫn sát.",
        ],
        coreValuesTitle: "GIÁ TRỊ CỐT LÕI",
        coreValues: [
          {
            title: "Lắng Nghe Chân Thực",
            description:
              "Chúng tôi trân trọng mọi cảm xúc và suy nghĩ chân thực, tạo không gian an toàn để mỗi người được là chính mình.",
            color: "blue",
          },
          {
            title: "Phát Triển Toàn Diện",
            description:
              "Không chỉ đào tạo kỹ năng, chúng tôi chú trọng phát triển con người toàn diện: trí tuệ, cảm xúc, thể chất và tinh thần.",
            color: "green",
          },
          {
            title: "Cộng Đồng Kết Nối",
            description:
              "Xây dựng mạng lưới hỗ trợ mạnh mẽ, nơi mọi người cùng nhau học tập, chia sẻ và phát triển bền vững.",
            color: "purple",
          },
          {
            title: "Đổi Mới Tiên Phong",
            description:
              "Luôn tiên phong áp dụng công nghệ mới, không ngừng sáng tạo để mang lại trải nghiệm học tập tốt nhất.",
            color: "orange",
          },
        ],
        createAndShape: "Kiến Tạo & Định Hình",
        createAndShapeDesc:
          "Giải quyết những bài toán của riêng bạn không chỉ là những học sinh kiệt xuất, những tài năng nằm ngoài trí thông minh học thuật mà còn để giải quyết những cuộc trạnh đua giáo dục không toàn diện trong hành trình phát triển để hoàn thiện và tìm ra đam mê của mỗi cá nhân.",
        fundamentalProblem: "Bài Toán Căn Bằng",
        challenges: [
          {
            title: "Học Sinh Xuất Sắc Dần Đuối Sức",
            description:
              "Các em đối mặt với áp lực deadline, hồ sơ và học bổng trong thời gian cực kỳ gấp rút",
            color: "red",
          },
          {
            title: "Thiếu Hệ Thống Hỗ Trợ Chuyên Sâu",
            description:
              "Gia đình và trường học chưa kịp trở thành 'hệ thống hỗ trợ' hiệu quả cho các em",
            color: "orange",
          },
          {
            title: "Cuộc Chạy Đua Giáo Dục Khắc Nhiệt",
            description:
              "Phương pháp truyền thống không đáp ứng được mọi nhu cầu cấp bách của học sinh và phụ huynh.",
            color: "blue",
          },
          {
            title: "Phát Triển Tổng Thể Bất Đối Xứng",
            description:
              "Các em phát triển rất mạnh về mặt tri thức và giá trị bản thân nhưng thiếu đồng bộ với các kĩ năng khác.",
            color: "purple",
          },
        ],
        transformationPath: "Lộ Trình Chuyển Đổi 4 Giai Đoạn",
        stages: [
          {
            title: "Khám Phá",
            description:
              "Đánh giá năng lực, xác định đam mê và thiên hướng phát triển",
          },
          {
            title: "Xây Dựng",
            description: "Phát triển nền tảng kiến thức và kỹ năng cốt lõi",
          },
          {
            title: "Thực Hành",
            description: "Áp dụng vào dự án thực tế, tích lũy kinh nghiệm",
          },
          {
            title: "Tỏa Sáng",
            description: "Tạo ra giá trị, định vị bản thân trong thị trường",
          },
        ],
        journeyTitle: "Hành Trình Khám Phá & Xây Dựng",
        explorationTitle: "Khám Phá - Khởi Nguyên Nền Tảng",
        explorationPoints: [
          "Nền Tảng Công Nghệ Vững Chắc",
          "Tư Duy Phản Biện & Sáng Tạo",
          "Kỹ Năng Thế Kỷ 21",
          "Trang bị kỹ năng giao tiếp, hợp tác, lãnh đạo và thích ứng",
          "Phát triển khả năng phân tích, giải quyết vấn đề",
          "Xây dựng kiến thức nền tảng từ cơ bản đến nâng cao",
        ],
        formationTitle: "ĐỊNH HÌNH - Khẳng định Bản Sắc",
        formationPoints: [
          "Khám Phá Đam Mê & Tài Năng",
          "Xây Dựng Thương Hiệu Cá Nhân",
          "Lập Kế Hoạch Sự Nghiệp",
          "Nhận diện điểm mạnh, sở thích và đam mê thực sự của bản thân",
          "Định vị bản thân trong thị trường lao động và xã hội số",
          "Xác định mục tiêu và xây dựng lộ trình phát triển dài hạn",
        ],
      },
      timeline: {
        title: "HÀNH TRÌNH PHÁT TRIỂN",
        subtitle:
          "Cùng nhìn lại chặng đường phát triển và những cột mốc quan trọng của AGUA",
        items: [
          {
            year: "2020",
            title: "Thành Lập",
            description:
              "AGUA chính thức được thành lập với sứ mệnh đem đến nền giáo dục công nghệ chất lượng cao",
          },
          {
            year: "2022",
            title: "Phát Triển Cộng Đồng",
            description:
              "Xây dựng cộng đồng 10,000+ học viên và mạng lưới đối tác chiến lược",
          },
          {
            year: "2024",
            title: "Đổi Mới Giáo Dục",
            description:
              "Tiên phong trong ứng dụng AI và công nghệ vào giảng dạy, cá nhân hóa trải nghiệm học tập",
          },
          {
            year: "2026",
            title: "Mở Rộng Khu Vực",
            description:
              "Mở rộng hoạt động ra khu vực Đông Nam Á với các chương trình đào tạo đa ngôn ngữ",
          },
          {
            year: "2030",
            title: "Lãnh Đạo Khu Vực",
            description:
              "Trở thành hệ sinh thái giáo dục công nghệ hàng đầu Đông Nam Á",
          },
        ],
      },
    },
    en: {
      // ... keep all English content ...
      gridSection: {
        agua: "AGUA",
        developMore: "Developing More Than Just Learning",
        developDesc:
          "We create a journey that nourishes both intellect - emotions, while regenerating comprehensive energy.",
        listenAndRespect: "Listening and Mutual Respect",
        listenDesc:
          "We listen and respect the genuine emotions and thoughts of young people, creating a peaceful, happy, and authentic environment.",
        aguaMission:
          "If AGUA pursues an educational mission that helps learners develop comprehensively and happily, then we are a symbol of high-quality training that still nurtures inspiration, immerses itself in technology, and deeply connects with the community.",
        togetherCreate: "Together & We Create",
        togetherDesc:
          "a journey that nourishes both intellect - emotions, while regenerating comprehensive energy.",
        sustainableTraining: "Training & Sustainable Development",
        sustainableDesc:
          "We pioneer in building sustainable technology training foundations, committed to comprehensive development for each student.",
        relax: "Relax Body - Mind - Spirit",
        relaxDesc: "to spark creativity",
      },
      visionSection: {
        title:
          "Creating a future where every individual develops comprehensively, happily, and succeeds in the digital era",
        visionTitle: "VISION",
        visionDescription:
          "By 2034, AGUA becomes the leading technology education ecosystem in Southeast Asia, where every student not only masters digital skills but also develops comprehensively in intellect, emotion, and spirit. We build a solid foundation with an excellent mentor team.",
        visionPoints: [
          "Select top 1% mentors through 4 rounds: profile, trial teaching, handling 'panic deadline' situations, EQ interview.",
          "Periodic peer-review system to maintain quality standards across the entire mentor team.",
          "Transparent operational playbook: mentor & student onboarding process standardized step by step.",
          "Mentor monitoring KPIs based on work performance, number of students, and satisfaction indicators from parents/students.",
          "Reflection Hub system and asynchronous feedback content help mentors save time while students still receive close guidance.",
        ],
        coreValuesTitle: "CORE VALUES",
        coreValues: [
          {
            title: "Genuine Listening",
            description:
              "We value all genuine emotions and thoughts, creating a safe space for everyone to be themselves.",
            color: "blue",
          },
          {
            title: "Comprehensive Development",
            description:
              "Not just training skills, we focus on comprehensive human development: intellect, emotion, physical and spiritual.",
            color: "green",
          },
          {
            title: "Connected Community",
            description:
              "Building a strong support network where people learn, share, and develop sustainably together.",
            color: "purple",
          },
          {
            title: "Pioneering Innovation",
            description:
              "Always pioneering in applying new technology, continuously creating to bring the best learning experience.",
            color: "orange",
          },
        ],
        createAndShape: "Creating & Shaping",
        createAndShapeDesc:
          "Solving your own problems is not only about outstanding students, talents beyond academic intelligence but also to solve incomplete educational races in the development journey to perfect and discover each individual's passion.",
        fundamentalProblem: "Fundamental Balancing Problem",
        challenges: [
          {
            title: "Excellent Students Gradually Exhausted",
            description:
              "They face pressure from deadlines, applications, and scholarships in extremely tight timeframes",
            color: "red",
          },
          {
            title: "Lack of Intensive Support System",
            description:
              "Family and school haven't had time to become an effective 'support system' for them",
            color: "orange",
          },
          {
            title: "Harsh Educational Race",
            description:
              "Traditional methods don't meet all urgent needs of students and parents.",
            color: "blue",
          },
          {
            title: "Asymmetric Overall Development",
            description:
              "They develop very strongly in knowledge and self-worth but lack synchronization with other skills.",
            color: "purple",
          },
        ],
        transformationPath: "4-Stage Transformation Pathway",
        stages: [
          {
            title: "Discovery",
            description:
              "Assess capabilities, identify passions and development inclinations",
          },
          {
            title: "Building",
            description: "Develop foundational knowledge and core skills",
          },
          {
            title: "Practice",
            description: "Apply to real projects, accumulate experience",
          },
          {
            title: "Shining",
            description: "Create value, position yourself in the market",
          },
        ],
        journeyTitle: "Exploration & Building Journey",
        explorationTitle: "Exploration - Foundation Origins",
        explorationPoints: [
          "Solid Technology Foundation",
          "Critical & Creative Thinking",
          "21st Century Skills",
          "Equip communication, collaboration, leadership, and adaptation skills",
          "Develop analytical and problem-solving abilities",
          "Build foundational knowledge from basic to advanced",
        ],
        formationTitle: "FORMATION - Asserting Identity",
        formationPoints: [
          "Discover Passions & Talents",
          "Build Personal Brand",
          "Career Planning",
          "Identify personal strengths, interests, and true passions",
          "Position yourself in the labor market and digital society",
          "Determine goals and build long-term development pathway",
        ],
      },
      timeline: {
        title: "DEVELOPMENT JOURNEY",
        subtitle:
          "Let's look back at AGUA's development path and important milestones",
        items: [
          {
            year: "2020",
            title: "Establishment",
            description:
              "AGUA was officially established with the mission of providing high-quality technology education",
          },
          {
            year: "2022",
            title: "Community Development",
            description:
              "Built a community of 10,000+ students and strategic partner network",
          },
          {
            year: "2024",
            title: "Educational Innovation",
            description:
              "Pioneering in applying AI and technology to teaching, personalizing learning experience",
          },
          {
            year: "2026",
            title: "Regional Expansion",
            description:
              "Expanded operations to Southeast Asia region with multilingual training programs",
          },
          {
            year: "2030",
            title: "Regional Leadership",
            description:
              "Become the leading technology education ecosystem in Southeast Asia",
          },
        ],
      },
    },
  };

  // Get content based on current language
  const t = content[language] || content.vie;

  const [activeIndex, setActiveIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  // Refs for timeline
  const diamondRefs = useRef([]);
  const timelineRef = useRef();

  // Animation for Grid Section
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: gridSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animate left grid items
      const leftItems =
        gridSectionRef.current?.querySelectorAll(".left-section");
      if (leftItems) {
        sectionTl.fromTo(
          leftItems,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
          0,
        );
      }

      // Animate right grid items
      const rightItems =
        gridSectionRef.current?.querySelectorAll(".right-cell");
      if (rightItems) {
        sectionTl.fromTo(
          rightItems,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
          0.3,
        );
      }

      // Animate images with rotation effect
      const images = gridSectionRef.current?.querySelectorAll(".content-image");
      if (images) {
        sectionTl.fromTo(
          images,
          { scale: 0.8, rotation: -5, opacity: 0 },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "back.out(1.4)",
          },
          0.6,
        );
      }
    }, gridSectionRef);

    return () => ctx.revert();
  }, [language]);

  // Animation for Vision Section
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: visionSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animate title and description
      sectionTl.fromTo(
        visionSectionRef.current.querySelector(".section-title"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0,
      );

      // Animate vision and core values columns
      sectionTl.fromTo(
        visionSectionRef.current.querySelector(
          ".lg\\:grid-cols-2 > div:nth-child(1)",
        ),
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.2,
      );

      sectionTl.fromTo(
        visionSectionRef.current.querySelector(
          ".lg\\:grid-cols-2 > div:nth-child(2)",
        ),
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.4,
      );

      // Animate vision points with stagger
      const visionPoints =
        visionSectionRef.current?.querySelectorAll(".space-y-4 > div");
      if (visionPoints) {
        sectionTl.fromTo(
          visionPoints,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          0.6,
        );
      }

      // Animate core values cards
      const coreValueCards =
        visionSectionRef.current?.querySelectorAll(".space-y-6 > div");
      if (coreValueCards) {
        sectionTl.fromTo(
          coreValueCards,
          { y: 30, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.2)",
          },
          0.8,
        );
      }

      // Animate challenges
      const challengeCards =
        visionSectionRef.current?.querySelectorAll(".grid > div");
      if (challengeCards) {
        sectionTl.fromTo(
          challengeCards,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
          1.0,
        );
      }

      // Animate transformation stages
      const stages =
        visionSectionRef.current?.querySelectorAll(".grid > .bg-white");
      if (stages) {
        sectionTl.fromTo(
          stages,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.4)",
          },
          1.2,
        );
      }
    }, visionSectionRef);

    return () => ctx.revert();
  }, [language]);

  // Animation for Timeline Section
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: timelineSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animate timeline title and subtitle
      sectionTl.fromTo(
        timelineSectionRef.current.querySelector(".text-center"),
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0,
      );

      // Animate timeline line
      sectionTl.fromTo(
        timelineSectionRef.current.querySelector(".h-1.bg-gray-200"),
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1.5, ease: "power2.out" },
        0.3,
      );

      // Animate diamonds with rotation and scale
      const diamonds =
        timelineSectionRef.current?.querySelectorAll("button.relative");
      if (diamonds) {
        sectionTl.fromTo(
          diamonds,
          {
            scale: 0.5,
            rotation: 45,
            opacity: 0,
            y: 100,
          },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          0.6,
        );
      }

      // Animate navigation dots
      const dots = timelineSectionRef.current?.querySelectorAll(
        ".w-3.h-3.rounded-full",
      );
      if (dots) {
        sectionTl.fromTo(
          dots,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          1.2,
        );
      }

      // Animate description text
      const descriptions =
        timelineSectionRef.current?.querySelectorAll(".absolute.top-0");
      if (descriptions) {
        sectionTl.fromTo(
          descriptions,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          1.4,
        );
      }
    }, timelineSectionRef);

    return () => ctx.revert();
  }, [language, activeIndex]);

  // Existing timeline update functions
  const updateDotPositions = () => {
    if (timelineRef.current && diamondRefs.current.length > 0) {
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const positions = diamondRefs.current
        .map((ref, index) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            const dotX = rect.left + rect.width / 2 - timelineRect.left;
            const dotY = rect.top + rect.height - timelineRect.top;
            return { x: dotX, y: dotY };
          }
          return null;
        })
        .filter(Boolean);

      // Keep existing dot positions state if you need it
    }
  };

  useEffect(() => {
    updateDotPositions();
    window.addEventListener("resize", updateDotPositions);
    return () => window.removeEventListener("resize", updateDotPositions);
  }, []);

  useEffect(() => {
    updateDotPositions();
  }, [activeIndex]);

  const diamondColors = [
    {
      bg: "bg-blue-100",
      border: "border-blue-400",
      ring: "ring-blue-100",
      text: "text-blue-600",
      fill: "bg-blue-200",
      line: "bg-blue-400",
    },
    {
      bg: "bg-green-100",
      border: "border-green-400",
      ring: "ring-green-100",
      text: "text-green-600",
      fill: "bg-green-200",
      line: "bg-green-400",
    },
    {
      bg: "bg-purple-100",
      border: "border-purple-400",
      ring: "ring-purple-100",
      text: "text-purple-600",
      fill: "bg-purple-200",
      line: "bg-purple-400",
    },
    {
      bg: "bg-orange-100",
      border: "border-orange-400",
      ring: "ring-orange-100",
      text: "text-orange-600",
      fill: "bg-orange-200",
      line: "bg-orange-400",
    },
    {
      bg: "bg-pink-100",
      border: "border-pink-400",
      ring: "ring-pink-100",
      text: "text-pink-600",
      fill: "bg-pink-200",
      line: "bg-pink-400",
    },
  ];

  const handleDiamondClick = (index) => {
    setShowDescription(false);
    setActiveIndex(index);

    // Add bounce animation to clicked diamond
    const diamond = diamondRefs.current[index];
    if (diamond) {
      gsap.to(diamond, {
        scale: 1.2,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(diamond, { scale: 1, duration: 0.2 });
        },
      });
    }

    // Animate description appearance
    setTimeout(() => {
      setShowDescription(true);
      const descriptions = document.querySelectorAll(".absolute.top-0");
      descriptions.forEach((desc, i) => {
        if (i === index) {
          gsap.fromTo(
            desc,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          );
        }
      });
    }, 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDescription(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Grid Section with ref */}
      <section className="py-16" ref={gridSectionRef}>
        <div className="tam-nhin-container mb-16 max-w-7xl mx-auto px-4 md:px-2">
          {/* ... existing grid content ... */}
          <div className="grid-layout">
            {/* Left Grid - 1/3 */}
            <div className="left-grid">
              <div className="left-section section-1">
                <div className="content">
                  <div className="text-with-image">
                    <div className="image-container">
                      <img
                        src={graduate}
                        alt="Graduate"
                        className="content-image graduate-image"
                      />
                    </div>
                    <div className="text-content">
                      <h3 className="hero-title" style={{ fontSize: "2rem" }}>
                        {t.gridSection.agua}
                      </h3>
                      <div className="divider"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left-section section-2 hoverable">
                <div className="content">
                  <div className="text-with-image">
                    <div className="image-container">
                      <img
                        src={handTreeImage}
                        alt="Hand growing tree"
                        className="content-image"
                      />
                    </div>
                    <div className="section-title">
                      <h4>{t.gridSection.developMore}</h4>
                      <p>{t.gridSection.developDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left-section section-3">
                <div className="content">
                  <div className="text-with-image">
                    <div className="image-container">
                      <img
                        src={graduate}
                        alt="Graduate"
                        className="content-image graduate-image"
                      />
                    </div>
                    <div className="text-content">
                      <h4>{t.gridSection.listenAndRespect}</h4>
                      <p>{t.gridSection.listenDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Grid - 2/3 */}
            <div className="right-grid">
              <div className="right-row top-row">
                <div className="right-cell cell-1">
                  <div className="content">
                    <div className="text-with-image">
                      <div className="image-container">
                        <img
                          src={graduate}
                          alt="Graduate"
                          className="content-image graduate-image"
                        />
                      </div>
                      <div className="text-content">
                        <p>{t.gridSection.aguaMission}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-cell cell-2 hoverable">
                  <div className="content">
                    <div className="text-with-image">
                      <div className="image-container">
                        <img
                          src={handTreeImage}
                          alt="Hand growing tree"
                          className="content-image"
                        />
                      </div>
                      <div className="section-title">
                        <h4>{t.gridSection.togetherCreate}</h4>
                        <p>{t.gridSection.togetherDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-row bottom-row">
                <div className="right-cell cell-3 hoverable">
                  <div className="content">
                    <div className="text-with-image">
                      <div className="image-container">
                        <img
                          src={handTreeImage}
                          alt="Hand growing tree"
                          className="content-image"
                        />
                      </div>
                      <div className="section-title">
                        <h4>{t.gridSection.sustainableTraining}</h4>
                        <p>{t.gridSection.sustainableDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-cell cell-4">
                  <div className="content">
                    <div className="text-with-image">
                      <div className="image-container">
                        <img
                          src={graduate}
                          alt="Graduate"
                          className="content-image graduate-image"
                        />
                      </div>
                      <div className="text-content">
                        <h4>{t.gridSection.relax}</h4>
                        <p>{t.gridSection.relaxDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section with ref */}
      <section className="py-16" ref={visionSectionRef}>
        <div className="vision-core-values">
          <div className="container mx-auto px-4 md:px-6">
            <div className="section-title text-center mb-16">
              <div className="w-20 md:w-24 lg:w-28 h-1 bg-green-500 mx-auto mb-6"></div>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                {t.visionSection.title}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Vision Section */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl text-green-600 mb-6 flex items-center justify-center lg:justify-start">
                    <span className="vision-title">
                      {t.visionSection.visionTitle}
                    </span>
                  </h3>
                  <div className="p-4">
                    <p className="vision-description text-lg md:text-xl leading-relaxed mb-6">
                      {t.visionSection.visionDescription}
                    </p>
                    <div className="space-y-4">
                      {t.visionSection.visionPoints.map((point, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <span className="text-green-500 text-xl mt-1">•</span>
                          <span className="text-gray-600">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Values Section */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center justify-center lg:justify-start">
                    <span className="vision-title">
                      {t.visionSection.coreValuesTitle}
                    </span>
                  </h3>
                  <div className="space-y-6">
                    {t.visionSection.coreValues.map((value, index) => (
                      <div
                        key={index}
                        className={`bg-white rounded-xl p-6 shadow-lg border border-${value.color}-100 hover:shadow-xl transition-all duration-300`}
                      >
                        <div className="flex items-start space-x-4">
                          <div>
                            <h4
                              className={`vision-description text-xl font-bold text-${value.color}-900 mb-2`}
                            >
                              {value.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="mt-16 text-center">
              <div className="p-8 md:p-12 text-black">
                <h3 className="section-title text-2xl md:text-3xl font-bold mb-6">
                  {t.visionSection.createAndShape}
                </h3>
                <p className="section-title text-base md:text-xl leading-relaxed max-w-4xl text-left">
                  {t.visionSection.createAndShapeDesc}
                </p>
                <h3 className="py-8 text-xl md:text-2xl text-left">
                  <span className="missions-title">
                    {t.visionSection.fundamentalProblem}
                  </span>
                </h3>
                {/* New Content - Bài Toán Căn Bằng */}
                <div className="max-w-6xl mx-auto text-left space-y-8">
                  {/* 4 Thách thức chính */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
                    {t.visionSection.challenges.map((challenge, index) => (
                      <div
                        key={index}
                        className={`bg-${challenge.color}-50 p-5 rounded-lg border-l-4 border-${challenge.color}-500 hover:shadow-lg transition-all`}
                      >
                        <h4
                          className={`vision-description text-xl font-bold text-${challenge.color}-800 mb-3`}
                        >
                          {challenge.title}
                        </h4>
                        <p className="text-sm text-gray-700">
                          {challenge.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Lộ trình phát triển chi tiết */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
                    <h4 className="text-2xl font-bold text-indigo-800 mb-8 text-center">
                      {t.visionSection.transformationPath}
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {t.visionSection.stages.map((stage, index) => (
                        <div
                          key={index}
                          className="bg-white p-5 rounded-xl text-center shadow-md"
                        >
                          <h5 className="font-bold text-indigo-700 mb-2">
                            {stage.title}
                          </h5>
                          <p className="text-sm text-gray-600">
                            {stage.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* PHẦN MỚI: KIẾN TẠO VÀ ĐỊNH HÌNH CHI TIẾT */}
            <div className="max-w-6xl mx-auto mt-12">
              <div>
                <h3 className="section-title text-2xl md:text-3xl font-bold mb-8 text-center">
                  {t.visionSection.journeyTitle}
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Kiến Tạo */}
                  <div>
                    <h4 className="missions-title text-xl font-bold mb-4 flex items-center">
                      {t.visionSection.explorationTitle}
                    </h4>
                    <div className="space-y-4">
                      {t.visionSection.explorationPoints.map((point, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-800">
                              {point}
                            </h5>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Định Hình */}
                  <div>
                    <h4 className="missions-title text-xl font-bold mb-4 flex items-center">
                      {t.visionSection.formationTitle}
                    </h4>
                    <div className="space-y-4">
                      {t.visionSection.formationPoints.map((point, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-purple-600 font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-800">
                              {point}
                            </h5>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section with ref */}
      <div
        className="py-16 md:py-32 lg:py-64 timeline-section"
        ref={timelineSectionRef}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              {t.timeline.title}
            </h2>
            <div className="w-16 md:w-20 lg:w-24 h-1 bg-green-500 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              {t.timeline.subtitle}
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative py-8 md:py-12" ref={timelineRef}>
            {/* Desktop Timeline Line - Horizontal */}
            <div
              className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 
                  hidden md:block"
            ></div>

            {/* Timeline Items */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative z-10 gap-6 md:gap-0">
              {t.timeline.items.map((item, index) => {
                const colors = diamondColors[index % diamondColors.length];
                const isActive = activeIndex === index;
                const isPast = index <= activeIndex;

                return (
                  <div
                    key={index}
                    className="flex flex-row items-center w-full md:w-auto relative"
                  >
                    {/* Diamond with Enhanced Animation */}
                    <button
                      ref={(el) => (diamondRefs.current[index] = el)}
                      onClick={() => handleDiamondClick(index)}
                      className={`relative transition-all duration-500 ease-out transform flex-shrink-0
                ${isActive ? "scale-110" : "scale-100"} 
                ${isPast ? "opacity-100" : "opacity-70"}
                hover:scale-105`}
                    >
                      <div
                        className={`w-16 h-16 md:w-20 md:h-20 transform rotate-45 overflow-hidden border-6
                  flex items-center justify-center shadow-lg relative z-10
                  ${
                    isActive
                      ? `${colors.border} ${colors.fill} ring-4 ${colors.ring} shadow-xl`
                      : `border-gray-300 ${colors.fill}`
                  } 
                  ${isPast && !isActive ? "border-green-300" : ""}
                  transition-all duration-500 ease-out`}
                      >
                        <div className="transform -rotate-45 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                          <img
                            src={
                              index === 0
                                ? thinking
                                : index === 1
                                  ? develop
                                  : index === 2
                                    ? award
                                    : index === 3
                                      ? globe
                                      : first
                            }
                            alt={item.title}
                            className={`w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-500
                      ${isActive ? "opacity-100 scale-110" : "opacity-70 scale-100"}
                      ${isActive ? "filter-none" : "grayscale"}`}
                          />
                        </div>
                      </div>
                    </button>

                    {/* Enhanced Vertical Line with Smooth Drawing Animation - DESKTOP ONLY */}
                    {isActive && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-[95%] md:top-[110%] hidden md:flex flex-col items-center">
                        {/* Animated Vertical Line */}
                        <div
                          className={`w-1 h-0 rounded-full ${colors.line} transition-all duration-1000 ease-out`}
                          style={{
                            height: "5rem",
                            animation: "drawVerticalLine 1s ease-out forwards",
                          }}
                        />
                        {/* End Circle with Bounce Animation */}
                        <div
                          className={`w-4 h-4 rounded-full ${colors.fill} border-4 ${colors.border} mt-1 
                    transition-all duration-500 ease-out
                    animate-bounce-slow`}
                          style={{
                            animationDelay: "0.8s",
                          }}
                        />
                      </div>
                    )}

                    {/* Mobile Text - Right Side with Fade In Effect */}
                    <div
                      className={`md:hidden ml-4 transition-all duration-500 ease-out flex-1 ${
                        isActive ? "opacity-100" : "opacity-0 absolute"
                      } ${isActive ? "animate-fadeInRight" : ""}`}
                    >
                      {isActive && (
                        <div className="p-4">
                          <div className="section-title text-sm font-bold text-blue-900 mb-2">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-600 leading-relaxed">
                            {item.description}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Navigation Dots for Mobile */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2 md:hidden">
            {t.timeline.items.map((_, index) => {
              const colors = diamondColors[index % diamondColors.length];
              const isActive = activeIndex === index;
              const isPast = index <= activeIndex;

              return (
                <button
                  key={index}
                  onClick={() => handleDiamondClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ease-out
                    ${
                      isActive
                        ? `scale-125 ${colors.fill} shadow-lg`
                        : isPast
                          ? "bg-green-400 scale-110"
                          : "bg-gray-300 scale-100"
                    }`}
                />
              );
            })}
          </div>

          {/* Desktop Text Description Section - Fixed */}
          <div className="relative mt-16 md:mt-20 lg:mt-24 h-24 md:h-20 lg:h-24 hidden md:block">
            {t.timeline.items.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`absolute top-0 transition-all duration-500 ease-out ${
                    isActive
                      ? "opacity-100 delay-300 visible"
                      : "opacity-0 invisible"
                  }`}
                  style={{
                    left: `${(index / (t.timeline.items.length - 1)) * 100}%`,
                    transform: isActive
                      ? `translateX(${index >= 3 ? "-100%" : "0%"})`
                      : "translateX(-50%)",
                    width: "280px",
                  }}
                >
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
