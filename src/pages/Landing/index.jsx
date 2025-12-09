import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing relative overflow-hidden">
      {/* 5 vertical gray lines with fade */}
      <div className="absolute inset-0 flex justify-between px-[10%] pointer-events-none mask-fade">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-px bg-gray-400 opacity-40"></div>
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
        {/* Logo + Text container */}
        <div className="flex items-center justify-center w-[90%] sm:w-[75%] md:w-[50%] lg:w-[40%]">
          {/* Logo */}
          <img
            src="/images/logo2.png"
            alt="AGUAEDU Logo"
            className="w-40 sm:w-56 md:w-72 lg:w-100"
          />

          {/* Text stacked vertically */}
          <div className="text-left leading-tight">
            <h1 className="text-6xl sm:text-4xl md:text-[12rem] font-extrabold">
              AGUA
            </h1>
            <h2 className="text-2xl sm:text-2xl md:text-8xl font-light">
              International
            </h2>
            <h2 className="text-2xl sm:text-2xl md:text-8xl font-light">
              Education
            </h2>
          </div>
        </div>

        {/* Button below */}
        <div className="py-20">
                  <button 
  className="bg-gradient-to-r from-[#ffffff] to-[#267bb4] text-white px-12 py-4 rounded-full font-semibold hover:scale-110 hover:shadow-[0_0_30px_rgba(13,104,165,0.5)] transition-all duration-300 shadow-lg"
  onClick={() => navigate("/home")}
>
  Discover More
</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
