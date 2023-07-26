import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

type DataSource = /*unresolved*/ any;

interface Props {
  columns: ColumnsType;
  dataSource: DataSource;
}

const BaseTable: React.FC<Props> = ({ columns, dataSource }) => {
  return <Table columns={columns} dataSource={dataSource} />;
};
export default BaseTable;
