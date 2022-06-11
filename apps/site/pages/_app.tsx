import type { AppProps } from "next/app";
import { globalCss, createTheme } from "@nextui-org/react";
import { ThemeProvider, useTheme } from "next-themes";
import { ChainProvider } from "../../../packages/ui/src/ChainProvider";

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

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, setTheme } = useTheme();
  globalStyles();
  return (
    <ChainProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Component {...pageProps} />
    </ChainProvider>
  );
}

export default MyApp;
