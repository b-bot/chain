import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <style jsx global>{`
        body {
          font-family: Roboto, sans-serif;
          width: auto;
          color: #e1e1e1;
          background: #282828;
        }
      `}</style>
    </>
  );
};

export default Layout;
