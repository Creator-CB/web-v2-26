
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Bot, ChartLine, Shield, Headphones, EuroIcon, BarChart3, Star, Award, TrendingUp } from "lucide-react";
import { useLanguage } from './LanguageSelector';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();
  
  const opportunityTexts = [
    "+1000% Annual Returns",
    "Market-Beating Performance",
    "AI-Powered Wealth Growth"
  ];
  
  useEffect(() => {
    // Show content immediately without delay
    setIsVisible(true);
    
    // Rotate through opportunity texts
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % opportunityTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-12 pb-24 min-h-[90vh] flex items-center text-white">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 bg-grid-lines bg-[length:30px_30px] opacity-[0.05]"></div>
      
      {/* Enhanced gradient orbs with more vibrant colors */}
      <div className="absolute top-1/4 right-[10%] w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-[5%] w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      <div className="absolute top-1/3 left-[15%] w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse-slow animation-delay-2000"></div>
      
      {/* Enhanced circular element */}
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 opacity-30">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-500/50 animate-spin-slow"></div>
        <div className="absolute inset-8 rounded-full border border-blue-500/30 animate-spin-slow [animation-direction:reverse]"></div>
        <div className="absolute inset-16 rounded-full border border-purple-400/20 animate-spin-slow [animation-duration:10s]"></div>
      </div>
      
      {/* Bitcoin/crypto animated icon in background */}
      <div className="absolute top-[10%] left-[8%] opacity-20 animate-float">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 6.5V17.5M14.5 6.5V17.5M12 3.5V20.5M3.5 12H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </div>
      
      {/* Crypto chart visualization - enhanced with better animation */}
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
      
      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28">
          <main className="mt-0 mx-auto max-w-7xl px-4 sm:mt-4 sm:px-6 md:mt-8 lg:mt-12 lg:px-8 xl:mt-18">
            <div className="text-center lg:text-left">
              <div 
                className={`flex items-center justify-center lg:justify-start mb-4 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              >
                <Badge className="rounded-full bg-gradient-to-r from-amber-400/20 to-amber-500/30 text-amber-300 border-amber-600/20 px-3 py-1 text-xs sm:text-sm">
                  <EuroIcon className="h-4 w-4 mr-1" /> {t('investmentPlatform')} • <TrendingUp className="h-3 w-3 mx-1 text-green-400" /> {opportunityTexts[currentIndex]}
                </Badge>
              </div>
              
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block">Don't Just Invest.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 mt-3">Multiply Your Wealth.</span>
              </h1>
              
              <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Our AI-driven algorithm delivered <span className="text-green-400 font-bold">924.8% returns</span> last year when traditional markets struggled. Join thousands of investors who are already profiting.
              </p>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto lg:mx-0 lg:max-w-none">
                <div className="flex flex-col items-center lg:items-start p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-amber-500/40 hover:bg-white/10 transition-all duration-300">
                  <div className="p-3 rounded-full bg-amber-500/20 mb-4">
                    <Users className="h-8 w-8 text-amber-400" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-white">{t('personalBroker')}</h3>
                  <p className="text-gray-300 text-center lg:text-left">{t('personalBrokerDesc')}</p>
                </div>
                
                <div className="flex flex-col items-center lg:items-start p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="p-3 rounded-full bg-blue-500/20 mb-4">
                    <Bot className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-white">{t('aiAlgorithm')}</h3>
                  <p className="text-gray-300 text-center lg:text-left">{t('aiAlgorithmDesc')}</p>
                </div>
                
                <div className="flex flex-col items-center lg:items-start p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-green-500/40 hover:bg-white/10 transition-all duration-300">
                  <div className="p-3 rounded-full bg-green-500/20 mb-4">
                    <ChartLine className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-white">{t('fastGrowth')}</h3>
                  <p className="text-gray-300 text-center lg:text-left">{t('fastGrowthDesc')}</p>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center text-green-400 bg-green-900/30 rounded-full px-3 py-1 text-sm font-medium">
                  <Shield className="h-4 w-4 mr-1" />
                  <span>{t('secure')}</span>
                </div>
                <div className="flex items-center text-blue-400 bg-blue-900/30 rounded-full px-3 py-1 text-sm font-medium">
                  <Headphones className="h-4 w-4 mr-1" />
                  <span>{t('support')}</span>
                </div>
                <div className="hidden sm:flex items-center text-amber-400 bg-amber-900/30 rounded-full px-3 py-1 text-sm font-medium">
                  <Award className="h-4 w-4 mr-1" />
                  <span>Award-winning</span>
                </div>
              </div>
              
              {/* Limited time offer banner - removed stat cards */}
              <div className="mt-8 bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-500/20 rounded-md p-3 max-w-2xl mx-auto lg:mx-0">
                <div className="flex items-center">
                  <span className="animate-pulse text-amber-300">⚡</span>
                  <p className="ml-2 text-sm font-medium text-amber-300">
                    Limited offer: Start investing today and get a <span className="font-bold">100% bonus on your first deposit!</span> on your first investment
                  </p>
                </div>
              </div>
              
              <div 
                className={`mt-8 flex justify-center lg:justify-start gap-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-md px-8 py-6 text-base font-medium shadow-md relative overflow-hidden button-hover group"
                  onClick={() => document.getElementById('investment-packages')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="relative z-10 flex items-center">
                    <EuroIcon className="mr-2 h-5 w-5" />
                    {t('startNow')}
                  </span>
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="rounded-md px-8 py-6 text-base font-medium border-amber-400/30 text-amber-400 hover:bg-amber-500/10 shadow-sm"
                  onClick={() => document.getElementById('ai-assistant')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('bookCall')}
                </Button>
              </div>

              <div className={`mt-8 text-sm text-gray-400 flex items-center justify-center lg:justify-start gap-5 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1 text-gray-500" />
                  {t('regulated')}
                </div>
                <div className="flex items-center">
                  <EuroIcon className="h-4 w-4 mr-1 text-gray-500" />
                  {t('insured')}
                </div>
              </div>
            </div>
          </main>

          {/* Removed the stat cards that were here */}

          {/* Active investors counter with increased visibility */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md shadow-lg rounded-full px-6 py-3 flex items-center gap-3 border border-amber-500/30">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="font-medium text-gray-300">{t('activeInvestors')}: <span className="text-amber-400">783</span> <span className="text-gray-500 text-xs">investing now</span></span>
          </div>
        </div>
      </div>
      
      {/* Bottom wave shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#0f172a" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
