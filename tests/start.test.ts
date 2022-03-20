import { test, expect } from "@playwright/test";

test("StarterTest", async ({ page }) => {
  await page.goto("http://localhost:3000/signin");
  await page.waitForTimeout(3000);
});
