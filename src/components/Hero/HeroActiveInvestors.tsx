
import React from 'react';
import { useLanguage } from '../LanguageSelector';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroActiveInvestors = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  return (
    <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md shadow-lg rounded-full px-3 sm:px-6 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 border border-amber-500/30 mx-2 max-w-[90%] z-20">
      <div className="relative flex-shrink-0">
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
      </div>
      <span className="font-medium text-gray-300 text-xs sm:text-base whitespace-nowrap overflow-hidden text-ellipsis">
        {t('activeInvestors')}: <span className="text-amber-400">783</span> 
        {isMobile ? (
          <span className="text-gray-500 text-xs ml-1">investing now</span>
        ) : (
          <span className="text-gray-500 text-xs ml-1">investing now</span>
        )}
      </span>
    </div>
  );
};

export default HeroActiveInvestors;
