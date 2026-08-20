import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const PAGES = [
  { name: 'homepage', path: '/' },
  { name: 'fleet', path: '/fleet/' },
  { name: 'vehicle-fortuner', path: '/vehicles/toyota/fortuner/' },
  { name: 'booking', path: '/build-your-rental/' },
  { name: 'trip-planner', path: '/trip-planner/' },
  { name: 'find-my-vehicle', path: '/find-my-vehicle/' },
  { name: 'compare', path: '/compare-vehicles/' },
  { name: 'corporate', path: '/corporate-car-rental-lahore/' },
  { name: 'airport', path: '/lahore-airport-car-rental/' },
  { name: 'tours', path: '/outstation-car-rental-lahore/' },
  { name: 'wedding', path: '/wedding-car-rental-lahore/' },
  { name: 'coaster', path: '/fleet/buses-coasters/' },
  { name: 'guides', path: '/guides/' },
  { name: 'routes', path: '/routes/' },
  { name: 'locations', path: '/locations/' },
  { name: 'official', path: '/official/' },
  { name: 'contact', path: '/contact/' }
];

const VIEWPORTS = [
  { name: '1440', width: 1440, height: 900 },
  { name: '1280', width: 1280, height: 800 },
  { name: '1024', width: 1024, height: 768 },
  { name: '768', width: 768, height: 1024 },
  { name: '430', width: 430, height: 932 },
  { name: '412', width: 412, height: 915 },
  { name: '390', width: 390, height: 844 },
  { name: '375', width: 375, height: 667 },
  { name: '360', width: 360, height: 800 },
  { name: '320', width: 320, height: 568 }
];

async function capture(outputDir) {
  const browser = await chromium.launch();

  for (const pageInfo of PAGES) {
    for (const vp of VIEWPORTS) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height }
      });
      const page = await context.newPage();
      try {
        await page.goto(`http://localhost:4321${pageInfo.path}`, { waitUntil: 'domcontentloaded', timeout: 10000 });
        await page.waitForTimeout(500);
        const fileName = `${pageInfo.name}-${vp.name}.png`;
        await page.screenshot({ path: path.join(outputDir, fileName), fullPage: false });
      } catch (err) {
        console.error(`Failed ${pageInfo.name} at ${vp.name}:`, err.message);
      } finally {
        await context.close();
      }
    }
  }

  // Also capture mobile menu if possible
  const context = await browser.newContext({ viewport: { width: 375, height: 667 } });
  const page = await context.newPage();
  try {
    await page.goto('http://localhost:4321/', { waitUntil: 'domcontentloaded' });
    const menuBtn = page.locator('button[aria-label="Toggle navigation menu"], button[aria-label="Toggle menu"], #mobile-menu-btn');
    if (await menuBtn.isVisible()) {
      await menuBtn.click();
      await page.waitForTimeout(300);
      await page.screenshot({ path: path.join(outputDir, 'mobile-menu-375.png') });
    }
  } catch (err) {
    console.error('Failed mobile menu:', err.message);
  } finally {
    await context.close();
  }

  await browser.close();
}

const target = process.argv[2] || 'before';
const targetDir = path.join(process.cwd(), 'docs', 'ux-audit', 'screenshots', target);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

capture(targetDir).then(() => {
  console.log(`Successfully captured screenshots to ${targetDir}`);
});
