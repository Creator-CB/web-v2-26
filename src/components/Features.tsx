
import React from 'react';
import { Check, TrendingUp, Shield, Bot, Brain, Bitcoin, Wallet } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from './LanguageSelector';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Brain className="h-10 w-10 text-invest-purple" />,
      title: t("intelligentAnalysis"),
      description: t("intelligentAnalysisDesc")
    },
    {
      icon: <Shield className="h-10 w-10 text-invest-blue" />,
      title: t("riskManagement"),
      description: t("riskManagementDesc")
    },
    {
      icon: <Bot className="h-10 w-10 text-invest-cyan" />,
      title: t("aiAssistedInvesting"),
      description: t("aiAssistedInvestingDesc")
    },
    {
      icon: <Bitcoin className="h-10 w-10 text-amber-500" />,
      title: t("cryptoDiversification"),
      description: t("cryptoDiversificationDesc")
    },
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-blue-500/5 px-3 py-1 mb-4 shadow-sm">
            <span className="text-sm font-medium uppercase tracking-wider text-blue-600">{t("ourApproach")}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-2">{t("sophisticatedCrypto")}</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {t("precisionTools")}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-blue-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border-t-2 border-t-amber-400 bg-white/80 backdrop-blur-sm h-full premium-card shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-amber-500/5 to-blue-500/5 shadow-sm">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-28 glass-card p-10 relative overflow-hidden border border-gray-100 rounded-2xl shadow-xl">
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-radial from-amber-500/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="mb-12 md:mb-0 md:w-2/3">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">{t("advancedTechnology")}</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/10 shadow-sm">
                      <Check className="h-4 w-4 text-amber-500" />
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600">{t("specializedAlgorithms")}</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/10 shadow-sm">
                      <Check className="h-4 w-4 text-amber-500" />
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600">{t("globalInfrastructure")}</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/10 shadow-sm">
                      <Check className="h-4 w-4 text-amber-500" />
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600">{t("expertTeam")}</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/10 shadow-sm">
                      <Check className="h-4 w-4 text-amber-500" />
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600">{t("regulatoryMonitoring")}</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 bg-gradient-to-br from-amber-500 to-blue-500 opacity-90 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white text-4xl font-bold">93.5%</span>
                </div>
                <div className="absolute -inset-3 border border-dashed border-amber-500/30 rounded-full animate-spin-slow"></div>
                <div className="absolute -inset-6 border border-dashed border-blue-500/10 rounded-full animate-spin-slow [animation-direction:reverse]"></div>
              </div>
            </div>
          </div>
          <p className="text-sm text-center mt-8 text-gray-500">*93.5% algorithm accuracy rate based on 2023-2024 cryptocurrency market performance analytics</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
