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
    await expect(page.locator(`[href="https://on.cypress.io/type"]`).nth(0)).toHaveCSS(
      `background-color`,
      `rgba(0, 0, 0, 0)`
    );
    await expect(page.locator(`[id="navbar"]`)).toHaveId(`navbar`);
    await expect(page.locator(`[value="Double click to edit"]`)).toHaveValue(`Double click to edit`);
    await expect(page.locator(`[class="action-div"]`)).toHaveText(`double click to edit`, {
      timeout: 7000,
      ignoreCase: true,
    });
  });
  test(`Locator ScreenShot Assertion`, async ({ page }) => {
    await expect(page.locator(`[id=navbar]`)).toHaveScreenshot('hello.png', {
      mask: [page.locator(`[href="/cypress-api"]`)],
      maxDiffPixels: 4892,
    });
  });
});
