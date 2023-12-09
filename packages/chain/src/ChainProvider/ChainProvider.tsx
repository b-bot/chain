import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
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

export interface ChainProps {
  children: React.ReactNode;
  appTheme?: any;
  walletTheme?: any;
}

export function ChainProvider(props: ChainProps) {
  const { children, appTheme, walletTheme } = props;
  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme="system"
      enableColorScheme
      attribute="class"
      value={appTheme}
    >
      <NextUIProvider>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider theme={walletTheme} chains={chains}>
            {children}
          </RainbowKitProvider>
        </WagmiConfig>
      </NextUIProvider>
    </ThemeProvider>
  );
}
