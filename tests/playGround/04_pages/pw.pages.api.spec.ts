import { test } from '@playwright/test';
/**
 * Here We Can Explore Pages API ON,ONCE,removeListener
 *
 */

//page.on('close', () => {});')

test('TC-001 Page.on("close")', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await page.on('close', () => {
    console.log('Page Closed');
  });
  page.close();
});

//page.on('console', () => {});')

test.only(`TC-002 Page.on("console")`, async ({ page }) => {
  await page.goto('https://playwright.dev');
  page.on('console', (msg) => {
    console.log(msg.text(), 'TEST');
  });
  // console.log('Console API called');
});

// to be continued... page.check('<selector>',options)
