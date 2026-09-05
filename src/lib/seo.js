// Per-route <title>/meta description/canonical/og:url content for search engines and link
// previews. Every string below is reused verbatim (or near-verbatim) from that page's own
// on-page heading/copy, not new marketing language — check with Ricardo before changing the
// wording itself, since this is what shows up in Google results and social share cards.
//
// Keyed by pathname without a trailing slash (root is '/'). Falls back to DEFAULT_SEO for
// any route not listed here.

export const DEFAULT_SEO = {
  title: 'Kopperstone — Custom Kitchens & Bathrooms | Toronto',
  description: 'Kopperstone designs, sources and installs custom kitchens and bathrooms for single-family homes across North America — five design collections, one point of contact, and a fixed quote before we start. We also supply developers and trade partners at scale.',
};

export const SEO_CONFIG = {
  '/': DEFAULT_SEO,

  '/kitchens': {
    title: 'Kitchen Collections | Kopperstone',
    description: 'Precision-crafted kitchens for the modern home. Every collection is fully customizable, from cabinet finish to countertop material, and built around the way each space is meant to be lived in.',
  },
  '/countertops': {
    title: 'Countertops & Solid Surface Solutions | Kopperstone',
    description: 'Available in quartz and solid surface, both offered in custom dimensions, edge profiles, and finishes. Durable, design-forward, and built to your exact vision.',
  },
  '/cabinet-doors': {
    title: 'Cabinet Textures & Finishes | Kopperstone',
    description: "Every cabinet is available in a curated range of textures and finishes, from matte lacquer to wood grain laminates. Fully customizable to match your home's design and style.",
  },
  '/kitchen-sinks': {
    title: 'Kitchen Sink Collections | Kopperstone',
    description: "Every sink is available in a curated range of styles and finishes — from undermount workstation sinks to farmhouse apron fronts. Fully customizable to match your home's design and style.",
  },
  '/kitchen-faucets': {
    title: 'Kitchen Faucet Collections | Kopperstone',
    description: 'A refined selection of kitchen faucets, available in multiple styles and finishes — engineered to last, without compromising design.',
  },
  '/bathroom-sinks': {
    title: 'Bathroom Sink Collections | Kopperstone',
    description: "Complete basins or individual pieces, chosen to match your bathroom's exact form, material, and finish.",
  },
  '/vanities': {
    title: 'Vanity Collections | Kopperstone',
    description: "Complete vanities or individual pieces, chosen to match your bathroom's exact finish, material, and layout.",
  },
  '/bathtubs': {
    title: 'Bathtub Collections | Kopperstone',
    description: 'Freestanding and built-in bathtubs crafted as the centerpiece of the bathroom. Every model is available in custom finishes, chosen to suit the space.',
  },
  '/bathroom-faucets': {
    title: 'Bathroom Faucets | Kopperstone',
    description: 'A curated selection of bathroom faucets for vanities, bathtubs, and wet rooms.',
  },
  '/process': {
    title: 'Our Process | Kopperstone',
    description: 'Five stages. One point of contact. Full transparency at every step — we manage everything from the first design to the finished install.',
  },
  '/about': {
    title: 'About Kopperstone',
    description: 'Santiago Rojas, Ricardo Prieto, and Cesar Padilla shared the same way of looking at the world. That common vision became the foundation for Kopperstone, a company built on trust, craftsmanship, and getting things done right.',
  },
  '/contact': {
    title: 'Request a Consultation | Kopperstone',
    description: "Request a project consultation with Kopperstone — our team responds within one business day.",
  },
  '/configurator': {
    title: 'Design Configurator | Kopperstone',
    description: 'Choose your layout, finishes, and fixtures — then save your design or book a free consultation with our team.',
  },

  '/trade': {
    title: 'Trade & Developer Programme | Kopperstone',
    description: 'Kopperstone sources and supplies kitchen and bathroom packages for residential developers, hotel operators, and commercial contractors across Canada and the U.S.',
  },
  '/trade/process': {
    title: 'From Specification to Site Delivery | Kopperstone',
    description: 'Five stages. One point of contact. Full transparency at every step. Kopperstone manages the complete supply chain from initial specification through job-site delivery.',
  },
  '/trade/capabilities': {
    title: 'A Vertically Integrated Supply Chain | Kopperstone',
    description: 'From factory qualification to job-site delivery, Kopperstone controls every stage of the supply chain for kitchen and bathroom materials at project scale.',
  },
  '/trade/quality': {
    title: 'Quality & Compliance | Kopperstone',
    description: 'Every Kopperstone material is tested, inspected, and documented from the factory floor to the job site. Full compliance for U.S. and Canadian commercial and multi-family applications.',
  },
  '/trade/projects': {
    title: 'Projects & Case Studies | Kopperstone',
    description: 'Kopperstone supplies specification-grade kitchen and bathroom packages for hotel, multi-family residential, and commercial developments — built to handle project scale from day one.',
  },
};
