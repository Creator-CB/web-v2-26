
import React, { useState, createContext, useContext, ReactNode } from 'react';
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Create a context for language
type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const defaultLanguage = 'en';

// Translation dictionary
const translations = {
  en: {
    // Navbar
    "features": "Features",
    "howItWorks": "How It Works",
    "aiAssistant": "AI Assistant",
    "getStarted": "Get Started",
    
    // HowItWorks
    "ourProcess": "Our Process",
    "howPlatformWorks": "How Our Platform Works",
    "sophisticatedApproach": "A sophisticated approach to European investing",
    "aiConsultation": "AI Consultation",
    "aiConsultationDesc": "Engage with our intelligent assistant to explore investment options tailored to European markets.",
    "portfolioAnalysis": "Portfolio Analysis",
    "portfolioAnalysisDesc": "Our AI analyzes your investment preferences and generates a customized European strategy.",
    "accountSetup": "Account Setup",
    "accountSetupDesc": "Complete your profile with our streamlined registration process for European investors.",
    "expertReview": "Expert Review",
    "expertReviewDesc": "Speak with our local investment advisors who specialize in your regional market.",
    "startJourney": "Start your investment journey today",
    "pathToGrowth": "Your Path to Financial Growth",
    "continuousSupport": "From your first consultation to ongoing portfolio management, our platform provides continuous support and optimization to maximize your investment returns in European markets.",
    "startInvesting": "Start investing with €100",
    "setupTime": "Average setup time: 10 minutes"
  },
  it: {
    // Navbar
    "features": "Caratteristiche",
    "howItWorks": "Come Funziona",
    "aiAssistant": "Assistente IA",
    "getStarted": "Inizia Ora",
    
    // HowItWorks
    "ourProcess": "Il Nostro Processo",
    "howPlatformWorks": "Come Funziona La Nostra Piattaforma",
    "sophisticatedApproach": "Un approccio sofisticato agli investimenti europei",
    "aiConsultation": "Consulenza IA",
    "aiConsultationDesc": "Interagisci con il nostro assistente intelligente per esplorare opzioni di investimento su misura per i mercati europei.",
    "portfolioAnalysis": "Analisi del Portafoglio",
    "portfolioAnalysisDesc": "La nostra IA analizza le tue preferenze di investimento e genera una strategia europea personalizzata.",
    "accountSetup": "Configurazione Account",
    "accountSetupDesc": "Completa il tuo profilo con il nostro processo di registrazione semplificato per investitori europei.",
    "expertReview": "Revisione Esperta",
    "expertReviewDesc": "Parla con i nostri consulenti di investimento locali specializzati nel tuo mercato regionale.",
    "startJourney": "Inizia oggi il tuo percorso di investimento",
    "pathToGrowth": "Il Tuo Percorso verso la Crescita Finanziaria",
    "continuousSupport": "Dalla prima consulenza alla gestione continua del portafoglio, la nostra piattaforma fornisce supporto continuo e ottimizzazione per massimizzare i rendimenti dei tuoi investimenti nei mercati europei.",
    "startInvesting": "Inizia a investire con €100",
    "setupTime": "Tempo medio di configurazione: 10 minuti"
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(defaultLanguage);
  
  const t = (key: string) => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations[keyof typeof translations]] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    console.log(`Language changed to ${lang}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-1 bg-white/90">
          <Globe className="h-4 w-4" />
          <span>{language === 'en' ? 'EN' : 'IT'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-lg">
        <DropdownMenuItem onClick={() => handleLanguageChange('en')} className="cursor-pointer">
          <span className="mr-2">🇬🇧</span> English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('it')} className="cursor-pointer">
          <span className="mr-2">🇮🇹</span> Italiano
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
