/**
 * Explre Keyboard Event Simulation
 */
import { test } from '@playwright/test';

test(`Test Keyboard`, async ({ page }) => {
  await page.goto(`http://localhost:3000`);
  await page.keyboard.press(`Tab`);
  await page.waitForTimeout(4000);
});
