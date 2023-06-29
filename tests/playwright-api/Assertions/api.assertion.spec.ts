/**
 * Expolre API Assertion Under PW API
 */
import { test, expect } from '@playwright/test';

test(`Assertion API`, async ({ page }) => {
  const resp = await page.request.get(`http://playwright.dev`);
  await expect(resp).not.toBeOK();
});
