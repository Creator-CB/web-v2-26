
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageSelector';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: "1",
      title: "Te înscrii cu 270 €",
      description: "Investiția ta inițială îți deschide accesul la platforma noastră completă de tranzacționare automată.",
      icon: "📝"
    },
    {
      number: "2",
      title: "Primești broker personal + activăm strategia AI",
      description: "Brokerul tău analizează profilul tău financiar și configurează strategia personalizată AI.",
      icon: "🤝"
    },
    {
      number: "3",
      title: "Botul investește — tu urmărești creșterea",
      description: "Sistemul nostru automat lucrează 24/7 pentru a-ți maximiza investițiile în timp ce tu îți monitorizezi progresul.",
      icon: "📈"
    }
  ];

  const benefits = [
    {
      title: "Personal broker real",
      description: "Fiecare client primește un broker certificat cu experiență în piețe financiare."
    },
    {
      title: "AI + strategie testată",
      description: "Algoritmi avansați dezvoltați și testați cu precizie de 93.5% pe piețele globale."
    },
    {
      title: "Bot trading 24/7",
      description: "Sistemul nostru automat lucrează non-stop pentru a identifica cele mai bune oportunități."
    },
    {
      title: "Transparență și profit estimat",
      description: "Acces la dashboard-ul tău cu rapoarte în timp real și previziuni de câștig."
    },
    {
      title: "Garanții și suport în timp real",
      description: "Asistență tehnică și consultanță financiară permanentă pentru investiția ta."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold sm:text-5xl mb-4 text-gradient">
            Cum funcționează
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Trei pași simpli pentru a începe călătoria ta spre profit automat
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>
        </div>
        
        {/* Three steps process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-amber-500/30 transition-all"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>
              
              <div className="text-5xl mb-6 flex justify-center">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
              <p className="text-gray-300 text-center">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="text-amber-500" size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Benefits Section */}
        <div className="pt-12 border-t border-white/10">
          <h2 className="text-3xl font-bold text-center mb-16">
            De ce să alegi platforma noastră?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/10 transition-all"
              >
                <div className="mb-4 bg-amber-500/10 rounded-full w-12 h-12 flex items-center justify-center">
                  <Check className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <div className="max-w-3xl bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="rounded-full bg-green-500/20 p-3">
                  <Check className="h-6 w-6 text-green-400" />
                </div>
                <div className="rounded-full bg-blue-500/20 p-3">
                  <Check className="h-6 w-6 text-blue-400" />
                </div>
                <div className="rounded-full bg-amber-500/20 p-3">
                  <Check className="h-6 w-6 text-amber-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Platformă reglementată și sigură</h3>
              <p className="text-center text-gray-300">
                Toate tranzacțiile sunt procesate prin intermediul partenerilor noștri reglementați la nivel global.
                Fondurile tale sunt păstrate în siguranță și poți retrage oricând dorești.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
