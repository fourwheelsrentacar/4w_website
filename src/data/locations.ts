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
        answer: 'Our official physical office is located at Plot number 5, Block F1, Johar Town Phase 1, Lahore, Pakistan.'
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
    lastReviewed: '2026-02-01'
  },
  {
    city: 'DHA, Lahore',
    slug: 'dha-lahore',
    province: 'Punjab',
    classification: 'SERVICE AREA',
    published: true,
    isMainHub: false,
    airport: 'Allama Iqbal International Airport (LHE)',
    serviceOverview: 'Doorstep vehicle delivery and chauffeur services across all phases of Defence Housing Authority (DHA Phases 1–9), Y Block, H Block, and DHA Raya.',
    commonRoutes: ['DHA to Lahore Airport', 'DHA to Gulberg', 'DHA to Islamabad M2'],
    vehicleTypesAvailable: ['SUV', 'Sedan', 'Luxury', 'Van'],
    faqs: [
      {
        question: 'Do you deliver cars directly to DHA Lahore?',
        answer: 'Yes, we provide direct doorstep delivery across Phase 1 to Phase 8 in DHA Lahore in 30 to 45 minutes.'
      }
    ],
    approxDistanceKmFromLahore: 12,
    lastReviewed: '2026-09-30'
  },
  {
    city: 'Gulberg, Lahore',
    slug: 'gulberg-lahore',
    province: 'Punjab',
    classification: 'SERVICE AREA',
    published: true,
    isMainHub: false,
    airport: 'Allama Iqbal International Airport (LHE)',
    serviceOverview: 'Corporate leasing and executive sedans serving Main Boulevard Gulberg, MM Alam Road, Liberty Market, Kalma Chowk, and business hotels.',
    commonRoutes: ['Gulberg to Lahore Airport', 'Gulberg to Johar Town', 'Gulberg to Islamabad M2'],
    vehicleTypesAvailable: ['Sedan', 'Luxury', 'SUV', 'Van'],
    faqs: [
      {
        question: 'Are executive corporate cars available in Gulberg?',
        answer: 'Yes, late-model executive sedans and SUVs with professional drivers are available for corporate and hotel guests.'
      }
    ],
    approxDistanceKmFromLahore: 10,
    lastReviewed: '2026-09-30'
  },
  {
    city: 'Bahria Town, Lahore',
    slug: 'bahria-town-lahore',
    province: 'Punjab',
    classification: 'SERVICE AREA',
    published: true,
    isMainHub: false,
    airport: 'Allama Iqbal International Airport (LHE)',
    serviceOverview: 'Doorstep family sedans, hatchbacks, and 24/7 airport transfers via Ring Road SL-3 serving Bahria Town Sectors A through F and Safari Villas.',
    commonRoutes: ['Bahria Town to Lahore Airport Ring Road', 'Bahria Town to Johar Town', 'Bahria Town to Islamabad M2'],
    vehicleTypesAvailable: ['Hatchback', 'Sedan', 'SUV'],
    faqs: [
      {
        question: 'How fast can I get a car in Bahria Town?',
        answer: 'Vehicles are dispatched via Ring Road and delivered to your doorstep in Bahria Town in ~30 minutes.'
      }
    ],
    approxDistanceKmFromLahore: 20,
    lastReviewed: '2026-09-30'
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
    faqs: [
      {
        question: 'How far is Multan from Lahore and what is the driving route?',
        answer: 'Multan is approximately 345 km from Lahore via the M-4 / M-3 Motorway network, with a typical driving time of 4 to 4.5 hours. 4WHEELS provides chauffeur-driven executive sedans, Fortuner SUVs, and commercial vans with experienced motorway drivers.'
      },
      {
        question: 'Can I hire a car with a driver for a same-day or multi-day trip to Multan?',
        answer: 'Yes, we cater to both same-day business visits and multi-day family trips. Driver overnight allowances and fuel arrangements are confirmed upfront with zero hidden charges.'
      },
      {
        question: 'Which vehicles are recommended for Lahore to Multan travel?',
        answer: 'Toyota Corolla Altis, Honda Civic, Toyota Fortuner, and HiAce Grand Cabin are most requested for comfortable motorway cruising and generous luggage capacity.'
      }
    ],
    approxDistanceKmFromLahore: 345,
    lastReviewed: '2026-10-02'
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
    faqs: [
      {
        question: 'How fast can I travel from Lahore to Sialkot via the M-11 Motorway?',
        answer: 'Travel time via the Lahore-Sialkot Motorway (M-11) is only about 1 hour and 15 to 30 minutes (approx. 130 km). It is one of our most popular corporate routes for business executives, exporters, and industrial visits.'
      },
      {
        question: 'Do you offer airport pick and drop for Sialkot International Airport (SKT)?',
        answer: 'Yes, 4WHEELS provides dedicated airport transfers between Lahore and Sialkot International Airport (SKT), with 24/7 flight tracking and doorstep pickup.'
      },
      {
        question: 'Are round-trip same-day corporate rentals available for Sialkot?',
        answer: 'Yes, executive sedans (such as Civic, Grande, or Audi A6) can be reserved for same-day round-trip business itineraries covering Sambrial, Daska, and Sialkot Export Processing Zone.'
      }
    ],
    approxDistanceKmFromLahore: 130,
    lastReviewed: '2026-10-02'
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
    faqs: [
      {
        question: 'Can I book a car with driver from Lahore to Peshawar?',
        answer: 'Yes, 4WHEELS arranges intercity chauffeur services from Lahore to Peshawar via the M-2 and M-1 Motorways (approx. 510 km, ~6 hours). Our professional drivers are well-versed in motorway navigation and rest stops.'
      },
      {
        question: 'Can we book a Coaster or Grand Cabin for a group delegation to Peshawar?',
        answer: 'Yes, executive 22-seater Toyota Coasters and 13-seater Grand Cabins are regularly chartered for corporate delegations, NGOs, and family groups traveling to Peshawar.'
      },
      {
        question: 'Are motorway toll taxes and driver meal/stay allowances included in outstation quotes?',
        answer: 'Motorway tolls and driver outstation night allowances are clearly itemized in your locked WhatsApp quotation before dispatch.'
      }
    ],
    approxDistanceKmFromLahore: 510,
    lastReviewed: '2026-10-02'
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
    faqs: [
      {
        question: 'How do I rent a car from Lahore to Abbottabad?',
        answer: 'You can book an outstation chauffeur-driven vehicle via WhatsApp (+92 321 6616644). The trip takes approximately 5.5 to 6 hours (460 km) via the M-2 and Hazara Motorway (M-15).'
      },
      {
        question: 'Which car is suitable for family travel to Abbottabad and PMA Kakul?',
        answer: 'Toyota Fortuner, Kia Sportage, and Toyota Corolla Grande are highly recommended for the gentle incline and spacious family seating.'
      },
      {
        question: 'Is self-drive allowed from Lahore to Abbottabad?',
        answer: 'Self-drive rentals for outstation journeys require advance document verification and security deposit clearance at our Johar Town office.'
      }
    ],
    approxDistanceKmFromLahore: 460,
    lastReviewed: '2026-10-02'
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
    faqs: [
      {
        question: 'Can I rent a car from Lahore to Nathia Gali and Galyat?',
        answer: 'Yes, 4WHEELS provides specialized mountain tour rentals from Lahore to Nathia Gali, Murree, and Ayubia with skilled mountain drivers.'
      },
      {
        question: 'Which vehicle type is recommended for steep hill stations like Nathia Gali?',
        answer: 'High ground clearance 4x4 SUVs such as the Toyota Fortuner Sigma 4, Toyota Prado, and Mitsubishi Pajero are strongly recommended for steep mountain gradients and varying weather conditions.'
      },
      {
        question: 'Can the car stay with us for multiple days in Nathia Gali?',
        answer: 'Yes, multi-day mountain retreat bookings are available. The driver and vehicle remain with you throughout the tour for local sightseeing.'
      }
    ],
    approxDistanceKmFromLahore: 470,
    lastReviewed: '2026-10-02'
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
    faqs: [
      {
        question: 'What is the best route and vehicle for traveling from Lahore to Swat Valley?',
        answer: 'Travel from Lahore to Swat (approx. 590 km, ~7.5 hours) proceeds via M-2 Motorway, M-1, M-16 (Swat Expressway) to Chakdara and Mingora. Toyota Fortuner 4x4, Prado, or HiAce Grand Cabin are ideal for passenger comfort and mountain terrain.'
      },
      {
        question: 'Do 4WHEELS drivers travel to Kalam, Malam Jabba, and upper Swat?',
        answer: 'Yes, our experienced drivers regularly navigate tourist routes to Mingora, Malam Jabba ski resort, and Kalam valley.'
      },
      {
        question: 'How can I get an exact quote for a 3-day or 5-day Swat tour?',
        answer: 'Message us on WhatsApp (+92 321 6616644) with your passenger count, travel dates, and desired itinerary to receive an exact fixed quote within 5 minutes.'
      }
    ],
    approxDistanceKmFromLahore: 590,
    lastReviewed: '2026-10-02'
  },
  {
    city: 'Model Town, Lahore',
    slug: 'model-town-lahore',
    province: 'Punjab',
    classification: 'SERVICE AREA',
    published: true,
    isMainHub: false,
    airport: 'Allama Iqbal International Airport (LHE)',
    serviceOverview: 'Executive car rental and family vehicle doorstep delivery across Model Town Blocks A through K, Model Town Link Road, and surrounding residential areas.',
    commonRoutes: ['Model Town to Lahore Airport', 'Model Town to Johar Town', 'Model Town to Islamabad M2'],
    vehicleTypesAvailable: ['Sedan', 'SUV', 'Hatchback', 'Luxury'],
    faqs: [
      {
        question: 'How quickly can a rental car be delivered to Model Town Lahore?',
        answer: 'From our Johar Town Phase 1 hub, delivery to Model Town Blocks A through K takes only 15 to 25 minutes upon WhatsApp booking confirmation.'
      },
      {
        question: 'Are self-drive and chauffeur-driven cars available in Model Town?',
        answer: 'Yes, both self-drive vehicles and professional chauffeur services are available for daily, weekly, or monthly rental.'
      }
    ],
    approxDistanceKmFromLahore: 6,
    lastReviewed: '2026-10-02'
  }
];

export function getPublishedLocations(): LocationRecord[] {
  return PAKISTAN_LOCATIONS.filter(loc => loc.published);
}

export function getLocationBySlug(slug: string): LocationRecord | undefined {
  return PAKISTAN_LOCATIONS.find(loc => loc.slug === slug);
}
