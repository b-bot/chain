import React from "react";
import { themes } from "@storybook/theming";
import { createTheme } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { useDarkMode } from "storybook-dark-mode";
import { ChainProvider } from "../../../packages/ui/src/ChainProvider";

const lightTheme = createTheme({
  type: "light",
  className: "light",
});

const darkTheme = createTheme({
  type: "dark",
  className: "dark",
});

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: {
      ...themes.dark,
      appBg: "#232323",
      appContentBg: "#232323",
      brandTitle: "Chain",
      brandUrl: "https://www.npmjs.com/package/chain",
      brandImage: "https://chain.byronpolley.com/storybook.png",
    },
    // Override the default light theme
    light: {
      ...themes.normal,
      appBg: "#e8e8e8",
      appContentBg: "#e8e8e8",
      brandTitle: "Chain",
      brandUrl: "https://www.npmjs.com/package/chain",
      brandImage: "https://chain.byronpolley.com/storybook.png",
    },
    classTarget: "html",
    darkClass: "dark",
    lightClass: "light",
    stylePreview: true,
  },
  docs: {
    theme: themes.normal,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider
      attribute="class"
      value={{ light: "light" }}
      enableSystem={false}
      enableColorScheme={false}
      disableTransitionOnChange
    >
      <ChainProvider theme={useDarkMode() ? darkTheme : lightTheme}>
        <Story />
      </ChainProvider>
    </ThemeProvider>
  ),
];
