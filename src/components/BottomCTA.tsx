
import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from './LanguageSelector';
import { motion } from "framer-motion";

const BottomCTA = () => {
  const { t } = useLanguage();
  
  const features = [
    { text: t('fastRegistration'), color: 'text-green-400' },
    { text: t('instantBroker'), color: 'text-amber-400' },
    { text: t('sameDay'), color: 'text-blue-400' }
  ];
  
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.05),transparent_70%)]"></div>
      <div className="absolute inset-0 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="bottom-cta-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bottom-cta-grid-pattern)" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6 text-gradient">
            {t('ctaTitle')}
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            {t('ctaSubtitle')}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="group"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-amber-500/20 transition-all duration-300 w-full md:w-auto"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center">
                <span className="mr-2">€</span>
                {t('startToday')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="group"
          >
            <Button
              size="lg"
              variant="call"
              className="bg-white hover:bg-white/90 text-slate-900 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-white/20 transition-all duration-300 w-full md:w-auto"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                {t('freeConsultation')}
              </span>
            </Button>
          </motion.div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-white/80 mr-2"></div>
              <span className={`text-sm md:text-base ${feature.color}`}>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
