import { test, expect } from '@playwright/test';

test.describe('E2E Visual Booking Configurator Redesign QA', () => {

  test('Step 1 Category Selection filters Brand Step 2', async ({ page }) => {
    await page.goto('/build-your-rental/');
    await page.waitForLoadState('networkidle');

    // Click SUV Category
    const suvCard = page.locator('.cat-card[data-cat-id="suv"]');
    await expect(suvCard).toBeVisible();
    await suvCard.click();

    // Verify Step 2 Brand panel is visible
    const step2 = page.locator('#step-panel-2');
    await expect(step2).toBeVisible();

    // Verify BYD, Toyota, Kia, Haval, Deepal tiles exist
    await expect(page.locator('.brand-tile[data-brand-slug="toyota"]')).toBeVisible();
    await expect(page.locator('.brand-tile[data-brand-slug="kia"]')).toBeVisible();
    await expect(page.locator('.brand-tile[data-brand-slug="byd"]')).toBeVisible();
  });

  test('Toyota Corolla Journey: Category -> Brand -> Model -> Year/Shape -> Route -> Review', async ({ page }) => {
    await page.goto('/build-your-rental/');
    await page.waitForLoadState('networkidle');

    // Step 1: Click Sedan
    await page.locator('.cat-card[data-cat-id="sedan"]').click();

    // Step 2: Click Toyota
    await page.locator('.brand-tile[data-brand-slug="toyota"]').click();

    // Step 3: Choose Corolla
    const modelBtn = page.locator('.btn-select-model[data-id="toyota-corolla-altis"]');
    await expect(modelBtn).toBeVisible();
    await modelBtn.click();

    // Step 4: Verify Year/Shape options for Corolla
    const step4 = page.locator('#step-panel-4');
    await expect(step4).toBeVisible();
    const yearCards = page.locator('.year-shape-card');
    expect(await yearCards.count()).toBeGreaterThanOrEqual(1);

    // Click Continue
    await page.locator('#btn-confirm-year-color').click();

    // Step 5: Route
    await expect(page.locator('#step-panel-5')).toBeVisible();
    await page.locator('.btn-next').first().click();

    // Step 6: Customer Details
    await expect(page.locator('#step-panel-6')).toBeVisible();
    await page.locator('#field-name').fill('Test Customer');
    await page.locator('#field-phone').fill('03216616644');

    // Click Review
    await page.locator('.btn-next').nth(1).click();

    // Step 7: Review Screen
    await expect(page.locator('#step-panel-7')).toBeVisible();
    await expect(page.locator('#review-vehicle-title')).toContainText('Toyota Corolla');
    await expect(page.locator('#review-status-badge')).toContainText('AVAILABLE THROUGH 4WHEELS');
  });

  test('Kia Sportage Generation Separation: Older Sportage vs Current Sportage L', async ({ page }) => {
    await page.goto('/build-your-rental/');
    await page.waitForLoadState('networkidle');

    // Select ALL category & Kia Brand
    await page.locator('.cat-card[data-cat-id="suv"]').click();
    await page.locator('.brand-tile[data-brand-slug="kia"]').click();

    // Verify both Sportage models appear
    const olderSportage = page.locator('.model-card[data-vehicle-id="kia-sportage-alpha-awd"]');
    const sportageL = page.locator('.model-card[data-vehicle-id="kia-sportage-l-hybrid"]');

    await expect(olderSportage).toBeVisible();
    await expect(sportageL).toBeVisible();

    // Verify Sportage L has distinct text
    await expect(sportageL).toContainText('Sportage L');
  });

  test('BYD Chinese New Energy Journey: Request Catalog Item', async ({ page }) => {
    await page.goto('/build-your-rental/');
    await page.waitForLoadState('networkidle');

    await page.locator('.cat-card[data-cat-id="suv"]').click();
    await page.locator('.brand-tile[data-brand-slug="byd"]').click();

    const atto3Btn = page.locator('.btn-select-model[data-id="byd-atto-3-ev"]');
    await expect(atto3Btn).toBeVisible();
    await atto3Btn.click();

    await page.locator('#btn-confirm-year-color').click();
    await page.locator('.btn-next').first().click();

    await page.locator('#field-name').fill('EV Traveler');
    await page.locator('#field-phone').fill('03216616644');
    await page.locator('.btn-next').nth(1).click();

    await expect(page.locator('#review-status-badge')).toContainText('REQUEST THIS MODEL');
  });

});
