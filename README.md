## PROJECT INFO

[PRE-REQUISITE]

1. NODE
2. NPM/YARN
3. VS Code playwright- plugin

[SETUP]

1. Initialize NODE Project

   - npm init -y

2. Setup with git

   - git init -> Initialized empty Git repository in /<_>/<_>/workstation/playwright/playwright-framework-starter/.git/

3. Create github Repo & link local to Remote Repo.

4. Add Gitignore file to exclude Node_Modules folder
   |-.gitignore

[SETUP-PLAYWRIGHT]

1. install playwright test runner

   - npm i -D @playwright/test -> its add playwright devDependencies to your package.json & create package-lock.json

2. install all browser binding
   - npx playwright install -> its install all 3 defaulut Browser binding to cusrrent system (Chromium,firefox,webKit)

[SETUP-FIRST-TEST]

1. Create Tests Dir for contains test spec.
   |-tests
   |-.gitignore
   |package-lock.json
   |package.json
   |-README.md
2. Create start.spec.ts for Kick-start
   |-tests
   | |-start.spec.ts

[SETUP-Playwright-Plugin]

1. Open Command Pallet CTRL+P
2. Type >Playright install
3. Deselcet All Browser Binding
4. Select GitAction for Playwright add to your Project Directory
5. its automatically add Global "playwrignt.config.ts"
6. change two properties on Global playwrigt.config.ts file
   - testDir: "./tests", -> Playwright detect teston sideNav Explorer
   - use:{ headless: false,} -> for Headed mode test Execution

[Setup-test-ENV]

1. We are going to Test Cypress-Real-World finace app
2. Clone the Repo
   - git clone https://github.com/cypress-io/cypress-realworld-app.git {pre-requsite Node Should be present}
   - yarn install
   - yarn start
   - navigate https://localhost:3000
   - UserID-Katharina_Bernier
   - Password:- s3cret

[Build-Framework]

1. all our test file should kept in tests Directory
2. all our Utility File & Page file KEpt in main Directory
   - Create a main DIR
     - |-main
       | |-pages -> contains all page layer
   - Create a tests layers
     - |-tests
       | |-api -> contain all api releated test
       | |-ui -> contain all ui releated test

[PlayWright-Configuration]

1. [global-config] Add Properties to playwright global Configuration
   - use: {
     headless: false,
     viewport: { width:1920,height:720},
     ignoreHTTPSErrors: true,
     video: 'false'
     }
2. [local-config]

   - test.use({ viewport: { width: 600, height: 900 } }); Under \*.test.spec.ts

3. [Basic-Option]

[Playwright-TimeOut]

1. action Time out By Default "0" for indivisual action
   - config = { use: { actionTimeout: 10000 } }
2. Navigation Timeout

   - config = { use: { navigationTimeout: 30000 } }
   - {page.goto('/', { timeout: 30000 })}

3. TestTimeout by Default its 30000ms sec its for test function,fixture,beforeEach,afterEach

   - test timeout for Config
     - const config:PlayWrightTestConfig ={
       timeout: 5 * 60 *1000
       }
   - testTimeot for Single Test
     - test('EX',asunc async ({page})={
       test.setTimeout(1200000) // For an individual test time out
       })
   - change timeout from a hook or fixture

     - test.beforeEach(async ({page},testinfo)=>{

       testinfo.setTimeout(testinfo.timeout+30000)

     })

4. ExpectTimeout
   - webfirst assertion timeout by defalut 5000ms
   - playwright.config.ts
     - const config:PlaywrghtTestConfig ={
       expect:{
       timeout: 10\*1000,
       }
       }
     - for Single Assertion
       - \*.toHaveText('Sign in',{timeout:1000})
5. GlobalTemeout

   - Paywright Support timeout for whole test run.

   - config={
     globalTimeOut: 60*60*1000
     }

[Framework-Level-Packages-install]

1. for access envirnment Variable we need to install "dotenv" & Store keyValue pair format in .env file
   - npm i -D dotenv Which is configure in "playwright.config.ts" file
   - create .env file & Store all Global Envirnment

[PlaywrightRunner-parallel]

1. import { test } from '@playwright/test';

   test.describe.configure({ mode: 'parallel' }); # Run all test in specific spec file run parallely
   test.describe.configure({ mode: 'serial' }); # if we have interdependent test cases then its recomended to execute test in serial Mode

[maxFailure]

1. we can define max failure for test execution by Two way

   - using confing Options - const config: PlaywrightTestConfig = {
     // Limit the number of failures on CI to save resources
     maxFailures: process.env.CI ? 10 : undefined,
     };
   - or by provide CLI - npx playwright test --max-failures=10 its cater only 10 max failure per run.

2. We can create a test list file that will control the order of tests - first run feature-b tests, then feature-a tests.

   - // test.list.ts
     import './feature-b.spec.ts';
     import './feature-a.spec.ts';
     Now disable parallel execution by setting workers to one, and specify your test list file.
     const config: PlaywrightTestConfig = {
     workers: 1,
     testMatch: 'test.list.ts',
     };

[Command_line_tools]

npx playwright --help

- install browser
  npx playwright install
- install brwoser specific browsers
  npx playwright install webkit
- open new pages
  npx playwright open --device="iPhone 11" wikipedia.org
  npx playwright open --device="Desktop Chrome" playwright.dev
  npx playwright open --device="Desktop Firefox" playwright.dev
- Emulate color scheme and viewport size
  npx playwright open --viewport-size=800,600 --color-scheme=dark twitter.com
- Inspect selectors
  Playwrigt "open" and codege
  playwright.$('text=Playwrigt')
- Take ScreenShot
  npx playwright screenshot playwright.dev screenshots/myscr.jpeg
- Take pdf
  npx playwright pdf playwright.dev screenshots/myscr.pdf

[Debuging_Test]

- playwright inspector

--debug
npx playwright test --debug

- PWDEBUG for Bash
  PWDEBUG=1 npx playwright test

[V1.44]

Execute only Failed tests from last execution
$ npx playwright test --last-failed
