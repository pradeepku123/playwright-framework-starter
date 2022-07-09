import { test } from '@playwright/test';
//unconditionaly test mark as slow and timeout increased to 3 times as default timeout
test.slow(() => {
  return true;
});

test('TEST-001', async ({ page }) => {
  await page.goto('http://playwright.dev/');
  await page.locator('#search-input').type('Playwright');
});

//test.slow(condition,description );
// test.slow(true, 'TEST-002');
//test.slow(function,description );
