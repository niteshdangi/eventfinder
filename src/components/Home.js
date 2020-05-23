import React from "react";
import Search from "./search";
import ListEvent from "./ListEvent";

const Home = () => {
  return (
    <div className="container">
      <div className="col" style={{ marginTop: 20 }}>
        <Search />
        <ListEvent />
      </div>
    </div>
  );
};

export default Home;
