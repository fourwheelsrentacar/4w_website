import type { FleetImageType, ImageMetadata } from '../data/fleet';

export type VisualType = 'actual-fleet' | 'representative-photo' | 'model-illustration' | 'category-fallback' | 'generic-silhouette';

export interface VehicleVisualInfo {
  url: string;
  fallbackUrl: string;
  isRealPhoto: boolean;
  type: VisualType;
  label: string;
  alt?: string;
  meta?: ImageMetadata;
}

export function getImageLabel(type: VisualType): string {
  switch (type) {
    case 'actual-fleet':
      return 'Actual 4WHEELS vehicle';
    case 'representative-photo':
      return 'Representative model image. Actual rental vehicle/color may vary.';
    case 'model-illustration':
      return 'Model illustration. Actual rental vehicle/color may vary.';
    case 'category-fallback':
    case 'generic-silhouette':
    default:
      return 'Temporary representative visual. Actual vehicle may differ.';
  }
}

export function getVehicleVisualUrl(vehicle: {
  manufacturer?: string;
  brand?: string;
  model: string;
  slug: string;
  category: string;
  images?: string[];
  imageMeta?: ImageMetadata;
  imageAlt?: string;
}): VehicleVisualInfo {
  const brand = (vehicle.manufacturer || vehicle.brand || '').toLowerCase();
  const slug = vehicle.slug.toLowerCase();
  const cat = vehicle.category.toLowerCase();

  // Model-specific SVG fallback determination
  let svgFallback = '/vehicles/illustrations/generic/silhouette.svg';
  if (brand.includes('toyota') && slug.includes('corolla')) svgFallback = '/vehicles/illustrations/toyota/corolla.svg';
  else if (brand.includes('toyota') && slug.includes('fortuner')) svgFallback = '/vehicles/illustrations/toyota/fortuner.svg';
  else if (brand.includes('honda') && slug.includes('civic')) svgFallback = '/vehicles/illustrations/honda/civic.svg';
  else if (brand.includes('honda') && slug.includes('city')) svgFallback = '/vehicles/illustrations/honda/city.svg';
  else if (brand.includes('honda') && slug.includes('hr')) svgFallback = '/vehicles/illustrations/honda/hrv.svg';
  else if (brand.includes('hyundai') && slug.includes('tucson')) svgFallback = '/vehicles/illustrations/hyundai/tucson.svg';
  else if (brand.includes('hyundai') && slug.includes('elantra')) svgFallback = '/vehicles/illustrations/hyundai/elantra.svg';
  else if (brand.includes('hyundai') && slug.includes('santa')) svgFallback = '/vehicles/illustrations/hyundai/santafe.svg';
  else if (brand.includes('suzuki') && slug.includes('alto')) svgFallback = '/vehicles/illustrations/suzuki/alto.svg';
  else if (brand.includes('suzuki') && slug.includes('swift')) svgFallback = '/vehicles/illustrations/suzuki/swift.svg';
  else if (brand.includes('byd') && slug.includes('atto')) svgFallback = '/vehicles/illustrations/byd/atto3.svg';
  else if (brand.includes('byd') && slug.includes('seal')) svgFallback = '/vehicles/illustrations/byd/seal.svg';
  else if (brand.includes('deepal') && slug.includes('s07')) svgFallback = '/vehicles/illustrations/deepal/s07.svg';
  else if (brand.includes('deepal') && slug.includes('l07')) svgFallback = '/vehicles/illustrations/deepal/l07.svg';
  else if (brand.includes('haval') && slug.includes('h6')) svgFallback = '/vehicles/illustrations/haval/h6.svg';
  else if (brand.includes('mg') && slug.includes('hs')) svgFallback = '/vehicles/illustrations/mg/hs.svg';
  else if (brand.includes('changan') && slug.includes('alsvin')) svgFallback = '/vehicles/illustrations/changan/alsvin.svg';
  else if (brand.includes('changan') && (slug.includes('ochan') || slug.includes('oshan'))) svgFallback = '/vehicles/illustrations/changan/ochanx7.svg';
  else if (brand.includes('audi') && slug.includes('a6')) svgFallback = '/vehicles/illustrations/audi/a6.svg';
  else if (cat === 'van' || slug.includes('hiace')) svgFallback = '/vehicles/illustrations/vamp/hiace.svg';
  else if (cat === 'coaster' || cat === 'bus' || slug.includes('coaster')) svgFallback = '/vehicles/illustrations/buses/coaster.svg';
  else if (cat === 'suv' || cat === 'pickup') svgFallback = '/vehicles/illustrations/toyota/fortuner.svg';
  else if (cat === 'sedan' || cat === 'luxury') svgFallback = '/vehicles/illustrations/toyota/corolla.svg';
  else if (cat === 'hatchback') svgFallback = '/vehicles/illustrations/suzuki/alto.svg';

  // 1. Explicit imageMeta with hero
  if (vehicle.imageMeta && vehicle.imageMeta.hero) {
    const meta = vehicle.imageMeta;
    const type: VisualType = meta.imageType;
    return {
      url: meta.hero,
      fallbackUrl: svgFallback,
      isRealPhoto: type === 'actual-fleet' || type === 'representative-photo',
      type,
      label: getImageLabel(type),
      alt: vehicle.imageAlt,
      meta
    };
  }

  // 2. Fallback to images array
  if (vehicle.images && vehicle.images.length > 0 && vehicle.images[0]) {
    return {
      url: vehicle.images[0],
      fallbackUrl: svgFallback,
      isRealPhoto: true,
      type: 'representative-photo',
      label: getImageLabel('representative-photo'),
      alt: vehicle.imageAlt
    };
  }

  // 3. Model-specific 2D illustrations
  if (svgFallback !== '/vehicles/illustrations/generic/silhouette.svg') {
    return {
      url: svgFallback,
      fallbackUrl: '/vehicles/illustrations/generic/silhouette.svg',
      isRealPhoto: false,
      type: 'model_illustration',
      label: getImageLabel('model-illustration'),
      alt: vehicle.imageAlt
    };
  }

  // 4. Generic silhouette fallback
  return {
    url: '/vehicles/illustrations/generic/silhouette.svg',
    fallbackUrl: '/vehicles/illustrations/generic/silhouette.svg',
    isRealPhoto: false,
    type: 'generic-silhouette',
    label: getImageLabel('generic-silhouette'),
    alt: vehicle.imageAlt
  };
}
