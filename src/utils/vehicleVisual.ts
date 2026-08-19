export interface VehicleVisualInfo {
  url: string;
  isRealPhoto: boolean;
  type: 'photo' | 'model_illustration' | 'category_illustration' | 'generic_silhouette';
}

export function getVehicleVisualUrl(vehicle: {
  manufacturer?: string;
  brand?: string;
  model: string;
  slug: string;
  category: string;
  images?: string[];
}): VehicleVisualInfo {
  // 1. Real photo
  if (vehicle.images && vehicle.images.length > 0 && vehicle.images[0]) {
    return {
      url: vehicle.images[0],
      isRealPhoto: true,
      type: 'photo'
    };
  }

  const brand = (vehicle.manufacturer || vehicle.brand || '').toLowerCase();
  const slug = vehicle.slug.toLowerCase();
  const cat = vehicle.category.toLowerCase();

  // 2. Model-specific 2D illustrations
  if (brand.includes('toyota') && slug.includes('corolla')) {
    return { url: '/vehicles/illustrations/toyota/corolla.svg', isRealPhoto: false, type: 'model_illustration' };
  }
  if (brand.includes('toyota') && slug.includes('fortuner')) {
    return { url: '/vehicles/illustrations/toyota/fortuner.svg', isRealPhoto: false, type: 'model_illustration' };
  }
  if (brand.includes('honda') && slug.includes('civic')) {
    return { url: '/vehicles/illustrations/honda/civic.svg', isRealPhoto: false, type: 'model_illustration' };
  }
  if (brand.includes('honda') && slug.includes('city')) {
    return { url: '/vehicles/illustrations/honda/city.svg', isRealPhoto: false, type: 'model_illustration' };
  }
  if (brand.includes('honda') && slug.includes('hr')) {
    return { url: '/vehicles/illustrations/honda/hrv.svg', isRealPhoto: false, type: 'model_illustration' };
  }
  if (brand.includes('hyundai') && slug.includes('tucson')) {
    return { url: '/vehicles/illustrations/hyundai/tucson.svg', isRealPhoto: false, type: 'model_illustration' };
  }
  if (brand.includes('hyundai') && slug.includes('elantra')) {
    return { url: '/vehicles/illustrations/hyundai/elantra.svg', isRealPhoto: false, type: 'model_illustration' };
  }
  if (brand.includes('hyundai') && slug.includes('santa')) {
    return { url: '/vehicles/illustrations/hyundai/santafe.svg', isRealPhoto: false, type: 'model_illustration' };
  }
  if (brand.includes('suzuki') && slug.includes('alto')) {
    return { url: '/vehicles/illustrations/suzuki/alto.svg', isRealPhoto: false, type: 'model_illustration' };
  }
  if (brand.includes('suzuki') && slug.includes('swift')) {
    return { url: '/vehicles/illustrations/suzuki/swift.svg', isRealPhoto: false, type: 'model_illustration' };
  }
  if (brand.includes('byd') && slug.includes('atto')) {
    return { url: '/vehicles/illustrations/byd/atto3.svg', isRealPhoto: false, type: 'model_illustration' };
  }
  if (brand.includes('byd') && slug.includes('seal')) {
    return { url: '/vehicles/illustrations/byd/seal.svg', isRealPhoto: false, type: 'model_illustration' };
  }
  if (brand.includes('deepal') && slug.includes('s07')) {
    return { url: '/vehicles/illustrations/deepal/s07.svg', isRealPhoto: false, type: 'model_illustration' };
  }
  if (brand.includes('deepal') && slug.includes('l07')) {
    return { url: '/vehicles/illustrations/deepal/l07.svg', isRealPhoto: false, type: 'model_illustration' };
  }
  if (brand.includes('haval') && slug.includes('h6')) {
    return { url: '/vehicles/illustrations/haval/h6.svg', isRealPhoto: false, type: 'model_illustration' };
  }
  if (brand.includes('mg') && slug.includes('hs')) {
    return { url: '/vehicles/illustrations/mg/hs.svg', isRealPhoto: false, type: 'model_illustration' };
  }
  if (brand.includes('changan') && slug.includes('alsvin')) {
    return { url: '/vehicles/illustrations/changan/alsvin.svg', isRealPhoto: false, type: 'model_illustration' };
  }
  if (brand.includes('changan') && (slug.includes('ochan') || slug.includes('oshan'))) {
    return { url: '/vehicles/illustrations/changan/ochanx7.svg', isRealPhoto: false, type: 'model_illustration' };
  }
  if (brand.includes('audi') && slug.includes('a6')) {
    return { url: '/vehicles/illustrations/audi/a6.svg', isRealPhoto: false, type: 'model_illustration' };
  }

  // 3. Category-specific illustration
  if (cat === 'van' || slug.includes('hiace')) {
    return { url: '/vehicles/illustrations/vamp/hiace.svg', isRealPhoto: false, type: 'category_illustration' };
  }
  if (cat === 'coaster' || cat === 'bus' || slug.includes('coaster')) {
    return { url: '/vehicles/illustrations/buses/coaster.svg', isRealPhoto: false, type: 'category_illustration' };
  }
  if (cat === 'suv' || cat === 'pickup') {
    return { url: '/vehicles/illustrations/toyota/fortuner.svg', isRealPhoto: false, type: 'category_illustration' };
  }
  if (cat === 'sedan' || cat === 'luxury') {
    return { url: '/vehicles/illustrations/toyota/corolla.svg', isRealPhoto: false, type: 'category_illustration' };
  }
  if (cat === 'hatchback') {
    return { url: '/vehicles/illustrations/suzuki/alto.svg', isRealPhoto: false, type: 'category_illustration' };
  }

  // 4. Generic automotive silhouette
  return { url: '/vehicles/illustrations/generic/silhouette.svg', isRealPhoto: false, type: 'generic_silhouette' };
}
