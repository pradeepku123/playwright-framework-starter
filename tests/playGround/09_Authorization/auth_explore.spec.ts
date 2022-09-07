import { test, expect } from '@config/page.config';

test(`Auth Explorer`, async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.performLogin();
  await expect(page.locator('[data-test="sidenav-user-full-name"]')).toHaveText('Edgar J');
  await page.context().storageState({ path: 'storage_state/storageState.json' });
  await page.waitForTimeout(3000);
});
