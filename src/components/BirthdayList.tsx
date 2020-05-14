import React from "react";
import styled from "styled-components";
import BirthdayCard from "src/components/BirthdayCard";
import { PeopleInfo, Date } from "src/types";
import { For } from "react-loops";

type Props = Readonly<{
  peopleInfoArray: PeopleInfo[];
}>;

const Component: React.FCX<Props> = ({ peopleInfoArray }) => {
  const convertDate2String = (date: Date) =>
    `${date.year}年${date.month}月${date.day}日`;
  return (
    <ul>
      <For of={peopleInfoArray} ifEmpty={<li>データなし</li>}>
        {item => (
          <BirthdayCard name={item.name} date={convertDate2String(item.date)} />
        )}
      </For>
    </ul>
  );
};

const StyledComponent = styled(Component)``;

export default StyledComponent;
