const fs = require('fs');
const path = require('path');

// Check pakistanVehicles
const pv = fs.readFileSync('src/data/pakistanVehicles.ts', 'utf8');
const pvBlocks = pv.split(/\{\s*id:\s*'/).slice(1);
console.log('--- CHECKING PAKISTAN VEHICLES (' + pvBlocks.length + ') ---');
pvBlocks.forEach(b => {
  const id = b.split("'")[0];
  const photoMatch = b.match(/heroPhoto:\s*'([^']+)'/);
  const brandMatch = b.match(/brand:\s*'([^']+)'/);
  const modelMatch = b.match(/model:\s*'([^']+)'/);
  const photo = photoMatch ? photoMatch[1] : '';
  const disk = path.join('public', photo.replace(/^\//, ''));
  const exists = fs.existsSync(disk);
  if (!exists) {
    console.log('MISSING in pakistanVehicles: ID =', id, 'Photo =', photo);
  }
});

// Check fleet.ts
const fleet = fs.readFileSync('src/data/fleet.ts', 'utf8');
const fleetBlocks = fleet.split(/\{\s*id:\s*'/).slice(1);
console.log('--- CHECKING FLEET VEHICLES (' + fleetBlocks.length + ') ---');
fleetBlocks.forEach(b => {
  const id = b.split("'")[0];
  const imgMatch = b.match(/imageUrl:\s*'([^']+)'/);
  const img = imgMatch ? imgMatch[1] : '';
  const disk = path.join('public', img.replace(/^\//, ''));
  const exists = fs.existsSync(disk);
  if (!exists) {
    console.log('MISSING in fleet.ts: ID =', id, 'Img =', img);
  }
});

// Check vehicleYears.ts
const vy = fs.readFileSync('src/data/vehicleYears.ts', 'utf8');
const vyBlocks = vy.split(/\{\s*id:\s*'/).slice(1);
console.log('--- CHECKING VEHICLE YEARS (' + vyBlocks.length + ') ---');
vyBlocks.forEach(b => {
  const id = b.split("'")[0];
  const photoMatch = b.match(/heroPhoto:\s*'([^']+)'/);
  const photo = photoMatch ? photoMatch[1] : '';
  const disk = path.join('public', photo.replace(/^\//, ''));
  const exists = fs.existsSync(disk);
  if (!exists) {
    console.log('MISSING in vehicleYears: ID =', id, 'Photo =', photo);
  }
});

// Check groupTransport.ts
const gt = fs.readFileSync('src/data/groupTransport.ts', 'utf8');
const gtBlocks = gt.split(/\{\s*id:\s*'/).slice(1);
console.log('--- CHECKING GROUP TRANSPORT (' + gtBlocks.length + ') ---');
gtBlocks.forEach(b => {
  const id = b.split("'")[0];
  const imgMatch = b.match(/heroImage:\s*'([^']+)'/) || b.match(/image:\s*'([^']+)'/);
  const img = imgMatch ? imgMatch[1] : '';
  if (img) {
    const disk = path.join('public', img.replace(/^\//, ''));
    if (!fs.existsSync(disk)) {
      console.log('MISSING in groupTransport: ID =', id, 'Img =', img);
    }
  }
});
