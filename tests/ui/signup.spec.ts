import { test, expect } from "@config/page.config";
test("Login to Application", async ({ signupPage, page }) => {
  await signupPage.goto();

  await page.waitForTimeout(3000);
});
