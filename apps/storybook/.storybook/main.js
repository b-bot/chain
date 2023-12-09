module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: [
    "../../../packages/chain/src/**/*.stories.mdx",
    "../../../packages/chain/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-dark-mode",
  ],
  features: {
    postcss: false,
  },
};
