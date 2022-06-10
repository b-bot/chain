import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import Layout from "../components/Layout";

const Index = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <Layout>
      <ConnectButton />
      The current theme is: {type}
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </Layout>
  );
};

export default Index;
