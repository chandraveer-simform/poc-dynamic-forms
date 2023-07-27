import React, { Children } from "react";
import { Button, Col, Form, Row, Select, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import BaseInput from "../BaseInput";
import Controller from "../Controller";
import {
  AllComponentFieldsInterface,
  AllFields,
  FieldsComponentInterface,
} from "../../utils/fields";
import BaseSelect from "../BaseSelect";

export interface FieldData {
  name: string | number | (string | number)[];
  value?: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}

interface CustomizedFormProps {
  onChange: (e: any, name: any) => void;
  currentComponentFields: any;
  [name: string]: any;
}
const { Option } = Select;

const generateSelectChildrens = (values: any[], customFunction: any) => {
  return (values || []).map((item) => {
    const { id, name, value } = customFunction ? customFunction(item) : item;
    if (id === AllFields.button.component) return;
    return (
      <Option key={id} value={value !== undefined ? value : id}>
        {name}
      </Option>
    );
  });
};

const CustomizedForm: React.FC<CustomizedFormProps> = ({
  onChange,
  currentComponentFields,
  form,
}) => {
  return (
    <Form.List name="fields">
      {(fields, { add, remove, move }) => {
        return (
          <Row>
            <Col span={24}>
              {fields.map(({ key, name, ...restField }) => {
                const { component } = form.getFieldValue("fields")[name] || {};
                const { property } = AllFields[component] || {};
                console.log(property);
                return (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="baseline"
                  >
                    <Col span={2}>
                      <Form.Item
                        {...restField}
                        name={[name, "component"]}
                        rules={[
                          {
                            required: true,
                            message: "Required",
                          },
                        ]}
                        label={"Select Field Name"}
                        style={{ width: 250 }}
                      >
                        <BaseSelect
                          className="customSelector"
                          placeholder="Select component"
                          onChange={(e: any) => onChange(e, name)}
                          filterOption={(input: any, option: any) =>
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {generateSelectChildrens(
                            Object.entries(AllFields) || [],
                            (item: AllComponentFieldsInterface[]) => {
                              const { component, name } = item[1];
                              return {
                                id: component,
                                name: name,
                              };
                            }
                          )}
                        </BaseSelect>
                      </Form.Item>
                    </Col>
                    {property?.name && (
                      <Form.Item
                        {...restField}
                        name={[name, "name"]}
                        label={"Field Name"}
                        rules={[
                          {
                            required: true,
                            message: "Missing name of field",
                          },
                        ]}
                      >
                        <BaseInput width={"100%"} placeholder="Name Of Field" />
                      </Form.Item>
                    )}
                    {property?.label && (
                      <Col>
                        <Form.Item
                          {...restField}
                          name={[name, "label"]}
                          label={"Field Label Name"}
                          rules={[
                            { required: true, message: "Missing label name" },
                          ]}
                        >
                          <BaseInput placeholder="Label Name" />
                        </Form.Item>
                      </Col>
                    )}
                    {property?.placeholder && (
                      <Col>
                        <Form.Item
                          {...restField}
                          name={[name, "placeholder"]}
                          label={"Field Placeholder"}
                          rules={[
                            {
                              required: true,
                              message: "Missing placeholder text",
                            },
                          ]}
                        >
                          <BaseInput placeholder="Field Placeholder" />
                        </Form.Item>
                      </Col>
                    )}

                    {component && (
                      <Col>
                        <Form.Item label="Field">
                          {
                            <Controller
                              component={component}
                              label={component}
                              placeholder={component}
                            />
                          }
                        </Form.Item>
                      </Col>
                    )}

                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                );
              })}
            </Col>

            <Col>
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
            </Col>
          </Row>
        );
      }}
    </Form.List>
  );
};

export default CustomizedForm;
