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
      description: 'Sono un designer e sviluppatore web appassionato di creatività e innovazione. La mia missione è trasformare idee in esperienze digitali uniche e coinvolgenti.'
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
      description: 'I am a designer and web developer passionate about creativity and innovation. My mission is to transform ideas into unique and engaging digital experiences.'
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
      title: 'Sobre Mí',
      description: 'Soy un diseñador y desarrollador web apasionado por la creatividad y la innovación. Mi misión es transformar ideas en experiencias digitales únicas y cautivadoras.'
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
      title: 'Über mich',
      description: 'Ich bin ein Designer und Webentwickler mit Leidenschaft für Kreativität und Innovation. Meine Mission ist es, Ideen in einzigartige und fesselnde digitale Erlebnisse zu verwandeln.'
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
      description: 'Je suis un designer et développeur web passionné par la créativité et l\'innovation. Ma mission est de transformer les idées en expériences numériques uniques et engageantes.'
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