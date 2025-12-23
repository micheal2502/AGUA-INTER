import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const [buttonScale, setButtonScale] = useState(1);

  // Animation states
  const [leftTextVisible, setLeftTextVisible] = useState(false);
  const [rightTextVisible, setRightTextVisible] = useState(false);
  const [centerLogoVisible, setCenterLogoVisible] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState(false);

  // Animation sequence
  useEffect(() => {
    const sequence = [
      { time: 300, action: () => setSectionsVisible(true) },
      { time: 600, action: () => setLeftTextVisible(true) },
      { time: 900, action: () => setCenterLogoVisible(true) },
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

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out ${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Container with 5 Vertical Sections */}
      <div className="absolute inset-0 flex pointer-events-none">
        {[1, 2, 3, 4, 5].map((section) => (
          <div
            key={section}
            className={`w-1/5 h-full transition-all duration-1000 ease-out delay-${section * 100} ${
              sectionsVisible 
                ? "border-l border-r border-white/15" 
                : "border-l border-r border-transparent"
            }`}
          >
            <div className={`h-full w-full relative ${
              sectionsVisible 
                ? "border-r border-white/10" 
                : "border-r border-transparent"
            }`}>
              {/* Enhanced corner accents on middle section */}
              {section === 3 && (
                <>
                  <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/30 transition-all duration-1500 ease-out ${sectionsVisible ? "opacity-100" : "opacity-0"}`}></div>
                  <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-300/30 transition-all duration-1500 ease-out ${sectionsVisible ? "opacity-100" : "opacity-0"}`}></div>
                  <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-300/30 transition-all duration-1500 ease-out ${sectionsVisible ? "opacity-100" : "opacity-0"}`}></div>
                  <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-300/30 transition-all duration-1500 ease-out ${sectionsVisible ? "opacity-100" : "opacity-0"}`}></div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Luxury decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Geometric corner designs */}
        <div className={`absolute top-16 left-16 w-10 h-10 transition-all duration-2000 ease-out ${sectionsVisible ? "opacity-40" : "opacity-0"}`}>
          <div className="w-full h-full border border-white/20 rotate-45"></div>
          <div className="absolute inset-3 border border-white/10 rotate-45"></div>
        </div>
        
        <div className={`absolute top-16 right-16 w-10 h-10 transition-all duration-2000 ease-out delay-200 ${sectionsVisible ? "opacity-40" : "opacity-0"}`}>
          <div className="w-full h-full border border-cyan-300/20 rotate-45"></div>
          <div className="absolute inset-3 border border-cyan-300/10 rotate-45"></div>
        </div>
        
        <div className={`absolute bottom-16 left-16 w-10 h-10 transition-all duration-2000 ease-out delay-400 ${sectionsVisible ? "opacity-40" : "opacity-0"}`}>
          <div className="w-full h-full border border-blue-300/20 rotate-45"></div>
          <div className="absolute inset-3 border border-blue-300/10 rotate-45"></div>
        </div>
        
        <div className={`absolute bottom-16 right-16 w-10 h-10 transition-all duration-2000 ease-out delay-600 ${sectionsVisible ? "opacity-40" : "opacity-0"}`}>
          <div className="w-full h-full border border-cyan-300/20 rotate-45"></div>
          <div className="absolute inset-3 border border-cyan-300/10 rotate-45"></div>
        </div>

        {/* Floating geometric shapes */}
        <div className={`absolute top-1/4 left-1/4 transition-all duration-3000 ease-in-out ${centerLogoVisible ? "opacity-25" : "opacity-0"}`}>
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rotate-45 border border-blue-300/10"></div>
            <div className="absolute inset-3 bg-gradient-to-br from-blue-300/10 to-transparent rotate-45 border border-blue-300/5"></div>
          </div>
        </div>

        <div className={`absolute bottom-1/4 right-1/4 transition-all duration-3000 ease-in-out delay-1000 ${centerLogoVisible ? "opacity-20" : "opacity-0"}`}>
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-transparent rotate-45 border border-cyan-300/10"></div>
            <div className="absolute inset-2 bg-gradient-to-tr from-cyan-300/10 to-transparent rotate-45 border border-cyan-300/5"></div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-cyan-500/20 via-cyan-400/10 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
        
        {/* Additional luxury layers */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/[0.015] to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.008] to-transparent"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-400/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-cyan-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
        {/* Content with logo and text */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full mb-8 md:mb-16 px-4 sm:px-6 lg:px-8">
          {/* Logo Column */}
          <div className="w-full md:w-1/2 flex justify-center mb-6 sm:mb-8 md:mb-0 md:pr-6 lg:pr-12">
            <div
              className={`transition-all duration-1000 ease-out ${centerLogoVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"} w-full max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-md`}
            >
              <div className="relative w-full aspect-square">
                {/* Luxury frame around logo */}
                <div className={`absolute -inset-4 sm:-inset-6 md:-inset-8 border-2 border-white/20 rounded-full transition-all duration-2000 ease-out delay-300 ${centerLogoVisible ? "opacity-40" : "opacity-0"}`}></div>
                <div className={`absolute -inset-6 sm:-inset-8 md:-inset-10 border border-cyan-300/25 rounded-full transition-all duration-2500 ease-out delay-500 ${centerLogoVisible ? "opacity-30" : "opacity-0"}`}></div>
                
                <div
                  className={`transition-all duration-1500 ease-out ${centerLogoVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"} w-full h-full relative`}
                >
                  <img
                    src="images/landing.png"
                    alt="Agua Logo"
                    className="w-full h-full object-contain relative z-10 "
                    style={{
                      filter: "drop-shadow(0 8px 32px rgba(59, 130, 246, 0.5))",
                    }}
                  />
                  
                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-cyan-400/20 rounded-full blur-xl"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-full blur-sm"></div>
                </div>

                {/* Geometric accents around logo */}
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-300/50 to-transparent rotate-45 transition-all duration-2000 ease-out delay-700 ${centerLogoVisible ? "opacity-100" : "opacity-0"}`}></div>
                <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-tr from-cyan-300/50 to-transparent rotate-45 transition-all duration-2000 ease-out delay-800 ${centerLogoVisible ? "opacity-100" : "opacity-0"}`}></div>
                <div className={`absolute top-1/2 -left-3 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-cyan-300/50 to-transparent rotate-45 transition-all duration-2000 ease-out delay-900 ${centerLogoVisible ? "opacity-100" : "opacity-0"}`}></div>
                <div className={`absolute top-1/2 -right-3 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-bl from-blue-300/50 to-transparent rotate-45 transition-all duration-2000 ease-out delay-1000 ${centerLogoVisible ? "opacity-100" : "opacity-0"}`}></div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-0 md:pl-6 lg:pl-12">
            <div
              className={`relative transition-all duration-1000 ease-out transform ${leftTextVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              {/* Luxury text styling */}
              <div className="relative">
                <div
                  className={`transition-all text-white duration-1000 ease-out delay-300 ${rightTextVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                >
                  <h1 className="landing-text text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.5rem] 2xl:text-[5rem] font-light text-white/95 leading-tight md:leading-none tracking-tight">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                      AGUA International Education
                    </span>
                  </h1>
                </div>
                
                {/* Elegant divider line */}
                <div
                  className={`h-[1px] w-16 sm:w-24 md:w-32 mt-3 md:mt-2 mx-auto md:mx-0 bg-gradient-to-r from-transparent via-blue-300/60 to-transparent transition-all duration-1200 ease-out delay-500 ${centerLogoVisible ? "opacity-100" : "opacity-0"}`}
                ></div>
              </div>

              {/* Tagline with refined styling */}
              <div
                className={`mt-3 sm:mt-4 md:mt-3 lg:mt-4 transition-all duration-1000 ease-out delay-700 ${rightTextVisible ? "opacity-90 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <p className="landing-text text-sm sm:text-base md:text-lg text-white/85 italic max-w-full md:max-w-md font-light tracking-wide">
                  <span className="bg-gradient-to-r from-blue-100/90 via-white to-cyan-100/90 bg-clip-text text-transparent">
                    Forging futures through guided discovery
                  </span>
                </p>
                {/* Geometric dots */}
                <div className="flex items-center gap-1.5 mt-2 justify-center md:justify-start">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 bg-gradient-to-br from-blue-300/70 to-cyan-300/70 rounded transition-all duration-500 ease-out delay-${800 + i * 100} ${rightTextVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Luxury separator */}
        <div
          className={`flex justify-center my-12 w-full transition-all duration-1000 ease-out ${centerLogoVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="h-px w-40 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"></div>
          <div className="relative mx-8">
            <div className="text-3xl text-blue-300/70 font-light animate-pulse-slow">✦</div>
            <div className="absolute inset-0 text-3xl text-white/30 blur-sm animate-pulse">✦</div>
            <div className="absolute inset-2 text-2xl text-cyan-300/30 blur animate-pulse-slower">✦</div>
          </div>
          <div className="h-px w-40 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"></div>
        </div>

        {/* Luxury Button */}
        <div
          className={`landing-text flex justify-center w-full transition-all duration-1000 ease-out ${rightTextVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
        >
          <button
            onClick={handleDiscoverClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ transform: `scale(${buttonScale})` }}
            className={`landing-text bg-white text-[#0974B6] px-16 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 relative group overflow-hidden border border-white/30`}
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            
            {/* Button inner glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-100/20 to-cyan-100/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <span className="relative z-10 flex items-center justify-center gap-4">
              <span className="text-xl font-semibold tracking-wider">
                Discover More
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Luxury footer */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${rightTextVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>
            <span className="text-xs tracking-[0.3em] text-white/80 font-light uppercase">
              Agua International Education
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"></div>
          </div>
          <div className="text-[10px] tracking-widest text-white/50 font-light flex items-center gap-2">
            <div className="w-1 h-1 bg-blue-300/50 rounded-full"></div>
            <span>EXCELLENCE IN EDUCATION</span>
            <div className="w-1 h-1 bg-cyan-300/50 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Enhanced corner elements */}
      <div className={`absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-blue-300/40 transition-all duration-1500 ease-out z-20 ${centerLogoVisible ? "opacity-100" : "opacity-0"}`}>
        <div className={`absolute -top-1.5 -left-1.5 w-3 h-3 bg-gradient-to-br from-blue-300/70 to-transparent rotate-45 transition-all duration-2000 ease-out ${centerLogoVisible ? "opacity-100" : "opacity-0"}`}></div>
      </div>
      
      <div className={`absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-cyan-300/40 transition-all duration-1500 ease-out z-20 ${centerLogoVisible ? "opacity-100" : "opacity-0"}`}>
        <div className={`absolute -top-1.5 -right-1.5 w-3 h-3 bg-gradient-to-bl from-cyan-300/70 to-transparent rotate-45 transition-all duration-2000 ease-out delay-200 ${centerLogoVisible ? "opacity-100" : "opacity-0"}`}></div>
      </div>
      
      <div className={`absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-blue-300/40 transition-all duration-1500 ease-out z-20 ${rightTextVisible ? "opacity-100" : "opacity-0"}`}>
        <div className={`absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-gradient-to-tr from-blue-300/70 to-transparent rotate-45 transition-all duration-2000 ease-out delay-400 ${rightTextVisible ? "opacity-100" : "opacity-0"}`}></div>
      </div>
      
      <div className={`absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-cyan-300/40 transition-all duration-1500 ease-out z-20 ${rightTextVisible ? "opacity-100" : "opacity-0"}`}>
        <div className={`absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-gradient-to-tl from-cyan-300/70 to-transparent rotate-45 transition-all duration-2000 ease-out delay-600 ${rightTextVisible ? "opacity-100" : "opacity-0"}`}></div>
      </div>

      {/* Add CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
      `}</style>
    </div>
  );
};

export default Landing;