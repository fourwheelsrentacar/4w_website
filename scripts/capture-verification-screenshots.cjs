const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT_DIR = 'C:/Users/Office/.gemini/antigravity/brain/26fa9cfa-da0e-452b-a57b-b1b53f287bcd/screenshots';

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const browser = await chromium.launch({ headless: true });

  // 1. Homepage & Fleet Slider
  const page = await browser.newPage({ viewport: { width: 1440, height: 1080 } });
  await page.goto('http://localhost:4322/', { waitUntil: 'networkidle' });
  
  // Scroll to Fleet Slider
  const slider = page.locator('#fleet-slider-section');
  await slider.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(OUT_DIR, 'home-fleet-slider.png') });
  console.log('✅ Captured home-fleet-slider.png');

  // Next slide in Fleet Slider
  const nextBtn = page.locator('#embla-next');
  if (await nextBtn.count() > 0) {
    await nextBtn.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(OUT_DIR, 'home-fleet-slider-slide2.png') });
    console.log('✅ Captured home-fleet-slider-slide2.png');
  }

  // 2. Booking Page Categories
  await page.goto('http://localhost:4322/booking/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(OUT_DIR, 'booking-categories.png') });
  console.log('✅ Captured booking-categories.png');

  // Select Sedan Category in Booking
  const sedanCard = page.locator('.cat-card[data-cat-id="sedan"]');
  if (await sedanCard.count() > 0) {
    await sedanCard.click();
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(OUT_DIR, 'booking-sedan-models.png') });
    console.log('✅ Captured booking-sedan-models.png');
  }

  // 3. Fleet Page Catalog
  await page.goto('http://localhost:4322/fleet/', { waitUntil: 'networkidle' });
  const catalog = page.locator('#fleet-catalog-section');
  if (await catalog.count() > 0) {
    await catalog.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
  }
  await page.screenshot({ path: path.join(OUT_DIR, 'fleet-catalog.png') });
  console.log('✅ Captured fleet-catalog.png');

  await browser.close();
  console.log('🎉 All verification screenshots captured successfully!');
}

main().catch(console.error);
