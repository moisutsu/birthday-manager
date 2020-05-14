// import Head from 'next/head';
import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Layout from "src/layouts";

import { baseStyle } from "src/styles";

const Component: React.FCX = () => {
  return (
    <Layout>
      <main>
        <h1>Add Page!</h1>
        <Link href="/">
          <a>Home</a>
        </Link>
      </main>
    </Layout>
  );
};

const StyledComponent = styled(Component)`
  ${baseStyle}
`;

export default StyledComponent;
