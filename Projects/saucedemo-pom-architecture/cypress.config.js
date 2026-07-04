const { defineConfig } = require("cypress");

module.exports = defineConfig ({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: 'cypress/e2e/**/*.cy.js',
    setupNodeEvents(on, config) {
      // Listeners para o Cypress
    },
  },
});
