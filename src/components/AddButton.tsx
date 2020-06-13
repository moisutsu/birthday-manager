import React from "react";
import styled from "styled-components";

import { PeopleInfo } from "src/types";

type Props = Readonly<{
  addPeopleInfo: (info: PeopleInfo) => void;
}>;

const Component: React.FCX<Props> = ({ addPeopleInfo }) => {
  return (
    <button
      onClick={() => {
        addPeopleInfo({
          id: "c",
          name: "takeshi",
          date: {
            year: 2000,
            month: 3,
            day: 4,
          },
        });
      }}
    >
      追加
    </button>
  );
};

const StyledComponent = styled(Component)``;

export default StyledComponent;
