## Project: 
# Playwright_PoC_PCoreApp_Celsior


## Pre-requisites

Before getting started with Playwright automation testing on LambdaTest, you need to:

* Download and install **NodeJS**. The version is above 14. Click [here](https://nodejs.org/en/) to download.
* Make sure you are using the latest version of **JavaScript**.
* Install **npm** from the official website by clicking [here](https://www.npmjs.com/).
* Playwright VS Code Plugin Download - https://playwright.dev/docs/getting-started-vscode.
* Navigate to the EXTENSIONS section and type "Playwright". There are multiple options available. Select the Playwright Test for VS Code by Microsoft option.


## Test Name:
POC_PCoreApp.spec.js


## Features:
* TC01_Verify Login Successful with Valid Credential.
* TC02_Navigate On Assign Ticket Page.
* TC03_Fill the details on the assign ticket page.
* TC04_Navigate On Timesheet Page.
* TC05_Fill the details on the timesheet page.


## Commands to setup the Playwright system and executing the scripts on Local Machine:

1. Open the command prompt and navigate to the path where the respository is saved.
2. Use below commands:

* Playwright Installation: npm init playwright -D
* Version Check: npx playwright -version
* Run all the tests: npx playwright test
* Run a single test file: npx playwright test tests/todo-page.spec.ts
* Run a set of test files: npx playwright test tests/todo-page/ tests/landing-page/
* Run tests in headed browsers: npx playwright test --headed
* Run all the tests against a specific project: npx playwright test --project=chromium
* Run in debug mode with Playwright Inspector: npx playwright test --debug
* Ask for help: npx playwright test --help

3. Open the 'playwright.config.js' file and Specs Path.