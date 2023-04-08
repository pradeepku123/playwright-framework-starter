import { test, expect } from '@config/page.config';

test(`Locator: All()`, async ({ page }) => {
  await page.goto(`https://example.cypress.io/commands/actions`);

  const li = await page.locator(`[value='checkbox2']`).all();

  li.forEach(async (locatorEle) => {
    await locatorEle.click({ force: true });
  });

  await page.waitForTimeout(3000);
});

test.only(`Locator: allInnerText() `, async ({ page, loginPage }) => {
  await loginPage.goto();
  const dataLinks = await page.locator(`[data-test='signup']`).allInnerTexts();
  console.log(`${dataLinks}`);
  await loginPage.performLogin();
  // await page.waitForTimeout(3000);
  await page.waitForSelector(`[role="button"]`);
  const allLinkTexts = await page.locator(`[role="button"]`).allTextContents();

  console.log(allLinkTexts);
});
