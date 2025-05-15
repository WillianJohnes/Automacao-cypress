const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '83mtgq',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto Cypress',
      reportPageTitle: 'Projeto Cypress',
    },
    baseUrl: "http://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
