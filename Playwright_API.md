[Browser]
- browser.on('disconnected')
- browser.browserType()
- browser.close()
- browser.contexts()
- browser.isConnected()
- browser.newBrowserCDPSession()
- browser.newContext(options)
- browser.newPage(options)
- browser.startTracing(page, options)
- browser.stopTracing()
- browser.version()

[BrowserContext]
- BrowserContext helps to create independent browser session context
- BrowserContext helps to creae "incognito" browser session context which not stored browser session  data to Disk.

[ConsoleMessag]
- consoleMessage.args()
- consoleMessage.location()
- consoleMessage.text()
- consoleMessage.type()

[Dilog]

- Playwright can interact with the web page dialogs such as alert, confirm, prompt as well as beforeunload confirmation.
- Dialogs are dismissed automatically, unless there is a page.on('dialog') listener. When listener is present, it must either dialog.accept([promptText]) or dialog.dismiss() the dialog - otherwise the page will freeze waiting for the dialog, and actions like click will never finish.

[Download]

-  await page.goto(`http://the-internet.herokuapp.com/download`);

-  // wait Download Event

-  const waitEventDownloadFile = page.waitForEvent('download');
-   await page.locator(`[href="download/promode.json"]`).click();

-  const download = await waitEventDownloadFile;

-  // await download.saveAs(``);

-  console.log(await download.path());

-  // Find Suggested Fie Name

-  console.log(download.suggestedFilename());

-  //Find Downlod URL

-  console.log(download.url());

-  //Get the Page Downloaf Belongs to
-  const getPageFromDownloadObject = download.page();

-  // Delete  Download File
-  await download.delete();

-  await page.waitForTimeout(5000);