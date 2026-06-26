import { DocsLayout, type DocsLayoutProps } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import { source } from "../../lib/source";

const docsOptions: DocsLayoutProps = {
  tree: source.pageTree,
  nav: {
    title: "Chain Docs",
  },
  githubUrl: "https://github.com/b-bot/chain",
  sidebar: {
    defaultOpenLevel: 1,
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
