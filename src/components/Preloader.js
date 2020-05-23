import React from "react";

const Preloader = () => {
  return (
    <div
      className="spinner center"
      style={{ width: "100%", textAlign: "center", fontSize: 18 }}>
      <i className="fa fa-spinner fa-spin" /> Loading...
    </div>
  );
};

export default Preloader;
