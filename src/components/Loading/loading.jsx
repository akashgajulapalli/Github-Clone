import React from "react";
import spinner from "../../images/spinner.gif";
import "./loading.css";

const Loading = () => {
  return <div className="loading">
      <img src={spinner} alt="Loading" />
  </div>;
};

export default Loading;
