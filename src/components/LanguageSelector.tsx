import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    en: {
      combineHumanAI: "We combine human and artificial intelligence to grow your wealth",
      investmentPlatform: "Investment Platform",
      cryptoInvestmentPlatform: "AI-Powered Investment",
      activeInvestors: "Active Investors",
      regulatedPlatform: "Regulated Platform",
      cryptoInsured: "Investments Insured",
      annualReturns: "Annual Returns",
      averageCryptoReturns: "Average investment returns",
      algorithmPrecision: "Algorithm Precision",
      cryptoMarketPrediction: "Market prediction accuracy",
      clientSatisfaction: "Client Satisfaction",
      globalCryptoInvestors: "Global investors satisfaction",
    },
    it: {
      combineHumanAI: "Combiniamo intelligenza umana e artificiale per far crescere i tuoi investimenti",
      investmentPlatform: "Piattaforma di Investimento",
      cryptoInvestmentPlatform: "Investimenti con AI",
      activeInvestors: "Investitori Attivi",
      regulatedPlatform: "Piattaforma Regolamentata",
      cryptoInsured: "Investimenti Assicurati",
      annualReturns: "Rendimenti Annuali",
      averageCryptoReturns: "Rendimento medio investimenti",
      algorithmPrecision: "Precisione Algoritmica",
      cryptoMarketPrediction: "Precisione predizioni di mercato",
      clientSatisfaction: "Soddisfazione Clienti",
      globalCryptoInvestors: "Soddisfazione investitori globali",
    },
  };

  return { t: (key) => translations[language][key] || key };
};
