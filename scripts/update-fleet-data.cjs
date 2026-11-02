const fs = require('fs');

let c = fs.readFileSync('src/data/fleet.ts', 'utf8');

// 1. Add heroImage to Vehicle interface if not present
if (!c.includes('heroImage?: string;')) {
  c = c.replace('startingPricePkr?: number;', 'startingPricePkr?: number;\n  heroImage?: string;');
}

// 2. Add heroImage to each vehicle entry in FLEET_VEHICLES based on slug
const fleetMap = {
  'toyota-corolla': '/vehicles/fleet/toyota-corolla/hero.webp',
  'honda-civic': '/vehicles/fleet/honda-civic/hero.webp',
  'toyota-fortuner': '/vehicles/fleet/toyota-fortuner/hero.webp',
  'toyota-revo': '/vehicles/fleet/toyota-revo/hero.webp',
  'suzuki-alto': '/vehicles/fleet/suzuki-alto/hero.webp',
  'toyota-yaris': '/vehicles/fleet/toyota-yaris/hero.webp',
  'toyota-hiace': '/vehicles/fleet/toyota-hiace/hero.webp',
  'toyota-coaster': '/vehicles/fleet/toyota-coaster/hero.webp',
  'audi-a6': '/vehicles/fleet/audi-a6/hero.webp',
  'kia-sportage': '/vehicles/fleet/kia-sportage/hero.webp',
  'kia-carnival': '/vehicles/fleet/kia-carnival/hero.webp'
};

for (const [slug, img] of Object.entries(fleetMap)) {
  const re = new RegExp(`(slug:\\s*'${slug}',)`);
  if (!c.includes(`heroImage: '${img}',`)) {
    c = c.replace(re, `$1\n    heroImage: '${img}',`);
  }
}

// Also ensure kia-sportage in fleet.ts uses hero.webp instead of older-ql.webp
c = c.replace(/\/vehicles\/fleet\/kia-sportage\/older-ql\.webp/g, '/vehicles/fleet/kia-sportage/hero.webp');

fs.writeFileSync('src/data/fleet.ts', c, 'utf8');
console.log('Successfully updated fleet.ts with heroImage and clean photos!');
