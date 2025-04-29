
import React from 'react';
import { Check, ArrowRight, Bitcoin, HandCoins } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from './LanguageSelector';

const InvestmentPackages = () => {
  const { t } = useLanguage();
  
  const packages = [
    {
      name: t('starterPackage'),
      price: '$100',
      description: t('starterDesc'),
      features: [
        t('feature1Starter'),
        t('feature2Starter'),
        t('feature3Starter'),
        t('feature4Starter')
      ],
      recommended: false,
      icon: <Bitcoin className="h-8 w-8 text-amber-500" />,
      returnRate: '12-15%'
    },
    {
      name: t('growthPackage'),
      price: '$500',
      description: t('growthDesc'),
      features: [
        t('feature1Growth'),
        t('feature2Growth'),
        t('feature3Growth'),
        t('feature4Growth'),
        t('feature5Growth')
      ],
      recommended: true,
      icon: <HandCoins className="h-8 w-8 text-purple-500" />,
      returnRate: '18-22%'
    },
    {
      name: t('premiumPackage'),
      price: '$2,000',
      description: t('premiumDesc'),
      features: [
        t('feature1Premium'),
        t('feature2Premium'),
        t('feature3Premium'),
        t('feature4Premium'),
        t('feature5Premium'),
        t('feature6Premium')
      ],
      recommended: false,
      icon: <Bitcoin className="h-8 w-8 text-blue-500" />,
      returnRate: '22-28%'
    }
  ];

  return (
    <section id="investment-packages" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-amber-500/5 px-3 py-1 mb-4 shadow-sm">
            <span className="text-sm font-medium uppercase tracking-wider text-amber-600">{t('investmentOptions')}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-2">{t('tailoredPackages')}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t('packagesSubheading')}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden ${pkg.recommended ? 'ring-2 ring-amber-500 shadow-xl' : 'shadow-lg'}`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  {t('mostPopular')}
                </div>
              )}
              <CardHeader className="text-center">
                <div className="mx-auto bg-gray-50 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  {pkg.icon}
                </div>
                <CardTitle className="text-xl">{pkg.name}</CardTitle>
                <div className="flex justify-center items-baseline my-3">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-gray-500 ml-1">{t('minimum')}</span>
                </div>
                <div className="bg-green-50 text-green-700 rounded-full py-1 px-3 text-sm font-medium inline-block">
                  {t('projectedReturns')}: {pkg.returnRate}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6 text-center">
                  {pkg.description}
                </CardDescription>
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="mt-1 mr-2">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${pkg.recommended 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600' 
                    : 'bg-gray-800 hover:bg-gray-700'}`} 
                  onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="flex items-center">
                    {t('startInvesting')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
          <h3 className="text-xl font-semibold mb-3">{t('customPackage')}</h3>
          <p className="text-gray-600 mb-4">{t('customPackageDesc')}</p>
          <Button 
            variant="outline"
            className="border-amber-500 text-amber-500 hover:bg-amber-500/5"
            onClick={() => document.getElementById('ai-assistant')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('contactUs')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPackages;
