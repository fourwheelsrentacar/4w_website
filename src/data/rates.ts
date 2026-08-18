export interface FuelRate {
  fuelType: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric' | 'PHEV';
  ratePerLitre: number; // in PKR
  effectiveDate: string;
  source: string;
  lastChecked: string;
}

export interface TollRoute {
  id: string;
  motorway: string;
  origin: string;
  destination: string;
  distanceKm: number;
  tollCarPkr: number;
  tollSuvPkr: number;
  tollCoasterBusPkr: number;
  effectiveDate: string;
  source: string;
}

export interface HotelBand {
  category: 'Economy' | 'Mid-range' | 'Premium' | 'Luxury';
  avgNightlyRatePkr: number;
  minRatePkr: number;
  maxRatePkr: number;
  description: string;
}

export const CURRENT_PETROLEUM_RATES: Record<string, FuelRate> = {
  Petrol: {
    fuelType: 'Petrol',
    ratePerLitre: 275.60,
    effectiveDate: '2026-08-16',
    source: 'OGRA Official Petroleum Price Notification',
    lastChecked: '2026-08-18'
  },
  Diesel: {
    fuelType: 'Diesel',
    ratePerLitre: 284.20,
    effectiveDate: '2026-08-16',
    source: 'OGRA Official Petroleum Price Notification',
    lastChecked: '2026-08-18'
  },
  Hybrid: {
    fuelType: 'Hybrid',
    ratePerLitre: 275.60,
    effectiveDate: '2026-08-16',
    source: 'OGRA Official Petroleum Price Notification',
    lastChecked: '2026-08-18'
  },
  PHEV: {
    fuelType: 'PHEV',
    ratePerLitre: 275.60,
    effectiveDate: '2026-08-16',
    source: 'OGRA Official Petroleum Price Notification',
    lastChecked: '2026-08-18'
  },
  Electric: {
    fuelType: 'Electric',
    ratePerLitre: 0,
    effectiveDate: '2026-08-16',
    source: 'K-Electric / LESCO Commercial EV Charging Tariff',
    lastChecked: '2026-08-18'
  }
};

export const COMMON_TOLL_ROUTES: TollRoute[] = [
  {
    id: 'lahore-islamabad-m2',
    motorway: 'M-2 Motorway',
    origin: 'Lahore',
    destination: 'Islamabad / Rawalpindi',
    distanceKm: 375,
    tollCarPkr: 1100,
    tollSuvPkr: 1650,
    tollCoasterBusPkr: 2500,
    effectiveDate: '2026-07-01',
    source: 'NHA Motorway Toll Tariff Revision July 2026'
  },
  {
    id: 'lahore-multan-m3',
    motorway: 'M-3 Motorway',
    origin: 'Lahore',
    destination: 'Multan',
    distanceKm: 315,
    tollCarPkr: 950,
    tollSuvPkr: 1400,
    tollCoasterBusPkr: 2100,
    effectiveDate: '2026-07-01',
    source: 'NHA Motorway Toll Tariff Revision July 2026'
  },
  {
    id: 'lahore-sialkot-m11',
    motorway: 'M-11 Motorway',
    origin: 'Lahore',
    destination: 'Sialkot',
    distanceKm: 103,
    tollCarPkr: 400,
    tollSuvPkr: 600,
    tollCoasterBusPkr: 900,
    effectiveDate: '2026-07-01',
    source: 'NHA Motorway Toll Tariff Revision July 2026'
  },
  {
    id: 'lahore-murree-via-m2',
    motorway: 'M-2 / Express Way',
    origin: 'Lahore',
    destination: 'Murree / Galiyat',
    distanceKm: 435,
    tollCarPkr: 1350,
    tollSuvPkr: 1950,
    tollCoasterBusPkr: 2900,
    effectiveDate: '2026-07-01',
    source: 'NHA Motorway Toll Tariff Revision July 2026'
  },
  {
    id: 'lahore-peshawar-m2-m1',
    motorway: 'M-2 + M-1 Motorway',
    origin: 'Lahore',
    destination: 'Peshawar',
    distanceKm: 490,
    tollCarPkr: 1550,
    tollSuvPkr: 2300,
    tollCoasterBusPkr: 3400,
    effectiveDate: '2026-07-01',
    source: 'NHA Motorway Toll Tariff Revision July 2026'
  },
  {
    id: 'lahore-local-ring-road',
    motorway: 'Lahore Ring Road (LRLA)',
    origin: 'Johar Town / Gulberg',
    destination: 'Lahore Airport / Northern Loop',
    distanceKm: 45,
    tollCarPkr: 120,
    tollSuvPkr: 180,
    tollCoasterBusPkr: 300,
    effectiveDate: '2026-07-01',
    source: 'Lahore Ring Road Authority Official Tariff'
  }
];

export const HOTEL_PLANNING_BANDS: Record<string, HotelBand> = {
  Economy: {
    category: 'Economy',
    avgNightlyRatePkr: 7500,
    minRatePkr: 5000,
    maxRatePkr: 10000,
    description: 'Clean, comfortable 2-star/3-star guest houses and budget tourist hotels.'
  },
  'Mid-range': {
    category: 'Mid-range',
    avgNightlyRatePkr: 16000,
    minRatePkr: 12000,
    maxRatePkr: 22000,
    description: 'Standard 3-star and 4-star boutique hotels with family amenities and breakfast.'
  },
  Premium: {
    category: 'Premium',
    avgNightlyRatePkr: 32000,
    minRatePkr: 25000,
    maxRatePkr: 45000,
    description: 'Luxury 4-star and 5-star brand hotels (e.g. Pearl Continental, Serena, Avari).'
  },
  Luxury: {
    category: 'Luxury',
    avgNightlyRatePkr: 60000,
    minRatePkr: 48000,
    maxRatePkr: 95000,
    description: 'Five-star executive suites, resort villas, and luxury mountain retreats.'
  }
};

export const FUEL_DISCLAIMER_TEXT = "Actual fuel consumption may vary according to traffic, route, passenger/load weight, AC usage, driving style and vehicle condition.";

export const ESTIMATE_DISCLAIMER_TEXT = "Planning estimate only. Final rental prices, fuel usage, tolls, hotel prices and other expenses may vary.";
