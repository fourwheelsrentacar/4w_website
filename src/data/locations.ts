export interface LocationRecord {
  city: string;
  slug: string;
  province: string;
  published: boolean;
  isMainHub: boolean;
  airport: string | null;
  serviceOverview: string;
  commonRoutes: string[];
  vehicleTypesAvailable: string[];
  faqs: { question: string; answer: string }[];
}

export const PAKISTAN_LOCATIONS: LocationRecord[] = [
  {
    city: 'Lahore',
    slug: 'lahore',
    province: 'Punjab',
    published: true,
    isMainHub: true,
    airport: 'Allama Iqbal International Airport (LHE)',
    serviceOverview: '4WHEELS primary head office and main fleet hub serving Johar Town, Gulberg, DHA, Model Town, and Lahore Airport with full self-drive and chauffeur services.',
    commonRoutes: ['Lahore to Islamabad M2', 'Lahore to Murree', 'Lahore to Faisalabad M3', 'Lahore to Multan M4'],
    vehicleTypesAvailable: ['Sedan', 'SUV', 'Hatchback', 'Van', 'Coaster', 'Luxury'],
    faqs: [
      {
        question: 'Where is the 4WHEELS head office in Lahore?',
        answer: 'Located at 5, F1, Block F1, Johar Town Phase 1, Lahore, Pakistan.'
      },
      {
        question: 'Is self-drive available in Lahore?',
        answer: 'Yes, self-drive rental is available in Lahore subject to document verification by customer care.'
      }
    ]
  },
  {
    city: 'Johar Town, Lahore',
    slug: 'johar-town-lahore',
    province: 'Punjab',
    published: true,
    isMainHub: true,
    airport: 'Allama Iqbal International Airport (LHE)',
    serviceOverview: 'Direct neighborhood service from the 4WHEELS physical branch in Johar Town Phase 1, Lahore.',
    commonRoutes: ['Johar Town to Lahore Airport', 'Johar Town to Gulberg', 'Johar Town to Islamabad'],
    vehicleTypesAvailable: ['Sedan', 'SUV', 'Hatchback', 'Van', 'Coaster'],
    faqs: [
      {
        question: 'How quickly can I pick up a car in Johar Town?',
        answer: 'Vehicles can be dispatched or picked up promptly from our Johar Town Phase 1 branch upon booking confirmation.'
      }
    ]
  },
  {
    city: 'Islamabad',
    slug: 'islamabad',
    province: 'Federal Capital',
    published: true,
    isMainHub: false,
    airport: 'Islamabad International Airport (ISB)',
    serviceOverview: 'Intercity transport service from Lahore to Islamabad and Rawalpindi in executive sedans, 4x4 SUVs, and passenger Coasters.',
    commonRoutes: ['Islamabad to Lahore M2', 'Islamabad to Murree', 'Islamabad Airport Transfers'],
    vehicleTypesAvailable: ['Sedan', 'SUV', 'Van', 'Coaster'],
    faqs: [
      {
        question: 'Does 4WHEELS provide driver travel from Lahore to Islamabad?',
        answer: 'Yes, chauffeur-driven outstation cars and group Coasters run daily between Lahore and Islamabad/Rawalpindi.'
      }
    ]
  },
  {
    city: 'Rawalpindi',
    slug: 'rawalpindi',
    province: 'Punjab',
    published: false, // withheld until verified local branch exists
    isMainHub: false,
    airport: 'Islamabad International Airport (ISB)',
    serviceOverview: 'Trip destination and intercity connection from Lahore.',
    commonRoutes: ['Rawalpindi to Lahore'],
    vehicleTypesAvailable: ['Sedan', 'SUV'],
    faqs: []
  },
  {
    city: 'Karachi',
    slug: 'karachi',
    province: 'Sindh',
    published: false, // withheld until verified local branch exists
    isMainHub: false,
    airport: 'Jinnah International Airport (KHI)',
    serviceOverview: 'Long distance travel enquiry.',
    commonRoutes: ['Lahore to Karachi'],
    vehicleTypesAvailable: ['Sedan'],
    faqs: []
  }
];

export function getPublishedLocations(): LocationRecord[] {
  return PAKISTAN_LOCATIONS.filter(loc => loc.published);
}

export function getLocationBySlug(slug: string): LocationRecord | undefined {
  return PAKISTAN_LOCATIONS.find(loc => loc.slug === slug);
}
