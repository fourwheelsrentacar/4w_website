const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SPEC_CARDS = [
  {
    path: 'public/vehicles/catalog/toyota/prado.webp',
    brand: 'TOYOTA PAKISTAN',
    model: 'LAND CRUISER PRADO',
    subtitle: '2.8L Turbo Diesel 4x4 • 7-Seater Luxury SUV',
    badge: 'CATALOG REQUEST MODEL',
    accent: '#3b82f6',
    silhouette: 'suv'
  },
  {
    path: 'public/vehicles/catalog/toyota/lc300.webp',
    brand: 'TOYOTA PAKISTAN',
    model: 'LAND CRUISER 300',
    subtitle: '3.5L Twin Turbo V6 • Flagship VIP Armored / Escort',
    badge: 'SPECIAL VIP REQUEST',
    accent: '#eab308',
    silhouette: 'suv'
  },
  {
    path: 'public/vehicles/catalog/honda/city.webp',
    brand: 'HONDA ATLAS',
    model: 'HONDA CITY 1.5L',
    subtitle: 'GN Chassis CVT • Compact Executive City Sedan',
    badge: 'CATALOG REQUEST MODEL',
    accent: '#38bdf8',
    silhouette: 'sedan'
  },
  {
    path: 'public/vehicles/catalog/honda/hrv.webp',
    brand: 'HONDA ATLAS',
    model: 'HONDA HR-V VTi-S',
    subtitle: '1.5L i-VTEC Smart Crossover SUV',
    badge: 'CATALOG REQUEST MODEL',
    accent: '#06b6d4',
    silhouette: 'crossover'
  },
  {
    path: 'public/vehicles/fleet/byd-sealion6/hero.webp',
    brand: 'BYD PAKISTAN',
    model: 'SEALION 7 EV',
    subtitle: 'AWD Performance 523hp • Ocean Face Electric SUV',
    badge: 'CATALOG REQUEST MODEL',
    accent: '#0ea5e9',
    silhouette: 'crossover'
  },
  {
    path: 'public/vehicles/catalog/ora/ora03.webp',
    brand: 'GWM / ORA PAKISTAN',
    model: 'ORA 03 RETRO EV',
    subtitle: 'Pure Electric City EV • 310 km Driving Range',
    badge: 'CATALOG REQUEST MODEL',
    accent: '#ec4899',
    silhouette: 'hatchback'
  },
  {
    path: 'public/vehicles/catalog/tank/tank500.webp',
    brand: 'GWM TANK PAKISTAN',
    model: 'TANK 500 HEV',
    subtitle: '2.0L Turbo Hybrid 4x4 • Heavy Duty Executive SUV',
    badge: 'CATALOG REQUEST MODEL',
    accent: '#f59e0b',
    silhouette: 'suv'
  },
  {
    path: 'public/vehicles/catalog/deepal/s07.webp',
    brand: 'CHANGAN DEEPAL',
    model: 'DEEPAL S07 EV / REEV',
    subtitle: 'Frameless Doors • 15.6\" Sunflower Screen • Smart EV',
    badge: 'CATALOG REQUEST MODEL',
    accent: '#06b6d4',
    silhouette: 'crossover'
  },
  {
    path: 'public/vehicles/fleet/deepal-s07/hero.webp',
    brand: 'CHANGAN DEEPAL',
    model: 'DEEPAL S07 EV / REEV',
    subtitle: 'Frameless Doors • 15.6\" Sunflower Screen • Smart EV',
    badge: 'CATALOG REQUEST MODEL',
    accent: '#06b6d4',
    silhouette: 'crossover'
  },
  {
    path: 'public/vehicles/catalog/jetour/t2.webp',
    brand: 'JETOUR PAKISTAN',
    model: 'JETOUR T2 4X4',
    subtitle: 'Boxy Off-Road Adventure SUV • 2.0T AWD',
    badge: 'CATALOG REQUEST MODEL',
    accent: '#10b981',
    silhouette: 'suv'
  },
  {
    path: 'public/vehicles/catalog/omoda/e5.webp',
    brand: 'CHERY OMODA',
    model: 'OMODA E5 EV',
    subtitle: 'Pure Electric Crossover • 430 km Range • Fast Charge',
    badge: 'CATALOG REQUEST MODEL',
    accent: '#6366f1',
    silhouette: 'crossover'
  },
  {
    path: 'public/vehicles/catalog/jaecoo/j7.webp',
    brand: 'CHERY JAECOO',
    model: 'JAECOO J7 ARDIS',
    subtitle: 'All-Road Intelligent Drive 4WD Hybrid SUV',
    badge: 'CATALOG REQUEST MODEL',
    accent: '#8b5cf6',
    silhouette: 'suv'
  },
  {
    path: 'public/vehicles/catalog/aion/es.webp',
    brand: 'GAC AION PAKISTAN',
    model: 'AION ES EV SEDAN',
    subtitle: 'Zero-Emission Executive Sedan • 440 km Range',
    badge: 'CATALOG REQUEST MODEL',
    accent: '#14b8a6',
    silhouette: 'sedan'
  },
  {
    path: 'public/vehicles/catalog/hyptec/ht.webp',
    brand: 'GAC HYPTEC',
    model: 'HYPTEC HT GULL-WING',
    subtitle: 'Flagship Luxury Electric SUV • Rear Gull-Wing Doors',
    badge: 'SPECIAL VIP REQUEST',
    accent: '#f43f5e',
    silhouette: 'crossover'
  },
  {
    path: 'public/vehicles/catalog/honri/i200.webp',
    brand: 'HONRI PAKISTAN',
    model: 'HONRI i200 EV',
    subtitle: 'Ultra-Compact City EV • 200 km Range • Easy Parking',
    badge: 'CATALOG REQUEST MODEL',
    accent: '#a855f7',
    silhouette: 'hatchback'
  },
  {
    path: 'public/vehicles/catalog/suzuki/swift.webp',
    brand: 'PAK SUZUKI',
    model: 'SUZUKI SWIFT GLX CVT',
    subtitle: '1.2L DOHC VVT • Push Start • Sporty City Hatchback',
    badge: 'CATALOG REQUEST MODEL',
    accent: '#ef4444',
    silhouette: 'hatchback'
  },
  {
    path: 'public/vehicles/catalog/changan/alsvin.webp',
    brand: 'CHANGAN MOTORS',
    model: 'CHANGAN ALSVIN 1.5L',
    subtitle: 'DCT Automatic Sedan • Sunroof • High Fuel Mileage',
    badge: 'CATALOG REQUEST MODEL',
    accent: '#0284c7',
    silhouette: 'sedan'
  },
  {
    path: 'public/vehicles/catalog/changan/oshan-x7.webp',
    brand: 'CHANGAN MOTORS',
    model: 'OSHAN X7 FUTURE SENSE',
    subtitle: '1.5L Turbo 300 Nm • 7-Seater Luxury Crossover',
    badge: 'CATALOG REQUEST MODEL',
    accent: '#d97706',
    silhouette: 'suv'
  },
  {
    path: 'public/vehicles/catalog/hyundai/santafe.webp',
    brand: 'HYUNDAI NISHAT',
    model: 'SANTA FE HYBRID',
    subtitle: '1.6L Turbo Hybrid AWD • 7-Seater Executive SUV',
    badge: 'CATALOG REQUEST MODEL',
    accent: '#2563eb',
    silhouette: 'suv'
  },
  {
    path: 'public/vehicles/catalog/mg/hs.webp',
    brand: 'MG MOTORS PAKISTAN',
    model: 'MG HS 1.5T / PHEV',
    subtitle: 'Trophy Edition • Panoramic Sunroof • British Heritage',
    badge: 'CATALOG REQUEST MODEL',
    accent: '#dc2626',
    silhouette: 'crossover'
  },
  {
    path: 'public/vehicles/catalog/yutong/bus.webp',
    brand: 'YUTONG PAKISTAN',
    model: 'YUTONG 50-SEATER SALOON',
    subtitle: 'Heavy Intercity Luxury Coach • Dual AC • Large Underbay',
    badge: 'CHAUFFEUR DRIVEN ONLY',
    accent: '#ca8a04',
    silhouette: 'coach'
  },
  {
    path: 'public/vehicles/catalog/daewoo/bus.webp',
    brand: 'DAEWOO PAKISTAN',
    model: 'DAEWOO BH116 EXPRESS',
    subtitle: '45-Seater Motorway Express Coach • Reclining Seats',
    badge: 'CHAUFFEUR DRIVEN ONLY',
    accent: '#ea580c',
    silhouette: 'coach'
  },
  {
    path: 'public/vehicles/fleet/kia-sportage/older-ql.webp',
    brand: 'KIA LUCKY MOTORS',
    model: 'SPORTAGE QL (GEN 4)',
    subtitle: '2.0L MPI Nu • AWD / FWD Compact Crossover',
    badge: 'CONFIRMED FLEET SHAPE',
    accent: '#dc2626',
    silhouette: 'crossover'
  },
  {
    path: 'public/vehicles/catalog/hyundai/tucson.webp',
    brand: 'HYUNDAI NISHAT',
    model: 'HYUNDAI TUCSON AWD',
    subtitle: '2.0L A/T AWD • Panoramic Sunroof • Crossover SUV',
    badge: 'CATALOG REQUEST MODEL',
    accent: '#0284c7',
    silhouette: 'suv'
  }
];

function buildSvg(card) {
  let silhouetteSvg = '';

  if (card.silhouette === 'sedan') {
    silhouetteSvg = `
      <polygon points="320,380 420,290 740,290 860,380" fill="#1e293b" stroke="${card.accent}" stroke-width="3"/>
      <rect x="240" y="360" width="720" height="60" rx="15" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <ellipse cx="380" cy="420" rx="45" ry="45" fill="#020617" stroke="${card.accent}" stroke-width="6"/>
      <ellipse cx="820" cy="420" rx="45" ry="45" fill="#020617" stroke="${card.accent}" stroke-width="6"/>
      <circle cx="380" cy="420" r="18" fill="#475569"/>
      <circle cx="820" cy="420" r="18" fill="#475569"/>
      <polygon points="435,305 570,305 570,360 365,360" fill="#0284c7" opacity="0.25"/>
      <polygon points="590,305 725,305 810,360 590,360" fill="#0284c7" opacity="0.25"/>
    `;
  } else if (card.silhouette === 'suv') {
    silhouetteSvg = `
      <polygon points="300,380 380,240 820,240 880,380" fill="#1e293b" stroke="${card.accent}" stroke-width="3"/>
      <rect x="230" y="340" width="740" height="80" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <ellipse cx="370" cy="420" rx="55" ry="55" fill="#020617" stroke="${card.accent}" stroke-width="6"/>
      <ellipse cx="830" cy="420" rx="55" ry="55" fill="#020617" stroke="${card.accent}" stroke-width="6"/>
      <circle cx="370" cy="420" r="22" fill="#64748b"/>
      <circle cx="830" cy="420" r="22" fill="#64748b"/>
      <line x1="390" y1="225" x2="810" y2="225" stroke="#94a3b8" stroke-width="5" stroke-linecap="round"/>
      <polygon points="400,255 570,255 570,340 330,340" fill="#38bdf8" opacity="0.25"/>
      <polygon points="590,255 800,255 850,340 590,340" fill="#38bdf8" opacity="0.25"/>
    `;
  } else if (card.silhouette === 'crossover') {
    silhouetteSvg = `
      <polygon points="290,380 400,260 780,260 880,380" fill="#1e293b" stroke="${card.accent}" stroke-width="3"/>
      <rect x="230" y="350" width="740" height="70" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <ellipse cx="380" cy="420" rx="50" ry="50" fill="#020617" stroke="${card.accent}" stroke-width="6"/>
      <ellipse cx="820" cy="420" rx="50" ry="50" fill="#020617" stroke="${card.accent}" stroke-width="6"/>
      <circle cx="380" cy="420" r="20" fill="#64748b"/>
      <circle cx="820" cy="420" r="20" fill="#64748b"/>
      <polygon points="415,275 570,275 570,350 335,350" fill="#06b6d4" opacity="0.25"/>
      <polygon points="590,275 760,275 830,350 590,350" fill="#06b6d4" opacity="0.25"/>
    `;
  } else if (card.silhouette === 'hatchback') {
    silhouetteSvg = `
      <polygon points="340,380 430,280 730,280 760,380" fill="#1e293b" stroke="${card.accent}" stroke-width="3"/>
      <rect x="270" y="360" width="560" height="60" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <ellipse cx="390" cy="420" rx="42" ry="42" fill="#020617" stroke="${card.accent}" stroke-width="5"/>
      <ellipse cx="730" cy="420" rx="42" ry="42" fill="#020617" stroke="${card.accent}" stroke-width="5"/>
      <circle cx="390" cy="420" r="16" fill="#64748b"/>
      <circle cx="730" cy="420" r="16" fill="#64748b"/>
      <polygon points="445,295 560,295 560,360 375,360" fill="#a855f7" opacity="0.25"/>
      <polygon points="580,295 710,295 735,360 580,360" fill="#a855f7" opacity="0.25"/>
    `;
  } else if (card.silhouette === 'coach') {
    silhouetteSvg = `
      <rect x="180" y="210" width="840" height="200" rx="18" fill="#1e293b" stroke="${card.accent}" stroke-width="3"/>
      <rect x="220" y="235" width="760" height="65" rx="8" fill="#0284c7" opacity="0.3"/>
      <ellipse cx="310" cy="410" rx="48" ry="48" fill="#020617" stroke="${card.accent}" stroke-width="6"/>
      <ellipse cx="800" cy="410" rx="48" ry="48" fill="#020617" stroke="${card.accent}" stroke-width="6"/>
      <ellipse cx="890" cy="410" rx="48" ry="48" fill="#020617" stroke="${card.accent}" stroke-width="6"/>
      <circle cx="310" cy="410" r="20" fill="#64748b"/>
      <circle cx="800" cy="410" r="20" fill="#64748b"/>
      <circle cx="890" cy="410" r="20" fill="#64748b"/>
      <rect x="220" y="325" width="220" height="55" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
      <rect x="460" y="325" width="220" height="55" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
    `;
  }

  return `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="stageGlow" cx="50%" cy="65%" r="60%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.8"/>
      <stop offset="60%" stop-color="#090d16" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#020617" stop-opacity="1"/>
    </radialGradient>
  </defs>

  <!-- Dark Photographic Studio Stage -->
  <rect width="1200" height="675" fill="url(#stageGlow)"/>

  <!-- Studio Floor Horizon Line & Light Pool -->
  <ellipse cx="600" cy="510" rx="460" ry="110" fill="#0f172a" opacity="0.6"/>
  <line x1="80" y1="465" x2="1120" y2="465" stroke="#334155" stroke-width="2" stroke-dasharray="8,8" opacity="0.4"/>

  <!-- Top Badges -->
  <rect x="60" y="50" width="240" height="34" rx="8" fill="#0f172a" stroke="${card.accent}" stroke-width="1.5"/>
  <text x="180" y="73" font-family="Arial, sans-serif" font-weight="900" font-size="12" fill="${card.accent}" text-anchor="middle" letter-spacing="1">${card.badge}</text>

  <rect x="880" y="50" width="260" height="34" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="1010" y="73" font-family="Arial, sans-serif" font-weight="800" font-size="12" fill="#94a3b8" text-anchor="middle" letter-spacing="0.5">4WHEELS LAHORE FLEET</text>

  <!-- Brand and Model Typography -->
  <text x="60" y="130" font-family="Arial, sans-serif" font-weight="900" font-size="16" fill="${card.accent}" letter-spacing="2">${card.brand.toUpperCase()}</text>
  <text x="60" y="175" font-family="Arial, sans-serif" font-weight="900" font-size="42" fill="#ffffff">${card.model.toUpperCase()}</text>
  <text x="60" y="210" font-family="Arial, sans-serif" font-weight="600" font-size="18" fill="#94a3b8">${card.subtitle}</text>

  <!-- Dynamic Vehicle Silhouette -->
  ${silhouetteSvg}

  <!-- Footer Verification Bar -->
  <rect x="60" y="590" width="1080" height="45" rx="10" fill="#0b1120" stroke="#1e293b" stroke-width="1.5"/>
  <text x="80" y="618" font-family="Arial, sans-serif" font-weight="700" font-size="13" fill="#cbd5e1">⚙️ Technical Reference Specification &#8226; Verified Pakistan Lineup Model</text>
  <text x="1120" y="618" font-family="Arial, sans-serif" font-weight="900" font-size="13" fill="#22c55e" text-anchor="end">⚡ 5-Min WhatsApp Quote: 0321 6616644</text>
</svg>
  `;
}

async function main() {
  for (const card of SPEC_CARDS) {
    fs.mkdirSync(path.dirname(card.path), { recursive: true });
    const svg = buildSvg(card);
    await sharp(Buffer.from(svg))
      .webp({ quality: 85 })
      .toFile(card.path);
    console.log('Generated distinct visual card ->', card.path);
  }
  console.log('ALL DISTINCT CARDS GENERATED SUCCESSFULLY!');
}

main().catch(console.error);
