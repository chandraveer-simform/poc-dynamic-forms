import React, { useEffect } from "react";
import type { ColumnsType } from "antd/es/table";

import BaseTable from "../../components/BaseTable/BaseTable";
import { Col, Row, Space } from "antd";
import { Link } from "react-router-dom";
import { ACTION_ROUTES } from "../../routes/routesData";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchDynamicFromList } from "./dynamicFormsSlice";

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
      <Link to={`${ACTION_ROUTES.PREVIEW_FORM.url}${record.id}`}>{text}</Link>
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

const DynamicFormsList: React.FC = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const { count = 0, data = [] } = useSelector(
    (state: RootState) => state.dynamicFormReducer
  );

  const fetchAllFormsList = async () => {
    dispatch(fetchDynamicFromList(1));
  };

  useEffect(() => {
    fetchAllFormsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {count}
      <Row justify="end">
        <Col span={2}>
          <Link
            to={ACTION_ROUTES.CREATE_FORM.path}
            className={ACTION_ROUTES.CREATE_FORM.cName}
          >
            {ACTION_ROUTES.CREATE_FORM.title}
          </Link>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <BaseTable columns={columns} dataSource={data} pagination={false} />
        </Col>
      </Row>
    </>
  );
};

export default DynamicFormsList;
