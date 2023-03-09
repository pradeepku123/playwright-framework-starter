import { test, expect } from '@config/page.config';
test('Login to Application', async ({ signupPage, loginPage, page }) => {
  await signupPage.goto();
  await signupPage.performSignUp();

  await page.waitForTimeout(3000);

  // await loginPage.goto();
  await loginPage.performLogin();
  await expect(page.locator('[data-test="sidenav-user-full-name"]')).toHaveText('Edgar J');
});
