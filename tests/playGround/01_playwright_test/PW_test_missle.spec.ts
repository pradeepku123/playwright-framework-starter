import { test } from '@playwright/test';
//test.step()
/**
 * test Step we make a test step by step manner & defined group of Scenarios in test block
 */
test('TC-001', async ({ page }) => {
  test.step('TC-001-ST01', async () => {
    console.log('TC-001-ST01');
  });
  test.step('TC-001-ST02', async () => {
    console.log('TC-001-ST02');
  });
  test.step('TC-001-ST03', async () => {
    console.log('TC-001-ST03');
  });
});
//test.use()

//test.expect()
