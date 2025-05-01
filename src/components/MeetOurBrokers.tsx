
import React from 'react';
import { MessageCircle, Users, Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageSelector';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const MeetOurBrokers = () => {
  const { t } = useLanguage();
  
  const brokers = [
    {
      name: "Michael Thompson",
      title: t("seniorInvestmentAdvisor"),
      experience: "15+ years",
      specialty: t("cryptoSpecialist"),
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
      availableSlots: 3
    },
    {
      name: "Sarah Johnson",
      title: t("wealthManager"),
      experience: "12+ years",
      specialty: t("portfolioDiversification"),
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
      availableSlots: 2
    },
    {
      name: "David Chen",
      title: t("investmentStrategist"),
      experience: "10+ years",
      specialty: t("emergingMarkets"),
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
      availableSlots: 5
    },
    {
      name: "Emily Roberts",
      title: t("clientRelationshipManager"),
      experience: "8+ years",
      specialty: t("sustainableInvesting"),
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
      availableSlots: 4
    }
  ];

  return (
    <section id="meet-our-brokers" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-invest-purple/10 px-3 py-1 mb-4 shadow-sm">
            <span className="text-sm font-medium uppercase tracking-wider text-invest-purple">{t("personalService")}</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 sm:text-5xl mb-4">{t("meetOurBrokers")}</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t("brokerIntroduction")}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-invest-purple to-invest-blue rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brokers.map((broker, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative h-64">
                <img 
                  src={broker.image} 
                  alt={broker.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{broker.name}</h3>
                  <p className="text-white/80">{broker.title}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="bg-invest-purple/10 text-invest-purple px-2 py-1 rounded-full text-xs font-medium">
                    {broker.experience} {t("experience")}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{broker.specialty}</span>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500">{broker.availableSlots} {t("availableSlots")}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500">{t("thisWeek")}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-invest-purple border-invest-purple/20 hover:bg-invest-purple/5"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {t("message")}
                  </Button>
                  
                  <Button 
                    size="sm"
                    className="bg-invest-purple hover:bg-invest-purple/90"
                  >
                    {t("bookConsultation")}
                  </Button>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a href="#" className="text-sm text-invest-purple flex items-center justify-center hover:underline">
                    {t("viewFullProfile")}
                    <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button
            size="lg" 
            className="bg-gradient-to-r from-invest-purple to-invest-blue hover:from-invest-purple/90 hover:to-invest-blue/90 text-white"
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="flex items-center">
              {t("findYourPerfectBroker")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MeetOurBrokers;
