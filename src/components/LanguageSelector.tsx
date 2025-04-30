
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
  | 'contactUs'
  | 'cryptoMarkets'
  | 'marketUpdates'
  | 'research'
  | 'contact'
  | 'hotMarket'
  | 'title'
  | 'subheadline'
  | 'startNow'
  | 'bookCall'
  | 'personalBroker'
  | 'personalBrokerDesc'
  | 'aiAlgorithm'
  | 'aiAlgorithmDesc'
  | 'fastGrowth'
  | 'fastGrowthDesc'
  | 'secure'
  | 'support'
  | 'regulated'
  | 'regulatedDesc'
  | 'insured'
  | 'step1Title'
  | 'step1Desc'
  | 'step2Title'
  | 'step2Desc'
  | 'step3Title'
  | 'step3Desc'
  | 'whyChooseTitle'
  | 'benefit1Title'
  | 'benefit1Desc'
  | 'benefit2Title'
  | 'benefit2Desc'
  | 'benefit3Title'
  | 'benefit3Desc'
  | 'benefit4Title'
  | 'benefit4Desc'
  | 'benefit5Title'
  | 'benefit5Desc'
  | 'secureTitle'
  | 'secureDesc'
  | 'startPackage'
  | 'startPackageDesc'
  | 'growPackage'
  | 'growPackageDesc'
  | 'elitePackage'
  | 'elitePackageDesc'
  | 'customPackageTitle'
  | 'customPackageDesc'
  | 'testimonialTitle'
  | 'testimonialSubtitle'
  | 'testimonialUser1'
  | 'testimonialRole1'
  | 'testimonialText1'
  | 'testimonialUser2'
  | 'testimonialRole2'
  | 'testimonialText2'
  | 'testimonialUser3'
  | 'testimonialRole3'
  | 'testimonialText3'
  | 'avgProfit'
  | 'profitableClients'
  | 'avgTimeToProfit'
  | 'faqTitle'
  | 'faqSubtitle'
  | 'faq1Q'
  | 'faq1A'
  | 'faq2Q'
  | 'faq2A'
  | 'faq3Q'
  | 'faq3A'
  | 'faq4Q'
  | 'faq4A'
  | 'faq5Q'
  | 'faq5A'
  | 'moreQuestions'
  | 'talkToBroker'
  | 'ctaTitle'
  | 'ctaSubtitle'
  | 'startToday'
  | 'freeConsultation'
  | 'fastRegistration'
  | 'instantBroker'
  | 'sameDay'
  | 'seniorInvestmentAdvisor'
  | 'wealthManager'
  | 'investmentStrategist'
  | 'clientRelationshipManager'
  | 'cryptoSpecialist'
  | 'portfolioDiversification'
  | 'emergingMarkets'
  | 'sustainableInvesting'
  | 'regulatedDesc'
  | 'awardWinning'
  | 'awardWinningDesc'
  | 'topRated'
  | 'asSeenIn';

// Create the context with proper typing and default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'it',
  switchLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('it');

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

  const translations: Record<string, Record<TranslationKey, string>> = {
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
      contactUs: "Contact Us",
      cryptoMarkets: "Crypto Markets",
      marketUpdates: "Market Updates",
      research: "Research",
      contact: "Contact",
      hotMarket: "Hot Market",
      title: "Invest with confidence. Personal broker + AI = fast profit.",
      subheadline: "Start earning with strategy from just €270.",
      startNow: "Start now with €270",
      bookCall: "Book a call",
      personalBroker: "Personal Broker",
      personalBrokerDesc: "Dedicated expert for your investment journey",
      aiAlgorithm: "AI Algorithm",
      aiAlgorithmDesc: "Smart trading strategies for maximum gains",
      fastGrowth: "Fast Growth",
      fastGrowthDesc: "Automated bot for quick and consistent profits",
      secure: "Secure & Regulated",
      support: "24/7 Support",
      regulated: "Regulated Platform",
      regulatedDesc: "Fully compliant with financial regulations",
      insured: "Insured Investments",
      step1Title: "Sign up with €270",
      step1Desc: "Your initial investment opens access to our complete automated trading platform.",
      step2Title: "Get personal broker + activate AI strategy",
      step2Desc: "Your broker analyzes your financial profile and sets up a customized AI strategy.",
      step3Title: "Bot invests — you watch the growth",
      step3Desc: "Our automated system works 24/7 to maximize your investments while you monitor progress.",
      whyChooseTitle: "Why choose our platform?",
      benefit1Title: "Real personal broker",
      benefit1Desc: "Each client gets a certified broker experienced in financial markets.",
      benefit2Title: "AI + tested strategy",
      benefit2Desc: "Advanced algorithms developed and tested with 93.5% precision on global markets.",
      benefit3Title: "24/7 Trading Bot",
      benefit3Desc: "Our automated system works non-stop to identify the best opportunities.",
      benefit4Title: "Transparency and estimated profit",
      benefit4Desc: "Access to your dashboard with real-time reports and profit forecasts.",
      benefit5Title: "Guarantees and real-time support",
      benefit5Desc: "Ongoing technical assistance and financial advice for your investment.",
      secureTitle: "Regulated and secure platform",
      secureDesc: "All transactions are processed through our globally regulated partners. Your funds are kept safe and you can withdraw anytime.",
      startPackage: "Start",
      startPackageDesc: "Perfect for beginners who want to explore investment opportunities",
      growPackage: "Grow",
      growPackageDesc: "Ideal for investors who want to maximize earnings",
      elitePackage: "Elite",
      elitePackageDesc: "For serious investors who want maximum performance",
      customPackageTitle: "Need a custom package?",
      customPackageDesc: "Contact us for a personalized investment solution tailored to your specific needs",
      testimonialTitle: "What our clients say",
      testimonialSubtitle: "Discover the real experiences of investors who have chosen our platform",
      testimonialUser1: "Alexandru M.",
      testimonialRole1: "Entrepreneur",
      testimonialText1: "Started with €270, now have a €3,500 portfolio in 2 months. Didn't think it was possible to get such results in such a short time!",
      testimonialUser2: "Maria L.",
      testimonialRole2: "IT Specialist",
      testimonialText2: "The experience with my broker has been exceptional. He explained every step and the AI strategies worked exactly as promised. 18% return in the first month.",
      testimonialUser3: "David K.",
      testimonialRole3: "Finance Professional",
      testimonialText3: "Being a specialist in the field, I was skeptical. But after seeing how their algorithms work and how the portfolio is built, I was convinced to invest more.",
      avgProfit: "Average profit",
      profitableClients: "Profitable clients",
      avgTimeToProfit: "Average time to profit",
      faqTitle: "Got questions? We have answers",
      faqSubtitle: "Answers to the most common questions about our platform",
      faq1Q: "Is it legal?",
      faq1A: "Yes, we operate in accordance with European financial regulations. All transactions are carried out through our regulated partners, with valid licenses for financial operations in the EU.",
      faq2Q: "How long until I see profit?",
      faq2A: "Most of our clients start to see their first earnings in the first 1-2 weeks. The exact time depends on market conditions and the customized strategy. Your personal broker will provide realistic estimates based on your investment profile.",
      faq3Q: "What does my broker do?",
      faq3A: "Your personal broker analyzes your financial profile, configures the right AI strategies for your goals, monitors performance, makes adjustments when necessary, and provides personalized advice to maximize earnings.",
      faq4Q: "Can I withdraw money anytime?",
      faq4A: "Yes, you can withdraw your funds at any time without hidden fees. The withdrawal process is simple and direct, with a standard processing period of 1-3 business days, depending on your bank.",
      faq5Q: "What does AI strategy mean?",
      faq5A: "Our AI strategies use advanced machine learning algorithms that continuously analyze market data to identify high-potential trading opportunities. These algorithms learn and adapt to market conditions, constantly improving their performance.",
      moreQuestions: "Still have questions?",
      talkToBroker: "Talk to a broker",
      ctaTitle: "Want automated profit with real strategy and support?",
      ctaSubtitle: "Join over 700 investors who are growing their wealth with the help of personal brokers and our AI strategies",
      startToday: "Start today with €270",
      freeConsultation: "Free consultation",
      fastRegistration: "Registration in under 3 minutes",
      instantBroker: "Personal broker assigned instantly",
      sameDay: "Strategy setup on the same day",
      seniorInvestmentAdvisor: "Senior Investment Advisor",
      wealthManager: "Wealth Manager",
      investmentStrategist: "Investment Strategist",
      clientRelationshipManager: "Client Relationship Manager",
      cryptoSpecialist: "Crypto Specialist",
      portfolioDiversification: "Portfolio Diversification",
      emergingMarkets: "Emerging Markets",
      sustainableInvesting: "Sustainable Investing",
      awardWinning: "Award Winning",
      awardWinningDesc: "Recognized for excellence in AI trading",
      topRated: "Top Rated",
      asSeenIn: "As Seen In"
    },
    it: {
      combineHumanAI: "Combiniamo intelligenza umana e artificiale per far crescere il tuo patrimonio",
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
      contactUs: "Contattaci",
      cryptoMarkets: "Mercati Crypto",
      marketUpdates: "Aggiornamenti Mercato",
      research: "Ricerca",
      contact: "Contatto",
      hotMarket: "Mercato Caldo",
      title: "Investi con fiducia. Broker personale + AI = profitto rapido.",
      subheadline: "Inizia a guadagnare con strategia da soli 270 €.",
      startNow: "Inizia ora con 270 €",
      bookCall: "Prenota una chiamata",
      personalBroker: "Broker Personale",
      personalBrokerDesc: "Esperto dedicato per il tuo percorso di investimento",
      aiAlgorithm: "Algoritmo AI",
      aiAlgorithmDesc: "Strategie di trading intelligenti per guadagni massimi",
      fastGrowth: "Crescita Rapida",
      fastGrowthDesc: "Bot automatizzato per profitti rapidi e costanti",
      secure: "Sicuro & Regolamentato",
      support: "Supporto 24/7",
      regulated: "Piattaforma Regolamentata",
      regulatedDesc: "Pienamente conforme alle normative finanziarie",
      insured: "Investimenti Assicurati",
      step1Title: "Iscriviti con 270 €",
      step1Desc: "Il tuo investimento iniziale apre l'accesso alla nostra piattaforma completa di trading automatizzato.",
      step2Title: "Ottieni broker personale + attiva strategia AI",
      step2Desc: "Il tuo broker analizza il tuo profilo finanziario e configura una strategia AI personalizzata.",
      step3Title: "Il bot investe — tu guardi la crescita",
      step3Desc: "Il nostro sistema automatizzato lavora 24/7 per massimizzare i tuoi investimenti mentre tu monitori i progressi.",
      whyChooseTitle: "Perché scegliere la nostra piattaforma?",
      benefit1Title: "Broker personale reale",
      benefit1Desc: "Ogni cliente ottiene un broker certificato con esperienza nei mercati finanziari.",
      benefit2Title: "AI + strategia testata",
      benefit2Desc: "Algoritmi avanzati sviluppati e testati con precisione del 93,5% sui mercati globali.",
      benefit3Title: "Bot di trading 24/7",
      benefit3Desc: "Il nostro sistema automatizzato lavora ininterrottamente per identificare le migliori opportunità.",
      benefit4Title: "Trasparenza e profitto stimato",
      benefit4Desc: "Accesso alla tua dashboard con report in tempo reale e previsioni di guadagno.",
      benefit5Title: "Garanzie e supporto in tempo reale",
      benefit5Desc: "Assistenza tecnica e consulenza finanziaria continua per il tuo investimento.",
      secureTitle: "Piattaforma regolamentata e sicura",
      secureDesc: "Tutte le transazioni sono elaborate tramite i nostri partner regolamentati a livello globale. I tuoi fondi sono mantenuti al sicuro e puoi prelevare in qualsiasi momento.",
      startPackage: "Start",
      startPackageDesc: "Perfetto per principianti che vogliono esplorare opportunità di investimento",
      growPackage: "Grow",
      growPackageDesc: "Ideale per investitori che vogliono massimizzare i guadagni",
      elitePackage: "Elite",
      elitePackageDesc: "Per investitori seri che desiderano prestazioni massime",
      customPackageTitle: "Hai bisogno di un pacchetto personalizzato?",
      customPackageDesc: "Contattaci per una soluzione di investimento personalizzata adatta alle tue esigenze specifiche",
      testimonialTitle: "Cosa dicono i nostri clienti",
      testimonialSubtitle: "Scopri le esperienze reali degli investitori che hanno scelto la nostra piattaforma",
      testimonialUser1: "Alexandru M.",
      testimonialRole1: "Imprenditore",
      testimonialText1: "Ho iniziato con 270 €, ora ho un portafoglio di 3.500 € in 2 mesi. Non pensavo fosse possibile ottenere tali risultati in così poco tempo!",
      testimonialUser2: "Maria L.",
      testimonialRole2: "Specialista IT",
      testimonialText2: "L'esperienza con il mio broker è stata eccezionale. Mi ha spiegato ogni passo e le strategie AI hanno funzionato esattamente come promesso. Rendimento del 18% nel primo mese.",
      testimonialUser3: "David K.",
      testimonialRole3: "Professionista Finanziario",
      testimonialText3: "Essendo uno specialista del settore, ero scettico. Ma dopo aver visto come funzionano i loro algoritmi e come viene costruito il portafoglio, mi sono convinto a investire di più.",
      avgProfit: "Profitto medio",
      profitableClients: "Clienti redditizi",
      avgTimeToProfit: "Tempo medio al profitto",
      faqTitle: "Hai domande? Abbiamo risposte",
      faqSubtitle: "Risposte alle domande più comuni sulla nostra piattaforma",
      faq1Q: "È legale?",
      faq1A: "Sì, operiamo in conformità con le normative finanziarie europee. Tutte le transazioni vengono effettuate tramite i nostri partner regolamentati, con licenze valide per operazioni finanziarie nell'UE.",
      faq2Q: "Quanto tempo ci vuole per vedere un profitto?",
      faq2A: "La maggior parte dei nostri clienti inizia a vedere i primi guadagni nelle prime 1-2 settimane. Il tempo esatto dipende dalle condizioni di mercato e dalla strategia personalizzata. Il tuo broker personale fornirà stime realistiche basate sul tuo profilo di investimento.",
      faq3Q: "Cosa fa il mio broker?",
      faq3A: "Il tuo broker personale analizza il tuo profilo finanziario, configura le giuste strategie AI per i tuoi obiettivi, monitora le prestazioni, apporta modifiche quando necessario e fornisce consulenza personalizzata per massimizzare i guadagni.",
      faq4Q: "Posso prelevare denaro in qualsiasi momento?",
      faq4A: "Sì, puoi prelevare i tuoi fondi in qualsiasi momento senza commissioni nascoste. Il processo di prelievo è semplice e diretto, con un periodo di elaborazione standard di 1-3 giorni lavorativi, a seconda della tua banca.",
      faq5Q: "Cosa significa strategia AI?",
      faq5A: "Le nostre strategie AI utilizzano algoritmi avanzati di machine learning che analizzano continuamente i dati di mercato per identificare opportunità di trading ad alto potenziale. Questi algoritmi imparano e si adattano alle condizioni di mercato, migliorando costantemente le loro prestazioni.",
      moreQuestions: "Hai ancora domande?",
      talkToBroker: "Parla con un broker",
      ctaTitle: "Vuoi un profitto automatizzato con strategia e supporto reale?",
      ctaSubtitle: "Unisciti a oltre 700 investitori che stanno facendo crescere il loro patrimonio con l'aiuto di broker personali e delle nostre strategie AI",
      startToday: "Inizia oggi con 270 €",
      freeConsultation: "Consulenza gratuita",
      fastRegistration: "Registrazione in meno di 3 minuti",
      instantBroker: "Broker personale assegnato istantaneamente",
      sameDay: "Configurazione strategia lo stesso giorno",
      seniorInvestmentAdvisor: "Consulente Senior d'Investimento",
      wealthManager: "Wealth Manager",
      investmentStrategist: "Stratega d'Investimento",
      clientRelationshipManager: "Responsabile Relazioni Clienti",
      cryptoSpecialist: "Specialista Crypto",
      portfolioDiversification: "Diversificazione del Portafoglio",
      emergingMarkets: "Mercati Emergenti",
      sustainableInvesting: "Investimenti Sostenibili",
      awardWinning: "Premiato",
      awardWinningDesc: "Riconosciuto per l'eccellenza nel trading con AI",
      topRated: "Altamente Valutato",
      asSeenIn: "Come Visto Su"
    }
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
