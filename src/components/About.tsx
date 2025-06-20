import React from 'react';
import { useLanguage } from '../App';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-[#010d2c]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#b8ff00] mb-12 text-center [text-shadow:_0_0_10px_#b8ff00]">
          {t('about', 'title')}
        </h2>
        <div className="max-w-3xl mx-auto text-white text-lg leading-relaxed text-center">
          {t('about', 'description')}
        </div>
      </div>
    </section>
  );
};

export default About;