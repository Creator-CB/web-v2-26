
import React, { useState, createContext, useContext, ReactNode, useEffect } from 'react';
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";

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
    "sophisticatedApproach": "A sophisticated approach to crypto investing",
    "aiConsultation": "AI Consultation",
    "aiConsultationDesc": "Engage with our intelligent assistant to explore cryptocurrency investment options tailored to market conditions.",
    "portfolioAnalysis": "Portfolio Analysis",
    "portfolioAnalysisDesc": "Our AI analyzes your preferences and generates a customized crypto strategy.",
    "accountSetup": "Account Setup",
    "accountSetupDesc": "Complete your profile with our streamlined registration process for crypto investors.",
    "expertReview": "Expert Review",
    "expertReviewDesc": "Speak with our experienced crypto advisors who specialize in digital asset markets.",
    "startJourney": "Start your crypto investment journey today",
    "pathToGrowth": "Your Path to Financial Growth",
    "continuousSupport": "From your first consultation to ongoing portfolio management, our platform provides continuous support and optimization to maximize your cryptocurrency investment returns.",
    "startInvesting": "Start investing with €100",
    "setupTime": "Average setup time: 10 minutes",
    
    // Language toggle
    "languageChanged": "Language changed to English",
    
    // Buttons
    "submit": "Submit",
    "sendMessage": "Send Message",
    "learnMore": "Learn More",
    "contactUs": "Contact Us",
    
    // Header
    "marketUpdates": "Market Updates",
    "research": "Research",
    "contact": "Contact",
    "cryptoMarkets": "Crypto Markets",
    
    // Hero
    "intelligentCrypto": "Intelligent Crypto Investing",
    "forModernInvestors": "For Modern Investors",
    "cryptoInvestmentPlatform": "Crypto Investment Platform",
    "heroPlatformDescription": "Leveraging AI algorithms with expert human analysis to optimize your cryptocurrency investment potential in today's volatile digital asset markets.",
    "tryAiAssistant": "Try AI Assistant",
    "annualReturns": "Annual Returns",
    "averageCryptoReturns": "Average for crypto portfolios",
    "algorithmPrecision": "Algorithm Precision",
    "cryptoMarketPrediction": "Crypto market prediction accuracy",
    "clientSatisfaction": "Client Satisfaction",
    "globalCryptoInvestors": "From global crypto investors",
    
    // Features
    "ourApproach": "Our Approach",
    "sophisticatedCrypto": "Sophisticated Crypto Investment Technology",
    "precisionTools": "Precision tools designed for the dynamic cryptocurrency landscape",
    "intelligentAnalysis": "Intelligent Analysis",
    "intelligentAnalysisDesc": "Our algorithms analyze cryptocurrency trends across global exchanges, identifying opportunities before they become mainstream.",
    "riskManagement": "Risk Management",
    "riskManagementDesc": "Advanced risk assessment tools that adapt to high volatility in cryptocurrency markets to protect your digital asset portfolio.",
    "aiAssistedInvesting": "AI-Assisted Investing",
    "aiAssistedInvestingDesc": "Get personalized cryptocurrency recommendations based on your financial goals and risk tolerance profile.",
    "cryptoDiversification": "Crypto Diversification",
    "cryptoDiversificationDesc": "Smart allocation across major and emerging cryptocurrencies to optimize returns while minimizing exposure to market volatility.",
    "advancedTechnology": "Advanced Technology, Crypto Expertise",
    "specializedAlgorithms": "Specialized algorithms trained on cryptocurrency data since 2017",
    "globalInfrastructure": "Global computational infrastructure for rapid crypto market analysis",
    "expertTeam": "Team of experts with deep experience in blockchain and digital assets",
    "regulatoryMonitoring": "Continuous monitoring of regulatory developments across all major crypto markets"
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
    "sophisticatedApproach": "Un approccio sofisticato agli investimenti in criptovalute",
    "aiConsultation": "Consulenza IA",
    "aiConsultationDesc": "Interagisci con il nostro assistente intelligente per esplorare opzioni di investimento in criptovalute adattate alle condizioni di mercato.",
    "portfolioAnalysis": "Analisi del Portafoglio",
    "portfolioAnalysisDesc": "La nostra IA analizza le tue preferenze e genera una strategia personalizzata per le criptovalute.",
    "accountSetup": "Configurazione Account",
    "accountSetupDesc": "Completa il tuo profilo con il nostro processo di registrazione semplificato per investitori in criptovalute.",
    "expertReview": "Revisione Esperta",
    "expertReviewDesc": "Parla con i nostri consulenti esperti di criptovalute specializzati nei mercati di asset digitali.",
    "startJourney": "Inizia oggi il tuo percorso di investimento in criptovalute",
    "pathToGrowth": "Il Tuo Percorso verso la Crescita Finanziaria",
    "continuousSupport": "Dalla prima consulenza alla gestione continua del portafoglio, la nostra piattaforma fornisce supporto continuo e ottimizzazione per massimizzare i rendimenti dei tuoi investimenti in criptovalute.",
    "startInvesting": "Inizia a investire con €100",
    "setupTime": "Tempo medio di configurazione: 10 minuti",
    
    // Language toggle
    "languageChanged": "Lingua cambiata in Italiano",
    
    // Buttons
    "submit": "Invia",
    "sendMessage": "Invia Messaggio",
    "learnMore": "Scopri di Più",
    "contactUs": "Contattaci",
    
    // Header
    "marketUpdates": "Aggiornamenti di Mercato",
    "research": "Ricerca",
    "contact": "Contatto",
    "cryptoMarkets": "Mercati Crypto",
    
    // Hero
    "intelligentCrypto": "Investimenti Intelligenti in Crypto",
    "forModernInvestors": "Per Investitori Moderni",
    "cryptoInvestmentPlatform": "Piattaforma di Investimento Crypto",
    "heroPlatformDescription": "Utilizziamo algoritmi di IA con analisi di esperti umani per ottimizzare il potenziale dei tuoi investimenti in criptovalute nei volatili mercati di asset digitali odierni.",
    "tryAiAssistant": "Prova l'Assistente IA",
    "annualReturns": "Rendimenti Annuali",
    "averageCryptoReturns": "Media per portafogli crypto",
    "algorithmPrecision": "Precisione Algoritmica",
    "cryptoMarketPrediction": "Precisione nelle previsioni del mercato crypto",
    "clientSatisfaction": "Soddisfazione dei Clienti",
    "globalCryptoInvestors": "Da investitori crypto globali",
    
    // Features
    "ourApproach": "Il Nostro Approccio",
    "sophisticatedCrypto": "Tecnologia Sofisticata per Investimenti Crypto",
    "precisionTools": "Strumenti di precisione progettati per il dinamico panorama delle criptovalute",
    "intelligentAnalysis": "Analisi Intelligente",
    "intelligentAnalysisDesc": "I nostri algoritmi analizzano le tendenze delle criptovalute su tutti gli exchange globali, identificando opportunità prima che diventino mainstream.",
    "riskManagement": "Gestione del Rischio",
    "riskManagementDesc": "Strumenti avanzati di valutazione del rischio che si adattano all'alta volatilità nei mercati delle criptovalute per proteggere il tuo portafoglio di asset digitali.",
    "aiAssistedInvesting": "Investimenti Assistiti da IA",
    "aiAssistedInvestingDesc": "Ottieni raccomandazioni personalizzate sulle criptovalute in base ai tuoi obiettivi finanziari e al tuo profilo di tolleranza al rischio.",
    "cryptoDiversification": "Diversificazione Crypto",
    "cryptoDiversificationDesc": "Allocazione intelligente tra criptovalute principali ed emergenti per ottimizzare i rendimenti minimizzando l'esposizione alla volatilità del mercato.",
    "advancedTechnology": "Tecnologia Avanzata, Esperienza Crypto",
    "specializedAlgorithms": "Algoritmi specializzati addestrati su dati di criptovalute dal 2017",
    "globalInfrastructure": "Infrastruttura computazionale globale per analisi rapide del mercato crypto",
    "expertTeam": "Team di esperti con profonda esperienza in blockchain e asset digitali",
    "regulatoryMonitoring": "Monitoraggio continuo degli sviluppi normativi in tutti i principali mercati crypto"
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Try to load language from localStorage if available
  const initialLanguage = typeof window !== 'undefined' && localStorage.getItem('preferredLanguage') 
    ? localStorage.getItem('preferredLanguage') as string
    : defaultLanguage;
    
  const [language, setLanguage] = useState(initialLanguage);
  
  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
  }, [language]);
  
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
  const { language, setLanguage, t } = useLanguage();
  const { toast } = useToast();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    
    // Show toast notification
    toast({
      title: t("languageChanged"),
      description: lang === 'en' ? "English" : "Italiano",
      variant: "default",
    });
    
    // Force re-render of all components by triggering a DOM update
    document.documentElement.setAttribute('lang', lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-1 bg-white/90 hover:bg-blue-50 border-blue-100">
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
