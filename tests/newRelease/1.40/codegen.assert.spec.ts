import { test, expect } from '@playwright/test';

test('codeGen assert New Feature Playwright 1.40.0 ', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('heading', { name: 'Playwright enables reliable' }).click();
  await expect(page.locator('h1')).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
  await expect(page.getByRole('contentinfo')).toContainText('Copyright © 2023 Microsoft');
  await expect(page.getByRole('img', { name: 'Browsers (Chromium, Firefox,' })).toBeVisible();
});
