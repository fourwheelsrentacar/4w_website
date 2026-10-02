import fs from 'fs';
import sharp from 'sharp';

const DOWNLOADS = [
  {
    name: 'toyota-prado',
    url: 'https://toyota-indus.com/wp-content/uploads/2023/02/Parado-848-x-473.png',
    dest: 'public/vehicles/catalog/toyota/prado.webp'
  },
  {
    name: 'toyota-lc300',
    url: 'https://toyota-indus.com/wp-content/uploads/2022/10/LC-300-gallery-2.jpg',
    dest: 'public/vehicles/catalog/toyota/lc300.webp'
  },
  {
    name: 'changan-alsvin',
    url: 'https://cache2.pakwheels.com/system/car_generation_pictures/6015/original/Alsvin_-_PNG.png',
    dest: 'public/vehicles/catalog/changan/alsvin.webp'
  },
  {
    name: 'changan-oshan-x7',
    url: 'https://cache1.pakwheels.com/system/car_generation_pictures/16816/original/Cover.jpg',
    dest: 'public/vehicles/catalog/changan/oshan-x7.webp'
  },
  {
    name: 'honda-hrv',
    url: 'https://cache4.pakwheels.com/system/car_generation_pictures/16746/original/Cover.jpg',
    dest: 'public/vehicles/catalog/honda/hrv.webp'
  },
  {
    name: 'suzuki-swift',
    url: 'https://cache4.pakwheels.com/system/car_generation_pictures/7311/original/White-Base-PS.jpg',
    dest: 'public/vehicles/catalog/suzuki/swift.webp'
  },
  {
    name: 'hyundai-tucson',
    url: 'https://cache3.pakwheels.com/system/car_generation_pictures/8720/original/Cover.jpg',
    dest: 'public/vehicles/catalog/hyundai/tucson.webp'
  },
  {
    name: 'hyundai-santafe',
    url: 'https://cache4.pakwheels.com/system/car_generation_pictures/17302/original/Cover.jpg',
    dest: 'public/vehicles/catalog/hyundai/santafe.webp'
  },
  {
    name: 'deepal-s07',
    url: 'https://cache1.pakwheels.com/system/car_generation_pictures/7992/original/Cover.jpg',
    dest: 'public/vehicles/catalog/deepal/s07.webp'
  },
  {
    name: 'deepal-s07-fleet',
    url: 'https://cache1.pakwheels.com/system/car_generation_pictures/7992/original/Cover.jpg',
    dest: 'public/vehicles/fleet/deepal-s07/hero.webp'
  }
];

async function run() {
  for (const item of DOWNLOADS) {
    try {
      console.log(`Downloading ${item.name}...`);
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      if (!res.ok) {
        console.error(`Failed ${item.name}: ${res.status}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      await sharp(buffer)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 88 })
        .toFile(item.dest);
      console.log(`✅ Saved ${item.dest} (${(fs.statSync(item.dest).size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`Error processing ${item.name}:`, err.message);
    }
  }
  console.log('All downloads & optimizations complete!');
}

run();
