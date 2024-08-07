import React, { Fragment } from "react";

const Loading = ({ height }) => {
  return (
    <Fragment>
      <div className="container-loading" style={{ height: height && "100vh" }}>
        <div class="progress">
          <div class="indeterminate"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Loading;
