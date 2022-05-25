import React from "react";
import Search from "./Search";
import Table from "./Table";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Search />
      <Table />
    </React.Fragment>
  );
}

export default Home;