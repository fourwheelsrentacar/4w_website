import fs from 'fs';

const prices = {
  'toyota-corolla-gli-altis': 7500,
  'honda-civic-oriell-rs': 9500,
  'toyota-fortuner-sigma4': 18000,
  'toyota-revo-rocco': 16000,
  'suzuki-alto-vxr-vxl': 3800,
  'toyota-yaris-ativ': 6500,
  'toyota-hiace-grand-cabin': 14000,
  'toyota-coaster-saloon': 18000,
  'audi-a6-luxury-sedan': 35000,
  'kia-sportage-awd': 11000,
  'kia-grand-carnival-vip': 22000,
};

let content = fs.readFileSync('src/data/fleet.ts', 'utf-8');

for (const [id, price] of Object.entries(prices)) {
  const target = `id: '${id}',`;
  if (content.includes(target)) {
    content = content.replace(target, `${target}\n    startingPricePkr: ${price},`);
  }
}

fs.writeFileSync('src/data/fleet.ts', content, 'utf-8');
console.log('Successfully added startingPricePkr to all fleet vehicles');
