
import React from 'react';
import { PieChart, Users, CircleCheck, ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from './LanguageSelector';
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <MessageCircle className="h-10 w-10 text-white" />,
      title: t("personalBrokerConsultation"),
      description: t("personalBrokerConsultationDesc"),
      color: "bg-gradient-to-r from-invest-purple to-invest-blue",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=90&w=400&h=300",
      highlight: true
    },
    {
      icon: <PieChart className="h-10 w-10 text-white" />,
      title: t("investmentStrategy"),
      description: t("investmentStrategyDesc"),
      color: "bg-gradient-to-r from-blue-500 to-cyan-400",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=90&w=400&h=300"
    },
    {
      icon: <CircleCheck className="h-10 w-10 text-white" />,
      title: t("portfolio"),
      description: t("portfolioDesc"),
      color: "bg-gradient-to-r from-cyan-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=90&w=400&h=300"
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: t("ongoingSupport"),
      description: t("ongoingSupportDesc"),
      color: "bg-gradient-to-r from-emerald-500 to-lime-500",
      image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=90&w=400&h=300"
    }
  ];

  return (
    <section id="how-it-works" className="bg-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background pattern */}
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
          <div className="inline-flex items-center justify-center rounded-full bg-invest-purple/10 px-3 py-1 mb-4 shadow-sm">
            <span className="text-sm font-medium uppercase tracking-wider text-invest-purple">{t("ourProcess")}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 sm:text-5xl mb-4">
            {t("howItWorks")}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t("personalBrokerApproach")}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-invest-purple to-invest-blue rounded-full"></div>
          </div>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-invest-purple/30 via-invest-blue/40 to-cyan-400/30 hidden lg:block" style={{transform: 'translateY(-50%)'}}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center group relative">
                {/* Step indicator */}
                <div className="relative z-20">
                  <div className={`${step.color} rounded-full p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 ${step.highlight ? 'ring-4 ring-invest-purple/20' : ''}`}>
                    {step.icon}
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center text-invest-purple font-bold shadow-md text-sm border border-gray-50">
                      {index + 1}
                    </span>
                  </div>
                  
                  <div className={`mt-6 w-full max-w-[300px] bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 ${step.highlight ? 'ring-2 ring-invest-purple/20' : ''}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-600 text-lg">{step.description}</p>
                      {step.highlight && (
                        <div className="mt-4 inline-block">
                          <span className="text-invest-purple font-semibold text-sm flex items-center">
                            {t("learnMore")} 
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Connecting dots */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-20 z-10">
                    <div className="w-4 h-4 rounded-full bg-white border-2 border-invest-purple shadow-md"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("readyToStart")}</h3>
            <p className="text-lg text-gray-600 mb-8">{t("personalBrokerWaiting")}</p>
          </div>
          
          <Button 
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            className="bg-gradient-to-r from-invest-purple to-invest-blue hover:from-invest-purple/90 hover:to-invest-blue/90 text-white px-8 py-6 text-lg rounded-full shadow-md hover:shadow-lg group"
          >
            {t("meetYourBroker")}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-invest-purple rounded-full mr-2"></div>
                <span className="text-gray-600">{t("freeConsultation")}</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-invest-blue rounded-full mr-2"></div>
                <span className="text-gray-600">{t("noObligations")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
