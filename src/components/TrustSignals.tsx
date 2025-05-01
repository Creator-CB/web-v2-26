
import React from 'react';
import { Shield, Award, Star, Globe, TrendingUp, Circle } from "lucide-react";
import { useLanguage } from './LanguageSelector';

const TrustSignals = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 bg-gradient-to-b from-slate-900 to-slate-800 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="flex flex-col justify-center items-center group">
            <div className="inline-flex items-center mb-2 group-hover:text-amber-400 transition-colors">
              <Shield className="h-5 w-5 text-amber-500 mr-2" />
              <span className="text-lg font-semibold text-gray-200">{t("regulated")}</span>
            </div>
            <p className="text-sm text-gray-400 text-center">{t("regulatedDesc")}</p>
          </div>
          
          <div className="flex flex-col justify-center items-center group">
            <div className="inline-flex items-center mb-2 group-hover:text-amber-400 transition-colors">
              <Award className="h-5 w-5 text-amber-500 mr-2" />
              <span className="text-lg font-semibold text-gray-200">{t("awardWinning")}</span>
            </div>
            <p className="text-sm text-gray-400 text-center">{t("awardWinningDesc")}</p>
          </div>
          
          <div className="flex flex-col justify-center items-center group">
            <div className="inline-flex items-center mb-2 group-hover:text-amber-400 transition-colors">
              <Star className="h-5 w-5 text-amber-500 mr-2" />
              <span className="text-lg font-semibold text-gray-200">{t("topRated")}</span>
            </div>
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-3 w-3 text-amber-400" fill="#FBBF24" />
                ))}
              </div>
              <span className="ml-1 text-sm text-amber-400">4.9/5</span>
            </div>
          </div>
          
          <div className="flex flex-col justify-center items-center">
            <span className="text-sm text-gray-400 mb-2">{t("asSeenIn")}</span>
            <div className="flex items-center space-x-4">
              <div className="text-gray-200 font-serif font-bold text-sm">Financial Times</div>
              <div className="text-gray-200 font-sans font-bold text-sm">Reuters</div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center items-center group">
            <div className="inline-flex items-center mb-2 group-hover:text-amber-400 transition-colors">
              <Globe className="h-5 w-5 text-amber-500 mr-2" />
              <span className="text-lg font-semibold text-gray-200">Banking Partners</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-300">Intesa Sanpaolo</span>
              <Circle className="h-1 w-1 fill-amber-500 text-amber-500" />
              <span className="text-sm font-medium text-gray-300">Mediobanca</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
