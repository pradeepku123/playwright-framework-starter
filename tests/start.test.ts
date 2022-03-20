import { test, expect } from "@playwright/test";

test("StarterTest", async ({ page }) => {
  await page.goto("https://www.google.com");
});
