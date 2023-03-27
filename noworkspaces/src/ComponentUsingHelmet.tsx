import React from "react";
import { Helmet } from "react-helmet-async";

function ComponentUsingHelmet({
  children = [],
  title,
}: {
  children?: JSX.Element[] | JSX.Element | string;
  title: string;
  action?: JSX.Element;
  logo?: React.ReactElement;
  sticky?: boolean;
}) {
  return (
    <React.Fragment>
      <Helmet title={title} />
    </React.Fragment>
  );
}

export default ComponentUsingHelmet;
