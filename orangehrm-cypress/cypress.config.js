const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
