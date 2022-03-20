import { test, expect } from "@playwright/test";
import { LoginPage } from "../../main/pages/login.page";
test("Login to Application", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.performLogin();
  await expect(page.locator('[data-test="sidenav-user-full-name"]')).toHaveText(
    "Edgar J"
  );
  await page.waitForTimeout(3000);
});
