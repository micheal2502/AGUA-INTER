import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const CoreValue = () => {
  const { language } = useLanguage(); // Get current language

  // Language-specific content
  const content = {
    vie: {
      title: "Giá Trị Cốt Lõi",
      subtitle: "Những nguyên tắc và giá trị định hình nên văn hóa Agua",
      values: {
        "Proactiveness - Chủ Động":
          "Agua-ers tự tin và quyết đoán, dám nói lên suy nghĩ và bảo vệ quan điểm của mình. Chúng tôi sáng tạo và đổi mới, chấp nhận rủi ro và chủ động tìm kiếm nguồn lực để biến ý tưởng thành hiện thực.",
        "Inquisitiveness - Ham Học Hỏi":
          "Agua-ers tò mò và khao khát tiếp thu kiến thức mới, không ngừng áp dụng tư duy phản biện bằng cách luôn đặt câu hỏi. Chúng tôi trân trọng việc tự học và có đam mê học tập suốt đời.",
        "Integrity - Chính Trực":
          "Agua-ers sống có trách nhiệm với bản thân, gia đình và cộng đồng. Chúng tôi chịu trách nhiệm cho hành động của mình và luôn giữ lời hứa. Trung thực là giá trị cốt lõi, dám lên tiếng trước cái sai và bảo vệ lẽ phải.",
        "Creativity - Sáng Tạo":
          "Agua-ers có khả năng vượt ra khỏi những khuôn mẫu và ý tưởng truyền thống để tạo ra những khái niệm, phương pháp và giải pháp mới có giá trị cho bản thân và người khác.",
        "Respect - Tôn Trọng":
          "Agua-ers quan tâm đến cảm xúc, quyền lợi và sự an toàn của chính mình và người khác. Chúng tôi tôn trọng văn hóa gia đình, bản sắc dân tộc và có cái nhìn sâu sắc về các nền văn hóa, tôn giáo và bản dạng giới khác nhau.",
      },
      images: {
        "Proactiveness - Chủ Động": "/images/proactive.jpg",
        "Inquisitiveness - Ham Học Hỏi": "/images/learning.jpg",
        "Integrity - Chính Trực": "/images/integrity.jpg",
        "Creativity - Sáng Tạo": "/images/creativity.jpg",
        "Respect - Tôn Trọng": "/images/respect.jpg",
      },
    },
    en: {
      title: "Core Values",
      subtitle: "The principles and values that shape Agua's culture",
      values: {
        Proactiveness:
          "Agua-ers are confident and decisive, daring to speak their minds and defend their viewpoints. We are creative and innovative, accepting risks and proactively seeking resources to turn ideas into reality.",
        Inquisitiveness:
          "Agua-ers are curious and eager to acquire new knowledge, continually applying critical thinking by always asking questions. We value self-learning and have a passion for lifelong learning.",
        Integrity:
          "Agua-ers live responsibly towards themselves, family, and community. We take responsibility for our actions and always keep promises. Honesty is a core value, daring to speak up against wrongdoings and defend what is right.",
        Creativity:
          "Agua-ers have the ability to go beyond traditional patterns and ideas to create new concepts, methods, and solutions that have value for themselves and others.",
        Respect:
          "Agua-ers care about the feelings, rights, and safety of themselves and others. We respect family culture, national identity, and have deep insight into different cultures, religions, and gender identities.",
      },
      images: {
        Proactiveness: "/images/proactive.jpg",
        Inquisitiveness: "/images/learning.jpg",
        Integrity: "/images/integrity.jpg",
        Creativity: "/images/creativity.jpg",
        Respect: "/images/respect.jpg",
      },
    },
  };

  // Get content based on current language
  const t = content[language] || content.vie;

  // Function to get value keys based on language
  const getValueKeys = () => {
    if (language === "vie") {
      return [
        "Proactiveness - Chủ Động",
        "Inquisitiveness - Ham Học Hỏi",
        "Integrity - Chính Trực",
        "Creativity - Sáng Tạo",
        "Respect - Tôn Trọng",
      ];
    } else {
      return [
        "Proactiveness",
        "Inquisitiveness",
        "Integrity",
        "Creativity",
        "Respect",
      ];
    }
  };

  // Refs cho các phần tử
  const containerRef = useRef(null);
  const valueItemsRef = useRef([]);

  // Thêm ref vào mảng
  const addToRefs = (el) => {
    if (el && !valueItemsRef.current.includes(el)) {
      valueItemsRef.current.push(el);
    }
  };

  // Animation cho từng giá trị
  useEffect(() => {
    // Animation cho container
    const ctx = gsap.context(() => {
      // Animation cho toàn bộ section khi xuất hiện
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animation cho từng giá trị theo dạng staggered
      valueItemsRef.current.forEach((item, index) => {
        const icon = item.querySelector(".icon-circle");
        const title = item.querySelector(".value-title");
        const description = item.querySelector(".value-description");
        const image = item.querySelector(".value-image img");

        // Tạo timeline riêng cho mỗi item
        const itemTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        });

        // Animation cho icon (xoay và scale)
        itemTl.fromTo(
          icon,
          {
            rotation: -180,
            scale: 0,
            opacity: 0,
          },
          {
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.4)",
          },
          0,
        );

        // Animation cho title (slide từ trái)
        itemTl.fromTo(
          title,
          {
            x: -50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          0.2,
        );

        // Animation cho description (fade in)
        itemTl.fromTo(
          description,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          0.4,
        );

        // Animation cho hình ảnh (scale từ nhỏ)
        itemTl.fromTo(
          image,
          {
            scale: 0.8,
            opacity: 0,
            filter: "blur(5px)",
          },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
          },
          0.6,
        );

        // Hiệu ứng hover cho từng item
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(icon, {
            rotation: 360,
            duration: 0.8,
            ease: "power2.out",
          });

          gsap.to(title, {
            color: "#3d76b8",
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(image, {
            scale: 1.1,
            duration: 0.5,
            ease: "power2.out",
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(title, {
            color: "#1B2340",
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(image, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [language]); // Add language as dependency

  return (
    <div
      className="gia-tri-container py-20 bg-gradient-to-b from-blue-100 via-white to-blue-50"
      ref={containerRef}
    >
      <div className="container mx-auto px-6">
        {/* Tiêu đề section với animation */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3d76b8] mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="values-layout max-w-6xl mx-auto">
          {getValueKeys().map((key, index) => (
            <div
              key={key}
              className={`value-item value-${index % 5} mb-12 bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl`}
              ref={addToRefs}
            >
              <div className="flex flex-col md:flex-row items-stretch">
                {/* Phần bên trái: Icon và Content */}
                <div className="md:w-2/3 p-8">
                  <div className="flex items-start space-x-4">
                    <div className="value-icon flex-shrink-0">
                      <div className="icon-circle w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>

                    <div className="value-content flex-1">
                      <h3 className="value-title text-2xl md:text-3xl font-bold text-[#1B2340] mb-4">
                        {key}
                      </h3>
                      <p className="value-description text-gray-700 leading-relaxed text-lg">
                        {t.values[key]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phần bên phải: Image */}
                <div className="value-image md:w-1/3 relative overflow-hidden min-h-[200px] md:min-h-full">
                  <div className="absolute inset-0 bg-gradient-to-l from-blue-100/20 to-transparent z-10"></div>
                  <img
                    src={t.images[key]}
                    alt={key}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-300 rounded-full opacity-20 translate-x-24 translate-y-24"></div>
      </div>
    </div>
  );
};

export default CoreValue;
