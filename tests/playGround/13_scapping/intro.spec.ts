import { test } from '@playwright/test';

test(`Twitter API`, async ({ page }) => {
  await page.goto(`https://twitter.com/`);

  const allTextCount = await page.locator('[class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-bcqeeo r-qvutc0"]');
  console.log(allTextCount);
  await page.waitForTimeout(4000);
});
