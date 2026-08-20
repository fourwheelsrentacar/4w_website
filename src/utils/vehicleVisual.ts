import type { Vehicle } from '../data/fleet';
import { resolveVehicleImage, type ResolvedVehicleImage } from './vehicleImageProvider';

export type VisualType = 'actual-fleet' | 'licensed-model' | 'automotive-api' | 'illustration' | 'fallback' | 'representative-photo' | 'model-illustration' | 'category-fallback' | 'generic-silhouette';

export interface VehicleVisualInfo {
  url: string;
  fallbackUrl: string;
  isRealPhoto: boolean;
  type: VisualType;
  label: string;
  alt?: string;
  meta?: any;
}

export function getImageLabel(type: string): string {
  switch (type) {
    case 'actual-fleet':
      return 'Actual 4WHEELS vehicle';
    case 'automotive-api':
      return 'Representative model visual. Actual rental vehicle/color may vary.';
    case 'licensed-model':
    case 'representative-photo':
      return 'Representative model image. Actual rental vehicle/color may vary.';
    case 'illustration':
    case 'model-illustration':
      return 'Model illustration. Actual rental vehicle/color may vary.';
    case 'fallback':
    case 'category-fallback':
    case 'generic-silhouette':
    default:
      return 'Temporary representative visual. Actual vehicle may differ.';
  }
}

export function getVehicleVisualUrl(vehicle: any): VehicleVisualInfo {
  const resolved: ResolvedVehicleImage = resolveVehicleImage(vehicle);

  return {
    url: resolved.imageUrl,
    fallbackUrl: resolved.fallbackUrl,
    isRealPhoto: resolved.type === 'actual-fleet' || resolved.type === 'licensed-model',
    type: resolved.type as VisualType,
    label: resolved.label,
    alt: vehicle.imageAlt || `${resolved.make} ${resolved.model} rental in Lahore`
  };
}
