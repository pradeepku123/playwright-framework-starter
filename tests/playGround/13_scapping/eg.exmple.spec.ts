import { test } from '@playwright/test';

test(`Twitter API`, async ({ page }) => {
  await page.goto(`https://www.flipkart.com/`);
  await page.locator('[class="_2KpZ6l _2doB4z"]').click();
  await page.locator('[class="eFQ30H"]').nth(0).click();
  await page.hover('[class="_2I9KP_"]');

  await page.waitForTimeout(4000);
});
