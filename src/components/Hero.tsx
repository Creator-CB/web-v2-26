import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Bot, ChartLine, Shield, Headphones, EuroIcon } from "lucide-react";
import { useLanguage } from './LanguageSelector';
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    const fullText = t('title');
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setTypingComplete(true);
      }
    }, 50);
    
    return () => {
      clearTimeout(timer);
      clearInterval(typeInterval);
    };
  }, [t]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 py-24 min-h-[90vh] flex items-center text-white">
      {/* ... background visuals unchanged ... */}

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center lg:text-left">

              {/* ✅ NEW COOL TITLE ADDED BELOW */}
              <h2 className="text-lg sm:text-xl text-gray-400 font-semibold mb-2">
                🚀 AI-Powered Investing Made Simple
              </h2>

              <div 
                className={`flex items-center justify-center lg:justify-start mb-6 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              >
                <Badge className="rounded-full bg-gradient-to-r from-amber-400/20 to-amber-500/30 text-amber-300 border-amber-600/20 px-3 py-1">
                  <EuroIcon className="h-4 w-4 mr-1" /> {t('investmentPlatform')}
                </Badge>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl md:leading-tight">
                <span 
                  className={`block text-gradient bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  {typingText}
                  <span className={`animate-pulse inline-block w-1 h-[1em] bg-amber-500 ml-1 align-middle ${typingComplete ? 'opacity-0' : 'opacity-100'}`}></span>
                </span>
                <span className="block text-xl font-normal mt-6 text-gray-300">
                  {t('subheadline')}
                </span>
              </h1>

              {/* ... rest of your component remains unchanged ... */}

            </div>
          </main>

          {/* ... floating cards and wave shape unchanged ... */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
