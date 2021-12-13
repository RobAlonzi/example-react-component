const path = require('path');

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    // Make whatever fine-grained changes you need
    config.resolve.alias["@"] = path.resolve(__dirname, "../src");
    // Return the altered config
    return config;
  },
};
