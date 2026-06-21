import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: {
      kitchens: 'Kitchen Collections',
      bathrooms: 'Bathroom Collections',
      countertops: 'Countertops & Surfaces',
      cabinetDoors: 'Cabinet Doors',
      sinks: 'Sinks Collections',
      faucetsKitchen: 'Kitchen Faucets',
      bathtubs: 'Bathtub Collections',
      vanities: 'Vanity Collections',
      mirrors: 'Mirror Collections',
      faucetsBath: 'Bathroom Faucets',
      process: 'Our Process',
      projects: 'Projects',
      capabilities: 'Capabilities',
      quality: 'Quality & Compliance',
      about: 'About',
      contact: 'Request Consultation',
      showerSystems: 'Tray & Surroundings',
    },
    hero: {
      tag: 'Bespoke Kitchen & Bathroom Collections',
      headline1: 'Specification-Grade',
      headline2: 'Design & Supply',
      headline3: 'at Project Scale',
      sub: 'Fully customizable kitchen and bathroom collections for hotels, residential developments, and commercial properties across North America.',
      cta: 'Request a Consultation',
      secondary: 'View Collections',
    },
    who: {
      overline: 'WHO WE ARE',
      number: '01 / Overview',
      headline1: 'Crafted for those who demand',
      headline2: 'more',
      body1: 'Kopperstone serves developers, builders, and institutional clients across residential, commercial, and hospitality real estate end to end from specification through delivery. This edition presents our Residential Kitchen & Bathroom Collection.',
      body2: 'From initial concept to final delivery, we ensure consistency, quality, and precision at any scale.',
    },
    pillars: {
      i: 'i.',
      ii: 'ii.',
      iii: 'iii.',
      title1: 'Design',
      desc1: 'Interior design from concept through specification.',
      title2: 'Supply',
      desc2: 'Vertical integrated supply chain delivering premium materials at institutional volume, with rigorous oversight and consistency.',
      title3: 'Construct',
      desc3: 'End to end project execution and installation, with on site coordination and quality control.',
    },
    kitchenTeaser: {
      overline: '—— CURATED FOR EXCELLENCE',
      headline1: 'Kitchen',
      headline2: 'Collections',
      body: 'Precision crafted kitchens for residences and commercial developments. Every collection is fully customizable. From cabinet finish to countertop material. Specified to your project\'s exact vision.',
      cta: 'Explore Collections',
    },
    bathroomTeaser: {
      overline: '—— REFINED BY DESIGN',
      headline1: 'Bathroom',
      headline2: 'Collections',
      body: 'Fully customizable bathroom solutions for hotels, residential developments, and commercial properties. Every detail — vanity finish, tile selection, fixture hardware — specified to your project\'s exact vision.',
      cta: 'Explore Collections',
    },
    process: {
      overline: '—— OUR PROCESS',
      headline1: 'From Specification',
      headline2: 'to Delivery',
      steps: [
        { num: '01', title: 'Consultation', body: 'We define project scope, scale, and design preferences.' },
        { num: '02', title: 'Design & Selection', body: 'Curated configurations or custom specs — every detail drafted and approved before production.' },
        { num: '03', title: 'Proposal & Approval', body: 'Full proposal with selections, quantities, and timelines, ready for your sign off.' },
        { num: '04', title: 'Quality & Control', body: 'Every unit produced to spec, backed by third-party inspection and certification at every critical stage.' },
        { num: '05', title: 'Delivery & Support', body: 'Coordinated delivery to your site, with installation guidance and dedicated after-sales support.' },
      ],
    },
    cta: {
      headline: 'Ready to specify your next project?',
      sub: 'Our team responds within one business day.',
      primary: 'Request a Project Consultation',
      secondary: 'Download Capabilities Deck',
    },
    trusted: {
      overline: 'Trusted by leading developers & hospitality groups across North America',
    },
  },
  es: {
    nav: {
      kitchens: 'Colecciones de Cocinas',
      bathrooms: 'Colecciones de Baños',
      countertops: 'Encimeras y Superficies',
      cabinetDoors: 'Puertas de Gabinete',
      sinks: 'Colecciones de Fregaderos',
      faucetsKitchen: 'Grifería de Cocina',
      bathtubs: 'Colecciones de Bañeras',
      vanities: 'Colecciones de Vanidades',
      mirrors: 'Colecciones de Espejos',
      faucetsBath: 'Grifería de Baño',
      process: 'Nuestro Proceso',
      projects: 'Proyectos',
      capabilities: 'Capacidades',
      quality: 'Calidad y Cumplimiento',
      about: 'Nosotros',
      contact: 'Solicitar Consulta',
      showerSystems: 'Bandejas y Entornos',
    },
    hero: {
      tag: 'Colecciones de Cocina y Baño a Medida',
      headline1: 'Diseño y Suministro',
      headline2: 'de Especificación',
      headline3: 'a Escala de Proyecto',
      sub: 'Colecciones de cocina y baño totalmente personalizables para hoteles, desarrollos residenciales y propiedades comerciales en América del Norte.',
      cta: 'Solicitar una Consulta',
      secondary: 'Ver Colecciones',
    },
    who: {
      overline: 'QUIÉNES SOMOS',
      number: '01 / Resumen',
      headline1: 'Diseñado para quienes exigen',
      headline2: 'más',
      body1: 'Kopperstone es una firma de diseño de cocinas y baños especializada en soluciones totalmente personalizables para proyectos institucionales y comerciales.',
      body2: 'Desde el concepto inicial hasta la entrega final, garantizamos consistencia, calidad y precisión a cualquier escala.',
    },
    pillars: {
      i: 'i.',
      ii: 'ii.',
      iii: 'iii.',
      title1: 'Totalmente Personalizable',
      desc1: 'Cada especificación adaptada a su proyecto: materiales, acabados, dimensiones y tiempos de entrega.',
      title2: 'Alcance Global',
      desc2: 'Abastecimiento de fabricantes premium en múltiples regiones, entregado en toda América del Norte.',
      title3: 'Materiales Premium',
      desc3: 'Calidad institucional con la precisión estética del diseño residencial de lujo.',
    },
    kitchenTeaser: {
      overline: '—— CURADO PARA LA EXCELENCIA',
      headline1: 'Colecciones de',
      headline2: 'Cocina',
      body: 'Cocinas de precisión para residencias y desarrollos comerciales. Totalmente personalizables según su visión.',
      cta: 'Explorar Colecciones',
    },
    bathroomTeaser: {
      overline: '—— REFINADO POR EL DISEÑO',
      headline1: 'Colecciones de',
      headline2: 'Baño',
      body: 'Soluciones de baño totalmente personalizables para hoteles y propiedades comerciales. Especificadas según su visión exacta.',
      cta: 'Explorar Colecciones',
    },
    process: {
      overline: '—— NUESTRO PROCESO',
      headline1: 'De la Especificación',
      headline2: 'a la Entrega',
      steps: [
        { num: 'i', title: 'Especificación', body: 'Comparta sus medidas, planos y visión de diseño. Nuestro equipo analiza unidades, restricciones de distribución y plazos.' },
        { num: 'ii', title: 'Diseño', body: 'Nuestro equipo produce planos arquitectónicos, elevaciones y renders 3D. Cada componente especificado.' },
        { num: 'iii', title: 'Aprobación', body: 'Usted revisa el paquete completo. Revisiones ilimitadas. La producción comienza solo con su aprobación.' },
        { num: 'iv', title: 'Producción', body: 'Fabricación con control de calidad ISO 9001 y documentado fotográficamente en cada etapa.' },
        { num: 'v', title: 'Entrega', body: 'Entrega coordinada en obra. Aduanas y flete gestionados de principio a fin. Instalación disponible.' },
      ],
    },
    cta: {
      headline: '¿Listo para especificar su próximo proyecto?',
      sub: 'Nuestro equipo responde en un día hábil.',
      primary: 'Solicitar Consulta',
      secondary: 'Descargar Dossier',
    },
    trusted: {
      overline: 'Con la confianza de promotores líderes en América del Norte',
    },
  },
  fr: {
    nav: {
      kitchens: 'Collections Cuisine',
      bathrooms: 'Collections Salle de Bain',
      countertops: 'Comptoirs & Surfaces',
      cabinetDoors: 'Portes d\'Armoire',
      sinks: 'Collections d\'Éviers',
      faucetsKitchen: 'Robinets de Cuisine',
      bathtubs: 'Collections de Baignoires',
      vanities: 'Collections de Meubles',
      mirrors: 'Collections de Miroirs',
      faucetsBath: 'Robinets de Salle de Bain',
      process: 'Notre Processus',
      projects: 'Projets',
      capabilities: 'Capacités',
      quality: 'Qualité & Conformité',
      about: 'À Propos',
      contact: 'Demander une Consultation',
      showerSystems: 'Plateaux & Entourage',
    },
    hero: {
      tag: 'Collections Cuisine & Salle de Bain Sur Mesure',
      headline1: 'Design & Fourniture',
      headline2: 'de Spécification',
      headline3: 'à l\'Échelle du Projet',
      sub: 'Collections de cuisines et salles de bain entièrement personnalisables pour hôtels, développements résidentiels et propriétés commerciales en Amérique du Nord.',
      cta: 'Demander une Consultation',
      secondary: 'Voir les Collections',
    },
    who: {
      overline: 'QUI NOUS SOMMES',
      number: '01 / Aperçu',
      headline1: 'Conçu pour ceux qui exigent',
      headline2: 'plus',
      body1: 'Kopperstone est un cabinet de design de cuisines et salles de bain spécialisé dans les solutions entièrement personnalisables pour les projets institutionnels et commerciaux.',
      body2: 'Du concept initial à la livraison finale, nous garantissons cohérence, qualité et précision à toute échelle.',
    },
    pillars: {
      i: 'i.',
      ii: 'ii.',
      iii: 'iii.',
      title1: 'Entièrement Personnalisable',
      desc1: 'Chaque spécification adaptée à votre projet: matériaux, finitions, dimensions et délais.',
      title2: 'Prêt pour le Monde',
      desc2: 'Approvisionnement auprès de fabricants premium dans plusieurs régions, livré en Amérique du Nord.',
      title3: 'Matériaux Premium',
      desc3: 'Qualité institutionnelle avec la précision esthétique du design résidentiel de luxe.',
    },
    kitchenTeaser: {
      overline: '—— SÉLECTIONNÉ POUR L\'EXCELLENCE',
      headline1: 'Collections',
      headline2: 'Cuisine',
      body: 'Cuisines de précision pour résidences et développements commerciaux. Entièrement personnalisables selon votre vision.',
      cta: 'Explorer les Collections',
    },
    bathroomTeaser: {
      overline: '—— RAFFINÉ PAR LE DESIGN',
      headline1: 'Collections',
      headline2: 'Salle de Bain',
      body: 'Solutions de salle de bain entièrement personnalisables. Chaque détail spécifié selon votre vision exacte.',
      cta: 'Explorer les Collections',
    },
    process: {
      overline: '—— NOTRE PROCESSUS',
      headline1: 'De la Spécification',
      headline2: 'à la Livraison',
      steps: [
        { num: 'i', title: 'Spécification', body: 'Partagez vos mesures, votre brief et votre vision. Notre équipe analyse les unités, les contraintes de disposition et les délais.' },
        { num: 'ii', title: 'Design', body: 'Notre équipe produit des plans architecturaux, des élévations et des rendus 3D. Chaque composant est spécifié.' },
        { num: 'iii', title: 'Approbation', body: 'Vous examinez le dossier complet. Révisions illimitées. La production commence uniquement avec votre accord.' },
        { num: 'iv', title: 'Production', body: 'Fabrication avec contrôle qualité ISO 9001 documenté photographiquement à chaque étape.' },
        { num: 'v', title: 'Livraison', body: 'Livraison coordonnée sur le chantier. Douanes et fret gérés de bout en bout. Installation disponible.' },
      ],
    },
    cta: {
      headline: 'Prêt à spécifier votre prochain projet?',
      sub: 'Notre équipe répond dans un jour ouvrable.',
      primary: 'Demander une Consultation',
      secondary: 'Télécharger le Dossier',
    },
    trusted: {
      overline: 'Approuvé par des promoteurs leaders en Amérique du Nord',
    },
  },
};

const LangCtx = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = (key) => {
    const keys = key.split('.');
    let val = translations[lang];
    for (const k of keys) { val = val?.[k]; }
    return val ?? key;
  };
  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useLanguage() {
  return useContext(LangCtx);
}