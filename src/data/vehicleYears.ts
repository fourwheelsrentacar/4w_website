export interface VehicleYearGroup {
  id: string;
  modelSlug: string;
  modelName: string;
  brandSlug: string;
  startYear: number;
  endYear: number;
  customerLabel: string;
  generation: string;
  heroPhoto: string;
  isFleetConfirmed: boolean;
  variants: string[];
  colors: string[];
  description: string;
}

export const VEHICLE_YEAR_GROUPS: VehicleYearGroup[] = [
  // --- TOYOTA COROLLA ---
  {
    id: 'corolla-2019-2020',
    modelSlug: 'toyota-corolla',
    modelName: 'Toyota Corolla',
    brandSlug: 'toyota',
    startYear: 2019,
    endYear: 2020,
    customerLabel: '2019–2020 Shape',
    generation: 'E170 Pre-facelift (GLi / Altis)',
    heroPhoto: '/vehicles/fleet/toyota-corolla/hero.webp',
    isFleetConfirmed: true,
    variants: ['Altis Grande 1.8', 'Altis 1.6', 'GLi 1.3/1.6'],
    colors: ['Super White', 'Attitude Black', 'Silver Metallic', 'Graphite'],
    description: 'E170 11th Gen pre-facelift Corolla, proven reliability for city and outstation rentals.'
  },
  {
    id: 'corolla-2021-2023',
    modelSlug: 'toyota-corolla',
    modelName: 'Toyota Corolla',
    brandSlug: 'toyota',
    startYear: 2021,
    endYear: 2023,
    customerLabel: '2021–2023 Altis X Shape',
    generation: 'E170 Altis X Facelift',
    heroPhoto: '/vehicles/fleet/toyota-corolla/hero.webp',
    isFleetConfirmed: true,
    variants: ['Altis Grande 1.8 X', 'Altis 1.6 X CVT'],
    colors: ['Super White', 'Attitude Black', 'Silver Metallic', 'Graphite'],
    description: 'Altis X facelift with bumper styling, sunroof, and climate control.'
  },
  {
    id: 'corolla-2024-2026',
    modelSlug: 'toyota-corolla',
    modelName: 'Toyota Corolla',
    brandSlug: 'toyota',
    startYear: 2024,
    endYear: 2026,
    customerLabel: '2024–2026 Current Shape',
    generation: 'E170 Altis X Current Facelift',
    heroPhoto: '/vehicles/fleet/toyota-corolla/hero.webp',
    isFleetConfirmed: true,
    variants: ['Altis Grande 1.8 X CVT', 'Altis 1.6 X Automatic'],
    colors: ['Super White', 'Attitude Black', 'Silver Metallic', 'Graphite'],
    description: 'Latest model-year Corolla with digital infotainment, push start, and executive comfort.'
  },

  // --- HONDA CIVIC ---
  {
    id: 'civic-2019-2021',
    modelSlug: 'honda-civic',
    modelName: 'Honda Civic',
    brandSlug: 'honda',
    startYear: 2019,
    endYear: 2021,
    customerLabel: '2019–2021 10th Gen Shape',
    generation: 'FC 10th Generation',
    heroPhoto: '/vehicles/fleet/honda-civic/hero.webp',
    isFleetConfirmed: true,
    variants: ['1.8 i-VTEC Oriel', '1.5 VTEC Turbo RS'],
    colors: ['Taffeta White', 'Crystal Black', 'Meteoroid Gray'],
    description: 'Iconic 10th Gen Civic fastback stance with digital gauge cluster and sunroof.'
  },
  {
    id: 'civic-2022-2026',
    modelSlug: 'honda-civic',
    modelName: 'Honda Civic',
    brandSlug: 'honda',
    startYear: 2022,
    endYear: 2026,
    customerLabel: '2022–2026 FE 11th Gen Shape',
    generation: 'FE 11th Generation',
    heroPhoto: '/vehicles/fleet/honda-civic/hero.webp',
    isFleetConfirmed: true,
    variants: ['RS Turbo 1.5L', 'Oriel 1.5L Turbo', 'Standard 1.5L Turbo'],
    colors: ['Meteoroid Gray', 'Crystal Black', 'Taffeta White', 'Urban Titanium'],
    description: 'Current 11th Gen executive sedan featuring Honda Sensing and honeycomb cockpit dash.'
  },

  // --- KIA SPORTAGE (STRICT SEPARATION RULE) ---
  {
    id: 'sportage-2019-2024',
    modelSlug: 'kia-sportage',
    modelName: 'Kia Sportage',
    brandSlug: 'kia',
    startYear: 2019,
    endYear: 2024,
    customerLabel: '2019–2024 Older Pakistan Shape',
    generation: 'QL 4th Generation',
    heroPhoto: '/vehicles/fleet/kia-sportage/older-ql.webp',
    isFleetConfirmed: true,
    variants: ['AWD 2.0L', 'FWD 2.0L', 'Alpha 2.0L'],
    colors: ['Clear White', 'Cherry Black', 'Panthera Metal'],
    description: '4th Gen QL Sportage with tiger-nose grille, panoramic sunroof, and 2.0L engine.'
  },
  {
    id: 'sportage-l-2025-2026',
    modelSlug: 'kia-sportage-l',
    modelName: 'Kia Sportage L',
    brandSlug: 'kia',
    startYear: 2025,
    endYear: 2026,
    customerLabel: '2025–2026 All-New Sportage L Current Shape',
    generation: 'NQ5 5th Generation (Sportage L)',
    heroPhoto: '/vehicles/fleet/kia-sportage/sportage-l.webp',
    isFleetConfirmed: false,
    variants: ['1.6L Turbo Hybrid AWD', '1.6L Turbo Hybrid FWD'],
    colors: ['Snow White Pearl', 'Fusion Black', 'Gravity Grey'],
    description: 'Official Kia Pakistan all-new Sportage L 1.6L Turbo Hybrid with boomerang LEDs and curved display.'
  },

  // --- KIA CARNIVAL (STRICT SEPARATION RULE) ---
  {
    id: 'carnival-2019-2020',
    modelSlug: 'kia-carnival',
    modelName: 'Kia Grand Carnival',
    brandSlug: 'kia',
    startYear: 2019,
    endYear: 2020,
    customerLabel: '2019–2020 YP Shape',
    generation: 'YP 3rd Generation',
    heroPhoto: '/vehicles/fleet/kia-carnival/older-yp.webp',
    isFleetConfirmed: true,
    variants: ['Executive 11-Seater 3.3L V6'],
    colors: ['Clear White', 'Aurora Black'],
    description: '3rd Gen YP Carnival 11-seater VIP van for executive group tours.'
  },
  {
    id: 'carnival-2021-2026',
    modelSlug: 'kia-carnival',
    modelName: 'Kia Grand Carnival',
    brandSlug: 'kia',
    startYear: 2021,
    endYear: 2026,
    customerLabel: '2021–2026 KA4 New Shape',
    generation: 'KA4 4th Generation',
    heroPhoto: '/vehicles/fleet/kia-carnival/ka4-facelift.webp',
    isFleetConfirmed: true,
    variants: ['Executive 11-Seater 3.5L V6', '7-Seater VIP Lounge'],
    colors: ['Snow White Pearl', 'Aurora Black Pearl', 'Panthera Metal'],
    description: '4th Gen KA4 Grand Carnival VIP MPV with dual sunroofs, power sliding doors, and leather lounge.'
  },

  // --- TOYOTA FORTUNER ---
  {
    id: 'fortuner-2019-2020',
    modelSlug: 'toyota-fortuner',
    modelName: 'Toyota Fortuner',
    brandSlug: 'toyota',
    startYear: 2019,
    endYear: 2020,
    customerLabel: '2019–2020 Pre-facelift Shape',
    generation: 'AN160 2nd Gen Pre-facelift',
    heroPhoto: '/vehicles/fleet/toyota-fortuner/hero.webp',
    isFleetConfirmed: true,
    variants: ['Sigma 4 2.8L Diesel', '2.7L VVTi Petrol'],
    colors: ['Super White', 'Attitude Black', 'Graphite'],
    description: 'AN160 2nd Gen 7-seater SUV for northern tours and family trips.'
  },
  {
    id: 'fortuner-2021-2026',
    modelSlug: 'toyota-fortuner',
    modelName: 'Toyota Fortuner',
    brandSlug: 'toyota',
    startYear: 2021,
    endYear: 2026,
    customerLabel: '2021–2026 Legender / Sigma 4 Shape',
    generation: 'AN160 2nd Gen Facelift',
    heroPhoto: '/vehicles/fleet/toyota-fortuner/hero.webp',
    isFleetConfirmed: true,
    variants: ['Legender 2.8L Diesel', 'Sigma 4 2.8L Diesel', 'G 2.7L Petrol'],
    colors: ['Super White', 'Attitude Black', 'Graphite'],
    description: 'Flagship Legender / Sigma 4 7-seater 4x4 SUV with aggressive LED headlights.'
  },

  // --- TOYOTA HILUX REVO ---
  {
    id: 'revo-2019-2020',
    modelSlug: 'toyota-revo',
    modelName: 'Toyota Hilux Revo',
    brandSlug: 'toyota',
    startYear: 2019,
    endYear: 2020,
    customerLabel: '2019–2020 Pre-facelift Shape',
    generation: 'VIII Generation Pre-facelift',
    heroPhoto: '/vehicles/fleet/toyota-revo/hero.webp',
    isFleetConfirmed: true,
    variants: ['Revo V 2.8L 4x4', 'Revo G 2.8L 4x4'],
    colors: ['Attitude Black', 'Super White', 'Silver'],
    description: 'Heavy duty 4x4 double cab pickup for field projects and northern expeditions.'
  },
  {
    id: 'revo-2021-2026',
    modelSlug: 'toyota-revo',
    modelName: 'Toyota Hilux Revo',
    brandSlug: 'toyota',
    startYear: 2021,
    endYear: 2026,
    customerLabel: '2021–2026 Rocco / V Shape',
    generation: 'VIII Generation Rocco Facelift',
    heroPhoto: '/vehicles/fleet/toyota-revo/hero.webp',
    isFleetConfirmed: true,
    variants: ['Rocco 2.8L 4x4', 'Revo V 2.8L 4x4'],
    colors: ['Attitude Black', 'Super White', 'Oxide Bronze'],
    description: 'Hilux Revo Rocco with matte black grille, bedliner, and high ground clearance.'
  },

  // --- SUZUKI SWIFT ---
  {
    id: 'swift-2019-2021',
    modelSlug: 'suzuki-swift',
    modelName: 'Suzuki Swift',
    brandSlug: 'suzuki',
    startYear: 2019,
    endYear: 2021,
    customerLabel: '2019–2021 3rd Gen Shape',
    generation: '3rd Generation (1.3L DLX)',
    heroPhoto: '/vehicles/fleet/suzuki-swift/hero.webp',
    isFleetConfirmed: false,
    variants: ['DLX 1.3L Automatic', 'DLX 1.3L Manual'],
    colors: ['Solid White', 'Silky Silver', 'Graphite Grey'],
    description: 'Classic 3rd Gen Swift 1.3L hatchback.'
  },
  {
    id: 'swift-2022-2026',
    modelSlug: 'suzuki-swift',
    modelName: 'Suzuki Swift',
    brandSlug: 'suzuki',
    startYear: 2022,
    endYear: 2026,
    customerLabel: '2022–2026 4th Gen Shape',
    generation: '4th Generation (1.2L K12M)',
    heroPhoto: '/vehicles/fleet/suzuki-swift/hero.webp',
    isFleetConfirmed: false,
    variants: ['GLX CVT 1.2L', 'GL CVT 1.2L'],
    colors: ['Solid White', 'Silky Silver', 'Mineral Grey'],
    description: '4th Gen Swift with paddle shifters, LED DRLs, and climate control.'
  },

  // --- HONDA CITY ---
  {
    id: 'city-2019-2020',
    modelSlug: 'honda-city',
    modelName: 'Honda City',
    brandSlug: 'honda',
    startYear: 2019,
    endYear: 2020,
    customerLabel: '2019–2020 5th Gen Shape',
    generation: '5th Generation (GM2/GM3)',
    heroPhoto: '/vehicles/fleet/honda-city/hero.webp',
    isFleetConfirmed: false,
    variants: ['1.5L Aspire Prosmatec', '1.3L i-VTEC'],
    colors: ['Taffeta White', 'Crystal Black', 'Urban Titanium'],
    description: '5th Gen Honda City sedan.'
  },
  {
    id: 'city-2021-2026',
    modelSlug: 'honda-city',
    modelName: 'Honda City',
    brandSlug: 'honda',
    startYear: 2021,
    endYear: 2026,
    customerLabel: '2021–2026 6th Gen Shape',
    generation: '6th Generation (GN1)',
    heroPhoto: '/vehicles/fleet/honda-city/hero.webp',
    isFleetConfirmed: false,
    variants: ['1.5L Aspire CVT', '1.2L CVT'],
    colors: ['Taffeta White', 'Crystal Black', 'Urban Titanium'],
    description: '6th Gen Honda City with LED headlights, push start, and 510L luggage boot.'
  },

  // --- SUZUKI ALTO ---
  {
    id: 'alto-2019-2026',
    modelSlug: 'suzuki-alto',
    modelName: 'Suzuki Alto',
    brandSlug: 'suzuki',
    startYear: 2019,
    endYear: 2026,
    customerLabel: '2019–2026 HA36 660cc Shape',
    generation: 'HA36 8th Generation',
    heroPhoto: '/vehicles/fleet/suzuki-alto/hero.webp',
    isFleetConfirmed: true,
    variants: ['VXL AGS 660cc', 'VXR 660cc'],
    colors: ['Solid White', 'Silky Silver', 'Cerulean Blue'],
    description: 'Ultra fuel-efficient 660cc hatchback for city commuting.'
  },

  // --- TOYOTA YARIS ---
  {
    id: 'yaris-2020-2026',
    modelSlug: 'toyota-yaris',
    modelName: 'Toyota Yaris',
    brandSlug: 'toyota',
    startYear: 2020,
    endYear: 2026,
    customerLabel: '2020–2026 XP150 Ativ Shape',
    generation: 'XP150 Ativ Sedan',
    heroPhoto: '/vehicles/fleet/toyota-yaris/hero.webp',
    isFleetConfirmed: true,
    variants: ['Ativ X 1.5L CVT', 'Ativ 1.3L CVT', 'GLi 1.3L CVT'],
    colors: ['Super White', 'Silver Metallic', 'Attitude Black'],
    description: 'Compact urban sedan offering high fuel economy and automatic drive.'
  },

  // --- BYD ATTO 3 ---
  {
    id: 'byd-atto3-2024-2026',
    modelSlug: 'byd-atto-3',
    modelName: 'BYD Atto 3',
    brandSlug: 'byd',
    startYear: 2024,
    endYear: 2026,
    customerLabel: '2024–2026 Current EV Shape',
    generation: 'BYD e-Platform 3.0',
    heroPhoto: '/vehicles/fleet/byd-atto3/hero.webp',
    isFleetConfirmed: false,
    variants: ['Extended Range 60.48 kWh'],
    colors: ['Ski White', 'Boulder Grey', 'Surf Blue', 'Parkour Red'],
    description: 'Official BYD Pakistan pure electric crossover with 420km range.'
  },

  // --- BYD SEAL ---
  {
    id: 'byd-seal-2024-2026',
    modelSlug: 'byd-seal',
    modelName: 'BYD Seal',
    brandSlug: 'byd',
    startYear: 2024,
    endYear: 2026,
    customerLabel: '2024–2026 Current Luxury EV Shape',
    generation: 'BYD Ocean Series CTB',
    heroPhoto: '/vehicles/fleet/byd-seal/hero.webp',
    isFleetConfirmed: false,
    variants: ['AWD Performance 82.5 kWh', 'Dynamic RWD'],
    colors: ['Aurora White', 'Atlantis Grey', 'Cosmos Black'],
    description: '523hp electric luxury sedan with 0-100 km/h in 3.8s.'
  },

  // --- DEEPAL S07 ---
  {
    id: 'deepal-s07-2024-2026',
    modelSlug: 'deepal-s07',
    modelName: 'Deepal S07',
    brandSlug: 'deepal',
    startYear: 2024,
    endYear: 2026,
    customerLabel: '2024–2026 Current Shape',
    generation: 'Changan Deepal EPA1',
    heroPhoto: '/vehicles/fleet/deepal-s07/hero.webp',
    isFleetConfirmed: false,
    variants: ['Pure EV 66.8 kWh', 'REEV Range Extender'],
    colors: ['Nebula Green', 'Lunar White', 'Eclipse Black'],
    description: 'Futuristic EV SUV with frameless doors and AR-HUD.'
  },

  // --- HAVAL H6 HEV ---
  {
    id: 'haval-h6-2022-2026',
    modelSlug: 'haval-h6',
    modelName: 'Haval H6',
    brandSlug: 'haval',
    startYear: 2022,
    endYear: 2026,
    customerLabel: '2022–2026 HEV / Turbo Shape',
    generation: 'GWM Lemon Platform',
    heroPhoto: '/vehicles/fleet/haval-h6/hero.webp',
    isFleetConfirmed: false,
    variants: ['1.5T HEV Hybrid (240 hp)', '2.0T AWD Petrol'],
    colors: ['Hamilton White', 'Ayers Grey', 'Sun Black'],
    description: '240hp locally assembled hybrid SUV with autonomous drive assist.'
  },

  // --- CHANGAN ALSVIN ---
  {
    id: 'changan-alsvin-2021-2026',
    modelSlug: 'changan-alsvin',
    modelName: 'Changan Alsvin',
    brandSlug: 'changan',
    startYear: 2021,
    endYear: 2026,
    customerLabel: '2021–2026 Current Shape',
    generation: '3rd Generation Alsvin',
    heroPhoto: '/vehicles/catalog/changan/alsvin.webp',
    isFleetConfirmed: false,
    variants: ['1.5L Lumiere DCT', '1.37L Comfort MT'],
    colors: ['Starlight Silver', 'Galaxy Black', 'Space Grey', 'Cosmic Red'],
    description: 'Smart compact sedan featuring electric sunroof, cruise control, and BlueCore engine.'
  },

  // --- CHANGAN OSHAN X7 ---
  {
    id: 'changan-oshan-x7-2022-2026',
    modelSlug: 'changan-oshan-x7',
    modelName: 'Changan Oshan X7',
    brandSlug: 'changan',
    startYear: 2022,
    endYear: 2026,
    customerLabel: '2022–2026 Current Shape',
    generation: '1st Generation Oshan X7',
    heroPhoto: '/vehicles/catalog/changan/oshan-x7.webp',
    isFleetConfirmed: false,
    variants: ['FutureSense 5-Seater', 'Comfort 7-Seater'],
    colors: ['Space Gray', 'Galaxy Black', 'Cosmic Red', 'Orbit White'],
    description: '185hp Turbo SUV with adaptive cruise control and panoramic sunroof.'
  },

  // --- HYUNDAI ELANTRA ---
  {
    id: 'hyundai-elantra-2021-2026',
    modelSlug: 'hyundai-elantra',
    modelName: 'Hyundai Elantra',
    brandSlug: 'hyundai',
    startYear: 2021,
    endYear: 2026,
    customerLabel: '2021–2026 6th Gen Facelift Shape',
    generation: 'AD 6th Generation Facelift',
    heroPhoto: '/vehicles/catalog/hyundai/elantra.webp',
    isFleetConfirmed: false,
    variants: ['2.0L GLS', '1.6L GL'],
    colors: ['Polar White', 'Phantom Black', 'Silver Metallic', 'Fiery Red'],
    description: 'Premium executive sedan with fluidic design and 2.0L Nu engine.'
  },

  // --- HYUNDAI TUCSON ---
  {
    id: 'hyundai-tucson-2020-2026',
    modelSlug: 'hyundai-tucson',
    modelName: 'Hyundai Tucson',
    brandSlug: 'hyundai',
    startYear: 2020,
    endYear: 2026,
    customerLabel: '2020–2026 Current Pakistan Shape',
    generation: 'TL 3rd Generation Facelift',
    heroPhoto: '/vehicles/catalog/hyundai/tucson.webp',
    isFleetConfirmed: false,
    variants: ['2.0L Ultimate AWD', '2.0L FWD'],
    colors: ['Polar White', 'Phantom Black', 'Oxford Blue'],
    description: 'High-comfort compact crossover with HTRAC AWD and panoramic sunroof.'
  },

  // --- MG HS ---
  {
    id: 'mg-hs-2021-2026',
    modelSlug: 'mg-hs',
    modelName: 'MG HS',
    brandSlug: 'mg',
    startYear: 2021,
    endYear: 2026,
    customerLabel: '2021–2026 Current Shape',
    generation: '1st Generation MG HS',
    heroPhoto: '/vehicles/catalog/mg/hs.webp',
    isFleetConfirmed: false,
    variants: ['1.5T Essence', '1.5T Exclusive'],
    colors: ['Pearl White', 'Black Pearl', 'Brixton Blue', 'Diamond Red'],
    description: 'Feature-rich British-designed turbo SUV with Trophy interior.'
  }
];

export function getYearGroupsByModel(modelSlug: string): VehicleYearGroup[] {
  return VEHICLE_YEAR_GROUPS.filter(g => g.modelSlug.toLowerCase() === modelSlug.toLowerCase() || g.id.includes(modelSlug.toLowerCase()));
}
