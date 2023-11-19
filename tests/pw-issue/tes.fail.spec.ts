import { test, expect } from '@playwright/test';

test(`[BUG] test.fail(true) will not pass if failure is caused by .waitFor*() function timeout`, async ({ page }) => {
  test.fail(true);

  await page.goto('https://www.google.com');

  // this will cause a failure
  await page.waitForSelector('text=somerandomstring');
  // this will cause a failure
  //   await page.getByText('somerandomstring').locator('visible=true').waitFor();
  // this will pass
  //   await expect(page.getByText('somerandomstring')).toBeVisible();
});
