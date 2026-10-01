const fs = require('fs');
const path = require('path');

let content = fs.readFileSync('src/data/pakistanVehicles.ts', 'utf8');

const mapping = {
  'jetour-t2-suv': '/vehicles/catalog/jetour/t2.webp',
  'jaecoo-j7-phev': '/vehicles/catalog/jaecoo/j7.webp',
  'aion-es-ev': '/vehicles/catalog/aion/es.webp',
  'hyptec-ht-ev': '/vehicles/catalog/hyptec/ht.webp',
  'yutong-master-bus': '/vehicles/catalog/yutong/bus.webp',
  'daewoo-bh116-bus': '/vehicles/catalog/daewoo/bus.webp',
  'honda-city-aspire': '/vehicles/catalog/honda/city.webp'
};

for (const [id, newPath] of Object.entries(mapping)) {
  const re = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?heroPhoto:\\s*')[^']+(')`);
  if (re.test(content)) {
    content = content.replace(re, `$1${newPath}$2`);
    console.log(`Updated ${id} -> ${newPath}`);
  } else {
    console.log(`Pattern not found for ${id}`);
  }
}

fs.writeFileSync('src/data/pakistanVehicles.ts', content, 'utf8');

// Ensure public/vehicles/fleet/honda-city/hero.webp exists
fs.mkdirSync('public/vehicles/fleet/honda-city', { recursive: true });
fs.copyFileSync('public/vehicles/catalog/honda/city.webp', 'public/vehicles/fleet/honda-city/hero.webp');

console.log('Finished updating remaining heroPhoto paths!');
