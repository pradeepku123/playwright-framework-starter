const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/signin');

  // await page.getByRole('button', { name: 'Click for JS Alert' }).click();

  page.on('dialog', async (dialog) => {
    console.log(dialog.message());
    console.log(dialog.defaultValue());
    console.log(dialog.type());
    await dialog.dismiss();
  });

  await page.evaluate(() => prompt('Hello World'));

  await page.waitForTimeout(5000);
  await browser.close();
})();
