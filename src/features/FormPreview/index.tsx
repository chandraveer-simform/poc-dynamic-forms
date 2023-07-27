import React, { useEffect, useState } from "react";

import { useParams } from "react-router";

import Controller from "../../components/Controller";
import { Form } from "antd";
import { FormsDataFieldsInterface } from "../../store/actions/dynamicForms";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

interface Props {}

const FormPreview: React.FC = (props: Props) => {
  const { data = [] } = useSelector(
    (state: RootState) => state.dynamicFormReducer
  );

  const [formField, setFormField] = useState({} as FormsDataFieldsInterface);
  const params = useParams();
  const [form] = Form.useForm();

  const formId = params?.id;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getFormFields = ({ formId }: any) => {
    setFormField(data.filter((field) => field.id === formId)[0]);
  };

  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
  };

  useEffect(() => {
    getFormFields({ formId });
  }, [formId, getFormFields]);
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
