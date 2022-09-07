import { test, expect } from '@config/page.config';

test.use({ storageState: 'storage_state/storageState.json' });

test(`Auth Explorer-relogin `, async ({ loginPage, page }) => {
  await loginPage.goto();
  await page.waitForTimeout(3000);
});
