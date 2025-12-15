import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const [buttonScale, setButtonScale] = useState(1);

  // Animation states
  const [leftTextVisible, setLeftTextVisible] = useState(false);
  const [rightTextVisible, setRightTextVisible] = useState(false);
  const [centerLogoVisible, setCenterLogoVisible] = useState(false);
  const [aguaTextVisible, setAguaTextVisible] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState(false);

  // Animation sequence
  useEffect(() => {
    const sequence = [
      { time: 300, action: () => setSectionsVisible(true) },
      { time: 600, action: () => setLeftTextVisible(true) },
      { time: 900, action: () => setCenterLogoVisible(true) },
      { time: 1000, action: () => setAguaTextVisible(true) },
      { time: 1200, action: () => setRightTextVisible(true) },
    ];

    sequence.forEach(({ time, action }) => {
      setTimeout(action, time);
    });
  }, []);

  // Handle button click
  const handleDiscoverClick = () => {
    navigate("/home");
  };

  // Button hover effect
  const handleMouseEnter = () => setButtonScale(1.05);
  const handleMouseLeave = () => setButtonScale(1);

  return (
    <div className="min-h-screen bg-[#0974B6] flex flex-col items-center justify-center text-white p-4 overflow-hidden relative">
      {/* Main Container with 5 Vertical Sections */}
      <div className="absolute inset-0 flex pointer-events-none">
        {/* Section 1 - Left 20% */}
        <div
          className={`w-1/5 h-full transition-all duration-1000 ease-out ${sectionsVisible ? "border-l border-r border-gray-300/30" : "border-l border-r border-transparent"}`}
        >
          <div
            className={`h-full w-full ${sectionsVisible ? "border-r border-gray-300/20" : "border-r border-transparent"}`}
          ></div>
        </div>

        {/* Section 2 - Next 20% */}
        <div
          className={`w-1/5 h-full transition-all duration-1000 ease-out delay-100 ${sectionsVisible ? "border-r border-gray-300/30" : "border-r border-transparent"}`}
        >
          <div
            className={`h-full w-full ${sectionsVisible ? "border-l border-gray-300/20 border-r border-gray-300/20" : "border-l border-transparent border-r border-transparent"}`}
          ></div>
        </div>

        {/* Section 3 - Middle 20% (contains main content) */}
        <div
          className={`w-1/5 h-full transition-all duration-1000 ease-out delay-200 ${sectionsVisible ? "border-l border-gray-300/40 border-r border-gray-300/40" : "border-l border-transparent border-r border-transparent"}`}
        >
          <div className="h-full w-full relative">
            {/* Decorative corner for this section */}
            <div
              className={`absolute top-0 left-0 w-4 h-4 border-t border-l border-gray-300/40 transition-all duration-1500 ease-out ${sectionsVisible ? "opacity-100" : "opacity-0"}`}
            ></div>
            <div
              className={`absolute top-0 right-0 w-4 h-4 border-t border-r border-gray-300/40 transition-all duration-1500 ease-out ${sectionsVisible ? "opacity-100" : "opacity-0"}`}
            ></div>
            <div
              className={`absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gray-300/40 transition-all duration-1500 ease-out ${sectionsVisible ? "opacity-100" : "opacity-0"}`}
            ></div>
            <div
              className={`absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gray-300/40 transition-all duration-1500 ease-out ${sectionsVisible ? "opacity-100" : "opacity-0"}`}
            ></div>
          </div>
        </div>

        {/* Section 4 - Next 20% */}
        <div
          className={`w-1/5 h-full transition-all duration-1000 ease-out delay-300 ${sectionsVisible ? "border-l border-gray-300/30" : "border-l border-transparent"}`}
        >
          <div
            className={`h-full w-full ${sectionsVisible ? "border-l border-gray-300/20 border-r border-gray-300/20" : "border-l border-transparent border-r border-transparent"}`}
          ></div>
        </div>

        {/* Section 5 - Right 20% */}
        <div
          className={`w-1/5 h-full transition-all duration-1000 ease-out delay-400 ${sectionsVisible ? "border-l border-gray-300/30 border-r border-gray-300/30" : "border-l border-transparent border-r border-transparent"}`}
        >
          <div
            className={`h-full w-full ${sectionsVisible ? "border-l border-gray-300/20" : "border-l border-transparent"}`}
          ></div>
        </div>
      </div>

      {/* Horizontal dividers for visual grid */}
      <div
        className={`absolute inset-0 flex flex-col justify-between pointer-events-none transition-all duration-1500 ease-out ${sectionsVisible ? "opacity-10" : "opacity-0"}`}
      >
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300/30 to-transparent mt-[25%]"></div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300/30 to-transparent mt-[50%]"></div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300/30 to-transparent mt-[75%]"></div>
      </div>

      {/* Additional floating elements to fill space */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left decorative elements */}
        <div
          className={`absolute top-20 left-20 transition-all duration-1500 ease-out ${sectionsVisible ? "opacity-20" : "opacity-0"}`}
        >
          <div className="w-6 h-6 border border-blue-300/20 rotate-45"></div>
        </div>

        {/* Top right decorative elements */}
        <div
          className={`absolute top-24 right-24 transition-all duration-1500 ease-out delay-300 ${sectionsVisible ? "opacity-20" : "opacity-0"}`}
        >
          <div className="w-4 h-4 border border-cyan-300/20 rotate-45"></div>
        </div>

        {/* Bottom left decorative elements */}
        <div
          className={`absolute bottom-28 left-32 transition-all duration-1500 ease-out delay-500 ${sectionsVisible ? "opacity-15" : "opacity-0"}`}
        >
          <div className="w-5 h-5 border border-blue-300/15 rotate-45"></div>
        </div>

        {/* Bottom right decorative elements */}
        <div
          className={`absolute bottom-32 right-28 transition-all duration-1500 ease-out delay-700 ${sectionsVisible ? "opacity-15" : "opacity-0"}`}
        >
          <div className="w-3 h-3 border border-cyan-300/15 rotate-45"></div>
        </div>

        {/* Center decorative dots */}
        <div
          className={`absolute top-1/3 left-1/3 transition-all duration-1500 ease-out delay-400 ${sectionsVisible ? "opacity-10" : "opacity-0"}`}
        >
          <div className="w-2 h-2 bg-blue-300/30 rounded-full"></div>
        </div>
        <div
          className={`absolute bottom-1/3 right-1/3 transition-all duration-1500 ease-out delay-600 ${sectionsVisible ? "opacity-10" : "opacity-0"}`}
        >
          <div className="w-2 h-2 bg-cyan-300/30 rounded-full"></div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slower"></div>
        {/* Additional subtle background elements */}
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-blue-400/3 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-1/3 w-40 h-40 bg-cyan-400/3 rounded-full blur-2xl animate-pulse-slower"></div>
      </div>

      {/* Main content container - Centered layout */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
        {/* Centered content with logo left, text right */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full mb-16">
          {/* Logo Column - Left side */}
          <div className="md:w-1/2 flex justify-center md:justify-end mb-12 md:mb-0 md:pr-12">
            <div
              className={`transition-all duration-1000 ease-out ${centerLogoVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              {/* Logo container */}
              <div className="relative">
                {/* Logo image with fade-in animation */}
                <div
                  className={`transition-all duration-1500 ease-out ${centerLogoVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                >
                  <img
                    src="images/landing.png"
                    alt="Agua Logo"
                    className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
                    style={{
                      filter: "drop-shadow(0 4px 20px rgba(59, 130, 246, 0.3))",
                    }}
                  />
                </div>

                {/* Subtle pulse animation */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-cyan-400/5 animate-pulse-slow transition-all duration-1000 ease-out ${centerLogoVisible ? "opacity-30" : "opacity-0"}`}
                ></div>

                {/* Decorative rings around logo */}
                <div
                  className={`absolute -inset-4 rounded-full border border-blue-300/10 transition-all duration-2000 ease-out delay-300 ${centerLogoVisible ? "opacity-50" : "opacity-0"}`}
                ></div>
                <div
                  className={`absolute -inset-6 rounded-full border border-cyan-300/5 transition-all duration-2500 ease-out delay-500 ${centerLogoVisible ? "opacity-30" : "opacity-0"}`}
                ></div>
              </div>
            </div>
          </div>

          {/* Text Column - Right side */}
          <div className="md:w-1/2 text-left md:pl-12">
            <div
              className={`relative transition-all duration-1000 ease-out transform ${leftTextVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >

              {/* International Education - Extra large text */}
              <div
                className={`mt-1 transition-all text-white duration-1000 ease-out delay-300 ${rightTextVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              >
                <div className="landing-text text-5xl md:text-6xl lg:text-[4rem] xl:text-[6rem] font-light text-white/90 leading-none">
                  AGUA International Education
                </div>
              </div>

              {/* Decorative line - closer to text */}
              <div
                className={`h-px w-32 mt-2 bg-gradient-to-r from-blue-400/40 to-transparent transition-all duration-1200 ease-out delay-500 ${centerLogoVisible ? "opacity-100" : "opacity-0"}`}
              ></div>

              {/* Subtle tagline */}
              <div
                className={`mt-4 transition-all duration-1000 ease-out delay-700 ${rightTextVisible ? "opacity-70 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <div className="landing-text text-lg text-white/80 italic max-w-md">
                  Forging futures through guided discovery
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative connector line between logo and text */}
        <div
          className={`hidden md:block absolute left-1/2 top-1/2 transform -translate-y-1/2 transition-all duration-1500 ease-out delay-800 ${centerLogoVisible ? "opacity-20" : "opacity-0"}`}
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent"></div>
        </div>

        {/* Elegant Button - Centered */}
        <div
          className={`landing-text flex justify-center w-full transition-all duration-1000 ease-out ${rightTextVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
        >
          <button
            onClick={handleDiscoverClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ transform: `scale(${buttonScale})` }}
            className={`landing-text bg-white text-[#0974B6] px-14 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative group`}
          >
            {/* Button content */}
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span className="text-2xl font-medium tracking-widest">
                Discover More
              </span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            {/* Button glow effect */}
            <span className="absolute inset-0 rounded-full bg-white/20 blur-xl group-hover:opacity-30 transition-opacity duration-300 opacity-0"></span>
          </button>
        </div>
        {/* Horizontal divider - centered */}
        <div
          className={`flex justify-center my-12 w-full transition-all duration-1000 ease-out ${centerLogoVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
          <div className="text-2xl text-blue-400/60 mx-6 font-light">✦</div>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
        </div>
      </div>

      {/* Footer text - Centered */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500/70 text-sm tracking-widest transition-all duration-1000 ease-out ${rightTextVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex items-center gap-2">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-500/50"></div>
          <span className="animate-pulse">Agua International Education</span>
          <div className="h-px w-8 bg-gradient-to-r from-gray-500/50 to-transparent"></div>
        </div>
      </div>

      {/* Decorative corner elements - also fade in */}
      <div
        className={`absolute top-8 left-8 w-16 h-16 border-t border-l border-blue-400/20 transition-all duration-1500 ease-out z-20 ${centerLogoVisible ? "opacity-100" : "opacity-0"}`}
      ></div>
      <div
        className={`absolute top-8 right-8 w-16 h-16 border-t border-r border-cyan-400/20 transition-all duration-1500 ease-out z-20 ${centerLogoVisible ? "opacity-100" : "opacity-0"}`}
      ></div>
      <div
        className={`absolute bottom-8 left-8 w-16 h-16 border-b border-l border-blue-400/20 transition-all duration-1500 ease-out z-20 ${rightTextVisible ? "opacity-100" : "opacity-0"}`}
      ></div>
      <div
        className={`absolute bottom-8 right-8 w-16 h-16 border-b border-r border-cyan-400/20 transition-all duration-1500 ease-out z-20 ${rightTextVisible ? "opacity-100" : "opacity-0"}`}
      ></div>
    </div>
  );
};

export default Landing;
