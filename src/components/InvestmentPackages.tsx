
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
      name: t('startPackage'),
      price: '299 €',
      description: t('startPackageDesc'),
      features: [
        t('personalBroker'),
        t('aiAlgorithm'),
        t('marketUpdates'),
        t('contact')
      ],
      recommended: false,
      icon: <EuroIcon className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400" />,
      returnRate: '12-15%',
      bgClass: 'bg-white/5 border-white/10 hover:border-amber-500/20'
    },
    {
      name: t('growPackage'),
      price: '549 €',
      description: t('growPackageDesc'),
      features: [
        t('personalBroker'),
        t('aiAlgorithm'),
        '+ Bot auto-trading',
        t('marketUpdates'),
        t('contact')
      ],
      recommended: true,
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />,
      returnRate: '18-22%',
      bgClass: 'bg-amber-900/10 border-amber-500/30 hover:border-amber-500/50'
    },
    {
      name: t('elitePackage'),
      price: '999 €',
      description: t('elitePackageDesc'),
      features: [
        t('personalBroker'),
        t('aiAlgorithm'),
        '+ Bot auto-trading',
        t('marketUpdates'),
        t('support')
      ],
      recommended: false,
      icon: <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
      returnRate: '22-28%',
      bgClass: 'bg-white/5 border-white/10 hover:border-blue-500/20'
    }
  ];

  return (
    <section id="investment-packages" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-amber-500/10 px-3 py-1 mb-4 shadow-sm">
            <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-amber-400">{t('investmentOptions')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-gradient px-2">{t('tailoredPackages')}</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            {t('packagesSubheading')}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex"
            >
              <Card 
                className={`relative overflow-hidden backdrop-blur-md text-white ${pkg.bgClass} ${pkg.recommended ? 'shadow-amber-500/20 shadow-lg' : 'shadow-lg'} w-full flex flex-col`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-amber-500 text-black px-2 sm:px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    {t('mostPopular')}
                  </div>
                )}
                <CardHeader className="text-center flex-shrink-0">
                  <div className={`mx-auto ${pkg.recommended ? 'bg-amber-500/20' : 'bg-white/5'} rounded-full p-2 sm:p-3 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4`}>
                    {pkg.icon}
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-white">{pkg.name}</CardTitle>
                  <div className="flex justify-center items-baseline my-2 sm:my-3">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{pkg.price}</span>
                    <span className="text-gray-300 ml-1 text-sm sm:text-base">{t('minimum')}</span>
                  </div>
                  <div className="bg-green-900/20 text-green-400 rounded-full py-1 px-2 sm:px-3 text-xs sm:text-sm font-medium inline-block">
                    {t('projectedReturns')}: {pkg.returnRate}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-300 mb-4 sm:mb-6 text-center text-sm sm:text-base">
                    {pkg.description}
                  </CardDescription>
                  <ul className="space-y-2 sm:space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="mt-0.5 sm:mt-1 mr-2">
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                        </div>
                        <span className="text-gray-200 text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex-shrink-0">
                  <Button 
                    className={`w-full text-sm sm:text-base ${pkg.recommended 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white' 
                      : 'bg-white/10 hover:bg-white/20 text-white'}`} 
                    onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="flex items-center">
                      {pkg.recommended ? t('startInvesting') : `${t('startNow')}`}
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 sm:mt-12 bg-white/5 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-white/10 text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t('customPackageTitle')}</h3>
          <p className="text-gray-300 text-sm sm:text-base">{t('customPackageDesc')}</p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPackages;
