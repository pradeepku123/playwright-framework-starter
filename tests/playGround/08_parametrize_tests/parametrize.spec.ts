import { test, expect } from '@playwright/test';

const people = ['Pradeep', 'Kumar', 'Behera'];

for (const name of people) {
  test(`Current Parametrize ${name}`, async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });
}
