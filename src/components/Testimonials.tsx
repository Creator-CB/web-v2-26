
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from './LanguageSelector';

const Testimonials = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: 'Michael R.',
      role: t('retailInvestor'),
      content: t('testimonial1'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80'
    },
    {
      name: 'Sophie L.',
      role: t('techProfessional'),
      content: t('testimonial2'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80'
    },
    {
      name: 'David K.',
      role: t('businessOwner'),
      content: t('testimonial3'),
      rating: 4,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80'
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-amber-500/5 px-3 py-1 mb-4 shadow-sm">
            <span className="text-sm font-medium uppercase tracking-wider text-amber-600">{t('happyInvestors')}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-2">{t('whatClientsSay')}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t('testimonialsSubheading')}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl p-8 relative overflow-hidden">
              <Quote className="absolute top-4 right-4 h-12 w-12 text-amber-100" />
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-amber-300"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400" fill="#FBBF24" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i + testimonial.rating} className="h-4 w-4 text-gray-200" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-2">{t('ratedExcellent')}</p>
          <div className="flex justify-center items-center">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 text-amber-400" fill="#FBBF24" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span className="text-gray-500 ml-1">({t('from')} 700+ {t('reviews')})</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
