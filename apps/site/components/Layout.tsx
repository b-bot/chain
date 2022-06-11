import React from "react";
import Meta from "./Meta";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      {children}
    </>
  );
};

export default Layout;
