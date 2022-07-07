import { test } from '@playwright/test';

test.describe('Describe Bock1', () => {
  test('TEST001', async ({ page }) => {
    console.log('TEST001');
    await page.goto('http://playwright.dev/');
  });
  test('TEST002', async ({ page }) => {
    console.log('TEST002');
    await page.goto('http://playwright.dev/');
  });
});
/**
 * Here We Skip a describe blok
 */
test.describe.skip('Describe Bock2', () => {
  test('TEST001', async ({ page }) => {
    await page.goto('http://playwright.dev/');
  });
  test('TEST002', async ({ page }) => {
    await page.goto('http://playwright.dev/');
  });
});
