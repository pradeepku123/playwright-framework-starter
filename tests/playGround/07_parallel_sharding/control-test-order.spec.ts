import { test, expect } from '@playwright/test';

export default function myTest() {
  test(`TEST-spec Control`, async ({ page }) => {
    await page.goto('http://localhost:3000/');
    console.log('TEST-SPEC-CONTROL');
  });
}
