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
