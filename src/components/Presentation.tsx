import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const totalSlides = 9;

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
    // Slide 1 - INTRO EPICA
    {
      title: "Concept: showroom di illuminazione a Singapore",
      subtitle: "Presentazione animata sulla possibilità di apertura di uno showroom di design di illuminazione a Singapore",
      visual: (
        <motion.div className="relative w-full h-full">
          {/* Background gradient */}
          <motion.div 
            className="absolute inset-0 overflow-hidden bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            
            {/* Animated lights */}
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div 
                key={i}
                className="absolute w-1 h-1 bg-[#ffff00] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: `${Math.random() * 30}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
            
            {/* Digital fog */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-[#ffff00]/5 to-transparent"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          {/* Main title with animation */}
          <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <motion.span 
                className="inline-block"
                animate={{ 
                  textShadow: [
                    '0 0 5px #ffff00, 0 0 10px #ffff00', 
                    '0 0 20px #ffff00, 0 0 40px #ffff00', 
                    '0 0 5px #ffff00, 0 0 10px #ffff00'
                  ] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Luce.
              </motion.span>{' '}
              <motion.span 
                className="inline-block"
                animate={{ 
                  textShadow: [
                    '0 0 5px #ffff00, 0 0 10px #ffff00', 
                    '0 0 20px #ffff00, 0 0 40px #ffff00', 
                    '0 0 5px #ffff00, 0 0 10px #ffff00'
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
                    '0 0 5px #ffff00, 0 0 10px #ffff00', 
                    '0 0 20px #ffff00, 0 0 40px #ffff00', 
                    '0 0 5px #ffff00, 0 0 10px #ffff00'
                  ] 
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                Futuro.
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Benvenuti nel nostro showroom del domani.
            </motion.p>
          </motion.div>
        </motion.div>
      ),
    },
    
    // Slide 2 - SINGAPORE: EPICENTRO DELL'INNOVAZIONE
    {
      title: "Singapore: l'epicentro dell'innovazione in Asia",
      subtitle: "Strategia, economia e opportunità",
      visual: (
        <motion.div className="relative w-full h-full">
          {/* Background */}
          <motion.div 
            className="absolute inset-0 bg-black overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          
          {/* World map wireframe */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <svg 
              viewBox="0 0 1000 500" 
              className="w-full h-full max-w-4xl"
              style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 0, 0.5))' }}
            >
              <motion.path
                d="M150,250 Q400,150 500,250 T850,250"
                stroke="rgba(255, 255, 0, 0.3)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
              <motion.path
                d="M200,150 Q400,50 500,150 T800,150"
                stroke="rgba(255, 255, 0, 0.3)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 0.2, ease: "easeInOut" }}
              />
              <motion.path
                d="M200,350 Q400,450 500,350 T800,350"
                stroke="rgba(255, 255, 0, 0.3)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 0.4, ease: "easeInOut" }}
              />
              <motion.path
                d="M150,200 Q250,100 350,200 T550,200"
                stroke="rgba(255, 255, 0, 0.3)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 0.6, ease: "easeInOut" }}
              />
              <motion.path
                d="M450,200 Q550,100 650,200 T850,200"
                stroke="rgba(255, 255, 0, 0.3)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 0.8, ease: "easeInOut" }}
              />
              <motion.path
                d="M150,300 Q250,400 350,300 T550,300"
                stroke="rgba(255, 255, 0, 0.3)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
              />
              <motion.path
                d="M450,300 Q550,400 650,300 T850,300"
                stroke="rgba(255, 255, 0, 0.3)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 1.2, ease: "easeInOut" }}
              />
              
              {/* Singapore highlight */}
              <motion.circle
                cx="730"
                cy="320"
                r="10"
                fill="#ffff00"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.5, 1],
                  opacity: 1,
                  boxShadow: [
                    '0 0 0 0 rgba(255, 255, 0, 0)',
                    '0 0 0 20px rgba(255, 255, 0, 0.3)',
                    '0 0 0 0 rgba(255, 255, 0, 0)'
                  ]
                }}
                transition={{ 
                  delay: 2, 
                  duration: 2,
                  boxShadow: {
                    repeat: Infinity,
                    duration: 2
                  }
                }}
              />
            </svg>
          </motion.div>
          
          {/* Content */}
          <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-10 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Singapore: <span className="text-[#ffff00] [text-shadow:_0_0_10px_#ffff00]">l'epicentro dell'innovazione</span>
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 0, 0.3)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-xl font-bold text-[#ffff00] mb-3">Mercato in crescita</h3>
                <p className="text-white">Crescita del 7.3% CAGR fino al 2030, con un valore previsto di 251.1 milioni USD.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 0, 0.3)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-xl font-bold text-[#ffff00] mb-3">Design d'interni</h3>
                <p className="text-white">Settore in espansione con CAGR del 5.9% (2025-2031), trainato da sostenibilità e tecnologia.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 0, 0.3)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-xl font-bold text-[#ffff00] mb-3">Opportunità di investimento</h3>
                <p className="text-white">Crescita immobiliare del 4.45% (2023-2028) con forte domanda per design moderni e sostenibili.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      ),
    },
    
    // Slide 3 - PERCHÉ SINGAPORE
    {
      title: "Perché Singapore: Hub strategico per l'Asia",
      subtitle: "Posizione strategica, stabilità economica, apertura agli investimenti",
      visual: (
        <motion.div className="relative w-full h-full">
          {/* Background */}
          <motion.div 
            className="absolute inset-0 bg-black overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          
          {/* Animated environment transitions */}
          <motion.div className="absolute inset-0">
            {/* Environment 1 */}
            <motion.div 
              className="absolute inset-0 bg-black opacity-0"
              animate={{ 
                opacity: [0, 1, 0],
              }}
              transition={{ 
                duration: 10, 
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 5
              }}
            />
            
            {/* Environment 2 */}
            <motion.div 
              className="absolute inset-0 bg-black opacity-0"
              animate={{ 
                opacity: [0, 1, 0],
              }}
              transition={{ 
                duration: 10, 
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 5,
                delay: 5
              }}
            />
          </motion.div>
          
          {/* Animated LED lines */}
          <motion.div className="absolute inset-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div 
                key={i}
                className="absolute h-[1px] bg-[#ffff00] left-0 right-0"
                style={{ top: `${20 + i * 15}%` }}
                initial={{ scaleX: 0, opacity: 0.7 }}
                animate={{ 
                  scaleX: [0, 1, 1, 0],
                  opacity: [0.7, 1, 1, 0.7],
                  left: ['0%', '0%', '0%', '100%']
                }}
                transition={{ 
                  duration: 8, 
                  times: [0, 0.3, 0.7, 1],
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
            
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div 
                key={i + 5}
                className="absolute w-[1px] bg-[#ffff00] top-0 bottom-0"
                style={{ left: `${20 + i * 15}%` }}
                initial={{ scaleY: 0, opacity: 0.7 }}
                animate={{ 
                  scaleY: [0, 1, 1, 0],
                  opacity: [0.7, 1, 1, 0.7],
                  top: ['0%', '0%', '0%', '100%']
                }}
                transition={{ 
                  duration: 8, 
                  times: [0, 0.3, 0.7, 1],
                  repeat: Infinity,
                  delay: i * 0.5 + 2.5
                }}
              />
            ))}
          </motion.div>
          
          {/* Visitor silhouettes */}
          <motion.div className="absolute inset-0 overflow-hidden">
            {/* Visitor 1 */}
            <motion.div 
              className="absolute w-8 h-20 bg-white/20 rounded-full blur-sm"
              initial={{ x: '-10%', y: '70%' }}
              animate={{ 
                x: '110%',
                y: '50%',
                opacity: [0, 1, 1, 0]
              }}
              transition={{ 
                duration: 15, 
                times: [0, 0.1, 0.9, 1],
                repeat: Infinity,
                repeatDelay: 5
              }}
            />
            
            {/* Visitor 2 */}
            <motion.div 
              className="absolute w-8 h-20 bg-white/20 rounded-full blur-sm"
              initial={{ x: '-10%', y: '30%' }}
              animate={{ 
                x: '110%',
                y: '60%',
                opacity: [0, 1, 1, 0]
              }}
              transition={{ 
                duration: 20, 
                times: [0, 0.1, 0.9, 1],
                repeat: Infinity,
                repeatDelay: 3,
                delay: 2
              }}
            />
            
            {/* Visitor 3 */}
            <motion.div 
              className="absolute w-8 h-20 bg-white/20 rounded-full blur-sm"
              initial={{ x: '110%', y: '40%' }}
              animate={{ 
                x: '-10%',
                y: '20%',
                opacity: [0, 1, 1, 0]
              }}
              transition={{ 
                duration: 18, 
                times: [0, 0.1, 0.9, 1],
                repeat: Infinity,
                repeatDelay: 4,
                delay: 5
              }}
            />
          </motion.div>
          
          {/* Content */}
          <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Un'esperienza immersiva tra <span className="text-[#ffff00] [text-shadow:_0_0_10px_#ffff00]">luce e materia</span>
            </motion.h2>
            
            <motion.p 
              className="text-2xl text-white/80 max-w-2xl mt-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                textShadow: [
                  '0 0 0px rgba(255, 255, 0, 0)', 
                  '0 0 10px rgba(255, 255, 0, 0.5)', 
                  '0 0 0px rgba(255, 255, 0, 0)'
                ]
              }}
              transition={{ 
                delay: 1.5, 
                duration: 1,
                textShadow: {
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1
                }
              }}
            >
              Non un semplice showroom. Un viaggio sensoriale.
            </motion.p>
          </motion.div>
        </motion.div>
      ),
    },
    
    // Slide 4 - IL NOSTRO SHOWROOM
    {
      title: "Un'esperienza immersiva di luce e design",
      subtitle: "Uno spazio di 500mq nel cuore del design district",
      visual: (
        <motion.div className="relative w-full h-full">
          {/* Background */}
          <motion.div 
            className="absolute inset-0 bg-black overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          
          {/* 3D architectural elements */}
          <motion.div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-3xl aspect-video">
              {/* Floor */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {/* Floor grid */}
                <div className="absolute inset-0 opacity-30" 
                  style={{ 
                    backgroundImage: 'linear-gradient(to right, #ffff00 1px, transparent 1px), linear-gradient(to bottom, #ffff00 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}
                />
                
                {/* Reactive floor elements */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    className="absolute h-1 bg-[#ffff00] rounded-full"
                    style={{ 
                      width: `${10 + i * 5}%`, 
                      left: `${10 + i * 20}%`,
                      bottom: `${10 + i * 15}%`
                    }}
                    animate={{ 
                      opacity: [0.3, 1, 0.3],
                      boxShadow: [
                        '0 0 5px #ffff00',
                        '0 0 20px #ffff00',
                        '0 0 5px #ffff00'
                      ]
                    }}
                    transition={{ 
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Walls */}
              <motion.div 
                className="absolute top-0 left-1/4 right-1/4 h-1/2 border-l-2 border-r-2 border-t-2 border-[#ffff00]/30"
                initial={{ height: 0 }}
                animate={{ height: '50%' }}
                transition={{ delay: 1, duration: 1.5 }}
              >
                {/* Wall lights */}
                <motion.div 
                  className="absolute top-1/4 left-0 w-2 h-8 bg-[#ffff00] -ml-1"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    boxShadow: [
                      '0 0 5px #ffff00',
                      '0 0 20px #ffff00',
                      '0 0 5px #ffff00'
                    ]
                  }}
                  transition={{ 
                    delay: 2.5,
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity
                    }
                  }}
                />
                
                <motion.div 
                  className="absolute top-1/4 right-0 w-2 h-8 bg-[#ffff00] -mr-1"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    boxShadow: [
                      '0 0 5px #ffff00',
                      '0 0 20px #ffff00',
                      '0 0 5px #ffff00'
                    ]
                  }}
                  transition={{ 
                    delay: 2.5,
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      delay: 1
                    }
                  }}
                />
              </motion.div>
              
              {/* Ceiling */}
              <motion.div 
                className="absolute top-0 left-1/6 right-1/6 h-1/6 border-t-2 border-[#ffff00]/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
              >
                {/* Ceiling light */}
                <motion.div 
                  className="absolute top-0 left-1/2 w-1/4 h-1 bg-[#ffff00] -translate-x-1/2 -translate-y-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    boxShadow: [
                      '0 0 10px #ffff00',
                      '0 0 30px #ffff00',
                      '0 0 10px #ffff00'
                    ]
                  }}
                  transition={{ 
                    delay: 2.5,
                    boxShadow: {
                      duration: 3,
                      repeat: Infinity
                    }
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 pt-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-10 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="text-[#ffff00] [text-shadow:_0_0_10px_#ffff00]">Minimalismo luminoso.</span> Architettura viva.
            </motion.h2>
          </motion.div>
        </motion.div>
      ),
    },
    
    // Slide 5 - TARGET MARKET
    {
      title: "Il mercato di riferimento",
      subtitle: "Architetti, interior designer e clienti luxury",
      visual: (
        <motion.div className="relative w-full h-full">
          {/* Background with animated particles */}
          <motion.div 
            className="absolute inset-0 bg-black overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Particle background */}
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div 
                key={i}
                className="absolute w-1 h-1 bg-[#ffff00] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0, 1, 0],
                  scale: [0, Math.random() * 2 + 0.5, 0],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </motion.div>
          
          {/* Content */}
          <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-10 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="text-[#ffff00] [text-shadow:_0_0_10px_#ffff00]">Tecnologia</span>, sostenibilità, arte
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              {/* Infographic 1 - Market Growth */}
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 relative overflow-hidden"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 0, 0.3)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-xl font-bold text-[#ffff00] mb-6 relative z-10">Crescita del mercato</h3>
                
                {/* Circular progress */}
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="rgba(255,255,255,0.1)" 
                      strokeWidth="8" 
                    />
                    <motion.circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="#ffff00" 
                      strokeWidth="8" 
                      strokeLinecap="round"
                      strokeDasharray="283"
                      initial={{ strokeDashoffset: 283 }}
                      animate={{ strokeDashoffset: 283 * 0.17 }} // 83% efficiency
                      transition={{ delay: 1.5, duration: 2, ease: "easeInOut" }}
                    />
                  </svg>
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                  >
                    8.3%
                  </motion.div>
                </div>
                
                <p className="text-white text-sm">CAGR del mercato globale di interior design (2025-2033), con forte crescita a Singapore</p>
              </motion.div>
              
              {/* Infographic 2 - Design Trends */}
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 relative overflow-hidden"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 0, 0.3)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-xl font-bold text-[#ffff00] mb-6 relative z-10">Tendenze di design</h3>
                
                {/* Bar chart */}
                <div className="relative h-32 flex items-end justify-around gap-3 mb-4">
                  {[70, 85, 60, 90].map((height, i) => (
                    <motion.div 
                      key={i}
                      className="w-6 bg-[#ffff00]/30 rounded-t-sm relative group"
                      style={{ height: `${height}%` }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 1.5 + i * 0.2, duration: 1, ease: "easeOut" }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-[#ffff00] opacity-30"
                        animate={{ 
                          opacity: [0.3, 0.6, 0.3],
                          height: ['0%', '100%', '0%']
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-white text-sm">Crescente domanda per design eco-friendly, smart home e spazi multifunzionali a Singapore</p>
              </motion.div>
              
              {/* Infographic 3 - Investment Opportunities */}
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 relative overflow-hidden"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 0, 0.3)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-xl font-bold text-[#ffff00] mb-6 relative z-10">Opportunità di investimento</h3>
                
                {/* Interactive dots */}
                <div className="relative h-32 mb-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {Array.from({ length: 20 }).map((_, i) => {
                      const x = 10 + (i % 5) * 20;
                      const y = 10 + Math.floor(i / 5) * 20;
                      return (
                        <motion.circle 
                          key={i}
                          cx={x}
                          cy={y}
                          r="3"
                          fill="#ffff00"
                          initial={{ opacity: 0.3 }}
                          animate={{ 
                            opacity: [0.3, 1, 0.3],
                            r: [3, 5, 3]
                          }}
                          transition={{ 
                            duration: 2 + (i % 3),
                            repeat: Infinity,
                            delay: i * 0.1
                          }}
                        />
                      );
                    })}
                    
                    {/* Connection lines */}
                    {Array.from({ length: 10 }).map((_, i) => {
                      const x1 = 10 + (i % 5) * 20;
                      const y1 = 10 + Math.floor(i / 5) * 20;
                      const x2 = 10 + ((i + 5) % 5) * 20;
                      const y2 = 10 + Math.floor((i + 5) / 5) * 20;
                      return (
                        <motion.line 
                          key={i}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="#ffff00"
                          strokeWidth="0.5"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.5, 0] }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.2 + 1
                          }}
                        />
                      );
                    })}
                  </svg>
                </div>
                
                <p className="text-white text-sm">Settori in crescita: smart home design, interni eco-friendly e showroom high-end con ROI previsto del 5.9%</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      ),
    },
    

    // Slide 6 - PIANO DI INVESTIMENTO
    {
      title: "Piano di investimento",
      subtitle: "Budget, ROI e proiezioni finanziarie",
      visual: (
        <motion.div className="relative w-full h-full">
          {/* Background */}
          <motion.div 
            className="absolute inset-0 bg-black overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          
          {/* Content */}
          <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-10 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="text-[#ffff00] [text-shadow:_0_0_10px_#ffff00]">Piano di investimento</span>
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              {/* Investment breakdown */}
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 relative overflow-hidden"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 0, 0.3)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-xl font-bold text-[#ffff00] mb-6 relative z-10">Investimento iniziale</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Affitto e ristrutturazione</span>
                    <span className="text-white font-semibold">€450.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Arredamento e allestimento</span>
                    <span className="text-white font-semibold">€200.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Marketing e lancio</span>
                    <span className="text-white font-semibold">€150.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Personale e formazione</span>
                    <span className="text-white font-semibold">€100.000</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-white/10">
                    <span className="text-gray-300 font-bold">Totale</span>
                    <span className="text-[#ffff00] font-bold">€900.000</span>
                  </div>
                </div>
              </motion.div>
              
              {/* ROI projection */}
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 relative overflow-hidden"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 0, 0.3)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-xl font-bold text-[#ffff00] mb-6 relative z-10">ROI previsto</h3>
                
                <div className="relative h-40 mb-4">
                  <svg viewBox="0 0 100 50" className="w-full h-full">
                    {/* Grid lines */}
                    <line x1="0" y1="0" x2="100" y2="0" stroke="rgba(255,255,255,0.1)" />
                    <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.1)" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.1)" />
                    
                    <line x1="0" y1="0" x2="0" y2="50" stroke="rgba(255,255,255,0.1)" />
                    <line x1="25" y1="0" x2="25" y2="50" stroke="rgba(255,255,255,0.1)" />
                    <line x1="50" y1="0" x2="50" y2="50" stroke="rgba(255,255,255,0.1)" />
                    <line x1="75" y1="0" x2="75" y2="50" stroke="rgba(255,255,255,0.1)" />
                    <line x1="100" y1="0" x2="100" y2="50" stroke="rgba(255,255,255,0.1)" />
                    
                    {/* ROI curve */}
                    <motion.path
                      d="M0,50 C10,45 20,35 30,25 S50,10 75,5 L100,0"
                      stroke="#ffff00"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
                    />
                    
                    {/* Year markers */}
                    <text x="0" y="55" fill="white" fontSize="3" textAnchor="middle">2024</text>
                    <text x="25" y="55" fill="white" fontSize="3" textAnchor="middle">2025</text>
                    <text x="50" y="55" fill="white" fontSize="3" textAnchor="middle">2026</text>
                    <text x="75" y="55" fill="white" fontSize="3" textAnchor="middle">2027</text>
                    <text x="100" y="55" fill="white" fontSize="3" textAnchor="middle">2028</text>
                  </svg>
                </div>
                
                <div className="text-center">
                  <p className="text-white text-sm mb-2">Break-even previsto: Q3 2026</p>
                  <p className="text-[#ffff00] font-bold">ROI a 5 anni: 22%</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      ),
    },
    
    // Slide 7 - TIMELINE
    {
      title: "Timeline del progetto",
      subtitle: "Fasi di implementazione e milestone",
      visual: (
        <motion.div className="relative w-full h-full">
          {/* Background */}
          <motion.div 
            className="absolute inset-0 bg-black overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          
          {/* Content */}
          <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-10 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="text-[#ffff00] [text-shadow:_0_0_10px_#ffff00]">Timeline</span> del progetto
            </motion.h2>
            
            {/* Timeline */}
            <motion.div 
              className="relative w-full max-w-4xl mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#ffff00]/30 -translate-x-1/2" />
              
              {/* Timeline items */}
              {[
                { date: "Q1 2024", title: "Ricerca location e negoziazione", delay: 1.5 },
                { date: "Q2 2024", title: "Firma contratto e progettazione", delay: 2 },
                { date: "Q3-Q4 2024", title: "Ristrutturazione e allestimento", delay: 2.5 },
                { date: "Q1 2025", title: "Soft opening e eventi VIP", delay: 3 },
                { date: "Q2 2025", title: "Grand opening ufficiale", delay: 3.5 }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className={`flex items-start gap-8 mb-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: item.delay, duration: 0.8 }}
                >
                  <div className={`w-1/2 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-bold text-[#ffff00] mb-2">{item.title}</h3>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute top-1.5 left-1/2 w-4 h-4 bg-[#ffff00] rounded-full -translate-x-1/2 z-10" />
                    <div className="absolute top-1.5 left-1/2 w-4 h-4 bg-[#ffff00]/50 rounded-full -translate-x-1/2 animate-ping" />
                  </div>
                  
                  <div className={`w-1/2 ${i % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <span className="text-white/70 font-mono">{item.date}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      ),
    },
    
    // Slide 8 - MARKETING STRATEGY
    {
      title: "Strategia di marketing",
      subtitle: "Come raggiungeremo il nostro target",
      visual: (
        <motion.div className="relative w-full h-full">
          {/* Background */}
          <motion.div 
            className="absolute inset-0 bg-black overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          
          {/* Content */}
          <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-10 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="text-[#ffff00] [text-shadow:_0_0_10px_#ffff00]">Strategia</span> di marketing
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              {/* Digital */}
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 0, 0.3)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                custom={1}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 1.5 + (i * 0.2) } })
                }}
              >
                <h3 className="text-xl font-bold text-[#ffff00] mb-3">Digital & Social</h3>
                <ul className="text-left text-white space-y-2">
                  <li>• Campagne mirate su LinkedIn e Instagram</li>
                  <li>• Collaborazioni con influencer di design</li>
                  <li>• Content marketing specializzato</li>
                  <li>• Virtual showroom experience</li>
                </ul>
              </motion.div>
              
              {/* Events */}
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                whileHover={{ scale: 1.05, borderColor: 'rgba(192, 255, 0, 0.3)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                custom={2}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 1.5 + (i * 0.2) } })
                }}
              >
                <h3 className="text-xl font-bold text-[#ffff00] mb-3">Eventi & PR</h3>
                <ul className="text-left text-white space-y-2">
                  <li>• Grand opening con VIP e media</li>
                  <li>• Workshop per architetti e designer</li>
                  <li>• Partecipazione a Singapore Design Week</li>
                  <li>• Collaborazioni con istituzioni locali</li>
                </ul>
              </motion.div>
              
              {/* Partnerships */}
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                whileHover={{ scale: 1.05, borderColor: 'rgba(192, 255, 0, 0.3)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                custom={3}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 1.5 + (i * 0.2) } })
                }}
              >
                <h3 className="text-xl font-bold text-[#ffff00] mb-3">Partnership</h3>
                <ul className="text-left text-white space-y-2">
                  <li>• Collaborazioni con studi di architettura</li>
                  <li>• Co-branding con brand di lusso</li>
                  <li>• Programma di referral per designer</li>
                  <li>• Showroom tour per università di design</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      ),
    },
    
    // Slide 9 - CALL TO ACTION
    {
      title: "Illuminiamo il futuro in Asia",
      subtitle: "Singapore: il primo passo di un viaggio luminoso",
      visual: (
        <motion.div className="relative w-full h-full">
          {/* Background */}
          <motion.div 
            className="absolute inset-0 bg-black overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          
          {/* Content */}
          <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            {/* Animated logo removed as requested */}
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="text-[#ffff00] [text-shadow:_0_0_10px_#ffff00]">Illuminiamo il futuro</span> in Asia
            </motion.h2>
            
            <motion.p 
              className="text-xl text-white max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Singapore: il primo passo di un viaggio luminoso
            </motion.p>
          </motion.div>
        </motion.div>
      ),
    },
  ];

  // Direction for slide transitions
  const [[page, direction], setPage] = useState([0, 0]);

  // Handle slide navigation
  const paginate = (newDirection: number) => {
    const newPage = (page + newDirection + totalSlides) % totalSlides;
    setPage([newPage, newDirection]);
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Presentation container */}
          <div className="relative aspect-video overflow-hidden">
            {/* Slide content */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                {slides[page].visual}
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation controls */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === page ? 'bg-[#ffff00] w-6' : 'bg-white/30'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Previous/Next buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white z-20 hover:bg-[#ffff00]/20 transition-colors"
              onClick={() => {
                paginate(-1);
                setIsAutoPlaying(false);
              }}
              aria-label="Previous slide"
            >
              ←
            </button>
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white z-20 hover:bg-[#ffff00]/20 transition-colors"
              onClick={() => {
                paginate(1);
                setIsAutoPlaying(false);
              }}
              aria-label="Next slide"
            >
              →
            </button>
            
            {/* Play/Pause button */}
            <button
              className="absolute right-4 bottom-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white z-20 hover:bg-[#ffff00]/20 transition-colors"
              onClick={resumeAutoPlay}
              aria-label={isAutoPlaying ? "Pause presentation" : "Play presentation"}
            >
              {isAutoPlaying ? "⏸" : "▶"}
            </button>
          </div>
          
          {/* Slide info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-white">
              Slide {page + 1} di {totalSlides}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;