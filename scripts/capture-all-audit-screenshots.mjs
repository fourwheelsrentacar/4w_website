import http from 'http';
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const PORT = 4321;
const DIST_DIR = path.resolve('dist');
const BRAIN_DIR = 'C:/Users/Office/.gemini/antigravity/brain/a3d827ad-3f1a-4780-89d4-44638719f1fe/screenshots';
const DOCS_DIR = path.resolve('docs/ux-audit');

[BRAIN_DIR, DOCS_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain'
};

function serveFile(req, res) {
  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.join(DIST_DIR, reqPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  } else if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
    filePath = filePath + '.html';
  } else if (!fs.existsSync(filePath) && fs.existsSync(path.join(filePath, 'index.html'))) {
    filePath = path.join(filePath, 'index.html');
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found: ' + reqPath);
  }
}

const server = http.createServer(serveFile);

async function main() {
  await new Promise(resolve => server.listen(PORT, '127.0.0.1', resolve));
  console.log(`Local test server running at http://127.0.0.1:${PORT}`);

  const browser = await chromium.launch();

  const pagesToCapture = [
    { name: 'model-haval-h6-desktop', url: `http://127.0.0.1:${PORT}/vehicles/haval/haval-h6/`, viewport: { width: 1440, height: 900 } },
    { name: 'model-byd-seal-desktop', url: `http://127.0.0.1:${PORT}/vehicles/byd/byd-seal/`, viewport: { width: 1440, height: 900 } },
    { name: 'model-byd-atto3-desktop', url: `http://127.0.0.1:${PORT}/vehicles/byd/byd-atto-3/`, viewport: { width: 1440, height: 900 } },
    { name: 'brand-byd-desktop', url: `http://127.0.0.1:${PORT}/vehicles/byd/`, viewport: { width: 1440, height: 900 } },
    { name: 'brand-haval-desktop', url: `http://127.0.0.1:${PORT}/vehicles/haval/`, viewport: { width: 1440, height: 900 } },
    { name: 'fleet-catalog-desktop', url: `http://127.0.0.1:${PORT}/fleet/`, viewport: { width: 1440, height: 900 } },
    { name: 'fleet-corolla-detail-desktop', url: `http://127.0.0.1:${PORT}/fleet/toyota-corolla/`, viewport: { width: 1440, height: 900 } },
    { name: 'location-dha-lahore-desktop', url: `http://127.0.0.1:${PORT}/rent-a-car-dha-lahore/`, viewport: { width: 1440, height: 900 } },
    { name: 'booking-page-desktop', url: `http://127.0.0.1:${PORT}/booking/`, viewport: { width: 1440, height: 900 } },
    { name: 'booking-page-mobile', url: `http://127.0.0.1:${PORT}/booking/`, viewport: { width: 390, height: 844 } },
    { name: 'model-haval-h6-mobile', url: `http://127.0.0.1:${PORT}/vehicles/haval/haval-h6/`, viewport: { width: 390, height: 844 } },
    { name: 'model-byd-seal-mobile', url: `http://127.0.0.1:${PORT}/vehicles/byd/byd-seal/`, viewport: { width: 390, height: 844 } }
  ];

  for (const item of pagesToCapture) {
    const page = await browser.newPage({ viewport: item.viewport });
    try {
      console.log(`Capturing: ${item.name} from ${item.url}...`);
      await page.goto(item.url, { waitUntil: 'load', timeout: 15000 });
      await page.waitForTimeout(1000);

      const brainFile = path.join(BRAIN_DIR, `${item.name}.png`);
      const docsFile = path.join(DOCS_DIR, `${item.name}.png`);

      await page.screenshot({ path: brainFile, fullPage: false });
      fs.copyFileSync(brainFile, docsFile);
      console.log(`Saved screenshot: ${item.name}.png`);
    } catch (err) {
      console.error(`Error on ${item.name}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
  console.log('ALL SCREENSHOTS CAPTURED SUCCESSFULLY!');
}

main().catch(err => {
  console.error('Fatal error:', err);
  server.close();
  process.exit(1);
});
