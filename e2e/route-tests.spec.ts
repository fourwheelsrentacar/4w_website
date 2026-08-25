import { test, expect } from '@playwright/test';

test.describe('Pakistan Verified Route Database & Google Maps Fallback QA', () => {

  test('Known route (Lahore -> Islamabad) loads verified distance from database in Configurator', async ({ page }) => {
    await page.goto('/build-your-rental/');
    await page.waitForLoadState('networkidle');

    // Switch to Step 5 (Route) via script or click
    await page.evaluate(() => {
      // @ts-ignore
      if (window.showStep) window.showStep(5);
    });

    // Fill Lahore to Islamabad
    await page.fill('#field-pickup', 'Johar Town, Lahore');
    await page.fill('#field-destination', 'Islamabad F-7');
    await page.dispatchEvent('#field-destination', 'input');

    // Verify distance badge
    const badge = page.locator('#calc-status-badge');
    await expect(badge).toContainText('4WHEELS Verified Route Database');

    // Verify distance text
    const distText = page.locator('#route-calc-distance');
    await expect(distText).toContainText('375 km');
  });

  test('Unknown route shows Google Maps fallback button with correct URL params', async ({ page }) => {
    await page.goto('/build-your-rental/');
    await page.waitForLoadState('networkidle');

    // Switch to Step 5 (Route) via script or click
    await page.evaluate(() => {
      // @ts-ignore
      if (window.showStep) window.showStep(5);
    });

    // Fill unknown route
    await page.fill('#field-pickup', 'Johar Town, Lahore');
    await page.fill('#field-destination', 'Shogran Valley');
    await page.dispatchEvent('#field-destination', 'input');

    // Verify Google Maps fallback button link
    const gmapsBtn = page.locator('#btn-google-maps-check');
    await expect(gmapsBtn).toBeVisible();

    const href = await gmapsBtn.getAttribute('href');
    expect(href).not.toBeNull();
    expect(href).toContain('api=1');
    expect(href).toContain('origin=Johar%20Town');
    expect(href).toContain('destination=Shogran%20Valley');
    expect(href).toContain('travelmode=driving');
  });

});
