export type LocationClassification =
  | 'OFFICIAL LOCATION'
  | 'SERVICE AREA'
  | 'TRIP DESTINATION'
  | 'INTERCITY DESTINATION'
  | 'INFORMATIONAL LOCATION';

export interface LocationRecord {
  city: string;
  slug: string;
  province: string;
  classification: LocationClassification;
  published: boolean;
  isMainHub: boolean;
  airport: string | null;
  serviceOverview: string;
  commonRoutes: string[];
  vehicleTypesAvailable: string[];
  faqs: { question: string; answer: string }[];
  approxDistanceKmFromLahore?: number;
  lastReviewed: string;
}

export const PAKISTAN_LOCATIONS: LocationRecord[] = [
  {
    city: 'Lahore',
    slug: 'lahore',
    province: 'Punjab',
    classification: 'OFFICIAL LOCATION',
    published: true,
    isMainHub: true,
    airport: 'Allama Iqbal International Airport (LHE)',
    serviceOverview: '4WHEELS primary head office and physical fleet operations hub located in Johar Town Phase 1, serving Gulberg, DHA, Model Town, and Lahore Airport with full self-drive and chauffeur services.',
    commonRoutes: ['Lahore to Islamabad M2', 'Lahore to Murree', 'Lahore to Faisalabad M3', 'Lahore to Multan M4', 'Lahore to Sialkot M11'],
    vehicleTypesAvailable: ['Sedan', 'SUV', 'Hatchback', 'Van', 'Coaster', 'Luxury'],
    faqs: [
      {
        question: 'Where is the official 4WHEELS office in Lahore?',
        answer: 'Our official physical office is located at 5, F1, Block F1, Johar Town Phase 1, Lahore, Pakistan.'
      },
      {
        question: 'Is self-drive rental available in Lahore?',
        answer: 'Yes, self-drive rentals are available directly from our Johar Town office upon document verification.'
      }
    ],
    approxDistanceKmFromLahore: 0,
    lastReviewed: '2025-02-01'
  },
  {
    city: 'Johar Town, Lahore',
    slug: 'johar-town-lahore',
    province: 'Punjab',
    classification: 'OFFICIAL LOCATION',
    published: true,
    isMainHub: true,
    airport: 'Allama Iqbal International Airport (LHE)',
    serviceOverview: 'Direct neighborhood pickup and instant vehicle dispatch from 4WHEELS physical branch in Johar Town Phase 1, Lahore.',
    commonRoutes: ['Johar Town to Lahore Airport', 'Johar Town to Gulberg', 'Johar Town to Islamabad M2'],
    vehicleTypesAvailable: ['Sedan', 'SUV', 'Hatchback', 'Van', 'Coaster'],
    faqs: [
      {
        question: 'How quickly can I pick up a vehicle in Johar Town?',
        answer: 'Vehicles can be inspected and dispatched from our Johar Town Phase 1 branch upon booking confirmation on WhatsApp.'
      }
    ],
    approxDistanceKmFromLahore: 0,
    lastReviewed: '2025-02-01'
  },
  {
    city: 'Islamabad',
    slug: 'islamabad',
    province: 'Federal Capital',
    classification: 'INTERCITY DESTINATION',
    published: true,
    isMainHub: false,
    airport: 'Islamabad International Airport (ISB)',
    serviceOverview: 'Major intercity destination connected from Lahore via the M-2 Motorway. 4WHEELS provides chauffeur-driven outstation sedans, SUVs, and group Coasters from Lahore to Islamabad.',
    commonRoutes: ['Islamabad to Lahore M2', 'Islamabad to Murree', 'Islamabad Airport Transfers'],
    vehicleTypesAvailable: ['Sedan', 'SUV', 'Van', 'Coaster'],
    faqs: [
      {
        question: 'Does 4WHEELS have an official branch office in Islamabad?',
        answer: 'No. 4WHEELS physical head office is located exclusively in Johar Town, Lahore. Trips to Islamabad operate as intercity transfers with professional drivers.'
      }
    ],
    approxDistanceKmFromLahore: 375,
    lastReviewed: '2025-02-01'
  },
  {
    city: 'Rawalpindi',
    slug: 'rawalpindi',
    province: 'Punjab',
    classification: 'INTERCITY DESTINATION',
    published: true,
    isMainHub: false,
    airport: 'Islamabad International Airport (ISB)',
    serviceOverview: 'Intercity destination twin city to Islamabad, accessible via Lahore M-2 Motorway.',
    commonRoutes: ['Rawalpindi to Lahore M2', 'Rawalpindi to Murree'],
    vehicleTypesAvailable: ['Sedan', 'SUV', 'Coaster'],
    faqs: [
      {
        question: 'Can I book a car from Lahore to Rawalpindi?',
        answer: 'Yes, chauffeur-driven outstation cars and group Coasters run daily from Lahore to Rawalpindi.'
      }
    ],
    approxDistanceKmFromLahore: 365,
    lastReviewed: '2025-02-01'
  },
  {
    city: 'Murree',
    slug: 'murree',
    province: 'Punjab',
    classification: 'TRIP DESTINATION',
    published: true,
    isMainHub: false,
    airport: null,
    serviceOverview: 'Premier mountain hill station destination connected from Lahore via M-2 and Islamabad-Murree Expressway. High-clearance SUVs and executive sedans are frequently booked.',
    commonRoutes: ['Lahore to Murree', 'Islamabad to Murree'],
    vehicleTypesAvailable: ['SUV', 'Sedan', 'Coaster'],
    faqs: [
      {
        question: 'Which vehicle is best for travel from Lahore to Murree?',
        answer: 'Toyota Fortuner or Hyundai Tucson SUVs are recommended for mountain road stability and family comfort.'
      }
    ],
    approxDistanceKmFromLahore: 435,
    lastReviewed: '2025-02-01'
  },
  {
    city: 'Faisalabad',
    slug: 'faisalabad',
    province: 'Punjab',
    classification: 'INTERCITY DESTINATION',
    published: true,
    isMainHub: false,
    airport: 'Faisalabad International Airport (LYP)',
    serviceOverview: 'Industrial hub connected to Lahore via M-3 Motorway (approx 2.5 hours travel). Frequent business and corporate rental route.',
    commonRoutes: ['Lahore to Faisalabad M3'],
    vehicleTypesAvailable: ['Sedan', 'SUV', 'Coaster'],
    faqs: [
      {
        question: 'How long does driving from Lahore to Faisalabad take?',
        answer: 'Travel time via M-3 Motorway is approximately 2 to 2.5 hours.'
      }
    ],
    approxDistanceKmFromLahore: 180,
    lastReviewed: '2025-02-01'
  },
  {
    city: 'Multan',
    slug: 'multan',
    province: 'Punjab',
    classification: 'INTERCITY DESTINATION',
    published: true,
    isMainHub: false,
    airport: 'Multan International Airport (MUX)',
    serviceOverview: 'South Punjab commercial hub connected via M-4 Motorway.',
    commonRoutes: ['Lahore to Multan M4'],
    vehicleTypesAvailable: ['Sedan', 'SUV', 'Coaster'],
    faqs: [],
    approxDistanceKmFromLahore: 345,
    lastReviewed: '2025-02-01'
  },
  {
    city: 'Sialkot',
    slug: 'sialkot',
    province: 'Punjab',
    classification: 'SERVICE AREA',
    published: true,
    isMainHub: false,
    airport: 'Sialkot International Airport (SKT)',
    serviceOverview: 'Export hub connected via M-11 Motorway (approx 1.5 hours travel). Ideal for corporate business travel and airport pick & drop.',
    commonRoutes: ['Lahore to Sialkot M11'],
    vehicleTypesAvailable: ['Sedan', 'SUV'],
    faqs: [],
    approxDistanceKmFromLahore: 130,
    lastReviewed: '2025-02-01'
  },
  {
    city: 'Peshawar',
    slug: 'peshawar',
    province: 'Khyber Pakhtunkhwa',
    classification: 'INTERCITY DESTINATION',
    published: true,
    isMainHub: false,
    airport: 'Bacha Khan International Airport (PEW)',
    serviceOverview: 'Capital of KP connected via M-2 and M-1 Motorways from Lahore.',
    commonRoutes: ['Lahore to Peshawar M2/M1'],
    vehicleTypesAvailable: ['Sedan', 'SUV', 'Coaster'],
    faqs: [],
    approxDistanceKmFromLahore: 510,
    lastReviewed: '2025-02-01'
  },
  {
    city: 'Abbottabad',
    slug: 'abbottabad',
    province: 'Khyber Pakhtunkhwa',
    classification: 'TRIP DESTINATION',
    published: true,
    isMainHub: false,
    airport: null,
    serviceOverview: 'Gateway to Hazara region and Hazara Motorway (M-15). Popular road trip destination.',
    commonRoutes: ['Lahore to Abbottabad'],
    vehicleTypesAvailable: ['SUV', 'Sedan', 'Coaster'],
    faqs: [],
    approxDistanceKmFromLahore: 460,
    lastReviewed: '2025-02-01'
  },
  {
    city: 'Nathia Gali',
    slug: 'nathia-gali',
    province: 'Khyber Pakhtunkhwa',
    classification: 'TRIP DESTINATION',
    published: true,
    isMainHub: false,
    airport: null,
    serviceOverview: 'Scenic Galyat hill station accessed via Abbottabad or Murree.',
    commonRoutes: ['Lahore to Nathia Gali'],
    vehicleTypesAvailable: ['SUV'],
    faqs: [],
    approxDistanceKmFromLahore: 470,
    lastReviewed: '2025-02-01'
  },
  {
    city: 'Swat',
    slug: 'swat',
    province: 'Khyber Pakhtunkhwa',
    classification: 'TRIP DESTINATION',
    published: true,
    isMainHub: false,
    airport: 'Saidu Sharif Airport (SDW)',
    serviceOverview: 'Valley tourist destination accessed via Swat Expressway (M-16).',
    commonRoutes: ['Lahore to Swat'],
    vehicleTypesAvailable: ['SUV', 'Coaster'],
    faqs: [],
    approxDistanceKmFromLahore: 590,
    lastReviewed: '2025-02-01'
  }
];

export function getPublishedLocations(): LocationRecord[] {
  return PAKISTAN_LOCATIONS.filter(loc => loc.published);
}

export function getLocationBySlug(slug: string): LocationRecord | undefined {
  return PAKISTAN_LOCATIONS.find(loc => loc.slug === slug);
}
