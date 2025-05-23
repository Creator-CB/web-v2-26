
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageSelector';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: "1",
      title: t('step1Title'),
      description: t('step1Desc'),
      icon: "📝"
    },
    {
      number: "2",
      title: t('step2Title'),
      description: t('step2Desc'),
      icon: "🤝"
    },
    {
      number: "3",
      title: t('step3Title'),
      description: t('step3Desc'),
      icon: "📈"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 opacity-5">
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
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-gradient px-2">
            {t('howItWorks')}
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            {t('packagesSubheading')}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>
        </div>
        
        {/* Three steps process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 hover:border-amber-500/30 transition-all"
            >
              <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-lg sm:text-xl font-bold">
                {step.number}
              </div>
              
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 flex justify-center">
                {step.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center">{step.title}</h3>
              <p className="text-gray-300 text-center text-sm sm:text-base">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 sm:-right-4 transform -translate-y-1/2">
                  <ArrowRight className="text-amber-500" size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
