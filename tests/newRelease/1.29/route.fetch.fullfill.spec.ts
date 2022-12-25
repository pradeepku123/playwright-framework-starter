import { test } from '@playwright/test';

test('1.29 route.fetch & route.fullfill', async ({ page }) => {
  //Navigate to the Application
  await page.goto('http://localhost:3000/signin');

  await page.route('**/login', async (route) => {
    // Fetch original settings.
    const response = await route.fetch();

    // Force settings theme to a predefined value.
    const json = await response.json();

    json.user.firstName = 'Pradeep';
    // Fulfill with modified data.
    console.log(json);
    await route.fulfill({ json });
  });
  await page.locator('#username').fill(process.env.DB_USERNAME);
  await page.locator('#password').fill(process.env.DB_PASSWORD);
  await page.locator("[data-test='signin-submit']").click();

  await page.waitForTimeout(4000);
});
