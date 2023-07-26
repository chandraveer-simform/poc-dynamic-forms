import React from "react";
import type { ColumnsType } from "antd/es/table";

import BaseTable from "../../components/BaseTable/BaseTable";
import { Col, Row, Space } from "antd";
import { Link } from "react-router-dom";
import { ActionRoutes } from "../../routes/routesData";
import { formData } from "./formData";

interface Props {}

interface DataType {
  key: string;
  name: string;
  date: string;
  id: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "label",
    key: "label",
    render: (text, record) => (
      <Link to={`${ActionRoutes.PREVIEW_FORM.url}${record.id}`}>{text}</Link>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Link to="#">Edit {record.name}</Link>
        <Link to="#">Delete</Link>
      </Space>
    ),
  },
];

const FormList: React.FC = (props: Props, data: DataType) => {
  return (
    <>
      <Row justify="end">
        <Col span={2}>
          <Link
            to={ActionRoutes.CREATE_FORM.path}
            className={ActionRoutes.CREATE_FORM.cName}
          >
            {ActionRoutes.CREATE_FORM.title}
          </Link>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <BaseTable columns={columns} dataSource={formData} />
        </Col>
      </Row>
    </>
  );
};

export default FormList;
