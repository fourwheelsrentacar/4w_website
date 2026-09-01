import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function captureScreenshots() {
  const outputDir = path.join(process.cwd(), 'docs/ux-audit');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch();

  const pagesToCapture = [
    { name: 'brand-directory-desktop', url: 'http://localhost:4321/vehicles/', viewport: { width: 1440, height: 900 } },
    { name: 'brand-toyota-desktop', url: 'http://localhost:4321/vehicles/toyota/', viewport: { width: 1440, height: 900 } },
    { name: 'brand-byd-desktop', url: 'http://localhost:4321/vehicles/byd/', viewport: { width: 1440, height: 900 } },
    { name: 'brand-kia-desktop', url: 'http://localhost:4321/vehicles/kia/', viewport: { width: 1440, height: 900 } },
    { name: 'brand-haval-desktop', url: 'http://localhost:4321/vehicles/haval/', viewport: { width: 1440, height: 900 } },
    { name: 'model-atto3-desktop', url: 'http://localhost:4321/vehicles/byd/byd-atto-3/', viewport: { width: 1440, height: 900 } },
    { name: 'model-carnival-desktop', url: 'http://localhost:4321/vehicles/kia/kia-carnival/', viewport: { width: 1440, height: 900 } },
    { name: 'booking-configurator-desktop', url: 'http://localhost:4321/build-your-rental/', viewport: { width: 1440, height: 900 } },
    { name: 'brand-byd-mobile', url: 'http://localhost:4321/vehicles/byd/', viewport: { width: 390, height: 844 } }
  ];

  for (const p of pagesToCapture) {
    const page = await browser.newPage({ viewport: p.viewport });
    try {
      console.log(`Navigating to ${p.url}...`);
      await page.goto(p.url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);
      const filePath = path.join(outputDir, `${p.name}.png`);
      await page.screenshot({ path: filePath, fullPage: false });
      console.log(`Saved screenshot to ${filePath}`);
    } catch (err) {
      console.error(`Error capturing ${p.name}:`, err);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('Screenshot generation complete!');
}

captureScreenshots();
