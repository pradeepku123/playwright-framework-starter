/**
 * Explore Page level Assertion with Playwright Test Runner
 */
import { test, expect } from '@playwright/test';

test.describe(`Page level Assertion with Playwright Test Runner`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`https://example.cypress.io/commands/actions`);
  });
  test(`Page Asseriton: toHaveUrl`, async ({ page }) => {
    await expect(page).toHaveURL(`https://example.cypress.io/commands/actions`, { timeout: 2000 });
    await expect(page).toHaveTitle('Cypress.io: Kitchen Sink');
    await expect(page).toHaveScreenshot();
  });
});
