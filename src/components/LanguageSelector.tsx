
import React, { createContext, useContext, useState } from 'react';

// Define the type for our context
interface LanguageContextType {
  language: string;
  switchLanguage: (lang: string) => void;
}

// Define the translation key type
type TranslationKey = 
  | 'combineHumanAI'
  | 'investmentPlatform'
  | 'cryptoInvestmentPlatform'
  | 'activeInvestors'
  | 'regulatedPlatform'
  | 'cryptoInsured'
  | 'annualReturns'
  | 'averageCryptoReturns'
  | 'algorithmPrecision'
  | 'cryptoMarketPrediction'
  | 'clientSatisfaction'
  | 'globalCryptoInvestors'
  | 'features'
  | 'howItWorks'
  | 'aiAssistant'
  | 'getStarted'
  | 'personalService'
  | 'meetOurBrokers'
  | 'brokerIntroduction'
  | 'experience'
  | 'availableSlots'
  | 'thisWeek'
  | 'message'
  | 'bookConsultation'
  | 'viewFullProfile'
  | 'findYourPerfectBroker'
  | 'starterPackage'
  | 'starterDesc'
  | 'feature1Starter'
  | 'feature2Starter'
  | 'feature3Starter'
  | 'feature4Starter'
  | 'growthPackage'
  | 'growthDesc'
  | 'feature1Growth'
  | 'feature2Growth'
  | 'feature3Growth'
  | 'feature4Growth'
  | 'feature5Growth'
  | 'premiumPackage'
  | 'premiumDesc'
  | 'feature1Premium'
  | 'feature2Premium'
  | 'feature3Premium'
  | 'feature4Premium'
  | 'feature5Premium'
  | 'feature6Premium'
  | 'investmentOptions'
  | 'tailoredPackages'
  | 'packagesSubheading'
  | 'mostPopular'
  | 'minimum'
  | 'projectedReturns'
  | 'startInvesting'
  | 'customPackage'
  | 'customPackageDesc'
  | 'contactUs';

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
      findYourPerfectBroker: "Find Your Perfect Broker",
      starterPackage: "Starter Package",
      starterDesc: "Perfect for beginners looking to explore investment opportunities",
      feature1Starter: "Basic AI-assisted trading",
      feature2Starter: "Weekly market updates",
      feature3Starter: "Email support",
      feature4Starter: "Access to learning resources",
      growthPackage: "Growth Package",
      growthDesc: "Ideal for intermediate investors seeking consistent returns",
      feature1Growth: "Advanced AI trading strategies",
      feature2Growth: "Dedicated personal broker",
      feature3Growth: "Daily market insights",
      feature4Growth: "Priority email & chat support",
      feature5Growth: "Monthly strategy review",
      premiumPackage: "Premium Package",
      premiumDesc: "For serious investors looking to maximize their returns",
      feature1Premium: "Premium AI algorithms",
      feature2Premium: "Senior broker assignment",
      feature3Premium: "Real-time market alerts",
      feature4Premium: "24/7 priority support",
      feature5Premium: "Quarterly performance review",
      feature6Premium: "Custom investment strategy",
      investmentOptions: "Investment Options",
      tailoredPackages: "Tailored Investment Packages",
      packagesSubheading: "Choose the investment package that best suits your financial goals and risk tolerance",
      mostPopular: "Most Popular",
      minimum: "minimum",
      projectedReturns: "Projected Returns",
      startInvesting: "Start Investing",
      customPackage: "Need a Custom Package?",
      customPackageDesc: "Contact us for a personalized investment solution tailored to your specific needs",
      contactUs: "Contact Us"
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
      findYourPerfectBroker: "Trova il Tuo Broker Ideale",
      starterPackage: "Pacchetto Iniziale",
      starterDesc: "Perfetto per principianti che vogliono esplorare opportunità di investimento",
      feature1Starter: "Trading assistito da AI di base",
      feature2Starter: "Aggiornamenti settimanali del mercato",
      feature3Starter: "Supporto via email",
      feature4Starter: "Accesso a risorse didattiche",
      growthPackage: "Pacchetto Crescita",
      growthDesc: "Ideale per investitori intermedi in cerca di rendimenti costanti",
      feature1Growth: "Strategie di trading AI avanzate",
      feature2Growth: "Broker personale dedicato",
      feature3Growth: "Approfondimenti quotidiani di mercato",
      feature4Growth: "Supporto prioritario via email e chat",
      feature5Growth: "Revisione mensile della strategia",
      premiumPackage: "Pacchetto Premium",
      premiumDesc: "Per investitori seri che cercano di massimizzare i loro rendimenti",
      feature1Premium: "Algoritmi AI premium",
      feature2Premium: "Assegnazione broker senior",
      feature3Premium: "Avvisi di mercato in tempo reale",
      feature4Premium: "Supporto prioritario 24/7",
      feature5Premium: "Revisione trimestrale delle performance",
      feature6Premium: "Strategia di investimento personalizzata",
      investmentOptions: "Opzioni di Investimento",
      tailoredPackages: "Pacchetti di Investimento su Misura",
      packagesSubheading: "Scegli il pacchetto di investimento che meglio si adatta ai tuoi obiettivi finanziari e alla tua tolleranza al rischio",
      mostPopular: "Più Popolare",
      minimum: "minimo",
      projectedReturns: "Rendimenti Previsti",
      startInvesting: "Inizia a Investire",
      customPackage: "Hai Bisogno di un Pacchetto Personalizzato?",
      customPackageDesc: "Contattaci per una soluzione di investimento personalizzata su misura per le tue esigenze specifiche",
      contactUs: "Contattaci"
    },
  };

  return { 
    t: (key: string): string => {
      if (language === 'en' || language === 'it') {
        return translations[language][key as TranslationKey] || key;
      }
      return key;
    } 
  };
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
