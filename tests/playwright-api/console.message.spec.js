const { chromium } = require('@playwright/test');
let count = 0;
(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  // Explre Console Message
  page.on('console', (message) => {
    console.log(`This is a console message ${++count}:  ${message.type()}:  ${message.text().slice(0, 15)}`);
  });
  await page.goto('http://localhost:3000');
  await page.evaluate(() => {
    console.log('Hello', 'world');
  });

  page.waitForTimeout(5000); // used for Debug purpose only
  await context.close();
  await browser.close();
})();
