import React from 'react';
import { useLanguage } from '../App';
import { Presentation, BookTemplate as Template, Share2, BookOpen, Sparkles, Zap } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Presentation,
      title: t('services', 'pitchDeck'),
      description: t('services', 'pitchDeckDesc'),
      features: [
        t('services', 'features')['storytelling'],
        t('services', 'features')['infographics'],
        t('services', 'features')['animations']
      ]
    },
    {
      icon: Template,
      title: t('services', 'template'),
      description: t('services', 'templateDesc'),
      features: [
        t('services', 'features')['guidelines'],
        t('services', 'features')['formats'],
        t('services', 'features')['usability']
      ]
    },
    {
      icon: Share2,
      title: t('services', 'social'),
      description: t('services', 'socialDesc'),
      features: [
        t('services', 'features')['posts'],
        t('services', 'features')['stories'],
        t('services', 'features')['carousel']
      ]
    },
    {
      icon: BookOpen,
      title: t('services', 'catalogs'),
      description: t('services', 'catalogsDesc'),
      features: [
        t('services', 'features')['responsive'],
        t('services', 'features')['navigation'],
        t('services', 'features')['cta']
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a1a3a] to-[#010d2c]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('services', 'title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services', 'description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 border border-white/10 hover:border-[#c0ff00]/30"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#c0ff00] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_30px_#c0ff00] transition-all duration-300">
                  <service.icon className="w-8 h-8 text-[#010d2c]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#c0ff00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mt-5">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center gap-3 text-sm text-gray-300 bg-white/5 rounded-lg p-3 transform transition-all duration-300 hover:translate-x-1 hover:bg-white/10 border border-transparent hover:border-[#c0ff00]/20 group/feature"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#c0ff00]/10 flex items-center justify-center group-hover/feature:bg-[#c0ff00]/20 transition-all duration-300">
                          <Sparkles className="w-4 h-4 text-[#c0ff00] flex-shrink-0 group-hover/feature:scale-110 transition-transform" />
                        </div>
                        <span className="group-hover/feature:text-white transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#c0ff00]/20 via-[#c0ff00]/10 to-transparent rounded-2xl p-10 border border-[#c0ff00]/30 shadow-[0_0_30px_rgba(192,255,0,0.1)] transform transition-all duration-500 hover:shadow-[0_0_50px_rgba(192,255,0,0.2)] hover:border-[#c0ff00]/50 group/cta">
            <div className="flex flex-col items-center justify-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#c0ff00]/20 flex items-center justify-center group-hover/cta:bg-[#c0ff00]/30 transition-all duration-500 group-hover/cta:scale-110">
                <Zap className="w-8 h-8 text-[#c0ff00] group-hover/cta:animate-pulse" />
              </div>
              <h3 className="text-3xl font-bold text-white group-hover/cta:text-[#c0ff00]/90 transition-colors duration-500">
                {t('services', 'ctaTitle')} <span className="text-[#c0ff00] [text-shadow:_0_0_10px_#c0ff00]">{t('services', 'ctaHighlight')}</span>?
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto mt-2 group-hover/cta:text-white transition-colors duration-500">
                Trasforma le tue idee in progetti visivi straordinari che catturano l'attenzione e comunicano il tuo messaggio in modo efficace.
              </p>
              <button className="mt-6 px-8 py-3 bg-[#c0ff00] text-[#010d2c] rounded-full font-bold hover:shadow-[0_0_30px_#c0ff00] transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Contattami
                <Zap className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;