import React from "react";
import styled from "styled-components";

const Component: React.FCX = ({ className }) => {
  return (
    <header className={className}>
      <h1>Birthday-Manager</h1>
    </header>
  );
};

const StyledComponent = styled(Component)`
  // position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  width: 100%;
  > nav {
    padding: 2rem;
    > ul {
      display: flex;
      justify-content: center;
      list-style: none;
      > li {
        > a {
          padding: 2rem;
        }
      }
    }
  }
`;

export default StyledComponent;
