
import React from 'react';
import { useLanguage } from './LanguageSelector';
import { Card, CardContent } from "@/components/ui/card";

const Partners = () => {
  const { t } = useLanguage();

  const partners = [
    {
      name: "Vanguard Group",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Vanguard_logo.svg/1200px-Vanguard_logo.svg.png",
      category: "asset"
    },
    {
      name: "J.P. Morgan Asset Management",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/JPMorgan_Chase_Logo_2008_1.svg/1200px-JPMorgan_Chase_Logo_2008_1.svg.png",
      category: "asset"
    },
    {
      name: "Goldman Sachs Asset Management",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs_logo.svg/1200px-Goldman_Sachs_logo.svg.png",
      category: "asset"
    },
    {
      name: "Kraken",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Kraken_logo.svg/1200px-Kraken_logo.svg.png",
      category: "crypto"
    },
    {
      name: "Bitfinex",
      logo: "https://cryptologos.cc/logos/bitfinex-bfx-logo.png",
      category: "crypto"
    },
    {
      name: "Banca Generali S.p.A.",
      logo: "https://upload.wikimedia.org/wikipedia/it/thumb/6/61/Logo_Banca_Generali.svg/1200px-Logo_Banca_Generali.svg.png",
      category: "banking"
    },
    {
      name: "FinecoBank S.p.A.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Fineco_bank_logo.svg/1200px-Fineco_bank_logo.svg.png",
      category: "banking"
    },
    {
      name: "UniCredit S.p.A.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/UniCredit_Logo.svg/800px-UniCredit_Logo.svg.png",
      category: "banking"
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">{t('trustedPartners')}</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-invest-purple"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            {t('language') === 'en' 
              ? "We collaborate with leading financial institutions to provide secure, regulated investment opportunities."
              : "Collaboriamo con le principali istituzioni finanziarie per offrire opportunità di investimento sicure e regolamentate."}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {partners.map((partner, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 flex items-center justify-center h-24">
              <CardContent className="p-4 flex items-center justify-center h-full">
                <div className="flex items-center justify-center w-full h-full">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-10 max-w-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                    title={partner.name}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="bg-gray-800 px-4 py-2 rounded-full flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            <span className="text-sm text-gray-300">Regulated Partners</span>
          </div>
          <div className="bg-gray-800 px-4 py-2 rounded-full flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            <span className="text-sm text-gray-300">Global Coverage</span>
          </div>
          <div className="bg-gray-800 px-4 py-2 rounded-full flex items-center">
            <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
            <span className="text-sm text-gray-300">Insured Investments</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
