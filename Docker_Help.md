# Here We Learn How to Execute Playwright Test Cases in Docker Container

# Why you need to run test cases execute on Docker container.
    - Docker is a containerization technology that allows you to run applications on a containerizateribuEnvirnment with all running devDependencies installed.
    - Easy to Execute & setup Docker Container with single commmand
    - Manage your Envirnment which not available in local machine.
    -support form playwright Team you have a Free less interrupt Envirnment

# Where to refer Learn About Playwright Docker Container 
    - https://playwright.dev/docs/docker
    - https://medium.com/geekculture/e2e-testing-with-playwright-and-docker-91dd7eb11793 

# How to Execute Playwright Test Cases in Docker Container
   # run in the root of your Playwright project
   -docker run -v $PWD:/tests -w /tests --rm -it mcr.microsoft.com/playwright:<Version>-focal /bin/bash 

   -npm install: install all dependencies of your application in the local node_modules folder.
   -npx playwright install: install the supported browsers.
   -npx playwright test: run all the tests. 
   (Execute yarn instead of npm to install dependencies if you have permission isssue.)

   - After running the above commands, you have a copy of Playright-report folder in your project directory
     in your local machine project folder & when you run locally you have may Permission issue for that you
     need to remove that folder on Docker Container it self.
   - Execute yarn instead of npm to install dependencies if you have permission isssue.
