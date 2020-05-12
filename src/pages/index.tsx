// import Head from 'next/head';
import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Header from "src/components/Header";

import { baseStyle } from "src/styles";

const Component: React.FCX = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Index Page!</h1>
        <Link href="/add">
          <a>Add</a>
        </Link>
        <Link href="/remove">
          <a>Remove</a>
        </Link>
      </main>
    </>
  );
};

const StyledComponent = styled(Component)`
  ${baseStyle}
`;

export default StyledComponent;
