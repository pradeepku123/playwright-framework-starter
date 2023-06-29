/**
 * Expolre API Assertion Under PW API
 */
import { test } from '@playwright/test';

test(`Assertion API`, async ({ page }) => {
  await page.goto(`http://playwright.dev`);
  await page.waitForTimeout(4000);
});
