
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import AIChat from '../components/AIChat';
import RegisterForm from '../components/RegisterForm';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import TrustSignals from '../components/TrustSignals';
import InvestmentPackages from '../components/InvestmentPackages';
import FAQ from '../components/FAQ';
import BottomCTA from '../components/BottomCTA';
import Partners from '../components/Partners';
import SuccessStories from '../components/SuccessStories';
import { useLanguage } from '../components/LanguageSelector';

const Index = () => {
  const { t, language } = useLanguage();
  
  // Dynamic title content based on language
  const titleContent = language === 'en' 
    ? { title: "Elite Wealth Creation: AI + Expert Strategy = Financial Freedom", subtitle: "Start your journey to financial independence today with just €270" }
    : { title: "Creazione di Ricchezza d'Elite: AI + Strategia Esperta = Libertà Finanziaria", subtitle: "Inizia oggi il tuo percorso verso l'indipendenza finanziaria con soli €270" };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{t('pageTitle')}</title>
        <meta name="description" content={t('pageTitleDescription')} />
      </Helmet>
      
      <Header />
      <Navbar />
      
      <main className="flex-grow">
        {/* Website Title Section - Added at the beginning */}
        <div className="bg-gradient-to-r from-purple-800 via-violet-700 to-indigo-800 text-white py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              {titleContent.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium">
              {titleContent.subtitle}
            </p>
            <div className="mt-8">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105">
                {language === 'en' ? 'Start Investing Now' : 'Inizia a Investire Ora'}
              </button>
            </div>
          </div>
        </div>
        
        <Hero />
        <TrustSignals />
        <HowItWorks />
        <InvestmentPackages />
        <Partners />
        <SuccessStories />
        <Testimonials />
        <FAQ />
        <AIChat />
        <BottomCTA />
        <RegisterForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
