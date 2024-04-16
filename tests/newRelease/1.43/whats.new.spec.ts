import { test, expect } from '@config/page.config';
test(`Explore New Release in 1.43 Playwright Version`, async ({ page, context, loginPage }) => {
  console.log(test.info().title);
  await loginPage.goto();
  await loginPage.performLogin();
  console.log(await context.clearCookies());
  await loginPage.goto();
});
