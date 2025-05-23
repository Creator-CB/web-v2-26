
import React, { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { EuroIcon, TrendingUp } from "lucide-react";
import { useLanguage } from '../LanguageSelector';

const OpportunityText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();
  
  const opportunityTexts = [
    "+1000% Annual Returns",
    "Market-Beating Performance",
    "AI-Powered Wealth Growth"
  ];
  
  useEffect(() => {
    // Rotate through opportunity texts
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % opportunityTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <Badge className="rounded-full bg-gradient-to-r from-amber-400/20 to-amber-500/30 text-amber-300 border-amber-600/20 px-2 sm:px-3 py-1 text-xs">
      <EuroIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" /> {t('investmentPlatform')} • <TrendingUp className="h-3 w-3 mx-1 text-green-400" /> 
      <span className="hidden sm:inline">{opportunityTexts[currentIndex]}</span>
      <span className="sm:hidden">+1000%</span>
    </Badge>
  );
};

export default OpportunityText;
