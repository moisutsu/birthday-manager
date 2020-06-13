import React from "react";
import styled from "styled-components";

type Props = Readonly<{
  name: string;
  date: string;
}>;

const Component: React.FCX<Props> = ({ name, date }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{date}</p>
      <button>削除</button>
    </li>
  );
};

const StyledComponent = styled(Component)``;

export default StyledComponent;
