export interface GuideArticle {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  directAnswer: string;
  keyFacts: { label: string; value: string }[];
  contentSections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
  urduSummary?: string;
  sources: { title: string; url?: string }[];
  datePublished: string;
  dateModified: string;
  lastReviewed: string;
  contentStatus: 'Fresh' | 'Review Soon' | 'Needs Update' | 'Outdated' | 'Archive Candidate';
  author: string;
  relatedVehicleSlug?: string;
  relatedRouteSlug?: string;
}

export const GUIDE_CATEGORIES = [
  'Rental Basics',
  'Self Drive',
  'Cars With Driver',
  'Vehicles Choice',
  'Trip Planning',
  'Corporate Mobility',
  'Airport Travel',
  'Tours',
  'Buses & Coasters',
  'Wedding & Events',
  'Rental Rules',
  'Passenger & Luggage',
  'Pakistan Destinations',
  'Routes'
];

export const GUIDE_ARTICLES: GuideArticle[] = [
  {
    slug: 'how-to-rent-a-car-in-lahore',
    title: 'How to Rent a Car in Lahore: Complete 2025 Guide',
    category: 'Rental Basics',
    excerpt: 'Step-by-step guide to renting a car in Lahore, covering CNIC/passport requirements, self-drive eligibility, chauffeur options, fuel policies, and booking workflows.',
    directAnswer: 'To rent a car in Lahore with 4WHEELS Rent a Car, select your preferred vehicle and rental option (Self-Drive or With Driver). For self-drive, provide a valid Pakistani CNIC or overseas passport along with a valid driving license. Booking inquiries are submitted via the online booking configurator and verified directly by 4WHEELS Customer Care on WhatsApp.',
    keyFacts: [
      { label: 'Minimum Driving Age', value: '21 years old' },
      { label: 'Required Documents (Self-Drive)', value: 'Original CNIC / Passport + Valid Driving License' },
      { label: 'Chauffeur Option Available', value: 'Yes, trained professional drivers across Pakistan' },
      { label: 'Fuel Policy', value: 'Full-to-Full or Outstation Petrol Allowance' },
      { label: 'Head Office', value: '5, F1, Block F1, Johar Town Phase 1, Lahore' }
    ],
    contentSections: [
      {
        heading: '1. Choosing Between Self-Drive and Chauffeur Service',
        body: 'In Lahore, rental cars are offered with two distinct modes: Self-Drive and With Driver (Chauffeur). Self-drive gives you maximum privacy and freedom within city limits or verified intercity routes. Chauffeur service includes a local, experienced driver who handles city traffic, parking, and motorway tolls, allowing you to relax or focus on business.'
      },
      {
        heading: '2. Required Verification Documents',
        body: 'To ensure safety and vehicle security, self-drive rentals require a valid Original CNIC or passport, a valid driving license, and contact verification. For chauffeur-driven rentals, standard contact details and pickup location are required.'
      },
      {
        heading: '3. Understanding Rental Day & Duration Calculation',
        body: 'Rental periods at 4WHEELS are calculated on a standard 24-hour calendar day basis. Returning a vehicle past the agreed cutoff time incurs standard hourly or full-day extension charges.'
      },
      {
        heading: '4. Motorway Tolls, M-Tag & Challans',
        body: 'Motorway travel across M-2 (Islamabad), M-3 (Faisalabad), and M-[4/11] requires an active M-Tag balance. Traffic challans or motorway penalties incurred during a self-drive rental period remain the responsibility of the driver.'
      }
    ],
    faqs: [
      {
        question: 'Can overseas Pakistanis rent a car in Lahore?',
        answer: 'Yes! Overseas Pakistanis can easily rent vehicles by providing a valid passport, overseas/NICOP ID, and a valid national or international driving license.'
      },
      {
        question: 'What is the fuel policy for rental cars?',
        answer: 'Vehicles are provided with standard fuel levels and should be returned with the same fuel level (Full-to-Full basis), unless explicitly included in an outstation package.'
      }
    ],
    urduSummary: 'لاہور میں گاڑی کرائے پر لینے کے لیے اپنا قومی شناختی کارڈ اور ڈرائیونگ لائسنس فراہم کریں۔ سیلف ڈرائیو اور ڈرائیور کے ساتھ دونوں سہولیات دستیاب ہیں۔',
    sources: [
      { title: '4WHEELS Official Rental Policy' },
      { title: 'National Highway & Motorway Police (NHMP) Rules' }
    ],
    datePublished: '2025-01-10',
    dateModified: '2025-02-01',
    lastReviewed: '2026-08-18',
    contentStatus: 'Fresh',
    author: '4WHEELS Editorial Team'
  },
  {
    slug: 'self-drive-vs-car-with-driver-lahore',
    title: 'Self Drive vs Car With Driver in Lahore: Which Should You Choose?',
    category: 'Self Drive',
    excerpt: 'Detailed comparison of self-drive rental versus renting a car with a driver in Lahore and across Punjab.',
    directAnswer: 'Choose Self-Drive if you value personal privacy, flexible local commuting, and hold a valid Pakistani or international driving license. Choose Car With Driver if you want stress-free travel through congested urban traffic, outstation motorway routes (Lahore to Islamabad/Murree), or family trips where a local driver manages parking and directions.',
    keyFacts: [
      { label: 'Best for City Privacy', value: 'Self Drive' },
      { label: 'Best for Outstation Travel', value: 'Car With Driver' },
      { label: 'Parking Responsibility', value: 'Driver manages parking on Chauffeur rentals' },
      { label: 'Document Verification', value: 'Required for Self-Drive' }
    ],
    contentSections: [
      {
        heading: 'Self-Drive Pros & Cons in Lahore',
        body: 'Self-drive provides total freedom for personal errands, business meetings in Gulberg/DHA, and family outings. However, navigating peak-hour traffic on Ferozepur Road or Ring Road requires active driving attention.'
      },
      {
        heading: 'Chauffeur-Driven Benefits',
        body: 'Renting with a driver eliminates driving fatigue on long highway trips like Lahore to Murree or Peshawar. 4WHEELS drivers are courteous, route-knowledgeable, and familiar with motorway safety protocols.'
      }
    ],
    faqs: [
      {
        question: 'Does driver rental cost significantly more?',
        answer: 'Driver rental fees are structured as a daily driver allowance, providing high value for long-distance and outstation travel.'
      }
    ],
    sources: [
      { title: '4WHEELS Customer Operations Guide' }
    ],
    datePublished: '2025-01-12',
    dateModified: '2025-02-01',
    lastReviewed: '2026-08-18',
    contentStatus: 'Fresh',
    author: '4WHEELS Editorial Team'
  },
  {
    slug: 'sedan-vs-suv-for-lahore-road-trips',
    title: 'Sedan vs SUV for Pakistan Road Trips: Choosing the Best Vehicle',
    category: 'Vehicles Choice',
    excerpt: 'Comparing sedans (Corolla, Civic, Yaris) with 4x4 SUVs (Fortuner, Tucson, Revo) for urban commuting and Northern Areas travel.',
    directAnswer: 'Sedans (like Toyota Corolla or Honda Civic) are ideal for smooth motorway cruising (Lahore to Islamabad or Faisalabad), fuel efficiency, and urban city driving. SUVs (like Toyota Fortuner or Hyundai Tucson) are recommended for rough terrain, family road trips to Murree or Swat, high ground clearance, and 7-passenger capacity.',
    keyFacts: [
      { label: 'Best Fuel Efficiency', value: 'Sedans (Corolla / Yaris / Civic)' },
      { label: 'Best for Mountain Routes', value: 'SUVs (Fortuner / Revo / Tucson)' },
      { label: 'Passenger Capacity', value: 'Sedan (4-5 adults) | SUV (5-7 adults)' }
    ],
    contentSections: [
      {
        heading: 'Sedan Advantages: Comfort & Fuel Economy',
        body: 'Sedans excel on high-speed motorways like M-2. They offer low drag, smooth suspension, and comfortable seating for up to 4 adult passengers with 2 large suitcases.'
      },
      {
        heading: 'SUV Advantages: Clearance & Seating Capacity',
        body: 'When traveling with large families or heavy luggage toward hilly destinations like Nathia Gali or Naran, the high seating stance, 4WD traction, and spacious cabin of a Toyota Fortuner provide maximum safety.'
      }
    ],
    faqs: [
      {
        question: 'Can a sedan go to Murree?',
        answer: 'Yes, sedans like Toyota Corolla easily navigate the paved Islamabad-Murree Expressway. However, for snow or steep inner mountain tracks, an SUV is preferred.'
      }
    ],
    sources: [
      { title: 'Toyota Pakistan Specifications' }
    ],
    datePublished: '2025-01-15',
    dateModified: '2025-02-01',
    lastReviewed: '2026-08-18',
    contentStatus: 'Fresh',
    author: '4WHEELS Editorial Team'
  },
  {
    slug: 'toyota-fortuner-rental-guide-pakistan',
    title: 'Toyota Fortuner Rental Guide: Engine, Fuel & Seating Specs',
    category: 'Vehicle Models',
    excerpt: 'Detailed overview of renting a Toyota Fortuner SUV in Lahore for executive travel, weddings, and Northern Pakistan tours.',
    directAnswer: 'The Toyota Fortuner is Pakistan’s leading 7-seater SUV, available in 2.7L Petrol, 2.8L Sigma 4 Diesel, and Legender variants. It features 4x4 drive, 80-liter fuel tank, and seating for up to 7 passengers, making it the top choice for weddings, VIP corporate delegations, and mountain tours.',
    keyFacts: [
      { label: 'Engine Displacement', value: '2694cc (Petrol) / 2755cc (Diesel Turbo)' },
      { label: 'Seating Capacity', value: '7 Passengers' },
      { label: 'Fuel Tank Capacity', value: '80 Liters' },
      { label: 'Best Uses', value: 'Weddings, VIP Business, Northern Area Tours' }
    ],
    contentSections: [
      {
        heading: 'Engine Specs & Drive Dynamics',
        body: 'Equipped with a high-torque 2.8L Turbo Diesel engine or smooth 2.7L Petrol engine paired with a 6-speed automatic transmission, the Fortuner delivers exceptional climbing power on steep gradients.'
      },
      {
        heading: 'Passenger & Luggage Arrangement',
        body: 'With all 3 rows up, the rear cargo area holds 2 cabin bags. Folding the 3rd row expands luggage capacity for up to 5 large suitcases.'
      }
    ],
    faqs: [
      {
        question: 'Is Toyota Fortuner available for self-drive?',
        answer: 'Fortuner self-drive availability is subject to security clearance and booking pre-approval.'
      }
    ],
    sources: [
      { title: 'Toyota Indus Motor Company Official Specs' }
    ],
    datePublished: '2025-01-18',
    dateModified: '2025-02-01',
    lastReviewed: '2026-08-18',
    contentStatus: 'Fresh',
    author: '4WHEELS Editorial Team',
    relatedVehicleSlug: 'toyota-fortuner'
  },
  {
    slug: 'lahore-to-islamabad-trip-budget-planning',
    title: 'Lahore to Islamabad Road Trip Cost & Budget Planning Guide',
    category: 'Trip Planning',
    excerpt: 'Complete breakdown of fuel estimates, motorway toll costs, hotel rates, and vehicle options for driving from Lahore to Islamabad via M-2.',
    directAnswer: 'A typical 1-day road trip from Lahore to Islamabad (approx 375 km via M-2 Motorway) costs between PKR 8,500 to PKR 14,000 in fuel for standard sedans, plus approximately PKR 1,100 to PKR 1,500 in motorway tolls each way. Hotel and food costs vary by traveler preferences.',
    keyFacts: [
      { label: 'Distance', value: 'Approx 375 km via M-2' },
      { label: 'Driving Time', value: '4.5 to 5 Hours' },
      { label: 'Motorway Route', value: 'M-2 (Requires active M-Tag)' },
      { label: 'Estimated Fuel (Sedan)', value: 'approx 30-35 Liters petrol' }
    ],
    contentSections: [
      {
        heading: 'Calculating Fuel & Motorway Tolls',
        body: 'Using current OGRA petroleum rates, a sedan averaging 12 km/L consumes roughly 32 liters of fuel on the M-2 corridor. Ensure your M-Tag is recharged before passing the Thokar Niaz Baig toll plaza.'
      },
      {
        heading: 'Planning Stops & Service Areas',
        body: 'Key rest areas along M-2 include Sukheki, Bhera, and Kallar Kahar service stations, offering dining, fuel, and clean restroom facilities.'
      }
    ],
    faqs: [
      {
        question: 'How do I estimate total trip costs automatically?',
        answer: 'You can use the 4WHEELS Trip Planner & Cost Estimator tool at /trip-planner/ to generate an instant itemized estimate including rental, fuel, tolls, and hotels.'
      }
    ],
    sources: [
      { title: 'NHA Motorway Toll Tariff' },
      { title: 'OGRA Fuel Notification' }
    ],
    datePublished: '2025-01-20',
    dateModified: '2025-02-01',
    lastReviewed: '2026-08-18',
    contentStatus: 'Fresh',
    author: '4WHEELS Editorial Team',
    relatedRouteSlug: 'lahore-to-islamabad'
  },
  {
    slug: 'toyota-coaster-rental-guide-group-travel-pakistan',
    title: 'Toyota Coaster Rental Guide: Group Transport for Tours & Weddings',
    category: 'Buses & Coasters',
    excerpt: 'Everything you need to know about renting a 20-29 seater Toyota Coaster in Lahore for tour groups, corporate events, and wedding guests.',
    directAnswer: 'The Toyota Coaster is Pakistan’s standard 20 to 29-seater passenger minibus, powered by a durable 4.0L Diesel engine. It is the preferred choice for corporate staff movement, wedding guest shuttles, and tour delegations visiting Islamabad, Murree, and Swat.',
    keyFacts: [
      { label: 'Seating Capacity', value: '20 to 29 Passengers' },
      { label: 'Engine Type', value: '4.0L Diesel' },
      { label: 'Driver Included', value: 'Yes, mandatory professional commercial driver' },
      { label: 'Best Uses', value: 'Wedding Shuttles, Corporate Retreats, Group Tours' }
    ],
    contentSections: [
      {
        heading: 'Why Rent a Toyota Coaster for Large Groups?',
        body: 'Instead of booking 4 separate cars, a single Toyota Coaster keeps your entire family or corporate team together, significantly lowering overall toll and fuel costs.'
      }
    ],
    faqs: [
      {
        question: 'Are Coaster rentals available for self-drive?',
        answer: 'No, due to commercial vehicle licensing requirements, all Coaster and bus rentals include an experienced professional commercial driver.'
      }
    ],
    sources: [
      { title: 'Toyota Coaster Commercial Vehicle Manual' }
    ],
    datePublished: '2025-01-22',
    dateModified: '2025-02-01',
    lastReviewed: '2026-08-18',
    contentStatus: 'Fresh',
    author: '4WHEELS Editorial Team'
  }
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return GUIDE_ARTICLES.find(g => g.slug === slug);
}
