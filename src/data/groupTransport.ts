export interface GroupVehicle {
  id: string;
  slug: string;
  title: string;
  category: 'Coaster' | 'Mini Bus' | 'Luxury Coach' | 'Tour Bus' | 'Staff Bus' | 'Passenger Van';
  seatingCapacity: string; // e.g., "22-29 Seats"
  maxPassengers: number;
  luggageCapacity: string; // e.g., "12 Large Suitcases"
  acType: string; // e.g., "Dual High-Capacity Roof AC"
  suitableUse: string[];
  isFleetConfirmed: boolean;
  status: '4WHEELS Core Fleet' | 'Request Group Transport Availability';
  features: string[];
  description: string;
  source: string;
}

export const GROUP_TRANSPORT_VEHICLES: GroupVehicle[] = [
  {
    id: 'toyota-coaster-saloon',
    slug: 'toyota-coaster',
    title: 'Toyota Coaster Saloon Executive',
    category: 'Coaster',
    seatingCapacity: '22 - 29 Passengers',
    maxPassengers: 28,
    luggageCapacity: '12 - 15 Large Bags',
    acType: 'Dual Heavy-Duty Saloon AC',
    suitableUse: [
      'Wedding Guest Transport',
      'Corporate Event Transport',
      'Tour Operator Outstation Excursion',
      'Airport Group Transfer',
      'University / School Delegation'
    ],
    isFleetConfirmed: true,
    status: '4WHEELS Core Fleet',
    features: ['High-Roof Reclining Seats', 'Public Address System', 'Spacious Center Aisle', 'Tinted Windows', 'Professional Highway Chauffeur'],
    description: 'The premier choice for medium group tours and event transportation in Pakistan. Offers comfortable saloon seating with high-capacity air conditioning for long distances.',
    source: '4WHEELS Core Fleet Inventory & Toyota Indus Official Specifications'
  },
  {
    id: 'toyota-hiace-grand-cabin',
    slug: 'toyota-hiace',
    title: 'Toyota HiAce Grand Cabin',
    category: 'Passenger Van',
    seatingCapacity: '12 - 14 Passengers',
    maxPassengers: 13,
    luggageCapacity: '8 Large Bags',
    acType: 'Dual High-Capacity Roof AC',
    suitableUse: [
      'Family Group Trip',
      'Corporate Team Travel',
      'Airport Delegation Pickup',
      'Northern Areas Outstation Tour'
    ],
    isFleetConfirmed: true,
    status: '4WHEELS Core Fleet',
    features: ['Plush Velvet High-Back Seats', 'Individual AC Vents', 'Rear Boot Luggage Deck', 'Smooth Motorway Cruise'],
    description: 'Executive 12-14 seater passenger van equipped with dual AC vents for family groups, corporate delegations, and airport travel.',
    source: '4WHEELS Core Fleet Inventory'
  },
  {
    id: 'yutong-luxury-coach',
    slug: 'yutong-coach',
    title: 'Yutong / Daewoo Luxury Tour Coach',
    category: 'Luxury Coach',
    seatingCapacity: '35 - 50 Passengers',
    maxPassengers: 48,
    luggageCapacity: '30+ Large Suitcases (Underbelly Storage)',
    acType: 'Central Climate Control Coach AC',
    suitableUse: [
      'Intercity Nationwide Tour',
      'Large Wedding Motorcade',
      'Corporate Annual Conference',
      'Large Delegation Movement'
    ],
    isFleetConfirmed: false,
    status: 'Request Group Transport Availability',
    features: ['Underbelly Cargo Bay', 'Reclining Luxury Seats', 'Onboard Entertainment Screens', 'Air Suspension'],
    description: 'Full-size 35-50 seater luxury coach for large corporate conferences, nationwide group tours, and major event guest transport.',
    source: 'Yutong Master / Master Motor Pakistan Lineup'
  },
  {
    id: 'hinopak-staff-bus',
    slug: 'hinopak-bus',
    title: 'Hino / Isuzu Staff & Commuter Bus',
    category: 'Staff Bus',
    seatingCapacity: '30 - 62 Passengers',
    maxPassengers: 60,
    luggageCapacity: 'Standard Cabin Luggage Deck',
    acType: 'High Capacity Commercial Bus AC / Ventilation',
    suitableUse: [
      'Corporate Staff Pick & Drop',
      'Industrial Plant Shift Commute',
      'Large Event Logistics'
    ],
    isFleetConfirmed: false,
    status: 'Request Group Transport Availability',
    features: ['Durable Commercial Seating', 'Dual Passenger Doors', 'Scheduled Contract Commute Support'],
    description: 'Heavy-duty commercial passenger bus optimized for monthly corporate staff pick & drop contracts and factory commute solutions in Lahore and industrial estates.',
    source: 'Hinopak Motors Pakistan Lineup'
  }
];
