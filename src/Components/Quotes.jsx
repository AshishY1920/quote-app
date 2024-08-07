import React, { Fragment } from "react";

const Quotes = ({ quote, author }) => {
  return (
    <Fragment>
      <blockquote>{quote}</blockquote>
    </Fragment>
  );
};

export default Quotes;
