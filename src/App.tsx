import React, { createContext, useContext, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Presentation from './components/Presentation';

type Language = 'it' | 'en' | 'es' | 'de' | 'fr';

type TranslationKey = 'hero' | 'about' | 'portfolio' | 'services' | 'contact' | 'footer' | 'presentation';

type TranslationData = {
  [key in TranslationKey]: {
    [key: string]: string | string[];
  };
};

type Translations = {
  [key in Language]: TranslationData;
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (section: TranslationKey, key: string) => string | string[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

const translations: Translations = {
  it: {
    hero: {
      roles: ['Designer', 'Sviluppatore Web', 'Creativo'],
      contact: 'Contattami',
      portfolio: 'Vedi Portfolio'
    },
    presentation: {
      title: "Luce, Design e Futuro",
      subtitle: "Uno showroom visionario a Singapore"
    },
    about: {
      title: 'Chi Sono',
      description: 'Sono un designer e sviluppatore web appassionato di creatività e innovazione. La mia missione è trasformare idee in esperienze digitali uniche e coinvolgenti.',
      bio: {
        intro: 'Mi chiamo <span class="text-[#b8ff00] font-semibold">Stefano Schifano</span>, sono nato il 10 gennaio 1999 e ho frequentato il Liceo Linguistico G. Parini di Lissone, dove ho studiato inglese, spagnolo e tedesco, conseguendo il livello B1 in tutte e tre le lingue.',
        passion: 'Sin dall\'adolescenza ho coltivato una forte passione per la grafica: ho iniziato in modo spontaneo a sperimentare con software come <span class="text-[#b8ff00]">Photoshop</span>, <span class="text-[#b8ff00]">Illustrator</span> e <span class="text-[#b8ff00]">InDesign</span>, spinto dalla curiosità e dal desiderio di dare forma alle mie idee. Con il tempo questa inclinazione si è trasformata in una vera e propria competenza professionale, permettendomi di trasformare ciò che inizialmente era un interesse personale in un percorso lavorativo.',
        work: 'Attualmente gestisco la comunicazione e i social media di due brand: <span class="text-[#b8ff00] font-semibold">Pizza Ok</span> e <span class="text-[#b8ff00] font-semibold">Edilgamal</span>, un\'azienda operante nel settore edile. Oltre alla gestione dei canali social, mi occupo anche dello sviluppo e della cura dei siti web di entrambi i brand, integrando creatività e strategia digitale.',
        conclusion: 'Oggi considero la grafica e la comunicazione visiva non solo un lavoro, ma anche un mezzo per esprimere creatività e trasmettere messaggi in modo chiaro, moderno ed efficace.'
      }
    },
    portfolio: {
      title: 'Il Mio Portfolio',
      description: 'Una selezione dei miei lavori più significativi',
      allProjects: 'Tutti i Progetti',
      presentations: 'Presentazioni',
      interior: 'Interior Design',
      food: 'Ristorazione & Food',
      branding: 'Loghi & Branding',
      banners: 'Banner Pubblicitari',
      viewProject: 'Visualizza Progetto'
    },
    services: {
      title: 'I Miei Servizi',
      description: 'Soluzioni creative e professionali per il tuo business',
      pitchDeck: 'Pitch Deck / Presentazioni Aziendali',
      pitchDeckDesc: 'Presentazioni professionali che catturano l\'attenzione e convincono il tuo pubblico',
      template: 'Design di Template',
      templateDesc: 'Template personalizzati per mantenere coerenza visiva in tutti i tuoi materiali',
      social: 'Visual Storytelling per Social',
      socialDesc: 'Content design per social media che aumenta engagement e visibilità',
      catalogs: 'Cataloghi Interattivi',
      catalogsDesc: 'Cataloghi digitali che trasformano la presentazione prodotti in esperienza',
      ctaTitle: 'Pronto a Lasciare il',
      ctaHighlight: 'Segno',
      features: {
        storytelling: 'Narrazione visiva coinvolgente',
        infographics: 'Infografiche personalizzate di impatto',
        animations: 'Animazioni fluide e professionali',
        guidelines: 'Linee guida complete per il tuo brand',
        formats: 'Compatibilità con tutti i formati digitali',
        usability: 'Interfacce intuitive e facili da utilizzare',
        posts: 'Contenuti social che catturano l\'attenzione',
        stories: 'Stories dinamiche con effetti avanzati',
        carousel: 'Carousel interattivi che aumentano l\'engagement',
        responsive: 'Design adattivo per tutti i dispositivi',
        navigation: 'Esperienza di navigazione fluida e intuitiva',
        cta: 'Call-to-action strategiche che convertono'
      }
    },
    contact: {
      title: 'Contattami',
      name: 'Nome',
      email: 'Email',
      message: 'Messaggio',
      send: 'Invia'
    },
    footer: {
      copyright: '© 2024 Stefano Schifano. Tutti i diritti riservati.'
    }
  },
  en: {
    hero: {
      roles: ['Designer', 'Web Developer', 'Creative'],
      contact: 'Contact Me',
      portfolio: 'View Portfolio'
    },
    about: {
      title: 'About Me',
      description: 'I am a designer and web developer passionate about creativity and innovation. My mission is to transform ideas into unique and engaging digital experiences.',
      bio: {
        intro: 'My name is <span class="text-[#b8ff00] font-semibold">Stefano Schifano</span>, I was born on January 10, 1999 and I attended the G. Parini Linguistic High School in Lissone, where I studied English, Spanish and German, achieving B1 level in all three languages.',
        passion: 'Since adolescence I have cultivated a strong passion for graphics: I started spontaneously experimenting with software like <span class="text-[#b8ff00]">Photoshop</span>, <span class="text-[#b8ff00]">Illustrator</span> and <span class="text-[#b8ff00]">InDesign</span>, driven by curiosity and the desire to give shape to my ideas. Over time this inclination has transformed into a real professional competence, allowing me to transform what was initially a personal interest into a career path.',
        work: 'I currently manage the communication and social media of two brands: <span class="text-[#b8ff00] font-semibold">Pizza Ok</span> and <span class="text-[#b8ff00] font-semibold">Edilgamal</span>, a company operating in the construction sector. In addition to managing social channels, I also take care of the development and maintenance of the websites of both brands, integrating creativity and digital strategy.',
        conclusion: 'Today I consider graphics and visual communication not only a job, but also a means to express creativity and transmit messages in a clear, modern and effective way.'
      }
    },
    portfolio: {
      title: 'My Portfolio',
      description: 'A selection of my most significant works',
      allProjects: 'All Projects',
      presentations: 'Presentations',
      interior: 'Interior Design',
      food: 'Restaurant & Food',
      branding: 'Logo & Branding',
      banners: 'Advertising Banners',
      viewProject: 'View Project'
    },
    services: {
      title: 'My Services',
      description: 'Creative and professional solutions for your business',
      pitchDeck: 'Pitch Deck / Business Presentations',
      pitchDeckDesc: 'Professional presentations that capture attention and convince your audience',
      template: 'Template Design',
      templateDesc: 'Custom templates to maintain visual consistency across all your materials',
      social: 'Visual Storytelling for Social',
      socialDesc: 'Content design for social media that increases engagement and visibility',
      catalogs: 'Interactive Catalogs',
      catalogsDesc: 'Digital catalogs that transform product presentation into experience',
      ctaTitle: 'Ready to Leave Your',
      ctaHighlight: 'Mark',
      features: {
        storytelling: 'Engaging visual storytelling',
        infographics: 'High-impact custom infographics',
        animations: 'Professional smooth animations',
        guidelines: 'Comprehensive brand guidelines',
        formats: 'Compatible with all digital formats',
        usability: 'Intuitive and user-friendly interfaces',
        posts: 'Attention-grabbing social content',
        stories: 'Dynamic stories with advanced effects',
        carousel: 'Interactive carousels that boost engagement',
        responsive: 'Adaptive design for all devices',
        navigation: 'Seamless and intuitive navigation experience',
        cta: 'Strategic call-to-actions that convert'
      }
    },
    contact: {
      title: 'Contact Me',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send'
    },
    footer: {
      copyright: '© 2024 Stefano Schifano. All rights reserved.'
    }
  },
  es: {
    hero: {
      roles: ['Diseñador', 'Desarrollador Web', 'Creativo'],
      contact: 'Contáctame',
      portfolio: 'Ver Portfolio'
    },
    about: {
      title: 'Acerca de Mí',
      description: 'Soy un diseñador y desarrollador web apasionado por la creatividad y la innovación. Mi misión es transformar ideas en experiencias digitales únicas y atractivas.',
      bio: {
        intro: 'Mi nombre es <span class="text-[#b8ff00] font-semibold">Stefano Schifano</span>, nací el 10 de enero de 1999 y asistí al Liceo Lingüístico G. Parini de Lissone, donde estudié inglés, español y alemán, alcanzando el nivel B1 en los tres idiomas.',
        passion: 'Desde la adolescencia he cultivado una fuerte pasión por los gráficos: comencé espontáneamente a experimentar con software como <span class="text-[#b8ff00]">Photoshop</span>, <span class="text-[#b8ff00]">Illustrator</span> e <span class="text-[#b8ff00]">InDesign</span>, impulsado por la curiosidad y el deseo de dar forma a mis ideas. Con el tiempo esta inclinación se ha transformado en una verdadera competencia profesional, permitiéndome transformar lo que inicialmente era un interés personal en una trayectoria profesional.',
        work: 'Actualmente gestiono la comunicación y las redes sociales de dos marcas: <span class="text-[#b8ff00] font-semibold">Pizza Ok</span> y <span class="text-[#b8ff00] font-semibold">Edilgamal</span>, una empresa que opera en el sector de la construcción. Además de gestionar los canales sociales, también me encargo del desarrollo y mantenimiento de los sitios web de ambas marcas, integrando creatividad y estrategia digital.',
        conclusion: 'Hoy considero los gráficos y la comunicación visual no solo un trabajo, sino también un medio para expresar creatividad y transmitir mensajes de manera clara, moderna y efectiva.'
      }
    },
    portfolio: {
      title: 'Mi Portfolio',
      description: 'Una selección de mis trabajos más significativos',
      allProjects: 'Todos los Proyectos',
      presentations: 'Presentaciones',
      interior: 'Diseño de Interiores',
      food: 'Restauración & Alimentación',
      branding: 'Logo & Marca',
      banners: 'Banners Publicitarios',
      viewProject: 'Ver Proyecto'
    },
    services: {
      title: 'Mis Servicios',
      description: 'Soluciones creativas y profesionales para tu negocio',
      pitchDeck: 'Pitch Deck / Presentaciones Empresariales',
      pitchDeckDesc: 'Presentaciones profesionales que capturan la atención y convencen a tu audiencia',
      template: 'Diseño de Plantillas',
      templateDesc: 'Plantillas personalizadas para mantener la coherencia visual en todos tus materiales',
      social: 'Narrativa Visual para Redes Sociales',
      socialDesc: 'Diseño de contenido para redes sociales que aumenta el engagement y la visibilidad',
      catalogs: 'Catálogos Interactivos',
      catalogsDesc: 'Catálogos digitales que transforman la presentación de productos en experiencia',
      ctaTitle: '¿Listo para Dejar tu',
      ctaHighlight: 'Huella',
      features: {
        storytelling: 'Narrativa visual cautivadora',
        infographics: 'Infografías personalizadas de alto impacto',
        animations: 'Animaciones fluidas y profesionales',
        guidelines: 'Guías completas para tu marca',
        formats: 'Compatibilidad con todos los formatos digitales',
        usability: 'Interfaces intuitivas y fáciles de usar',
        posts: 'Contenido social que capta la atención',
        stories: 'Stories dinámicas con efectos avanzados',
        carousel: 'Carruseles interactivas que aumentan el engagement',
        responsive: 'Diseño adaptativo para todos los dispositivos',
        navigation: 'Experiencia de navegación fluida e intuitiva',
        cta: 'Call-to-action estratégicos que convierten'
      }
    },
    contact: {
      title: 'Contacto',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar'
    },
    footer: {
      copyright: '© 2024 Stefano Schifano. Todos los derechos reservados.'
    }
  },
  de: {
    hero: {
      roles: ['Designer', 'Webentwickler', 'Kreativ'],
      contact: 'Kontaktiere mich',
      portfolio: 'Portfolio ansehen'
    },
    about: {
      title: 'Über Mich',
      description: 'Ich bin ein Designer und Webentwickler mit einer Leidenschaft für Kreativität und Innovation. Meine Mission ist es, Ideen in einzigartige und ansprechende digitale Erlebnisse zu verwandeln.',
      bio: {
        intro: 'Mein Name ist <span class="text-[#b8ff00] font-semibold">Stefano Schifano</span>, ich wurde am 10. Januar 1999 geboren und besuchte das Sprachgymnasium G. Parini in Lissone, wo ich Englisch, Spanisch und Deutsch studierte und in allen drei Sprachen das B1-Niveau erreichte.',
        passion: 'Seit meiner Jugend habe ich eine starke Leidenschaft für Grafik entwickelt: Ich begann spontan mit Software wie <span class="text-[#b8ff00]">Photoshop</span>, <span class="text-[#b8ff00]">Illustrator</span> und <span class="text-[#b8ff00]">InDesign</span> zu experimentieren, angetrieben von Neugier und dem Wunsch, meinen Ideen Form zu geben. Mit der Zeit hat sich diese Neigung zu einer echten beruflichen Kompetenz entwickelt, die es mir ermöglichte, das, was zunächst ein persönliches Interesse war, in einen Karriereweg zu verwandeln.',
        work: 'Derzeit verwalte ich die Kommunikation und sozialen Medien von zwei Marken: <span class="text-[#b8ff00] font-semibold">Pizza Ok</span> und <span class="text-[#b8ff00] font-semibold">Edilgamal</span>, einem Unternehmen aus dem Bausektor. Neben der Verwaltung der sozialen Kanäle kümmere ich mich auch um die Entwicklung und Pflege der Websites beider Marken und integriere dabei Kreativität und digitale Strategie.',
        conclusion: 'Heute betrachte ich Grafik und visuelle Kommunikation nicht nur als Beruf, sondern auch als Mittel, um Kreativität auszudrücken und Botschaften auf klare, moderne und effektive Weise zu übermitteln.'
      }
    },
    portfolio: {
      title: 'Mein Portfolio',
      description: 'Eine Auswahl meiner bedeutendsten Arbeiten',
      allProjects: 'Alle Projekte',
      presentations: 'Präsentationen',
      interior: 'Innenarchitektur',
      food: 'Restaurant & Gastronomie',
      branding: 'Logo & Markenbildung',
      banners: 'Werbebanner',
      viewProject: 'Projekt ansehen'
    },
    services: {
      title: 'Meine Dienstleistungen',
      description: 'Kreative und professionelle Lösungen für Ihr Unternehmen',
      pitchDeck: 'Pitch Deck / Geschäftspräsentationen',
      pitchDeckDesc: 'Professionelle Präsentationen, die Aufmerksamkeit erregen und Ihr Publikum überzeugen',
      template: 'Template-Design',
      templateDesc: 'Maßgeschneiderte Vorlagen für visuelle Konsistenz in allen Ihren Materialien',
      social: 'Visual Storytelling für Social Media',
      socialDesc: 'Content-Design für soziale Medien, das Engagement und Sichtbarkeit steigert',
      catalogs: 'Interaktive Kataloge',
      catalogsDesc: 'Digitale Kataloge, die Produktpräsentation in ein Erlebnis verwandeln',
      ctaTitle: 'Bereit, Ihre',
      ctaHighlight: 'Spur',
      features: {
        storytelling: 'Fesselndes visuelles Storytelling',
        infographics: 'Wirkungsvolle maßgeschneiderte Infografiken',
        animations: 'Professionelle flüssige Animationen',
        guidelines: 'Umfassende Markenrichtlinien',
        formats: 'Kompatibilität mit allen digitalen Formaten',
        usability: 'Intuitive und benutzerfreundliche Oberflächen',
        posts: 'Aufmerksamkeitsstarke Social-Media-Inhalte',
        stories: 'Dynamische Stories mit fortschrittlichen Effekten',
        carousel: 'Interaktive Karussells für mehr Engagement',
        responsive: 'Adaptives Design für alle Geräte',
        navigation: 'Nahtlose und intuitive Navigationserfahrung',
        cta: 'Strategische Call-to-Actions mit hoher Konversionsrate'
      }
    },
    contact: {
      title: 'Kontakt',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      send: 'Senden'
    },
    footer: {
      copyright: '© 2024 Stefano Schifano. Alle Rechte vorbehalten.'
    }
  },
  fr: {
    hero: {
      roles: ['Designer', 'Développeur Web', 'Créatif'],
      contact: 'Contactez-moi',
      portfolio: 'Voir Portfolio'
    },
    about: {
      title: 'À Propos',
      description: 'Je suis un designer et développeur web passionné par la créativité et l\'innovation. Ma mission est de transformer les idées en expériences numériques uniques et engageantes.',
      bio: {
        intro: 'Je m\'appelle <span class="text-[#b8ff00] font-semibold">Stefano Schifano</span>, je suis né le 10 janvier 1999 et j\'ai fréquenté le Lycée Linguistique G. Parini de Lissone, où j\'ai étudié l\'anglais, l\'espagnol et l\'allemand, atteignant le niveau B1 dans les trois langues.',
        passion: 'Depuis l\'adolescence, j\'ai cultivé une forte passion pour les graphiques : j\'ai commencé spontanément à expérimenter avec des logiciels comme <span class="text-[#b8ff00]">Photoshop</span>, <span class="text-[#b8ff00]">Illustrator</span> et <span class="text-[#b8ff00]">InDesign</span>, poussé par la curiosité et le désir de donner forme à mes idées. Avec le temps, cette inclination s\'est transformée en une véritable compétence professionnelle, me permettant de transformer ce qui était initialement un intérêt personnel en un parcours de carrière.',
        work: 'Je gère actuellement la communication et les réseaux sociaux de deux marques : <span class="text-[#b8ff00] font-semibold">Pizza Ok</span> et <span class="text-[#b8ff00] font-semibold">Edilgamal</span>, une entreprise opérant dans le secteur de la construction. En plus de gérer les canaux sociaux, je m\'occupe également du développement et de la maintenance des sites web des deux marques, intégrant créativité et stratégie numérique.',
        conclusion: 'Aujourd\'hui, je considère les graphiques et la communication visuelle non seulement comme un travail, mais aussi comme un moyen d\'exprimer la créativité et de transmettre des messages de manière claire, moderne et efficace.'
      }
    },
    portfolio: {
      title: 'Mon Portfolio',
      description: 'Une sélection de mes travaux les plus significatifs',
      allProjects: 'Tous les Projets',
      presentations: 'Présentations',
      interior: 'Design d\'Intérieur',
      food: 'Restaurant & Gastronomie',
      branding: 'Logo & Image de Marque',
      banners: 'Bannières Publicitaires',
      viewProject: 'Voir le Projet'
    },
    services: {
      title: 'Mes Services',
      description: 'Solutions créatives et professionnelles pour votre entreprise',
      pitchDeck: 'Pitch Deck / Présentations d\'Entreprise',
      pitchDeckDesc: 'Présentations professionnelles qui captent l\'attention et convainquent votre public',
      template: 'Design de Templates',
      templateDesc: 'Modèles personnalisés pour maintenir la cohérence visuelle dans tous vos supports',
      social: 'Storytelling Visuel pour les Réseaux Sociaux',
      socialDesc: 'Design de contenu pour les réseaux sociaux qui augmente l\'engagement et la visibilité',
      catalogs: 'Catalogues Interactifs',
      catalogsDesc: 'Catalogues numériques qui transforment la présentation des produits en expérience',
      ctaTitle: 'Prêt à Laisser Votre',
      ctaHighlight: 'Empreinte',
      features: {
        storytelling: 'Storytelling visuel captivant',
        infographics: 'Infographies personnalisées à fort impact',
        animations: 'Animations fluides et professionnelles',
        guidelines: 'Directives complètes pour votre marque',
        formats: 'Compatibilité avec tous les formats numériques',
        usability: 'Interfaces intuitives et conviviales',
        posts: 'Contenu social qui attire l\'attention',
        stories: 'Stories dynamiques avec effets avancés',
        carousel: 'Carrousels interactifs qui augmentent l\'engagement',
        responsive: 'Design adaptatif pour tous les appareils',
        navigation: 'Expérience de navigation fluide et intuitive',
        cta: 'Call-to-action stratégiques qui convertissent'
      }
    },
    contact: {
      title: 'Contact',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer'
    },
    footer: {
      copyright: '© 2024 Stefano Schifano. Tous droits réservés.'
    }
  }
};

const languages = [
  { code: 'it' as Language, name: '🇮🇹 Italiano' },
  { code: 'en' as Language, name: '🇬🇧 English' },
  { code: 'es' as Language, name: '🇪🇸 Español' },
  { code: 'de' as Language, name: '🇩🇪 Deutsch' },
  { code: 'fr' as Language, name: '🇫🇷 Français' }
];

// Create a context for active category
export const CategoryContext = React.createContext<{
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
}>({ activeCategory: 'all', setActiveCategory: () => {} });

// Hook to use the category context
export const useCategory = () => {
  return React.useContext(CategoryContext);
};

const App = () => {
  const [language, setLanguage] = useState<Language>('it');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const t = (section: TranslationKey, key: string): string | string[] => {
    return translations[language][section][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <CategoryContext.Provider value={{ activeCategory, setActiveCategory }}>
        <div className="relative">
          {/* Language Selector */}
          <div className="fixed top-4 right-4 z-50">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c0ff00]/50"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code} className="bg-[#0a1a3a] text-white">
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          <Hero />
          <About />
          <Portfolio />
          <Services />
          <Contact />
          <Footer />
        </div>
      </CategoryContext.Provider>
    </LanguageContext.Provider>
  );
};

export { useLanguage };
export default App;