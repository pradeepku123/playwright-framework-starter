import { test, expect } from '@playwright/test';
// test.skip() will skip the test block. midtest execution/spec level
//Skip with function only work with spec level
test.skip(() => {
  return false;
}); // skip the all test block spec level
test('TC-001', async ({ page }) => {
  //Navigate to url
  await page.goto('https://playwright.dev/');
});

//test.skip(condition,description) //if condition is true, skip the test block midtest/speclevel
test('TC-002', async ({ page }) => {
  //Navigate to url
  await page.goto('https://playwright.dev/');
  //   expect(false).toBe(true);  // fail if assertion fail otherwise it skip the test block
  //Skip individual test block using midtest skip vaidate before all asertion
  //   test.skip(true, 'Test Fail');
});

//test.skip(callback,description) //if condition is true, skip the test block midtest/speclevel

test('TC-003', async ({ page }) => {
  //Navigate to url
  await page.goto('https://playwright.dev/');
});
