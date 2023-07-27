import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

type DataSource = /*unresolved*/ any;

interface Props {
  columns: ColumnsType;
  dataSource: DataSource;
  [key: string]: any;
}

const BaseTable: React.FC<Props> = ({ columns, dataSource, ...rest }) => {
  return <Table columns={columns} dataSource={dataSource} {...rest} />;
};
export default BaseTable;
