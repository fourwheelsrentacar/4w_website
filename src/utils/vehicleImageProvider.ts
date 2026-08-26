import type { Vehicle, VehicleImageMetadata } from '../data/fleet';

export interface ResolvedVehicleImage {
  imageUrl: string;
  fallbackUrl: string;
  type: 'actual-fleet' | 'licensed-model' | 'automotive-api' | 'fallback';
  provider: 'local-fleet' | 'imagin' | 'carsxe' | 'evox' | 'local-licensed' | 'fallback';
  label: string;
  make: string;
  model: string;
  modelYear: number | string;
  generation: string;
  verified: boolean;
  reviewStatus: 'APPROVED' | 'REJECTED' | 'OWNER CONFIRMATION REQUIRED';
  isTransparent?: boolean;
}

export function buildImaginUrl(params: {
  customerKey?: string;
  make: string;
  modelFamily: string;
  modelYear?: number | string;
  modelVariant?: string;
  trim?: string;
  angle?: number | string;
  paint?: string;
  width?: number;
}): string {
  const customerKey = params.customerKey || process.env.IMAGIN_API_KEY || process.env.PUBLIC_IMAGIN_CUSTOMER_KEY || 'hrvst';
  const url = new URL(`https://cdn.imagin.studio/getimage`);
  url.searchParams.set('customer', customerKey);
  url.searchParams.set('make', params.make.toLowerCase());
  url.searchParams.set('modelFamily', params.modelFamily.toLowerCase());
  if (params.modelYear) url.searchParams.set('modelYear', String(params.modelYear));
  if (params.modelVariant) url.searchParams.set('modelVariant', params.modelVariant.toLowerCase());
  if (params.trim) url.searchParams.set('trim', params.trim.toLowerCase());
  url.searchParams.set('angle', String(params.angle || 23));
  if (params.paint) url.searchParams.set('paint', params.paint);
  url.searchParams.set('width', String(params.width || 800));
  url.searchParams.set('fileType', 'webp');
  return url.toString();
}

export function resolveVehicleImage(vehicle: Vehicle | Partial<Vehicle> | any): ResolvedVehicleImage {
  const brand = (vehicle.manufacturer || vehicle.brand || '').trim();
  const model = (vehicle.model || '').trim();
  const year = vehicle.modelYear || 2024;
  const slug = (vehicle.slug || '').toLowerCase();
  const category = (vehicle.category || '').toLowerCase();

  // Neutral Real Photographic WebP Fallbacks (NO 2D SVGs or illustrations)
  let realFallbackPhoto = '/vehicles/fleet/toyota-corolla/hero.webp';
  if (slug.includes('fortuner') || slug.includes('revo') || category === 'suv' || category === 'crossover' || category === 'phev' || category === 'pickup') {
    realFallbackPhoto = '/vehicles/fleet/toyota-fortuner/hero.webp';
  } else if (slug.includes('civic')) {
    realFallbackPhoto = '/vehicles/fleet/honda-civic/hero.webp';
  } else if (slug.includes('alto') || category === 'hatchback') {
    realFallbackPhoto = '/vehicles/fleet/suzuki-alto/hero.webp';
  } else if (slug.includes('audi') || category === 'luxury') {
    realFallbackPhoto = '/vehicles/fleet/audi-a6/hero.webp';
  } else if (category === 'van' || slug.includes('hiace') || slug.includes('carnival')) {
    realFallbackPhoto = '/vehicles/fleet/toyota-hiace/hero.webp';
  } else if (category === 'coaster' || category === 'bus' || slug.includes('coaster') || slug.includes('yutong') || slug.includes('daewoo')) {
    realFallbackPhoto = '/vehicles/fleet/toyota-coaster/hero.webp';
  } else if (slug.includes('yaris')) {
    realFallbackPhoto = '/vehicles/fleet/toyota-yaris/hero.webp';
  }

  // Check custom heroPhoto property if set on CatalogVehicle
  if (vehicle.heroPhoto && !vehicle.heroPhoto.includes('illustrations') && !vehicle.heroPhoto.endsWith('.svg')) {
    return {
      imageUrl: vehicle.heroPhoto,
      fallbackUrl: realFallbackPhoto,
      type: 'licensed-model',
      provider: 'local-licensed',
      label: 'Representative model image. Actual rental vehicle/color may vary.',
      make: brand,
      model: model,
      modelYear: year,
      generation: vehicle.customerLabel || 'Model Generation',
      verified: true,
      reviewStatus: 'APPROVED'
    };
  }

  // 1. Priority 1: Actual 4WHEELS Fleet Photograph
  if (vehicle.vehicleImage && vehicle.vehicleImage.type === 'actual-fleet' && vehicle.vehicleImage.imageUrl && !vehicle.vehicleImage.imageUrl.includes('illustrations') && !vehicle.vehicleImage.imageUrl.endsWith('.svg')) {
    return {
      imageUrl: vehicle.vehicleImage.imageUrl,
      fallbackUrl: realFallbackPhoto,
      type: 'actual-fleet',
      provider: 'local-fleet',
      label: 'Actual 4WHEELS vehicle',
      make: vehicle.vehicleImage.make || brand,
      model: vehicle.vehicleImage.model || model,
      modelYear: vehicle.vehicleImage.modelYear || year,
      generation: vehicle.vehicleImage.generation || 'Fleet Unit',
      verified: true,
      reviewStatus: 'APPROVED'
    };
  }

  // 2. Priority 2: Local licensed exact-generation real photograph
  if (vehicle.vehicleImage && vehicle.vehicleImage.imageUrl && !vehicle.vehicleImage.imageUrl.includes('illustrations') && !vehicle.vehicleImage.imageUrl.endsWith('.svg')) {
    return {
      imageUrl: vehicle.vehicleImage.imageUrl,
      fallbackUrl: realFallbackPhoto,
      type: 'licensed-model',
      provider: vehicle.vehicleImage.sourceProvider || 'local-licensed',
      label: vehicle.vehicleImage.label || 'Representative model image. Actual rental vehicle/color may vary.',
      make: vehicle.vehicleImage.make || brand,
      model: vehicle.vehicleImage.model || model,
      modelYear: vehicle.vehicleImage.modelYear || year,
      generation: vehicle.vehicleImage.generation || 'Model Generation',
      verified: vehicle.vehicleImage.verified,
      reviewStatus: vehicle.vehicleImage.reviewStatus || 'APPROVED'
    };
  }

  // 3. Priority 3: Existing hero image in images array
  if (vehicle.images && vehicle.images.length > 0 && vehicle.images[0] && !vehicle.images[0].includes('illustrations') && !vehicle.images[0].endsWith('.svg')) {
    return {
      imageUrl: vehicle.images[0],
      fallbackUrl: realFallbackPhoto,
      type: 'licensed-model',
      provider: 'local-licensed',
      label: 'Representative model image. Actual rental vehicle/color may vary.',
      make: brand,
      model: model,
      modelYear: year,
      generation: 'Current Generation',
      verified: true,
      reviewStatus: 'APPROVED'
    };
  }

  // 4. Direct Real Photo Fallback
  return {
    imageUrl: realFallbackPhoto,
    fallbackUrl: realFallbackPhoto,
    type: 'licensed-model',
    provider: 'local-licensed',
    label: 'Representative model visual. Actual rental vehicle/color may vary.',
    make: brand,
    model: model,
    modelYear: year,
    generation: 'Current Generation',
    verified: true,
    reviewStatus: 'APPROVED'
  };
}
