import fs from 'fs';
import path from 'path';

console.log('==============================================');
console.log('COMPREHENSIVE FLEET & BOOKING VEHICLE AUDIT');
console.log('==============================================\n');

// 1. Audit FLEET_VEHICLES in src/data/fleet.ts
const fleetContent = fs.readFileSync('src/data/fleet.ts', 'utf8');
const vehicleMatches = fleetContent.split(/id:\s*'/).slice(1);

console.log(`--- Checking src/data/fleet.ts (${vehicleMatches.length} vehicles) ---`);
let fleetIssues = 0;
for (const block of vehicleMatches) {
  const id = block.split("'")[0];
  const nameMatch = block.match(/name:\s*'([^']+)'/);
  const modelMatch = block.match(/model:\s*'([^']+)'/);
  const variantMatch = block.match(/variant:\s*'([^']+)'/);
  const imageMatch = block.match(/imageUrl:\s*'([^']+)'/);
  
  const modelName = modelMatch ? modelMatch[1] : (nameMatch ? nameMatch[1] : id);
  const variant = variantMatch ? variantMatch[1] : '';
  const img = imageMatch ? imageMatch[1] : '';

  const filePath = path.join('public', img.replace(/^\//, ''));
  const exists = fs.existsSync(filePath);

  console.log(`[${exists ? 'OK' : 'MISSING'}] ${id.padEnd(25)} | ${(modelName + ' ' + variant).padEnd(35)} | ${img}`);
  if (!exists) fleetIssues++;
}

// 2. Audit PAKISTAN_VEHICLE_CATALOG in src/data/pakistanVehicles.ts
console.log(`\n--- Checking src/data/pakistanVehicles.ts ---`);
const catalogContent = fs.readFileSync('src/data/pakistanVehicles.ts', 'utf8');
const catBlocks = catalogContent.split(/id:\s*'/).slice(1);
let catIssues = 0;

for (const block of catBlocks) {
  const id = block.split("'")[0];
  const nameMatch = block.match(/name:\s*'([^']+)'/);
  const photoMatch = block.match(/heroPhoto:\s*'([^']+)'/);

  const name = nameMatch ? nameMatch[1] : id;
  const photo = photoMatch ? photoMatch[1] : '';

  const filePath = path.join('public', photo.replace(/^\//, ''));
  const exists = fs.existsSync(filePath);

  console.log(`[${exists ? 'OK' : 'MISSING'}] ${id.padEnd(25)} | ${name.padEnd(30)} | ${photo}`);
  if (!exists) catIssues++;
}

// 3. Audit booking.astro categories
console.log(`\n--- Checking src/pages/booking.astro categories ---`);
const bookingContent = fs.readFileSync('src/pages/booking.astro', 'utf8');
const catSection = bookingContent.match(/const VEHICLE_CATEGORIES = \[([\s\S]*?)\];/);
let bookingIssues = 0;
if (catSection) {
  const entries = catSection[1].split(/id:\s*'/).slice(1);
  for (const entry of entries) {
    const id = entry.split("'")[0];
    const nameMatch = entry.match(/name:\s*'([^']+)'/);
    const imgMatch = entry.match(/image:\s*'([^']+)'/);
    const popMatch = entry.match(/popularModel:\s*'([^']+)'/);

    const name = nameMatch ? nameMatch[1] : id;
    const img = imgMatch ? imgMatch[1] : '';
    const pop = popMatch ? popMatch[1] : '';

    const filePath = path.join('public', img.replace(/^\//, ''));
    const exists = fs.existsSync(filePath);

    console.log(`[${exists ? 'OK' : 'MISSING'}] ${id.padEnd(12)} | ${name.padEnd(20)} | ${pop.padEnd(35)} | ${img}`);
    if (!exists) bookingIssues++;
  }
}

console.log('\n==============================================');
console.log(`AUDIT SUMMARY: Fleet Issues: ${fleetIssues}, Catalog Issues: ${catIssues}, Booking Issues: ${bookingIssues}`);
console.log('==============================================');
