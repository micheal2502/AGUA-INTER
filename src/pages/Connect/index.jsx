import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const ContactInfoForm = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    currentSchool: "",
    age: "",
    studyGoal: "",
    futureGoal: [],
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
      progressStatus: "Hoàn thành 1/4 bước",

      steps: [
        { number: 1, label: "Thông tin cơ bản" },
        { number: 2, label: "Quan điểm giáo dục" },
        { number: 3, label: "Nhu cầu học tập" },
        { number: 4, label: "Hoàn tất" },
      ],

      currentStep: 1,
      activeStep: 1,

      sectionTitle: "01/ Làn sóng khởi đầu",
      sectionSubtitle: "Thông tin cơ bản",
      sectionDescription:
        "Mỗi chia sẻ, mỗi thông tin là một nhịp điệu, một hòa âm cộng hưởng tạo lên cơn sóng, giúp AGUA hiểu rõ hơn về gia đình và định hướng học tập trong tương lai của con, để hành trình sắp tới được khởi đầu thật êm và đúng hướng",

      formLabels: {
        parentName: "Họ và tên phụ huynh",
        studentName: "Họ và tên học sinh",
        currentSchool: "Nơi học hiện tại của học sinh",
        age: "Độ tuổi học sinh",
        studyGoal: "Mục tiêu học tập trong 1-3 năm tới",
      },

      placeholders: {
        parentName: "Nhập họ và tên của bạn",
        studentName: "Nhập họ và tên học sinh",
        currentSchool: "Nhập tên trường và thành phố",
        age: "Chọn độ tuổi",
      },

      ageOptions: [
        "Dưới 6 tuổi",
        "6-10 tuổi",
        "11-14 tuổi",
        "15-18 tuổi",
        "19-22 tuổi",
        "23-30 tuổi",
        "Trên 30 tuổi",
      ],

      goalOptions: [
        "Học vui vẻ và thành công bản thân",
        "Định hướng nghề nghiệp rõ ràng",
        "Chuẩn bị hồ sơ xin học bổng",
        "Phát triển kỹ năng sống và tư duy",
        "Khác...",
      ],

      buttons: {
        next: "Tiếp theo",
        back: "Quay lại trang chủ",
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
      progressStatus: "Completed 1/4 steps",

      steps: [
        { number: 1, label: "Basic Information" },
        { number: 2, label: "Educational Philosophy" },
        { number: 3, label: "Learning Needs" },
        { number: 4, label: "Completion" },
      ],

      currentStep: 1,
      activeStep: 1,

      sectionTitle: "01/ Starting Waves",
      sectionSubtitle: "Basic Information",
      sectionDescription:
        "Each share, each piece of information is a rhythm, a harmony that creates a wave, helping AGUA better understand your family and your child's future learning orientation, so that the upcoming journey can start smoothly and in the right direction",

      formLabels: {
        parentName: "Parent's Full Name",
        studentName: "Student's Full Name",
        currentSchool: "Student's Current School",
        age: "Student's Age",
        studyGoal: "Learning Goals for the Next 1-3 Years",
      },

      placeholders: {
        parentName: "Enter your full name",
        studentName: "Enter student's full name",
        currentSchool: "Enter school name and city",
        age: "Select age",
      },

      ageOptions: [
        "Under 6 years old",
        "6-10 years old",
        "11-14 years old",
        "15-18 years old",
        "19-22 years old",
        "23-30 years old",
        "Over 30 years old",
      ],

      goalOptions: [
        "Happy learning and personal success",
        "Clear career orientation",
        "Preparing scholarship applications",
        "Developing life skills and thinking",
        "Other...",
      ],

      buttons: {
        next: "Next Step",
        back: "Back to Home",
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

  const handleGoalChange = (goal) => {
    setFormData((prev) => {
      const newGoals = prev.futureGoal.includes(goal)
        ? prev.futureGoal.filter((g) => g !== goal)
        : [...prev.futureGoal, goal];
      return {
        ...prev,
        futureGoal: newGoals,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    localStorage.setItem("contactInfo", JSON.stringify(formData));
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
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 w-1/4"></div>
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
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-200"></div>

            <div className="relative flex justify-between items-center">
              {/* Step 1 - Active */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-3"></div>
                <span className="text-sm font-semibold text-blue-600">
                  {tContent.steps[0].label}
                </span>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-3 h-3 rounded-full bg-gray-300 mb-3"></div>
                <span className="text-sm font-medium text-gray-500">
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
          {/* Form Container - No border */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 md:p-8"
          >
            {/* Grid 2 columns - Parent and Student occupy 2/3 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Column 1: Parent name - occupies 2/3 */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  {tContent.formLabels.parentName}
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-gray-400"
                  placeholder={tContent.placeholders.parentName}
                />
              </div>

              {/* Column 2: Student name - occupies 1/3 */}
              <div className="lg:col-span-1">
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  {tContent.formLabels.studentName}
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-gray-400"
                  placeholder={tContent.placeholders.studentName}
                />
              </div>
            </div>

            {/* Grid 2 columns for remaining fields */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Current School */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  {tContent.formLabels.currentSchool}
                </label>
                <input
                  type="text"
                  name="currentSchool"
                  value={formData.currentSchool}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-gray-400"
                  placeholder={tContent.placeholders.currentSchool}
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  {tContent.formLabels.age}
                </label>
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-gray-800 appearance-none"
                >
                  <option value="">{tContent.placeholders.age}</option>
                  {tContent.ageOptions.map((age, index) => (
                    <option key={index} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Study Goals - Full width */}
            <div className="mt-8">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                {tContent.formLabels.studyGoal}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tContent.goalOptions.map((goal, index) => (
                  <label
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.futureGoal.includes(goal)}
                      onChange={() => handleGoalChange(goal)}
                      className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 focus:ring-offset-0"
                    />
                    <span className="ml-3 text-gray-700 flex-1">{goal}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <div className="mt-12 flex justify-center">
              <button
                type="submit"
                className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-16 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl"
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
              {tContent.buttons.back}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoForm;
