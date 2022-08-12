import { test, expect } from '@playwright/test';

test(`Explore_Locator-001`, async ({ page }) => {
  await page.goto(`http://localhost:3000/`);
  await page.locator('[id="username"]').fill('This is CSS Selctor Locator');
  await page.pause();
});

test.only(`Text Locator`, async ({ page }) => {
  await page.goto(`http://localhost:3000/`);
  const textNode = await page.locator('text=Sign in').count();
  console.log(textNode);
});
// Locator is create any point of time its used for Retries & auto wait feature in Playwright.
// We ca identify any Locator or portion of text by using text locator
