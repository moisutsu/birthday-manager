// import Head from 'next/head';
import React from "react";
import styled from 'styled-components';
import Link from "next/link";

import { baseStyle } from "src/styles";

const Component: React.FCX = () => {
  return (
    <main>
      <h1>
        Add Page!
      </h1>
      <Link href="/"><a>Home</a></Link>
    </main>
  )
}

const StyledComponent = styled(Component)`
  ${baseStyle}
`;

export default StyledComponent
