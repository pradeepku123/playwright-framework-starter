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