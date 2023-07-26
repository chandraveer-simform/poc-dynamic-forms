import React from "react";
import { Col, Row } from "antd";

import NavBar from "./components/NavBar/NavBar";
import AppRoutes from "./routes/AppRoutes";

import "./styles/Common.css";

interface Props {
  name: string;
}

const App: React.FC<Props> = ({ name }) => {
  return (
    <>
      <Row className="header">
        <Col>
          <h3>DF</h3>
        </Col>
      </Row>
      <Row>
        <Col span={3}>
          <NavBar />
        </Col>
        <Col span={20} className="page-container">
          <AppRoutes />
        </Col>
      </Row>
    </>
  );
};

export default App;
