
import React, { createContext, useContext, useState } from 'react';

// Define the type for our context
interface LanguageContextType {
  language: string;
  switchLanguage: (lang: string) => void;
}

// Create the context with proper typing and default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  switchLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('en');

  const switchLanguage = (lang: string) => {
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
      features: "Features",
      howItWorks: "How It Works",
      aiAssistant: "AI Assistant",
      getStarted: "Get Started",
      personalService: "Personal Service",
      meetOurBrokers: "Meet Our Brokers",
      brokerIntroduction: "Our experienced brokers are here to guide you through your investment journey",
      experience: "Experience",
      availableSlots: "Available Slots",
      thisWeek: "This Week",
      message: "Message",
      bookConsultation: "Book Consultation",
      viewFullProfile: "View Full Profile",
      findYourPerfectBroker: "Find Your Perfect Broker"
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
      features: "Funzionalità",
      howItWorks: "Come Funziona",
      aiAssistant: "Assistente AI",
      getStarted: "Inizia Ora",
      personalService: "Servizio Personale",
      meetOurBrokers: "Incontra i Nostri Broker",
      brokerIntroduction: "I nostri broker esperti sono qui per guidarti nel tuo percorso di investimento",
      experience: "Esperienza",
      availableSlots: "Slot Disponibili",
      thisWeek: "Questa Settimana",
      message: "Messaggio",
      bookConsultation: "Prenota Consulenza",
      viewFullProfile: "Visualizza Profilo Completo",
      findYourPerfectBroker: "Trova il Tuo Broker Ideale"
    },
  };

  return { t: (key: string) => translations[language][key as keyof typeof translations[typeof language]] || key };
};

// Create a language selector component and export it as default
const LanguageSelector = () => {
  const context = useContext(LanguageContext);
  
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => context.switchLanguage('en')}
        className={`px-2 py-1 text-sm rounded ${context.language === 'en' ? 'bg-invest-purple/10 text-invest-purple' : 'text-gray-600'}`}
      >
        EN
      </button>
      <button
        onClick={() => context.switchLanguage('it')}
        className={`px-2 py-1 text-sm rounded ${context.language === 'it' ? 'bg-invest-purple/10 text-invest-purple' : 'text-gray-600'}`}
      >
        IT
      </button>
    </div>
  );
};

export default LanguageSelector;
