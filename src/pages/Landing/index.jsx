import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [buttonScale, setButtonScale] = useState(1);
  const [leftTextVisible, setLeftTextVisible] = useState(false);
  const [rightTextVisible, setRightTextVisible] = useState(false);
  const [counterVisible, setCounterVisible] = useState(false);

  // Transition states
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [circleSize, setCircleSize] = useState(0);
  const [contentOpacity, setContentOpacity] = useState(1);
  const [showCircle, setShowCircle] = useState(false);
  const [circleColor, setCircleColor] = useState("");

  // Count from 0 to 100 with logo fade-in
  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => {
        setCount(count + 1);

        // Gradually increase logo opacity as count progresses
        if (count >= 50) {
          setLogoOpacity((count - 50) / 50); // Fade in from 50-100
        }

        // Text fade-in timing
        if (count === 10) {
          setLeftTextVisible(true);
        }
        if (count === 15) {
          setCounterVisible(true);
        }
        if (count === 20) {
          setRightTextVisible(true);
        }
      }, 30);
      return () => clearTimeout(timer);
    } else {
      // Ensure everything is fully visible when count reaches 100
      setLogoOpacity(1);
      setLeftTextVisible(true);
      setRightTextVisible(true);
      setCounterVisible(true);
    }
  }, [count]);

  // Handle button click for transition
  const handleDiscoverClick = () => {
    // Set circle color to match background gradient
    setCircleColor("bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900");

    // Start transition sequence
    setIsTransitioning(true);

    // 1. Fade out all content
    setContentOpacity(0);

    // Small delay then show circle
    setTimeout(() => {
      setShowCircle(true);

      // 2. Create small filled circle
      setCircleSize(100);

      // 3. Expand circle to fill screen
      setTimeout(() => {
        setCircleSize(3000); // Large enough to cover screen

        // 4. Navigate to home page after circle fully expands
        setTimeout(() => {
          navigate("/home");
        }, 800);
      }, 300);
    }, 400);
  };

  // Button hover effect
  const handleMouseEnter = () => setButtonScale(1.05);
  const handleMouseLeave = () => setButtonScale(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center text-white p-4 overflow-hidden relative">
      {/* Transition Circle */}
      {showCircle && (
        <div
          className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full ${circleColor} transition-all duration-700 ease-out z-50`}
          style={{
            width: `${circleSize}px`,
            height: `${circleSize}px`,
            transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        ></div>
      )}

      {/* Animated background elements */}
      <div
        className="absolute inset-0 overflow-hidden transition-opacity duration-500"
        style={{ opacity: contentOpacity }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      {/* Logo with fade-in animation */}
      <div
        className={`absolute top-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${count >= 50 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        style={{ opacity: logoOpacity * contentOpacity }}
      >
        <div className="relative">
          <div className="text-center">
            <div className="font-['Cinzel'] text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent tracking-widest">
              AGUA
            </div>
            <div className="font-['Cormorant_Garamond'] text-lg md:text-xl text-gray-400 italic tracking-wider mt-2">
              International Education
            </div>
          </div>
          {/* Elegant underline */}
          <div className="h-px w-48 mx-auto mt-4 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Main content container - Full width with edge-to-edge layout */}
      <div
        className="relative z-10 w-full max-w-[95vw] mx-auto px-4 md:px-8 transition-opacity duration-500"
        style={{ opacity: contentOpacity }}
      >
        {/* Three column layout with extreme edge positioning */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          {/* Left Column - Pushed to far left with fade-in */}
          <div className="text-right md:w-[40%] md:pr-0 lg:pr-4 relative">
            <div
              className={`relative transition-all duration-1000 ease-out transform ${leftTextVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              {/* Decorative left element */}
              <div className="hidden md:block absolute -left-8 top-1/2 transform -translate-y-1/2">
                <div className="h-0.5 w-6 bg-gradient-to-l from-blue-400/40 to-transparent"></div>
              </div>

              <div className="font-['Cormorant_Garamond'] text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-light text-blue-100/90 h-32 flex items-center justify-end leading-tight">
                Forging futures
              </div>

              {/* Extended decorative line */}
              <div className="hidden md:flex absolute -right-20 top-1/2 transform -translate-y-1/2 items-center">
                <div className="text-3xl text-blue-400/50 mx-4 font-light">
                  |
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Counter with fade-in */}
          <div className="md:w-[20%] text-center my-12 md:my-0 relative min-w-[200px]">
            <div
              className={`transition-all duration-1000 ease-out ${counterVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              {/* Counter with tight spacing */}
              <div className="relative">
                <div className="font-['Cinzel'] text-8xl md:text-[8rem] lg:text-[9rem] font-bold text-white tracking-tighter relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-20 blur-lg rounded-lg"></div>
                  <span className="relative z-10">
                    {counterVisible ? count : 0}
                  </span>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-blue-300/80 text-xs md:text-sm uppercase tracking-[0.3em] whitespace-nowrap font-light">
                  through
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Pushed to far right with fade-in */}
          <div className="text-left md:w-[40%] md:pl-0 lg:pl-4 relative">
            <div
              className={`relative transition-all duration-1000 ease-out transform ${rightTextVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              {/* Extended decorative line */}
              <div className="hidden md:flex absolute -left-20 top-1/2 transform -translate-y-1/2 items-center">
                <div className="text-3xl text-cyan-400/50 mx-4 font-light">
                  |
                </div>
              </div>

              <div className="font-['Cormorant_Garamond'] text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-light text-cyan-100/90 h-32 flex items-center justify-start leading-tight">
                guided discovery
              </div>

              {/* Decorative right element */}
              <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                <div className="h-0.5 w-6 bg-gradient-to-r from-cyan-400/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal divider for mobile */}
        <div
          className={`md:hidden flex justify-center my-12 transition-all duration-1000 ease-out ${counterVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
          <div className="text-2xl text-blue-400/60 mx-6 font-light">✦</div>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
        </div>

        {/* Elegant Button */}
        <div
          className={`flex justify-center mt-32 transition-all duration-1000 ease-out ${count === 100 ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
        >
          <button
            onClick={handleDiscoverClick}
            disabled={isTransitioning}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ transform: `scale(${buttonScale})` }}
            className={`group relative bg-transparent border border-blue-400/30 text-white px-14 py-5 rounded-full font-light text-xl hover:shadow-2xl transition-all duration-500 tracking-widest overflow-hidden ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-cyan-800/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-full p-[1px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 rounded-full opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500"></div>
            </div>

            {/* Button content */}
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span className="font-['Cormorant_Garamond'] text-2xl font-medium tracking-widest">
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

            {/* Hover shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
              <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Footer text */}
      <div
        className={`absolute bottom-8 text-gray-500/70 text-sm font-['Cormorant_Garamond'] tracking-widest transition-all duration-1000 ease-out ${count === 100 ? "opacity-100" : "opacity-0"}`}
        style={{ opacity: contentOpacity }}
      >
        <div className="flex items-center gap-2">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-500/50"></div>
          <span className="animate-pulse">Agua International Education</span>
          <div className="h-px w-8 bg-gradient-to-r from-gray-500/50 to-transparent"></div>
        </div>
      </div>

      {/* Decorative corner elements - also fade in */}
      <div
        className={`absolute top-8 left-8 w-16 h-16 border-t border-l border-blue-400/20 transition-all duration-1500 ease-out ${counterVisible ? "opacity-100" : "opacity-0"}`}
        style={{ opacity: contentOpacity }}
      ></div>
      <div
        className={`absolute top-8 right-8 w-16 h-16 border-t border-r border-cyan-400/20 transition-all duration-1500 ease-out ${counterVisible ? "opacity-100" : "opacity-0"}`}
        style={{ opacity: contentOpacity }}
      ></div>
      <div
        className={`absolute bottom-8 left-8 w-16 h-16 border-b border-l border-blue-400/20 transition-all duration-1500 ease-out ${count === 100 ? "opacity-100" : "opacity-0"}`}
        style={{ opacity: contentOpacity }}
      ></div>
      <div
        className={`absolute bottom-8 right-8 w-16 h-16 border-b border-r border-cyan-400/20 transition-all duration-1500 ease-out ${count === 100 ? "opacity-100" : "opacity-0"}`}
        style={{ opacity: contentOpacity }}
      ></div>
    </div>
  );
};

export default Landing;
