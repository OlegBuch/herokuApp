const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1600,
  viewportHeight: 1080,
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  pageLoadTimeout: 30000,
  includeShadowDom: true,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com/',
    supportFile: 'cypress/support/commands.js',
  },
});