
import React from 'react';
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  // Feature cards data
  const features = [
    {
      title: "Broker personale reale",
      description: "Ogni cliente ottiene un broker certificato con esperienza nei mercati finanziari."
    },
    {
      title: "AI + strategia testata",
      description: "Algoritmi avanzati sviluppati e testati con precisione del 93,5% sui mercati globali."
    },
    {
      title: "Bot di trading 24/7",
      description: "Il nostro sistema automatizzato lavora ininterrottamente per identificare le migliori opportunità."
    },
    {
      title: "Trasparenza e profitto stimato",
      description: "Accesso alla tua dashboard con report in tempo reale e previsioni di guadagno."
    },
    {
      title: "Garanzie e supporto in tempo reale",
      description: "Assistenza tecnica e consulenza finanziaria continua per il tuo investimento."
    }
  ];

  return (
    <div className="bg-[#121827] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Perché scegliere la nostra piattaforma?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`bg-[#161d2e] border-0 rounded-lg p-8 ${
                index === 4 ? "border border-amber-400/20" : ""
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="h-12 w-12 rounded-full bg-[#262e42] flex items-center justify-center">
                    <Check className="h-6 w-6 text-amber-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-base flex-grow">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
