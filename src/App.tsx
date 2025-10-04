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
        intro: 'Ciao, mi chiamo <span class="text-[#b8ff00] font-semibold">Stefano Schifano</span>, sono nato il 10 gennaio 1999 e ho frequentato il Liceo Linguistico G. Parini di Lissone, dove ho studiato inglese, spagnolo e tedesco, raggiungendo il livello B1 in tutte e tre le lingue.',
        passion: 'Fin dall’adolescenza ho sviluppato una forte passione per la grafica: ho iniziato a sperimentare con programmi come <span class="text-[#b8ff00]">Photoshop</span>, <span class="text-[#b8ff00]">Illustrator</span> e <span class="text-[#b8ff00]">InDesign</span>, spinto dalla curiosità e dal desiderio di trasformare le idee in immagini. Con il tempo questa passione si è consolidata, trasformandosi in una vera e propria professione.',
        work: 'Attualmente mi occupo della gestione social e della comunicazione digitale di due realtà: <span class="text-[#b8ff00] font-semibold">Pizza Ok</span>, brand nel settore della ristorazione, e <span class="text-[#b8ff00] font-semibold">Edilgamal</span>, azienda operante nel campo edilizio. Per entrambi seguo non solo i contenuti e le strategie sui social media, ma anche lo sviluppo e la cura dei siti web, garantendo coerenza visiva e identitaria.',
        conclusion: ''
      },
      buttons: {
        back: 'Indietro',
        continue: 'Prosegui'
      },
      projects: {
        edilgamal: {
          title: 'EDIL GAMAL COSTRUZIONI',
          description: `Il sito <span class="text-[#b8ff00] font-medium">Edil Gamal Costruzioni</span> nasce per comunicare <span class="text-[#b8ff00] font-medium">solidità</span>, <span class="text-[#b8ff00] font-medium">energia</span> e <span class="text-[#b8ff00] font-medium">visione</span>, incarnate dal claim <span class="text-[#b8ff00] font-medium">"Costruiamo valore. Progettiamo il futuro"</span>. La palette cromatica, dominata dal <span class="text-[#b8ff00] font-medium">nero</span> e dal <span class="text-[#b8ff00] font-medium">rosso</span>, crea un impatto visivo forte e immediato: il nero trasmette <span class="text-[#b8ff00] font-medium">rigore</span> e <span class="text-[#b8ff00] font-medium">autorevolezza</span>, mentre il rosso aggiunge <span class="text-[#b8ff00] font-medium">passione</span> e <span class="text-[#b8ff00] font-medium">dinamismo</span>, riflettendo l'anima concreta e al tempo stesso ambiziosa dell'azienda. Il design è <span class="text-[#b8ff00] font-medium">compatto</span> e a <span class="text-[#b8ff00] font-medium">pieno schermo</span>, privo di spazi vuoti, pensato per dare un senso di completezza e intensità, mentre la tipografia, lineare e decisa, rafforza il tono <span class="text-[#b8ff00] font-medium">istituzionale</span> e <span class="text-[#b8ff00] font-medium">professionale</span>. Più che un semplice elenco di servizi, il sito si configura come un vero <span class="text-[#b8ff00] font-medium">manifesto visivo</span> dell'identità aziendale: non solo impresa edile, ma <span class="text-[#b8ff00] font-medium">partner affidabile</span> capace di costruire <span class="text-[#b8ff00] font-medium">valore duraturo</span> e guardare avanti, distinguendosi nel settore con una presenza digitale <span class="text-[#b8ff00] font-medium">potente</span>, <span class="text-[#b8ff00] font-medium">evocativa</span> e <span class="text-[#b8ff00] font-medium">memorabile</span>.`,
          strategy: 'Per la comunicazione sui social, l’idea alla base della strategia è quella di mostrare il <span class="text-[#b8ff00] font-medium">prima e dopo</span> dei lavori realizzati.<br />Attraverso questo approccio visivo, la ditta vuole mettere in evidenza in modo chiaro e immediato la <span class="text-[#b8ff00] font-medium">qualità</span> delle proprie realizzazioni, la <span class="text-[#b8ff00] font-medium">cura dei dettagli</span> e la <span class="text-[#b8ff00] font-medium">trasformazione</span> che ogni progetto subisce grazie al proprio intervento.<br />Il <span class="text-[#b8ff00] font-medium">prima e dopo</span> non rappresenta soltanto un confronto estetico, ma racconta una storia: quella del <span class="text-[#b8ff00] font-medium">cambiamento</span>, della <span class="text-[#b8ff00] font-medium">competenza</span> e della <span class="text-[#b8ff00] font-medium">passione</span> che l’azienda mette in ogni lavoro. È un modo autentico per far comprendere al pubblico il <span class="text-[#b8ff00] font-medium">valore aggiunto</span> che la ditta porta in ogni cantiere, dalla ristrutturazione più piccola al progetto più complesso.<br />Allo stesso tempo, ogni contenuto sarà pensato per valorizzare il <span class="text-[#b8ff00] font-medium">brand</span>: il <span class="text-[#b8ff00] font-medium">logo</span>, i <span class="text-[#b8ff00] font-medium">colori</span>, lo <span class="text-[#b8ff00] font-medium">stile comunicativo</span> e l’<span class="text-[#b8ff00] font-medium">immagine aziendale</span> saranno sempre presenti, così da costruire una forte <span class="text-[#b8ff00] font-medium">identità visiva</span> e <span class="text-[#b8ff00] font-medium">riconoscibile</span>.<br />L’obiettivo è che ogni post, ogni video o storia sui social trasmetta <span class="text-[#b8ff00] font-medium">professionalità</span>, <span class="text-[#b8ff00] font-medium">fiducia</span> e <span class="text-[#b8ff00] font-medium">solidità</span>.'
        },
        pizzaok: {
          title: 'PIZZA OK',
          description: 'Il sito <span class="text-[#b8ff00] font-medium">PIZZA OK</span> si distingue per uno stile moderno e curato, pensato per trasmettere professionalità e passione attraverso un design essenziale ma d’impatto. La palette cromatica utilizza il Pantone 363F48, un grigio scuro elegante e profondo, in armonia con il rosso 984A44, tonalità calda e intensa che richiama la tradizione e l’energia del mondo della pizza. L’inserimento di un cartonato come elemento visivo aggiunge profondità e tridimensionalità alla struttura grafica, creando un effetto realistico e dinamico che valorizza i contenuti e guida l’occhio dell’utente. Nel suo insieme, il design di <span class="text-[#b8ff00] font-medium">PIZZA OK</span> unisce raffinatezza, autenticità e calore visivo, offrendo un’esperienza digitale coerente con l’identità del brand e capace di comunicare al meglio la qualità e la passione che contraddistinguono il marchio. <span class="text-white/80">( sito in fase di sviluppo )</span>'
        }
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
      },
      buttons: {
        back: 'Back',
        continue: 'Continue'
      },
      projects: {
        edilgamal: {
          title: 'EDIL GAMAL COSTRUZIONI',
          description: `The <span class="text-[#b8ff00] font-medium">Edil Gamal Costruzioni</span> website is built to communicate <span class="text-[#b8ff00] font-medium">solidity</span>, <span class="text-[#b8ff00] font-medium">energy</span> and <span class="text-[#b8ff00] font-medium">vision</span>, expressed by the claim <span class="text-[#b8ff00] font-medium">"We build value. We design the future"</span>. A palette dominated by <span class="text-[#b8ff00] font-medium">black</span> and <span class="text-[#b8ff00] font-medium">red</span> creates a strong visual impact: black conveys <span class="text-[#b8ff00] font-medium">rigor</span> and <span class="text-[#b8ff00] font-medium">authority</span>, while red adds <span class="text-[#b8ff00] font-medium">passion</span> and <span class="text-[#b8ff00] font-medium">dynamism</span>, reflecting the company's concrete yet ambitious identity. The design is <span class="text-[#b8ff00] font-medium">compact</span> and <span class="text-[#b8ff00] font-medium">full-screen</span>, with clean, decisive typography that reinforces an <span class="text-[#b8ff00] font-medium">institutional</span> and <span class="text-[#b8ff00] font-medium">professional</span> tone. More than a simple list of services, the site is a true <span class="text-[#b8ff00] font-medium">visual manifesto</span> of corporate identity: not just a construction company, but a <span class="text-[#b8ff00] font-medium">reliable partner</span> capable of building <span class="text-[#b8ff00] font-medium">lasting value</span> and looking ahead with a <span class="text-[#b8ff00] font-medium">powerful</span>, <span class="text-[#b8ff00] font-medium">evocative</span> and <span class="text-[#b8ff00] font-medium">memorable</span> digital presence.`,
          strategy: 'For social media communication, the core strategy is to show the <span class="text-[#b8ff00] font-medium">before and after</span> of completed works.<br />This visual approach clearly highlights the <span class="text-[#b8ff00] font-medium">quality</span> of the results, the <span class="text-[#b8ff00] font-medium">attention to detail</span> and the <span class="text-[#b8ff00] font-medium">transformation</span> achieved in each project.<br />At the same time, each content will be designed to enhance the <span class="text-[#b8ff00] font-medium">brand</span>: the <span class="text-[#b8ff00] font-medium">logo</span>, the <span class="text-[#b8ff00] font-medium">colors</span>, the <span class="text-[#b8ff00] font-medium">communication style</span> and the <span class="text-[#b8ff00] font-medium">corporate image</span> will always be present, building a strong and <span class="text-[#b8ff00] font-medium">recognizable</span> <span class="text-[#b8ff00] font-medium">visual identity</span>.<br />The goal is that each post, video or story communicates <span class="text-[#b8ff00] font-medium">professionalism</span>, <span class="text-[#b8ff00] font-medium">trust</span> and <span class="text-[#b8ff00] font-medium">solidity</span>.'
        },
        pizzaok: {
          title: 'PIZZA OK',
          description: 'The <span class="text-[#b8ff00] font-medium">PIZZA OK</span> website features a modern, polished design that conveys professionalism and passion with an essential yet impactful visual language. The palette uses Pantone 363F48, a deep dark gray, harmonized with red 984A44, a warm and intense tone that recalls tradition and the energy of the pizza world. A cardboard-like visual element adds depth and three-dimensionality, creating a dynamic and realistic structure that enhances content and guides the user\'s eye. Overall, the design of <span class="text-[#b8ff00] font-medium">PIZZA OK</span> blends refinement, authenticity and visual warmth, delivering a digital experience consistent with the brand identity and capable of communicating quality and passion. <span class="text-white/80">( website under development )</span>'
        }
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
      },
      buttons: {
        back: 'Atrás',
        continue: 'Continuar'
      },
      projects: {
        edilgamal: {
          title: 'EDIL GAMAL COSTRUZIONI',
          description: `El sitio de <span class="text-[#b8ff00] font-medium">Edil Gamal Costruzioni</span> comunica <span class="text-[#b8ff00] font-medium">solidez</span>, <span class="text-[#b8ff00] font-medium">energía</span> y <span class="text-[#b8ff00] font-medium">visión</span>, reforzadas por una paleta de <span class="text-[#b8ff00] font-medium">negro</span> y <span class="text-[#b8ff00] font-medium">rojo</span>. El diseño es <span class="text-[#b8ff00] font-medium">compacto</span> y a <span class="text-[#b8ff00] font-medium">pantalla completa</span>, con tipografía clara y decidida que refuerza un tono <span class="text-[#b8ff00] font-medium">institucional</span> y <span class="text-[#b8ff00] font-medium">profesional</span>.`,
          strategy: 'Para la comunicación en redes sociales, la idea clave es mostrar el <span class="text-[#b8ff00] font-medium">antes y después</span> de los trabajos realizados.<br />Este enfoque visual destaca claramente la <span class="text-[#b8ff00] font-medium">calidad</span>, el <span class="text-[#b8ff00] font-medium">cuidado del detalle</span> y la <span class="text-[#b8ff00] font-medium">transformación</span> lograda en cada proyecto.<br />Al mismo tiempo, cada contenido se diseñará para reforzar la <span class="text-[#b8ff00] font-medium">marca</span>: el <span class="text-[#b8ff00] font-medium">logo</span>, los <span class="text-[#b8ff00] font-medium">colores</span>, el <span class="text-[#b8ff00] font-medium">estilo comunicativo</span> y la <span class="text-[#b8ff00] font-medium">imagen corporativa</span> estarán siempre presentes, construyendo una identidad <span class="text-[#b8ff00] font-medium">visual</span> fuerte y <span class="text-[#b8ff00] font-medium">reconocible</span>.<br />El objetivo es que cada publicación, video o historia transmita <span class="text-[#b8ff00] font-medium">profesionalismo</span>, <span class="text-[#b8ff00] font-medium">confianza</span> y <span class="text-[#b8ff00] font-medium">solidez</span>. '
        },
        pizzaok: {
          title: 'PIZZA OK',
          description: 'El sitio de <span class="text-[#b8ff00] font-medium">PIZZA OK</span> presenta un estilo moderno y cuidado para transmitir profesionalidad y pasión a través de un diseño esencial pero impactante. La paleta utiliza el Pantone 363F48, un gris oscuro y profundo, en armonía con el rojo 984A44, tono cálido e intenso que evoca la tradición y la energía del mundo de la pizza. La inclusión de un elemento tipo cartón agrega profundidad y tridimensionalidad, creando una estructura gráfica realista y dinámica que valoriza los contenidos y guía la mirada del usuario. En conjunto, el diseño de <span class="text-[#b8ff00] font-medium">PIZZA OK</span> combina refinamiento, autenticidad y calidez visual, ofreciendo una experiencia digital coherente con la identidad de la marca y capaz de comunicar la calidad y la pasión que distinguen al sello.'
        }
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
      },
      buttons: {
        back: 'Zurück',
        continue: 'Weiter'
      },
      projects: {
        edilgamal: {
          title: 'EDIL GAMAL COSTRUZIONI',
          description: `Die Website von <span class="text-[#b8ff00] font-medium">Edil Gamal Costruzioni</span> vermittelt <span class="text-[#b8ff00] font-medium">Solidität</span>, <span class="text-[#b8ff00] font-medium">Energie</span> und <span class="text-[#b8ff00] font-medium">Vision</span>. Die von <span class="text-[#b8ff00] font-medium">Schwarz</span> und <span class="text-[#b8ff00] font-medium">Rot</span> dominierte Palette erzeugt eine starke Wirkung. Das Design ist <span class="text-[#b8ff00] font-medium">kompakt</span> und <span class="text-[#b8ff00] font-medium">fullscreen</span> mit klarer Typografie für einen <span class="text-[#b8ff00] font-medium">institutionellen</span> und <span class="text-[#b8ff00] font-medium">professionellen</span> Ton.`,
          strategy: 'Für die Kommunikation in sozialen Medien basiert die Strategie darauf, das <span class="text-[#b8ff00] font-medium">Vorher-Nachher</span> der Projekte zu zeigen.<br />Dieser visuelle Ansatz hebt die <span class="text-[#b8ff00] font-medium">Qualität</span>, die <span class="text-[#b8ff00] font-medium">Detailtreue</span> und die <span class="text-[#b8ff00] font-medium">Transformation</span> in jedem Projekt hervor.<br />Gleichzeitig wird jeder Inhalt dazu beitragen, die <span class="text-[#b8ff00] font-medium">Marke</span> zu stärken: <span class="text-[#b8ff00] font-medium">Logo</span>, <span class="text-[#b8ff00] font-medium">Farben</span>, <span class="text-[#b8ff00] font-medium">Kommunikationsstil</span> und <span class="text-[#b8ff00] font-medium">Unternehmensbild</span> werden stets präsent sein, um eine starke und <span class="text-[#b8ff00] font-medium">erkennbare</span> <span class="text-[#b8ff00] font-medium">visuelle Identität</span> aufzubauen.<br />Ziel ist es, dass jeder Beitrag, jedes Video oder jede Story <span class="text-[#b8ff00] font-medium">Professionalität</span>, <span class="text-[#b8ff00] font-medium">Vertrauen</span> und <span class="text-[#b8ff00] font-medium">Solidität</span> vermittelt.'
        },
        pizzaok: {
          title: 'PIZZA OK',
          description: 'Die Website von <span class="text-[#b8ff00] font-medium">PIZZA OK</span> zeichnet sich durch ein modernes und sorgfältiges Design aus, das Professionalität und Leidenschaft vermittelt. Die Palette verwendet Pantone 363F48, ein tiefes Dunkelgrau, zusammen mit Rot 984A44, einem warmen und intensiven Ton, der Tradition und Energie widerspiegelt. Ein kartonartiges visuelles Element fügt Tiefe und Dreidimensionalität hinzu und schafft eine dynamische, realistische Struktur, die Inhalte hervorhebt und den Blick des Nutzers lenkt. Insgesamt vereint das Design von <span class="text-[#b8ff00] font-medium">PIZZA OK</span> Raffinesse, Authentizität und visuelle Wärme und bietet eine digitale Erfahrung, die mit der Markenidentität übereinstimmt.'
        }
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
      },
      buttons: {
        back: 'Retour',
        continue: 'Continuer'
      },
      projects: {
        edilgamal: {
          title: 'EDIL GAMAL COSTRUZIONI',
          description: `Le site de <span class="text-[#b8ff00] font-medium">Edil Gamal Costruzioni</span> communique <span class="text-[#b8ff00] font-medium">solidité</span>, <span class="text-[#b8ff00] font-medium">énergie</span> et <span class="text-[#b8ff00] font-medium">vision</span>, renforcées par une palette dominée par le <span class="text-[#b8ff00] font-medium">noir</span> et le <span class="text-[#b8ff00] font-medium">rouge</span>. Le design est <span class="text-[#b8ff00] font-medium">compact</span> et en <span class="text-[#b8ff00] font-medium">plein écran</span>, avec une typographie nette et décidée qui renforce un ton <span class="text-[#b8ff00] font-medium">institutionnel</span> et <span class="text-[#b8ff00] font-medium">professionnel</span>.`,
          strategy: `Pour la communication sur les réseaux sociaux, l\'idée clé est de montrer le <span class="text-[#b8ff00] font-medium">avant/après</span> des travaux réalisés.<br />Cette approche visuelle met en évidence la <span class="text-[#b8ff00] font-medium">qualité</span>, l\'<span class="text-[#b8ff00] font-medium">attention au détail</span> et la <span class="text-[#b8ff00] font-medium">transformation</span> obtenue dans chaque projet.<br />En parallèle, chaque contenu sera conçu pour renforcer la <span class="text-[#b8ff00] font-medium">marque</span> : le <span class="text-[#b8ff00] font-medium">logo</span>, les <span class="text-[#b8ff00] font-medium">couleurs</span>, le <span class="text-[#b8ff00] font-medium">style de communication</span> et l\' <span class="text-[#b8ff00] font-medium">image institutionnelle</span> seront toujours présents, en construisant une <span class="text-[#b8ff00] font-medium">identité visuelle</span> forte et <span class="text-[#b8ff00] font-medium">reconnaissable</span>.<br />L\'objectif est que chaque publication, vidéo ou story communique <span class="text-[#b8ff00] font-medium">professionnalisme</span>, <span class="text-[#b8ff00] font-medium">confiance</span> et <span class="text-[#b8ff00] font-medium">solidité</span>.`
        },
        pizzaok: {
          title: 'PIZZA OK',
          description: `Le site de <span class="text-[#b8ff00] font-medium">PIZZA OK</span> présente un style moderne et soigné pour transmettre professionnalisme et passion avec un design essentiel mais percutant. La palette utilise le Pantone 363F48, un gris anthracite profond, en harmonie avec le rouge 984A44, une teinte chaude et intense qui évoque la tradition et l\'énergie. L\'inclusion d\'un élément visuel de type carton ajoute de la profondeur et de la tridimensionnalité, créant une structure dynamique et réaliste qui met en valeur les contenus et guide le regard de l\'utilisateur. Dans l\'ensemble, le design de <span class="text-[#b8ff00] font-medium">PIZZA OK</span> allie raffinement, authenticité et chaleur visuelle, offrant une expérience numérique cohérente avec l\'identité de la marque.`
        }
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
    const sectionObj = translations[language][section] as any;
    const parts = key.split('.');
    let value: any = sectionObj;

    for (const part of parts) {
      if (value && typeof value === 'object' && part in value) {
        value = value[part];
      } else {
        value = undefined;
        break;
      }
    }

    return value !== undefined ? value : key;
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