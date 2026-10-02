import { FLEET_VEHICLES, type Vehicle } from './fleet';
import { PAKISTAN_VEHICLE_CATALOG, type CatalogVehicle } from './pakistanVehicles';

export interface VehicleColorVariant {
  name: string;
  hex: string;
  imageUrl?: string;
  border?: string;
}

export interface UnifiedVehicle {
  id: string;
  slug: string;
  brand: string;
  brandSlug: string;
  model: string;
  variant: string;
  modelYear: string;
  category: 'sedan' | 'suv' | 'hatchback' | 'crossover' | 'luxury' | 'ev' | 'hybrid' | 'phev' | 'pickup' | 'van' | 'coaster' | 'bus';
  categoryLabel: string;
  bodyType: string;
  transmission: 'Automatic' | 'Manual' | 'Dual / CVT' | 'Single Speed AT';
  fuelType: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric' | 'PHEV';
  seats: number;
  luggage: number | string;
  engineCc?: string;
  fuelEconomy?: string;
  batteryCapacity?: string;
  startingPricePkr: number;
  isCoreFleet: boolean;
  status: '4WHEELS Core Fleet' | 'Official Pakistan Lineup' | 'Available on Request';
  selfDrive: boolean;
  withDriver: boolean;
  featured: boolean;
  heroImage: string;
  colors: VehicleColorVariant[];
  detailUrl: string;
  bookingUrl: string;
  tagline: string;
  description: string;
  suitableUse: string[];
}

export function getColorHex(colorName: string): { hex: string; border?: string } {
  const lower = colorName.toLowerCase();
  if (lower.includes('white') || lower.includes('polar') || lower.includes('taffeta') || lower.includes('hamilton') || lower.includes('pearl') || lower.includes('stellar') || lower.includes('solid white') || lower.includes('snow')) {
    return { hex: '#f8fafc', border: '#cbd5e1' };
  }
  if (lower.includes('black') || lower.includes('attitude') || lower.includes('phantom') || lower.includes('crystal') || lower.includes('aurora') || lower.includes('galaxy') || lower.includes('sun black') || lower.includes('cosmos') || lower.includes('eclipse')) {
    return { hex: '#0f172a', border: '#334155' };
  }
  if (lower.includes('silver') || lower.includes('lunar') || lower.includes('silky') || lower.includes('sparkling') || lower.includes('floret') || lower.includes('ceramic')) {
    return { hex: '#94a3b8', border: '#64748b' };
  }
  if (lower.includes('grey') || lower.includes('gray') || lower.includes('graphite') || lower.includes('meteoroid') || lower.includes('ayers') || lower.includes('panthera') || lower.includes('mineral') || lower.includes('atlantis') || lower.includes('boulder')) {
    return { hex: '#475569', border: '#334155' };
  }
  if (lower.includes('red') || lower.includes('carnelian') || lower.includes('cosmic') || lower.includes('fiery') || lower.includes('phoenix') || lower.includes('parkour') || lower.includes('mica')) {
    return { hex: '#dc2626', border: '#b91c1c' };
  }
  if (lower.includes('blue') || lower.includes('surf') || lower.includes('arctic') || lower.includes('oxford') || lower.includes('cerulean') || lower.includes('firmament') || lower.includes('chroma')) {
    return { hex: '#1e40af', border: '#1d4ed8' };
  }
  if (lower.includes('green') || lower.includes('nebula') || lower.includes('shadow green') || lower.includes('olive')) {
    return { hex: '#166534', border: '#15803d' };
  }
  if (lower.includes('gold') || lower.includes('bronze') || lower.includes('brown') || lower.includes('titanium')) {
    return { hex: '#b45309', border: '#92400e' };
  }
  return { hex: '#64748b', border: '#475569' };
}

// Dedicated Color Images Registry
export const DEDICATED_COLOR_IMAGES: Record<string, Record<string, string>> = {
  'toyota-corolla': {
    'Super White': '/vehicles/fleet/toyota-corolla/hero.webp',
    'Attitude Black': '/vehicles/fleet/toyota-corolla/attitude-black.webp',
    'Silver Metallic': '/vehicles/fleet/toyota-corolla/silver-metallic.webp',
  },
  'toyota-fortuner': {
    'Super White': '/vehicles/fleet/toyota-fortuner/hero.webp',
    'Attitude Black': '/vehicles/fleet/toyota-fortuner/attitude-black.webp',
  },
  'toyota-prado': {
    'Super White': '/vehicles/catalog/toyota/prado.webp',
    'Attitude Black': '/vehicles/catalog/toyota/prado.webp',
    'Silver Metallic': '/vehicles/catalog/toyota/prado.webp',
  },
  'toyota-lc300': {
    'Precious White Pearl': '/vehicles/catalog/toyota/lc300.webp',
    'Attitude Black': '/vehicles/catalog/toyota/lc300.webp',
  },
  'honda-civic': {
    'Taffeta White': '/vehicles/fleet/honda-civic/hero.webp',
    'Crystal Black Pearl': '/vehicles/fleet/honda-civic/hero.webp',
    'Lunar Silver': '/vehicles/fleet/honda-civic/hero.webp',
  },
  'honda-city': {
    'Carnelian Red Pearl': '/vehicles/catalog/honda/city.webp',
    'Taffeta White': '/vehicles/catalog/honda/city.webp',
    'Crystal Black Pearl': '/vehicles/catalog/honda/city.webp',
  },
  'kia-sportage': {
    'Clear White': '/vehicles/fleet/kia-sportage/hero.webp',
    'Cherry Black': '/vehicles/fleet/kia-sportage/hero.webp',
    'Sparkling Silver': '/vehicles/fleet/kia-sportage/hero.webp',
  },
  'kia-carnival': {
    'Snow White Pearl': '/vehicles/fleet/kia-carnival/hero.webp',
    'Aurora Black Pearl': '/vehicles/fleet/kia-carnival/hero.webp',
  },
  'byd-seal': {
    'Arctic White': '/vehicles/fleet/byd-seal/hero.webp',
    'Cosmos Black': '/vehicles/fleet/byd-seal/hero.webp',
    'Atlantis Gray': '/vehicles/fleet/byd-seal/hero.webp',
  },
  'byd-atto-3': {
    'Surf Blue': '/vehicles/fleet/byd-atto3/hero.webp',
    'Ski White': '/vehicles/fleet/byd-atto3/hero.webp',
    'Boulder Grey': '/vehicles/fleet/byd-atto3/hero.webp',
  },
  'haval-h6': {
    'Hamilton White': '/vehicles/fleet/haval-h6/hero.webp',
    'Sun Black': '/vehicles/fleet/haval-h6/hero.webp',
    'Ayers Grey': '/vehicles/fleet/haval-h6/hero.webp',
  },
  'changan-alsvin': {
    'Stellar White': '/vehicles/catalog/changan/alsvin.webp',
    'Galaxy Black': '/vehicles/catalog/changan/alsvin.webp',
    'Lunar Silver': '/vehicles/catalog/changan/alsvin.webp',
  },
  'changan-oshan-x7': {
    'Space Black': '/vehicles/catalog/changan/oshan-x7.webp',
    'Stellar White': '/vehicles/catalog/changan/oshan-x7.webp',
  },
  'changan-karvaan': {
    'Pure White': '/vehicles/catalog/changan/karvaan.webp',
    'Silver Metallic': '/vehicles/catalog/changan/karvaan.webp',
  },
  'hyundai-elantra': {
    'Polar White': '/vehicles/catalog/hyundai/elantra.webp',
    'Phantom Black': '/vehicles/catalog/hyundai/elantra.webp',
  },
  'hyundai-tucson': {
    'Polar White': '/vehicles/catalog/hyundai/tucson.webp',
    'Phantom Black': '/vehicles/catalog/hyundai/tucson.webp',
  },
  'hyundai-santa-fe': {
    'Oxford Blue': '/vehicles/catalog/hyundai/santafe.webp',
    'Polar White': '/vehicles/catalog/hyundai/santafe.webp',
  },
  'suzuki-alto': {
    'Solid White': '/vehicles/fleet/suzuki-alto/hero.webp',
    'Silky Silver': '/vehicles/fleet/suzuki-alto/hero.webp',
  },
  'suzuki-swift': {
    'Solid White': '/vehicles/catalog/suzuki/swift.webp',
    'Pearl Black': '/vehicles/catalog/suzuki/swift.webp',
    'Mineral Grey': '/vehicles/catalog/suzuki/swift.webp',
  },
  'audi-a6': {
    'Ibis White': '/vehicles/fleet/audi-a6/hero.webp',
    'Mythos Black': '/vehicles/fleet/audi-a6/hero.webp',
  },
  'toyota-yaris': {
    'Super White': '/vehicles/fleet/toyota-yaris/hero.webp',
    'Attitude Black': '/vehicles/fleet/toyota-yaris/hero.webp',
  },
  'toyota-revo': {
    'Super White': '/vehicles/fleet/toyota-revo/hero.webp',
    'Attitude Black': '/vehicles/fleet/toyota-revo/hero.webp',
  },
  'toyota-hiace': {
    'Super White': '/vehicles/fleet/toyota-hiace/hero.webp',
    'Silver Metallic': '/vehicles/fleet/toyota-hiace/hero.webp',
  },
  'toyota-coaster': {
    'Executive Saloon (White/Gold)': '/vehicles/fleet/toyota-coaster/hero.webp',
  },
  'mitsubishi-pajero': {
    'Metallic Silver': '/vehicles/catalog/mitsubishi/pajero.webp',
    'Attitude Black': '/vehicles/catalog/mitsubishi/pajero.webp',
    'Pearl White': '/vehicles/catalog/mitsubishi/pajero.webp',
  }
};

export const BASE_STARTING_RATES: Record<string, number> = {
  'toyota-corolla': 7500,
  'toyota-yaris': 6000,
  'honda-civic': 11000,
  'honda-city': 7000,
  'toyota-fortuner': 18000,
  'toyota-revo': 16000,
  'toyota-prado': 28000,
  'toyota-lc300': 65000,
  'mitsubishi-pajero': 24000,
  'toyota-hiace': 14000,
  'toyota-coaster': 22000,
  'suzuki-alto': 3800,
  'suzuki-swift': 5500,
  'changan-alsvin': 5500,
  'changan-oshan-x7': 14000,
  'changan-karvaan': 6500,
  'honda-hrv': 11500,
  'kia-sportage': 12000,
  'kia-sportage-l': 14000,
  'kia-carnival': 22000,
  'byd-atto-3': 18000,
  'byd-seal': 25000,
  'byd-sealion-7': 22000,
  'haval-h6': 16000,
  'ora-03': 15000,
  'tank-500': 35000,
  'deepal-s07': 20000,
  'jetour-t2': 22000,
  'omoda-e5': 18000,
  'jaecoo-j7': 18000,
  'aion-es': 16000,
  'hyptec-ht': 32000,
  'honri-i200': 5000,
  'hyundai-elantra': 9500,
  'hyundai-tucson': 12000,
  'hyundai-santa-fe': 20000,
  'mg-hs': 12500,
  'audi-a6': 35000,
  'yutong-bus': 45000,
  'daewoo-bus': 42000
};

export function getUnifiedFleet(): UnifiedVehicle[] {
  const unified: UnifiedVehicle[] = [];
  const processedSlugs = new Set<string>();

  // 1. Process Core FLEET_VEHICLES first
  for (const fv of FLEET_VEHICLES) {
    processedSlugs.add(fv.slug);

    const colorVariants: VehicleColorVariant[] = (fv.colors || ['Super White', 'Attitude Black']).map(c => {
      const { hex, border } = getColorHex(c);
      const dedicatedImg = DEDICATED_COLOR_IMAGES[fv.slug]?.[c];
      return {
        name: c,
        hex,
        border,
        imageUrl: dedicatedImg || fv.images?.[0] || `/vehicles/fleet/${fv.slug}/hero.webp`
      };
    });

    let catLabel = 'Executive Sedan';
    if (fv.category === 'suv') catLabel = 'Luxury SUV & 4x4';
    if (fv.category === 'hatchback') catLabel = 'Economy Hatchback';
    if (fv.category === 'van') catLabel = '13-14 Seater Van';
    if (fv.category === 'coaster') catLabel = '22-Seat Executive Coaster';
    if (fv.category === 'luxury') catLabel = 'Ultra Luxury VIP Sedan';

    unified.push({
      id: fv.id,
      slug: fv.slug,
      brand: fv.manufacturer,
      brandSlug: fv.manufacturer.toLowerCase(),
      model: fv.model,
      variant: fv.variant || 'Standard Executive',
      modelYear: String(fv.modelYear || 2024),
      category: fv.category as any,
      categoryLabel: catLabel,
      bodyType: fv.bodyType || 'Sedan',
      transmission: (fv.transmission as any) || 'Automatic',
      fuelType: (fv.fuelType as any) || 'Petrol',
      seats: fv.seats || 5,
      luggage: fv.luggage || 3,
      engineCc: fv.engineCc || fv.engine || undefined,
      fuelEconomy: fv.fuelEconomyRealWorld || undefined,
      batteryCapacity: fv.batteryCapacity || undefined,
      startingPricePkr: fv.startingPricePkr || BASE_STARTING_RATES[fv.slug] || 8000,
      isCoreFleet: true,
      status: '4WHEELS Core Fleet',
      selfDrive: fv.selfDrive,
      withDriver: fv.withDriver,
      featured: fv.featured || false,
      heroImage: fv.images?.[0] || `/vehicles/fleet/${fv.slug}/hero.webp`,
      colors: colorVariants,
      detailUrl: `/fleet/${fv.slug}/`,
      bookingUrl: `/booking/?vehicle=${fv.slug}&brand=${encodeURIComponent(fv.manufacturer)}&model=${encodeURIComponent(fv.model)}&category=${fv.category}`,
      tagline: `${fv.manufacturer} ${fv.model} available for rent in Lahore with instant dispatch guarantee.`,
      description: fv.description,
      suitableUse: fv.suitableFor || ['City Travel', 'Corporate Travel', 'Airport Pickup']
    });
  }

  // 2. Process PAKISTAN_VEHICLE_CATALOG models not already covered
  for (const cv of PAKISTAN_VEHICLE_CATALOG) {
    if (processedSlugs.has(cv.slug)) {
      continue;
    }
    processedSlugs.add(cv.slug);

    const colorVariants: VehicleColorVariant[] = (cv.colors || ['Super White', 'Attitude Black']).map(c => {
      const { hex, border } = getColorHex(c);
      const dedicatedImg = DEDICATED_COLOR_IMAGES[cv.slug]?.[c];
      return {
        name: c,
        hex,
        border,
        imageUrl: dedicatedImg || cv.heroPhoto || `/vehicles/catalog/${cv.brandSlug}/${cv.slug.replace(cv.brandSlug + '-', '')}.webp`
      };
    });

    let catLabel = 'Official Pakistan Lineup';
    if (cv.category === 'suv') catLabel = 'Luxury SUV & 4x4';
    if (cv.category === 'crossover') catLabel = 'Crossover SUV';
    if (cv.category === 'sedan') catLabel = 'Executive Sedan';
    if (cv.category === 'hatchback') catLabel = 'Compact Hatchback';
    if (cv.category === 'ev') catLabel = '100% Electric Vehicle (EV)';
    if (cv.category === 'hybrid' || cv.category === 'phev') catLabel = 'Hybrid / PHEV';
    if (cv.category === 'van') catLabel = 'Multi-Purpose Van (MPV)';
    if (cv.category === 'bus' || cv.category === 'coaster') catLabel = 'Executive Group Coach / Bus';
    if (cv.category === 'pickup') catLabel = '4x4 Off-Road Pickup';
    if (cv.category === 'luxury') catLabel = 'Ultra Luxury VIP';

    const isSelfDriveAllowed = !['bus', 'coaster'].includes(cv.category) && !['toyota-lc300'].includes(cv.slug);

    unified.push({
      id: cv.id,
      slug: cv.slug,
      brand: cv.brand,
      brandSlug: cv.brandSlug,
      model: cv.model,
      variant: cv.variant || 'Standard Lineup',
      modelYear: cv.modelYear || '2024–2026',
      category: cv.category as any,
      categoryLabel: catLabel,
      bodyType: cv.bodyType,
      transmission: cv.transmission as any,
      fuelType: cv.fuelType as any,
      seats: cv.seats,
      luggage: cv.bootCapacity || 3,
      engineCc: cv.engine || undefined,
      batteryCapacity: cv.batteryCapacity || undefined,
      startingPricePkr: BASE_STARTING_RATES[cv.slug] || 12000,
      isCoreFleet: cv.isFleetConfirmed || false,
      status: cv.status,
      selfDrive: isSelfDriveAllowed,
      withDriver: true,
      featured: ['toyota-prado', 'toyota-lc300', 'byd-seal', 'haval-h6', 'changan-alsvin', 'honda-city'].includes(cv.slug),
      heroImage: cv.heroPhoto || `/vehicles/catalog/${cv.brandSlug}/${cv.slug.replace(cv.brandSlug + '-', '')}.webp`,
      colors: colorVariants,
      detailUrl: `/vehicles/${cv.brandSlug}/${cv.slug}/`,
      bookingUrl: `/booking/?vehicle=${cv.slug}&brand=${encodeURIComponent(cv.brand)}&model=${encodeURIComponent(cv.model)}&category=${cv.category}`,
      tagline: cv.tagline,
      description: cv.description,
      suitableUse: cv.suitableUse || ['City Travel', 'Intercity Tours', 'Airport Transfer']
    });
  }

  return unified;
}

export const ALL_FLEET_VEHICLES: UnifiedVehicle[] = getUnifiedFleet();
