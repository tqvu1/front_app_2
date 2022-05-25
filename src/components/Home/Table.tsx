import { TableProps } from "antd";
import React from "react";
import useGetData from "../../queries/useGetData";
import { LoadingOutlined } from '@ant-design/icons';

const useTable = () => {
  const { queryGetData } = useGetData();
  console.log(queryGetData);

  const tableProps: TableProps<any> = {
    loading: {
      spinning: queryGetData.isFetching,
      indicator: <LoadingOutlined />,
    },
    dataSource: queryGetData.data?.data?.data,
  }

  return tableProps;
}

export default useTable;