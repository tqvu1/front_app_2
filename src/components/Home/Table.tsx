import React from "react";
import useGetData from "../../queries/useGetData";

const Table: React.FC = () => {
  const { queryGetData } = useGetData();
  console.log(queryGetData);
  return <div>Table</div>
}

export default Table;