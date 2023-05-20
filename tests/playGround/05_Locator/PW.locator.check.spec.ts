import { test } from '@playwright/test';
test(`Locator:Check`, async ({ page }) => {
  await page.goto(`https://example.cypress.io/commands/actions`);
  //   test.slow();

  //   await page.locator('.action-checkboxes [value="checkbox1"]').scrollIntoViewIfNeeded();
  await page.locator('.action-checkboxes [value="checkbox1"]').check();
  await page.locator('.action-checkboxes [value="checkbox2"]').check();

  await page.locator('.action-multiple-checkboxes [value="checkbox1"]').check();
  await page.locator('.action-multiple-checkboxes [value="checkbox3"]').check();

  await page.locator('.action-checkboxes [value="checkbox1"]').uncheck();
  await page.locator('.action-checkboxes [value="checkbox3"]').uncheck();

  await page.locator('.action-multiple-checkboxes [value="checkbox3"]').uncheck();
  await page.locator('.action-multiple-checkboxes [value="checkbox1"]').uncheck();
  await page.waitForTimeout(3000);
});
test.only(`Locator:Count`, async ({ page }) => {
  await page.goto(`https://example.cypress.io/commands/actions`);
  const elementCount = await page.locator('.action-checkboxes [type="checkbox"]').count();
  console.log(`EleC::` + elementCount);
  await page.waitForTimeout(3000);
});
