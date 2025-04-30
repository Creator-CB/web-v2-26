
import React from 'react';
import { Check, ArrowRight, EuroIcon, Users, Bot, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from './LanguageSelector';
import { motion } from 'framer-motion';

const InvestmentPackages = () => {
  const { t } = useLanguage();
  
  const packages = [
    {
      name: 'Start',
      price: '270 €',
      description: 'Perfect pentru începători care doresc să exploreze oportunități de investiții',
      features: [
        'Broker personal',
        'Strategie AI de bază',
        'Actualizări săptămânale ale pieței',
        'Suport prin email'
      ],
      recommended: false,
      icon: <EuroIcon className="h-8 w-8 text-amber-400" />,
      returnRate: '12-15%',
      bgClass: 'bg-white/5 border-white/10 hover:border-amber-500/20'
    },
    {
      name: 'Grow',
      price: '549 €',
      description: 'Ideal pentru investitori care doresc să maximizeze câștigurile',
      features: [
        'Broker personal dedicat',
        'Strategii AI avansate',
        '+ Bot auto-trading',
        'Analize zilnice de piață',
        'Suport prioritar prin email și chat'
      ],
      recommended: true,
      icon: <Users className="h-8 w-8 text-purple-400" />,
      returnRate: '18-22%',
      bgClass: 'bg-amber-900/10 border-amber-500/30 hover:border-amber-500/50'
    },
    {
      name: 'Elite',
      price: '999 €',
      description: 'Pentru investitorii serioși care doresc performanțe maxime',
      features: [
        'Broker senior dedicat',
        'Algoritmi AI premium',
        '+ Bot auto-trading avansat',
        '+ Apeluri lunare 1-la-1',
        'Planuri țintă de profit',
        'Suport 24/7 prioritar'
      ],
      recommended: false,
      icon: <Bot className="h-8 w-8 text-blue-400" />,
      returnRate: '22-28%',
      bgClass: 'bg-white/5 border-white/10 hover:border-blue-500/20'
    }
  ];

  return (
    <section id="investment-packages" className="section-padding bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-amber-500/10 px-3 py-1 mb-4 shadow-sm">
            <span className="text-sm font-medium uppercase tracking-wider text-amber-400">{t('investmentOptions')}</span>
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl mb-2 text-gradient">Pachete de investiții personalizate</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Alege pachetul de investiții care se potrivește cel mai bine obiectivelor tale financiare
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card 
                className={`relative overflow-hidden backdrop-blur-md text-white ${pkg.bgClass} ${pkg.recommended ? 'shadow-amber-500/20 shadow-lg' : 'shadow-lg'}`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-amber-500 text-black px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    {t('mostPopular')}
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className={`mx-auto ${pkg.recommended ? 'bg-amber-500/20' : 'bg-white/5'} rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4`}>
                    {pkg.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{pkg.name}</CardTitle>
                  <div className="flex justify-center items-baseline my-3">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                    <span className="text-gray-300 ml-1">{t('minimum')}</span>
                  </div>
                  <div className="bg-green-900/20 text-green-400 rounded-full py-1 px-3 text-sm font-medium inline-block">
                    {t('projectedReturns')}: {pkg.returnRate}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-6 text-center">
                    {pkg.description}
                  </CardDescription>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="mt-1 mr-2">
                          <Check className="h-5 w-5 text-green-400" />
                        </div>
                        <span className="text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${pkg.recommended 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white' 
                      : 'bg-white/10 hover:bg-white/20 text-white'}`} 
                    onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="flex items-center">
                      {pkg.recommended ? t('startInvesting') : `Începe cu ${pkg.price}`}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 text-center">
          <h3 className="text-xl font-semibold mb-3">Ai nevoie de un pachet personalizat?</h3>
          <p className="text-gray-300 mb-4">Contactează-ne pentru o soluție de investiții personalizată adaptată nevoilor tale specifice</p>
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline"
              className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
              onClick={() => document.getElementById('ai-assistant')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('contactUs')}
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Parla con il tuo broker personale
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPackages;
