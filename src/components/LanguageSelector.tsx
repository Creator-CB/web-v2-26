
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    cryptoMarkets: "Crypto Markets",
    marketUpdates: "Market Updates",
    research: "Research",
    contact: "Contact",
    features: "Features",
    howItWorks: "How It Works",
    aiAssistant: "AI Assistant",
    getStarted: "Get Started",
    cryptoInvestmentPlatform: "Crypto Investment Platform",
    intelligentCrypto: "Intelligent Crypto",
    forModernInvestors: "for Modern Investors",
    heroPlatformDescription: "NovaTrust Invest combines AI technology with human expertise to optimize cryptocurrency investment potential in today's volatile digital asset markets.",
    startInvesting: "Start Investing",
    tryAiAssistant: "Try AI Assistant",
    annualReturns: "Annual Returns",
    averageCryptoReturns: "Average crypto portfolio returns",
    algorithmPrecision: "Algorithm Precision",
    cryptoMarketPrediction: "Crypto market prediction accuracy",
    clientSatisfaction: "Client Satisfaction",
    globalCryptoInvestors: "Global crypto investors satisfaction",
    ourApproach: "Our Approach",
    sophisticatedCrypto: "Sophisticated Crypto Investment Tools",
    precisionTools: "Precision tools for navigating the complex world of cryptocurrency with confidence",
    intelligentAnalysis: "Intelligent Analysis",
    intelligentAnalysisDesc: "Our AI algorithms analyze market trends, social sentiment, and technical indicators to identify promising investment opportunities.",
    riskManagement: "Risk Management",
    riskManagementDesc: "Advanced risk assessment tools help protect your investments during market volatility and maximize returns in favorable conditions.",
    aiAssistedInvesting: "AI-Assisted Investing",
    aiAssistedInvestingDesc: "Our platform continuously monitors the market and provides AI-driven recommendations tailored to your investment goals.",
    cryptoDiversification: "Crypto Diversification",
    cryptoDiversificationDesc: "Spread risk across curated baskets of cryptocurrencies, stablecoins, and tokenized assets for optimal balance.",
    advancedTechnology: "Why Our Technology Gives You The Edge",
    specializedAlgorithms: "Specialized algorithms built for volatile crypto markets",
    globalInfrastructure: "Global infrastructure for 24/7 market monitoring",
    expertTeam: "Expert team of crypto analysts and data scientists",
    regulatoryMonitoring: "Continuous regulatory monitoring for compliance",
    
    // New translations
    growWealthFaster: "Grow Your Wealth Faster with Expert-Curated Crypto Investments",
    cryptoReturnsHigher: "Our AI-powered platform delivers crypto returns 25% higher than market average. Start with just $100 and get access to investment strategies previously only available to institutions.",
    averagePerformance: "Average Performance",
    securedInvestments: "Secured Investments",
    startWithJust: "Start with just",
    growMyWealthNow: "Grow My Wealth Now",
    seeInvestmentOpportunities: "See Investment Opportunities",
    regulatedPlatform: "Regulated Platform",
    cryptoInsured: "Crypto Insured up to $1M",
    activeInvestors: "Active Investors",
    hotMarket: "HOT MARKET",
    whyChooseUs: "Why Choose Us",
    cryptoAdvantages: "Take advantage of cryptocurrency market opportunities with our advanced AI and expert guidance",
    intelligentCryptoAnalysis: "Intelligent Crypto Analysis",
    intelligentCryptoAnalysisDesc: "Our AI algorithms analyze market trends, social sentiment, and on-chain data to identify promising crypto assets.",
    cryptoRiskManagement: "Crypto Risk Management",
    cryptoRiskManagementDesc: "Advanced risk assessment tools help protect your crypto investments during market volatility and maximize returns.",
    aiCryptoTrading: "AI Crypto Trading",
    aiCryptoTradingDesc: "Our platform continuously monitors the crypto market and provides AI-driven recommendations for optimal entry and exit points.",
    cryptoDiversificationDesc: "Spread risk across carefully curated baskets of cryptocurrencies, stablecoins, and DeFi assets for optimal returns.",
    whyNowIsBest: "Why Now Is The Best Time For Crypto Investment",
    marketVolatility: "Market volatility creates unique opportunities for significant gains",
    institutionalAdoption: "Increasing institutional adoption driving crypto market growth",
    aiAdvantage: "AI-driven analysis gives our clients a significant edge",
    cryptoRegulation: "Evolving regulatory clarity creating a more stable market",
    
    regulated: "Licensed & Regulated",
    regulatedDesc: "European-licensed crypto investment provider",
    awardWinning: "Award-Winning",
    awardWinningDesc: "2023 Fintech Innovation Award Winner",
    topRated: "Top Rated Platform",
    asSeenIn: "As Seen In",
    
    happyInvestors: "Happy Investors",
    whatClientsSay: "What Our Clients Say",
    testimonialsSubheading: "Join thousands of satisfied investors who trust our platform for their cryptocurrency investments",
    retailInvestor: "Retail Investor",
    techProfessional: "Tech Professional",
    businessOwner: "Business Owner",
    testimonial1: "I started with just $500 and I've seen my portfolio grow 45% in 9 months. The AI recommendations are spot-on!",
    testimonial2: "The platform's risk management tools helped me navigate the crypto winter successfully while others lost significantly.",
    testimonial3: "NovaTrust's diversification strategies have allowed me to enter the crypto market with confidence despite my initial skepticism.",
    ratedExcellent: "Rated Excellent on TrustPilot",
    from: "from",
    reviews: "reviews",
    
    investmentOptions: "Investment Options",
    tailoredPackages: "Tailored Investment Packages",
    packagesSubheading: "Choose the investment package that fits your goals and budget - all managed by our AI-powered platform",
    starterPackage: "Crypto Starter",
    starterDesc: "Perfect for beginners looking to enter the crypto market with minimal risk",
    feature1Starter: "Start with just $100",
    feature2Starter: "Access to 5 top cryptocurrencies",
    feature3Starter: "Weekly market reports",
    feature4Starter: "Basic risk management",
    
    growthPackage: "Crypto Growth",
    growthDesc: "Designed for investors ready to accelerate their crypto portfolio growth",
    feature1Growth: "Minimum investment $500",
    feature2Growth: "Access to 15+ cryptocurrencies",
    feature3Growth: "AI-powered trading signals",
    feature4Growth: "Advanced risk management",
    feature5Growth: "Monthly strategy call",
    
    premiumPackage: "Crypto Premium",
    premiumDesc: "Our comprehensive solution for serious crypto investors seeking maximum returns",
    feature1Premium: "Minimum investment $2,000",
    feature2Premium: "Access to 30+ cryptocurrencies & DeFi",
    feature3Premium: "Custom portfolio construction",
    feature4Premium: "Premium risk management",
    feature5Premium: "Weekly strategy calls",
    feature6Premium: "Early access to new features",
    
    minimum: "minimum",
    projectedReturns: "Projected Returns",
    mostPopular: "Most Popular",
    startInvesting: "Start Investing",
    customPackage: "Need a Custom Package?",
    customPackageDesc: "We offer personalized investment strategies for larger investments or specific needs.",
    contactUs: "Contact Us",
    
    realResults: "Real Results",
    successStories: "Success Stories",
    successStoriesSubheading: "Real investors who transformed their financial future with our crypto investment platform",
    successStory1: "I was skeptical about crypto, but NovaTrust's approach changed my mind. Their AI tools helped me identify optimal entry points and their risk management protected my capital.",
    successStory2: "As a busy professional, I don't have time to monitor markets. NovaTrust's platform does the heavy lifting while I focus on my career. The results speak for themselves.",
    returnOnInvestment: "Return on Investment",
    initial: "Initial",
    currentValue: "Current",
    period: "Period",
    startYourSuccess: "Ready to start your own success story?",
    startMyJourney: "Start My Investment Journey",
  },
  it: {
    cryptoMarkets: "Mercati Crypto",
    marketUpdates: "Aggiornamenti di Mercato",
    research: "Ricerca",
    contact: "Contatti",
    features: "Caratteristiche",
    howItWorks: "Come Funziona",
    aiAssistant: "Assistente AI",
    getStarted: "Inizia Ora",
    cryptoInvestmentPlatform: "Piattaforma di Investimento Crypto",
    intelligentCrypto: "Crypto Intelligente",
    forModernInvestors: "per Investitori Moderni",
    heroPlatformDescription: "NovaTrust Invest combina tecnologia AI con esperienza umana per ottimizzare il potenziale di investimento in criptovalute nei volatili mercati di asset digitali di oggi.",
    startInvesting: "Inizia a Investire",
    tryAiAssistant: "Prova l'Assistente AI",
    annualReturns: "Rendimenti Annuali",
    averageCryptoReturns: "Rendimenti medi del portafoglio crypto",
    algorithmPrecision: "Precisione Algoritmica",
    cryptoMarketPrediction: "Precisione nella previsione del mercato crypto",
    clientSatisfaction: "Soddisfazione Clienti",
    globalCryptoInvestors: "Soddisfazione degli investitori crypto globali",
    ourApproach: "Il Nostro Approccio",
    sophisticatedCrypto: "Strumenti di Investimento Crypto Sofisticati",
    precisionTools: "Strumenti di precisione per navigare con fiducia nel complesso mondo delle criptovalute",
    intelligentAnalysis: "Analisi Intelligente",
    intelligentAnalysisDesc: "I nostri algoritmi AI analizzano tendenze di mercato, sentiment sociale e indicatori tecnici per identificare opportunità di investimento promettenti.",
    riskManagement: "Gestione del Rischio",
    riskManagementDesc: "Strumenti avanzati di valutazione del rischio aiutano a proteggere i tuoi investimenti durante la volatilità del mercato e massimizzare i rendimenti in condizioni favorevoli.",
    aiAssistedInvesting: "Investimenti Assistiti dall'AI",
    aiAssistedInvestingDesc: "La nostra piattaforma monitora continuamente il mercato e fornisce raccomandazioni basate sull'AI adattate ai tuoi obiettivi di investimento.",
    cryptoDiversification: "Diversificazione Crypto",
    cryptoDiversificationDesc: "Distribuisci il rischio su panieri selezionati di criptovalute, stablecoin e asset tokenizzati per un equilibrio ottimale.",
    advancedTechnology: "Perché La Nostra Tecnologia Ti Dà Un Vantaggio",
    specializedAlgorithms: "Algoritmi specializzati creati per mercati crypto volatili",
    globalInfrastructure: "Infrastruttura globale per il monitoraggio del mercato 24/7",
    expertTeam: "Team esperto di analisti crypto e data scientist",
    regulatoryMonitoring: "Monitoraggio normativo continuo per la conformità",
    
    // New translations
    growWealthFaster: "Fai Crescere la Tua Ricchezza Più Velocemente con Investimenti Crypto Curati da Esperti",
    cryptoReturnsHigher: "La nostra piattaforma alimentata dall'AI offre rendimenti crypto superiori del 25% rispetto alla media di mercato. Inizia con soli €100 e accedi a strategie di investimento precedentemente disponibili solo per le istituzioni.",
    averagePerformance: "Performance Media",
    securedInvestments: "Investimenti Sicuri",
    startWithJust: "Inizia con soli",
    growMyWealthNow: "Fai Crescere la Mia Ricchezza Ora",
    seeInvestmentOpportunities: "Vedi Opportunità di Investimento",
    regulatedPlatform: "Piattaforma Regolamentata",
    cryptoInsured: "Crypto Assicurate fino a €1M",
    activeInvestors: "Investitori Attivi",
    hotMarket: "MERCATO CALDO",
    whyChooseUs: "Perché Sceglierci",
    cryptoAdvantages: "Approfitta delle opportunità del mercato delle criptovalute con la nostra AI avanzata e la guida di esperti",
    intelligentCryptoAnalysis: "Analisi Crypto Intelligente",
    intelligentCryptoAnalysisDesc: "I nostri algoritmi AI analizzano tendenze di mercato, sentiment sociale e dati on-chain per identificare asset crypto promettenti.",
    cryptoRiskManagement: "Gestione del Rischio Crypto",
    cryptoRiskManagementDesc: "Strumenti avanzati di valutazione del rischio aiutano a proteggere i tuoi investimenti crypto durante la volatilità del mercato e massimizzare i rendimenti.",
    aiCryptoTrading: "Trading Crypto con AI",
    aiCryptoTradingDesc: "La nostra piattaforma monitora continuamente il mercato crypto e fornisce raccomandazioni basate sull'AI per punti di entrata e uscita ottimali.",
    cryptoDiversificationDesc: "Distribuisci il rischio su panieri accuratamente selezionati di criptovalute, stablecoin e asset DeFi per rendimenti ottimali.",
    whyNowIsBest: "Perché Ora è il Momento Migliore per l'Investimento Crypto",
    marketVolatility: "La volatilità del mercato crea opportunità uniche per guadagni significativi",
    institutionalAdoption: "La crescente adozione istituzionale guida la crescita del mercato crypto",
    aiAdvantage: "L'analisi basata sull'AI offre ai nostri clienti un vantaggio significativo",
    cryptoRegulation: "L'evoluzione della chiarezza normativa crea un mercato più stabile",
    
    regulated: "Autorizzato e Regolamentato",
    regulatedDesc: "Fornitore di investimenti crypto con licenza europea",
    awardWinning: "Premiato",
    awardWinningDesc: "Vincitore del Premio Innovazione Fintech 2023",
    topRated: "Piattaforma Più Votata",
    asSeenIn: "Come Visto Su",
    
    happyInvestors: "Investitori Soddisfatti",
    whatClientsSay: "Cosa Dicono i Nostri Clienti",
    testimonialsSubheading: "Unisciti a migliaia di investitori soddisfatti che si fidano della nostra piattaforma per i loro investimenti in criptovalute",
    retailInvestor: "Investitore al Dettaglio",
    techProfessional: "Professionista Tech",
    businessOwner: "Imprenditore",
    testimonial1: "Ho iniziato con soli €500 e ho visto il mio portafoglio crescere del 45% in 9 mesi. I consigli dell'AI sono perfetti!",
    testimonial2: "Gli strumenti di gestione del rischio della piattaforma mi hanno aiutato a navigare con successo l'inverno crypto mentre altri hanno perso significativamente.",
    testimonial3: "Le strategie di diversificazione di NovaTrust mi hanno permesso di entrare nel mercato crypto con fiducia nonostante il mio scetticismo iniziale.",
    ratedExcellent: "Valutato Eccellente su TrustPilot",
    from: "da",
    reviews: "recensioni",
    
    investmentOptions: "Opzioni di Investimento",
    tailoredPackages: "Pacchetti di Investimento Personalizzati",
    packagesSubheading: "Scegli il pacchetto di investimento che si adatta ai tuoi obiettivi e al tuo budget - tutti gestiti dalla nostra piattaforma alimentata dall'AI",
    starterPackage: "Crypto Starter",
    starterDesc: "Perfetto per principianti che vogliono entrare nel mercato crypto con un rischio minimo",
    feature1Starter: "Inizia con soli €100",
    feature2Starter: "Accesso a 5 principali criptovalute",
    feature3Starter: "Report di mercato settimanali",
    feature4Starter: "Gestione del rischio di base",
    
    growthPackage: "Crypto Growth",
    growthDesc: "Progettato per investitori pronti ad accelerare la crescita del loro portafoglio crypto",
    feature1Growth: "Investimento minimo €500",
    feature2Growth: "Accesso a più di 15 criptovalute",
    feature3Growth: "Segnali di trading alimentati dall'AI",
    feature4Growth: "Gestione avanzata del rischio",
    feature5Growth: "Chiamata strategica mensile",
    
    premiumPackage: "Crypto Premium",
    premiumDesc: "La nostra soluzione completa per investitori crypto seri alla ricerca di rendimenti massimi",
    feature1Premium: "Investimento minimo €2.000",
    feature2Premium: "Accesso a più di 30 criptovalute e DeFi",
    feature3Premium: "Costruzione personalizzata del portafoglio",
    feature4Premium: "Gestione premium del rischio",
    feature5Premium: "Chiamate strategiche settimanali",
    feature6Premium: "Accesso anticipato alle nuove funzionalità",
    
    minimum: "minimo",
    projectedReturns: "Rendimenti Previsti",
    mostPopular: "Più Popolare",
    startInvesting: "Inizia a Investire",
    customPackage: "Hai Bisogno di un Pacchetto Personalizzato?",
    customPackageDesc: "Offriamo strategie di investimento personalizzate per investimenti più grandi o esigenze specifiche.",
    contactUs: "Contattaci",
    
    realResults: "Risultati Reali",
    successStories: "Storie di Successo",
    successStoriesSubheading: "Investitori reali che hanno trasformato il loro futuro finanziario con la nostra piattaforma di investimento crypto",
    successStory1: "Ero scettico sulle crypto, ma l'approccio di NovaTrust mi ha fatto cambiare idea. I loro strumenti AI mi hanno aiutato a identificare punti di ingresso ottimali e la loro gestione del rischio ha protetto il mio capitale.",
    successStory2: "Come professionista impegnato, non ho tempo per monitorare i mercati. La piattaforma di NovaTrust fa il lavoro pesante mentre io mi concentro sulla mia carriera. I risultati parlano da soli.",
    returnOnInvestment: "Ritorno sull'Investimento",
    initial: "Iniziale",
    currentValue: "Attuale",
    period: "Periodo",
    startYourSuccess: "Pronto a iniziare la tua storia di successo?",
    startMyJourney: "Inizia il Mio Viaggio di Investimento",
  }
};

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<string>(() => {
    // Try to get saved language from localStorage
    const savedLang = localStorage.getItem('preferredLanguage');
    return savedLang || 'en';
  });
  
  useEffect(() => {
    // Save language preference to localStorage when it changes
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof (typeof translations)['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-[70px] bg-transparent border-none focus:ring-0 focus:ring-offset-0">
        <SelectValue>
          <div className="flex items-center">
            <Globe className="h-4 w-4 mr-2" />
            {language.toUpperCase()}
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">
          <div className="flex items-center">
            <span className="mr-2">🇬🇧</span>
            English
          </div>
        </SelectItem>
        <SelectItem value="it">
          <div className="flex items-center">
            <span className="mr-2">🇮🇹</span>
            Italiano
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
