module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: [
    "../../../packages/ui/src/**/*.stories.mdx",
    "../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)",
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
