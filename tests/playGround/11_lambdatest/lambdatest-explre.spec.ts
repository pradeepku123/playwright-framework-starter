import { test } from 'lambdatest-setup';
// import { test } from '@playwright/test';

test(`TEST`, async ({ page }) => {
  await page.goto('https://example.cypress.io/commands/actions');
  await page.locator('.action-checkboxes [type="checkbox"]').first().click();
});
