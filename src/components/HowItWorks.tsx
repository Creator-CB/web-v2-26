
import React from 'react';
import { Bot, CircleCheck, CircleDollarSign, Brain } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Bot className="h-10 w-10 text-white" />,
      title: "AI Consultation",
      description: "Engage with our intelligent assistant to explore investment options tailored to European markets.",
      color: "bg-invest-purple",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400"
    },
    {
      icon: <Brain className="h-10 w-10 text-white" />,
      title: "Portfolio Analysis",
      description: "Our AI analyzes your investment preferences and generates a customized European strategy.",
      color: "bg-invest-blue",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400"
    },
    {
      icon: <CircleCheck className="h-10 w-10 text-white" />,
      title: "Account Setup",
      description: "Complete your profile with our streamlined registration process for European investors.",
      color: "bg-invest-cyan",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400"
    },
    {
      icon: <CircleDollarSign className="h-10 w-10 text-white" />,
      title: "Expert Review",
      description: "Speak with our local investment advisors who specialize in your regional market.",
      color: "bg-invest-purple",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden bg-white">
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
          <div className="inline-flex items-center justify-center rounded-full bg-invest-purple/10 px-3 py-1 mb-4 shadow-sm">
            <span className="text-sm font-medium uppercase tracking-wider text-invest-purple">Our Process</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-2">How Our Platform Works</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            A sophisticated approach to European investing
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-invest-purple to-invest-blue rounded-full"></div>
          </div>
        </div>
        
        <div className="relative">
          {/* Enhanced connection line */}
          <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r from-invest-purple/20 via-invest-blue/30 to-invest-purple/20 rounded-full hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="relative">
                  <div className={`${step.color} rounded-full p-5 mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 z-10 relative`}>
                    {step.icon}
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white flex items-center justify-center text-invest-purple font-bold shadow-md text-sm border border-gray-50">
                      {index + 1}
                    </span>
                  </div>
                  
                  <div className="mt-4 w-full max-w-[250px] bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-32 object-cover object-center"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block">
            <a 
              href="#register" 
              className="relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-invest-purple to-invest-blue text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="relative z-10">Start your investment journey today</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
