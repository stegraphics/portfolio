import React, { useState, useEffect } from 'react';
import { ExternalLink, Eye, Globe } from 'lucide-react';
import { useLanguage, useCategory } from '../App';
import Presentation from './Presentation';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showPresentation, setShowPresentation] = useState(false);
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const { t } = useLanguage();
  const { activeCategory, setActiveCategory } = useCategory();

  const categories = [
    { id: 'all', name: t('portfolio', 'all'), icon: '🎨' },
    { id: 'branding', name: t('portfolio', 'branding'), icon: '🏷️' },
    { id: 'interior', name: t('portfolio', 'interior'), icon: '🏠' },
    { id: 'food', name: t('portfolio', 'food'), icon: '🍽️' },
    { id: 'banners', name: t('portfolio', 'banners'), icon: '📢' },
  ];

  const projects = [
    {
      id: 1,
      title: "Concept: showroom di illuminazione a Singapore",
      category: "presentations",
      image: "./images/concept.jpeg",
      description: "Presentazione animata sulla possibilità di apertura di uno showroom di design di illuminazione a Singapore"
    },
    {
      id: 2,
      title: "LUXOR",
      category: "interior",
      images: [
        {
          url: "/images/lampada a cerchio catalogo.jpeg",
          description: "Collezione di lampade dal design esclusivo e innovativo"
        },
        {
          url: "/images/lampada stile opuntia da tavolo.jpeg",
          description: "Lampada da tavolo dal design organico ispirato alla natura"
        },
        {
          url: "/images/lampada stile bella da tavolo.jpeg",
          description: "Elegante lampadario con design moderno e raffinato"
        },
        {
          url: "/images/lampade lunga.jpeg",
          description: "Serie di lampade da tavolo con design lineare e minimale"
        },
        {
          url: "/images/libro aperto home collection.jpeg",
          description: "Catalogo completo della collezione arredamento e illuminazione LUXOR"
        }
      ],
      description: "Collezione esclusiva di lampade di design LUXOR"
    },
    {
      id: 3,
      title: "Osteria Radice",
      category: "food",
      images: [
        {
          url: "/images/osteria radice logo.jpeg",
          description: "Logo dell'Osteria Radice"
        },
        {
          url: "/images/CATALOGO PRIMA.jpg",
          description: "Copertina del catalogo dell'Osteria Radice"
        },
        {
          url: "/images/secondi e primi radice.jpg",
          description: "Selezione di primi e secondi piatti dell'Osteria Radice"
        }
      ],
      description: "Brand identity e materiale grafico per ristorante di alta cucina"
    },
    {
      id: 4,
      title: "Taverna della Carne",
      category: "food",
      images: [
        {
          url: "/images/logo taverna della carne.jpeg",
          description: "Logo della Taverna della Carne"
        },
        {
          url: "/images/taverna carne mockup.jpg",
          description: "Mockup dell'identità visiva della Taverna della Carne"
        }
      ],
      description: "Brand identity per ristorante specializzato in carni pregiate"
    },
    {
      id: 5,
      title: "Velvet Buns",
      categories: ["food", "branding"],
      images: [
        {
          url: "/images/logo velvet buns.jpeg",
          description: "Logo di Velvet Buns"
        },
        {
          url: "/images/PROVA 1.jpg",
          description: "Concept design per Velvet Buns"
        },
        {
          url: "/images/velvet buns.jpg",
          description: "Applicazione del brand Velvet Buns"
        }
      ],
      description: "Logo design per hamburgeria gourmet"
    },
    {
      id: 6,
      title: "Bellachioma Hair",
      category: "branding",
      images: [
        {
          url: "/images/bellachioma hair logo.jpeg",
          description: "Logo di Bellachioma Hair"
        },
        {
          url: "/images/1.jpg",
          description: "Bellachioma Hair - Servizi di styling"
        },
        {
          url: "/images/2.jpg",
          description: "Bellachioma Hair - Trattamenti professionali"
        },
        {
          url: "/images/3.jpg",
          description: "Bellachioma Hair - Colorazioni personalizzate"
        },
        {
          url: "/images/4.jpg",
          description: "Bellachioma Hair - Acconciature speciali"
        },
        {
          url: "/images/5.jpeg",
          description: "Bellachioma Hair - Cura dei capelli"
        },
        {
          url: "/images/6.jpeg",
          description: "Bellachioma Hair - Prodotti professionali"
        },
        {
          url: "/images/modella.jpg",
          description: "Bellachioma Hair - Risultati su modella"
        }
      ],
      description: "Brand identity per salone di bellezza e portfolio completo dei servizi offerti"
    },
    {
      id: 7,
      title: "Banner Pubblicitari",
      category: "banners",
      images: [
        {
          url: "/images/banner clinica dentistica.jpeg",
          description: "Banner pubblicitario per clinica dentistica"
        },
        {
          url: "/images/ristorante bella milano banner.jpeg",
          description: "Banner pubblicitario per Ristorante Bella Milano"
        },
        {
          url: "/images/ristorante marenero banner.jpeg",
          description: "Banner pubblicitario per Ristorante Marenero"
        },
        {
          url: "/images/apertura dolci nuovi banner.jpg",
          description: "Banner pubblicitario per apertura nuova pasticceria"
        }
      ],
      description: "Collezione di banner pubblicitari per diversi settori e attività"
    },
    {
      id: 8,
      title: "EDIL GAMAL",
      category: "websites",
      images: [
        {
          url: "/images/x mio sito.jpg",
          description: "Sito web per EDIL GAMAL - Ditta edile con oltre 35 anni di esperienza in Lombardia"
        }
      ],
      description: "Sito web professionale per EDIL GAMAL, ditta edile che opera in Lombardia da oltre 35 anni, specializzata in costruzioni e ristrutturazioni"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => 
        project.categories 
          ? project.categories.includes(activeCategory)
          : project.category === activeCategory
      );

  return (
    <section id="portfolio" className="py-20 bg-[#010d2c] relative">
      {/* Language selector è già presente nell'App.tsx */}

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Il Mio <span className="text-[#c0ff00]">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('portfolio', 'description')}
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                if (category.id === 'branding') {
                  setShowSubcategories(true);
                } else {
                  setShowSubcategories(false);
                }
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-[#c0ff00] text-[#010d2c] shadow-[0_0_20px_#c0ff00]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Subcategories for Branding */}
        {showSubcategories && activeCategory === 'branding' && (
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
            <button
              onClick={() => {
                // Mostra tutti i progetti di branding
                setActiveCategory('branding');
              }}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              🎨 Tutti i Loghi
            </button>
            <button
               onClick={() => {
                 setShowVideoModal(true);
               }}
               className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
             >
               🎬 Logo Animations
             </button>
          </div>
        )}

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => {
                if (project.category === 'presentations') {
                  setShowPresentation(true);
                } else {
                  setSelectedProject(project);
                }
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.images ? project.images[0].url : project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 rounded-t-xl border-2 border-transparent group-hover:border-[#c0ff00] group-hover:shadow-[0_0_30px_#c0ff00]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 flex items-center gap-2 text-white">
                    <Eye className="w-5 h-5" />
                    <span>{t('portfolio', 'viewProject')}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#c0ff00] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Project modal */}
        {showPresentation && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center overflow-y-auto">
            <div 
               className="relative w-full max-w-7xl mx-auto overflow-hidden"
             >
              <Presentation />
              <button
                onClick={() => setShowPresentation(false)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors z-50"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Video modal */}
          {showVideoModal && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4">
              <div className="relative w-full max-w-4xl mx-auto">
                <div className="text-center">
                   <div className="flex justify-between items-center mb-4">
                     <h3 className="text-2xl font-bold text-white">🎬 Logo Animations</h3>
                     <button
                       onClick={() => setShowVideoModal(false)}
                       className="text-white text-2xl font-bold hover:text-gray-300 transition-colors"
                     >
                       ✕
                     </button>
                   </div>
                   <div className="relative bg-black overflow-hidden min-h-[400px] flex items-center justify-center">
                     <video 
                         controls 
                         autoPlay 
                         muted
                         playsInline
                         controlsList="nodownload"
                         className="w-full h-auto max-h-[60vh]"
                         src="./images/IMG_2048.mp4"
                         onError={(e) => {
                           console.log('Errore video:', e);
                           e.target.style.display = 'none';
                           e.target.nextElementSibling.style.display = 'block';
                         }}
                       >
                         <source src="./images/IMG_2048.mp4" type="video/mp4" />
                      </video>
                      <div className="hidden absolute inset-0 flex flex-col items-center justify-center text-white">
                        <div className="text-6xl mb-4">🎬</div>
                        <h4 className="text-xl font-semibold mb-2">Video non disponibile</h4>
                        <p className="text-gray-300 text-center max-w-md">
                          Il file video potrebbe non essere compatibile con il browser.<br/>
                          Contatta per visualizzare le animazioni dei loghi.
                        </p>
                      </div>
                   </div>
                 </div>
              </div>
            </div>
          )}
        
        {/* Regular project modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
              {selectedProject.images ? (
                <div className="relative h-full">
                  <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                    {selectedProject.images.map((image, index) => (
                      <div key={index} className="flex-shrink-0 w-full snap-center">
                        <div className="relative flex flex-col items-center justify-center p-4">
                          <div className="w-full max-w-4xl mx-auto">
                            <img
                              src={image.url}
                              alt={selectedProject.title}
                              className="w-full h-[60vh] object-contain"
                            />
                          </div>
                          {index === 0 && (
                            <div className="w-full mt-4 max-w-4xl mx-auto">
                              <p className="text-gray-300 text-lg leading-relaxed text-center">
                                {image.description}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="relative flex flex-col items-center justify-center p-4">
                  <div className="w-full max-w-4xl mx-auto">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-[60vh] object-contain"
                    />
                  </div>
                  <div className="w-full mt-4 max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold text-white mb-4 text-center">{selectedProject.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed text-center">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;