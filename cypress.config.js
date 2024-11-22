const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
  responseTimeout: 10000,
  pageLoadTimeout: 10000,
  includeShadowDom: true,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  env: {
  },
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com/',
    supportFile: 'cypress/support/commands.js',
  },
});