import { globalCss } from "@nextui-org/react";
import { ChainProvider } from "../../../packages/ui/src/ChainProvider";

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

function MyApp({ Component, pageProps }) {
  globalStyles();
  return (
    <ChainProvider>
      <Component {...pageProps} />
    </ChainProvider>
  );
}

export default MyApp;
