// import Head from 'next/head';
import React from "react";
import styled from "styled-components";
import Layout from "src/layouts";
import BirthdayList from "src/components/BirthdayList";

import { baseStyle } from "src/styles";
import { PeopleInfo } from "src/types";

const dummyPeopleInfoArray: PeopleInfo[] = [
  {
    id: "a",
    name: "taro",
    date: {
      year: 2000,
      month: 1,
      day: 1,
    },
  },
  {
    id: "b",
    name: "hanako",
    date: {
      year: 2010,
      month: 11,
      day: 14,
    },
  },
];

const Component: React.FCX = () => {
  return (
    <>
      <Layout>
        <main>
          <h1>Index Page!</h1>
          <BirthdayList peopleInfoArray={dummyPeopleInfoArray} />
          <p>add</p>
          <p>Remove</p>
        </main>
      </Layout>
    </>
  );
};

const StyledComponent = styled(Component)`
  ${baseStyle}
`;

export default StyledComponent;
