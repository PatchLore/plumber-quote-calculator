export type Industry = {
  slug: string;
  title: string;
  icon: string;
  description: string;
  videoUrl: string;
  keywords: string[];
  features: string[];
  related?: string[];
};

export const industries: Industry[] = [
  {
    slug: 'plumbers',
    title: 'Plumbers',
    icon: '🔧',
    description: 'Professional websites and instant quote systems for plumbers. Convert more visitors into customers with transparent pricing and fast responses.',
    videoUrl: '/videos/fixblox-demo.mp4',
    keywords: ['plumber websites', 'plumbing quotes', 'trade websites', 'lead generation'],
    features: ['Instant quote calculator', 'AI customer assistant', 'Mobile-friendly design'],
    related: ['electricians', 'hvac']
  },
  {
    slug: 'electricians',
    title: 'Electricians',
    icon: '⚡',
    description: 'High-converting websites for electricians with instant quoting and WhatsApp integration to speed up communication.',
    videoUrl: '/videos/fixblox-demo.mp4',
    keywords: ['electrician websites', 'electrical quotes', 'trade CRM'],
    features: ['Instant quote calculator', 'Job management ready', 'WhatsApp integration'],
    related: ['plumbers', 'hvac']
  },
  {
    slug: 'builders',
    title: 'Builders',
    icon: '🏗️',
    description: 'Modern websites for builders designed to capture project enquiries and manage qualified leads.',
    videoUrl: '/videos/fixblox-demo.mp4',
    keywords: ['builder websites', 'construction leads', 'quote systems'],
    features: ['Lead capture', 'Admin dashboard', 'AI assistant add-on'],
    related: ['contractors', 'renovators']
  },
  {
    slug: 'contractors',
    title: 'Contractors',
    icon: '🛠️',
    description: 'All-in-one contractor websites with quoting tools, lead capture, and client communication.',
    videoUrl: '/videos/fixblox-demo.mp4',
    keywords: ['contractor website', 'trade quotes', 'client portal'],
    features: ['Instant quotes', 'Status updates', 'Notifications'],
    related: ['builders', 'renovators']
  },
  {
    slug: 'renovators',
    title: 'Renovators',
    icon: '🏠',
    description: 'Websites for renovation specialists with project-focused CTAs and easy enquiry flows.',
    videoUrl: '/videos/fixblox-demo.mp4',
    keywords: ['renovation website', 'home improvement leads'],
    features: ['Project gallery ready', 'Lead capture', 'Mobile-first'],
    related: ['builders', 'decorators']
  },
  {
    slug: 'hvac',
    title: 'HVAC',
    icon: '🌡️',
    description: 'HVAC business websites built to convert with instant estimates and booking prompts.',
    videoUrl: '/videos/fixblox-demo.mp4',
    keywords: ['hvac website', 'heating and cooling quotes'],
    features: ['Instant estimates', 'AI chat', 'WhatsApp integration'],
    related: ['plumbers', 'electricians']
  },
  {
    slug: 'glaziers',
    title: 'Glaziers',
    icon: '🪟',
    description: 'Glazier websites with instant quote flows for windows, doors, and repairs.',
    videoUrl: '/videos/fixblox-demo.mp4',
    keywords: ['glazier website', 'window quotes'],
    features: ['Product-based quotes', 'Lead routing', 'Mobile-first'],
    related: ['joiners-carpenters', 'builders']
  },
  {
    slug: 'decorators',
    title: 'Decorators',
    icon: '🎨',
    description: 'Decorator websites that showcase your work and convert visitors into bookings.',
    videoUrl: '/videos/fixblox-demo.mp4',
    keywords: ['decorator website', 'painting leads'],
    features: ['Portfolio ready', 'Quote intake', 'AI assistant'],
    related: ['renovators']
  },
  {
    slug: 'bathroom-fitters',
    title: 'Bathroom Fitters',
    icon: '🚿',
    description: 'Conversion-focused websites for bathroom fitters with estimate flows and photo-friendly layouts.',
    videoUrl: '/videos/fixblox-demo.mp4',
    keywords: ['bathroom fitter website', 'bathroom quotes'],
    features: ['Instant estimates', 'Job updates', 'Lead capture'],
    related: ['plumbers', 'renovators']
  },
  {
    slug: 'joiners-carpenters',
    title: 'Joiners / Carpenters',
    icon: '🚪',
    description: 'Websites for joiners and carpenters highlighting craftsmanship and enquiry funnels.',
    videoUrl: '/videos/fixblox-demo.mp4',
    keywords: ['carpenter website', 'joinery leads'],
    features: ['Service pages', 'Quote forms', 'WhatsApp share'],
    related: ['glaziers', 'builders']
  },
  {
    slug: 'landscapers-gardeners',
    title: 'Landscapers / Gardeners',
    icon: '🌳',
    description: 'Landscaping websites designed for seasonal lead generation and quick contact.',
    videoUrl: '/videos/fixblox-demo.mp4',
    keywords: ['landscaping website', 'gardener leads'],
    features: ['Seasonal CTAs', 'Photo galleries', 'Lead capture'],
    related: ['bricklayers-masons']
  },
  {
    slug: 'bricklayers-masons',
    title: 'Bricklayers / Masons',
    icon: '🧱',
    description: 'Professional websites for bricklayers and masons with quote intake and gallery support.',
    videoUrl: '/videos/fixblox-demo.mp4',
    keywords: ['bricklayer website', 'masonry quotes'],
    features: ['Project gallery', 'Quote intake', 'Mobile-first'],
    related: ['builders', 'landscapers-gardeners']
  },
  
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

