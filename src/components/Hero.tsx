
import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageSelector';
import HeroBackground from './Hero/HeroBackground';
import HeroFeatureCards from './Hero/HeroFeatureCards';
import HeroTrustBadges from './Hero/HeroTrustBadges';
import HeroButtons from './Hero/HeroButtons';
import HeroActiveInvestors from './Hero/HeroActiveInvestors';
import OpportunityText from './Hero/OpportunityText';
import { Shield, EuroIcon } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Show content immediately without delay
    setIsVisible(true);
  }, []);
  
  return (
    <div id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-8 sm:pt-12 pb-16 sm:pb-24 min-h-[85vh] sm:min-h-[90vh] flex items-center text-white">
      {/* Background elements */}
      <HeroBackground />
      
      <div className="max-w-7xl mx-auto relative z-10 px-3 sm:px-4 lg:px-8">
        <div className="relative z-10 pb-6 sm:pb-8 md:pb-20 lg:pb-28">
          <main className="mt-0 mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center">
              <div 
                className={`flex items-center justify-center mb-3 sm:mb-4 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              >
                <OpportunityText />
              </div>
              
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="block">Don't Just Invest.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 mt-1 sm:mt-3">Multiply Your Wealth.</span>
              </h1>
              
              <p className="mt-3 sm:mt-4 text-sm sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
                Our AI-driven algorithm delivered <span className="text-green-400 font-bold">924.8% returns</span> last year when traditional markets struggled. Join thousands of investors who are already profiting.
              </p>
              
              <HeroFeatureCards />
              <HeroTrustBadges />
              <HeroButtons isVisible={isVisible} />

              <div className={`mt-4 sm:mt-8 text-xs sm:text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex items-center">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-gray-500" />
                  {t('regulated')}
                </div>
                <div className="flex items-center">
                  <EuroIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-gray-500" />
                  {t('insured')}
                </div>
              </div>
              
              {/* On mobile, render the active investors component after the regulated/insured text */}
              {isMobile && <HeroActiveInvestors />}
            </div>
          </main>

          {/* On desktop, render the active investors component at the bottom */}
          {!isMobile && <HeroActiveInvestors />}
        </div>
      </div>
    </div>
  );
};

export default Hero;
