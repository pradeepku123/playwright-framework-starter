import { test } from '@playwright/test';
//test..info() will print the test info inside test block otherswise throw Error
test('Test info', async ({ page, browserName }) => {
  console.log(`We are useing browser ${browserName}`);
  //Use all method as use "tesinfo" fixture
  test.info().fixme();
});
