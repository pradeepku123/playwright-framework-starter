/**
 * Explore Plawright Locator Assertions
 */
import { test, expect } from '@playwright/test';

test.describe(`Locator Assertion Test`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`https://example.cypress.io/commands/actions`);
  });
  test(`Locator: Assertions`, async ({ page }) => {
    await expect(page.locator(`.action-checkboxes [type="checkbox"]`).first()).toBeAttached();
    await page.locator(`.action-checkboxes [type="checkbox"]`).first().check();
    // await page.locator(`.action-checkboxes [type="checkbox"]`).first().uncheck();
    await expect(page.locator(`.action-checkboxes [type="checkbox"]`).first()).toBeChecked();
    await expect(page.locator(`.action-checkboxes [type="checkbox"]`).nth(1)).toBeDisabled();
  });
  test(`Locator Assertion Check : toBeEmpty()`, async ({ page }) => {
    await expect(page.locator(`.action-email`)).toBeEmpty();
    await expect(page.locator(`.action-email`)).toBeEnabled();
    await page.locator(`.action-email`).click();
    await page.locator(`.action-email`).fill('This is test filler');
    await expect(page.locator(`.action-email`)).toBeFocused();
    await expect(page.locator(`.action-email`)).toBeVisible();
    await expect(page.locator(`[for="email1"]`)).toContainText(`Email address`);
    await expect(page.locator(`[for="email1"]`)).toHaveAttribute(`for`, 'email1');
    await expect(page.locator(`.action-email`)).toHaveClass('form-control action-email');
    await expect(page.locator(`.action-checkboxes [type="checkbox"]`).locator(`nth=1`)).toHaveCount(1);
  });
});
