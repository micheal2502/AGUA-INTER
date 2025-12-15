import { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext"; // Import hook

const BlogPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage(); // Sử dụng hook

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const content = {
    vie: {
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

  // Tạo translation object
  const tContent = {
    heroTitle:
      language === "vie" ? "DÒNG CHẢY TRI THỨC" : "THE FLOW OF KNOWLEDGE",
    heroSubtitle:
      language === "vie"
        ? "Những suy ngẫm, góc nhìn và nguồn cảm hứng từ cộng đồng kinh doanh Agua. Những câu chuyện sống động mô tả dòng chảy tri thức, bao gồm cả những thách thức và trải nghiệm mở rộng."
        : "Reflections, perspectives, and inspiration from the Agua business community. Active story articles describe a flow of knowledge, including conflicts and broadening experiences.",
    searchPlaceholder:
      language === "vie"
        ? "Tìm kiếm trong dòng chảy tri thức..."
        : "Search the knowledge flow...",
    searchButton: language === "vie" ? "Tìm kiếm" : "Search",
  };

  return (
    <>
    <div className="manrope-regular">
      <div className="py-20"></div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="manrope-extrabold text-5xl md:text-6xl lg:text-7xl text-[#0974B6] mb-6 leading-tight">
              {tContent.heroTitle}
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              {tContent.heroSubtitle}
            </p>
          </div>
        </div>
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto mb-6">
            <div className="relative group">
              <input
                type="text"
                placeholder={tContent.searchPlaceholder}
                className="w-full px-8 py-4 pl-14 pr-32 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 manrope-regular text-lg shadow-md hover:shadow-lg group-hover:border-blue-400 bg-white"
              />
              <svg
                className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500 group-hover:text-blue-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2.5 rounded-full manrope-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="hidden sm:inline">
                  {tContent.searchButton}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="container mx-auto px-5">
            <div className="grid md:grid-cols-2 gap-10">
                {/* Cột trái */}
                <div className="space-y-10">
                {/* Ô đầu tiên - Lớn hơn */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-10 shadow-xl flex flex-col justify-center">
                    <div className="inline-flex items-center mb-8">
                    <svg className="w-10 h-10 text-[#0974B6] mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-[#0974B6] manrope-bold text-xl">
                    {language === "vie" ? "Dòng chảy tri thức" : "The Flow of Knowledge"}
                    </span>
                    </div>
   
                    <p className="text-gray-700 manrope-regular text-xl leading-relaxed mb-8">
                    {language === "vie" 
                        ? "Những suy ngẫm, góc nhìn và cảm hứng được lan tỏa từ cộng đồng học tập AGUA nơi mỗi dòng chữ là một gợn sóng tri thức chạm đến trái tim và khơi mở nhận thức."
                        : "Reflections, perspectives, and inspirations shared by the Agua learning community, where every article becomes a wave of knowledge touching the heart and awakening awareness."}
                    </p>

                </div>
                
                {/* Bài viết 1 - 750px */}
                <div className="group bg-white rounded-2xl shadow-xl overflow-hidden h-[750px] hover:shadow-2xl transition-all duration-500">
                    <div className="h-96 overflow-hidden">
                    <img 
                        src="/images/about1.png" 
                        alt={language === "vie" ? "Thành công học sinh" : "Student success"}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    </div>
                    <div className="p-10 flex flex-col h-[354px]">
                    <div className="flex items-center text-lg text-gray-500 mb-6">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{language === "vie" ? "15/03/2024" : "Mar 15, 2024"}</span>
                        <span className="mx-3">•</span>
                        <span>{language === "vie" ? "12 phút đọc" : "12 min read"}</span>
                    </div>
                    <h3 className="text-3xl manrope-bold text-gray-900 mb-6 leading-tight">
                        {language === "vie" ? "Bí quyết thành công của học sinh quốc tế" : "The Success Secrets of International Students"}
                    </h3>
                    <p className="text-gray-600 manrope-regular text-lg leading-relaxed mb-8 line-clamp-4">
                        {language === "vie" 
                        ? "Khám phá những chiến lược học tập và thích nghi văn hóa giúp học sinh quốc tế tỏa sáng trong môi trường đa văn hóa. Từ việc quản lý thời gian hiệu quả đến xây dựng mạng lưới quan hệ, bài viết cung cấp những insights quý giá cho hành trình du học. Hiểu biết sâu sắc về các hệ thống giáo dục khác nhau, phương pháp học tập chủ động, và kỹ năng giao tiếp đa văn hóa là chìa khóa thành công."
                        : "Discover the study strategies and cultural adaptation techniques that help international students excel in multicultural environments. From effective time management to building professional networks, this article provides valuable insights for study abroad journeys. Deep understanding of different education systems, active learning methods, and cross-cultural communication skills are key to success."}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                            <span className="text-blue-700 manrope-bold">A</span>
                        </div>
                        <span className="text-gray-700 manrope-medium">
                            {language === "vie" ? "Tác giả AGUA" : "AGUA Author"}
                        </span>
                        </div>
                        <button className="text-blue-600 manrope-bold text-lg hover:text-blue-800 flex items-center gap-2">
                        {language === "vie" ? "Đọc tiếp" : "Read More"}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        </button>
                    </div>
                    </div>
                </div>
                
                {/* Bài viết 2 - 750px */}
                <div className="group bg-white rounded-2xl shadow-xl overflow-hidden h-[750px] hover:shadow-2xl transition-all duration-500">
                    <div className="h-96 overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                        alt={language === "vie" ? "Hướng nghiệp" : "Career guidance"}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    </div>
                    <div className="p-10 flex flex-col h-[354px]">
                    <div className="flex items-center text-lg text-gray-500 mb-6">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{language === "vie" ? "10/03/2024" : "Mar 10, 2024"}</span>
                        <span className="mx-3">•</span>
                        <span>{language === "vie" ? "8 phút đọc" : "8 min read"}</span>
                    </div>
                    <h3 className="text-3xl manrope-bold text-gray-900 mb-6 leading-tight">
                        {language === "vie" ? "Định hướng nghề nghiệp trong kỷ nguyên số" : "Career Guidance in the Digital Era"}
                    </h3>
                    <p className="text-gray-600 manrope-regular text-lg leading-relaxed mb-8 line-clamp-4">
                        {language === "vie" 
                        ? "Làm thế nào để xây dựng lộ trình nghề nghiệp thích ứng với những thay đổi nhanh chóng của công nghệ và thị trường lao động. Bài viết phân tích các xu hướng nghề nghiệp mới và kỹ năng cần thiết cho tương lai. Từ các công việc trong lĩnh vực AI, dữ liệu đến các kỹ năng mềm quan trọng trong môi trường làm việc hiện đại."
                        : "How to build a career path that adapts to the rapid changes in technology and the job market landscape. This article analyzes emerging career trends and essential skills for the future workforce. From AI and data-related jobs to crucial soft skills in modern work environments."}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                            <span className="text-green-700 manrope-bold">C</span>
                        </div>
                        <span className="text-gray-700 manrope-medium">
                            {language === "vie" ? "Chuyên gia hướng nghiệp" : "Career Expert"}
                        </span>
                        </div>
                        <button className="text-blue-600 manrope-bold text-lg hover:text-blue-800 flex items-center gap-2">
                        {language === "vie" ? "Đọc tiếp" : "Read More"}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        </button>
                    </div>
                    </div>
                </div>
                </div>
                
                {/* Cột phải */}
                <div className="space-y-10">
                {/* Bài viết Featured - 750px */}
                <div className="group bg-white rounded-2xl shadow-2xl overflow-hidden h-[750px] hover:shadow-3xl transition-all duration-500">
                    <div className="h-96 overflow-hidden relative">
                    <img 
                        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                        alt={language === "vie" ? "Phát triển lãnh đạo" : "Leadership development"}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6">
                        <div className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-base manrope-bold shadow-lg">
                        {language === "vie" ? "BÀI NỔI BẬT" : "FEATURED"}
                        </div>
                    </div>
                    <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm manrope-medium">
                        {language === "vie" ? "Đã xem 2.5K" : "2.5K views"}
                    </div>
                    </div>
                    <div className="p-10 flex flex-col h-[354px]">
                    <h3 className="text-3xl manrope-bold text-gray-900 mb-6 leading-tight">
                        {language === "vie" ? "Phát triển tư duy lãnh đạo thế hệ mới" : "Developing Next-Generation Leadership Thinking"}
                    </h3>
                    <p className="text-gray-600 manrope-regular text-lg leading-relaxed mb-8">
                        {language === "vie" 
                        ? "Khám phá những mô hình lãnh đạo hiện đại và kỹ năng cần thiết để dẫn dắt trong thế giới đầy biến động. Bài viết phân tích các case study từ các nhà lãnh đạo trẻ thành công trên toàn cầu, cùng với các bài học thực tiễn có thể áp dụng ngay."
                        : "Explore modern leadership models and essential skills for guiding others in a volatile world. This article analyzes case studies from successful young leaders worldwide, along with practical lessons that can be applied immediately."}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                        <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 manrope-medium">
                            {language === "vie" ? "Tư duy phản biện và giải quyết vấn đề phức tạp" : "Critical thinking and complex problem-solving"}
                        </span>
                        </div>
                        <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 manrope-medium">
                            {language === "vie" ? "Kỹ năng giao tiếp đa văn hóa và đa thế hệ" : "Cross-cultural and multi-generational communication skills"}
                        </span>
                        </div>
                    </div>
                    
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                        <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4 shadow-md">
                            <span className="text-white manrope-bold text-lg">M</span>
                        </div>
                        <div>
                            <div className="text-base manrope-bold text-gray-900">
                            {language === "vie" ? "Mentor Chuyên gia" : "Expert Mentor"}
                            </div>
                            <div className="text-sm text-gray-500">
                            {language === "vie" ? "Đọc 15 phút" : "15 min read"}
                            </div>
                        </div>
                        </div>
                        <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full manrope-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3">
                        {language === "vie" ? "Đọc tiếp" : "Read More"}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        </button>
                    </div>
                    </div>
                </div>
                
                {/* Bài viết 3 - 750px */}
                <div className="group bg-white rounded-2xl shadow-xl overflow-hidden h-[750px] hover:shadow-2xl transition-all duration-500">
                    <div className="h-96 overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                        alt={language === "vie" ? "Du học" : "Study abroad"}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    </div>
                    <div className="p-10 flex flex-col h-[354px]">
                    <div className="flex items-center text-lg text-gray-500 mb-6">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{language === "vie" ? "05/03/2024" : "Mar 5, 2024"}</span>
                        <span className="mx-3">•</span>
                        <span>{language === "vi" ? "10 phút đọc" : "10 min read"}</span>
                    </div>
                    <h3 className="text-3xl manrope-bold text-gray-900 mb-6 leading-tight">
                        {language === "vie" ? "Hành trang du học: Từ A đến Z" : "Study Abroad Essentials: From A to Z"}
                    </h3>
                    <p className="text-gray-600 manrope-regular text-lg leading-relaxed mb-8 line-clamp-4">
                        {language === "vie" 
                        ? "Cẩm nang toàn diện cho sinh viên chuẩn bị hành trình du học, từ thủ tục hồ sơ đến kỹ năng sống tự lập. Bao gồm các bước chuẩn bị visa, tài chính, và hội nhập văn hóa. Hướng dẫn chi tiết về chọn trường, xin học bổng, và chuẩn bị tâm lý cho cuộc sống mới."
                        : "A comprehensive guide for students preparing for study abroad journeys, from documentation procedures to independent living skills. Includes visa preparation steps, financial planning, and cultural integration strategies. Detailed guidance on school selection, scholarship applications, and psychological preparation for new life."}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                            <span className="text-purple-700 manrope-bold">S</span>
                        </div>
                        <span className="text-gray-700 manrope-medium">
                            {language === "vie" ? "Cựu du học sinh" : "Study Abroad Alumni"}
                        </span>
                        </div>
                        <button className="text-blue-600 manrope-bold text-lg hover:text-blue-800 flex items-center gap-2">
                        {language === "vie" ? "Đọc tiếp" : "Read More"}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        </button>
                    </div>
                    </div>
                </div>
                
                {/* Bài viết 4 - 750px */}
                <div className="group bg-white rounded-2xl shadow-xl overflow-hidden h-[750px] hover:shadow-2xl transition-all duration-500">
                    <div className="h-96 overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                        alt={language === "vi" ? "Công nghệ giáo dục" : "Technology in education"}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    </div>
                    <div className="p-10 flex flex-col h-[354px]">
                    <div className="flex items-center text-lg text-gray-500 mb-6">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{language === "vie" ? "28/02/2024" : "Feb 28, 2024"}</span>
                        <span className="mx-3">•</span>
                        <span>{language === "vie" ? "7 phút đọc" : "7 min read"}</span>
                    </div>
                    <h3 className="text-3xl manrope-bold text-gray-900 mb-6 leading-tight">
                        {language === "vie" ? "Công nghệ định hình tương lai giáo dục" : "Technology Shaping the Future of Education"}
                    </h3>
                    <p className="text-gray-600 manrope-regular text-lg leading-relaxed mb-8 line-clamp-4">
                        {language === "vie" 
                        ? "AI, VR và các công nghệ tiên tiến đang thay đổi cách chúng ta học tập và tương tác với kiến thức như thế nào. Khám phá những công cụ và nền tảng đang cách mạng hóa giáo dục. Từ các ứng dụng học tập thích ứng đến các lớp học ảo, công nghệ đang mở ra những cơ hội học tập chưa từng có."
                        : "How AI, VR and advanced technologies are transforming the way we learn and interact with knowledge. Explore the tools and platforms that are revolutionizing education worldwide. From adaptive learning apps to virtual classrooms, technology is opening up unprecedented learning opportunities."}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                            <span className="text-amber-700 manrope-bold">T</span>
                        </div>
                        <span className="text-gray-700 manrope-medium">
                            {language === "vie" ? "Chuyên gia EdTech" : "EdTech Expert"}
                        </span>
                        </div>
                        <button className="text-blue-600 manrope-bold text-lg hover:text-blue-800 flex items-center gap-2">
                        {language === "vie" ? "Đọc tiếp" : "Read More"}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </section>
    {/* Simple Newsletter Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-5">
            <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl manrope-bold text-gray-900 mb-4">
                {language === "vie" ? "Kết Nối Từ Làn Sóng Agua" : "Connect with the AGUA Wave"}
            </h2>
            <p className="text-gray-600 text-lg mb-8">
                {language === "vie" 
                ? "Nhận những dòng suy ngẫm và cảm hứng hàng tháng từ cộng đồng giáo dục AGUA, nơi tri thức lan tỏa như làn sóng và chạm đến mỗi hành trình học tập." 
                : "Receive inspiring reflections and educational insights from the Agua learning community, where knowledge flows like waves—touching every learner’s journey."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
                <input
                type="email"
                placeholder={language === "vie" ? "Email của bạn" : "Your email"}
                className="flex-grow px-6 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none manrope-regular text-lg"
                />
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full manrope-bold hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap">
                {language === "vie" ? "Đăng ký" : "Subscribe"}
                </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
                {language === "vi" 
                ? "Dành riêng cho cộng đồng quan tâm đến hành trình học tập cùng AGUA." 
                : "For those who wish to stay connected with Agua’s educational journey."}
            </p>
            </div>
        </div>
        </section>
    </div>
    </>
  );
};

export default BlogPage;
