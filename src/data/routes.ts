export interface RouteRecord {
  slug: string;
  title: string;
  origin: string;
  destination: string;
  distanceKm: number;
  drivingTimeHours: string;
  motorway: string;
  recommendedVehicles: string[];
  estimatedFuelLiters: number;
  estimatedTollPkr: number;
  overview: string;
  highlights: string[];
  faqs: { question: string; answer: string }[];
}

export const PAKISTAN_ROUTES: RouteRecord[] = [
  {
    slug: 'lahore-to-islamabad',
    title: 'Lahore to Islamabad M-2 Motorway Route Guide',
    origin: 'Lahore',
    destination: 'Islamabad / Rawalpindi',
    distanceKm: 375,
    drivingTimeHours: '4.5 to 5 Hours',
    motorway: 'M-2 Motorway (Requires M-Tag)',
    recommendedVehicles: ['Toyota Corolla', 'Honda Civic', 'Toyota Fortuner', 'Toyota Coaster'],
    estimatedFuelLiters: 32,
    estimatedTollPkr: 1100,
    overview: 'The M-2 Motorway connects Lahore (Thokar Niaz Baig) to Islamabad/Rawalpindi. It is Pakistan’s premier 6-lane access-controlled highway featuring full M-Tag electronic tolling and multiple international service areas.',
    highlights: [
      'Bhera Service Area (Middle point rest stop with restaurants & fuel)',
      'Kallar Kahar Salt Range section (Requires low gear engine braking)',
      'Sukheki & Chakri rest plazas'
    ],
    faqs: [
      {
        question: 'Is M-Tag mandatory for Lahore to Islamabad motorway?',
        answer: 'Yes, M-Tag electronic toll payment is mandatory at all M-2 motorway entry and exit toll plazas.'
      },
      {
        question: 'What is the best vehicle for Lahore to Islamabad travel?',
        answer: 'Sedans (Toyota Corolla or Honda Civic) provide smooth high-speed cruising, while Toyota Fortuner SUVs offer extra luggage capacity for families.'
      }
    ]
  },
  {
    slug: 'lahore-to-murree',
    title: 'Lahore to Murree Road Trip & Hill Station Route',
    origin: 'Lahore',
    destination: 'Murree / Patriata / Nathia Gali',
    distanceKm: 435,
    drivingTimeHours: '5.5 to 6 Hours',
    motorway: 'M-2 Motorway + Islamabad-Murree Expressway (N-75)',
    recommendedVehicles: ['Toyota Fortuner', 'Hyundai Tucson', 'Toyota Corolla', 'Toyota Coaster'],
    estimatedFuelLiters: 42,
    estimatedTollPkr: 1250,
    overview: 'Popular mountain road trip route from Lahore through Islamabad to the Murree hills and Galyat region. Features scenic mountain curves and cool pine forests.',
    highlights: [
      'Islamabad to Murree Expressway scenic dual carriageway',
      'Patriata Chairlift & Mall Road access',
      'Galyat connection toward Nathia Gali'
    ],
    faqs: [
      {
        question: 'Can I take a sedan car to Murree?',
        answer: 'Yes, sedans like Toyota Corolla easily reach Murree via the paved Expressway. For winter snow or inner steep roads, an SUV is recommended.'
      }
    ]
  },
  {
    slug: 'lahore-to-faisalabad',
    title: 'Lahore to Faisalabad M-3 Motorway Route Guide',
    origin: 'Lahore',
    destination: 'Faisalabad',
    distanceKm: 180,
    drivingTimeHours: '2 to 2.5 Hours',
    motorway: 'M-3 Motorway',
    recommendedVehicles: ['Toyota Yaris', 'Toyota Corolla', 'Honda Civic'],
    estimatedFuelLiters: 16,
    estimatedTollPkr: 500,
    overview: 'Direct express route connecting Punjab’s provincial capital to the textile hub of Faisalabad via M-3 Motorway.',
    highlights: ['Fast 2-hour commute', 'Nankana Sahib motorway exchange'],
    faqs: [
      {
        question: 'How fast can I reach Faisalabad from Johar Town Lahore?',
        answer: 'Joining the M-3 via Ring Road / Motorway interchange allows you to reach Faisalabad in under 2.5 hours.'
      }
    ]
  },
  {
    slug: 'lahore-to-multan',
    title: 'Lahore to Multan M-4 Motorway Route Guide',
    origin: 'Lahore',
    destination: 'Multan',
    distanceKm: 345,
    drivingTimeHours: '4 Hours',
    motorway: 'M-3 & M-4 Motorways',
    recommendedVehicles: ['Toyota Corolla', 'Honda Civic', 'Toyota Fortuner'],
    estimatedFuelLiters: 30,
    estimatedTollPkr: 950,
    overview: 'Seamless motorway travel from Lahore to Multan (City of Saints) passing Khanewal and Abdul Hakeem exchanges.',
    highlights: ['4-hour direct motorway corridor', 'Abdul Hakeem service area'],
    faqs: []
  },
  {
    slug: 'lahore-to-sialkot',
    title: 'Lahore to Sialkot M-11 Motorway Route Guide',
    origin: 'Lahore',
    destination: 'Sialkot / Sambrial',
    distanceKm: 130,
    drivingTimeHours: '1.5 Hours',
    motorway: 'M-11 Sialkot Motorway',
    recommendedVehicles: ['Toyota Yaris', 'Honda Civic', 'Toyota Corolla'],
    estimatedFuelLiters: 12,
    estimatedTollPkr: 400,
    overview: 'Rapid 90-minute motorway connection linking Lahore directly to Sialkot International Airport and export industrial hubs.',
    highlights: ['Fastest motorway connection in Punjab', 'Direct access to Sialkot Airport'],
    faqs: []
  }
];

export function getRouteBySlug(slug: string): RouteRecord | undefined {
  return PAKISTAN_ROUTES.find(r => r.slug === slug);
}
