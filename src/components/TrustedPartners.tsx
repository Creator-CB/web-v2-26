
import React from 'react';
import { Globe, Award, Shield } from "lucide-react";
import { useLanguage } from './LanguageSelector';

const TrustedPartners = () => {
  const { t } = useLanguage();

  // Italian banking partners
  const bankingPartners = [
    {
      name: "Intesa Sanpaolo",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Intesa_Sanpaolo_logo.svg/1200px-Intesa_Sanpaolo_logo.svg.png",
      description: "Leading banking group in Italy with strong international presence",
      location: "Turin, Italy",
      services: "Retail banking, corporate banking, wealth management"
    },
    {
      name: "Mediobanca",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Mediobanca_logo.svg/1200px-Mediobanca_logo.svg.png",
      description: "Investment banking, consumer banking, and wealth management",
      location: "Milan, Italy",
      highlight: "Recently launched €6.3 billion bid to acquire Banca Generali"
    },
    {
      name: "FinecoBank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Fineco_bank_logo.svg/1200px-Fineco_bank_logo.svg.png",
      description: "Online brokerage, banking, and investment services",
      location: "Milan, Italy",
      highlight: "Listed on Borsa Italiana and regulated by CONSOB"
    }
  ];

  // Crypto partners
  const cryptoPartners = [
    {
      name: "Conio",
      logo: "https://pbs.twimg.com/profile_images/1347554764332699652/U0AEdiN__400x400.jpg",
      description: "Bitcoin wallet integrated with Italian banks",
      location: "Milan, Italy",
      partnership: "Collaborates with Banca Generali"
    },
    {
      name: "Coinbase",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Coinbase_logo.svg/1200px-Coinbase_logo.svg.png",
      description: "Leading cryptocurrency exchange platform",
      highlight: "NASDAQ: COIN"
    },
    {
      name: "Kraken",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Kraken_logo.svg/1200px-Kraken_logo.svg.png",
      description: "Secure cryptocurrency exchange and bank",
      highlight: "Operating since 2011"
    }
  ];

  // Global investment partners
  const investmentPartners = [
    {
      name: "Vanguard Group",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Vanguard_logo.svg/1200px-Vanguard_logo.svg.png",
      description: "One of the world's largest investment companies",
      aum: "$8.1 trillion AUM"
    },
    {
      name: "Goldman Sachs Asset Management",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs_logo.svg/1200px-Goldman_Sachs_logo.svg.png",
      description: "Global investment management division of Goldman Sachs",
      aum: "$2.5 trillion AUM"
    }
  ];

  // Media partnerships
  const mediaPartners = [
    { name: "Financial Times", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Financial_Times_logo.svg/1200px-Financial_Times_logo.svg.png" },
    { name: "Reuters", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Reuters_Logo.svg/1200px-Reuters_Logo.svg.png" },
    { name: "Associated Press", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Associated_Press_logo_2012.svg/1200px-Associated_Press_logo_2012.svg.png" }
  ];

  // Review platforms
  const reviewPartners = [
    { name: "Clutch", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Clutch_logo.svg/1200px-Clutch_logo.svg.png" },
    { name: "bonniaserosalinde.pages.dev", rating: "4.9/5" },
    { name: "gilbertrbradford.pages.dev", rating: "4.8/5" }
  ];

  return (
    <section id="trusted-partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500/10 to-amber-500/10 px-3 py-1 mb-4 shadow-sm">
            <span className="text-sm font-medium uppercase tracking-wider text-blue-600">Institutional Trust</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-2">Our Trusted Financial Partners</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading financial institutions to provide secure, regulated, and innovative investment opportunities.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full"></div>
          </div>
        </div>
        
        {/* Italian Banking Partners - Premium Showcase */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            <span className="inline-flex items-center">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png" alt="Italian Flag" className="w-6 h-4 mr-2" />
              Italian Banking Partners
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bankingPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="p-6 flex flex-col items-center">
                  <div className="w-40 h-20 flex items-center justify-center mb-6">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="h-full object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-800">{partner.name}</h4>
                  <p className="text-sm text-gray-500 mb-1">{partner.location}</p>
                  <p className="text-base text-gray-600 text-center mb-4">{partner.description}</p>
                  
                  {partner.services && (
                    <div className="flex items-center justify-center mt-2 mb-1">
                      <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">{partner.services}</span>
                    </div>
                  )}
                  
                  {partner.highlight && (
                    <div className="mt-4 pt-4 border-t border-gray-100 w-full">
                      <p className="text-sm text-amber-600 font-medium text-center">
                        {partner.highlight}
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="bg-gradient-to-r from-blue-500/5 to-amber-500/5 px-6 py-4 border-t border-gray-100">
                  <div className="flex items-center justify-center">
                    <Shield className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="text-xs text-gray-500">Regulated Financial Institution</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Crypto Partners */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            <span className="inline-flex items-center">
              <Bitcoin className="h-5 w-5 text-amber-500 mr-2" />
              Cryptocurrency Partners
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cryptoPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="p-6 flex flex-col items-center">
                  <div className="w-32 h-16 flex items-center justify-center mb-6">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="h-full object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-800">{partner.name}</h4>
                  {partner.location && <p className="text-xs text-gray-500 mb-1">{partner.location}</p>}
                  <p className="text-sm text-gray-600 text-center mb-2">{partner.description}</p>
                  
                  {partner.partnership && (
                    <div className="flex items-center justify-center mt-2">
                      <span className="text-xs bg-amber-50 text-amber-700 px-3 py-1 rounded-full">{partner.partnership}</span>
                    </div>
                  )}
                  
                  {partner.highlight && (
                    <div className="flex items-center justify-center mt-2">
                      <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full">{partner.highlight}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Global Investment Partners */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            <span className="inline-flex items-center">
              <Globe className="h-5 w-5 text-blue-500 mr-2" />
              Global Investment Partners
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {investmentPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="p-6 flex flex-col items-center">
                  <div className="w-36 h-16 flex items-center justify-center mb-6">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="h-full object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-800">{partner.name}</h4>
                  <p className="text-sm text-gray-600 text-center mb-2">{partner.description}</p>
                  
                  {partner.aum && (
                    <div className="flex items-center justify-center mt-2">
                      <span className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full">{partner.aum}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Media Coverage and Reviews Section */}
        <div className="rounded-2xl bg-gradient-to-r from-gray-50 to-white p-8 border border-gray-100 shadow-md">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Media Partners */}
            <div>
              <div className="flex items-center mb-6">
                <Award className="h-5 w-5 text-amber-500 mr-2" />
                <h4 className="text-xl font-bold text-gray-800">Featured In Media</h4>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                {mediaPartners.map((partner, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-center shadow-sm hover:shadow transition-all duration-300 h-20">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-sm text-gray-500 italic text-center">
                "One of the most innovative crypto investment platforms in Europe" - Financial Times
              </div>
            </div>
            
            {/* Review Platforms */}
            <div>
              <div className="flex items-center mb-6">
                <Shield className="h-5 w-5 text-blue-500 mr-2" />
                <h4 className="text-xl font-bold text-gray-800">Top Rated Platform</h4>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {reviewPartners.map((partner, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="h-8 object-contain mb-2"
                      />
                    ) : (
                      <div className="text-sm font-medium text-gray-700 mb-1">{partner.name}</div>
                    )}
                    
                    {partner.rating && (
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-1 text-xs text-gray-600">{partner.rating}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <div className="text-sm text-gray-500">98.7% client satisfaction rate</div>
                <div className="text-xs text-gray-400 mt-1">Based on 1,200+ verified reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges section */}
        <div className="mt-20 text-center">
          <h4 className="text-lg font-medium text-gray-700 mb-8">Platform Security & Compliance</h4>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center">
              <div className="bg-blue-50 rounded-full p-3 mb-2">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-sm text-gray-600">GDPR Compliant</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-green-50 rounded-full p-3 mb-2">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-sm text-gray-600">256-bit Encryption</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-purple-50 rounded-full p-3 mb-2">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-sm text-gray-600">KYC Verified</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-amber-50 rounded-full p-3 mb-2">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <span className="text-sm text-gray-600">Insured Assets</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-red-50 rounded-full p-3 mb-2">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <span className="text-sm text-gray-600">Anti-Money Laundering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
