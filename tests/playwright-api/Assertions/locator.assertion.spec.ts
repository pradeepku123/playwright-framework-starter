/**
 * Explore Plawright Locator Assertions
 */
import { test, expect } from '@playwright/test';

test.describe(`Locator Assertion Test`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`http://localhost:3000/signin`);
  });
  test(`Locator: toBeAttached`, async ({ page }) => {
    await expect(page.locator(`[data-test="signup"]`)).toBeAttached();
  });
});
