import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const ContactStep2 = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    importantInEducation: [],
    learnBetter: "",
    futureExpectation: "",
    difficulties: "",
    joyCuriosity: "",
  });

  // Translations
  const translations = {
    vi: {
      heroTitle: "Hành trình cùng AGUA",
      heroSubtitle: "Hiểu rõ nhu cầu hiện tại để đồng hành đúng hướng",
      processFeatures: [
        "Lắng nghe nhu cầu",
        "Giải pháp cá nhân hóa",
        "Đồng hành thực tế",
      ],

      progressTitle: "Tiến trình của bạn",
      progressStatus: "Hoàn thành 2/4 bước",

      steps: [
        { number: 1, label: "Thông tin cơ bản" },
        { number: 2, label: "Quan điểm giáo dục" },
        { number: 3, label: "Nhu cầu học tập" },
        { number: 4, label: "Hoàn tất" },
      ],

      currentStep: 2,
      activeStep: 2,

      sectionTitle: "02/ Làn sóng tư duy",
      sectionSubtitle: "Suy nghĩ về giáo dục của phụ huynh",
      sectionDescription:
        "Khi những cơn sóng đầu tiên của AGUA đưa con ra khỏi bờ, hướng đi sẽ được dẫn dắt bởi ngọn gió của niềm tin và giá trị mà anh/chị đặt vào hành trình học tập. Đây là lúc AGUA lắng nghe để thấu hiểu điều đang dẫn dắt các con - là khát vọng, niềm vui hay mơ ước sâu thẳm phía sau mỗi cơn sóng.",

      questions: {
        q1: "1. Theo anh/chị, điều gì quan trọng nhất trong giáo dục con?",
        q2: "2. Theo anh/chị, điều gì làm con học tốt thực sự?",
        q3: "3. Anh/chị mong muốn con mình tương lai như nào?",
        q4: "4. Con anh/chị thường gặp khó khăn trong điều gì?",
        q5: "5. Anh/chị tin rằng niềm vui tò mò của con sẽ giúp con học tốt hơn?",
      },

      maxSelection: "(Chọn tối đa 2 phương án)",
      selectedCount: "Đã chọn:",

      educationOptions: [
        "Kiến thức học thuật vững vàng",
        "Kỹ năng sống và giao tiếp",
        "Đạo đức và nhân cách",
        "Tư duy sáng tạo và phản biện",
        "Sức khỏe thể chất và tinh thần",
        "Khả năng thích nghi và tự lập",
        "Đam mê và nhiệt huyết",
      ],

      learnBetterOptions: [
        "Môi trường học tập tích cực",
        "Giáo viên tận tâm, phương pháp tốt",
        "Sự đồng hành của gia đình",
        "Động lực nội tại của bản thân",
        "Áp lực và kỳ vọng phù hợp",
        "Cơ hội thực hành và trải nghiệm",
      ],

      futureExpectationOptions: [
        "Thành công trong sự nghiệp",
        "Sống hạnh phúc và cân bằng",
        "Có ích cho xã hội",
        "Độc lập và tự chủ",
        "Theo đuổi đam mê",
        "Có tầm nhìn quốc tế",
      ],

      difficultyOptions: [
        "Tập trung và quản lý thời gian",
        "Áp lực điểm số và thi cử",
        "Môn học không hứng thú",
        "Mối quan hệ bạn bè, thầy cô",
        "Định hướng tương lai",
        "Cân bằng học tập và giải trí",
        "Tự tin và thể hiện bản thân",
      ],

      joyOptions: [
        "Hoàn toàn đồng ý",
        "Đồng ý",
        "Bình thường",
        "Không đồng ý",
        "Không biết",
      ],

      selectPlaceholders: {
        difficulties: "Chọn khó khăn thường gặp",
      },

      buttons: {
        back: "Quay lại",
        next: "Tiếp theo",
        home: "Quay lại trang chủ",
      },

      footer: {
        companyName: "Agua International Education",
        quickLinks: "Liên kết nhanh",
        home: "Trang Chủ",
        programs: "Gói Học Tập",
        people: "Con Người",
        opportunities: "Cơ Hội",
        contact: "Liên hệ",
        address:
          "20 Mỹ Giang 2A, Khu biệt thự Phú Mỹ Hưng, Quận 7, TP. Hồ Chí Minh",
        phone: "+84 28 1234 5678",
        email: "info@agua.edu.vn",
        copyright: "© {year} Agua International Education. Bảo lưu mọi quyền.",
        privacy: "Chính sách bảo mật",
        terms: "Điều khoản sử dụng",
        sitemap: "Sitemap",
      },
    },
    en: {
      heroTitle: "Journey with AGUA",
      heroSubtitle:
        "Understanding current needs to accompany you in the right direction",
      processFeatures: [
        "Listening to needs",
        "Personalized solutions",
        "Practical companionship",
      ],

      progressTitle: "Your Progress",
      progressStatus: "Completed 2/4 steps",

      steps: [
        { number: 1, label: "Basic Information" },
        { number: 2, label: "Educational Philosophy" },
        { number: 3, label: "Learning Needs" },
        { number: 4, label: "Completion" },
      ],

      currentStep: 2,
      activeStep: 2,

      sectionTitle: "02/ Thought Waves",
      sectionSubtitle: "Parents' Thoughts on Education",
      sectionDescription:
        "When AGUA's first waves take your child out of the shore, the direction will be guided by the wind of trust and values you place in the learning journey. This is when AGUA listens to understand what drives your children - whether it's aspirations, joy, or deep dreams behind each wave.",

      questions: {
        q1: "1. In your opinion, what is most important in educating your child?",
        q2: "2. In your opinion, what truly makes a child learn better?",
        q3: "3. How do you want your child's future to be?",
        q4: "4. What difficulties does your child usually face?",
        q5: "5. Do you believe that your child's curiosity and joy will help them learn better?",
      },

      maxSelection: "(Select maximum 2 options)",
      selectedCount: "Selected:",

      educationOptions: [
        "Strong academic knowledge",
        "Life skills and communication",
        "Ethics and character",
        "Creative and critical thinking",
        "Physical and mental health",
        "Adaptability and independence",
        "Passion and enthusiasm",
      ],

      learnBetterOptions: [
        "Positive learning environment",
        "Dedicated teachers, good methods",
        "Family companionship",
        "Intrinsic motivation",
        "Appropriate pressure and expectations",
        "Practical opportunities and experiences",
      ],

      futureExpectationOptions: [
        "Career success",
        "Happy and balanced life",
        "Useful to society",
        "Independent and autonomous",
        "Pursuing passions",
        "Having an international vision",
      ],

      difficultyOptions: [
        "Focus and time management",
        "Grade pressure and exams",
        "Uninteresting subjects",
        "Friends and teacher relationships",
        "Future orientation",
        "Balancing study and entertainment",
        "Confidence and self-expression",
      ],

      joyOptions: [
        "Strongly agree",
        "Agree",
        "Neutral",
        "Disagree",
        "Don't know",
      ],

      selectPlaceholders: {
        difficulties: "Select common difficulties",
      },

      buttons: {
        back: "Back",
        next: "Next Step",
        home: "Back to Home",
      },

      footer: {
        companyName: "Agua International Education",
        quickLinks: "Quick Links",
        home: "Home",
        programs: "Learning Packages",
        people: "Our People",
        opportunities: "Opportunities",
        contact: "Contact",
        address: "20 My Giang 2A, Phu My Hung, District 7, Ho Chi Minh City",
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

  const tContent =
    translations[language === "vie" ? "vi" : language] || translations.vi;

  const handleEducationChange = (option) => {
    setFormData((prev) => {
      const newOptions = prev.importantInEducation.includes(option)
        ? prev.importantInEducation.filter((item) => item !== option)
        : prev.importantInEducation.length < 2
          ? [...prev.importantInEducation, option]
          : prev.importantInEducation;
      return {
        ...prev,
        importantInEducation: newOptions,
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Step 2 data:", formData);

    // Get data from step 1
    const step1Data = JSON.parse(localStorage.getItem("contactInfo") || "{}");

    // Merge data
    const allData = { ...step1Data, ...formData };
    localStorage.setItem("contactInfo", JSON.stringify(allData));

    // Navigate to step 3
    navigate("/connect/step3");
  };

  const handleBack = () => {
    navigate("/connect/step1");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-blue-500/15 to-cyan-500/15 pt-20 pb-24 md:pt-24 md:pb-28">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-300/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side: Title and description */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {tContent.heroTitle}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                {tContent.heroSubtitle}
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                {tContent.processFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Dot indicator with 4 steps */}
            <div className="lg:pl-12">
              <div className="max-w-md mx-auto lg:mx-0">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {tContent.progressTitle}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {tContent.progressStatus}
                  </p>
                </div>

                {/* Dot indicator with 4 steps */}
                <div className="relative">
                  {/* Progress line */}
                  <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 w-1/2"></div>
                  </div>

                  <div className="flex justify-between relative z-10">
                    {tContent.steps.map((step, index) => (
                      <div key={index} className="flex flex-col items-center">
                        {step.number === tContent.activeStep ? (
                          // Active step
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center mb-3 shadow-xl relative">
                            <span className="text-white font-bold text-lg">
                              {step.number}
                            </span>
                            <div className="absolute -inset-2 border-2 border-blue-200 rounded-full animate-pulse"></div>
                          </div>
                        ) : step.number < tContent.activeStep ? (
                          // Completed step
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-3 shadow-lg">
                            <svg
                              className="w-5 h-5 text-white"
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
                          </div>
                        ) : (
                          // Future step
                          <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-gray-300 flex items-center justify-center mb-3">
                            <span className="text-gray-400 font-bold">
                              {step.number}
                            </span>
                          </div>
                        )}
                        <span
                          className={`text-sm font-medium ${
                            step.number === tContent.activeStep
                              ? "text-blue-700 font-semibold"
                              : step.number < tContent.activeStep
                                ? "text-blue-600"
                                : "text-gray-500"
                          }`}
                        >
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="relative flex justify-between items-center">
              {/* Step 1 - Completed */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-3 shadow-lg">
                  <svg
                    className="w-5 h-5 text-white"
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
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {tContent.steps[0].label}
                </span>
              </div>

              {/* Step 2 - Active */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-3"></div>
                <span className="text-sm font-semibold text-blue-600">
                  {tContent.steps[1].label}
                </span>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-3 h-3 rounded-full bg-gray-300 mb-3"></div>
                <span className="text-sm font-medium text-gray-500">
                  {tContent.steps[2].label}
                </span>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-3 h-3 rounded-full bg-gray-300 mb-3"></div>
                <span className="text-sm font-medium text-gray-500">
                  {tContent.steps[3].label}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section - Below timeline, above form */}
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-left">
            {/* Main title */}
            <h1 className="text-xl font-medium mb-6">
              {tContent.sectionTitle}
            </h1>

            {/* Sub-description */}
            <p className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
              {tContent.sectionSubtitle}
            </p>

            {/* Description paragraph */}
            <div className="max-w-3xl">
              <p className="text-sm text-gray-700 leading-relaxed mb-6 italic">
                {tContent.sectionDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 md:p-8"
          >
            {/* Question 1: Most important in education */}
            <div className="mb-10">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                {tContent.questions.q1}
                <span className="text-sm font-normal text-gray-500 ml-2">
                  {tContent.maxSelection}
                </span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tContent.educationOptions.map((option, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-4 rounded-xl border transition-all cursor-pointer ${
                      formData.importantInEducation.includes(option)
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.importantInEducation.includes(option)}
                      onChange={() => handleEducationChange(option)}
                      className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      disabled={
                        formData.importantInEducation.length >= 2 &&
                        !formData.importantInEducation.includes(option)
                      }
                    />
                    <span className="ml-3 text-gray-700 flex-1">{option}</span>
                  </label>
                ))}
              </div>
              <div className="mt-3 text-sm text-gray-500">
                {tContent.selectedCount} {formData.importantInEducation.length}
                /2
              </div>
            </div>

            {/* Question 2: What makes child learn better */}
            <div className="mb-10">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                {tContent.questions.q2}
              </label>
              <div className="space-y-3">
                {tContent.learnBetterOptions.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="learnBetter"
                      value={option}
                      checked={formData.learnBetter === option}
                      onChange={handleChange}
                      className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                      required
                    />
                    <span className="ml-3 text-gray-700 flex-1">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 3: Future expectations */}
            <div className="mb-10">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                {tContent.questions.q3}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tContent.futureExpectationOptions.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="futureExpectation"
                      value={option}
                      checked={formData.futureExpectation === option}
                      onChange={handleChange}
                      className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                      required
                    />
                    <span className="ml-3 text-gray-700 flex-1">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 4: Difficulties */}
            <div className="mb-10">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                {tContent.questions.q4}
              </label>
              <select
                name="difficulties"
                value={formData.difficulties}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-gray-800"
              >
                <option value="">
                  {tContent.selectPlaceholders.difficulties}
                </option>
                {tContent.difficultyOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Question 5: Joy and curiosity */}
            <div className="mb-10">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                {tContent.questions.q5}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {tContent.joyOptions.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="joyCuriosity"
                      value={option}
                      checked={formData.joyCuriosity === option}
                      onChange={handleChange}
                      className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                      required
                    />
                    <span className="ml-2 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-12">
              <button
                type="button"
                onClick={handleBack}
                className="group flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 w-full md:w-auto"
              >
                <svg
                  className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                {tContent.buttons.back}
              </button>

              <button
                type="submit"
                className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl w-full md:w-auto"
              >
                <span className="flex items-center justify-center">
                  {tContent.buttons.next}
                  <svg
                    className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              {tContent.buttons.home}
            </Link>
          </div>
        </div>
      </div>

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
                  {tContent.footer.companyName}
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
                {tContent.footer.quickLinks}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {tContent.footer.home}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {tContent.footer.programs}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {tContent.footer.people}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/philosophy"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {tContent.footer.opportunities}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {tContent.footer.contact}
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
                  <span
                    dangerouslySetInnerHTML={{
                      __html: tContent.footer.address,
                    }}
                  />
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
                  <span>{tContent.footer.phone}</span>
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
                  <span>{tContent.footer.email}</span>
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
                  {tContent.footer.copyright.replace(
                    "{year}",
                    new Date().getFullYear(),
                  )}
                </p>
              </div>
              <div className="flex flex-wrap justify-center space-x-6 text-sm">
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {tContent.footer.privacy}
                </a>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {tContent.footer.terms}
                </a>
                <a
                  href="/sitemap"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {tContent.footer.sitemap}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactStep2;
