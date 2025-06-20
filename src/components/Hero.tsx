import React from 'react';
import { ArrowRight, Mail, ChevronDown } from 'lucide-react';
import { useLanguage } from '../App';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="min-h-screen bg-[#010d2c] relative overflow-hidden flex items-center justify-center">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-lg rotate-45 animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-white/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border border-white/20 rounded-lg rotate-12 animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-float">
            <h1 className="text-6xl md:text-8xl font-black text-[#b8ff00] mb-6 tracking-wider [text-shadow:_0_0_15px_#b8ff00]">
              STEFANO SCHIFANO
            </h1>

            <div className="text-xl md:text-2xl text-white mb-8 font-light">
              {(t('hero', 'roles') as string[]).map((role, index) => (
                <React.Fragment key={role}>
                  <span className={`typewriter ${index > 0 ? `delay-${index}000` : ''}`}>{role}</span>
                  {index < 2 && <span className="text-[#c0ff00] mx-4">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-[#c0ff00] text-[#010d2c] px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_#c0ff00] transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              <Mail className="w-5 h-5" />
              {t('hero', 'contact')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('portfolio')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#010d2c] transition-all duration-300 transform hover:scale-105"
            >
              {t('hero', 'portfolio')}
            </button>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center bg-[#010d2c] pb-20">
        <div className="animate-bounce">
          <ChevronDown className="w-12 h-12 text-[#c0ff00] [filter:drop-shadow(0_0_10px_#c0ff00)] transform hover:scale-110 transition-transform cursor-pointer" onClick={() => scrollToSection('about')} />
        </div>
      </div>
    </>
  );
};

export default Hero;