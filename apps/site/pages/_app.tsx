import type { AppProps } from "next/app";
import { globalCss, createTheme } from "@nextui-org/react";
import {
  lightTheme as rainbowLightTheme,
  darkTheme as rainbowDarkTheme,
} from "@rainbow-me/rainbowkit";
import { ChainProvider } from "../../../packages/chain/src/ChainProvider";

const lightTheme = createTheme({
  type: "light",
  className: "light",
});

const darkTheme = createTheme({
  type: "dark",
  className: "dark",
});

const globalStyles = globalCss({
  html: {
    overflowX: "hidden",
    overflowY: "auto",
  },

  body: {
    margin: 0,
    backgroundColor: "$background",
    minHeight: "100vh",
  },

  button: {
    fontFamily: "$heading",
  },

  "h1, h2, h3, h4, h5, h6": {
    fontFamily: "$heading",
  },

  p: {
    fontFamily: "$body",
  },

  svg: { display: "block" },

  "pre, code": { margin: 0, fontFamily: "$mono" },

  "::selection": {
    backgroundColor: "$violet5",
  },
});

const lightWallet = rainbowLightTheme();
const darkWallet = rainbowDarkTheme();

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ChainProvider
      appTheme={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
      walletTheme={{ lightMode: lightWallet, darkMode: darkWallet }}
    >
      <Component {...pageProps} />
    </ChainProvider>
  );
}

export default MyApp;
