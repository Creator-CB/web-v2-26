
import React from 'react';
import { Check, TrendingUp, Shield, Bot, Brain } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-invest-purple" />,
      title: "Intelligent Analysis",
      description: "Our algorithms analyze market trends across European exchanges, identifying opportunities before they become mainstream."
    },
    {
      icon: <Shield className="h-10 w-10 text-invest-blue" />,
      title: "Risk Management",
      description: "Advanced risk assessment tools that adapt to market volatility and European economic conditions to protect your portfolio."
    },
    {
      icon: <Bot className="h-10 w-10 text-invest-cyan" />,
      title: "AI-Assisted Investing",
      description: "Get personalized European investment recommendations based on your financial goals and risk tolerance profile."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-invest-purple" />,
      title: "Market Intelligence",
      description: "Stay ahead with predictive models that analyze European market indicators and global economic trends."
    },
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-invest-purple/5 px-3 py-1 mb-4 shadow-sm">
            <span className="text-sm font-medium uppercase tracking-wider text-invest-purple">Our Approach</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-2">Sophisticated Investment Technology</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Precision tools designed for Europe's diverse investment landscape
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-invest-purple to-invest-blue rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border-t-2 border-t-invest-purple bg-white/80 backdrop-blur-sm h-full premium-card shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-invest-purple/5 to-invest-blue/5 shadow-sm">
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
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-radial from-invest-purple/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="mb-12 md:mb-0 md:w-2/3">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Advanced Technology, European Expertise</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-invest-purple/10 shadow-sm">
                      <Check className="h-4 w-4 text-invest-purple" />
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600">Specialized algorithms trained on European market data since 2008</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-invest-purple/10 shadow-sm">
                      <Check className="h-4 w-4 text-invest-purple" />
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600">EU-based computational infrastructure for rapid regional market analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-invest-purple/10 shadow-sm">
                      <Check className="h-4 w-4 text-invest-purple" />
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600">Team of experts with 15+ years experience in European markets</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-invest-purple/10 shadow-sm">
                      <Check className="h-4 w-4 text-invest-purple" />
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600">Continuous monitoring of regulatory changes across all EU markets</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 bg-gradient-to-br from-invest-purple to-invest-blue opacity-90 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white text-4xl font-bold">94.2%</span>
                </div>
                <div className="absolute -inset-3 border border-dashed border-invest-purple/30 rounded-full animate-spin-slow"></div>
                <div className="absolute -inset-6 border border-dashed border-invest-blue/10 rounded-full animate-spin-slow [animation-direction:reverse]"></div>
              </div>
            </div>
          </div>
          <p className="text-sm text-center mt-8 text-gray-500">*94.2% algorithm accuracy rate based on 2024 European market performance analytics</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
