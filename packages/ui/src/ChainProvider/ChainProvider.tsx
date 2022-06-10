import React from 'react';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider, useTheme } from 'next-themes';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme as rainbowLightTheme,
  darkTheme as rainbowDarkTheme,
} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

export const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

export const { connectors } = getDefaultWallets({
  appName: 'Chain',
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const lightTheme = createTheme({
  type: 'light',
});

const darkTheme = createTheme({
  type: 'dark',
});

export interface ChainProps {
  children: React.ReactNode;
  theme?: any;
}

const lightWallet = rainbowLightTheme();
const darkWallet = rainbowDarkTheme();

export function ChainProvider(props: ChainProps) {
  const { children, theme } = props;
  return (
    <ThemeProvider
      enableColorScheme
      disableTransitionOnChange
      defaultTheme="system"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider theme={theme}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            theme={theme.className === 'light' ? lightWallet : darkWallet}
            chains={chains}
          >
            {children}
          </RainbowKitProvider>
        </WagmiConfig>
      </NextUIProvider>
    </ThemeProvider>
  );
}
