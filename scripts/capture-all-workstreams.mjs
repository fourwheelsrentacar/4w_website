import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';

const SCREENSHOT_DIR = 'C:/Users/Office/.gemini/antigravity/brain/a3d827ad-3f1a-4780-89d4-44638719f1fe/screenshots';
const DIST_DIR = path.resolve('dist');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

// Simple static file server for dist/
function startStaticServer(port = 4321) {
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
  };

  const server = http.createServer((req, res) => {
    let reqPath = decodeURI(req.url.split('?')[0]);
    if (reqPath.endsWith('/')) {
      reqPath += 'index.html';
    } else if (!path.extname(reqPath)) {
      if (fs.existsSync(path.join(DIST_DIR, reqPath, 'index.html'))) {
        reqPath += '/index.html';
      } else if (fs.existsSync(path.join(DIST_DIR, reqPath + '.html'))) {
        reqPath += '.html';
      }
    }

    const filePath = path.join(DIST_DIR, reqPath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  });

  return new Promise((resolve) => {
    server.listen(port, () => {
      console.log(`Static server running at http://localhost:${port}/`);
      resolve(server);
    });
  });
}

async function run() {
  const server = await startStaticServer(4321);
  const browser = await chromium.launch({ headless: true });

  try {
    // 1. Homepage Verified Office & Yard Gallery
    console.log('Capturing homepage office gallery...');
    const homePage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await homePage.goto('http://localhost:4321/', { waitUntil: 'load' });
    await homePage.waitForTimeout(600);
    const officeSection = homePage.locator('text=Visit Our Johar Town Office & Fleet Yard').first();
    if (await officeSection.count() > 0) {
      await officeSection.scrollIntoViewIfNeeded();
      await homePage.waitForTimeout(600);
      await homePage.screenshot({ path: path.join(SCREENSHOT_DIR, 'homepage-office-gallery.png') });
      console.log('Saved homepage-office-gallery.png');
    }

    // 2. Booking Page Desktop
    console.log('Capturing redesigned booking page desktop...');
    const bookingPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await bookingPage.goto('http://localhost:4321/booking/', { waitUntil: 'load' });
    await bookingPage.waitForTimeout(600);
    await bookingPage.screenshot({ path: path.join(SCREENSHOT_DIR, 'booking-desktop-overview.png') });
    console.log('Saved booking-desktop-overview.png');

    // 3. Booking Page Mobile (Zero Bleeding Test)
    console.log('Capturing redesigned booking page mobile...');
    const bookingMobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
    await bookingMobile.goto('http://localhost:4321/booking/', { waitUntil: 'load' });
    await bookingMobile.waitForTimeout(600);
    await bookingMobile.screenshot({ path: path.join(SCREENSHOT_DIR, 'booking-mobile-responsive.png') });
    console.log('Saved booking-mobile-responsive.png');

    // 4. Attach Your Car / Investor Page Desktop
    console.log('Capturing Attach Your Car & Overseas Investor page desktop...');
    const investorPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await investorPage.goto('http://localhost:4321/attach-your-car/', { waitUntil: 'load' });
    await investorPage.waitForTimeout(600);
    await investorPage.screenshot({ path: path.join(SCREENSHOT_DIR, 'attach-your-car-hero.png') });

    const overseasSection = investorPage.locator('text=Live Abroad? Put Your Car in Pakistan to Work').first();
    if (await overseasSection.count() > 0) {
      await overseasSection.scrollIntoViewIfNeeded();
      await investorPage.waitForTimeout(500);
      await investorPage.screenshot({ path: path.join(SCREENSHOT_DIR, 'attach-your-car-overseas.png') });
      console.log('Saved attach-your-car-overseas.png');
    }

    const calcSection = investorPage.locator('#calculator-section');
    if (await calcSection.count() > 0) {
      await calcSection.scrollIntoViewIfNeeded();
      await investorPage.waitForTimeout(500);
      await investorPage.screenshot({ path: path.join(SCREENSHOT_DIR, 'attach-your-car-calculator.png') });
      console.log('Saved attach-your-car-calculator.png');
    }

    // 5. Attach Your Car Mobile
    console.log('Capturing Attach Your Car mobile...');
    const investorMobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
    await investorMobile.goto('http://localhost:4321/attach-your-car/', { waitUntil: 'load' });
    await investorMobile.waitForTimeout(600);
    await investorMobile.screenshot({ path: path.join(SCREENSHOT_DIR, 'attach-your-car-mobile.png') });
    console.log('Saved attach-your-car-mobile.png');

    // 6. Fleet Page with Fuel Notice & Mitsubishi Pajero
    console.log('Capturing fleet page with Pajero & fuel notice...');
    const fleetPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await fleetPage.goto('http://localhost:4321/fleet/', { waitUntil: 'load' });
    await fleetPage.waitForTimeout(600);
    await fleetPage.screenshot({ path: path.join(SCREENSHOT_DIR, 'fleet-fuel-disclaimer-header.png') });

    const brandSelect = fleetPage.locator('#filter-brand');
    if (await brandSelect.count() > 0) {
      await brandSelect.selectOption('Mitsubishi');
      await fleetPage.waitForTimeout(500);
      await fleetPage.screenshot({ path: path.join(SCREENSHOT_DIR, 'fleet-mitsubishi-pajero.png') });
      console.log('Saved fleet-mitsubishi-pajero.png');
    }

    // 7. Official Page Verification Gallery
    console.log('Capturing official verification gallery...');
    const officialPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await officialPage.goto('http://localhost:4321/official/', { waitUntil: 'load' });
    await officialPage.waitForTimeout(600);
    const gallerySection = officialPage.locator('text=Authentic Photographs of Our Johar Town Head Office & Fleet').first();
    if (await gallerySection.count() > 0) {
      await gallerySection.scrollIntoViewIfNeeded();
      await officialPage.waitForTimeout(500);
      await officialPage.screenshot({ path: path.join(SCREENSHOT_DIR, 'official-verified-photos.png') });
      console.log('Saved official-verified-photos.png');
    }

    console.log('All QA screenshots captured successfully!');
  } finally {
    await browser.close();
    server.close();
  }
}

run().catch(err => {
  console.error('Screenshot run failed:', err);
  process.exit(1);
});
