import { test, expect } from '@playwright/test';

test(`test Assertion Negggeation`, async ({ page }) => {
  expect('TRUE').not.toEqual('TRUE');
});

test(`Soft Assertion`, async ({ page }) => {
  //Failed Assertion will terminate execution. Playwright all so Soft Assertion.
  // Soft Assertion do not failed execution. but mark as test Failed
  await page.goto('http://localhost:3000');
  await expect.soft(page.locator('h1:has-text("Sign in")')).toBeVisible();
  const TEXT = await page.locator('h1:has-text("Sign in")').innerText();
  console.log(TEXT);
  expect(TEXT, 'This was test Neggation').toEqual('Sign in');
});

test.only(``, async ({ page }) => {
  await page.goto('https://example.cypress.io/commands/actions');
  await page.locator('.action-checkboxes [type="checkbox"]').first().click();
  await expect(page.locator('.action-checkboxes [type="checkbox"]').first()).toBeChecked();
});
