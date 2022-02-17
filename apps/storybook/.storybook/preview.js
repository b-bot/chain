import React from 'react';
import { themes } from '@storybook/theming';
import { darkTheme } from '../stitches.config';
import { ThemeProvider } from 'next-themes';

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: {
      ...themes.dark,
      appBg: '#232323',
      appContentBg: '#232323',
      brandTitle: 'Polymorphic',
      brandUrl: 'https://polyphonic.io',
      brandImage: 'https://polyphonic.io/seo/favicon.ico',
    },
    // Override the default light theme
    light: {
      ...themes.normal,
      appBg: '#e8e8e8',
      appContentBg: '#e8e8e8',
      brandTitle: 'Polymorphic',
      brandUrl: 'https://polyphonic.io',
      brandImage: 'https://polyphonic.io/seo/favicon.ico',
    },
    classTarget: 'html',
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true,
  },
  docs: {
    theme: themes.normal,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
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
      value={{ light: 'light', dark: darkTheme }}
      enableSystem={false}
      enableColorScheme={false}
      disableTransitionOnChange
    >
      <Story />
    </ThemeProvider>
  ),
];
