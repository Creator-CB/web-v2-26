
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import HowItWorks from '../components/HowItWorks';
import AIChat from '../components/AIChat';
import RegisterForm from '../components/RegisterForm';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>NovaTrust Invest | European AI-Powered Investment Platform</title>
        <meta name="description" content="NovaTrust Invest combines AI technology with human expertise to optimize investment potential in Europe's dynamic markets." />
      </Helmet>
      
      <Header />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <AboutUs />
        <HowItWorks />
        <AIChat />
        <RegisterForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
