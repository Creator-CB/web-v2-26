
import React from 'react';

const HeroBackground = () => {
  return (
    <>
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-lines bg-[length:20px_20px] sm:bg-[length:30px_30px] opacity-[0.05]"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-[5%] sm:right-[10%] w-48 h-48 sm:w-80 sm:h-80 bg-amber-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-[2%] sm:left-[5%] w-32 h-32 sm:w-64 sm:h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      <div className="absolute top-1/3 left-[10%] sm:left-[15%] w-24 h-24 sm:w-40 sm:h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse-slow animation-delay-2000"></div>
      
      {/* Circular element */}
      <div className="absolute bottom-[10%] right-[5%] w-48 h-48 sm:w-96 sm:h-96 opacity-20 sm:opacity-30 hidden sm:block">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-500/50 animate-spin-slow"></div>
        <div className="absolute inset-4 sm:inset-8 rounded-full border border-blue-500/30 animate-spin-slow [animation-direction:reverse]"></div>
        <div className="absolute inset-8 sm:inset-16 rounded-full border border-purple-400/20 animate-spin-slow [animation-duration:10s]"></div>
      </div>
      
      {/* Crypto chart visualization */}
      <div className="absolute top-[15%] right-[18%] w-72 h-48 opacity-40 hidden lg:block">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <path d="M0,80 C10,70 20,60 30,50 C40,70 50,20 60,30 C70,50 80,10 90,15 C100,30 110,5 120,20 C130,40 140,10 150,40 C160,30 170,60 180,50 C190,40 200,60 210,50" 
                fill="none" 
                stroke="#F59E0B" 
                strokeWidth="2"
                className="animate-draw-path"/>
          <path d="M0,60 C20,40 40,80 60,60 C80,40 100,70 120,60 C140,50 160,90 180,60" 
                fill="none" 
                stroke="#3B82F6" 
                strokeWidth="2"
                strokeDasharray="300"
                strokeDashoffset="300"
                className="animate-draw-path [animation-delay:500ms]"/>
        </svg>
      </div>

      {/* Bottom wave shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-16 sm:h-auto">
          <path fill="#0f172a" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </>
  );
};

export default HeroBackground;
