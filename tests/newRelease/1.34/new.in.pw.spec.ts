import { expect, test } from '@playwright/test';

test(`new in PW 1.35`, async ({ page }) => {
  await page.goto(`https://playwright.dev`);
  await expect(page).toHaveScreenshot({
    mask: [page.locator('img')],
    maskColor: '#00ZF01', // green
  });
  await page.waitForTimeout(3000);
});
