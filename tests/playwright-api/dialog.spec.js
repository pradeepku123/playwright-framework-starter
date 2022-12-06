const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://the-internet.herokuapp.com/javascript_alerts');

  await page.getByRole('button', { name: 'Click for JS Alert' }).click();

  await page.waitForTimeout(5000);
  await browser.close();
})();
