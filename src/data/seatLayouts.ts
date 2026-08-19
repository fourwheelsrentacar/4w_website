export type SeatType = 'driver' | 'passenger' | 'empty' | 'aisle' | 'guide';

export interface SeatRow {
  row: number;
  seats: SeatType[];
  label?: string;
}

export interface LuggageFit {
  largeSuitcases: number;
  cabinBags: number;
  backpacks: number;
  description: string;
  isApproximate: boolean;
}

export interface ThirdRowBehavior {
  hasThirdRow: boolean;
  thirdRowFoldable: boolean;
  seatsUpCapacity: {
    passengers: number;
    luggage: LuggageFit;
  };
  thirdRowFoldedCapacity?: {
    passengers: number;
    luggage: LuggageFit;
  };
  note: string;
}

export interface SeatLayout {
  vehicleSlug: string;
  vehicleName: string;
  totalOccupants: number; // Maximum total occupants inside vehicle cabin
  maxPassengers: number; // Passenger count excluding driver
  driverIncluded: boolean;
  cabinType: 'sedan' | 'suv' | 'hatchback' | 'pickup' | 'van' | 'coaster' | 'luxury';
  aisleLayout: '1+1' | '1+2' | '2+2' | '2+3' | 'center-aisle' | 'none';
  rows: SeatRow[];
  luggageArea: LuggageFit;
  thirdRowBehavior?: ThirdRowBehavior;
  configurationSource: '4WHEELS Executive Configuration' | 'Official Manufacturer Specification' | '4WHEELS Verified Fleet';
  sourceNote: string;
  diagramSvgUrl: string;
  notes?: string;
}

export const SEAT_LAYOUTS: Record<string, SeatLayout> = {
  'toyota-corolla': {
    vehicleSlug: 'toyota-corolla',
    vehicleName: 'Toyota Corolla (Altis / Grandi)',
    totalOccupants: 5,
    maxPassengers: 4,
    driverIncluded: true,
    cabinType: 'sedan',
    aisleLayout: 'none',
    rows: [
      { row: 1, seats: ['driver', 'passenger'], label: 'Front Row' },
      { row: 2, seats: ['passenger', 'passenger', 'passenger'], label: 'Rear Row' }
    ],
    luggageArea: {
      largeSuitcases: 2,
      cabinBags: 2,
      backpacks: 1,
      description: 'Approx. 2 Large + 2 Cabin Bags in Rear Boot Trunk',
      isApproximate: true
    },
    configurationSource: '4WHEELS Verified Fleet',
    sourceNote: 'Indus Motor Company Official Sedan Spec & 4WHEELS Verified Fleet Inventory',
    diagramSvgUrl: '/vehicles/seating/corolla-5-seat.svg',
    notes: 'Standard 5-seat executive sedan cabin layout with dedicated 470L rear boot cargo trunk.'
  },
  'honda-civic': {
    vehicleSlug: 'honda-civic',
    vehicleName: 'Honda Civic (Oriel / RS Turbo)',
    totalOccupants: 5,
    maxPassengers: 4,
    driverIncluded: true,
    cabinType: 'sedan',
    aisleLayout: 'none',
    rows: [
      { row: 1, seats: ['driver', 'passenger'], label: 'Front Row' },
      { row: 2, seats: ['passenger', 'passenger', 'passenger'], label: 'Rear Row' }
    ],
    luggageArea: {
      largeSuitcases: 2,
      cabinBags: 2,
      backpacks: 1,
      description: 'Approx. 2 Large + 2 Cabin Bags in Trunk',
      isApproximate: true
    },
    configurationSource: '4WHEELS Verified Fleet',
    sourceNote: 'Honda Atlas Cars Pakistan Official Spec Sheet',
    diagramSvgUrl: '/vehicles/seating/corolla-5-seat.svg',
    notes: 'Low-slung 5-seat sport executive sedan layout with spacious 495L boot space.'
  },
  'toyota-yaris': {
    vehicleSlug: 'toyota-yaris',
    vehicleName: 'Toyota Yaris (Ativ X)',
    totalOccupants: 5,
    maxPassengers: 4,
    driverIncluded: true,
    cabinType: 'sedan',
    aisleLayout: 'none',
    rows: [
      { row: 1, seats: ['driver', 'passenger'], label: 'Front Row' },
      { row: 2, seats: ['passenger', 'passenger', 'passenger'], label: 'Rear Row' }
    ],
    luggageArea: {
      largeSuitcases: 2,
      cabinBags: 1,
      backpacks: 2,
      description: 'Approx. 2 Large + 1 Cabin Bag in Boot',
      isApproximate: true
    },
    configurationSource: '4WHEELS Verified Fleet',
    sourceNote: 'Indus Motor Company Official Specification Sheet',
    diagramSvgUrl: '/vehicles/seating/corolla-5-seat.svg'
  },
  'suzuki-alto': {
    vehicleSlug: 'suzuki-alto',
    vehicleName: 'Suzuki Alto (VXL / AGS)',
    totalOccupants: 4,
    maxPassengers: 3,
    driverIncluded: true,
    cabinType: 'hatchback',
    aisleLayout: 'none',
    rows: [
      { row: 1, seats: ['driver', 'passenger'], label: 'Front Row' },
      { row: 2, seats: ['passenger', 'passenger'], label: 'Rear Bench' }
    ],
    luggageArea: {
      largeSuitcases: 1,
      cabinBags: 2,
      backpacks: 1,
      description: 'Approx. 1 Large or 2 Cabin Bags in Rear Hatch',
      isApproximate: true
    },
    configurationSource: '4WHEELS Verified Fleet',
    sourceNote: 'Pak Suzuki Motor Company Official Specification Sheet',
    diagramSvgUrl: '/vehicles/seating/alto-4-seat.svg',
    notes: 'Compact 4-occupant city hatchback. Recommended for light luggage.'
  },
  'suzuki-swift': {
    vehicleSlug: 'suzuki-swift',
    vehicleName: 'Suzuki Swift (GLX CVT)',
    totalOccupants: 5,
    maxPassengers: 4,
    driverIncluded: true,
    cabinType: 'hatchback',
    aisleLayout: 'none',
    rows: [
      { row: 1, seats: ['driver', 'passenger'], label: 'Front Row' },
      { row: 2, seats: ['passenger', 'passenger', 'passenger'], label: 'Rear Bench' }
    ],
    luggageArea: {
      largeSuitcases: 1,
      cabinBags: 2,
      backpacks: 1,
      description: 'Approx. 1 Large + 2 Cabin Bags in Rear Hatch',
      isApproximate: true
    },
    configurationSource: 'Official Manufacturer Specification',
    sourceNote: 'Pak Suzuki Motor Company Official Specification Sheet',
    diagramSvgUrl: '/vehicles/seating/corolla-5-seat.svg'
  },
  'toyota-fortuner': {
    vehicleSlug: 'toyota-fortuner',
    vehicleName: 'Toyota Fortuner (Sigma 4 / Legender)',
    totalOccupants: 7,
    maxPassengers: 6,
    driverIncluded: true,
    cabinType: 'suv',
    aisleLayout: 'none',
    rows: [
      { row: 1, seats: ['driver', 'passenger'], label: 'Row 1 (Front)' },
      { row: 2, seats: ['passenger', 'passenger', 'passenger'], label: 'Row 2 (Middle)' },
      { row: 3, seats: ['passenger', 'passenger'], label: 'Row 3 (Foldable Rear)' }
    ],
    luggageArea: {
      largeSuitcases: 2,
      cabinBags: 2,
      backpacks: 2,
      description: 'Approx. 2 Large + 2 Cabin Bags (All Rows In Use)',
      isApproximate: true
    },
    thirdRowBehavior: {
      hasThirdRow: true,
      thirdRowFoldable: true,
      seatsUpCapacity: {
        passengers: 6,
        luggage: {
          largeSuitcases: 2,
          cabinBags: 2,
          backpacks: 2,
          description: 'Approx. 2 Large + 2 Cabin Bags',
          isApproximate: true
        }
      },
      thirdRowFoldedCapacity: {
        passengers: 4,
        luggage: {
          largeSuitcases: 4,
          cabinBags: 4,
          backpacks: 2,
          description: 'Approx. 4 Large + 4 Cabin Bags (Expanded Boot)',
          isApproximate: true
        }
      },
      note: 'Approximate luggage fit may vary depending on third-row use.'
    },
    configurationSource: '4WHEELS Verified Fleet',
    sourceNote: 'Indus Motor Company Official Specification Sheet & 4WHEELS Core Fleet Verification',
    diagramSvgUrl: '/vehicles/seating/fortuner-7-seat.svg',
    notes: 'Versatile 7-seat SUV. Folding the 3rd row expands luggage capacity from 296L to 716L.'
  },
  'toyota-revo': {
    vehicleSlug: 'toyota-revo',
    vehicleName: 'Toyota Hilux Revo (Rocco / V)',
    totalOccupants: 5,
    maxPassengers: 4,
    driverIncluded: true,
    cabinType: 'pickup',
    aisleLayout: 'none',
    rows: [
      { row: 1, seats: ['driver', 'passenger'], label: 'Cabin Row 1' },
      { row: 2, seats: ['passenger', 'passenger', 'passenger'], label: 'Cabin Row 2' }
    ],
    luggageArea: {
      largeSuitcases: 6,
      cabinBags: 4,
      backpacks: 4,
      description: 'Heavy Cargo Payload in Open Pickup Trunk Deck',
      isApproximate: true
    },
    configurationSource: '4WHEELS Verified Fleet',
    sourceNote: 'Indus Motor Company Official Specification Sheet',
    diagramSvgUrl: '/vehicles/seating/corolla-5-seat.svg',
    notes: 'Double-cab 4x4 pickup. Passengers travel in air-conditioned cabin while heavy luggage sits in the rear open bed.'
  },
  'toyota-hiace': {
    vehicleSlug: 'toyota-hiace',
    vehicleName: 'Toyota HiAce Grand Cabin (13-Seater Van)',
    totalOccupants: 13,
    maxPassengers: 12,
    driverIncluded: true,
    cabinType: 'van',
    aisleLayout: '1+2',
    rows: [
      { row: 1, seats: ['driver', 'passenger'], label: 'Front Cockpit' },
      { row: 2, seats: ['passenger', 'aisle', 'passenger', 'passenger'], label: 'Row 2' },
      { row: 3, seats: ['passenger', 'aisle', 'passenger', 'passenger'], label: 'Row 3' },
      { row: 4, seats: ['passenger', 'passenger', 'passenger', 'passenger'], label: 'Rear Bench' }
    ],
    luggageArea: {
      largeSuitcases: 8,
      cabinBags: 6,
      backpacks: 4,
      description: 'Approx. 8 Large Suitcases in Rear Cargo Deck',
      isApproximate: true
    },
    configurationSource: '4WHEELS Verified Fleet',
    sourceNote: '4WHEELS Fleet Verification & Toyota Indus HiAce Specification Sheet',
    diagramSvgUrl: '/vehicles/seating/hiace-13-seat.svg',
    notes: 'Executive high-roof passenger van. Walkable aisle row entry and generous rear cargo deck for airport groups.'
  },
  'toyota-coaster': {
    vehicleSlug: 'toyota-coaster',
    vehicleName: 'Toyota Coaster Saloon (Custom 22-Seater Executive)',
    totalOccupants: 22,
    maxPassengers: 21,
    driverIncluded: true,
    cabinType: 'coaster',
    aisleLayout: '1+2',
    rows: [
      { row: 1, seats: ['driver', 'aisle', 'guide'], label: 'Front / Driver & Guide' },
      { row: 2, seats: ['passenger', 'aisle', 'passenger', 'passenger'], label: 'Executive Row 1' },
      { row: 3, seats: ['passenger', 'aisle', 'passenger', 'passenger'], label: 'Executive Row 2' },
      { row: 4, seats: ['passenger', 'aisle', 'passenger', 'passenger'], label: 'Executive Row 3' },
      { row: 5, seats: ['passenger', 'aisle', 'passenger', 'passenger'], label: 'Executive Row 4' },
      { row: 6, seats: ['passenger', 'aisle', 'passenger', 'passenger'], label: 'Executive Row 5' },
      { row: 7, seats: ['passenger', 'passenger', 'passenger', 'passenger', 'passenger'], label: 'Rear Lounge Row' }
    ],
    luggageArea: {
      largeSuitcases: 14,
      cabinBags: 10,
      backpacks: 8,
      description: 'Approx. 12 - 15 Large Bags in Rear Cargo Trunk & Overhead Racks',
      isApproximate: true
    },
    configurationSource: '4WHEELS Executive Configuration',
    sourceNote: '4WHEELS Custom Executive 22-Seat Saloon Layout (Distinguished from factory 29-seat commuter model)',
    diagramSvgUrl: '/vehicles/seating/coaster-22-seat.svg',
    notes: 'Customized 22-seat saloon arrangement for extra passenger legroom, wide center aisle, plush leather recliners, and dual AC.'
  },
  'audi-a6': {
    vehicleSlug: 'audi-a6',
    vehicleName: 'Audi A6 (1.8 / 2.0 TFSI Executive)',
    totalOccupants: 5,
    maxPassengers: 4,
    driverIncluded: true,
    cabinType: 'luxury',
    aisleLayout: 'none',
    rows: [
      { row: 1, seats: ['driver', 'passenger'], label: 'Front Row' },
      { row: 2, seats: ['passenger', 'passenger', 'passenger'], label: 'Rear Executive Lounge' }
    ],
    luggageArea: {
      largeSuitcases: 3,
      cabinBags: 2,
      backpacks: 1,
      description: 'Approx. 3 Large Bags in 530L Trunk',
      isApproximate: true
    },
    configurationSource: '4WHEELS Verified Fleet',
    sourceNote: 'Audi Pakistan Official Specification Sheet',
    diagramSvgUrl: '/vehicles/seating/corolla-5-seat.svg'
  },
  'hyundai-tucson': {
    vehicleSlug: 'hyundai-tucson',
    vehicleName: 'Hyundai Tucson (Ultimate 2.0L)',
    totalOccupants: 5,
    maxPassengers: 4,
    driverIncluded: true,
    cabinType: 'suv',
    aisleLayout: 'none',
    rows: [
      { row: 1, seats: ['driver', 'passenger'], label: 'Front Row' },
      { row: 2, seats: ['passenger', 'passenger', 'passenger'], label: 'Rear Bench' }
    ],
    luggageArea: {
      largeSuitcases: 3,
      cabinBags: 2,
      backpacks: 2,
      description: 'Approx. 3 Large Suitcases in 539L Cargo Boot',
      isApproximate: true
    },
    configurationSource: 'Official Manufacturer Specification',
    sourceNote: 'Hyundai Nishat Motor Pakistan Official Spec',
    diagramSvgUrl: '/vehicles/seating/corolla-5-seat.svg'
  },
  'hyundai-santa-fe': {
    vehicleSlug: 'hyundai-santa-fe',
    vehicleName: 'Hyundai Santa Fe Hybrid (7-Seater)',
    totalOccupants: 7,
    maxPassengers: 6,
    driverIncluded: true,
    cabinType: 'suv',
    aisleLayout: 'none',
    rows: [
      { row: 1, seats: ['driver', 'passenger'], label: 'Row 1' },
      { row: 2, seats: ['passenger', 'passenger', 'passenger'], label: 'Row 2' },
      { row: 3, seats: ['passenger', 'passenger'], label: 'Row 3' }
    ],
    luggageArea: {
      largeSuitcases: 2,
      cabinBags: 3,
      backpacks: 2,
      description: 'Approx. 2 Large + 3 Cabin Bags (Seats Up)',
      isApproximate: true
    },
    thirdRowBehavior: {
      hasThirdRow: true,
      thirdRowFoldable: true,
      seatsUpCapacity: {
        passengers: 6,
        luggage: {
          largeSuitcases: 2,
          cabinBags: 3,
          backpacks: 2,
          description: 'Approx. 2 Large Bags (3rd Row Up)',
          isApproximate: true
        }
      },
      thirdRowFoldedCapacity: {
        passengers: 4,
        luggage: {
          largeSuitcases: 5,
          cabinBags: 4,
          backpacks: 2,
          description: 'Approx. 5 Large Bags (3rd Row Folded)',
          isApproximate: true
        }
      },
      note: 'Approximate luggage fit may vary depending on third-row use.'
    },
    configurationSource: 'Official Manufacturer Specification',
    sourceNote: 'Hyundai Nishat Motor Pakistan Official Spec',
    diagramSvgUrl: '/vehicles/seating/fortuner-7-seat.svg'
  },
  'changan-ochan-x7': {
    vehicleSlug: 'changan-ochan-x7',
    vehicleName: 'Changan Oshan X7 (7-Seater SUV)',
    totalOccupants: 7,
    maxPassengers: 6,
    driverIncluded: true,
    cabinType: 'suv',
    aisleLayout: 'none',
    rows: [
      { row: 1, seats: ['driver', 'passenger'], label: 'Row 1' },
      { row: 2, seats: ['passenger', 'passenger', 'passenger'], label: 'Row 2' },
      { row: 3, seats: ['passenger', 'passenger'], label: 'Row 3' }
    ],
    luggageArea: {
      largeSuitcases: 2,
      cabinBags: 2,
      backpacks: 2,
      description: 'Approx. 2 Large + 2 Cabin Bags (Seats Up)',
      isApproximate: true
    },
    thirdRowBehavior: {
      hasThirdRow: true,
      thirdRowFoldable: true,
      seatsUpCapacity: {
        passengers: 6,
        luggage: {
          largeSuitcases: 2,
          cabinBags: 2,
          backpacks: 2,
          description: 'Approx. 2 Large Bags',
          isApproximate: true
        }
      },
      thirdRowFoldedCapacity: {
        passengers: 4,
        luggage: {
          largeSuitcases: 4,
          cabinBags: 3,
          backpacks: 2,
          description: 'Approx. 4 Large Bags (Folded)',
          isApproximate: true
        }
      },
      note: 'Approximate luggage fit may vary depending on third-row use.'
    },
    configurationSource: 'Official Manufacturer Specification',
    sourceNote: 'Changan Auto Pakistan Official Spec',
    diagramSvgUrl: '/vehicles/seating/fortuner-7-seat.svg'
  }
};

export function getSeatLayoutBySlug(slug: string): SeatLayout {
  const normalized = slug.toLowerCase();
  if (SEAT_LAYOUTS[normalized]) {
    return SEAT_LAYOUTS[normalized];
  }

  // Fallbacks by category key match
  if (normalized.includes('corolla') || normalized.includes('civic') || normalized.includes('city') || normalized.includes('elantra') || normalized.includes('alsvin')) {
    return SEAT_LAYOUTS['toyota-corolla'];
  }
  if (normalized.includes('fortuner') || normalized.includes('santa') || normalized.includes('oshan') || normalized.includes('ochan')) {
    return SEAT_LAYOUTS['toyota-fortuner'];
  }
  if (normalized.includes('tucson') || normalized.includes('hrv') || normalized.includes('cross') || normalized.includes('atto') || normalized.includes('s07') || normalized.includes('hs') || normalized.includes('h6') || normalized.includes('jolion') || normalized.includes('zs')) {
    return SEAT_LAYOUTS['hyundai-tucson'];
  }
  if (normalized.includes('hiace') || normalized.includes('van')) {
    return SEAT_LAYOUTS['toyota-hiace'];
  }
  if (normalized.includes('coaster') || normalized.includes('bus') || normalized.includes('coach')) {
    return SEAT_LAYOUTS['toyota-coaster'];
  }
  if (normalized.includes('alto') || normalized.includes('swift')) {
    return SEAT_LAYOUTS['suzuki-alto'];
  }
  if (normalized.includes('revo') || normalized.includes('hilux') || normalized.includes('pickup')) {
    return SEAT_LAYOUTS['toyota-revo'];
  }

  // Generic 5-seat fallback
  return SEAT_LAYOUTS['toyota-corolla'];
}
