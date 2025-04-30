
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Robot, ChartLine, Shield, Headphones, EuroIcon } from "lucide-react";
import { useLanguage } from './LanguageSelector';
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const { t } = useLanguage();
  const fullText = t("combineHumanAI");
  
  useEffect(() => {
    // Show content with a slight delay for better loading effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    // Typing animation effect
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
  }, [fullText]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 py-24 min-h-[90vh] flex items-center">
      {/* Enhanced subtle grid background */}
      <div className="absolute inset-0 bg-grid-lines bg-[length:30px_30px] opacity-[0.04]"></div>
      
      {/* Refined gradient orbs */}
      <div className="absolute top-1/4 right-[10%] w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-[5%] w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      
      {/* Enhanced circular element */}
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 opacity-20">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 animate-spin-slow"></div>
        <div className="absolute inset-8 rounded-full border border-purple-500/20 animate-spin-slow [animation-direction:reverse]"></div>
        <div className="absolute inset-16 rounded-full border border-orange-400/10 animate-spin-slow [animation-duration:10s]"></div>
      </div>
      
      {/* Crypto chart visualization */}
      <div className="absolute top-[15%] right-[18%] w-72 h-48 opacity-30 hidden lg:block">
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
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center lg:text-left">
              <div 
                className={`flex items-center justify-center lg:justify-start mb-6 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              >
                <Badge className="rounded-full bg-gradient-to-r from-amber-400/10 to-amber-500/20 text-amber-600 border-amber-200 px-3 py-1">
                  <EuroIcon className="h-4 w-4 mr-1" /> {t("investmentPlatform")}
                </Badge>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl md:leading-tight">
                <span 
                  className={`block text-gray-800 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  Ogni utente ha il proprio broker personale e strategie AI per guadagni rapidi
                </span>
                <span className="block text-base font-normal mt-2 text-gray-600">Each user gets a personal broker and AI strategies for fast income</span>
                <span className="block bg-gradient-to-r from-orange-500 via-amber-500 to-blue-400 bg-clip-text text-transparent mt-4 overflow-hidden h-[1.2em]">
                  {typingText}
                  <span className={`animate-pulse inline-block w-1 h-[1em] bg-orange-500 ml-1 align-middle ${typingComplete ? 'opacity-0' : 'opacity-100'}`}></span>
                </span>
                <span className="block text-base font-normal mt-2 text-gray-600">We combine human and artificial intelligence to grow your wealth.</span>
              </h1>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto lg:mx-0 lg:max-w-none">
                <div className="flex flex-col items-center lg:items-start p-5 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                  <div className="p-2 rounded-full bg-amber-100">
                    <Users className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-bold mt-3 text-gray-800">Personal Broker</h3>
                  <p className="text-sm text-gray-600 text-center lg:text-left">Dedicated expert to guide your investment journey</p>
                </div>
                
                <div className="flex flex-col items-center lg:items-start p-5 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                  <div className="p-2 rounded-full bg-blue-100">
                    <Robot className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold mt-3 text-gray-800">AI Algorithm</h3>
                  <p className="text-sm text-gray-600 text-center lg:text-left">Intelligent trading strategies to maximize returns</p>
                </div>
                
                <div className="flex flex-col items-center lg:items-start p-5 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                  <div className="p-2 rounded-full bg-green-100">
                    <ChartLine className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-bold mt-3 text-gray-800">Fast Growth</h3>
                  <p className="text-sm text-gray-600 text-center lg:text-left">Automated bot for quick and consistent profits</p>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center text-green-600 bg-green-50 rounded-full px-3 py-1 text-sm font-medium">
                  <Shield className="h-4 w-4 mr-1" />
                  <span>Secure & Compliant</span>
                </div>
                <div className="flex items-center text-blue-600 bg-blue-50 rounded-full px-3 py-1 text-sm font-medium">
                  <Headphones className="h-4 w-4 mr-1" />
                  <span>24/7 Support</span>
                </div>
              </div>
              
              <div 
                className={`mt-8 flex justify-center lg:justify-start gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-md px-8 py-6 text-base font-medium shadow-md relative overflow-hidden button-hover group"
                  onClick={() => document.getElementById('investment-packages')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="relative z-10 flex items-center">
                    <EuroIcon className="mr-2 h-5 w-5" />
                    Inizia con 270 €
                  </span>
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="rounded-md px-8 py-6 text-base font-medium border-amber-500 text-amber-500 hover:bg-amber-500/5 shadow-sm"
                  onClick={() => document.getElementById('ai-assistant')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Parla con il tuo broker personale
                </Button>
              </div>

              <div className={`mt-10 text-sm text-gray-500 flex items-center justify-center lg:justify-start gap-5 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1 text-gray-400" />
                  {t("regulatedPlatform")}
                </div>
                <div className="flex items-center">
                  <EuroIcon className="h-4 w-4 mr-1 text-gray-400" />
                  {t("cryptoInsured")}
                </div>
              </div>
            </div>
          </main>

          {/* Enhanced stats floating cards */}
          <div 
            className={`hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 space-y-7 w-72 transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
          >
            <div className="glass-card p-5 animate-float shadow-lg border border-blue-100 bg-white/90 backdrop-blur-md z-10 relative">
              <div className="text-sm font-medium text-gray-500">{t("annualReturns")}</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">+24.8%</div>
              <div className="text-xs text-gray-400 mt-1">{t("averageCryptoReturns")}</div>
            </div>
            
            <div className="glass-card p-5 animate-float [animation-delay:1000ms] shadow-lg border border-blue-100 bg-white/90 backdrop-blur-md z-10 relative">
              <div className="text-sm font-medium text-gray-500">{t("algorithmPrecision")}</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">93.5%</div>
              <div className="text-xs text-gray-400 mt-1">{t("cryptoMarketPrediction")}</div>
            </div>
            
            <div className="glass-card p-5 animate-float [animation-delay:2000ms] shadow-lg border border-blue-100 bg-white/90 backdrop-blur-md z-10 relative">
              <div className="text-sm font-medium text-gray-500">{t("clientSatisfaction")}</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">98.2%</div>
              <div className="text-xs text-gray-400 mt-1">{t("globalCryptoInvestors")}</div>
            </div>
          </div>

          {/* Active investors counter */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md shadow-lg rounded-full px-6 py-3 flex items-center gap-3 border border-gray-100">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="font-medium">{t("activeInvestors")}: <span className="text-amber-500">783</span></span>
          </div>
        </div>
      </div>
      
      {/* Bottom wave shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
