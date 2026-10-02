import crypto from 'crypto';
import fs from 'fs';
import sharp from 'sharp';

function getWikiUrl(filename) {
  const clean = filename.replace(/ /g, '_');
  const md5 = crypto.createHash('md5').update(clean).digest('hex');
  const a = md5[0];
  const b = md5.substring(0, 2);
  return `https://upload.wikimedia.org/wikipedia/commons/${a}/${b}/${encodeURIComponent(clean)}`;
}

async function test() {
  const list = [
    { target: 'public/vehicles/catalog/tank/tank500.webp', name: '2022 Great Wall TANK 500.jpg' },
    { target: 'public/vehicles/catalog/mg/hs.webp', name: '2020 MG HS Exclusive Automatic 1.5 Front.jpg' },
    { target: 'public/vehicles/catalog/ora/ora03.webp', name: 'ORA Good Cat 001.jpg' }
  ];

  for (const item of list) {
    const url = getWikiUrl(item.name);
    console.log(item.name, '=>', url);
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    console.log('Status:', res.status);
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      await sharp(buf)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 88 })
        .toFile(item.target);
      console.log('Saved', item.target);
    }
  }
}
test();
