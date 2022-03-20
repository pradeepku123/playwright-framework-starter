import { test, expect } from "@playwright/test";

test.use({
  viewport: {
    width: 1280,
    height: 720,
  },
});
test("StarterTest", async ({ page }) => {
  await page.goto("/signin");
  await page.waitForTimeout(3000);
});
