
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from './LanguageSelector';

const FAQ = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: "Este legal?",
      answer: "Da, operăm în conformitate cu reglementările financiare europene. Toate tranzacțiile sunt efectuate prin intermediul partenerilor noștri reglementați, cu licențe valide pentru operațiuni financiare în UE."
    },
    {
      question: "Cât durează să văd profit?",
      answer: "Majoritatea clienților noștri încep să vadă primele câștiguri în primele 1-2 săptămâni. Timpul exact depinde de condițiile pieței și de strategia personalizată. Brokerul tău personal îți va oferi estimări realiste bazate pe profilul tău investițional."
    },
    {
      question: "Ce face brokerul meu?",
      answer: "Brokerul tău personal analizează profilul tău financiar, configurează strategiile AI potrivite pentru obiectivele tale, monitorizează performanța, face ajustări când este necesar și îți oferă consultanță personalizată pentru maximizarea câștigurilor."
    },
    {
      question: "Pot retrage bani oricând?",
      answer: "Da, îți poți retrage fondurile în orice moment fără taxe ascunse. Procesul de retragere este simplu și direct, cu perioada standard de procesare de 1-3 zile lucrătoare, în funcție de banca ta."
    },
    {
      question: "Ce înseamnă strategie AI?",
      answer: "Strategiile noastre AI folosesc algoritmi avansați de machine learning care analizează continuu date din piețe pentru a identifica oportunități de tranzacționare cu potențial ridicat. Aceste algoritmi învață și se adaptează la condițiile pieței, îmbunătățindu-și constant performanța."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-amber-500/10 px-3 py-1 mb-4 shadow-sm">
            <span className="text-sm font-medium uppercase tracking-wider text-amber-400">Întrebări frecvente</span>
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl mb-2 text-gradient">Ai întrebări? Avem răspunsuri</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Răspunsuri la cele mai comune întrebări despre platforma noastră
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 shadow-lg">
          <Accordion type="single" collapsible className="w-full text-white">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10 last:border-0">
                <AccordionTrigger className="text-left font-medium text-lg py-4 hover:text-amber-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-amber-500/20 text-center">
          <h3 className="text-xl font-semibold mb-3">Încă ai întrebări?</h3>
          <p className="text-gray-300 mb-4">Brokerul tău personal îți poate oferi toate detaliile de care ai nevoie pentru a lua o decizie informată</p>
          <div className="flex justify-center">
            <button
              onClick={() => document.getElementById('ai-assistant')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Vorbește cu un broker
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
