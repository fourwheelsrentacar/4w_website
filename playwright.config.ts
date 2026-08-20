import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 2,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'desktop-chrome',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 }, defaultBrowserType: 'chromium' },
    },
    {
      name: 'mobile-iphone13',
      use: { ...devices['Pixel 5'], viewport: { width: 390, height: 844 }, defaultBrowserType: 'chromium' },
    },
    {
      name: 'mobile-375',
      use: { ...devices['Pixel 5'], viewport: { width: 375, height: 667 }, defaultBrowserType: 'chromium' },
    },
  ],
  webServer: {
    command: 'npx astro preview --port 4321',
    port: 4321,
    reuseExistingServer: !process.env.CI,
  },
});
