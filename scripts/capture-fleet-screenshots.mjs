import { chromium } from 'playwright';
import path from 'path';

const SCREENSHOT_DIR = 'C:/Users/Office/.gemini/antigravity/brain/a3d827ad-3f1a-4780-89d4-44638719f1fe/screenshots';

async function capture() {
  const browser = await chromium.launch({ headless: true });

  // 1. Desktop Fleet Page Overview
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:4321/fleet/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'fleet-desktop-overview.png') });
  console.log('Saved fleet-desktop-overview.png');

  // 2. Scroll down to grid
  const gridSection = page.locator('#fleet-catalog-section');
  await gridSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'fleet-desktop-grid.png') });
  console.log('Saved fleet-desktop-grid.png');

  // 3. Test interactive color swatch on Fortuner: click Attitude Black
  const fortunerCard = page.locator('.vehicle-card[data-slug="toyota-fortuner"]');
  if (await fortunerCard.count() > 0) {
    await fortunerCard.scrollIntoViewIfNeeded();
    const blackSwatch = fortunerCard.locator('.color-swatch-btn[data-color-name="Attitude Black"]');
    if (await blackSwatch.count() > 0) {
      await blackSwatch.click();
      await page.waitForTimeout(400);
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'fleet-desktop-color-swapped.png') });
      console.log('Saved fleet-desktop-color-swapped.png (Fortuner in Black!)');
    }
  }

  // 4. Test Category Filter: SUVs & 4x4
  const suvBtn = page.locator('.filter-cat-btn[data-cat="suv"]');
  if (await suvBtn.count() > 0) {
    await suvBtn.click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'fleet-desktop-filter-suv.png') });
    console.log('Saved fleet-desktop-filter-suv.png');
  }

  // 5. Mobile Viewport Fleet
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
  await mobilePage.goto('http://localhost:4321/fleet/', { waitUntil: 'networkidle' });
  await mobilePage.screenshot({ path: path.join(SCREENSHOT_DIR, 'fleet-mobile.png') });
  console.log('Saved fleet-mobile.png');

  // 6. Fortuner Detail Page with Color Studio
  const detailPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await detailPage.goto('http://localhost:4321/fleet/toyota-fortuner/', { waitUntil: 'networkidle' });
  // Click black color button
  const detailBlackBtn = detailPage.locator('.detail-color-btn[data-color-name="Attitude Black"]');
  if (await detailBlackBtn.count() > 0) {
    await detailBlackBtn.click();
    await detailPage.waitForTimeout(400);
  }
  await detailPage.screenshot({ path: path.join(SCREENSHOT_DIR, 'fortuner-detail-colors.png') });
  console.log('Saved fortuner-detail-colors.png');

  // 7. Prado Detail Page with Real Showroom Photo
  await detailPage.goto('http://localhost:4321/vehicles/toyota/toyota-prado/', { waitUntil: 'networkidle' });
  await detailPage.screenshot({ path: path.join(SCREENSHOT_DIR, 'prado-detail-photo.png') });
  console.log('Saved prado-detail-photo.png');

  await browser.close();
  console.log('All screenshots captured successfully!');
}

capture().catch(console.error);
