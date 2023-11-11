const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();

  const context = await browser.newContext({ offline: false });

  const page = await context.newPage();

  await browser.startTracing(page, { path: 'trace/trace.json' });

  await page.goto('http://localhost:3000');

  await browser.stopTracing();

  browser.on('disconnected', (disconnected) => {
    console.log('Disconnected-Event Listner');
  });
  // browser.version()
  console.log('Browser Version::', browser.version()); // Return current Browser Version

  //browser.browserType()

  //console.log(browser.browserType()); // Return current Browser Type

  // browser.contexts()

  console.log('Browser Context lentgh::', browser.contexts().length); // Return nof of browser context number

  //browser.isConnected()

  console.log('Browser isconnected', browser.isConnected()); // Return Boolean true if browser is connected false if not connected
  await browser.close();
})();
