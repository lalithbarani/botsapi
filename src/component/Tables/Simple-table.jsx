import { Table } from "antd";
import React from "react";
import "../../styles/app-stylepage/simple-table.scss";

const SimpleTable = ({
  columns = [],
  data = [],
  pagination = false,
  border = false,
  before = false,
  ...props
}) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={pagination}
      className={"simple-table"}
      bordered={border}
      before={before}
      {...props}
    />
  );
};

export default SimpleTable;
