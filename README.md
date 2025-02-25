# 🚀 Heroku App - Cypress Testing Guide

## 🖥️ System Requirements
For detailed information on Cypress system requirements, refer to the official documentation:  
🔗 [Cypress System Requirements](https://docs.cypress.io/app/get-started/install-cypress#System-requirements)

## ⚙️ Installing Cypress

To install Cypress, run the following command in the root of your project directory:

```bash
npm install
```

Alternatively, you can install Cypress as a development dependency by running:

```
npm install cypress --save-dev
```

🖱️ Running Cypress Tests
1️⃣ GUI Mode
To run Cypress in interactive mode (GUI mode), follow these steps:

Execute the following command:

```
npx cypress open
```
In the Cypress UI, select E2E Testing.

Choose your target browser.

Select the spec file you want to execute.

2️⃣ Headless Mode
To run all tests from all spec files in headless mode (without the Cypress UI), use the following command:
```
npx cypress run
```
