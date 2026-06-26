import "fumadocs-ui/style.css";
import "./globals.css";

import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  applicationName: "Chain",
  title: {
    default: "Chain Docs",
    template: "%s • Chain Docs",
  },
  description: "Documentation for Chain, an AI toolkit being built from a modern Monokit-style foundation.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
