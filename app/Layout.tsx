import React, { ReactElement } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <html>
      <head>
        <title>Next js Sooho</title>
      </head>
      <body>
        <header>header</header>
        <section>{children}</section>
        <footer>Footer</footer>
      </body>
    </html>
  );
};

export default Layout;
