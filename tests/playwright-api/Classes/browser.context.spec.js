const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: false });

  // create a incognito browser context
  const context = await browser.newContext();

  //close
  context.on('close', () => {
    console.log('on.call');
  });

  //page
  context.on('page', () => {
    console.log('on.page');
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  await browser.close();
})();
