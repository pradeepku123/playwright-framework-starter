# install Allure Reporting to Playwright (Third Party Reporting Library)
[Links]
 - https://playwright.dev/docs/test-reporters#third-party-reporter-showcase
 - https://www.npmjs.com/package/allure-playwright

 [Steps to Install]
 - npm i -D  allure-playwright [For project]
 - yarn add allure-commandline -D [Working with allure]

 [get Started]
  - npx playwright test --reporter=line,allure-playwright
  - npx allure generate allure-results -o allure-report --clean -> [Report successfully generated to allure-report]
  - npx allure open allure-report -> [Starting web server]

