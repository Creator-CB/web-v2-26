
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, EuroIcon } from "lucide-react";
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageSelector';

const BottomCTA = () => {
  const { t } = useLanguage();
  
  return (
    <section className="section-padding bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_70%)]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            {t('ctaTitle')} <span className="text-gradient">strategie e supporto reale?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            {t('ctaSubtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-md px-8 py-6 text-lg font-medium shadow-md relative overflow-hidden button-hover group w-full sm:w-auto"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center">
                <EuroIcon className="mr-2 h-5 w-5" />
                {t('startToday')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="rounded-md px-8 py-6 text-lg font-medium border-amber-400/30 text-amber-400 hover:bg-amber-500/10 shadow-sm w-full sm:w-auto"
              onClick={() => document.getElementById('ai-assistant')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('freeConsultation')}
            </Button>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              {t('fastRegistration')}
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
              {t('instantBroker')}
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              {t('sameDay')}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BottomCTA;
