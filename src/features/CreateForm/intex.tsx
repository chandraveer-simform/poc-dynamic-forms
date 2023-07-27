import React from "react";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, Select, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { postDynamicFrom } from "./formCreateSlice";
import { FieldsInterface } from "../../store/actions/dynamicForms";
import BaseSelect from "../../components/BaseSelect";
import { AllFields, ComponentFilesInterface } from "../../utils/fields";

interface Props {}
const { Option } = Select;
const generateSelectChildrens = (values: any[], customFunction: any) => {
  return (values || []).map((item) => {
    const { id, name, value } = customFunction ? customFunction(item) : item;
    return (
      <Option key={id} value={value !== undefined ? value : id}>
        {name}
      </Option>
    );
  });
};

const CreateForm: React.FC = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const createNewForm = async (values: FieldsInterface) => {
    console.log("createNewForm", values);
    dispatch(postDynamicFrom(values));
  };

  const onFinish = (values: any) => {
    console.log("Received values of form:", values);

    createNewForm(values);
  };
  // component: any;
  // name?: string;
  // label?: string;
  // labelVisible?: boolean;
  // placeholder?: string;
  // htmlType?: string;
  // type: any;
  // id: string
  return (
    <Form
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      // style={{ maxWidth: 600 }}
      autoComplete="off"
    >
      <Row>
        <Col>
          <Form.Item
            name={"name"}
            rules={[{ required: true, message: "Missing name of form" }]}
          >
            <Input placeholder="Form Name" />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            name={"label"}
            rules={[{ required: true, message: "Missing label" }]}
          >
            <Input placeholder="Form Label" />
          </Form.Item>
        </Col>
      </Row>
      <Form.List name="fields">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "component"]}
                  rules={[
                    {
                      required: true,
                      message: "Required",
                    },
                  ]}
                  label={"Field Name"}
                  style={{ width: 250 }}
                >
                  <BaseSelect
                    className="customSelector"
                    placeholder="Select week"
                    onChange={(e: any) => console.log(e)}
                    filterOption={(input: any, option: any) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {generateSelectChildrens(
                      Object.entries(AllFields) || [],
                      (item: ComponentFilesInterface[]) => {
                        const { component, name } = item[1];
                        return {
                          id: component,
                          name: name,
                        };
                      }
                    )}
                  </BaseSelect>
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, "name"]}
                  rules={[{ required: true, message: "Missing name of field" }]}
                >
                  <Input placeholder="Name Of Field" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "label"]}
                  rules={[{ required: true, message: "Missing label name" }]}
                >
                  <Input placeholder="Label Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "placeholder"]}
                  rules={[
                    { required: true, message: "Missing placeholder text" },
                  ]}
                >
                  <Input placeholder="Label Placeholder" />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateForm;
