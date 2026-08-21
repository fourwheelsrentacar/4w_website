export interface Brand {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  country: string;
  officialPakistanSource: string;
  activePakistan: boolean;
  lastVerified: string;
  categories: Array<'sedan' | 'suv' | 'hatchback' | 'crossover' | 'luxury' | 'ev' | 'hybrid' | 'phev' | 'pickup' | 'van' | 'coaster' | 'bus'>;
  vehicleCount: number;
  featured?: boolean;
}

export const PAKISTAN_BRANDS: Brand[] = [
  {
    id: 'toyota',
    name: 'Toyota',
    slug: 'toyota',
    country: 'Japan',
    officialPakistanSource: 'https://toyota-indus.com',
    activePakistan: true,
    lastVerified: '2026-08-18',
    categories: ['sedan', 'suv', 'pickup', 'van', 'coaster', 'hybrid'],
    vehicleCount: 6,
    featured: true
  },
  {
    id: 'honda',
    name: 'Honda',
    slug: 'honda',
    country: 'Japan',
    officialPakistanSource: 'https://honda.com.pk',
    activePakistan: true,
    lastVerified: '2026-08-18',
    categories: ['sedan', 'crossover', 'hybrid'],
    vehicleCount: 3,
    featured: true
  },
  {
    id: 'suzuki',
    name: 'Suzuki',
    slug: 'suzuki',
    country: 'Japan',
    officialPakistanSource: 'https://suzukipakistan.com',
    activePakistan: true,
    lastVerified: '2026-08-18',
    categories: ['hatchback', 'sedan'],
    vehicleCount: 2,
    featured: true
  },
  {
    id: 'hyundai',
    name: 'Hyundai',
    slug: 'hyundai',
    country: 'South Korea',
    officialPakistanSource: 'https://hyundai-nishat.com',
    activePakistan: true,
    lastVerified: '2026-08-18',
    categories: ['sedan', 'suv', 'luxury', 'hybrid'],
    vehicleCount: 4,
    featured: true
  },
  {
    id: 'kia',
    name: 'Kia',
    slug: 'kia',
    country: 'South Korea',
    officialPakistanSource: 'https://kia-luckymotorcorp.com',
    activePakistan: true,
    lastVerified: '2026-08-18',
    categories: ['suv', 'crossover', 'van', 'hatchback'],
    vehicleCount: 5,
    featured: true
  },
  {
    id: 'byd',
    name: 'BYD',
    slug: 'byd',
    country: 'China',
    officialPakistanSource: 'https://byd.com/pk',
    activePakistan: true,
    lastVerified: '2026-08-18',
    categories: ['ev', 'phev', 'crossover', 'sedan', 'pickup', 'suv'],
    vehicleCount: 5,
    featured: true
  },
  {
    id: 'changan',
    name: 'Changan',
    slug: 'changan',
    country: 'China',
    officialPakistanSource: 'https://changan.com.pk',
    activePakistan: true,
    lastVerified: '2026-08-18',
    categories: ['sedan', 'suv', 'van'],
    vehicleCount: 3,
    featured: true
  },
  {
    id: 'deepal',
    name: 'Deepal',
    slug: 'deepal',
    country: 'China',
    officialPakistanSource: 'https://deepal.com.pk',
    activePakistan: true,
    lastVerified: '2026-08-18',
    categories: ['ev', 'suv', 'sedan'],
    vehicleCount: 3,
    featured: true
  },
  {
    id: 'mg',
    name: 'MG',
    slug: 'mg',
    country: 'China / UK',
    officialPakistanSource: 'https://mgmotors.com.pk',
    activePakistan: true,
    lastVerified: '2026-08-18',
    categories: ['suv', 'phev', 'ev', 'hatchback', 'sedan'],
    vehicleCount: 4,
    featured: true
  },
  {
    id: 'haval',
    name: 'Haval',
    slug: 'haval',
    country: 'China',
    officialPakistanSource: 'https://haval.pk',
    activePakistan: true,
    lastVerified: '2026-08-18',
    categories: ['suv', 'hybrid', 'crossover'],
    vehicleCount: 2,
    featured: true
  },
  {
    id: 'jetour',
    name: 'Jetour',
    slug: 'jetour',
    country: 'China',
    officialPakistanSource: 'https://jetour.com.pk',
    activePakistan: true,
    lastVerified: '2026-08-18',
    categories: ['suv', 'crossover', 'phev'],
    vehicleCount: 3,
    featured: true
  },
  {
    id: 'omoda',
    name: 'OMODA',
    slug: 'omoda',
    country: 'China',
    officialPakistanSource: 'https://omoda.pk',
    activePakistan: true,
    lastVerified: '2026-08-18',
    categories: ['crossover', 'phev', 'ev'],
    vehicleCount: 2,
    featured: true
  },
  {
    id: 'jaecoo',
    name: 'JAECOO',
    slug: 'jaecoo',
    country: 'China',
    officialPakistanSource: 'https://jaecoo.pk',
    activePakistan: true,
    lastVerified: '2026-08-18',
    categories: ['suv', 'phev', 'hybrid'],
    vehicleCount: 3,
    featured: true
  },
  {
    id: 'gac',
    name: 'GAC',
    slug: 'gac',
    country: 'China',
    officialPakistanSource: 'https://gacmotor.pk',
    activePakistan: true,
    lastVerified: '2026-08-18',
    categories: ['ev', 'crossover'],
    vehicleCount: 2,
    featured: false
  },
  {
    id: 'audi',
    name: 'Audi',
    slug: 'audi',
    country: 'Germany',
    officialPakistanSource: 'https://audi.com.pk',
    activePakistan: true,
    lastVerified: '2026-08-18',
    categories: ['luxury', 'sedan'],
    vehicleCount: 1,
    featured: true
  },
  {
    id: 'yutong',
    name: 'Yutong',
    slug: 'yutong',
    country: 'China',
    officialPakistanSource: 'https://mastermotor.com.pk',
    activePakistan: true,
    lastVerified: '2026-08-18',
    categories: ['bus', 'coaster'],
    vehicleCount: 3,
    featured: true
  },
  {
    id: 'daewoo',
    name: 'Daewoo',
    slug: 'daewoo',
    country: 'South Korea / Pakistan',
    officialPakistanSource: 'https://daewoo.com.pk',
    activePakistan: true,
    lastVerified: '2026-08-18',
    categories: ['bus'],
    vehicleCount: 2,
    featured: true
  }
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return PAKISTAN_BRANDS.find(b => b.slug.toLowerCase() === slug.toLowerCase());
}
