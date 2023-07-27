import React, { useState } from "react";

import { Button, Form, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { postDynamicFrom } from "./formCreateSlice";
import { FieldsInterface } from "../../store/actions/dynamicForms";
import { ButtonComponentProperty } from "../../utils/fields";
import CustomizedForm from "../../components/CustomizedForm";
import { removeSpaceCharacter } from "../../utils/helper";
import BaseInput from "../../components/BaseInput";
import BaseButton from "../../components/BaseButton";

interface Props {}

const CreateForm: React.FC = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [form] = Form.useForm();
  const [currentComponentFields, setCurrentComponent] = useState<any>();
  // const [fields, setFields] = useState<FieldsInterface[]>([]);

  const onSelectComponent = (e: string, name: string) => {
    setCurrentComponent({ component: e, name });
  };

  const createNewForm = async (values: FieldsInterface) => {
    dispatch(postDynamicFrom(values));
  };

  const onFinish = (values: any) => {
    values["name"] = values["label"] && removeSpaceCharacter(values["label"]);
    values["fields"] = [...values["fields"], ...ButtonComponentProperty];
    console.log("Received values of form:", values);

    createNewForm(values);
  };

  return (
    <Form
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
      form={form}
    >
      <Row>
        <Col>
          <Form.Item
            name={"label"}
            label="Form Name"
            rules={[{ required: true, message: "Missing form name" }]}
          >
            <BaseInput placeholder="Form Name" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <CustomizedForm
          currentComponentFields={currentComponentFields}
          onChange={(e: any, name: any) => {
            onSelectComponent(e, name);
          }}
          form={form}
        />
      </Row>
      <Form.Item>
        <BaseButton type="primary" htmlType="submit">
          Submit
        </BaseButton>
      </Form.Item>
    </Form>
  );
};

export default CreateForm;
