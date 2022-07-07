import { test } from '@playwright/test';
/*
test('test', async ({ page, browserName }) => {
  await page.goto('http://playwright.dev/');
  test.fail(browserName === 'chromium', 'This is not implemented For chromium yet');
});
*/
test.fail(({ browserName }) => browserName === 'chromium', 'This is not implemented For chromium yet');

test('fail in WebKit 1', async ({ page }) => {
  // ...
});
test('fail in WebKit 2', async ({ page }) => {
  // ...
});
