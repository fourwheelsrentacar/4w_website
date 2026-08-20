import type { Vehicle, VehicleImageMetadata } from '../data/fleet';

export interface ResolvedVehicleImage {
  imageUrl: string;
  fallbackUrl: string;
  type: 'actual-fleet' | 'licensed-model' | 'automotive-api' | 'illustration' | 'fallback';
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
  angle?: number | string; // 23 for front 3/4
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

export function buildCarsXeUrl(params: {
  apiKey?: string;
  make: string;
  model: string;
  year?: number | string;
  trim?: string;
  angle?: string;
}): string {
  const apiKey = params.apiKey || process.env.CARSXE_API_KEY || '';
  if (!apiKey) return '';
  const url = new URL('https://api.carsxe.com/images');
  url.searchParams.set('key', apiKey);
  url.searchParams.set('make', params.make);
  url.searchParams.set('model', params.model);
  if (params.year) url.searchParams.set('year', String(params.year));
  if (params.trim) url.searchParams.set('trim', params.trim);
  url.searchParams.set('angle', params.angle || 'front_three_quarters');
  url.searchParams.set('format', 'png');
  return url.toString();
}

export function resolveVehicleImage(vehicle: Vehicle | Partial<Vehicle>): ResolvedVehicleImage {
  const brand = (vehicle.manufacturer || '').trim();
  const model = (vehicle.model || '').trim();
  const year = vehicle.modelYear || 2024;
  const slug = (vehicle.slug || '').toLowerCase();
  const category = (vehicle.category || '').toLowerCase();

  // Emergency fallback silhouette path
  const genericSilhouette = '/vehicles/illustrations/generic/silhouette.svg';

  // Specific model fallback SVG
  let fallbackSvg = genericSilhouette;
  if (slug.includes('corolla')) fallbackSvg = '/vehicles/illustrations/toyota/corolla.svg';
  else if (slug.includes('fortuner')) fallbackSvg = '/vehicles/illustrations/toyota/fortuner.svg';
  else if (slug.includes('civic')) fallbackSvg = '/vehicles/illustrations/honda/civic.svg';
  else if (slug.includes('alto')) fallbackSvg = '/vehicles/illustrations/suzuki/alto.svg';
  else if (slug.includes('audi') || slug.includes('a6')) fallbackSvg = '/vehicles/illustrations/audi/a6.svg';
  else if (category === 'van' || slug.includes('hiace')) fallbackSvg = '/vehicles/illustrations/vamp/hiace.svg';
  else if (category === 'coaster' || category === 'bus' || slug.includes('coaster')) fallbackSvg = '/vehicles/illustrations/buses/coaster.svg';

  // 1. Priority 1: Actual 4WHEELS Fleet Photograph if explicitly uploaded and marked
  if (vehicle.vehicleImage && vehicle.vehicleImage.type === 'actual-fleet' && vehicle.vehicleImage.imageUrl) {
    return {
      imageUrl: vehicle.vehicleImage.imageUrl,
      fallbackUrl: fallbackSvg,
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

  // 2. Priority 2: Imagin / CarsXE API integration if API keys provided in environment
  const imaginApiKey = process.env.IMAGIN_API_KEY || process.env.PUBLIC_IMAGIN_CUSTOMER_KEY;
  const carsXeApiKey = process.env.CARSXE_API_KEY;

  if (imaginApiKey) {
    const imaginUrl = buildImaginUrl({
      customerKey: imaginApiKey,
      make: brand,
      modelFamily: model,
      modelYear: year,
      trim: vehicle.vehicleImage?.trim,
      angle: 23
    });
    return {
      imageUrl: imaginUrl,
      fallbackUrl: vehicle.vehicleImage?.imageUrl || fallbackSvg,
      type: 'automotive-api',
      provider: 'imagin',
      label: 'Representative model visual. Actual rental vehicle/color may vary.',
      make: brand,
      model: model,
      modelYear: year,
      generation: vehicle.vehicleImage?.generation || 'Current Generation',
      verified: vehicle.vehicleImage?.verified ?? true,
      reviewStatus: vehicle.vehicleImage?.reviewStatus || 'APPROVED',
      isTransparent: true
    };
  } else if (carsXeApiKey) {
    const carsXeUrl = buildCarsXeUrl({
      apiKey: carsXeApiKey,
      make: brand,
      model: model,
      year: year,
      trim: vehicle.vehicleImage?.trim
    });
    if (carsXeUrl) {
      return {
        imageUrl: carsXeUrl,
        fallbackUrl: vehicle.vehicleImage?.imageUrl || fallbackSvg,
        type: 'automotive-api',
        provider: 'carsxe',
        label: 'Representative model visual. Actual rental vehicle/color may vary.',
        make: brand,
        model: model,
        modelYear: year,
        generation: vehicle.vehicleImage?.generation || 'Current Generation',
        verified: vehicle.vehicleImage?.verified ?? true,
        reviewStatus: vehicle.vehicleImage?.reviewStatus || 'APPROVED',
        isTransparent: true
      };
    }
  }

  // 3. Priority 3: Exact-generation local licensed representative photograph
  if (vehicle.vehicleImage && vehicle.vehicleImage.imageUrl) {
    return {
      imageUrl: vehicle.vehicleImage.imageUrl,
      fallbackUrl: fallbackSvg,
      type: vehicle.vehicleImage.type === 'licensed-model' ? 'licensed-model' : 'licensed-model',
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

  // 4. Priority 4: Existing hero image in images array
  if (vehicle.images && vehicle.images.length > 0 && vehicle.images[0]) {
    return {
      imageUrl: vehicle.images[0],
      fallbackUrl: fallbackSvg,
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

  // 5. Emergency Fallback: Generic Body Silhouette
  return {
    imageUrl: genericSilhouette,
    fallbackUrl: genericSilhouette,
    type: 'fallback',
    provider: 'fallback',
    label: 'Temporary representative visual. Actual vehicle may differ.',
    make: brand,
    model: model,
    modelYear: year,
    generation: 'Unknown',
    verified: false,
    reviewStatus: 'OWNER CONFIRMATION REQUIRED'
  };
}
