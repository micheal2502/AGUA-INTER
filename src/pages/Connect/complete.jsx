import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const ContactComplete = () => {
  const { language } = useLanguage();
  const location = useLocation();

  const translations = {
    vi: {
      title: "Đăng ký thành công!",
      subtitle: "Chào mừng đến với hành trình cùng AGUA",
      message:
        "Chúng tôi đã nhận được thông tin của bạn. Đội ngũ AGUA sẽ liên hệ trong vòng 24-48 giờ để xác nhận và tư vấn chi tiết về lộ trình phù hợp nhất cho con bạn.",
      nextSteps: [
        "Nhận email xác nhận và lịch hẹn tư vấn",
        "Chuẩn bị cho buổi gặp đầu tiên với mentor",
        "Bắt đầu hành trình học tập hạnh phúc",
      ],
      contactInfo: {
        title: "Thông tin liên lạc",
        email: "info@agua.edu.vn",
        phone: "+84 28 1234 5678",
        hours: "Thứ 2 - Thứ 6: 8:00 - 17:00",
      },
      buttons: {
        home: "Quay lại trang chủ",
        dashboard: "Xem dashboard của bạn",
        contact: "Liên hệ ngay",
      },
      quote: {
        text: "Mỗi đứa trẻ đều có nhịp điệu riêng. Chúng tôi ở đây để giúp con bạn tìm thấy giai điệu của riêng mình.",
        author: "AGUA Education Team",
      },
      footer: {
        companyName: "Agua International Education",
        copyright: `© ${new Date().getFullYear()} AGUA International Education. Tất cả thông tin được bảo mật.`,
      },
    },
    en: {
      title: "🎉 Registration Successful!",
      subtitle: "Welcome to the journey with AGUA",
      message:
        "We have received your information. The AGUA team will contact you within 24-48 hours to confirm and provide detailed consultation about the most suitable learning pathway for your child.",
      nextSteps: [
        "Receive confirmation email and consultation schedule",
        "Prepare for the first meeting with mentor",
        "Start your happy learning journey",
      ],
      contactInfo: {
        title: "Contact Information",
        email: "info@agua.edu.vn",
        phone: "+84 28 1234 5678",
        hours: "Monday - Friday: 8:00 AM - 5:00 PM",
      },
      buttons: {
        home: "Back to Home",
        dashboard: "View Your Dashboard",
        contact: "Contact Now",
      },
      quote: {
        text: "Every child has their own rhythm. We're here to help your child find their own melody.",
        author: "AGUA Education Team",
      },
      footer: {
        companyName: "Agua International Education",
        copyright: `© ${new Date().getFullYear()} AGUA International Education. All information is confidential.`,
      },
    },
  };

  const t =
    translations[language === "vie" ? "vi" : language] || translations.vi;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Confetti animation background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-6 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full animate-confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Success Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 py-12 px-8 text-center">
            <div className="inline-block p-6 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <svg
                className="w-20 h-20 text-white"
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
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-blue-100">{t.subtitle}</p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Success Message */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
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
              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                {t.message}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Next Steps */}
              <div className="lg:col-span-2 space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {language === "vi" ? "Những bước tiếp theo" : "Next Steps"}
                </h3>
                <div className="space-y-4">
                  {t.nextSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-gray-700 group-hover:text-blue-600 transition-colors">
                          {step}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg
                          className="w-5 h-5 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  {t.contactInfo.title}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-600"
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
                    </div>
                    <span className="text-gray-700">{t.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-600"
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
                    </div>
                    <span className="text-gray-700">{t.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{t.contactInfo.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inspirational Quote */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-12 text-center">
              <blockquote className="max-w-2xl mx-auto">
                <p className="text-2xl text-gray-800 italic mb-4">
                  "{t.quote.text}"
                </p>
                <cite className="text-gray-600">— {t.quote.author}</cite>
              </blockquote>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/"
                className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                {t.buttons.home}
              </Link>

              <Link
                to="/contact"
                className="group flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                {t.buttons.contact}
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <img
              src="/images/logo2.png"
              alt="AGUA Logo"
              className="h-8 w-auto mr-3"
            />
            <span className="text-lg font-semibold text-gray-800">
              {t.footer.companyName}
            </span>
          </div>
          <p className="text-gray-600 text-sm">{t.footer.copyright}</p>
        </footer>
      </div>

      {/* Add CSS for confetti animation */}
      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactComplete;
