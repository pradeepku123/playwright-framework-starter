import { test, expect } from '@playwright/test';

//Playwright Test Pick Configuration File Automatically

test.use({
  viewport: {
    width: 500,
    height: 500,
  },
});

test(`Global Configuration`, async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(2000);
});
