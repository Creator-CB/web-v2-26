
import React from 'react';
import { TrendingUp, Globe, ChevronRight } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-white border-b border-gray-100 text-gray-800 py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center mr-6">
              <Globe className="h-4 w-4 text-invest-purple mr-2" />
              <span className="text-sm font-medium">European Markets</span>
            </div>
            <div className="hidden sm:flex items-center space-x-6 text-xs">
              <div className="flex items-center">
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                <span>EURO STOXX <span className="text-green-500 font-medium">+1.4%</span></span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                <span>DAX <span className="text-green-500 font-medium">+0.8%</span></span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-3 w-3 text-red-500 mr-1 transform rotate-180" />
                <span>FTSE 100 <span className="text-red-500 font-medium">-0.2%</span></span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                <span>CAC 40 <span className="text-green-500 font-medium">+1.1%</span></span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <a href="#" className="hover:text-invest-purple transition-colors flex items-center group">
              <span>Market Updates</span>
              <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#" className="hover:text-invest-purple transition-colors flex items-center group">
              <span>Research</span>
              <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#" className="hover:text-invest-purple transition-colors flex items-center group">
              <span>Contact</span>
              <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
