import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const ContactStep4 = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    happyLearnerDefinition: "",
    parentRole: "",
    joinMeetings: "",
    pressureFreeLearning: "",
    changeLearning: "",
  });

  // Translations
  const translations = {
    vi: {
      heroTitle: "Đồng hành cùng con tới thành công",
      heroSubtitle:
        "Cùng xây dựng nền tảng vững chắc cho hành trình học tập hạnh phúc",
      processFeatures: [
        "Đồng hành lâu dài",
        "Phương pháp cá nhân hóa",
        "Học tập hạnh phúc",
      ],

      progressTitle: "Tiến trình của bạn",
      progressStatus: "Hoàn thành 4/4 bước",

      steps: [
        { number: 1, label: "Thông tin cơ bản" },
        { number: 2, label: "Quan điểm giáo dục" },
        { number: 3, label: "Nhu cầu học tập" },
        { number: 4, label: "Đồng hành" },
      ],

      currentStep: 4,
      activeStep: 4,

      sectionTitle: "04 / Nhịp sóng sâu đồng hành",
      sectionSubtitle: "Phong cách đồng hành & giá trị phù hợp",
      sectionDescription:
        "Khi hành trình đã đi qua những đợt sóng lớn, đây là lúc chúng ta lắng lại để hiểu rõ hơn cách anh/chị mong muốn đồng hành cùng con và cùng AGUA kiến tạo một không gian học tập hạnh phúc, bền vững.",

      questions: {
        q1: "Theo anh/chị, thế nào là một 'người học hạnh phúc'?",
        q2: "Vai trò của anh/chị trong hành trình học của con là gì?",
        q3: "Anh/chị có sẵn sàng tham gia các buổi chia sẻ phụ huynh - mentor định kỳ không?",
        q4: "Anh/chị nghĩ gì về môi trường học không áp lực điểm số?",
        q5: "Điều gì khiến bạn tin tưởng AGUA có thể đồng hành cùng gia đình?",
      },

      helperTexts: {
        q1: "Chia sẻ định nghĩa của bạn...",
        q5: "Chia sẻ kỳ vọng của bạn về sự hợp tác...",
      },

      placeholders: {
        q1: "Định nghĩa của bạn về một người học hạnh phúc...",
        q5: "Những điều bạn tin tưởng và mong đợi từ sự đồng hành của AGUA...",
      },

      parentRoleOptions: [
        "Người giám sát",
        "Người đồng hành",
        "Người trao quyền cho con",
        "Người hỗ trợ",
        "Người định hướng",
      ],

      joinMeetingOptions: [
        "Chắc chắn sẽ tham gia",
        "Cân nhắc việc tham gia",
        "Không tham gia",
        "Tham gia nếu phù hợp lịch",
      ],

      pressureFreeOptions: [
        "Rất ủng hộ",
        "Cân nhắc nếu vẫn đảm bảo kết quả",
        "Chưa rõ có phù hợp",
        "Không ủng hộ",
      ],

      buttons: {
        back: "Quay lại",
        submit: "Hoàn tất đăng ký",
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
      heroTitle: "Accompanying Your Child to Success",
      heroSubtitle:
        "Together building a solid foundation for a happy learning journey",
      processFeatures: [
        "Long-term companionship",
        "Personalized methods",
        "Happy learning",
      ],

      progressTitle: "Your Progress",
      progressStatus: "Completed 4/4 steps",

      steps: [
        { number: 1, label: "Basic Information" },
        { number: 2, label: "Educational Philosophy" },
        { number: 3, label: "Learning Needs" },
        { number: 4, label: "Companionship" },
      ],

      currentStep: 4,
      activeStep: 4,

      sectionTitle: "04 / Deep Companion Waves",
      sectionSubtitle: "Companionship Style & Suitable Values",
      sectionDescription:
        "When the journey has passed through the big waves, this is the time for us to calm down to better understand how you want to accompany your child and work with AGUA to create a happy, sustainable learning space.",

      questions: {
        q1: "In your opinion, what is a 'happy learner'?",
        q2: "What is your role in your child's learning journey?",
        q3: "Are you willing to participate in regular parent-mentor sharing sessions?",
        q4: "What do you think about a pressure-free learning environment without grade pressure?",
        q5: "What makes you trust that AGUA can accompany your family?",
      },

      helperTexts: {
        q1: "Share your definition...",
        q5: "Share your expectations about the collaboration...",
      },

      placeholders: {
        q1: "Your definition of a happy learner...",
        q5: "What you trust and expect from AGUA's companionship...",
      },

      parentRoleOptions: [
        "Supervisor",
        "Companion",
        "Empowerer for child",
        "Supporter",
        "Guide",
      ],

      joinMeetingOptions: [
        "Will definitely participate",
        "Considering participation",
        "Will not participate",
        "Participate if schedule fits",
      ],

      pressureFreeOptions: [
        "Strongly support",
        "Consider if results are still ensured",
        "Unsure if suitable",
        "Do not support",
      ],

      buttons: {
        back: "Back",
        submit: "Complete Registration",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Step 4 data:", formData);

    // Get data from previous steps
    const existingData = JSON.parse(
      localStorage.getItem("contactInfo") || "{}",
    );

    // Merge data
    const allData = { ...existingData, ...formData };
    localStorage.setItem("contactInfo", JSON.stringify(allData));

    // Navigate to completion page (UPDATED)
    navigate("/contact/complete");
  };

  const handleBack = () => {
    navigate("/contact/step3");
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
                  {/* Progress line - Completed 100% */}
                  <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 w-full"></div>
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
                          // Future step (shouldn't happen here as we're at step 4)
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

              {/* Step 2 - Completed */}
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
                  {tContent.steps[1].label}
                </span>
              </div>

              {/* Step 3 - Completed */}
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
                  {tContent.steps[2].label}
                </span>
              </div>

              {/* Step 4 - Active */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-3"></div>
                <span className="text-sm font-semibold text-blue-600">
                  {tContent.steps[3].label}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-left">
            {/* Main title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {tContent.sectionTitle}
            </h1>

            {/* Sub-description */}
            <p className="text-xl font-medium text-blue-600 mb-6">
              {tContent.sectionSubtitle}
            </p>

            {/* Description paragraph */}
            <div className="max-w-4xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
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
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
          >
            {/* Question 1: Happy learner definition */}
            <div className="mb-10">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                {tContent.questions.q1}
                <br />
                <span className="text-sm font-normal text-gray-500">
                  {tContent.helperTexts.q1}
                </span>
              </label>
              <textarea
                name="happyLearnerDefinition"
                value={formData.happyLearnerDefinition}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3.5 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-gray-800 resize-none"
                placeholder={tContent.placeholders.q1}
                required
              />
            </div>

            {/* Question 2: Parent role */}
            <div className="mb-10">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                {tContent.questions.q2}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tContent.parentRoleOptions.map((role, index) => (
                  <label
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="parentRole"
                      value={role}
                      checked={formData.parentRole === role}
                      onChange={handleChange}
                      className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                      required
                    />
                    <span className="ml-3 text-gray-700 flex-1">{role}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 3: Join meetings */}
            <div className="mb-10">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                {tContent.questions.q3}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tContent.joinMeetingOptions.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="joinMeetings"
                      value={option}
                      checked={formData.joinMeetings === option}
                      onChange={handleChange}
                      className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                      required
                    />
                    <span className="ml-3 text-gray-700 flex-1">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 4: Pressure-free learning */}
            <div className="mb-10">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                {tContent.questions.q4}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tContent.pressureFreeOptions.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="pressureFreeLearning"
                      value={option}
                      checked={formData.pressureFreeLearning === option}
                      onChange={handleChange}
                      className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                      required
                    />
                    <span className="ml-3 text-gray-700 flex-1">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 5: Trust in AGUA */}
            <div className="mb-10">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                {tContent.questions.q5}
                <br />
                <span className="text-sm font-normal text-gray-500">
                  {tContent.helperTexts.q5}
                </span>
              </label>
              <textarea
                name="changeLearning"
                value={formData.changeLearning}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3.5 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-gray-800 resize-none"
                placeholder={tContent.placeholders.q5}
              />
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
                  {tContent.buttons.submit}
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
                      d="M5 13l4 4L19 7"
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

export default ContactStep4;
