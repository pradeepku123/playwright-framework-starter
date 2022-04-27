import { test, expect } from "@config/page.config";
test("Login to Application", async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.performLogin();
  await expect(page.locator('[data-test="sidenav-user-full-name"]')).toHaveText(
    "Edgar J"
  );
  // await page.waitForTimeout(3000);
});
