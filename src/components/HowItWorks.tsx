
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
    <section id="how-it-works" className="py-24 bg-slate-900 text-white relative overflow-hidden">
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold sm:text-5xl mb-4 text-gradient">
            {t('howItWorks')}
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            {t('packagesSubheading')}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>
        </div>
        
        {/* Three steps process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-amber-500/30 transition-all"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>
              
              <div className="text-5xl mb-6 flex justify-center">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
              <p className="text-gray-300 text-center">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="text-amber-500" size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
