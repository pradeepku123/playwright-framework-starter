import { test } from '@playwright/test';

test.describe.parallel.only('Describe Bock1', () => {
  test('TEST001', async ({ page }) => {
    console.log('TEST001');
    await page.goto('http://playwright.dev/');
  });
  test('TEST002', async ({ page }) => {
    console.log('TEST002');
    await page.goto('http://playwright.dev/');
  });
});

test.describe('Describe Bock2', () => {
  test('TEST001', async ({ page }) => {
    await page.goto('http://playwright.dev/');
  });
  test('TEST002', async ({ page }) => {
    await page.goto('http://playwright.dev/');
  });
});
