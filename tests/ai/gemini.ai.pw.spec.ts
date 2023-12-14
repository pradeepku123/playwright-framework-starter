import { test, expect } from '@playwright/test';

test(`Gemini AI`, async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.screenshot({ path: 'test.jpg' });
});
