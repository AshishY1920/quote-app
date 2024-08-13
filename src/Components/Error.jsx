import React from "react";
import ErrorIcon from "../Assets/error.gif";

const Error = ({ message }) => {
  return (
    <div className="error-container">
      <img src={ErrorIcon} alt="" />
      <h4>{message}</h4>
    </div>
  );
};

export default Error;
