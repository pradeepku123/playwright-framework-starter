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

[Expected Error]
[File Link] tests/playwright-api/Assertions/generic.assertion.spec.ts
*  Error: expect(received).toBeInstanceOf(expected)

    Expected constructor: MyXClass
    Received constructor: MyClass


      21 |   class MyClass {}
      22 |   class MyXClass {}
    > 23 |   expect(new MyClass()).toBeInstanceOf(MyXClass);
         |                         ^
      24 | });
      25 |
*  Error: expect(received).toBeLessThan(expected)

    Expected: < 34
    Received:   34

      24 |
    > 25 |   expect(34).toBeLessThan(34);
         |              ^
      26 | });
      27 |
*  Error: expect(received).toBeLessThanOrEqual(expected)

    Expected: <= 33
    Received:    34

      24 |
      25 |   expect(34).toBeLessThan(35);
    > 26 |   expect(34).toBeLessThanOrEqual(33);
         |              ^
      27 | });
      28 |
* Error: expect(received).toBeNaN()

    Received: 23

      26 |   expect(34).toBeLessThanOrEqual(34);
      27 |   let expt = 23;
    > 28 |   expect(expt).toBeNaN();
         |                ^
      29 | });
      30 |
