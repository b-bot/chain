import type { ReactNode } from "react";

export function Card({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: ReactNode;
  href: string;
}) {
  return (
    <a className={className} href={href} rel="noopener noreferrer" target="_blank">
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
}
