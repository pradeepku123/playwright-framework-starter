import { test, expect } from '@playwright/test';

test('Download File', async ({ page }) => {
  await page.goto(`http://the-internet.herokuapp.com/download`);

  // wait Download Event

  const waitEventDownloadFile = page.waitForEvent('download');
  await page.locator(`[href="download/promode.json"]`).click();

  const download = await waitEventDownloadFile;

  // await download.saveAs(``);

  console.log(await download.path());

  // Find Suggested Fie Name

  console.log(download.suggestedFilename());

  //Find Downlod URL

  console.log(download.url());

  //Get the Page Downloaf Belongs to
  const getPageFromDownloadObject = download.page();

  // Delete  Download File
  await download.delete();

  await page.waitForTimeout(5000);
});
