import { test, expect } from '@playwright/test';

test.describe('Fleet Vehicle Image Integrity & Presentation QA', () => {

  test('Catalog /fleet/ page renders valid, visible images for all vehicles with VehicleImage stage', async ({ page }) => {
    await page.goto('/fleet/');
    await page.waitForLoadState('networkidle');

    const vehicleCards = page.locator('.vehicle-card');
    const cardCount = await vehicleCards.count();
    expect(cardCount).toBeGreaterThanOrEqual(9);

    for (let i = 0; i < cardCount; i++) {
      const card = vehicleCards.nth(i);
      const stageImg = card.locator('.vehicle-image-stage img').first();
      await card.scrollIntoViewIfNeeded();
      await expect(stageImg).toBeVisible();

      // Ensure lazy image has finished loading
      await stageImg.evaluate((el: HTMLImageElement) => {
        if (!el.complete) {
          return new Promise((resolve) => {
            el.onload = resolve;
            el.onerror = resolve;
          });
        }
      });

      // Verify img loads successfully with positive naturalWidth
      const isLoaded = await stageImg.evaluate((el: HTMLImageElement) => {
        return el.complete && el.naturalWidth > 0 && el.naturalHeight > 0;
      });
      expect(isLoaded, `Image in card ${i} failed to load`).toBe(true);

      // Verify bounding box dimensions
      const box = await stageImg.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.width).toBeGreaterThan(50);
      expect(box!.height).toBeGreaterThan(50);

      // Verify compliance label is present
      const label = card.locator('.vehicle-image-stage p');
      await expect(label).toBeVisible();
      const text = await label.textContent();
      expect(text?.length).toBeGreaterThan(5);
    }
  });

  test('Vehicle detail pages load primary hero images properly', async ({ page }) => {
    const vehicleSlugs = [
      'toyota-corolla',
      'honda-civic',
      'toyota-fortuner',
      'toyota-revo',
      'suzuki-alto',
      'toyota-yaris',
      'toyota-hiace',
      'toyota-coaster',
      'audi-a6'
    ];

    for (const slug of vehicleSlugs) {
      await page.goto(`/fleet/${slug}/`);
      await page.waitForLoadState('networkidle');

      const heroImg = page.locator('.vehicle-image-stage img').first();
      await expect(heroImg).toBeVisible();

      const isLoaded = await heroImg.evaluate((el: HTMLImageElement) => {
        return el.complete && el.naturalWidth > 0 && el.naturalHeight > 0;
      });
      expect(isLoaded, `Hero image for ${slug} failed to load`).toBe(true);
    }
  });

  test('Booking Configurator /build-your-rental/ loads live vehicle image preview', async ({ page }) => {
    await page.goto('/build-your-rental/');
    await page.waitForLoadState('networkidle');

    const summaryImg = page.locator('#summary-visual-img');
    await expect(summaryImg).toBeVisible();

    const isLoaded = await summaryImg.evaluate((el: HTMLImageElement) => {
      return el.complete && el.naturalWidth > 0 && el.naturalHeight > 0;
    });
    expect(isLoaded).toBe(true);
  });

  test('Public Image Credits page /image-credits/ renders licensing info', async ({ page }) => {
    await page.goto('/image-credits/');
    await page.waitForLoadState('networkidle');

    await expect(page.locator('h1')).toContainText('Media & Image Credits');
    const items = page.locator('.border-b.border-slate-800');
    expect(await items.count()).toBeGreaterThanOrEqual(8);
  });

});
