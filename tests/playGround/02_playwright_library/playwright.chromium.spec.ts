const { chromium } = require('playwright');
//use the chromium browser
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://playwright.dev/');

  await browser.close();
})();
