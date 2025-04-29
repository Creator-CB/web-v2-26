
import React from 'react';
import { TrendingUp, TrendingDown, Bitcoin, Globe } from "lucide-react";
import { useLanguage } from './LanguageSelector';

const Header = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white border-b border-gray-100 text-gray-800 py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center mr-6">
              <Bitcoin className="h-4 w-4 text-invest-purple mr-2" />
              <span className="text-sm font-medium">{t("cryptoMarkets")}</span>
            </div>
            <div className="hidden sm:flex items-center space-x-6 text-xs">
              <div className="flex items-center">
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                <span>Bitcoin <span className="text-green-500 font-medium">+4.8%</span></span>
              </div>
              <div className="flex items-center">
                <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                <span>Ethereum <span className="text-red-500 font-medium">-1.2%</span></span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                <span>Solana <span className="text-green-500 font-medium">+6.7%</span></span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                <span>XRP <span className="text-green-500 font-medium">+2.3%</span></span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <a href="#" className="hover:text-invest-purple transition-colors flex items-center group">
              <span>{t("marketUpdates")}</span>
              <svg className="h-3 w-3 ml-1 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="hover:text-invest-purple transition-colors flex items-center group">
              <span>{t("research")}</span>
              <svg className="h-3 w-3 ml-1 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="hover:text-invest-purple transition-colors flex items-center group">
              <span>{t("contact")}</span>
              <svg className="h-3 w-3 ml-1 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
