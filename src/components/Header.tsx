
import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Bitcoin, Globe } from "lucide-react";
import { useLanguage } from './LanguageSelector';
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const { t } = useLanguage();
  const [cryptoData, setCryptoData] = useState([
    { name: "Bitcoin", change: "+4.8%", trending: "up" },
    { name: "Ethereum", change: "-1.2%", trending: "down" },
    { name: "Solana", change: "+6.7%", trending: "up" },
    { name: "XRP", change: "+2.3%", trending: "up" }
  ]);
  
  // Simulate live crypto ticker
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedData = [...cryptoData];
      const randomIndex = Math.floor(Math.random() * updatedData.length);
      const randomChange = (Math.random() * 2 - 0.5).toFixed(1);
      const isPositive = parseFloat(randomChange) > 0;
      
      updatedData[randomIndex] = {
        ...updatedData[randomIndex],
        change: `${isPositive ? '+' : ''}${randomChange}%`,
        trending: isPositive ? 'up' : 'down'
      };
      
      setCryptoData(updatedData);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [cryptoData]);
  
  return (
    <div className="bg-white border-b border-gray-100 text-gray-800 py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 mr-3">
              {t("hotMarket")}
            </Badge>
            <div className="flex items-center mr-6">
              <Bitcoin className="h-4 w-4 text-amber-500 mr-2" />
              <span className="text-sm font-medium">{t("cryptoMarkets")}</span>
            </div>
            <div className="hidden sm:flex items-center space-x-6 text-xs">
              {cryptoData.map((crypto, index) => (
                <div key={index} className="flex items-center">
                  {crypto.trending === 'up' ? (
                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                  )}
                  <span>
                    {crypto.name} <span className={`font-medium ${crypto.trending === 'up' ? 'text-green-500' : 'text-red-500'}`}>{crypto.change}</span>
                  </span>
                </div>
              ))}
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
