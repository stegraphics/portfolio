import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LogoPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const totalSlides = 5;

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive container style
  const containerStyle = {
    height: isMobile ? '100%' : '100vh',
    maxHeight: isMobile ? 'none' : '100dvh',
    aspectRatio: isMobile ? 'auto' : '16/9',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  // Mobile-specific styles
  const mobileStyle = isMobile ? {
    width: '100%',
    padding: '2rem 1rem',
    minHeight: '100vh'
  } : {};

  // Auto-advance slides
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  // Pause auto-play when user interacts
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Resume auto-play
  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  // Slide variants for animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    }),
  };

  // Content for each slide
  const slides = [
    // Slide 1 - INTRO LOGHI
    {
      title: "Animazione Loghi",
      subtitle: "Presentazione dei nostri progetti di branding e logo design",
      visual: (
        <motion.div className="relative w-full h-full min-h-[500px] md:min-h-0 overflow-hidden" style={{...containerStyle, ...mobileStyle}}>
          {/* Background gradient */}
          <motion.div 
            className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#010d2c] via-[#1a1a2e] to-[#16213e]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Animated particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div 
                key={i}
                className="absolute w-2 h-2 bg-[#c0ff00] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </motion.div>
          
          {/* Main title with animation */}
          <motion.div className="absolute inset-0 flex flex-col items-center justify-center -translate-y-12 text-center p-8">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <motion.span 
                className="inline-block"
                animate={{ 
                  textShadow: [
                    '0 0 5px #c0ff00, 0 0 10px #c0ff00', 
                    '0 0 20px #c0ff00, 0 0 40px #c0ff00', 
                    '0 0 5px #c0ff00, 0 0 10px #c0ff00'
                  ] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Logo.
              </motion.span>{' '}
              <motion.span 
                className="inline-block"
                animate={{ 
                  textShadow: [
                    '0 0 5px #c0ff00, 0 0 10px #c0ff00', 
                    '0 0 20px #c0ff00, 0 0 40px #c0ff00', 
                    '0 0 5px #c0ff00, 0 0 10px #c0ff00'
                  ] 
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                Design.
              </motion.span>{' '}
              <motion.span 
                className="inline-block"
                animate={{ 
                  textShadow: [
                    '0 0 5px #c0ff00, 0 0 10px #c0ff00', 
                    '0 0 20px #c0ff00, 0 0 40px #c0ff00', 
                    '0 0 5px #c0ff00, 0 0 10px #c0ff00'
                  ] 
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                Branding.
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Creatività e identità visiva per il tuo brand.
            </motion.p>
          </motion.div>
        </motion.div>
      ),
    },
    
    // Slide 2 - VIDEO ANIMAZIONE
    {
      title: "Video Animazione",
      subtitle: "Processo creativo in movimento",
      visual: (
        <motion.div className="relative w-full h-full min-h-[500px] md:min-h-0 overflow-hidden" style={{...containerStyle, ...mobileStyle}}>
          <motion.div 
            className="absolute inset-0 bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              loop 
              muted
              playsInline
            >
              <source src="/images/IMG_2048.MOV" type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
            
            {/* Overlay con titolo */}
            <motion.div 
              className="absolute inset-0 bg-black/30 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <motion.h2 
                className="text-3xl md:text-5xl font-bold text-white text-center px-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                Processo Creativo in Azione
              </motion.h2>
            </motion.div>
          </motion.div>
        </motion.div>
      ),
    },
    
    // Slide 3 - VELVET BUNS
    {
      title: "Velvet Buns",
      subtitle: "Logo design per hamburgeria gourmet",
      visual: (
        <motion.div className="relative w-full h-full min-h-[500px] md:min-h-0 overflow-hidden" style={{...containerStyle, ...mobileStyle}}>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#2d1810] via-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <motion.img 
                src="/images/logo velvet buns.jpeg"
                alt="Velvet Buns Logo"
                className="w-64 h-64 md:w-80 md:h-80 object-contain mx-auto mb-8 rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                Velvet Buns
              </motion.h3>
              <motion.p 
                className="text-lg md:text-xl text-gray-300 max-w-md mx-auto px-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 1 }}
              >
                Brand identity per hamburgeria gourmet con focus su qualità e raffinatezza.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      ),
    },
    
    // Slide 4 - BELLACHIOMA HAIR
    {
      title: "Bellachioma Hair",
      subtitle: "Brand identity per salone di bellezza",
      visual: (
        <motion.div className="relative w-full h-full min-h-[500px] md:min-h-0 overflow-hidden" style={{...containerStyle, ...mobileStyle}}>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#2a1810] via-[#1a1a2e] to-[#0a0a1a] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <motion.img 
                src="/images/bellachioma hair logo.jpeg"
                alt="Bellachioma Hair Logo"
                className="w-64 h-64 md:w-80 md:h-80 object-contain mx-auto mb-8 rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                Bellachioma Hair
              </motion.h3>
              <motion.p 
                className="text-lg md:text-xl text-gray-300 max-w-md mx-auto px-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 1 }}
              >
                Eleganza e professionalità per un salone di bellezza di alta classe.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      ),
    },
    
    // Slide 5 - ALTRI LOGHI
    {
      title: "Altri Progetti",
      subtitle: "Collezione di loghi e brand identity",
      visual: (
        <motion.div className="relative w-full h-full min-h-[500px] md:min-h-0 overflow-hidden" style={{...containerStyle, ...mobileStyle}}>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#010d2c] via-[#1a1a2e] to-[#16213e] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-8 p-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {[
                { src: "/images/logo taverna della carne.jpeg", name: "Taverna della Carne" },
                { src: "/images/osteria radice logo.jpeg", name: "Osteria Radice" },
                { src: "/images/logo ottaviani.jpeg", name: "Ottaviani" },
              ].map((logo, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.2, duration: 1 }}
                >
                  <motion.img 
                    src={logo.src}
                    alt={logo.name}
                    className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto mb-4 rounded-xl shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.p 
                    className="text-sm md:text-base text-white font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 + index * 0.2, duration: 1 }}
                  >
                    {logo.name}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
                Portfolio Loghi
              </h3>
              <p className="text-gray-300 text-center">
                Creatività e identità visiva per ogni settore
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <AnimatePresence mode="wait" custom={currentSlide}>
        <motion.div
          key={currentSlide}
          custom={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {slides[currentSlide].visual}
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={resumeAutoPlay}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#c0ff00] shadow-[0_0_10px_#c0ff00]'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          className="h-full bg-[#c0ff00]"
          initial={{ width: '0%' }}
          animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default LogoPresentation;