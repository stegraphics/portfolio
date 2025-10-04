import React, { useState, useEffect } from 'react';
import { useLanguage } from '../App';

const About: React.FC = () => {
  const { t } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);
  const [showContent, setShowContent] = useState(true); // Inizia mostrando CHI SONO
  const [showBackArrow, setShowBackArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(false); // Freccia per andare al video
  const [showDescription, setShowDescription] = useState(false); // Descrizione del sito EDIL GAMAL
  const [edilImageIndex, setEdilImageIndex] = useState(0); // indice slider immagini EDIL GAMAL
  // startSlide rimosso: usiamo solo dissolvenza tra le immagini
  const [showStrategyText, setShowStrategyText] = useState(false);
  const [showPizzaOk, setShowPizzaOk] = useState(false);
  const [showPizzaVideo, setShowPizzaVideo] = useState(false);
  const [showPizzaLogo, setShowPizzaLogo] = useState(false);
  const [showPizzaOvenIcon, setShowPizzaOvenIcon] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false);
  // Transizioni ordinate e più smooth tra titoli e testi
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [titleFadeOut, setTitleFadeOut] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    if (showContent) {
      // Mostra la freccia per andare al video dopo 1 secondo
      const timer = setTimeout(() => {
        setShowNextArrow(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [showContent]);

  useEffect(() => {
    // Avanzamento automatico disabilitato: la navigazione avviene solo tramite i pulsanti
  }, [showVideo]);

  // Ritardo apparizione del video di PIZZA OK
  useEffect(() => {
    let timer: number | undefined;
    if (showPizzaOk) {
      timer = window.setTimeout(() => setShowPizzaVideo(true), 800);
    } else {
      setShowPizzaVideo(false);
    }
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [showPizzaOk]);

  // Ritardo apparizione del logo Pizza OK dopo il video
  useEffect(() => {
    let timer: number | undefined;
    if (showPizzaVideo) {
      timer = window.setTimeout(() => setShowPizzaLogo(true), 400);
    } else {
      setShowPizzaLogo(false);
    }
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [showPizzaVideo]);

  // Ritardo apparizione dell'icona forno Pizza OK dopo il video (8s)
  useEffect(() => {
    let timer: number | undefined;
    if (showPizzaVideo) {
      timer = window.setTimeout(() => setShowPizzaOvenIcon(true), 8000);
    } else {
      setShowPizzaOvenIcon(false);
    }
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [showPizzaVideo]);

  // Reset testo strategia quando si entra/esce dalla descrizione
  useEffect(() => {
    setShowStrategyText(false);
    setShowPizzaOk(false);
  }, [showDescription]);

  // Slider EDIL GAMAL: dissolvenza tra immagini
  useEffect(() => {
    let t1: number | undefined;
    let t2: number | undefined;
    let t3: number | undefined;
    let t4: number | undefined;
    let t5: number | undefined;
    let t6: number | undefined;
    let t7: number | undefined;
    let t8: number | undefined;
    if (showDescription) {
      setEdilImageIndex(0);
      t1 = window.setTimeout(() => setEdilImageIndex(1), 5000); // 5s -> MOCKUP
      t2 = window.setTimeout(() => setEdilImageIndex(2), 9000); // +4s -> PROVA NEW
      t3 = window.setTimeout(() => setEdilImageIndex(3), 13000); // +4s -> PRIMA DOPO
      t4 = window.setTimeout(() => setEdilImageIndex(4), 17000); // +4s -> new 1
      t5 = window.setTimeout(() => setEdilImageIndex(5), 21000); // +4s -> new 2
      t6 = window.setTimeout(() => setEdilImageIndex(6), 25000); // +4s -> IMG_4245.JPG
      t7 = window.setTimeout(() => setEdilImageIndex(7), 29000); // +4s -> IMG_4246.JPG
      t8 = window.setTimeout(() => setEdilImageIndex(8), 33000); // +4s -> IMG_4248.JPG
    }
    return () => {
      if (t1) window.clearTimeout(t1);
      if (t2) window.clearTimeout(t2);
      if (t3) window.clearTimeout(t3);
      if (t4) window.clearTimeout(t4);
      if (t5) window.clearTimeout(t5);
      if (t6) window.clearTimeout(t6);
      if (t7) window.clearTimeout(t7);
      if (t8) window.clearTimeout(t8);
    };
  }, [showDescription]);

  const handleNextClick = () => {
    if (showContent) {
      setShowContent(false);
      setShowNextArrow(false);
      setShowVideo(true);
    } else if (showVideo) {
      setShowVideo(false);
      setShowDescription(true);
    } else if (showDescription) {
      setShowDescription(false);
      setShowContent(true);
    }
  };

  const handlePrevClick = () => {
    if (showDescription) {
      setShowDescription(false);
      setShowVideo(true);
    } else if (showVideo) {
      setShowVideo(false);
      setShowContent(true);
    }
  };

  const handleDescriptionNext = () => {
    if (!showStrategyText) {
      setShowStrategyText(true);
      return;
    }
    // Passaggio immediato a PIZZA OK senza fade-out di EDIL
    if (!showPizzaOk) {
      setShowPizzaOk(true);
    }
  };
  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-full mx-auto p-12">
          <div className="flex flex-col lg:flex-row items-start gap-10 min-h-[320px]">
            
            {/* Colonna sinistra - contenuto principale */}
            <div className={`${showVideo ? 'lg:w-3/5' : showContent ? 'lg:w-1/2' : 'lg:w-3/5'} w-full transition-all duration-500 ease-in-out`}>
              <div className="p-8 min-h-[320px] flex flex-col justify-center">
                {showVideo ? (
                  <div className="flex flex-col items-center justify-center h-full w-full">
                    <h2 className="text-4xl md:text-6xl font-bold text-[#b8ff00] text-center [text-shadow:_0_0_20px_#b8ff00] mb-4">
                      EDIL GAMAL COSTRUZIONI
                    </h2>
                    <p className="text-[#b8ff00] text-sm font-light text-center [text-shadow:_0_0_10px_#b8ff00]">
                      GESTIONE SITO WEB E SOCIAL
                    </p>
                    <div className="flex justify-center gap-4 mt-6">
                      <button
                        onClick={handlePrevClick}
                        className="inline-flex items-center gap-2 rounded-full border border-[#b8ff00]/40 bg-black/30 px-5 py-2 text-sm text-white hover:border-[#b8ff00] hover:bg-black/50 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>{t('about', 'buttons.back') as string}</span>
                      </button>
                      <button
                        onClick={handleNextClick}
                        className="inline-flex items-center gap-2 rounded-full border border-[#b8ff00]/40 bg-black/30 px-5 py-2 text-sm text-white hover:border-[#b8ff00] hover:bg-black/50 transition-colors durata-300"
                      >
                        <span>{t('about', 'buttons.continue') as string}</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : showContent ? (
                  <div className="animate-fade-in-left">
                    <h2 className="text-4xl md:text-6xl font-bold text-[#b8ff00] text-left mb-6 [text-shadow:_0_0_20px_#b8ff00]">
                      {t('about', 'title')}
                    </h2>
                    <p
                      className="text-white text-lg font-light text-left max-w-4xl leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: t('about', 'bio.intro') as string }}
                    />
                    <p
                      className="text-white text-lg font-light text-left max-w-4xl leading-relaxed mt-4"
                      dangerouslySetInnerHTML={{ __html: t('about', 'bio.passion') as string }}
                    />
                    <p
                      className="text-white text-lg font-light text-left max-w-4xl leading-relaxed mt-4"
                      dangerouslySetInnerHTML={{ __html: t('about', 'bio.work') as string }}
                    />
                    <p
                      className="text-white text-lg font-light text-left max-w-4xl leading-relaxed mt-4"
                      dangerouslySetInnerHTML={{ __html: t('about', 'bio.conclusion') as string }}
                    />
                    {showNextArrow && (
                      <div className="flex justify-start mt-8 animate-fade-in-up">
                        <button 
                          onClick={handleNextClick}
                          className="inline-flex items-center gap-2 rounded-full border border-[#b8ff00]/40 bg-black/30 px-5 py-2 text-sm text-white hover:border-[#b8ff00] hover:bg-black/50 transition-colors duration-300"
                        >
                          <span>{t('about', 'buttons.continue') as string}</span>
                          <svg 
                            className="w-5 h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M9 5l7 7-7 7" 
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                ) : showDescription ? (
                  <div className="flex flex-col items-start justify-start h-full w-full px-8 relative">
                    <div className={"h-16 " + (showPizzaOk ? "md:h-20 mb-2" : "md:h-28 mb-8")}> 
                      <h2 className={(showPizzaOk ? 'hidden ' : 'opacity-100 ') + 'text-4xl md:text-6xl font-bold text-[#b8ff00] text-left [text-shadow:_0_0_20px_#b8ff00] transition-opacity duration-500 ease-out'}>
                        {t('about', 'projects.edilgamal.title') as string}
                      </h2>
                      <h2 className={(showPizzaOk ? 'opacity-100 ' : 'hidden ') + 'text-4xl md:text-6xl font-bold text-[#b8ff00] text-left [text-shadow:_0_0_20px_#b8ff00] whitespace-nowrap'}>
                        {t('about', 'projects.pizzaok.title') as string}
                      </h2>
                    </div>
                    <div className="mt-0">
  {/* Testo originale */}
  <p className={(showStrategyText ? 'hidden ' : 'opacity-100 ') + 'text-white text-lg font-light text-left max-w-4xl leading-relaxed transition-opacity duration-700 ease-out'}
     dangerouslySetInnerHTML={{ __html: t('about', 'projects.edilgamal.description') as string }}
  />
                      {/* Testo strategia sociale (in dissolvenza) */}
                      {showPizzaOk ? (
                        <p className={'text-white text-lg font-light text-left max-w-4xl leading-relaxed'}
                           dangerouslySetInnerHTML={{ __html: t('about', 'projects.pizzaok.description') as string }}
                        />
                      ) : (
                        <div className={((showStrategyText && textVisible) ? 'opacity-100 ' : 'opacity-0 hidden ') + 'text-white text-lg font-light text-left max-w-4xl leading-relaxed transition-opacity duration-700 ease-out'}
                           dangerouslySetInnerHTML={{ __html: t('about', 'projects.edilgamal.strategy') as string }}
                        />
                      )}
                    </div>
                    <div className="flex justify-start gap-4 mt-6">
                      <button
                        onClick={handlePrevClick}
                        className="inline-flex items-center gap-2 rounded-full border border-[#b8ff00]/40 bg-black/30 px-5 py-2 text-sm text-white hover:border-[#b8ff00] hover:bg-black/50 transition-colors duration-300"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                        <span>Indietro</span>
                      </button>
                      <button
                        onClick={handleDescriptionNext}
                        className="inline-flex items-center gap-2 rounded-full border border-[#b8ff00]/40 bg-black/30 px-5 py-2 text-sm text-white hover:border-[#b8ff00] hover:bg-black/50 transition-colors duration-300"
                      >
                        <span>{t('about', 'buttons.continue') as string}</span>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="mt-10 md:mt-0 flex items-center justify-center gap-6 md:gap-10 lg:gap-12 mb-6 flex-wrap md:flex-nowrap">
                      <img
                        src="/images/alberghiero.svg"
                        alt="Alberghiero"
                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer transition-all duration-300 hover:scale-110"
                        style={{ filter: 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(11%) sepia(95%) saturate(5946%) hue-rotate(359deg) brightness(105%) contrast(120%) drop-shadow(0 0 6px #ff0000) drop-shadow(0 0 16px #ff0000)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))';
                        }}
                      />
                      <img
                        src="/images/palazzale.svg"
                        alt="Palazzale"
                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer transition-all duration-300 hover:scale-110"
                        style={{ filter: 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(11%) sepia(95%) saturate(5946%) hue-rotate(359deg) brightness(105%) contrast(120%) drop-shadow(0 0 6px #ff0000) drop-shadow(0 0 16px #ff0000)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))';
                        }}
                      />
                      <img
                        src="/images/pubblico.svg"
                        alt="Pubblico"
                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer transition-all duration-300 hover:scale-110"
                        style={{ filter: 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(11%) sepia(95%) saturate(5946%) hue-rotate(359deg) brightness(105%) contrast(120%) drop-shadow(0 0 6px #ff0000) drop-shadow(0 0 16px #ff0000)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))';
                        }}
                      />
                      <img
                        src="/images/residenziale.svg"
                        alt="Residenziale"
                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer transition-all duration-300 hover:scale-110"
                        style={{ filter: 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(11%) sepia(95%) saturate(5946%) hue-rotate(359deg) brightness(105%) contrast(120%) drop-shadow(0 0 6px #ff0000) drop-shadow(0 0 16px #ff0000)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))';
                        }}
                      />
                      <img
                        src="/images/INDUSTRIALE.svg"
                        alt="Industriale"
                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer transition-all duration-300 hover:scale-110"
                        style={{ filter: 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(11%) sepia(95%) saturate(5946%) hue-rotate(359deg) brightness(105%) contrast(120%) drop-shadow(0 0 6px #ff0000) drop-shadow(0 0 16px #ff0000)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))';
                        }}
                      />
                      <img
                        src="/images/RISTRUTTURAZIONE.svg"
                        alt="Ristrutturazione"
                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer transition-all duration-300 hover:scale-110"
                        style={{ filter: 'brightness(0) saturate(100%) invert(100%) contrast(135%) brightness(130%) drop-shadow(0 0 6px rgba(255,255,255,0.95)) drop-shadow(0 0 16px rgba(255,255,255,0.85))' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(11%) sepia(95%) saturate(5946%) hue-rotate(359deg) brightness(108%) contrast(130%) drop-shadow(0 0 8px #ff0000) drop-shadow(0 0 22px #ff0000)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(100%) contrast(135%) brightness(130%) drop-shadow(0 0 6px rgba(255,255,255,0.95)) drop-shadow(0 0 16px rgba(255,255,255,0.85))';
                        }}
                      />
                    </div>
                    <video
                      key="about-video"
                      className="w-full h-auto rounded-lg shadow-lg transition-opacity duration-500"
                      autoPlay
                      loop
                      muted
                      preload="auto"
                      style={{ backgroundColor: 'transparent' }}
                    >
                      <source src="/images/IMG_2048.mp4" type="video/mp4" />
                    </video>
                    <a
                      href="https://www.edilgamal.it"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-[#b8ff00] uppercase font-bold tracking-wide hover:underline [text-shadow:_0_0_10px_#b8ff00]"
                    >
                      SCOPRI IL SITO
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Colonna destra */}
            <div className="lg:w-2/5 w-full transition-all duration-500 ease-in-out">
              {showVideo ? (
                <div className="flex flex-col items-center">
                  <div className="mt-10 md:mt-0 flex items-center justify-center gap-6 md:gap-10 lg:gap-12 mb-6 flex-wrap md:flex-nowrap">
                    <img
                      src="/images/alberghiero.svg"
                      alt="Alberghiero"
                      className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer transition-all duration-300 hover:scale-110"
                      style={{ filter: 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(11%) sepia(95%) saturate(5946%) hue-rotate(359deg) brightness(105%) contrast(120%) drop-shadow(0 0 6px #ff0000) drop-shadow(0 0 16px #ff0000)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))';
                      }}
                    />
                    <img
                      src="/images/palazzale.svg"
                      alt="Palazzale"
                      className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer transition-all duration-300 hover:scale-110"
                      style={{ filter: 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(11%) sepia(95%) saturate(5946%) hue-rotate(359deg) brightness(105%) contrast(120%) drop-shadow(0 0 6px #ff0000) drop-shadow(0 0 16px #ff0000)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))';
                      }}
                    />
                    <img
                      src="/images/pubblico.svg"
                      alt="Pubblico"
                      className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer transition-all duration-300 hover:scale-110"
                      style={{ filter: 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(11%) sepia(95%) saturate(5946%) hue-rotate(359deg) brightness(105%) contrast(120%) drop-shadow(0 0 6px #ff0000) drop-shadow(0 0 16px #ff0000)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))';
                      }}
                    />
                    <img
                      src="/images/residenziale.svg"
                      alt="Residenziale"
                      className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer transition-all duration-300 hover:scale-110"
                      style={{ filter: 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(11%) sepia(95%) saturate(5946%) hue-rotate(359deg) brightness(105%) contrast(120%) drop-shadow(0 0 6px #ff0000) drop-shadow(0 0 16px #ff0000)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))';
                      }}
                    />
                    <img
                      src="/images/INDUSTRIALE.svg"
                      alt="Industriale"
                      className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer transition-all duration-300 hover:scale-110"
                      style={{ filter: 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(11%) sepia(95%) saturate(5946%) hue-rotate(359deg) brightness(105%) contrast(120%) drop-shadow(0 0 6px #ff0000) drop-shadow(0 0 16px #ff0000)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(100%) contrast(120%) brightness(115%) drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 10px rgba(255,255,255,0.4))';
                      }}
                    />
                    <img
                      src="/images/RISTRUTTURAZIONE.svg"
                      alt="Ristrutturazione"
                      className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer transition-all duration-300 hover:scale-110"
                      style={{ filter: 'brightness(0) saturate(100%) invert(100%) contrast(135%) brightness(130%) drop-shadow(0 0 6px rgba(255,255,255,0.95)) drop-shadow(0 0 16px rgba(255,255,255,0.85))' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(11%) sepia(95%) saturate(5946%) hue-rotate(359deg) brightness(108%) contrast(130%) drop-shadow(0 0 8px #ff0000) drop-shadow(0 0 22px #ff0000)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(100%) contrast(135%) brightness(130%) drop-shadow(0 0 6px rgba(255,255,255,0.95)) drop-shadow(0 0 16px rgba(255,255,255,0.85))';
                      }}
                    />
                  </div>
                  <video
                    key="about-video"
                    className="w-full h-auto rounded-lg shadow-lg transition-opacity duration-500"
                    autoPlay
                    loop
                    muted
                    preload="auto"
                    style={{ backgroundColor: 'transparent' }}
                  >
                    <source src="/images/IMG_2048.mp4" type="video/mp4" />
                  </video>
                  <a
                    href="https://www.edilgamal.it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-[#b8ff00] uppercase font-bold tracking-wide hover:underline [text-shadow:_0_0_10px_#b8ff00]"
                  >
                    SCOPRI IL SITO
                  </a>
                </div>
              ) : showContent ? (
                <div className="animate-fade-in-right flex justify-center">
                  <img
                    src="/images/io.jpeg"
                    alt="Stefano Schifano"
                    className="w-64 md:w-80 lg:w-96 h-auto rounded-lg shadow-lg"
                  />
                </div>
              ) : showDescription ? (
                <div className="animate-fade-in-right flex justify-center">
                  {showPizzaOk ? (
                    showPizzaOvenIcon ? (
                      <div className="relative animate-fade-in-right w-[30rem] md:w-[36rem] lg:w-[42rem] xl:w-[48rem]">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                          <img
                            src="/images/PIZZA ICONE FORNO.svg"
                            alt="Icona forno Pizza"
                            className="w-full h-auto block"
                          />
                        </div>
                        <div className="mt-4 bg-[#363F48] rounded-lg shadow-lg overflow-hidden">
                           <div className="marquee-track flex items-center gap-6 py-4 px-4">
                             <img src="/images/PIZZA primavera.png" alt="Pizza primavera" className="h-28 md:h-32 lg:h-40 w-auto" />
                             <img src="/images/PIZZA SALAME.png" alt="Pizza salame" className="h-28 md:h-32 lg:h-40 w-auto" />
                             <img src="/images/PIZZA SALSICCIA.png" alt="Pizza salsiccia" className="h-28 md:h-32 lg:h-40 w-auto" />
                             <img src="/images/PIZZA TONNO E OLIVE.png" alt="Pizza tonno e olive" className="h-28 md:h-32 lg:h-40 w-auto" />
                             <img src="/images/PIZZA WURSTEL.png" alt="Pizza wurstel" className="h-28 md:h-32 lg:h-40 w-auto" />
                             <img src="/images/PIZZA primavera.png" alt="Pizza primavera" className="h-28 md:h-32 lg:h-40 w-auto" aria-hidden="true" />
                             <img src="/images/PIZZA SALAME.png" alt="Pizza salame" className="h-28 md:h-32 lg:h-40 w-auto" aria-hidden="true" />
                             <img src="/images/PIZZA SALSICCIA.png" alt="Pizza salsiccia" className="h-28 md:h-32 lg:h-40 w-auto" aria-hidden="true" />
                             <img src="/images/PIZZA TONNO E OLIVE.png" alt="Pizza tonno e olive" className="h-28 md:h-32 lg:h-40 w-auto" aria-hidden="true" />
                             <img src="/images/PIZZA WURSTEL.png" alt="Pizza wurstel" className="h-28 md:h-32 lg:h-40 w-auto" aria-hidden="true" />
                           </div>
                         </div>
                         <button
                            onClick={() => setShowMenuModal(true)}
                            className="mt-4 inline-block text-[#b8ff00] uppercase font-bold tracking-wide hover:underline [text-shadow:_0_0_10px_#b8ff00]"
                          >
                            SCOPRI MENÙ
                          </button>
                      </div>
                    ) : (
                      showPizzaVideo ? (
                        <>
                          <div className="relative w-80 md:w-96 lg:w-[30rem] xl:w-[34rem]">
                            <video
                               key="pizzaok-video"
                               className="animate-fade-in-right w-full h-auto rounded-lg shadow-lg transition-opacity duration-700"
                               autoPlay
                               loop
                               muted
                               preload="auto"
                               style={{ backgroundColor: 'transparent' }}
                             >
                               <source src="/images/IMG_4462 (1).mp4" type="video/mp4" />
                             </video>
                             {showPizzaLogo && (
                               <img
                                 src="/images/Logo vettoriale Pizza ok.png"
                                 alt="Logo Pizza OK"
                                 className="absolute top-2 right-12 w-24 md:w-28 lg:w-32 h-auto animate-fade-in-right z-10"
                                 style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.7))' }}
                               />
                             )}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="relative w-80 md:w-96 lg:w-[30rem] xl:w-[34rem]">
                            {/* Placeholder invisibile per mantenere l'altezza */}
                            <img
                              src="/images/MOMO GRAPHIC.jpg"
                              alt="Momo Graphic"
                              decoding="async"
                              fetchpriority="low"
                              className="w-full h-auto rounded-lg opacity-0"
                            />
                          </div>
                          {/* Ripristino: nessun banner e nessun bottone nel placeholder */}
                        </>
                      )
                    )
                  ) : (
                    <div className="relative w-80 md:w-96 lg:w-[30rem] xl:w-[34rem]">
                      {/* Slide 0 - Momo Graphic */}
                      <img
                        src="/images/MOMO GRAPHIC.jpg"
                        alt="Momo Graphic"
                        loading="eager"
                        decoding="async"
                        fetchpriority="high"
                        style={{ willChange: 'opacity' }}
                        className={(edilImageIndex === 0 ? 'opacity-100 visible z-10 ' : 'opacity-0 invisible z-0 ') + 'absolute inset-0 w-full h-auto rounded-lg shadow-lg transition-opacity duration-700 ease-out'}
                      />
                      {/* Slide 1 - Mockup Edil Gamal */}
                      <img
                        src="/images/MOCKUP EDIL GAMAL.jpg"
                        alt="Mockup Edil Gamal"
                        loading="lazy"
                        decoding="async"
                        style={{ willChange: 'opacity' }}
                        className={(edilImageIndex === 1 ? 'opacity-100 visible z-10 ' : 'opacity-0 invisible z-0 ') + 'absolute inset-0 w-full h-auto rounded-lg shadow-lg transition-opacity duration-700 ease-out'}
                      />
                      {/* Slide 2 - Prova New */}
                      <img
                        src="/images/PROVA NEW.jpg"
                        alt="Prova New"
                        loading="lazy"
                        decoding="async"
                        style={{ willChange: 'opacity' }}
                        className={(edilImageIndex === 2 ? 'opacity-100 visible z-10 ' : 'opacity-0 invisible z-0 ') + 'absolute inset-0 w-full h-auto rounded-lg shadow-lg transition-opacity duration-700 ease-out'}
                      />
                      {/* Slide 3 - Prima Dopo */}
                      <img
                        src="/images/PRIMA DOPO.jpg"
                        alt="Prima Dopo"
                        loading="lazy"
                        decoding="async"
                        style={{ willChange: 'opacity' }}
                        className={(edilImageIndex === 3 ? 'opacity-100 visible z-10 ' : 'opacity-0 invisible z-0 ') + 'absolute inset-0 w-full h-auto rounded-lg shadow-lg transition-opacity duration-700 ease-out'}
                      />
                      {/* Slide 4 - new 1 */}
                      <img
                        src="/images/new 1.jpg"
                        alt="new 1"
                        loading="lazy"
                        decoding="async"
                        style={{ willChange: 'opacity' }}
                        className={(edilImageIndex === 4 ? 'opacity-100 visible z-10 ' : 'opacity-0 invisible z-0 ') + 'absolute inset-0 w-full h-auto rounded-lg shadow-lg transition-opacity duration-700 ease-out'}
                      />
                      {/* Slide 5 - new 2 */}
                      <img
                        src="/images/new 2.jpg"
                        alt="new 2"
                        loading="lazy"
                        decoding="async"
                        style={{ willChange: 'opacity' }}
                        className={(edilImageIndex === 5 ? 'opacity-100 visible z-10 ' : 'opacity-0 invisible z-0 ') + 'absolute inset-0 w-full h-auto rounded-lg shadow-lg transition-opacity duration-700 ease-out'}
                      />
                      {/* Slide 6 - IMG_4245 */}
                      <img
                        src="/images/IMG_4245.JPG"
                        alt="IMG_4245"
                        loading="lazy"
                        decoding="async"
                        style={{ willChange: 'opacity' }}
                        className={(edilImageIndex === 6 ? 'opacity-100 visible z-10 ' : 'opacity-0 invisible z-0 ') + 'absolute inset-0 w-full h-auto rounded-lg shadow-lg transition-opacity duration-700 ease-out'}
                      />
                      {/* Slide 7 - IMG_4246 */}
                      <img
                        src="/images/IMG_4246.JPG"
                        alt="IMG_4246"
                        loading="lazy"
                        decoding="async"
                        style={{ willChange: 'opacity' }}
                        className={(edilImageIndex === 7 ? 'opacity-100 visible z-10 ' : 'opacity-0 invisible z-0 ') + 'absolute inset-0 w-full h-auto rounded-lg shadow-lg transition-opacity duration-700 ease-out'}
                      />
                      {/* Slide 8 - IMG_4248 */}
                      <img
                        src="/images/IMG_4248.JPG"
                        alt="IMG_4248"
                        loading="lazy"
                        decoding="async"
                        style={{ willChange: 'opacity' }}
                        className={(edilImageIndex === 8 ? 'opacity-100 visible z-10 ' : 'opacity-0 invisible z-0 ') + 'absolute inset-0 w-full h-auto rounded-lg shadow-lg transition-opacity duration-700 ease-out'}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className="animate-fade-in-right">
                  <img
                    src="/images/MOMO GRAPHIC.jpg"
                    alt="Momo Graphic"
                    loading="eager"
                    decoding="async"
                    fetchpriority="high"
                    style={{ willChange: 'opacity' }}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>

          {showMenuModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              {/* Backdrop sfocato */}
              <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setShowMenuModal(false)}
              />
              {/* Contenuto modale */}
              <div className="relative z-10 max-w-4xl w-[90%] rounded-lg shadow-2xl overflow-hidden bg-transparent">
                <button
                  onClick={() => setShowMenuModal(false)}
                  className="absolute top-3 right-3 text-black/70 hover:text-black"
                  aria-label="Chiudi"
                >
                  ✕
                </button>
                <div className="w-full max-h-[80vh] overflow-auto">
                  <img
                    src="/images/MENU MOMO NUOVO.svg"
                    alt="Menù Momo"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          )}
          
          {/* Questa freccia non serve più */}
        </div>
      </div>
    </section>
  );
};

export default About;