
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const fullText = "For Today's Europeans";
  
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
    }, 100);
    
    return () => {
      clearTimeout(timer);
      clearInterval(typeInterval);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 py-24 min-h-[90vh] flex items-center">
      {/* Enhanced subtle grid background */}
      <div className="absolute inset-0 bg-grid-lines bg-[length:30px_30px] opacity-[0.04]"></div>
      
      {/* Refined gradient orbs */}
      <div className="absolute top-1/4 right-[10%] w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-[5%] w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      
      {/* Enhanced circular element */}
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 opacity-20">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-pink-500/30 animate-spin-slow"></div>
        <div className="absolute inset-8 rounded-full border border-purple-500/20 animate-spin-slow [animation-direction:reverse]"></div>
        <div className="absolute inset-16 rounded-full border border-blue-400/10 animate-spin-slow [animation-duration:10s]"></div>
      </div>
      
      {/* European chart visualization */}
      <div className="absolute top-[15%] right-[18%] w-72 h-48 opacity-30 hidden lg:block">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <path d="M0,50 C20,30 40,70 60,50 C80,30 100,60 120,50 C140,40 160,80 180,50 C200,20 220,70 240,50" 
                fill="none" 
                stroke="#EC4899" 
                strokeWidth="2"
                className="animate-draw-path"/>
          <path d="M0,60 C20,40 40,80 60,60 C80,40 100,70 120,60 C140,50 160,90 180,60" 
                fill="none" 
                stroke="#8B5CF6" 
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
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 mr-3 shadow-sm">
                  <span className="h-3 w-3 rounded-full bg-pink-500 animate-pulse"></span>
                </span>
                <span className="text-sm font-medium uppercase tracking-wider text-pink-600">European Investment Platform</span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl md:leading-tight">
                <span 
                  className={`block text-gray-800 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  Sophisticated Investing
                </span>
                <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent mt-3 overflow-hidden h-[1.2em]">
                  {typingText}
                  <span className={`animate-pulse inline-block w-1 h-[1em] bg-pink-500 ml-1 align-middle ${typingComplete ? 'opacity-0' : 'opacity-100'}`}></span>
                </span>
              </h1>
              
              <p 
                className={`mt-6 text-base text-gray-600 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                Combining intelligent AI algorithms with expert human analysis to optimize your investment potential in Europe's dynamic markets.
              </p>
              
              <div 
                className={`mt-10 flex justify-center lg:justify-start gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-md px-8 py-6 text-base font-medium shadow-md relative overflow-hidden button-hover group"
                  onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="relative z-10 flex items-center">
                    Start Investing
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="rounded-md px-8 py-6 text-base font-medium border-pink-500 text-pink-500 hover:bg-pink-500/5 shadow-sm"
                  onClick={() => document.getElementById('ai-assistant')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Try AI Assistant
                </Button>
              </div>
            </div>
          </main>

          {/* Enhanced stats floating cards */}
          <div 
            className={`hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 space-y-7 w-72 transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
          >
            <div className="glass-card p-5 animate-float [animation-delay:0ms] shadow-lg border border-pink-100">
              <div className="text-sm font-medium text-gray-500">Annual Returns</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">+16.4%</div>
              <div className="text-xs text-gray-400 mt-1">Average for European portfolios</div>
            </div>
            
            <div className="glass-card p-5 animate-float [animation-delay:1000ms] shadow-lg border border-pink-100">
              <div className="text-sm font-medium text-gray-500">Algorithm Precision</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">94.2%</div>
              <div className="text-xs text-gray-400 mt-1">European market prediction accuracy</div>
            </div>
            
            <div className="glass-card p-5 animate-float [animation-delay:2000ms] shadow-lg border border-pink-100">
              <div className="text-sm font-medium text-gray-500">Client Satisfaction</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">98.7%</div>
              <div className="text-xs text-gray-400 mt-1">Across 18 European countries</div>
            </div>
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
