
import React from 'react';
import { Users, Bot, ChartLine } from 'lucide-react';
import { useLanguage } from '../LanguageSelector';

const HeroFeatureCards = () => {
  const { t } = useLanguage();
  
  return (
    <div className="mt-6 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto lg:max-w-none px-2">
      <div className="flex flex-col items-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-amber-500/40 hover:bg-white/10 transition-all duration-300">
        <div className="p-2 sm:p-3 rounded-full bg-amber-500/20 mb-2 sm:mb-4">
          <Users className="h-5 w-5 sm:h-8 sm:w-8 text-amber-400" />
        </div>
        <h3 className="font-bold text-sm sm:text-xl mb-1 sm:mb-2 text-white">{t('personalBroker')}</h3>
        <p className="text-gray-300 text-center text-xs sm:text-base">{t('personalBrokerDesc')}</p>
      </div>
      
      <div className="flex flex-col items-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
        <div className="p-2 sm:p-3 rounded-full bg-blue-500/20 mb-2 sm:mb-4">
          <Bot className="h-5 w-5 sm:h-8 sm:w-8 text-blue-400" />
        </div>
        <h3 className="font-bold text-sm sm:text-xl mb-1 sm:mb-2 text-white">{t('aiAlgorithm')}</h3>
        <p className="text-gray-300 text-center text-xs sm:text-base">{t('aiAlgorithmDesc')}</p>
      </div>
      
      <div className="flex flex-col items-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-green-500/40 hover:bg-white/10 transition-all duration-300 sm:col-span-2 lg:col-span-1">
        <div className="p-2 sm:p-3 rounded-full bg-green-500/20 mb-2 sm:mb-4">
          <ChartLine className="h-5 w-5 sm:h-8 sm:w-8 text-green-400" />
        </div>
        <h3 className="font-bold text-sm sm:text-xl mb-1 sm:mb-2 text-white">{t('fastGrowth')}</h3>
        <p className="text-gray-300 text-center text-xs sm:text-base">{t('fastGrowthDesc')}</p>
      </div>
    </div>
  );
};

export default HeroFeatureCards;
