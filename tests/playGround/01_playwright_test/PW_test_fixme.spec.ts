import { test } from '@playwright/test';
//Fix all test in this spec file
// test.fixme();
test.fixme(({ browserName }) => browserName === 'webkit');
//This test will not be run.
test('Fixme Demonstration', async ({ page, browserName }) => {
  console.log(`We are useing browser ${browserName}`);
});

//Mark a test as "fixme", with the intention to fix it. Test is immediately aborted when you call test.fixme().

test('Test-001', async ({ page, browserName }) => {
  console.log(`We are useing browser ${browserName}`);
  await page.goto('https://www.google.com');
  //skip only TEST-001 test in this spec file
  // test.fixme();
  // use fixme for skip for certain condition
  test.fixme(browserName !== 'webkit', 'This Functionality is not supported in this browser');
});
