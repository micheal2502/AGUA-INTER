import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const ContactStep3 = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    oneYearGoals: [],
    challenges: "",
    mentorHelp: "",
    programPriorities: [],
    changeLearning: "",
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
      progressStatus: "Hoàn thành 3/4 bước",

      steps: [
        { number: 1, label: "Thông tin cơ bản" },
        { number: 2, label: "Quan điểm giáo dục" },
        { number: 3, label: "Nhu cầu học tập" },
        { number: 4, label: "Hoàn tất" },
      ],

      currentStep: 3,
      activeStep: 3,

      sectionTitle: "03 / Nhịp sóng hiện tại",
      sectionSubtitle: "Nhu cầu & mong muốn hiện tại",
      sectionDescription:
        "Giữa hành trình ra khơi, mỗi gia đình đều mang trong mình những ngọn sóng riêng, là mong muốn, kỳ vọng và những thử thách đang cùng con chuyển động. Hãy cùng AGUA nhìn rõ nhịp sóng ấy, để hành trình phía trước luôn được cân bằng giữa mục tiêu và niềm vui học tập.",

      questions: {
        q1: "Anh/chị mong con đạt được điều gì trong 1 năm tới?",
        q2: "Theo anh/chị, điều gì đang cản trở con đạt được điều đó?",
        q3: "Anh/chị mong đợi mentor sẽ giúp con ở khía cạnh nào nhất?",
        q4: "Khi lựa chọn chương trình học, anh/chị quan tâm nhất điều gì?",
        q5: "Nếu có thể thay đổi một điều trong cách con đang học, anh/chị muốn thay đổi điều gì nhất?",
      },

      helperTexts: {
        challenges: "Chia sẻ những thách thức hiện tại...",
        mentorHelp: "Mô tả kỳ vọng của bạn...",
        changeLearning: "Chia sẻ điều bạn muốn thay đổi...",
      },

      placeholders: {
        challenges: "Mô tả những khó khăn, thách thức con đang gặp phải...",
        mentorHelp: "Những điều bạn mong đợi từ mentor sẽ giúp con...",
        changeLearning:
          "Điều bạn mong muốn thay đổi nhất trong phương pháp học của con...",
      },

      oneYearGoalsOptions: [
        "Tự tin và yêu thích học tập hơn",
        "Xác định định hướng học tập hoặc nghề nghiệp",
        "Rèn luyện kỹ năng mềm",
        "Cải thiện điểm / chứng chỉ quốc tế",
        "Xây dựng hồ sơ du học / học bổng",
        "Khác...",
      ],

      programPriorityOptions: [
        "Mentor có chuyên môn & đồng hành thật sự",
        "Kết quả rõ ràng (Điểm số, học bổng)",
        "Sự kết nối cùng phụ huynh",
        "Chương trình cá nhân hóa, phù hợp với từng cá tính con",
        "Hành trình học tập vui vẻ & bền vững",
        "Khác...",
      ],

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
      progressStatus: "Completed 3/4 steps",

      steps: [
        { number: 1, label: "Basic Information" },
        { number: 2, label: "Educational Philosophy" },
        { number: 3, label: "Learning Needs" },
        { number: 4, label: "Completion" },
      ],

      currentStep: 3,
      activeStep: 3,

      sectionTitle: "03 / Current Rhythm Waves",
      sectionSubtitle: "Current Needs & Desires",
      sectionDescription:
        "In the midst of the journey out to sea, each family carries their own unique waves - desires, expectations, and challenges that move with their children. Let AGUA help you see these rhythms clearly, so that the journey ahead is always balanced between goals and the joy of learning.",

      questions: {
        q1: "What do you hope your child achieves in the next year?",
        q2: "In your opinion, what is currently preventing your child from achieving that?",
        q3: "What aspect do you most expect a mentor to help your child with?",
        q4: "When choosing a learning program, what do you care about most?",
        q5: "If you could change one thing about how your child is currently learning, what would you change most?",
      },

      helperTexts: {
        challenges: "Share current challenges...",
        mentorHelp: "Describe your expectations...",
        changeLearning: "Share what you want to change...",
      },

      placeholders: {
        challenges:
          "Describe the difficulties and challenges your child is facing...",
        mentorHelp: "What you expect from a mentor to help your child...",
        changeLearning:
          "What you most want to change about your child's learning method...",
      },

      oneYearGoalsOptions: [
        "More confident and enjoying learning",
        "Determining study or career direction",
        "Practicing soft skills",
        "Improving grades / international certificates",
        "Building study abroad / scholarship profiles",
        "Other...",
      ],

      programPriorityOptions: [
        "Professional mentor & real companionship",
        "Clear results (Grades, scholarships)",
        "Connection with parents",
        "Personalized program, suitable for each child's personality",
        "Joyful & sustainable learning journey",
        "Other...",
      ],

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

  const handleGoalChange = (goal) => {
    setFormData((prev) => {
      const newGoals = prev.oneYearGoals.includes(goal)
        ? prev.oneYearGoals.filter((g) => g !== goal)
        : [...prev.oneYearGoals, goal];
      return {
        ...prev,
        oneYearGoals: newGoals,
      };
    });
  };

  const handlePriorityChange = (priority) => {
    setFormData((prev) => {
      const newPriorities = prev.programPriorities.includes(priority)
        ? prev.programPriorities.filter((p) => p !== priority)
        : [...prev.programPriorities, priority];
      return {
        ...prev,
        programPriorities: newPriorities,
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
    console.log("Step 3 data:", formData);

    // Get data from previous steps
    const step1Data = JSON.parse(localStorage.getItem("contactInfo") || "{}");

    // Merge data
    const allData = { ...step1Data, ...formData };
    localStorage.setItem("contactInfo", JSON.stringify(allData));

    // Navigate to final step
    navigate("/connect/complete");
  };

  const handleBack = () => {
    navigate("/connect/step2");
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
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 w-3/4"></div>
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

              {/* Step 3 - Active */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-3"></div>
                <span className="text-sm font-semibold text-blue-600">
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
            {/* Question 1: 1-year goals */}
            <div className="mb-10">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                {tContent.questions.q1}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tContent.oneYearGoalsOptions.map((goal, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-4 rounded-xl border transition-all cursor-pointer ${
                      formData.oneYearGoals.includes(goal)
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.oneYearGoals.includes(goal)}
                      onChange={() => handleGoalChange(goal)}
                      className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700 flex-1">{goal}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 2: Challenges */}
            <div className="mb-10">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                {tContent.questions.q2}
                <br />
                <span className="text-sm font-normal text-gray-500">
                  {tContent.helperTexts.challenges}
                </span>
              </label>
              <textarea
                name="challenges"
                value={formData.challenges}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3.5 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-gray-800 resize-none"
                placeholder={tContent.placeholders.challenges}
              />
            </div>

            {/* Question 3: Mentor help */}
            <div className="mb-10">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                {tContent.questions.q3}
                <br />
                <span className="text-sm font-normal text-gray-500">
                  {tContent.helperTexts.mentorHelp}
                </span>
              </label>
              <textarea
                name="mentorHelp"
                value={formData.mentorHelp}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3.5 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-gray-800 resize-none"
                placeholder={tContent.placeholders.mentorHelp}
              />
            </div>

            {/* Question 4: Program priorities */}
            <div className="mb-10">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                {tContent.questions.q4}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tContent.programPriorityOptions.map((priority, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-4 rounded-xl border transition-all cursor-pointer ${
                      formData.programPriorities.includes(priority)
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.programPriorities.includes(priority)}
                      onChange={() => handlePriorityChange(priority)}
                      className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700 flex-1">
                      {priority}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 5: Change learning */}
            <div className="mb-10">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                {tContent.questions.q5}
                <br />
                <span className="text-sm font-normal text-gray-500">
                  {tContent.helperTexts.changeLearning}
                </span>
              </label>
              <textarea
                name="changeLearning"
                value={formData.changeLearning}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3.5 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-gray-800 resize-none"
                placeholder={tContent.placeholders.changeLearning}
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
    </div>
  );
};

export default ContactStep3;
