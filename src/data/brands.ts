export interface Brand {
  id: string;
  name: string;
  displayName?: string;
  slug: string;
  logoUrl?: string;
  country: string;
  distributor?: string;
  officialPakistanSource: string;
  activePakistan: boolean;
  lastVerified: string;
  categories: Array<'sedan' | 'suv' | 'hatchback' | 'crossover' | 'luxury' | 'ev' | 'hybrid' | 'phev' | 'pickup' | 'van' | 'coaster' | 'bus'>;
  vehicleCount: number;
  description?: string;
  featured?: boolean;
}

export const PAKISTAN_BRANDS: Brand[] = [
  {
    id: 'toyota',
    name: 'Toyota',
    displayName: 'Toyota Pakistan (Indus Motor Company)',
    slug: 'toyota',
    country: 'Japan',
    distributor: 'Indus Motor Company Limited',
    officialPakistanSource: 'https://toyota-indus.com',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['sedan', 'suv', 'pickup', 'van', 'coaster', 'hybrid'],
    vehicleCount: 6,
    description: 'Japan’s premiere automotive leader in Pakistan, featuring Corolla, Yaris, Fortuner, Hilux Revo, HiAce, and Coaster.',
    featured: true
  },
  {
    id: 'honda',
    name: 'Honda',
    displayName: 'Honda Atlas Cars Pakistan',
    slug: 'honda',
    country: 'Japan',
    distributor: 'Honda Atlas Cars (Pakistan) Ltd.',
    officialPakistanSource: 'https://www.honda.com.pk',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['sedan', 'crossover', 'hybrid'],
    vehicleCount: 4,
    description: 'Renowned Japanese engineering with top-selling Civic, City, and HR-V crossover models.',
    featured: true
  },
  {
    id: 'suzuki',
    name: 'Suzuki',
    displayName: 'Pak Suzuki Motor Co.',
    slug: 'suzuki',
    country: 'Japan',
    distributor: 'Pak Suzuki Motor Co. Ltd.',
    officialPakistanSource: 'https://suzukipakistan.com',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['hatchback', 'sedan', 'van'],
    vehicleCount: 3,
    description: 'Pakistan’s leading compact automobile manufacturer, producer of Alto, Swift, Cultus, and Every.',
    featured: true
  },
  {
    id: 'hyundai',
    name: 'Hyundai',
    displayName: 'Hyundai Nishat Motor',
    slug: 'hyundai',
    country: 'South Korea',
    distributor: 'Hyundai Nishat Motor (Pvt) Ltd.',
    officialPakistanSource: 'https://hyundai-nishat.com',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['sedan', 'suv', 'luxury', 'hybrid', 'phev'],
    vehicleCount: 4,
    description: 'Korean premium automotive innovator presenting Tucson, Elantra, Santa Fe, and Sonata.',
    featured: true
  },
  {
    id: 'kia',
    name: 'Kia',
    displayName: 'Kia Lucky Motors Pakistan',
    slug: 'kia',
    country: 'South Korea',
    distributor: 'Lucky Motor Corporation Limited',
    officialPakistanSource: 'https://kia-luckymotorcorp.com',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['suv', 'crossover', 'van', 'hatchback'],
    vehicleCount: 5,
    description: 'Innovative Korean mobility lineup featuring Sportage, Grand Carnival VIP MPV, Sorento, and Stonic.',
    featured: true
  },
  {
    id: 'byd',
    name: 'BYD',
    displayName: 'BYD Mega Motors Pakistan',
    slug: 'byd',
    country: 'China',
    distributor: 'Mega Motors Company (Hubco Subsidiary)',
    officialPakistanSource: 'https://byd-mega.com',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['ev', 'phev', 'crossover', 'sedan', 'suv'],
    vehicleCount: 5,
    description: 'Global New Energy Vehicle pioneer offering BYD Atto 3, BYD Seal, BYD Sealion 7, and Atto 2 in Pakistan.',
    featured: true
  },
  {
    id: 'changan',
    name: 'Changan',
    displayName: 'Changan Master Motors',
    slug: 'changan',
    country: 'China',
    distributor: 'Master Changan Motors Limited',
    officialPakistanSource: 'https://changan.com.pk',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['sedan', 'suv', 'van'],
    vehicleCount: 3,
    description: 'Top-tier SUV and sedan manufacturer in Pakistan featuring Oshan X7, Alsvin, and Karvaan MPV.',
    featured: true
  },
  {
    id: 'deepal',
    name: 'Deepal',
    displayName: 'Deepal EV Pakistan (Master Changan)',
    slug: 'deepal',
    country: 'China',
    distributor: 'Master Changan Motors Limited',
    officialPakistanSource: 'https://deepal.com.pk',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['ev', 'suv', 'sedan'],
    vehicleCount: 4,
    description: 'Futuristic electric vehicle brand bringing Deepal S07 SUV and Deepal L07 sedan to Pakistan.',
    featured: true
  },
  {
    id: 'mg',
    name: 'MG',
    displayName: 'MG Motors Pakistan (JW Auto Park)',
    slug: 'mg',
    country: 'China / UK',
    distributor: 'JW SEZ Group / MG JW Automobile',
    officialPakistanSource: 'https://mgmotors.com.pk',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['suv', 'phev', 'ev', 'hatchback'],
    vehicleCount: 4,
    description: 'British-origin automotive icon delivering MG HS, MG ZS EV, and MG4 EV in Pakistan.',
    featured: true
  },
  {
    id: 'haval',
    name: 'Haval',
    displayName: 'Haval GWM Pakistan (Sazgar Motors)',
    slug: 'haval',
    country: 'China',
    distributor: 'Sazgar Engineering Works Limited',
    officialPakistanSource: 'https://www.gwm-pakistan.com',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['suv', 'hybrid', 'crossover'],
    vehicleCount: 3,
    description: 'Premium hybrid SUV leader locally assembling Haval H6 HEV and Jolion HEV in Pakistan.',
    featured: true
  },
  {
    id: 'ora',
    name: 'ORA',
    displayName: 'ORA EV Pakistan (Sazgar GWM)',
    slug: 'ora',
    country: 'China',
    distributor: 'Sazgar Engineering Works Limited',
    officialPakistanSource: 'https://www.gwm-pakistan.com',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['ev', 'hatchback', 'sedan'],
    vehicleCount: 2,
    description: 'Stylish electric vehicle brand under GWM offering ORA 03 and ORA 07 EV models.',
    featured: false
  },
  {
    id: 'tank',
    name: 'Tank',
    displayName: 'Tank Off-Road SUV Pakistan (Sazgar GWM)',
    slug: 'tank',
    country: 'China',
    distributor: 'Sazgar Engineering Works Limited',
    officialPakistanSource: 'https://www.gwm-pakistan.com',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['suv', 'luxury', 'hybrid'],
    vehicleCount: 1,
    description: 'Luxury off-road hybrid SUV lineup by GWM featuring the flagship Tank 500 in Pakistan.',
    featured: false
  },
  {
    id: 'jetour',
    name: 'Jetour',
    displayName: 'Jetour Motors Pakistan',
    slug: 'jetour',
    country: 'China',
    distributor: 'Jetour Auto Pakistan',
    officialPakistanSource: 'https://jetour.com.pk',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['suv', 'crossover', 'phev'],
    vehicleCount: 3,
    description: 'Rugged luxury SUV manufacturer bringing Jetour T2, X70 Plus, and Dashing to Pakistan.',
    featured: true
  },
  {
    id: 'omoda',
    name: 'OMODA',
    displayName: 'OMODA Pakistan (Chery Group)',
    slug: 'omoda',
    country: 'China',
    distributor: 'Chery / Omoda Jaecoo Pakistan',
    officialPakistanSource: 'https://omodajaecoo.pk',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['crossover', 'phev', 'ev'],
    vehicleCount: 2,
    description: 'Crossover New Energy Vehicle brand launching OMODA E5 electric crossover and OMODA 7.',
    featured: true
  },
  {
    id: 'jaecoo',
    name: 'JAECOO',
    displayName: 'JAECOO Pakistan (Chery Group)',
    slug: 'jaecoo',
    country: 'China',
    distributor: 'Chery / Omoda Jaecoo Pakistan',
    officialPakistanSource: 'https://omodajaecoo.pk',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['suv', 'phev', 'hybrid'],
    vehicleCount: 2,
    description: 'Off-road crossover brand presenting JAECOO J7 SHS Super Hybrid and J6 EV.',
    featured: true
  },
  {
    id: 'aion',
    name: 'AION',
    displayName: 'GAC AION EV Pakistan',
    slug: 'aion',
    country: 'China',
    distributor: 'GAC Motor Pakistan',
    officialPakistanSource: 'https://www.gacgroup.com/en-pk',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['ev', 'sedan', 'crossover'],
    vehicleCount: 2,
    description: 'Pure EV brand by GAC Group featuring AION ES electric sedan and AION V crossover.',
    featured: false
  },
  {
    id: 'hyptec',
    name: 'HYPTEC',
    displayName: 'GAC HYPTEC Luxury EV Pakistan',
    slug: 'hyptec',
    country: 'China',
    distributor: 'GAC Motor Pakistan',
    officialPakistanSource: 'https://www.gacgroup.com/en-pk',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['ev', 'suv', 'luxury'],
    vehicleCount: 1,
    description: 'High-end electric performance SUV brand under GAC presenting HYPTEC HT with gull-wing doors.',
    featured: false
  },
  {
    id: 'honri',
    name: 'Honri',
    displayName: 'Honri EV Pakistan (Dewan Farooque Motors)',
    slug: 'honri',
    country: 'China',
    distributor: 'Dewan Farooque Motors Limited',
    officialPakistanSource: 'https://honripakistan.com',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['ev', 'hatchback'],
    vehicleCount: 2,
    description: 'Affordable compact urban electric vehicles assembled locally by Dewan Farooque Motors (Honri i200 & i300).',
    featured: false
  },
  {
    id: 'audi',
    name: 'Audi',
    displayName: 'Audi Pakistan (Premier Systems)',
    slug: 'audi',
    country: 'Germany',
    distributor: 'Premier Systems (Pvt) Ltd',
    officialPakistanSource: 'https://audi.com.pk',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['luxury', 'sedan'],
    vehicleCount: 1,
    description: 'German executive luxury automobile brand offering flagship Audi A6 executive sedans.',
    featured: true
  },
  {
    id: 'yutong',
    name: 'Yutong',
    displayName: 'Master Yutong Bus Pakistan',
    slug: 'yutong',
    country: 'China',
    distributor: 'Master Motor Corporation',
    officialPakistanSource: 'https://mastermotor.com.pk',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['bus', 'coaster'],
    vehicleCount: 1,
    description: 'Commercial bus and luxury coach manufacturer powering intercity transport and group travel.',
    featured: true
  },
  {
    id: 'daewoo',
    name: 'Daewoo',
    displayName: 'Daewoo Express Commercial Bus',
    slug: 'daewoo',
    country: 'South Korea / Pakistan',
    distributor: 'Daewoo Express Pakistan',
    officialPakistanSource: 'https://daewoo.com.pk',
    activePakistan: true,
    lastVerified: '2026-08-21',
    categories: ['bus'],
    vehicleCount: 1,
    description: 'Heavy commercial luxury bus provider for intercity passenger transport in Pakistan.',
    featured: true
  }
];

export function getBrandBySlug(slug: string): Brand | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return PAKISTAN_BRANDS.find(b => b.slug.toLowerCase() === normalized || b.id.toLowerCase() === normalized);
}
