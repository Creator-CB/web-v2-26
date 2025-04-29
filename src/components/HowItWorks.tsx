
import React from 'react';
import { PieChart, CircleCheck, Brain, ArrowRight, LineChart } from "lucide-react";
import { useLanguage } from './LanguageSelector';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <PieChart className="h-10 w-10 text-white" />,
      title: t("aiConsultation"),
      description: t("aiConsultationDesc"),
      color: "bg-gradient-to-r from-pink-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=90&w=400&h=300",
    },
    {
      icon: <Brain className="h-10 w-10 text-white" />,
      title: t("portfolioAnalysis"),
      description: t("portfolioAnalysisDesc"),
      color: "bg-gradient-to-r from-purple-500 to-blue-400",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=90&w=400&h=300"
    },
    {
      icon: <CircleCheck className="h-10 w-10 text-white" />,
      title: t("accountSetup"),
      description: t("accountSetupDesc"),
      color: "bg-gradient-to-r from-blue-400 to-cyan-300",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=90&w=400&h=300"
    },
    {
      icon: <LineChart className="h-10 w-10 text-white" />,
      title: t("expertReview"),
      description: t("expertReviewDesc"),
      color: "bg-gradient-to-r from-pink-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=90&w=400&h=300"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden bg-white py-24">
      {/* Enhanced subtle patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 px-3 py-1 mb-4 shadow-sm">
            <span className="text-sm font-medium uppercase tracking-wider text-pink-600">{t("ourProcess")}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500">{t("howPlatformWorks")}</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {t("sophisticatedApproach")}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="relative">
          {/* Improved connection line that goes through the middle */}
          <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500/30 via-purple-500/40 to-blue-400/30 hidden md:block" style={{transform: 'translateY(-50%)'}}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center group relative">
                {/* Improved step indicators */}
                <div className="relative z-20">
                  <div className={`${step.color} rounded-full p-5 mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 relative transform group-hover:scale-105`}>
                    {step.icon}
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center text-pink-500 font-bold shadow-md text-sm border border-gray-50">
                      {index + 1}
                    </span>
                  </div>
                  
                  <div className="mt-4 w-full max-w-[280px] bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Add connecting dots for the steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-28 z-10">
                    <div className="w-4 h-4 rounded-full bg-white border-2 border-pink-500 shadow-md"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block">
            <a 
              href="#register" 
              className="relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <span className="relative z-10">{t("startJourney")}</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
            </a>
          </div>
          
          <div className="mt-12 p-6 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-xl border border-pink-500/10 max-w-3xl mx-auto">
            <h4 className="text-lg font-semibold mb-3 text-gray-800">{t("pathToGrowth")}</h4>
            <p className="text-gray-600">
              {t("continuousSupport")}
            </p>
            <div className="mt-4 flex justify-center">
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">{t("startInvesting")}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">{t("setupTime")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
