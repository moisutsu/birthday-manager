import React from "react";

declare module "react" {
  type FCX<P = {}> = React.FunctionComponent<P & { className?: string }>;
}

type PeopleInfo = {
  name: string;
  date: Date;
};

type Date = {
  year: number;
  month: number;
  day: number;
};
