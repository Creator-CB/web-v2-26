
import React, { useState } from 'react';
import { ArrowRight, Calendar, MessageCircle, Briefcase, ChartLine, Shield } from "lucide-react";
import { useLanguage } from './LanguageSelector';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "consultation",
      icon: <MessageCircle className="h-6 w-6" />,
      title: t("personalConsultation"),
      description: t("personalConsultationDesc") || "Our expert brokers provide one-on-one consultations to understand your financial goals, risk tolerance, and investment preferences.",
      color: "from-invest-purple to-blue-500",
      image: "https://images.unsplash.com/photo-1565843714144-d5a3292ae82d?auto=format&fit=crop&q=90&w=1000"
    },
    {
      id: "strategy",
      icon: <Briefcase className="h-6 w-6" />,
      title: t("customStrategy"),
      description: t("customStrategyDesc") || "Your dedicated broker creates a personalized investment strategy tailored to your specific needs and market opportunities.",
      color: "from-blue-500 to-cyan-400",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=90&w=1000"
    },
    {
      id: "management",
      icon: <ChartLine className="h-6 w-6" />,
      title: t("activeManagement"),
      description: t("activeManagementDesc") || "Your broker actively manages your portfolio, making strategic adjustments based on market conditions and emerging opportunities.",
      color: "from-cyan-400 to-emerald-400",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=90&w=1000"
    },
    {
      id: "protection",
      icon: <Shield className="h-6 w-6" />,
      title: t("wealthProtection"),
      description: t("wealthProtectionDesc") || "We implement sophisticated risk management strategies to protect your wealth while maximizing growth potential.",
      color: "from-emerald-400 to-invest-purple",
      image: "https://images.unsplash.com/photo-1624969862644-791f3dc98927?auto=format&fit=crop&q=90&w=1000"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,105,171,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 sm:text-5xl mb-4">
            {t("howItWorks") || "Your Journey with a Personal Broker"}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t("brokerJourneyDesc") || "Experience wealth growth with the personal touch of expert financial guidance at every step."}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-invest-purple to-invest-blue rounded-full"></div>
          </div>
        </div>
        
        {/* Interactive process flow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Step selection */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-start space-x-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeStep === index 
                      ? "bg-gradient-to-r from-invest-purple/10 to-invest-blue/5 border-l-4 border-invest-purple" 
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className={`flex-shrink-0 rounded-full p-3 bg-gradient-to-r ${step.color} text-white`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full mr-2">
                        {index + 1}
                      </span>
                      <h3 className={`font-semibold text-lg ${activeStep === index ? "text-invest-purple" : "text-gray-800"}`}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button
                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-invest-purple to-invest-blue hover:from-invest-purple/90 hover:to-invest-blue/90 text-white w-full py-6 group"
              >
                <span className="flex items-center justify-center">
                  {t("startWithBroker") || "Start Your Journey with a Broker"}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
          
          {/* Right side - Visual representation */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="mb-4 flex space-x-2">
                {steps.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-3 h-3 rounded-full ${idx === activeStep ? "bg-invest-purple" : "bg-white/50"}`}
                    onClick={() => setActiveStep(idx)}
                  ></div>
                ))}
              </div>
              
              <h3 className="text-3xl font-bold mb-3">{steps[activeStep].title}</h3>
              <p className="text-white/90 text-lg mb-6">{steps[activeStep].description}</p>
              
              <div className="flex space-x-4">
                <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-3">
                  <p className="text-sm font-medium">{t("appointmentTime") || "Avg. Appointment Time"}</p>
                  <p className="text-xl font-bold">30 {t("minutes") || "minutes"}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-3">
                  <p className="text-sm font-medium">{t("clientSatisfaction") || "Client Satisfaction"}</p>
                  <p className="text-xl font-bold">98.7%</p>
                </div>
              </div>
              
              <div className="flex items-center mt-6">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{t("scheduleAppointment") || "Schedule a consultation appointment"}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial highlight */}
        <div className="bg-gradient-to-r from-invest-purple/5 to-invest-blue/5 rounded-2xl p-8 border border-invest-purple/10 relative">
          <div className="absolute top-0 right-0 w-24 h-24 text-invest-purple/10 transform translate-x-1/2 -translate-y-1/2">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.685.41-2.205.315-.53.766-.94 1.353-1.237.587-.297 1.236-.503 1.945-.62L10.98 7.3c-1.525.157-2.78.56-3.766 1.207-.997.646-1.707 1.5-2.13 2.57-.42 1.07-.57 2.226-.45 3.48.12 1.252.485 2.31 1.094 3.175.61.863 1.408 1.452 2.392 1.77.984.316 2.115.275 3.396-.127.63-.2 1.19-.506 1.672-.916.484-.41.843-.943 1.08-1.598.234-.654.35-1.432.35-2.333 0-.835-.18-1.56-.54-2.173-.36-.614-.963-1.05-1.806-1.306 1.3-.22 2.244-.78 2.83-1.684.584-.905.877-1.78.877-2.627 0-.82-.19-1.53-.57-2.13-.38-.6-.963-1.06-1.75-1.38-.787-.32-1.792-.4-3.02-.23-1.21.16-2.5.56-3.873 1.2l.693 1.83c1.003-.46 1.91-.75 2.747-.87.834-.12 1.47-.046 1.92.2.44.248.658.61.658 1.08 0 .63-.218 1.162-.65 1.59-.44.43-1.1.777-1.986 1.042-.903.266-1.56.62-1.97 1.06-.41.44-.62 1.11-.62 2.02 0 .56.11 1.05.33 1.47.215.42.54.756.97 1.01.44.257.965.428 1.58.51.61.086 1.29.033 2.04-.16.754-.19 1.425-.53 2.023-1.01.597-.48 1.023-1.13 1.28-1.92.266-.8.323-1.77.176-2.91 1.614.93 2.43 2.4 2.43 4.4 0 .76-.103 1.5-.307 2.21-.215.72-.586 1.34-1.114 1.87-.53.53-1.25.95-2.16 1.25-.91.24-2.03.3-3.38 0-1.6-.35-2.811-1.03-3.636-2.03-.825-.97-1.216-2.23-1.174-3.76.042-1.53.436-2.82 1.184-3.88.748-1.06 1.748-1.73 2.997-2.06l-.632-1.83c-1.552.39-2.8 1.15-3.747 2.28-.947 1.14-1.497 2.42-1.648 3.84-.15 1.42.02 2.78.507 4.08.486 1.31 1.27 2.35 2.35 3.12 1.09.77 2.43 1.22 4.02 1.34 1.6-.12 2.96-.67 4.07-1.64 1.12-.98 1.94-2.13 2.46-3.47.52-1.34.78-2.58.78-3.72 0-1.46-.33-2.69-.98-3.67-.65-.98-1.64-1.68-2.96-2.07z" />
            </svg>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl italic text-gray-700 mb-6">
              "{t("brokerTestimonial") || "My personal broker understood exactly what I needed. Within months, my portfolio grew beyond my expectations while maintaining the risk level I was comfortable with."}"
            </p>
            
            <div className="flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
                alt="Client"
                className="w-12 h-12 rounded-full object-cover border-2 border-invest-purple mr-3"
              />
              <div className="text-left">
                <h4 className="font-semibold">{t("testimonialName") || "Sarah K."}</h4>
                <p className="text-sm text-gray-500">{t("testimonialLocation") || "Client since 2022"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
