
import React from 'react';
import { Button } from "@/components/ui/button";
import { EuroIcon } from 'lucide-react';
import { useLanguage } from '../LanguageSelector';

const HeroButtons = ({ isVisible }: { isVisible: boolean }) => {
  const { t } = useLanguage();
  
  return (
    <div 
      className={`mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 px-2 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
    >
      <Button 
        size="lg"
        className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-md px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium shadow-md relative overflow-hidden button-hover group w-full sm:w-auto"
        onClick={() => document.getElementById('investment-packages')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="relative z-10 flex items-center justify-center">
          <EuroIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
          {t('startNow')}
        </span>
      </Button>
      
      <Button 
        variant="outline"
        size="lg"
        className="rounded-md px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium border-amber-400/30 text-amber-400 hover:bg-amber-500/10 shadow-sm w-full sm:w-auto"
        onClick={() => document.getElementById('ai-assistant')?.scrollIntoView({ behavior: 'smooth' })}
      >
        {t('bookCall')}
      </Button>
    </div>
  );
};

export default HeroButtons;
