import type { ImageMetadata } from 'astro';
import serviceImage from '../assets/service-plumber.webp';

export type ServiceFAQ = [question: string, answer: string];
export type PlumbingService = {
  slug: string;
  title: string;
  icon: string;
  description: string;
  image: ImageMetadata;
  subservices: string[];
  seo: { title: string; description: string };
  faqs: ServiceFAQ[];
};

const serviceDefinitions = [
  {
    slug: 'pipe-leak-repair', title: 'Pipe & Leak Repair', icon: 'Droplets',
    description: 'Accurate diagnosis and durable repairs for exposed, concealed and burst pipes in Singapore properties.',
    image: serviceImage,
    subservices: ['Pipe Leak & Burst Pipe Repair','Concealed Pipe Leak Repair','Water Pipe Installation & Replacement','Plumbing Repiping','Water Leakage Detection (Visual Inspection)','Exposed Copper Pipe Repair','PPR Pipe Repair','PVC & UPVC Pipe Repair','Stainless Steel Pipe Repair']
  },
  {
    slug: 'drain-choke-clearing', title: 'Drain & Choke Clearing', icon: 'Waves',
    description: 'Targeted clearing that restores flow while protecting your pipes, traps and drainage system.',
    image: serviceImage,
    subservices: ['Choked Drain & Drainage Pipe Clearing','Floor Trap Choke Removal','Kitchen Sink Choke Clearing','Toilet Sink & Bathroom Choke Clearing','Bathtub Choke Removal','Water Pipe Choke Clearing','Inspection Chamber Clearing','High-Pressure Drain Jetting','Drain Cleaning & Repair','Clogged Toilet, Drain & Sink Repair','Kitchen & Bathroom Flood Repair']
  },
  {
    slug: 'toilet-services-fixtures', title: 'Toilet Services & Fixtures', icon: 'Bath',
    description: 'Careful installation and repair for toilet bowls, cisterns, flush systems and seats.',
    image: serviceImage,
    subservices: ['Toilet Bowl Installation & Replacement','Urinal Installation & Replacement','Raised Toilet Seat & Bidet Seat Installation','Toilet Flush System Installation & Repair','Toilet Cistern Repair','Toilet & Toilet Bowl Leak Repair','Toilet Bowl Siphon Replacement (Water Discharge Fix)','Toilet Seat Cover Replacement & Repair']
  },
  {
    slug: 'tap-sink-basin-services', title: 'Tap, Sink & Basin Services', icon: 'Faucet',
    description: 'Neat fixture installation and dependable repairs for kitchens, bathrooms and utility areas.',
    image: serviceImage,
    subservices: ['Tap & Faucet Installation & Repair','Shower Mixer Tap Installation','Kitchen Sink Installation & Replacement','Wash Basin & Bathroom Sink Installation & Replacement','Basin Stopper Installation & Replacement','Sink Plumbing Services (Drainage Pipes, Water Lines, Mixer Connections)','Bottle Trap Installation (Kitchen Sink & Bathroom Basin)']
  },
  {
    slug: 'water-heater-services', title: 'Water Heater Services', icon: 'Flame',
    description: 'Safe installation, replacement and servicing for instant and storage water heaters.',
    image: serviceImage,
    subservices: ['Storage Water Heater Installation & Replacement','Instant Water Heater Installation & Replacement','Water Heater Repair & General Servicing']
  },
  {
    slug: 'shower-bathroom-fixtures', title: 'Shower & Bathroom Fixtures', icon: 'ShowerHead',
    description: 'Thoughtful bathroom upgrades and repairs, installed cleanly with proper seals and fittings.',
    image: serviceImage,
    subservices: ['Shower Head & Set Installation','Rain Shower Installation','Bidet Spray Installation','Shower Handset Holder Installation & Replacement','Exhaust Fan Installation (Ceiling Mounted & Toilet Ventilation Fan)','BTO Toilet Acrylic Panel with Lighting Service']
  },
  {
    slug: 'special-safety-installations', title: 'Special & Safety Installations', icon: 'ShieldCheck',
    description: 'Practical accessibility, filtration and waterproofing improvements for safer everyday use.',
    image: serviceImage,
    subservices: ['Toilet & Bathroom Grab Bar Installation (For Elderly)','Shower Chair & Bench Installation / Replacement','Garbage Disposal Installation','Water Filtration System Installation','Bathroom & General Area Waterproofing Services']
  },
  {
    slug: 'property-commercial-plumbing', title: 'Property & Commercial Plumbing', icon: 'Building2',
    description: 'Responsive plumbing support for HDBs, condos, landed homes and operating businesses.',
    image: serviceImage,
    subservices: ['HDB Plumbing Services','Condo Plumbing Services','Landed Home Plumbing Services','Commercial Plumbing (Offices, Clinics, Retail Shops)','Grease Trap Cleaning','Restaurant Plumbing Services']
  },
  {
    slug: 'emergency-other-services', title: 'Emergency & Other Services', icon: 'Siren',
    description: 'Fast help for urgent leaks, serious chokes and plumbing failures—day or night.',
    image: serviceImage,
    subservices: ['24/7 Emergency Plumbing Services (Urgent Leaks, Chokes, Burst Pipes)','24-Hour Plumber Singapore','General Plumbing Service','Licensed Plumber in Singapore','Specialized Toilet Plumber Services']
  }
];

export const services: PlumbingService[] = serviceDefinitions.map((service) => ({
  ...service,
  seo: {
    title: `${service.title} Singapore | Prime Plumbing SG`,
    description: `${service.description} Request a clear quote from Prime Plumbing SG in Singapore.`
  },
  faqs: [
    [`How much does ${service.title.toLowerCase()} cost in Singapore?`, 'Pricing depends on access, materials and the extent of the issue. We confirm the recommended scope and quote before work begins.'],
    [`Can you attend urgent ${service.title.toLowerCase()} jobs?`, 'Yes. Call our 24/7 line for an active leak, serious choke or another issue that may cause property damage.'],
    ['Which Singapore properties do you serve?', 'We serve HDB flats, condos, landed homes, offices, clinics, shops and restaurants islandwide.']
  ]
}));

export const slugify = (value: string) => value.toLowerCase().replace(/&/g,'').replace(/\([^)]*\)/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

export const faqs: ServiceFAQ[] = [
  ['Do you provide 24/7 emergency plumbing?','Yes. Our emergency line is available around the clock for active leaks, burst pipes and severe chokes.'],
  ['Do you serve HDB properties?','Yes. We work in HDB flats, condos, landed homes and commercial premises across Singapore.'],
  ['Do you repair concealed pipe leaks?','Yes. We inspect likely leak paths, explain the access required and recommend the least disruptive practical repair.'],
  ['Can you clear severely choked drains?','Yes. Depending on the blockage, we use mechanical clearing or high-pressure jetting to restore flow.'],
  ['Do you install water heaters?','Yes. We install and replace both instant and storage water heaters with the appropriate fittings and safety checks.'],
  ['Do you repair toilet leaks?','Yes. We repair cisterns, flush valves, inlet valves, seals and leaking toilet connections.'],
  ['Do you provide commercial plumbing?','Yes. We support offices, clinics, shops and restaurants with planned and urgent work.'],
  ['Do you provide plumbing quotations?','Yes. We explain the recommended work and pricing before proceeding.'],
  ['Which areas in Singapore do you serve?','We provide islandwide coverage across Central, East, West, North, North-East and South Singapore.'],
  ['How quickly can a plumber arrive?','Arrival depends on location, traffic and job urgency. We provide a realistic estimated arrival time when you call.']
];
