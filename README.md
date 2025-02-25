# Heroku App - Cypress Testing Guide

## System Requirements
Refer to the official Cypress documentation for system requirements:  
🔗 [Cypress System Requirements](https://docs.cypress.io/app/get-started/install-cypress#System-requirements)

## Installing Cypress
Run the following command in the root of your project directory:

npm install

Alternatively, install Cypress as a development dependency:

npm install cypress --save-dev

GUI Mode
To run Cypress in interactive mode:

Execute the following command:
npx cypress open
Select E2E Testing.
Choose your target browser.
Select the spec file to execute.

Headless Mode
To run all tests from all spec files in headless mode:

npx cypress run
This will execute all tests without opening the Cypress UI.

