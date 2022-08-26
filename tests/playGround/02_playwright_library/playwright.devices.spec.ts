const { firefox, webkit, devices } = require('@playwright/test');
const iphone = devices['iPhone 10'];
(async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext({ ...iphone });
  const page = await context.newPage();
  await page.goto('https://playwright.dev/');
  await browser.close();
})();
