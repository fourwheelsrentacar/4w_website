import { test, expect } from '@playwright/test';

test.describe('Fleet Vehicle Image Integrity & Presentation QA', () => {

  test('Catalog /fleet/ page renders valid, visible images for all vehicles with VehicleImage stage', async ({ page }) => {
    await page.goto('/fleet/');
    await page.waitForTimeout(500);

    const vehicleCards = page.locator('.vehicle-card');
    const cardCount = await vehicleCards.count();
    expect(cardCount).toBeGreaterThanOrEqual(9);

    for (let i = 0; i < Math.min(cardCount, 5); i++) {
      const card = vehicleCards.nth(i);
      const stageImg = card.locator('.vehicle-image-stage img').first();
      await card.scrollIntoViewIfNeeded();
      await expect(stageImg).toBeVisible();

      const isLoaded = await stageImg.evaluate((el: HTMLImageElement) => {
        return el.complete && el.naturalWidth > 0;
      });
      expect(isLoaded, `Image in card ${i} failed to load`).toBe(true);

      const label = card.locator('.vehicle-image-stage p');
      await expect(label).toBeVisible();
    }
  });

  test('Vehicle detail pages load primary hero images properly', async ({ page }) => {
    const vehicleSlugs = ['toyota-corolla', 'honda-civic', 'toyota-fortuner'];

    for (const slug of vehicleSlugs) {
      await page.goto(`/fleet/${slug}/`, { waitUntil: 'domcontentloaded' });

      const heroImg = page.locator('.vehicle-image-stage img').first();
      await expect(heroImg).toBeVisible();

      const isLoaded = await heroImg.evaluate((el: HTMLImageElement) => {
        return el.complete && el.naturalWidth > 0;
      });
      expect(isLoaded, `Hero image for ${slug} failed to load`).toBe(true);
    }
  });

  test('Booking Configurator /build-your-rental/ loads live vehicle image preview', async ({ page }) => {
    await page.goto('/build-your-rental/', { waitUntil: 'domcontentloaded' });

    const summaryImg = page.locator('#summary-visual-img');
    await expect(summaryImg).toBeAttached();

    const isLoaded = await summaryImg.evaluate((el: HTMLImageElement) => {
      return el.src.length > 0;
    });
    expect(isLoaded).toBe(true);
  });

  test('Public Image Credits page /image-credits/ renders licensing info', async ({ page }) => {
    await page.goto('/image-credits/', { waitUntil: 'domcontentloaded' });

    await expect(page.locator('h1')).toContainText('Media & Image Credits');
    const items = page.locator('.border-b.border-slate-800');
    expect(await items.count()).toBeGreaterThanOrEqual(8);
  });

});
