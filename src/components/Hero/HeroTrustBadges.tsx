
import React from 'react';
import { Shield, Headphones, Award, EuroIcon } from 'lucide-react';
import { useLanguage } from '../LanguageSelector';

const HeroTrustBadges = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <div className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-2">
        <div className="flex items-center text-green-400 bg-green-900/30 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium">
          <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
          <span>{t('secure')}</span>
        </div>
        <div className="flex items-center text-blue-400 bg-blue-900/30 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium">
          <Headphones className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
          <span>{t('support')}</span>
        </div>
        <div className="flex items-center text-amber-400 bg-amber-900/30 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium">
          <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
          <span className="hidden sm:inline">Award-winning</span>
          <span className="sm:hidden">Award</span>
        </div>
      </div>

      {/* Limited time offer banner */}
      <div className="mt-4 sm:mt-8 bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-500/20 rounded-md p-2 sm:p-3 max-w-2xl mx-auto">
        <div className="flex items-center">
          <span className="animate-pulse text-amber-300">⚡</span>
          <p className="ml-2 text-xs sm:text-sm font-medium text-amber-300">
            <span className="hidden sm:inline">Limited offer: Double Your Money - </span>
            <span className="font-bold">100% bonus on your first deposit!</span>
            <span className="hidden sm:inline"> on your first investment</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroTrustBadges;
