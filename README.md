```bash
npm install
Alternatively, you can install Cypress as a development dependency by running:

bash
Copy
Edit
npm install cypress --save-dev
🖱️ Running Cypress Tests
1️⃣ GUI Mode
To run Cypress in interactive mode (GUI mode), follow these steps:

Execute the following command:

bash
Copy
Edit
npx cypress open
In the Cypress UI, select E2E Testing.

Choose your target browser.

Select the spec file you want to execute.

2️⃣ Headless Mode
To run all tests from all spec files in headless mode (without the Cypress UI), use the following command:

bash
Copy
Edit
npx cypress run
This will run all the tests without opening the Cypress UI, ideal for CI/CD environments.
