import { test, expect } from '@playwright/test';

test.describe('Pakistan Verified Route Database & Google Maps Fallback QA', () => {

  test('Known route (Lahore -> Islamabad) loads verified distance from database in Configurator', async ({ page }) => {
    await page.goto('/build-your-rental/');
    await page.waitForLoadState('networkidle');

    // Select Step 2 (Pickup & Drop-off)
    const nextBtn = page.locator('.btn-next').first();
    await nextBtn.click();

    // Fill Lahore to Islamabad
    await page.fill('#field-pickup', 'Johar Town, Lahore');
    await page.fill('#field-destination', 'Islamabad F-7');

    // Trigger update
    await page.dispatchEvent('#field-destination', 'input');

    // Verify distance badge
    const badge = page.locator('#calc-status-badge');
    await expect(badge).toContainText('4WHEELS Verified Route Database');

    // Verify distance text
    const distText = page.locator('#route-calc-distance');
    await expect(distText).toContainText('375 km');

    // Verify source note
    const note = page.locator('#route-source-note');
    await expect(note).toContainText('4WHEELS verified route database');
  });

  test('Unknown route shows Google Maps fallback button with correct URL params', async ({ page }) => {
    await page.goto('/build-your-rental/');
    await page.waitForLoadState('networkidle');

    // Move to step 2
    await page.locator('.btn-next').first().click();

    // Fill unknown route
    await page.fill('#field-pickup', 'Johar Town, Lahore');
    await page.fill('#field-destination', 'Shogran Valley');
    await page.dispatchEvent('#field-destination', 'input');

    // Verify status badge
    const badge = page.locator('#calc-status-badge');
    await expect(badge).toContainText('Route Not in Quick Database');

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
