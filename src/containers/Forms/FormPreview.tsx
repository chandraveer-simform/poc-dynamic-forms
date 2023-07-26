import React, { useEffect, useState } from "react";

import { useParams, useLocation } from "react-router";

import {
  formData,
  formsDataFieldsInterface,
} from "../../page/FormList/formData";
import Controller from "../../components/Controller";
import { Button, Form } from "antd";

interface Props {}

const FormPreview: React.FC = (props: Props) => {
  const [formField, setFormField] = useState({} as formsDataFieldsInterface);
  const params = useParams();
  const [form] = Form.useForm();

  const formId = params?.id;

  const getFormFields = ({ formId }: any) => {
    setFormField(formData.filter((field) => field.id === formId)[0]);
  };

  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
  };

  useEffect(() => {
    getFormFields({ formId });
  }, [formId]);
  return (
    <div className="page-container">
      <h1>{formField?.label}</h1>
      <Form onFinish={onFinish} form={form} name={"provider"}>
        {Object.keys(formField).length !== 0 &&
          (formField.fields || []).map((field: any) => {
            const { name, label, labelVisible } = field || {};
            return (
              <Form.Item name={name} label={labelVisible && label}>
                <Controller {...field} />
              </Form.Item>
            );
          })}
      </Form>
    </div>
  );
};

export default FormPreview;
