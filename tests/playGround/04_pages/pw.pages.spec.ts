import { test, expect } from '@playwright/test';

//Pages
/**
 * 1. Each BrowserContext has multiple pages.
 * 2. Each page refer to single tab or popup window with in BrowserContext.
 * 3. Used for navigate to URLs and intracr with page content
 */
test('PAGES-001', async ({ context }) => {
  //multiple pages
  /**
   * 1. Each page behaves like a browser tab.
   * 2. pages inside context level emulation,like viewport size,custom network, browser locale
   */
  const page = await context.newPage();
  const page2 = await context.newPage();
  await page.goto('https://www.google.com');
  await page2.goto('https://playwright.dev');
  console.log('test');
  page.waitForTimeout(5000);
});

//Handling new Pages

test.only('PAGES-002', async ({ context }) => {
  /**
   * The Page event on browser is emitted when a new page is opened.
   * We con hold And resloved by Promise.all([])
   */
  const page = await context.newPage();
  await page.goto('https://playwright.dev');
  //   await page.locator('[class="gh-btn"]').click();
  expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
  const [newPage] = await Promise.all([context.waitForEvent('page'), page.locator('[class="gh-btn"]').click()]);
  expect(newPage).toHaveTitle(
    'GitHub - microsoft/playwright: Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.'
  );
  await page.waitForTimeout(5000);
});
/**
 *
 */
test('', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/javascript_alerts');
  const [newPage] = await Promise.all([page.waitForEvent('popup'), page.click('button[onClick="jsAlert()"]')]);

  console.log(newPage.title());
});
