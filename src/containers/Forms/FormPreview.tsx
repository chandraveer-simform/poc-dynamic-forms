import React, { useEffect, useState } from "react";

import { useParams, useLocation } from "react-router";

import { formData } from "../../page/FormList/formData";
import Controller from "../../components/Controller";

interface Props {}
const onFinish = (values: any) => {
  console.log("Received values of form:", values);
};

const fieldMeetsCondition = (values: any) => (field: any) => {
  if (field.conditional && field.conditional.field) {
    const segments = field.conditional.field.split("_");
    const fieldId = segments[segments.length - 1];
    return values[fieldId] === field.conditional.value;
  }
  return true;
};

const FormPreview: React.FC = (props: Props) => {
  const [formField, setFormField] = useState([]);
  const params = useParams();

  const formId = params?.id;

  const getFormFields = ({ formId }: any) => {
    setFormField(formData.filter((field) => field.id === formId));
  };

  useEffect(() => {
    getFormFields({ formId });
  }, [formId]);
  return (
    <>
      <h1>{formField[0]?.label}</h1>
      {formField.length > 0 &&
        (formField[0].fields || []).map((field: any) => {
          return <Controller {...field} />;
        })}
    </>
  );
};

export default FormPreview;
