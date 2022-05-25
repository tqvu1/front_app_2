import React from "react";
import Search from "./Search";
import { Table } from "antd";
import useTable from "./Table";

const Home: React.FC = () => {
  const tableProps = useTable();
  return (
    <React.Fragment>
      <Search />
      <Table {...tableProps} />
    </React.Fragment>
  );
}

export default Home;