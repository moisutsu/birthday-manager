import React from "react";
import Head from "next/head";
import Header from "src/layouts/Header";
import Footer from "src/layouts/Footer";

const Layout: React.FunctionComponent = ({ children }) => (
  <div>
    <Head>
      <title>Birthday-Manager</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
