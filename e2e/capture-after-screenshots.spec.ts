import { test } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const viewports = [1440, 1280, 1024, 768, 430, 412, 390, 375, 360, 320];

const pagesToCapture = [
  { name: 'homepage', path: '/' },
  { name: 'fleet', path: '/fleet/' },
  { name: 'corolla-detail', path: '/fleet/toyota-corolla/' },
  { name: 'fortuner-detail', path: '/fleet/toyota-fortuner/' },
  { name: 'coaster-detail', path: '/fleet/toyota-coaster/' },
  { name: 'pakistan-catalog', path: '/vehicles/' },
  { name: 'build-your-rental', path: '/build-your-rental/' },
  { name: 'trip-planner', path: '/trip-planner/' },
  { name: 'find-my-vehicle', path: '/find-my-vehicle/' },
  { name: 'compare-vehicles', path: '/compare-vehicles/' },
  { name: 'corporate', path: '/corporate-car-rental-lahore/' },
  { name: 'route-detail', path: '/routes/lahore-to-islamabad/' },
  { name: 'location-detail', path: '/locations/lahore/' },
];

test.describe('Capture AFTER Screenshots across Viewports', () => {
  const outputDir = path.join(process.cwd(), 'docs', 'ux-audit', 'screenshots', 'after');

  test.beforeAll(() => {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
  });

  for (const vpWidth of viewports) {
    test(`Capture AFTER screenshots at viewport ${vpWidth}px`, async ({ page }) => {
      await page.setViewportSize({ width: vpWidth, height: 900 });

      for (const p of pagesToCapture) {
        await page.goto(p.path);
        await page.waitForLoadState('networkidle');
        const filename = `${p.name}-${vpWidth}.png`;
        await page.screenshot({ path: path.join(outputDir, filename), fullPage: false });
      }
    });
  }
});
