import { test, expect } from '@playwright/test';

//Playwright Test Pick Configuration File Automatically

test(`Global Configuration`, async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(2000);
});

/**
 * Command Execute fot This Spec File
 * npx playwright test tests/playGround/10_Configuration/global_configuration.spec.ts --headed --browser=firefox
 * npx playwright test tests/playGround/10_Configuration/global_configuration.spec.ts --headed --browser=webkit
 * By default Execute With Chomium
 * npx playwright test --config=tests/my.config.j if your Configuration File not Place in Default then you need to pass
 *     COnfiguration File Path with <--config>
 */
