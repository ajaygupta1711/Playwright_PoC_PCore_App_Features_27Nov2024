## Project: 
# Playwright_PoC_nopCommerceApp


## Pre-requisites

Before getting started with Selenium automation testing on LambdaTest, you need to:

* Download and install **NodeJS**. You should be having **NodeJS v6 to NodeJS v16**. Click [here](https://nodejs.org/en/) to download.
* Make sure you are using the latest version of **JavaScript**.
* Install **npm** from the official website by clicking [here](https://www.npmjs.com/).
* For Cypress Download - https://download.cypress.io/desktop (Cypress package version: 12.17.4)


## Test Name:
POC_nopCommerce.cy.js


## Features:
* TC01_Verify Login Successful with Valid Credential.
* TC02_Navigate to the Product Search option.
* TC03_Search Any Product with Category.
* TC04_Add New Product.
* TC05_Verify Added Product on Product Search screen.
* TC06_Edit and Upload Image with Existing Product.
* TC07_Add and Verify New Customer.
* TC08_Add and Verify New Discount.
* TC09_Add New Vendor and Verify Error Message.
* TC10_Logout from Application.


## Commands to setup the cypress system on Local Machine:

1. Open the command prompt and navigate to the path where the respository is saved.
2. Start using below mentioned command one by one.

* npm -install
* npm cypress --version
* npm install cypress -g
* npm install --save-dev cypress-file-upload
* npm install --save-dev cypress-axe
* npm install --save-dev cypress-audit
* npm install --save-dev @cypress-audit/lighthouse

3. Open the 'cypress.config.js' file and Specs Path.


## Executing the Test

* npx cypress open
* npx cypress run --browser chrome
* npx cypress run --browser chrome --headed
* npx cypress run
