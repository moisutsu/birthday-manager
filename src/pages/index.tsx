// import Head from 'next/head';
import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Layout from "src/layouts";
import BirthdayList from "src/components/BirthdayList";

import { baseStyle } from "src/styles";
import { PeopleInfo } from "src/types";

const dummyPeopleInfoArray: PeopleInfo[] = [
  {
    name: "taro",
    date: {
      year: 2000,
      month: 1,
      day: 1,
    },
  },
  {
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
          <Link href="/add">
            <a>Add</a>
          </Link>
          <Link href="/remove">
            <a>Remove</a>
          </Link>
        </main>
      </Layout>
    </>
  );
};

const StyledComponent = styled(Component)`
  ${baseStyle}
`;

export default StyledComponent;
